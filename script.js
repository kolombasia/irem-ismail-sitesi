let noBtn = document.getElementById("noBtn");
let result = document.getElementById("result");
let popupImage = document.getElementById("popupImage");
let fontSize = 20;
let heartContainer = document.getElementById("heart-container");

// 🕓 Zamanlayıcı Başlangıç Tarihi: 1 Aralık 2024, saat 14:00
let startDate = new Date("2024-12-01T14:00:00");

function updateTimer() {
  let now = new Date();
  let diff = now - startDate;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((diff / (1000 * 60)) % 60);
  let seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").textContent =
    `İrem ve İsmail şunadır birlikte: ${days} gün, ${hours} saat, ${minutes} dakika, ${seconds} saniye 💞`;
}

// Her saniyede bir güncelle
setInterval(updateTimer, 1000);
updateTimer();

function yesClicked() {
  result.textContent = "Ben de seni seviyorum sevgilim 💖";
  popupImage.style.display = "block";
  startHeartRain();
}

function noClicked() {
  fontSize -= 2;
  if (fontSize <= 0) {
    noBtn.style.display = "none";
  } else {
    noBtn.style.fontSize = fontSize + "px";
    noBtn.style.padding = (fontSize / 2) + "px " + fontSize + "px";
  }
}

// 💖 Kalp Yağmuru
function startHeartRain() {
  let interval = setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }, 200);

  // 10 saniye sonra durdur
  setTimeout(() => clearInterval(interval), 10000);
}