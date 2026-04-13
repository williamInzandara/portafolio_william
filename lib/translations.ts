import { title } from "process"

export type Lang = 'es' | 'en'

export const translations = {
  es: {
    nav: {
      sobreMi: "Sobre mí",
      lenguajes: "Lenguajes",
      proyectos: "Proyectos",
      hobbies: "Intereses",
      testimonios: "Testimonios",
      experiencia: "Experiencia",
      contacto: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "// Full Stack Developer",
      description: "Desarrollador apasionado por crear interfaces modernas y sistemas robustos. Especializado en Next.js, TypeScript y Flutter.",
      contactBtn: "Contactarme",
      projectsBtn: "Ver proyectos",
      myPhoto: "MI FOTO",
    },
    aboutMe: {
      sectionLabel: "SOBRE MI",
      jobTitle: "// Desarrollador Full Stack & Diseñador de Interfaces",
      aboutLabel: "Sobre mí:",
      aboutText: "soy un desarrollador con pasión por la tecnología y el diseño. Me especializo en crear aplicaciones web y móviles modernas, con experiencia en múltiples lenguajes y frameworks. Siempre en busca de nuevos retos y aprendizajes constantes.",
      myPhoto: "MI FOTO",
    },
    languages: {
      sectionLabel: "LENGUAJES",
      title: "Mis Lenguajes",
      items: [
        { name: "JavaScript", description: "Desarrollo frontend dinámico, manipulación del DOM, APIs y lógica de negocio." },
        { name: "TypeScript", description: "Superset de JS con tipado estático. Reduce errores y mejora la mantenibilidad." },
        { name: "HTML", description: "Estructura semántica de páginas accesibles y bien estructuradas." },
        { name: "CSS", description: "Estilos modernos, animaciones, layouts con Flexbox/Grid y Tailwind CSS." },
        { name: "Python", description: "Scripts, automatización, análisis de datos y configuración de backends." },
        { name: "Java", description: "Programación orientada a objetos, Spring Boot, JPA y servicios REST." },
      ],
    },
    projects: {
    sectionLabel: "PROYECTOS",
      items: [
      {
      title: "Control de Finanzas Personales",
      description:
        "Aplicación web para la gestión de finanzas personales que permite registrar ingresos y gastos, visualizar balances en tiempo real y organizar transacciones por categorías. Incluye panel interactivo, historial de movimientos y control detallado del flujo de dinero.",
      },
      {
      title: "GraFyApi — Graficador de Cálculo Multivariable",
      description:
        "Aplicación web interactiva para la visualización de funciones matemáticas en 3D. Permite explorar superficies como paraboloides, ondas y funciones personalizadas en tiempo real, facilitando el análisis del cálculo multivariable de forma visual e intuitiva.",     
      },
      {
      title: "Casa Segura — Sistema de Monitoreo con Cámaras",
      description:
        "Aplicación desarrollada en Flutter orientada a la seguridad del hogar mediante monitoreo de cámaras y sistema de notificaciones inteligentes. Detecta objetos o posibles intrusos y envía alertas en tiempo real al usuario.",
    },
  ],
},
    hobbies: {
  sectionTitle: "INTERESES",
  items: [
    {
      title: "Natación y conexión con la naturaleza",
      description:
        "Disfruto nadar en entornos naturales, ya que me permite relajarme, desconectarme del estrés diario y mantener un equilibrio entre bienestar físico y mental.",
    },
    {
      title: "Camping y aventuras al aire libre",
      description:
        "Me gusta acampar y compartir momentos al aire libre, especialmente en actividades como fogatas y reuniones.",
    },
    {
      title: "Exploración y caminatas",
      description:
        "Disfruto caminar y explorar diferentes lugares, especialmente paisajes naturales.",
    },
  ],
},    

testimonials: {
  sectionLabel: "TESTIMONIOS",
  items: [
    {
      quote:
        "Excelente desarrollador, muy comprometido con los proyectos. Su capacidad para resolver problemas complejos y su atención al detalle son impresionantes.",
      name: "Khaled Benavides",
    },
    {
      quote:
        "Trabajar con él fue una experiencia increíble. Entrega código limpio, bien documentado y siempre dentro de los plazos acordados.",
      name: "Diego Ceron",
    },
    {
      quote:
        "Su dominio de Next.js y TypeScript es sobresaliente. Además, tiene excelentes habilidades de comunicación y trabajo en equipo.",
      name: "Cristian David",
    },
  ],
},

    experience: {
      title: "EXPERIENCIA",
      academic: "Académica",
      projects: "Proyectos",
      academicItems: [
        {
          title: "Ingeniería en Software",
          period: "2023 - 2026",
          institution: "Universidad",
          description: "Formación en desarrollo de software, estructuras de datos, bases de datos, redes y diseño de sistemas.",
        },
      ],
      projectItems: [
        {
          title: "Proyectos universitarios",
          period: "2023 - 2026",
          description: "Desarrollo de aplicaciones y sistemas como parte de la carrera: lógica de negocio, gestión de datos y diseño de interfaces.",
        },
      ],
    },
    contact: {
      title: "CONTACTO",
      subtitle: "¿Hablamos?",
      nameLbl: "NOMBRE",
      namePlaceholder: "Tu nombre",
      emailLbl: "CORREO",
      emailPlaceholder: "tu@correo.com",
      messageLbl: "MENSAJE",
      messagePlaceholder: "Escribe tu mensaje...",
      sendBtn: "Enviar mensaje",
      successMsg: "¡Mensaje enviado! Te contactaré pronto.",
    },
    footer: {
      backToTop: "Ir al principio",
      copyright: "© 2025 William Darío Inzandara Lagos",
      links: [
        { label: "Sobre mí", href: "#sobre-mi" },
        { label: "Proyectos", href: "#proyectos" },
        { label: "Testimonios", href: "#testimonios" },
        { label: "Experiencia", href: "#experiencia" },
        { label: "Contacto", href: "#contacto" },
      ],
    },
  },
  en: {
    nav: {
      sobreMi: "About me",
      lenguajes: "Languages",
      proyectos: "Projects",
      hobbies: "Interests",
      testimonios: "Testimonials",
      experiencia: "Experience",
      contacto: "Contact",
    },

    hero: {
      greeting: "Hi, I'm",
      role: "// Full Stack Developer",
      description: "Passionate developer creating modern interfaces and robust systems. Specialized in Next.js, TypeScript and Flutter.",
      contactBtn: "Contact me",
      projectsBtn: "View projects",
      myPhoto: "MY PHOTO",
    },

    aboutMe: {
      sectionLabel: "ABOUT ME",
      jobTitle: "// Full Stack Developer & UI Designer",
      aboutLabel: "About me:",
      aboutText: "I'm a developer with a passion for technology and design. I specialize in building modern web and mobile applications, with experience in multiple languages and frameworks. Always looking for new challenges and continuous learning.",
      myPhoto: "MY PHOTO",
    },

    languages: {
      sectionLabel: "LANGUAGES",
      items: [
        { name: "JavaScript", description: "Dynamic frontend development, DOM manipulation, APIs and business logic." },
        { name: "TypeScript", description: "JS superset with static typing. Reduces errors and improves maintainability." },
        { name: "HTML", description: "Semantic structure for accessible, well-structured pages." },
        { name: "CSS", description: "Modern styles, animations, layouts with Flexbox/Grid and Tailwind CSS." },
        { name: "Python", description: "Scripts, automation, data analysis and backend configuration." },
        { name: "Java", description: "Object-oriented programming, Spring Boot, JPA and REST services." },
      ],
    },

    projects: {
    sectionLabel: "PROJECTS",
    items: [
      {
        title: "Personal Finance Manager",
        description:
          "Web application for managing personal finances, allowing users to track income and expenses, visualize real-time balances, and organize transactions by categories. Includes an interactive dashboard and detailed financial tracking.",
      },
      {
        title: "GraFyApi — Multivariable Calculus Grapher",
        description:
          "Interactive web application for visualizing 3D mathematical functions. Enables exploration of surfaces such as paraboloids, waves, and custom equations in real time, making multivariable calculus analysis more intuitive.",
      },
      {
        title: "Smart Home Security — Camera Monitoring System",
        description:
          "Flutter-based application focused on home security through camera monitoring and intelligent notifications. Detects objects or potential intruders and sends real-time alerts to the user.",
        },
     ],
    },

    hobbies: {
  sectionTitle: "INTERESTS",
  items: [
    {
      title: "Swimming & Nature Connection",
      description:
        "I enjoy swimming in natural environments as it helps me relax, disconnect from daily stress, and maintain a balance between physical and mental well-being.",
    },
    {
      title: "Camping & Outdoor Adventures",
      description:
        "I enjoy camping and sharing moments outdoors, especially activities like bonfires and group experiences.",
    },
    {
      title: "Exploration & Hiking",
      description:
        "I enjoy walking and exploring different places, especially natural landscapes.",
    },
  ],
},

    testimonials: {
  sectionLabel: "TESTIMONIALS",
  items: [
    {
      quote:
        "Excellent developer, highly committed to projects. His ability to solve complex problems and attention to detail are impressive.",
      name: "Khaled Benavides",
    },
    {
      quote:
        "Working with him was an incredible experience. He delivers clean, well-documented code and always meets deadlines.",
      name: "Diego Ceron",
    },
    {
      quote:
        "His mastery of Next.js and TypeScript is outstanding. He also has excellent communication and teamwork skills.",
      name: "Cristian David",
    },
  ],
},



    experience: {
      title: "EXPERIENCE",
      academic: "Academic",
      projects: "Projects",
      academicItems: [
        {
          title: "Software Engineering",
          period: "2023 - 2026",
          institution: "University",
          description: "Training in software development, data structures, databases, networking and systems design.",
        },
      ],
      projectItems: [
        {
          title: "University Projects",
          period: "2023 - 2026",
          description: "Development of applications and systems as part of the degree: business logic, data management and UI design.",
        },
      ],
    },
    contact: {
      title: "CONTACT",
      subtitle: "Shall we talk?",
      nameLbl: "NAME",
      namePlaceholder: "Your name",
      emailLbl: "EMAIL",
      emailPlaceholder: "you@email.com",
      messageLbl: "MESSAGE",
      messagePlaceholder: "Write your message...",
      sendBtn: "Send message",
      successMsg: "Message sent! I'll contact you soon.",
    },
    footer: {
      backToTop: "Back to top",
      copyright: "© 2025 William Darío Inzandara Lagos",
      links: [
        { label: "About me", href: "#sobre-mi" },
        { label: "Projects", href: "#proyectos" },
        { label: "Testimonials", href: "#testimonios" },
        { label: "Experience", href: "#experiencia" },
        { label: "Contact", href: "#contacto" },
      ],
    },
  },
} as const

export type Translations = typeof translations[keyof typeof translations]
