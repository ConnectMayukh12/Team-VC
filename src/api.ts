const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface CreateTurnPayload {
  session_id?: string | null;
  user_text: string;
  attachments?: any[];
  ui_context?: Record<string, any>;
  title_if_new?: string;
  session_config?: Record<string, any>;
}

export async function createTurn(payload: CreateTurnPayload) {
  const res = await fetch(`${API_BASE_URL}/api/v1/turns`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to create turn");
  }

  return res.json();
}

export async function getSession(sessionId: string) {
  const res = await fetch(
    `${API_BASE_URL}/api/v1/sessions/${sessionId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch session");
  }

  return res.json();
}

export async function getSessionTurns(sessionId: string) {
  const res = await fetch(
    `${API_BASE_URL}/api/v1/sessions/${sessionId}/turns`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch session turns");
  }

  return res.json();
}
