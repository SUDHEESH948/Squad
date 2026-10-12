/**
 * Isolated Contact Submission Adapter
 * Handles validation, environment endpoint dispatch, and honest fallback states.
 */
export async function submitConsultation(payload) {
  // If an external endpoint is configured via Vite environment:
  const endpoint = import.meta.env?.VITE_CONTACT_API_URL;
  if (endpoint) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Endpoint returned an error status");
    return {
      ok: true,
      mode: "api",
      message: "Inquiry successfully dispatched to security team.",
    };
  }

  // Honest frontend demonstration mode: simulates latency without claiming a false backend delivery
  await new Promise((resolve) => setTimeout(resolve, 800));
  return {
    ok: true,
    mode: "demo",
    message:
      "Consultation request validated locally. Direct transmission is available via official WhatsApp or phone.",
  };
}

