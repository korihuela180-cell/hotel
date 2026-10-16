(function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Botón para cambiar el tema de la página
  const btnTema = document.createElement("button");
  btnTema.textContent = "🌙";
  btnTema.title = "Cambiar color de la página";
  btnTema.style.position = "fixed";
  btnTema.style.bottom = "20px";
  btnTema.style.right = "20px";
  btnTema.style.width = "50px";
  btnTema.style.height = "50px";
  btnTema.style.borderRadius = "50%";
  btnTema.style.border = "none";
  btnTema.style.cursor = "pointer";
  btnTema.style.fontSize = "22px";
  btnTema.style.backgroundColor = "#333";
  btnTema.style.color = "white";
  btnTema.style.zIndex = "9999";

  document.body.appendChild(btnTema);

  let tema = 0;

  btnTema.addEventListener("click", function () {
    tema = (tema + 1) % 3;

    if (tema === 0) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      btnTema.textContent = "🌙";
    }

    if (tema === 1) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      btnTema.textContent = "🌌";
    }

    if (tema === 2) {
      document.body.style.backgroundColor = "darkblue";
      document.body.style.color = "white";
      btnTema.textContent = "☀️";
    }
  });

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
