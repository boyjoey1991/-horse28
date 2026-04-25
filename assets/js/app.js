document.querySelectorAll("[data-page]").forEach((link) => {
  const current = document.body.dataset.page;
  if (link.dataset.page === current) {
    link.classList.add("active");
  }
});
