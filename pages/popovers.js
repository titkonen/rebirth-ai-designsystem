document.querySelectorAll(".rb-popover").forEach((popover) => {
  const trigger = popover.querySelector(".rb-popover__trigger");
  if (!trigger) return;

  trigger.addEventListener("click", () => {
    const isOpen = popover.classList.toggle("rb-popover--open");
    trigger.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!popover.contains(event.target)) {
      popover.classList.remove("rb-popover--open");
      trigger.setAttribute("aria-expanded", "false");
    }
  });
});
