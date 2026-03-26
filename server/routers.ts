import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createBudgetRequest, getBudgetRequests, createBlogPost, getBlogPosts, getBlogPostBySlug, trackVisitor, getVisitorStats } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  budget: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(1),
        serviceType: z.string().min(1),
        description: z.string().min(1),
        budget: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          // Salvar no banco de dados
          await createBudgetRequest(input);
          
          // Enviar notificação para o proprietário com todos os detalhes
          const notificationContent = `
Nome: ${input.name}
Email: ${input.email}
Telefone: ${input.phone}
Tipo de Serviço: ${input.serviceType}
Descrição: ${input.description}
Orçamento Aproximado: ${input.budget || 'Não informado'}

Para responder, entre em contato com ${input.name} em ${input.email} ou ${input.phone}
          `.trim();
          
          await notifyOwner({
            title: `Nova Solicitação de Orçamento - ${input.name}`,
            content: notificationContent,
          });
          
          return { success: true };
        } catch (error) {
          console.error("[Budget] Erro ao processar orçamento:", error);
          throw error;
        }
      }),
    list: publicProcedure.query(() => getBudgetRequests()),
  }),

  blog: router({
    list: publicProcedure.query(() => getBlogPosts()),
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(({ input }) => getBlogPostBySlug(input.slug)),
  }),

  analytics: router({
    trackVisit: publicProcedure
      .input(z.object({
        sessionId: z.string(),
        userAgent: z.string().optional(),
        referrer: z.string().optional(),
        page: z.string().optional(),
      }))
      .mutation(({ input }) => trackVisitor(input)),
    getStats: publicProcedure.query(() => getVisitorStats()),
  }),
});

export type AppRouter = typeof appRouter;
