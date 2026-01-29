// script.js

const SUPABASE_URL = "https://bpxuhvttstjwtrspozqq.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_r3A1CJi24RWHY6P4CefKFg_6jNZ47XP";

const loginBtn = document.getElementById("loginBtn");
const keyInput = document.getElementById("keyInput");

loginBtn.addEventListener("click", () => {
  const keyDigitada = keyInput.value.trim();

  if (!keyDigitada) {
    alert("Digite a key.");
    return;
  }

  fetch(
    `${SUPABASE_URL}/rest/v1/keys?key=eq.${encodeURIComponent(
      keyDigitada
    )}&active=eq.true`,
    {
      method: "GET",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Erro na requisição");
      }
      return res.json();
    })
    .then((data) => {
      if (data.length > 0) {
        // key válida
        window.location.href = "painel.html";
      } else {
        alert("Key incorreta ou desativada.");
      }
    })
    .catch((err) => {
      console.error(err);
      alert("Erro ao validar a key.");
    });
});
