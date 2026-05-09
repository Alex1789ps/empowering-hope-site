// Apply saved language on load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'en';
  if (translations[savedLang]) {
    changeLanguage(savedLang);
  } else {
    changeLanguage('en');
  }
  if (typeof updateInstructionPdfLink === 'function') updateInstructionPdfLink(savedLang);
});

const translations = {
    en: {
        nav_about: "ABOUT US",
        nav_work: "OUR WORK",
        nav_instagram: "FOLLOW THE JOURNEY",
        nav_help: "WANT TO HELP?",
        nav_contact: "CONTACT",
        hero_title: "Empowering Hope<br>Project",
        hero_btn_help: "WANT TO HELP US?",
        hero_btn_work: "DISCOVER OUR WORK ↓",
        about_label: "ABOUT US",
        about_title: "Solar light. Real hope.",
        stat_solar: "SOLAR",
        stat_hope: "HOPE",
        founder_title: "Founder · Photographer from Kabale, Uganda",
        work_label: "OUR WORK",
        work_title: "Faces of the people we serve.",
        work_subtitle: "Photographs from our journeys across remote Uganda.",
        insta_label: "FOLLOW THE JOURNEY",
        insta_title: "From the field, to your feed.",
        insta_btn: "FOLLOW ON INSTAGRAM",
        help_label: "♡ WANT TO HELP US?",
        help_title: "Your support powers a village.",
        help_text: "Every contribution installs another solar panel — another evening of homework, another safe night, another future lit up.",
        help_btn: "DONATE VIA XOOM",
        help_tutorial: "Don't know how to donate with XOOM? Follow these instructions",
        help_instructions: "INSTRUCTIONS",
        contact_title: "CONTACT",
        contact_subtitle: "We'd love to hear from you.",
        contact_phone: "Phone: +256 704 189 185",
        form_name: "NAME *",
        form_phone: "PHONE NUMBER",
        form_email: "EMAIL ADDRESS *",
        form_subject: "SUBJECT *",
        form_desc: "DESCRIPTION *",
        form_send: "SEND",
        footer_desc: "Bringing light to Uganda's most remote communities."
    },
    es: {
        nav_about: "SOBRE NOSOTROS",
        nav_work: "NUESTRA LABOR",
        nav_instagram: "FOLLOW THE JOURNEY",
        nav_help: "¿QUIERES AYUDAR?",
        nav_contact: "CONTACTO",
        hero_title: "Empowering Hope<br>Project",
        hero_btn_help: "¿QUIERES AYUDARNOS?",
        hero_btn_work: "DESCUBRE NUESTRA LABOR ↓",
        about_label: "SOBRE NOSOTROS",
        about_title: "Luz solar. Esperanza real.",
        stat_solar: "SOLAR",
        stat_hope: "ESPERANZA",
        founder_title: "Fundador · Fotógrafo de Kabale, Uganda",
        work_label: "NUESTRA LABOR",
        work_title: "Rostros de las personas a las que servimos.",
        work_subtitle: "Fotografías de nuestros viajes a través de la remota Uganda.",
        insta_label: "SIGUE EL VIAJE",
        insta_title: "Del campo, a tu feed.",
        insta_btn: "SÍGUENOS EN INSTAGRAM",
        help_label: "♡ ¿QUIERES AYUDARNOS?",
        help_title: "Tu apoyo enciende un pueblo.",
        help_text: "Cada contribución instala otro panel solar — otra tarde de deberes, otra noche segura, otro futuro iluminado.",
        help_btn: "DONA VÍA XOOM",
        help_tutorial: "¿No sabes cómo donar con XOOM? Sigue estas instrucciones.",
        help_instructions: "INSTRUCCIONES",
        contact_title: "CONTACTO",
        contact_subtitle: "Nos encantaría saber de ti.",
        contact_phone: "Teléfono: +256 704 189 185",
        form_name: "NOMBRE *",
        form_phone: "TELÉFONO",
        form_email: "CORREO ELECTRÓNICO *",
        form_subject: "ASUNTO *",
        form_desc: "DESCRIPCIÓN *",
        form_send: "ENVIAR",
        footer_desc: "Llevando luz a las comunidades más remotas de Uganda."
    },
    de: {
        nav_about: "ÜBER UNS",
        nav_work: "UNSERE ARBEIT",
        nav_instagram: "FOLLOW THE JOURNEY",
        nav_help: "HELFEN?",
        nav_contact: "KONTAKT",
        hero_title: "Empowering Hope<br>Project",
        hero_btn_help: "WOLLEN SIE UNS HELFEN?",
        hero_btn_work: "ENTDECKEN SIE UNSERE ARBEIT ↓",
        about_label: "ÜBER UNS",
        about_title: "Sonnenlicht. Echte Hoffnung.",
        stat_solar: "SOLAR",
        stat_hope: "HOFFNUNG",
        founder_title: "Gründer · Fotograf aus Kabale, Uganda",
        work_label: "UNSERE ARBEIT",
        work_title: "Gesichter der Menschen, denen wir dienen.",
        work_subtitle: "Fotografien von unseren Reisen durch das abgelegene Uganda.",
        insta_label: "FOLGEN SIE DER REISE",
        insta_title: "Vom Feld in Ihren Feed.",
        insta_btn: "AUF INSTAGRAM FOLGEN",
        help_label: "♡ WOLLEN SIE UNS HELFEN?",
        help_title: "Ihre Unterstützung treibt ein Dorf an.",
        help_text: "Jeder Beitrag installiert ein weiteres Solarpanel – ein weiterer Abend für Hausaufgaben, eine weitere sichere Nacht, eine weitere beleuchtete Zukunft.",
        help_btn: "SPENDEN ÜBER XOOM",
        help_tutorial: "Sie wissen nicht, wie Sie mit XOOM spenden können? Folgen Sie diesen Anweisungen.",
        help_instructions: "ANLEITUNG",
        contact_title: "KONTAKT",
        contact_subtitle: "Wir würden uns freuen, von Ihnen zu hören.",
        contact_phone: "Telefon: +256 704 189 185",
        form_name: "NAME *",
        form_phone: "TELEFONNUMMER",
        form_email: "E-MAIL ADRESSE *",
        form_subject: "BETREFF *",
        form_desc: "BESCHREIBUNG *",
        form_send: "SENDEN",
        footer_desc: "Wir bringen Licht in die entlegensten Gemeinden Ugandas."
    },

    fr: {
        nav_about: "À PROPOS",
        nav_work: "NOS ACTIONS",
        nav_instagram: "FOLLOW THE JOURNEY",
        nav_help: "ENVIE D’AIDER ?",
        nav_contact: "CONTACT",
        hero_title: "Empowering Hope<br>Project",
        hero_btn_help: "VOUS VOULEZ NOUS AIDER ?",
        hero_btn_work: "DÉCOUVRIR NOS ACTIONS ↓",
        about_label: "À PROPOS",
        about_title: "Lumière solaire. Espoir réel.",
        stat_solar: "SOLAIRE",
        stat_hope: "ESPOIR",
        founder_title: "Fondateur · Photographe de Kabale, Ouganda",
        work_label: "NOS ACTIONS",
        work_title: "Les visages des personnes que nous aidons.",
        work_subtitle: "Photographies de nos voyages à travers l’Ouganda reculé.",
        insta_label: "SUIVEZ L’AVENTURE",
        insta_title: "Du terrain à votre fil d’actualité.",
        insta_btn: "SUIVRE SUR INSTAGRAM",
        help_label: "♡ VOUS VOULEZ NOUS AIDER ?",
        help_title: "Votre soutien illumine un village.",
        help_text: "Chaque contribution installe un panneau solaire de plus — une soirée de devoirs en plus, une nuit plus sûre, un avenir davantage éclairé.",
        help_btn: "FAIRE UN DON VIA XOOM",
        help_tutorial: "Vous ne savez pas comment faire un don avec XOOM ? Suivez ces instructions.",
        help_instructions: "INSTRUCTIONS",
        contact_title: "CONTACT",
        contact_subtitle: "Nous serions ravis d’échanger avec vous.",
        contact_phone: "Téléphone : +256 704 189 185",
        form_name: "NOM *",
        form_phone: "NUMÉRO DE TÉLÉPHONE",
        form_email: "ADRESSE E-MAIL *",
        form_subject: "SUJET *",
        form_desc: "DESCRIPTION *",
        form_send: "ENVOYER",
        footer_desc: "Apporter la lumière aux communautés les plus reculées d’Ouganda."
    },

};

// Language selector logic
const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');

langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('show');
});

window.addEventListener('click', () => {
    if (langDropdown.classList.contains('show')) {
        langDropdown.classList.remove('show');
    }
});

function changeLanguage(lang) {
    const flags = {
        en: { img: "media/GB.png", label: "EN" },
        es: { img: "media/ES.png", label: "ES" },
        de: { img: "media/DE.png", label: "DE" },
        fr: { img: "media/FR.png", label: "FR" },

    };
    langBtn.innerHTML = `<img class="lang-flag" src="${flags[lang].img}" alt="" aria-hidden="true"> <span class="lang-code">${flags[lang].label}</span>`;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    updateInstructionPdfLink(lang);

    localStorage.setItem('lang', lang);
}


const instructionPdfs = {
    en: "media/Instructions_EN.pdf",
    es: "media/Instructions_ES.pdf",
    de: "media/Instructions_DE.pdf",
    fr: "media/Instructions_FR.pdf"
};

function updateInstructionPdfLink(lang) {
    const btn = document.getElementById("help-instructions-btn");
    if (!btn) return;
    btn.href = instructionPdfs[lang] || instructionPdfs.en;
}


// Al cargar la página, aplica el idioma guardado

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    if (translations[savedLang]) {
        changeLanguage(savedLang);
    }
    updateInstructionPdfLink(savedLang);
});

// Contact form logic
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const countryCode = document.getElementById('country-code').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const description = document.getElementById('description').value;

    const fullPhone = phone ? `${countryCode} ${phone}` : 'N/A';

    // Format as a 2-column, 5-row table for the email body (plain text representation)
    const emailBody = `
-------------------------------------------------
| Field         | Details                       |
-------------------------------------------------
| Nombre        | ${name.padEnd(29, ' ')} |
| Teléfono      | ${fullPhone.padEnd(29, ' ')} |
| Email         | ${email.padEnd(29, ' ')} |
| Asunto        | ${subject.padEnd(29, ' ')} |
| Descripción   | ${description.padEnd(29, ' ')} |
-------------------------------------------------
    `;

    // Alert for demonstration purposes
    alert('Email prepared to be sent to hillary@hillaryugandatrips.com:\n' + emailBody);

    // In a real scenario without a backend, mailto is the closest. 
    // We will use mailto to open the user's email client
    const mailtoLink = `mailto:hillary@hillaryugandatrips.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
});

// --- Masonry Grid (Grid + JS) ---
// Requiere: .work-gallery.masonry-span con .grid-item que contiene un <img>

function resizeMasonryItem(item) {
    const grid = document.querySelector('.work-gallery.masonry-span');
    if (!grid) return;

    const styles = getComputedStyle(grid);
    const rowHeight = parseFloat(styles.getPropertyValue('grid-auto-rows'));
    const gap = parseFloat(styles.getPropertyValue('gap'));

    const img = item.querySelector('img');
    if (!img) return;

    // Altura REAL de la imagen (aunque el item mida 10px al principio)
    const imgHeight = img.getBoundingClientRect().height;

    const rowSpan = Math.ceil((imgHeight + gap) / (rowHeight + gap));
    item.style.gridRowEnd = `span ${rowSpan}`;
}

function resizeAllMasonryItems() {
    document.querySelectorAll('.work-gallery.masonry-span .grid-item')
        .forEach(resizeMasonryItem);
}

function hookImageLoads() {
    const imgs = document.querySelectorAll('.work-gallery.masonry-span .grid-item img');
    imgs.forEach(img => {
        // Si ya está cargada, no esperamos
        if (img.complete) return;
        img.addEventListener('load', resizeAllMasonryItems);
    });
}

//BOTON DE WHATSAPP FLOTANTE EN LA ESQUINA INFERIOR DERECHA DEL DOCUMENTO
// DOM listo
document.addEventListener('DOMContentLoaded', () => {
    hookImageLoads();
    // Espera 1 frame para que el navegador haya pintado tamaños
    requestAnimationFrame(resizeAllMasonryItems);
});

// Por si cargan fuentes/estilos tarde
window.addEventListener('load', resizeAllMasonryItems);
window.addEventListener('resize', resizeAllMasonryItems);

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("whatsapp-float");
    if (!btn) return;

    const phone = "256704189185"; // +256 704189185 -> sin + ni espacios
    const text = "Hi! 😊 I would like more information about you amazing project";
    const encodedText = encodeURIComponent(text);

    // Detección simple de móvil
    const isMobile = /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent);

    btn.addEventListener("click", (e) => {
        e.preventDefault();

        if (isMobile) {
            // Intenta abrir la app (solo móvil) 
            window.location.href = `whatsapp://send?phone=${phone}&text=${encodedText}`;
        } else {
            // Escritorio: WhatsApp Web
            window.open(`https://web.whatsapp.com/send?phone=${phone}&text=${encodedText}`, "_blank", "noopener,noreferrer");
        }
    });
});




// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.navbar');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!nav || !toggle || !links) return;

  const closeNav = () => {
    nav.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
  document.addEventListener('click', (e) => { if (!nav.contains(e.target)) closeNav(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 768) closeNav(); });
});
