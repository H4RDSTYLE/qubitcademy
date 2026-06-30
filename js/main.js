/* ================================================================
   QUBITCADEMY — main.js
   Nav scroll · Mobile menu · Language switcher · FAQ · Filters
   ================================================================ */

/* ── i18n translations ─────────────────────────────────────────── */
const T = {
  es: {
    /* Nav */
    'nav.home':      'Inicio',
    'nav.catalogue': 'Catálogo',
    'nav.paths':     'Rutas',
    'nav.faq':       'FAQ',
    'nav.login':     'Iniciar sesión',
    'nav.cta':       'Empezar gratis',

    /* Hero */
    'hero.eyebrow':  '🚀 Plataforma de Aprendizaje Cuántico',
    'hero.h1a':      'Domina la',
    'hero.h1b':      'Computación',
    'hero.h1c':      'Cuántica',
    'hero.sub':      'De los fundamentos de la mecánica cuántica a los algoritmos más avanzados del mundo. Aprende de expertos y transforma tu carrera.',
    'hero.cta1':     'Empezar gratis',
    'hero.cta2':     'Ver catálogo →',
    'hero.s1n':      '12',
    'hero.s1l':      'cursos disponibles',
    'hero.s2n':      '4.800+',
    'hero.s2l':      'estudiantes',
    'hero.s3n':      '3',
    'hero.s3l':      'rutas certificadas',
    'hero.circuit':  'Circuito cuántico de 4 qubits',
    'hero.cbadge':   'Simulación en tiempo real',

    /* Features */
    'feat.label':    '¿Por qué Qubitcademy?',
    'feat.h2':       'Aprende cuántica de verdad.',
    'feat.p':        'Sin atajos. Desde los fundamentos matemáticos hasta programar en hardware cuántico real.',
    'feat.1h':       'Rutas estructuradas',
    'feat.1p':       'Itinerarios diseñados por expertos que te llevan de cero a avanzado sin perder el hilo.',
    'feat.2h':       'Hardware real',
    'feat.2p':       'Accede a IBM Quantum e IonQ y ejecuta tus algoritmos en computadoras cuánticas de verdad.',
    'feat.3h':       'Certificación CPD',
    'feat.3p':       'Acredita tus conocimientos con certificados reconocidos internacionalmente.',
    'feat.4h':       'Expertos globales',
    'feat.4p':       'Aprende de investigadores de MIT, Oxford y líderes de la industria cuántica.',

    /* Featured courses */
    'courses.label': 'Cursos destacados',
    'courses.h2':    'Los favoritos de la comunidad.',
    'courses.p':     'Desde el primer qubit hasta el aprendizaje automático cuántico.',
    'courses.more':  'Ver todos los cursos →',

    /* Paths */
    'paths.label':   'Rutas de aprendizaje',
    'paths.h2':      'Tu camino, paso a paso.',
    'paths.p':       'Tres itinerarios diseñados para diferentes objetivos. Sigue el tuyo y avanza a tu ritmo.',
    'paths.p1h':     'Quantum Starter',
    'paths.p1p':     'Los fundamentos de la mecánica cuántica y los primeros circuitos. Ideal para comenzar desde cero.',
    'paths.p1d':     '4 semanas',
    'paths.p1c':     '3 cursos',
    'paths.p2h':     'Quantum Developer',
    'paths.p2p':     'Programa en Qiskit, implementa algoritmos de búsqueda y aprende a optimizar con QAOA.',
    'paths.p2d':     '8 semanas',
    'paths.p2c':     '5 cursos',
    'paths.p3h':     'Quantum Researcher',
    'paths.p3p':     'Algoritmos avanzados, QML, criptografía cuántica y acceso a hardware real.',
    'paths.p3d':     '12 semanas',
    'paths.p3c':     '8 cursos',
    'paths.all':     'Ver todas las rutas →',

    /* Testimonials */
    'testi.label':   'Comunidad',
    'testi.h2':      'Lo que dicen nuestros estudiantes.',
    'testi.1q':      '"Empecé sin saber nada de física cuántica. En 6 semanas ya estaba ejecutando circuitos en IBM Quantum. La ruta Quantum Developer es increíble."',
    'testi.1n':      'María González',
    'testi.1r':      'Ingeniera de Software · Madrid',
    'testi.2q':      '"La calidad del contenido es excepcional. Las explicaciones matemáticas son rigurosas pero accesibles. Totalmente recomendable para cualquier investigador."',
    'testi.2n':      'Luca Bianchi',
    'testi.2r':      'Investigador en Física · Milán',
    'testi.3q':      '"Por fin una plataforma que explica cuántica en español con rigor real. El curso de Criptografía Cuántica me abrió las puertas a un nuevo área de trabajo."',
    'testi.3n':      'Ana Lima',
    'testi.3r':      'Ciberseguridad · São Paulo',

    /* CTA */
    'cta.h2':        'Empieza a aprender cuántica hoy.',
    'cta.p':         'Únete a más de 4.800 estudiantes. Accede a los primeros 6 cursos completamente gratis.',
    'cta.btn1':      'Crear cuenta gratis',
    'cta.btn2':      'Ver catálogo',

    /* Footer */
    'ft.desc':       'La plataforma de aprendizaje cuántico más completa en español.',
    'ft.col1':       'Cursos',
    'ft.col2':       'Plataforma',
    'ft.col3':       'Empresa',
    'ft.1a':         'Fundamentos',
    'ft.1b':         'Algoritmos',
    'ft.1c':         'Programación',
    'ft.1d':         'Criptografía',
    'ft.2a':         'Catálogo',
    'ft.2b':         'Rutas',
    'ft.2c':         'Certificados',
    'ft.2d':         'FAQ',
    'ft.3a':         'Sobre nosotros',
    'ft.3b':         'Blog',
    'ft.3c':         'Contacto',
    'ft.3d':         'Afiliados',
    'ft.copy':       '© 2025 Qubitcademy. Todos los derechos reservados.',

    /* Catalogue page */
    'cat.h1':        'Catálogo de cursos',
    'cat.p':         'Explora todos los cursos, filtra por nivel y tema. Empieza cuando quieras.',
    'cat.all':       'Todos',
    'cat.beg':       'Principiante',
    'cat.int':       'Intermedio',
    'cat.adv':       'Avanzado',
    'cat.results':   'cursos encontrados',

    /* Paths page */
    'pt.h1':         'Rutas de aprendizaje',
    'pt.p':          'Itinerarios curados por expertos. Aprende en el orden correcto, sin perderte.',

    /* FAQ page */
    'fq.h1':         'Preguntas frecuentes',
    'fq.p':          'Todo lo que necesitas saber antes de empezar tu aventura cuántica.',
    'fq.contact.h':  '¿No encuentras tu respuesta?',
    'fq.contact.p':  'Escríbenos y te respondemos en menos de 24 horas.',
    'fq.contact.btn':'Contactar',

    /* FAQ Q&A */
    'fq.q1': '¿Necesito conocimientos previos de física o matemáticas?',
    'fq.a1': 'No es necesario. Los cursos del nivel Principiante están diseñados desde cero. Solo necesitas curiosidad y ganas de aprender. Los conceptos matemáticos se introducen de manera progresiva y siempre con contexto cuántico.',
    'fq.q2': '¿Cuánto tiempo necesito dedicar cada semana?',
    'fq.a2': 'Depende de la ruta. El Quantum Starter requiere unas 3–4 horas semanales. El Quantum Developer entre 5–7 horas. La ruta Researcher puede requerir hasta 10 horas si deseas profundizar en los ejercicios y proyectos.',
    'fq.q3': '¿Los cursos gratuitos incluyen certificado?',
    'fq.a3': 'Los cursos gratuitos incluyen un certificado de finalización básico. Los certificados CPD con acreditación internacional están disponibles para los cursos de pago, al completar el proyecto final con una puntuación mínima del 70 %.',
    'fq.q4': '¿Puedo acceder al contenido sin límite de tiempo?',
    'fq.a4': 'Sí. Una vez matriculado en un curso, el acceso es de por vida. Puedes estudiar a tu ritmo, pausar y retomar en cualquier momento. No existen fechas de caducidad.',
    'fq.q5': '¿Qué herramientas de programación cuántica se enseñan?',
    'fq.a5': 'Principalmente Qiskit (IBM), PennyLane (Xanadu) y Cirq (Google). También introducimos IBM Quantum Experience para ejecutar circuitos en hardware real sin necesidad de instalación local.',
    'fq.q6': '¿Hay descuentos para grupos o empresas?',
    'fq.a6': 'Sí. Ofrecemos licencias corporativas con descuentos desde el 20 % para grupos de 5 o más personas, así como programas de formación personalizados para empresas. Escríbenos para obtener más información.',
    'fq.q7': '¿En qué idiomas están disponibles los cursos?',
    'fq.a7': 'Todos los cursos están disponibles en español e inglés. El contenido matemático y los ejercicios de código son idénticos en ambas versiones. Puedes cambiar el idioma en cualquier momento desde el menú superior.',
    'fq.q8': '¿Cómo funciona el proceso de certificación?',
    'fq.a8': 'Al completar todos los módulos y superar el proyecto final con un mínimo del 70 %, recibirás un certificado digital verificable. Los certificados CPD incluyen un número de acreditación que cualquier empleador puede verificar en línea.',

    /* Course level labels */
    'lvl.b': 'Principiante',
    'lvl.i': 'Intermedio',
    'lvl.a': 'Avanzado',
    'free':  'Gratis',
    'h.label':'horas',
  },

  en: {
    /* Nav */
    'nav.home':      'Home',
    'nav.catalogue': 'Catalogue',
    'nav.paths':     'Paths',
    'nav.faq':       'FAQ',
    'nav.login':     'Log in',
    'nav.cta':       'Start for free',

    /* Hero */
    'hero.eyebrow':  '🚀 Quantum Learning Platform',
    'hero.h1a':      'Master',
    'hero.h1b':      'Quantum',
    'hero.h1c':      'Computing',
    'hero.sub':      'From the fundamentals of quantum mechanics to the world\'s most advanced algorithms. Learn from experts and transform your career.',
    'hero.cta1':     'Start for free',
    'hero.cta2':     'View catalogue →',
    'hero.s1n':      '12',
    'hero.s1l':      'courses available',
    'hero.s2n':      '4,800+',
    'hero.s2l':      'students',
    'hero.s3n':      '3',
    'hero.s3l':      'certified paths',
    'hero.circuit':  '4-qubit quantum circuit',
    'hero.cbadge':   'Real-time simulation',

    /* Features */
    'feat.label':    'Why Qubitcademy?',
    'feat.h2':       'Learn quantum for real.',
    'feat.p':        'No shortcuts. From mathematical foundations to programming real quantum hardware.',
    'feat.1h':       'Structured paths',
    'feat.1p':       'Expert-designed learning paths that take you from zero to advanced without losing track.',
    'feat.2h':       'Real hardware',
    'feat.2p':       'Access IBM Quantum & IonQ and run your algorithms on real quantum computers.',
    'feat.3h':       'CPD Certification',
    'feat.3p':       'Validate your knowledge with internationally recognised certificates.',
    'feat.4h':       'Global experts',
    'feat.4p':       'Learn from MIT, Oxford researchers and quantum industry leaders.',

    /* Featured courses */
    'courses.label': 'Featured courses',
    'courses.h2':    'Community favourites.',
    'courses.p':     'From your first qubit to quantum machine learning.',
    'courses.more':  'View all courses →',

    /* Paths */
    'paths.label':   'Learning paths',
    'paths.h2':      'Your journey, step by step.',
    'paths.p':       'Three itineraries designed for different goals. Follow yours and advance at your own pace.',
    'paths.p1h':     'Quantum Starter',
    'paths.p1p':     'Quantum mechanics fundamentals and first circuits. Perfect for starting from scratch.',
    'paths.p1d':     '4 weeks',
    'paths.p1c':     '3 courses',
    'paths.p2h':     'Quantum Developer',
    'paths.p2p':     'Program with Qiskit, implement search algorithms and learn to optimise with QAOA.',
    'paths.p2d':     '8 weeks',
    'paths.p2c':     '5 courses',
    'paths.p3h':     'Quantum Researcher',
    'paths.p3p':     'Advanced algorithms, QML, quantum cryptography and access to real hardware.',
    'paths.p3d':     '12 weeks',
    'paths.p3c':     '8 courses',
    'paths.all':     'View all paths →',

    /* Testimonials */
    'testi.label':   'Community',
    'testi.h2':      'What our students say.',
    'testi.1q':      '"I started knowing nothing about quantum physics. In 6 weeks I was running circuits on IBM Quantum. The Quantum Developer path is incredible."',
    'testi.1n':      'María González',
    'testi.1r':      'Software Engineer · Madrid',
    'testi.2q':      '"The content quality is exceptional. The mathematical explanations are rigorous but accessible. Highly recommended for any researcher."',
    'testi.2n':      'Luca Bianchi',
    'testi.2r':      'Physics Researcher · Milan',
    'testi.3q':      '"Finally a platform that explains quantum computing with real rigour. The Quantum Cryptography course opened doors to a whole new area."',
    'testi.3n':      'Ana Lima',
    'testi.3r':      'Cybersecurity · São Paulo',

    /* CTA */
    'cta.h2':        'Start learning quantum today.',
    'cta.p':         'Join over 4,800 students. Access the first 6 courses completely free.',
    'cta.btn1':      'Create free account',
    'cta.btn2':      'View catalogue',

    /* Footer */
    'ft.desc':       'The most comprehensive quantum learning platform.',
    'ft.col1':       'Courses',
    'ft.col2':       'Platform',
    'ft.col3':       'Company',
    'ft.1a':         'Fundamentals',
    'ft.1b':         'Algorithms',
    'ft.1c':         'Programming',
    'ft.1d':         'Cryptography',
    'ft.2a':         'Catalogue',
    'ft.2b':         'Paths',
    'ft.2c':         'Certificates',
    'ft.2d':         'FAQ',
    'ft.3a':         'About us',
    'ft.3b':         'Blog',
    'ft.3c':         'Contact',
    'ft.3d':         'Affiliates',
    'ft.copy':       '© 2025 Qubitcademy. All rights reserved.',

    /* Catalogue page */
    'cat.h1':        'Course catalogue',
    'cat.p':         'Explore all courses, filter by level and topic. Start whenever you want.',
    'cat.all':       'All',
    'cat.beg':       'Beginner',
    'cat.int':       'Intermediate',
    'cat.adv':       'Advanced',
    'cat.results':   'courses found',

    /* Paths page */
    'pt.h1':         'Learning paths',
    'pt.p':          'Expert-curated itineraries. Learn in the right order, without getting lost.',

    /* FAQ page */
    'fq.h1':         'Frequently asked questions',
    'fq.p':          'Everything you need to know before starting your quantum journey.',
    'fq.contact.h':  "Can't find your answer?",
    'fq.contact.p':  'Write to us and we\'ll reply in less than 24 hours.',
    'fq.contact.btn':'Contact us',

    /* FAQ Q&A */
    'fq.q1': 'Do I need prior knowledge of physics or maths?',
    'fq.a1': 'Not at all. Beginner-level courses are designed from scratch. All you need is curiosity and a willingness to learn. Mathematical concepts are introduced gradually, always within a quantum context.',
    'fq.q2': 'How much time do I need to dedicate each week?',
    'fq.a2': 'It depends on the path. Quantum Starter requires around 3–4 hours per week. Quantum Developer between 5–7 hours. The Researcher path can require up to 10 hours if you want to go deep into exercises and projects.',
    'fq.q3': 'Do free courses include a certificate?',
    'fq.a3': 'Free courses include a basic completion certificate. CPD-accredited international certificates are available for paid courses upon completing the final project with a minimum score of 70%.',
    'fq.q4': 'Can I access the content without time limits?',
    'fq.a4': 'Yes. Once you enrol in a course, access is lifetime. You can study at your own pace, pause and resume whenever you want. There are no expiry dates.',
    'fq.q5': 'Which quantum programming tools are taught?',
    'fq.a5': 'Mainly Qiskit (IBM), PennyLane (Xanadu) and Cirq (Google). We also introduce IBM Quantum Experience for running circuits on real hardware without local installation.',
    'fq.q6': 'Are there discounts for groups or companies?',
    'fq.a6': 'Yes. We offer corporate licences with discounts from 20% for groups of 5 or more, as well as customised training programmes for companies. Write to us for more information.',
    'fq.q7': 'In which languages are the courses available?',
    'fq.a7': 'All courses are available in Spanish and English. The mathematical content and code exercises are identical in both versions. You can switch languages at any time from the top menu.',
    'fq.q8': 'How does the certification process work?',
    'fq.a8': 'Upon completing all modules and passing the final project with a minimum score of 70%, you will receive a verifiable digital certificate. CPD certificates include an accreditation number that any employer can verify online.',

    /* Course level labels */
    'lvl.b': 'Beginner',
    'lvl.i': 'Intermediate',
    'lvl.a': 'Advanced',
    'free':  'Free',
    'h.label':'hours',
  }
};

/* ── State ──────────────────────────────────────────────────────── */
let lang = localStorage.getItem('qb-lang') || 'es';

/* ── Helpers ─────────────────────────────────────────────────────── */
function t(key) { return T[lang][key] || T['es'][key] || key; }

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });
  document.querySelectorAll('[data-i18n-href]').forEach(el => {
    el.href = t(el.dataset.i18nHref);
  });
  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

/* ── Nav scroll ─────────────────────────────────────────────────── */
const nav = document.querySelector('nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile menu ─────────────────────────────────────────────────── */
const navToggle = document.querySelector('.nav-toggle');
const navMobile = document.querySelector('.nav-mobile');
if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    const open = navMobile.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
    navToggle.innerHTML = open
      ? `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2">
           <line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/>
         </svg>`
      : `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2">
           <line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="11" x2="19" y2="11"/><line x1="3" y1="16" x2="19" y2="16"/>
         </svg>`;
  });
}

/* ── Language switcher ───────────────────────────────────────────── */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    lang = btn.dataset.lang;
    localStorage.setItem('qb-lang', lang);
    applyLang();
    updateCourseResults();
  });
});

/* ── FAQ accordion ───────────────────────────────────────────────── */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ── Course filters (catalogue page) ────────────────────────────── */
function updateCourseResults() {
  const cards = document.querySelectorAll('.catalogue-grid .course-card');
  const visible = [...cards].filter(c => !c.classList.contains('hidden')).length;
  const el = document.querySelector('.results-count');
  if (el) el.textContent = `${visible} ${t('cat.results')}`;
}

// Level filter tabs
document.querySelectorAll('.ftab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.ftab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const level = btn.dataset.level;
    applyFilters();
  });
});

// Topic chips
document.querySelectorAll('.tchip').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.topic === 'all') {
      document.querySelectorAll('.tchip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    } else {
      document.querySelector('.tchip[data-topic="all"]')?.classList.remove('active');
      btn.classList.toggle('active');
      if (document.querySelectorAll('.tchip.active').length === 0) {
        document.querySelector('.tchip[data-topic="all"]')?.classList.add('active');
      }
    }
    applyFilters();
  });
});

function applyFilters() {
  const activeLevel = document.querySelector('.ftab.active')?.dataset.level || 'all';
  const activeTopics = [...document.querySelectorAll('.tchip.active')]
    .map(b => b.dataset.topic)
    .filter(t => t !== 'all');

  document.querySelectorAll('.catalogue-grid .course-card').forEach(card => {
    const matchLevel = activeLevel === 'all' || card.dataset.level === activeLevel;
    const matchTopic = activeTopics.length === 0 || activeTopics.includes(card.dataset.topic);
    card.classList.toggle('hidden', !(matchLevel && matchTopic));
  });
  updateCourseResults();
}

/* ── Smooth scroll for anchor links ────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

/* ── Init ─────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyLang();
  updateCourseResults();
});
applyLang();

/* ── Quantum circuit simulator ──────────────────────────────────────
   Circuit (4 qubits, reading left-to-right from the SVG):
     q₀: H ─── CNOT(ctrl) ─── T ─────────────────── M
     q₁: H ─────────────────── S ─── CNOT(ctrl) ─── M
     q₂: ────── CNOT(tgt) ──────────────────── H ─── M
     q₃: ──────────────────────────── CNOT(tgt) ─ T ─ M

   State vector: 16 complex amplitudes for a 4-qubit system.
   Measurement uses Born rule: P(k) = |αₖ|².
   This circuit produces a uniform superposition over 8 of the 16
   basis states, each with probability 1/8:
     |0000⟩ |0010⟩ |0101⟩ |0111⟩ |1000⟩ |1010⟩ |1101⟩ |1111⟩
   ─────────────────────────────────────────────────────────────── */
(function qsim() {
  /* Complex arithmetic */
  const mul = ([ar,ai],[br,bi]) => [ar*br - ai*bi, ar*bi + ai*br];
  const add = ([ar,ai],[br,bi]) => [ar+br, ai+bi];

  const S2 = 1 / Math.sqrt(2);

  /* 2×2 unitary matrices: [[m00,m01],[m10,m11]], each mij = [re,im] */
  const G = {
    H: [[[S2,0],[S2,0]], [[S2,0],[-S2,0]]],
    T: [[[1,0],[0,0]], [[0,0],[S2,S2]]],   /* e^(iπ/4) = (1+i)/√2 */
    S: [[[1,0],[0,0]], [[0,0],[0,1]]],     /* i                   */
  };

  /* Apply single-qubit gate to qubit q (q=0 is MSB / q₀) */
  function applyGate(st, n, q, g) {
    const out = st.map(x => [...x]);
    const mask = 1 << (n - 1 - q);
    for (let i = 0; i < st.length; i++) {
      if (i & mask) continue;
      const j = i | mask;
      out[i] = add(mul(g[0][0], st[i]), mul(g[0][1], st[j]));
      out[j] = add(mul(g[1][0], st[i]), mul(g[1][1], st[j]));
    }
    return out;
  }

  /* Apply CNOT gate: ctrl and tgt are qubit indices */
  function cnot(st, n, ctrl, tgt) {
    const out = st.map(x => [...x]);
    const cm = 1 << (n - 1 - ctrl);
    const tm = 1 << (n - 1 - tgt);
    for (let i = 0; i < st.length; i++) {
      if ((i & cm) && !(i & tm)) {
        const j = i | tm;
        out[i] = [...st[j]];
        out[j] = [...st[i]];
      }
    }
    return out;
  }

  /* Run the full circuit once and return measurement result [b0,b1,b2,b3] */
  function shoot() {
    const n = 4;
    /* Initial state |0000⟩ */
    let s = Array.from({ length: 16 }, (_, i) => i === 0 ? [1, 0] : [0, 0]);

    s = applyGate(s, n, 0, G.H);   /* H on q₀ */
    s = applyGate(s, n, 1, G.H);   /* H on q₁ */
    s = cnot(s, n, 0, 2);          /* CNOT q₀→q₂ */
    s = applyGate(s, n, 0, G.T);   /* T on q₀ */
    s = applyGate(s, n, 1, G.S);   /* S on q₁ */
    s = cnot(s, n, 1, 3);          /* CNOT q₁→q₃ */
    s = applyGate(s, n, 2, G.H);   /* H on q₂ */
    s = applyGate(s, n, 3, G.T);   /* T on q₃ */

    /* Born-rule measurement: pick outcome proportional to |αₖ|² */
    let r = Math.random(), k = 15;
    for (let i = 0; i < 16; i++) {
      r -= s[i][0] * s[i][0] + s[i][1] * s[i][1];
      if (r <= 0) { k = i; break; }
    }
    return [0, 1, 2, 3].map(q => (k >> (n - 1 - q)) & 1);
  }

  /* ── DOM wiring ────────────────────────────────────────────────── */
  const els   = [0,1,2,3].map(i => document.getElementById('mres' + i));
  const outEl = document.getElementById('qsim-out');
  let shots = 0;

  function hide() {
    els.forEach(el => { if (el) el.classList.remove('qmres-vis'); });
  }

  function show(bits) {
    shots++;
    bits.forEach((b, i) => {
      const el = els[i];
      if (!el) return;
      el.textContent = b;
      /* 0 → purple (superposition collapsed to ground), 1 → gold (excited) */
      el.setAttribute('fill', b ? '#f59e0b' : '#9333ea');
      el.classList.add('qmres-vis');
    });
    if (outEl) {
      const ket = '|' + bits.join('') + '⟩';
      outEl.innerHTML = `<span>#${shots}</span>\u2002<span class="ket">${ket}</span>`;
    }
  }

  /* ── Animation loop — synced to the 3 s CSS particle cycle ─────── */
  function cycle() {
    hide();
    setTimeout(() => show(shoot()), 2400); /* particles reach M gates at ~2.4 s */
  }

  document.addEventListener('DOMContentLoaded', () => {
    cycle();
    setInterval(cycle, 3000);
  });
})();
