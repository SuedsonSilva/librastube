console.log("LIBRASTUBE ativo no YouTube 🚀");

function createOverlay() {
  if (document.getElementById("librastube-overlay")) return;

  const overlay = document.createElement("div");
  overlay.id = "librastube-overlay";

  overlay.innerHTML = `
    <div id="lt-box">
      🤟 LIBRASTUBE
      <div id="lt-avatar">🙂</div>
    </div>
  `;

  document.body.appendChild(overlay);

  const style = document.createElement("style");
  style.innerHTML = `
    #librastube-overlay {
      position: fixed;
      top: 80px;
      right: 20px;
      z-index: 999999;
    }

    #lt-box {
      background: rgba(0,0,0,0.85);
      color: white;
      padding: 12px;
      border-radius: 12px;
      font-family: Arial;
      width: 160px;
      text-align: center;
      box-shadow: 0 0 10px black;
    }

    #lt-avatar {
      font-size: 40px;
      margin-top: 10px;
    }
  `;

  document.head.appendChild(style);
}

// 🔥 espera o body existir (YouTube é SPA)
function init() {
  if (document.body) {
    createOverlay();
  } else {
    setTimeout(init, 100);
  }
}

init();