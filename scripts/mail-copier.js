const email = "gtrz.nat@gmail.com";

document.querySelector("#copyMail").addEventListener("click", async () => {
  await navigator.clipboard.writeText(email);

  showToast("✓ Email copied");
});
