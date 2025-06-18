let noBtn = document.getElementById("noBtn");
let result = document.getElementById("result");
let popupImage = document.getElementById("popupImage");
let fontSize = 20;

function yesClicked() {
  result.textContent = "Ben de seni seviyorum sevgilim 💖";
  popupImage.style.display = "block";
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