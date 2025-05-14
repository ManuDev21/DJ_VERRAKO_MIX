// --- EFECTO MÁQUINA DE ESCRIBIR ---
const typewriter = (element, text, speed = 100) => {
  let i = 0;
  const typing = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  };
  element.innerHTML = '';
  typing();
};

// Espera a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.getElementById("hero-title");
  if (heroText) {
    typewriter(heroText, "¡Bienvenido al Universo del DJ en Vivo!", 75);
  }

  // Inicializar AOS (Animaciones al hacer scroll)
  AOS.init({
    duration: 1300,
    once: true
  });

  // Smooth Scroll para navbar
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;
        document.querySelector(hash).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

function mostrarInfoAdicional() {
  const info = document.getElementById('info-adicional');
  const wily = document.getElementById('dj-wily');
  const alex = document.getElementById('dj-alex');

  const tarjetas = [info, wily, alex];

  tarjetas.forEach(tarjeta => {
    if (tarjeta.classList.contains('d-none')) {
      tarjeta.classList.remove('d-none');
      tarjeta.classList.add('fade-slide-in');
    } else {
      tarjeta.classList.add('d-none');
      tarjeta.classList.remove('fade-slide-in');
    }
  });
}

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_u6aazbv';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Email Enviando';
      alert('Enviado te respondere lo mas rapido posible!');
    }, (err) => {
      btn.value = 'Email Enviando';
      alert(JSON.stringify(err));
    });
});

  function mostrarPDF() {
    const container = document.getElementById("pdfContainer");
    const boton = document.querySelector(".neon-btn1");

    // Alternar visibilidad del contenedor
    if (container.classList.contains("d-none")) {
      container.classList.remove("d-none");
      container.classList.add("fade-slide-in");
      boton.textContent = "❌ Ocultar Presskit PDF";
    } else {
      container.classList.add("d-none");
      container.classList.remove("fade-slide-in");
      boton.textContent = "📄 Mostrar Presskit PDF";
    }
  }
