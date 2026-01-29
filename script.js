const SUPABASE_URL = "https://bpxuhvttstjwtrspozqq.supabase.co";
const SUPABASE_KEY = "sb_publishable_r3A1CJi24RWHY6P4CefKFg_6jNZ47XP";

document.getElementById("loginBtn").addEventListener("click", async () => {
  const key = document.getElementById("keyInput").value.trim();

  if (!key) {
    alert("Digite a key");
    return;
  }

  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/keys?key=eq.${key}&active=eq.true`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`
        }
      }
    );

    const data = await res.json();

    if (data.length > 0) {
      // Key válida → abre painel
      localStorage.setItem("access_ok", "1"); // pra proteger painel.html
      window.location.href = "painel.html";
    } else {
      alert("Acesso bloqueado. Compre seu acesso!");
    }
  } catch (err) {
    console.error(err);
    alert("Erro ao verificar a key. Tente novamente.");
  }
});