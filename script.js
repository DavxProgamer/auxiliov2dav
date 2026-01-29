const SUPABASE_URL = "https://bpxuhvttstjwtrspozqq.supabase.co";
const SUPABASE_KEY = "sb_publishable_r3A1CJi24RWHY6P4CefKFg_6jNZ47XP";

const loginBtn = document.getElementById("loginBtn");
const keyInput = document.getElementById("keyInput");

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

function showPopup() {
  popup.style.display = "flex";
}

function hidePopup() {
  popup.style.display = "none";
}

/* botão FECHAR funcionando */
closePopup.addEventListener("click", hidePopup);

/* botão ENTRAR */
loginBtn.addEventListener("click", async () => {
  const key = keyInput.value.trim();

  if (!key) {
    showPopup();
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
      window.location.href = "painel.html";
    } else {
      showPopup();
    }

  } catch (err) {
    showPopup();
  }
});