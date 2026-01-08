const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') || '';

interface CreateTurnPayload {
  session_id?: string | null;
  user_text: string;
  attachments?: any[];
  ui_context?: Record<string, any>;
  title_if_new?: string;
  session_config?: Record<string, any>;
}

export async function createTurn(payload: CreateTurnPayload) {
  const url = `${API_BASE_URL}/api/v1/turns`;
  console.log('Calling API:', url);
  console.log('Payload:', payload);
  
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('API Error:', res.status, errorText);
    throw new Error(`Failed to create turn: ${res.status} - ${errorText}`);
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

export async function getTurn(turnId: string) {
  const url = `${API_BASE_URL}/api/v1/turns/${turnId}`;
  console.log('Getting turn:', url);
  
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Get Turn Error:', res.status, errorText);
    throw new Error(`Failed to get turn: ${res.status} - ${errorText}`);
  }

  return res.json();
}
 export function getArtifactUrl(
  sessionId: string,
  turnId: string,
  filename: string
) {
  return `${API_BASE_URL}/api/v1/artifacts/${sessionId}/${turnId}/${filename}`;
}
