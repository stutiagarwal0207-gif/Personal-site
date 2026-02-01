const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const loveMessage = document.getElementById("loveMessage");

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {
  const container = document.querySelector(".container");
  const rect = container.getBoundingClientRect();

  const x = Math.random() * (rect.width - noBtn.offsetWidth - 10);
  const y = Math.random() * (rect.height - noBtn.offsetHeight - 10);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

yesBtn.addEventListener("click", () => {
  loveMessage.classList.remove("hidden");
});
