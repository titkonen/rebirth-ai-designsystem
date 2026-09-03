document.querySelectorAll(".rb-stepper").forEach((stepper) => {
  const input = stepper.querySelector(".rb-stepper__input");
  const buttons = stepper.querySelectorAll(".rb-stepper__button");
  if (!input || buttons.length < 2) return;

  const updateButtons = () => {
    const value = Number(input.value);
    const min = input.min === "" ? -Infinity : Number(input.min);
    const max = input.max === "" ? Infinity : Number(input.max);
    buttons[0].disabled = input.disabled || value <= min;
    buttons[1].disabled = input.disabled || value >= max;
  };

  buttons[0].addEventListener("click", () => {
    input.stepDown();
    input.dispatchEvent(new Event("input", { bubbles: true }));
    updateButtons();
  });
  buttons[1].addEventListener("click", () => {
    input.stepUp();
    input.dispatchEvent(new Event("input", { bubbles: true }));
    updateButtons();
  });
  input.addEventListener("input", updateButtons);
  updateButtons();
});
