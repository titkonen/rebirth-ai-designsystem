const pagination = document.querySelector(".rb-pagination");

if (pagination) {
  const items = [...pagination.querySelectorAll(".rb-pagination__item")];
  const previous = pagination.querySelector('[aria-label="Previous page"]');
  const next = pagination.querySelector('[aria-label="Next page"]');
  let currentPage = items.findIndex((item) => item.hasAttribute("aria-current"));

  const updatePagination = () => {
    items.forEach((item, index) => {
      const isCurrent = index === currentPage;
      item.classList.toggle("rb-pagination__item--active", isCurrent);
      item.toggleAttribute("aria-current", isCurrent);
      item.setAttribute("aria-label", `Go to page ${index + 1}`);
    });

    if (previous) previous.disabled = currentPage === 0;
    if (next) next.disabled = currentPage === items.length - 1;
  };

  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      currentPage = index;
      updatePagination();
    });
  });

  previous?.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage -= 1;
      updatePagination();
    }
  });

  next?.addEventListener("click", () => {
    if (currentPage < items.length - 1) {
      currentPage += 1;
      updatePagination();
    }
  });

  updatePagination();
}
