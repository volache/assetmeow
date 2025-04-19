const GAS_API_URL = "https://script.google.com/macros/s/AKfycbzecRwUMW_u4nHEsBAXz4qgYXqrqkSbhEX_h2zGmMRsp8JnPNVmbx4pJPz1ZWxGI0H3/exec";

async function callGASAPI(action, payload = {}) {
  const res = await fetch(GAS_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, payload })
  });
  return res.json();
}

async function sha256(str) {
  const buffer = new TextEncoder().encode(str);
  const hash = await crypto.subtle.digest("SHA-256", buffer);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, "0")).join("");
}
