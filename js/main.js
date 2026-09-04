/**
 * RDZ SOLUCIONES - ELECTRICISTA MATRICULADO EN CABA
 * JavaScript Interactivo & Gestión de Cotizaciones y Agendamiento
 */

document.addEventListener('DOMContentLoaded', () => {
  // Constantes de contacto
  const WHATSAPP_NUMBER = '5491138031543'; // Formato internacional
  const CALL_NUMBER = '1138031543';

  // 1. Menú Móvil
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const isExpanded = mobileNav.classList.contains('open');
      mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Cerrar al clickear cualquier link
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
      });
    });
  }

  // 2. Acordeón de FAQs
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Cerrar otros si se desea acordeón exclusivo
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            if (otherAnswer) otherAnswer.style.maxHeight = null;
          }
        });

        // Alternar actual
        if (isActive) {
          item.classList.remove('active');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });

  // 3. Filtros de Categorías en FAQs
  const faqCatBtns = document.querySelectorAll('.faq-cat-btn');
  faqCatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      faqCatBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      faqItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (category === 'all' || itemCat === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 4. Cotizador Rápido de Hero
  const quickQuoteForm = document.getElementById('quickQuoteForm');
  if (quickQuoteForm) {
    quickQuoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const service = document.getElementById('qqService')?.value || 'Consulta General';
      const neighborhood = document.getElementById('qqNeighborhood')?.value || 'CABA';
      const details = document.getElementById('qqDetails')?.value || 'Sin detalles adicionales';
      const hasMedia = document.getElementById('qqHasMedia')?.checked ? 'Sí (adjunto fotos/video)' : 'No';

      const message = `⚡ *SOLICITUD DE PRESUPUESTO - RDZ SOLUCIONES*
---------------------------------------
🔧 *Servicio:* ${service}
📍 *Zona/Barrio:* ${neighborhood}
📝 *Detalle del problema:* ${details}
📷 *¿Tiene fotos/videos para enviar?:* ${hasMedia}
---------------------------------------
_Enviado desde el cotizador web de rdzsoluciones.com.ar_`;

      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

      window.open(url, '_blank');
      showToast('¡Abriendo WhatsApp para coordinar tu presupuesto!');
    });
  }

  // 5. Formulario de Agendamiento de Visita
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    // Establecer fecha mínima como hoy
    const dateInput = document.getElementById('bookDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('bookName')?.value || 'Cliente';
      const phone = document.getElementById('bookPhone')?.value || '-';
      const address = document.getElementById('bookAddress')?.value || '-';
      const service = document.getElementById('bookService')?.value || 'Revisión General';
      const date = document.getElementById('bookDate')?.value || 'A coordinar';
      const timeslot = document.getElementById('bookTimeslot')?.value || 'A convenir';
      const notes = document.getElementById('bookNotes')?.value || 'Sin notas adicionales';

      const message = `📅 *SOLICITUD DE TURNO / VISITA - RDZ SOLUCIONES*
---------------------------------------
👤 *Nombre:* ${name}
📞 *Teléfono/WhatsApp:* ${phone}
📍 *Dirección/Barrio en CABA:* ${address}
🔧 *Motivo/Servicio:* ${service}
🗓️ *Fecha preferida:* ${date}
⏰ *Franja horaria:* ${timeslot}
📝 *Descripción del trabajo:* ${notes}
---------------------------------------
_Solicitud generada a través de rdzsoluciones.com.ar_`;

      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

      window.open(url, '_blank');
      showToast('¡Solicitud lista! Confirmá el envío en WhatsApp.');
    });
  }

  // 6. Selección rápida al hacer clic en etiquetas de Barrios
  const neighborhoodTags = document.querySelectorAll('.neighborhood-tag');
  neighborhoodTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const name = tag.getAttribute('data-name');
      const selectElem = document.getElementById('qqNeighborhood');
      const addressInput = document.getElementById('bookAddress');

      if (selectElem) {
        // Si existe la opción la seleccionamos, sino la asignamos al valor
        let found = false;
        for (let i = 0; i < selectElem.options.length; i++) {
          if (selectElem.options[i].text.toLowerCase().includes(name.toLowerCase())) {
            selectElem.selectedIndex = i;
            found = true;
            break;
          }
        }
        if (!found) {
          const opt = new Option(name, name, true, true);
          selectElem.add(opt);
        }
      }

      if (addressInput) {
        addressInput.value = `${name}, CABA`;
      }

      showToast(`Barrio seleccionado: ${name}. Podés completar tu consulta.`);
      
      // Scroll suave hacia el cotizador o agendador
      const heroSection = document.getElementById('presupuesto');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 7. Toast de notificaciones simples
  function showToast(text) {
    let toast = document.getElementById('toastMsg');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastMsg';
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>⚡</span> <span>${text}</span>`;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // 8. Botones directos con mensaje de urgencia
  const emergencyBtns = document.querySelectorAll('.btn-emergency-wa');
  emergencyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = encodeURIComponent('🚨 *URGENCIA ELÉCTRICA EN CABA 24 HS*\nHola RDZ Soluciones, tengo una emergencia eléctrica en mi domicilio/comercio. Necesito asistencia urgente.');
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    });
  });
});
