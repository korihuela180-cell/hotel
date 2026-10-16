(function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  const toast = document.getElementById("toast");
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.setTimeout(function () {
      toast.classList.remove("show");
    }, 4200);
  }

  const searchForm = document.getElementById("search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const data = new FormData(searchForm);
      const llegada = data.get("llegada") || "sin fecha";
      const salida = data.get("salida") || "sin fecha";
      const huespedes = data.get("huespedes");
      const habitacion = data.get("habitacion");
      showToast(
        "Disponibilidad consultada para " +
          habitacion +
          " (" +
          huespedes +
          ") del " +
          llegada +
          " al " +
          salida +
          ". Te contactaremos para confirmar."
      );
    });
  }

  const reserveForm = document.getElementById("reserve-form");
  if (reserveForm) {
    reserveForm.addEventListener("submit", function (event) {
      event.preventDefault();
      reserveForm.reset();
      showToast("Reserva enviada. Te escribiremos para confirmar disponibilidad y depósito.");
    });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      contactForm.reset();
      showToast("Mensaje enviado. Responderemos a tu consulta lo antes posible.");
    });
  }
})();
