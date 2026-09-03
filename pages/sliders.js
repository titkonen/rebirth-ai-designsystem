document.querySelectorAll(".rb-slider").forEach((slider) => {
  const input = slider.querySelector(".rb-slider__input");
  const output = slider.querySelector(".rb-slider__value");
  if (!input || !output) return;

  const suffix = output.textContent?.replace(input.value, "") ?? "";
  const updateValue = () => {
    output.textContent = `${input.value}${suffix}`;
  };

  input.addEventListener("input", updateValue);
  updateValue();
});
