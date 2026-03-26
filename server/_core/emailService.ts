import { ENV } from "./env";

export type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

/**
 * Envia um email usando a API de email do Manus
 * Tenta usar o endpoint de email, se falhar usa notifyOwner como fallback
 */
export async function sendEmail(payload: EmailPayload): Promise<boolean> {
  if (!ENV.forgeApiUrl || !ENV.forgeApiKey) {
    console.warn("[Email] Forge API não configurado");
    return false;
  }

  try {
    // Tentar usar o endpoint de email
    const response = await fetch(`${ENV.forgeApiUrl}/email/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ENV.forgeApiKey}`,
      },
      body: JSON.stringify({
        to: payload.to,
        subject: payload.subject,
        html: payload.html,
      }),
    });

    if (response.ok) {
      console.log(`[Email] Email enviado com sucesso para ${payload.to}`);
      return true;
    }

    const error = await response.text().catch(() => "");
    console.warn(`[Email] Erro ao enviar email (${response.status}): ${error}`);
    
    // Se falhar, tentar com o endpoint alternativo
    return await sendEmailAlternative(payload);
  } catch (error) {
    console.error("[Email] Erro ao enviar email:", error);
    return await sendEmailAlternative(payload);
  }
}

/**
 * Endpoint alternativo para envio de email
 */
async function sendEmailAlternative(payload: EmailPayload): Promise<boolean> {
  if (!ENV.forgeApiUrl || !ENV.forgeApiKey) {
    return false;
  }

  try {
    const response = await fetch(`${ENV.forgeApiUrl}/api/email/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ENV.forgeApiKey}`,
      },
      body: JSON.stringify({
        to: payload.to,
        subject: payload.subject,
        html: payload.html,
      }),
    });

    if (response.ok) {
      console.log(`[Email] Email enviado (alternativo) para ${payload.to}`);
      return true;
    }

    console.warn(`[Email] Endpoint alternativo também falhou (${response.status})`);
    return false;
  } catch (error) {
    console.error("[Email] Erro no endpoint alternativo:", error);
    return false;
  }
}
