import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createBudgetRequest, getBudgetRequests, createBlogPost, getBlogPosts, getBlogPostBySlug, trackVisitor, getVisitorStats } from "./db";
import { notifyOwner } from "./_core/notification";
import { sendEmail } from "./_core/emailService";

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
        await createBudgetRequest(input);
        
        // Enviar email para o proprietário
        const emailHtml = `
          <h2>Nova Solicitação de Orçamento</h2>
          <p><strong>Nome:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Telefone:</strong> ${input.phone}</p>
          <p><strong>Tipo de Serviço:</strong> ${input.serviceType}</p>
          <p><strong>Descrição:</strong> ${input.description}</p>
          <p><strong>Orçamento Aproximado:</strong> ${input.budget || 'Não informado'}</p>
        `;
        
        await sendEmail({
          to: "renan.rfcomp@gmail.com",
          subject: `Nova Solicitação de Orçamento - ${input.name}`,
          html: emailHtml,
        });
        
        // Também notificar o proprietário no Manus
        await notifyOwner({
          title: "Nova Solicitação de Orçamento",
          content: `${input.name} (${input.email}) solicitou um orçamento para ${input.serviceType}. Descrição: ${input.description}`,
        });
        
        return { success: true };
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
