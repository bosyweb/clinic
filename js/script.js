// SmileCare interactions: Bootstrap modal, form feedback and scroll animations.
document.addEventListener("DOMContentLoaded", function () {
  // Start scroll animations
  if (window.AOS) {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 70
    });
  }

  // Open the same appointment modal from every booking button
  const modalElement = document.getElementById("bookingModal");
  const bookingModal = new bootstrap.Modal(modalElement);
  document.querySelectorAll("[data-book]").forEach((button) => {
    button.addEventListener("click", () => bookingModal.show());
  });

  // Demo appointment form: front-end confirmation only (no database/email connected)
  const form = document.getElementById("appointmentForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.classList.add("d-none");
    successMessage.classList.remove("d-none");
  });

  // Reset the modal after it closes so it can be used again
  modalElement.addEventListener("hidden.bs.modal", function () {
    form.reset();
    form.classList.remove("d-none");
    successMessage.classList.add("d-none");
  });

  // Close mobile navigation after selecting a section
  document.querySelectorAll("#mainNav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("mainNav");
      const collapse = bootstrap.Collapse.getInstance(nav);
      if (collapse) collapse.hide();
    });
  });
});
