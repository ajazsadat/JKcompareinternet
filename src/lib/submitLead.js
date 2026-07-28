export async function submitLead(payload) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok || !data?.ok) {
    throw new Error(data?.error || 'Something went wrong while sending your request.');
  }

  return data;
}
