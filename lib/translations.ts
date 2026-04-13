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
      cvBtn: "Descargar CV",
      myPhoto: "MI FOTO",
    },
    aboutMe: {
      sectionLabel: "| Sobre mi",
      jobTitle: "// Desarrollador Full Stack & Diseñador de Interfaces",
      aboutLabel: "Sobre mí:",
      aboutText: "soy un desarrollador con pasión por la tecnología y el diseño. Me especializo en crear aplicaciones web y móviles modernas, con experiencia en múltiples lenguajes y frameworks. Siempre en busca de nuevos retos y aprendizajes constantes.",
      myPhoto: "MI FOTO",
    },
    languages: {
      sectionLabel: "| Lenguajes",
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
      sectionLabel: "| Proyectos",
      items: [
        {
          title: "Nombre del Proyecto 1",
          description: "Aplicación web desarrollada con Next.js y TypeScript. Implementa autenticación, gestión de estado y consumo de APIs externas.",
        },
        {
          title: "Nombre del Proyecto 2",
          description: "App móvil con Flutter y Dart para gestión de tareas con notificaciones push, sincronización en tiempo real y soporte offline.",
        },
        {
          title: "Nombre del Proyecto 3",
          description: "API REST con Java y Spring Boot. Base de datos relacional con SQL, autenticación JWT y documentación con Swagger.",
        },
      ],
    },
    hobbies: {
      sectionTitle: "Hobby",
      closeImage: "Cerrar imagen ampliada",
      prevImage: "Imagen anterior de",
      nextImage: "Siguiente imagen de",
      expandImage: "Ampliar imagen de",
      items: [
        {
          title: "Nombre del Hobby 1",
          description: "Descripción del hobby: actividad que disfruto en mi tiempo libre y que me ayuda a mantener el equilibrio entre trabajo y vida personal.",
        },
        {
          title: "Nombre del Hobby 2",
          description: "Descripción: pasión creativa que complementa mis habilidades técnicas y me permite explorar nuevas perspectivas en el diseño.",
        },
        {
          title: "Nombre del Hobby 3",
          description: "Descripción: actividad que fortalece mis habilidades cognitivas y me mantiene actualizado con las últimas tendencias tecnológicas.",
        },
      ],
    },
    testimonials: {
      title: "TESTIMONIOS",
      addBtn: "Agregar testimonio",
      dialogTitle: "Agregar un testimonio",
      dialogDescription: "Comparte tu experiencia para que aparezca en esta sección.",
      nameLbl: "Nombre",
      namePlaceholder: "Tu nombre",
      roleLbl: "Cargo o relación",
      rolePlaceholder: "Ej. CTO en Empresa X",
      quoteLbl: "Testimonio",
      quotePlaceholder: "Escribe aquí tu comentario",
      submitBtn: "Publicar testimonio",
      initialItems: [
        {
          quote: "Excelente desarrollador, muy comprometido con los proyectos. Su capacidad para resolver problemas complejos y su atención al detalle son impresionantes.",
          name: "Juan Díaz",
          role: "Developer TechCorp",
        },
        {
          quote: "Trabajar con él fue una experiencia increíble. Entrega código limpio, bien documentado y siempre dentro de los plazos acordados.",
          name: "María López",
          role: "Project Manager StartupX",
        },
        {
          quote: "Su dominio de Next.js y TypeScript es sobresaliente. Además, tiene excelentes habilidades de comunicación y trabajo en equipo.",
          name: "Carlos Ruiz",
          role: "CTO DevAgency",
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
          period: "2022 - 2026",
          institution: "Universidad",
          description: "Formación en desarrollo de software, estructuras de datos, bases de datos, redes y diseño de sistemas.",
        },
      ],
      projectItems: [
        {
          title: "Proyectos universitarios",
          period: "2022 - 2026",
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
      cvBtn: "Download CV",
      myPhoto: "MY PHOTO",
    },
    aboutMe: {
      sectionLabel: "| About me",
      jobTitle: "// Full Stack Developer & UI Designer",
      aboutLabel: "About me:",
      aboutText: "I'm a developer with a passion for technology and design. I specialize in building modern web and mobile applications, with experience in multiple languages and frameworks. Always looking for new challenges and continuous learning.",
      myPhoto: "MY PHOTO",
    },
    languages: {
      sectionLabel: "| Languages",
      title: "My Languages",
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
      sectionLabel: "| Projects",
      items: [
        {
          title: "Project Name 1",
          description: "Web application built with Next.js and TypeScript. Implements authentication, state management and external API consumption.",
        },
        {
          title: "Project Name 2",
          description: "Mobile app with Flutter and Dart for task management with push notifications, real-time sync and offline support.",
        },
        {
          title: "Project Name 3",
          description: "REST API with Java and Spring Boot. Relational database with SQL, JWT authentication and Swagger documentation.",
        },
      ],
    },
    hobbies: {
      sectionTitle: "Hobbies",
      closeImage: "Close expanded image",
      prevImage: "Previous image of",
      nextImage: "Next image of",
      expandImage: "Expand image of",
      items: [
        {
          title: "Hobby Name 1",
          description: "Hobby description: an activity I enjoy in my free time that helps me maintain a balance between work and personal life.",
        },
        {
          title: "Hobby Name 2",
          description: "Description: a creative passion that complements my technical skills and lets me explore new perspectives in design.",
        },
        {
          title: "Hobby Name 3",
          description: "Description: an activity that strengthens my cognitive skills and keeps me up to date with the latest tech trends.",
        },
      ],
    },
    testimonials: {
      title: "TESTIMONIALS",
      addBtn: "Add testimonial",
      dialogTitle: "Add a testimonial",
      dialogDescription: "Share your experience to have it appear in this section.",
      nameLbl: "Name",
      namePlaceholder: "Your name",
      roleLbl: "Role or relationship",
      rolePlaceholder: "e.g. CTO at Company X",
      quoteLbl: "Testimonial",
      quotePlaceholder: "Write your comment here",
      submitBtn: "Publish testimonial",
      initialItems: [
        {
          quote: "Excellent developer, very committed to projects. His ability to solve complex problems and attention to detail are impressive.",
          name: "Juan Díaz",
          role: "Developer TechCorp",
        },
        {
          quote: "Working with him was an incredible experience. He delivers clean, well-documented code always within the agreed deadlines.",
          name: "María López",
          role: "Project Manager StartupX",
        },
        {
          quote: "His mastery of Next.js and TypeScript is outstanding. He also has excellent communication and teamwork skills.",
          name: "Carlos Ruiz",
          role: "CTO DevAgency",
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
          period: "2022 - 2026",
          institution: "University",
          description: "Training in software development, data structures, databases, networking and systems design.",
        },
      ],
      projectItems: [
        {
          title: "University Projects",
          period: "2022 - 2026",
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
