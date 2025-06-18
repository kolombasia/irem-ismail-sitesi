const yesBtn = document.getElementById("yesButton");
const noBtn = document.getElementById("noButton");
const resultText = document.getElementById("resultText");

yesBtn.addEventListener("click", () => {
  resultText.textContent = "Ben de seni seviyorum sevgilim 💖";
});

noBtn.addEventListener("click", () => {
  let size = parseFloat(window.getComputedStyle(noBtn).fontSize);
  if (size > 5) {
    noBtn.style.fontSize = (size - 2) + "px";
  } else {
    noBtn.style.display = "none";
  }
});