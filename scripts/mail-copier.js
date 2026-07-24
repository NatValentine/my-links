const email = "gtrz.nat@gmail.com";
const feedback = document.querySelector("#copied");

document.querySelector("#copyMail").addEventListener("click", async () => {
  await navigator.clipboard.writeText(email);

  feedback.style.display = "block";
  setTimeout(() => {
    feedback.style.display = "none";
  }, 3000);
});
