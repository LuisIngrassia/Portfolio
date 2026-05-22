export const personalInfo = {
  name: 'Luis Pedro Ingrassia',
  role: 'Full-Stack Developer',
  email: 'ingrassialuispedro@gmail.com',
  phone: '+54 11 5584 8885',
  linkedin: 'https://www.linkedin.com/in/luisingrassia',
  github: 'https://github.com/LuisIngrassia',
  cvEnglish: '/Luis Pedro Ingrassia CV - Full-Stack Dev - English.pdf',
  cvSpanish: '/Luis Pedro Ingrassia CV - Full-Stack Dev.pdf',
}

export const skills = [
  { name: 'React', category: 'frontend', icon: '⚛️' },
  { name: 'Tailwind CSS', category: 'frontend', icon: '🎨' },
  { name: 'JavaScript', category: 'frontend', icon: '⚡' },
  { name: 'Go', category: 'backend', icon: '🐹' },
  { name: 'Java', category: 'backend', icon: '☕' },
  { name: 'Spring Boot', category: 'backend', icon: '🍃' },
  { name: 'Node.js', category: 'backend', icon: '🟢' },
  { name: 'Python', category: 'backend', icon: '🐍' },
  { name: 'MySQL', category: 'database', icon: '🗄️' },
  { name: 'Git / GitHub', category: 'tools', icon: '🔧' },
  { name: 'DataDog', category: 'tools', icon: '📊' },
  { name: 'Jira', category: 'tools', icon: '📋' },
]

export const experience = {
  en: [
    {
      id: 1,
      company: 'Mercadolibre',
      role: 'Software Engineer',
      period: 'Feb 2025 – Mar 2026',
      color: '#FFE600',
      bullets: [
        'Development of microservices and applications using Go and Java (Spring Boot) within the Fury ecosystem',
        'Creation and maintenance of internal SDKs, improving integration experience for other development teams',
        'Design and development of interactive dashboards in Datadog for monitoring critical metrics',
        'Implementation of unit tests and end-to-end tests',
        'Active participation in the CI/CD cycle, ensuring integrity of services in production',
      ],
    },
    {
      id: 2,
      company: 'Freelance',
      role: 'Full-Stack Developer',
      period: 'Jan 2022 – Feb 2025',
      color: '#a855f7',
      bullets: [
        'Comprehensive design and development of web solutions for various clients',
        'Focus on UX/UI design to deliver polished, user-centric experiences',
        'Dynamic business-oriented features: booking systems, service catalogs, and promotion management',
        'Integration of direct contact channels to enhance customer interaction',
      ],
    },
  ],
  es: [
    {
      id: 1,
      company: 'Mercadolibre',
      role: 'Ingeniero de Software',
      period: 'Feb 2025 – Mar 2026',
      color: '#FFE600',
      bullets: [
        'Desarrollo de microservicios y aplicaciones usando Go y Java (Spring Boot) dentro del ecosistema Fury',
        'Creación y mantenimiento de SDKs internos, mejorando la experiencia de integración para otros equipos de desarrollo',
        'Diseño y desarrollo de dashboards interactivos en Datadog para monitorear métricas críticas',
        'Implementación de pruebas unitarias y end-to-end',
        'Participación activa en el ciclo CI/CD, asegurando la integridad de los servicios en producción',
      ],
    },
    {
      id: 2,
      company: 'Freelance',
      role: 'Desarrollador Full-Stack',
      period: 'Ene 2022 – Feb 2025',
      color: '#a855f7',
      bullets: [
        'Diseño y desarrollo integral de soluciones web para diversos clientes',
        'Enfoque en diseño UX/UI para entregar experiencias pulidas y centradas en el usuario',
        'Características orientadas al negocio: sistemas de reservas, catálogos de servicios y gestión de promociones',
        'Integración de canales de contacto directo para mejorar la interacción con el cliente',
      ],
    },
  ],
}

export const projects = {
  en: [
    {
      id: 1,
      name: 'CrecivAI',
      description: 'Full-stack financial analysis application with AI for portfolio evaluation, technical decision-making, and real-time data visualization. Developed with scalable architecture and modern design.',
      tags: ['React', 'Vite', 'Node.js', 'AI', 'PostgreSQL'],
      link: "https://crecivai.com/landing",
      github: null,
      size: 'large',
      inProgress: false,
    },
    {
      id: 2,
      name: 'Staff Modern',
      description: 'Website for a beauty salon and aesthetic center. Built with a focus on UX/UI design, responsive layout, and conversion-oriented structure.',
      tags: ['React', 'Tailwind CSS', 'UX/UI', 'Freelance'],
      link: 'https://www.staffmodern.com.ar/',
      github: null,
      size: 'large',
      inProgress: false,
    },
    {
      id: 3,
      name: 'Franco Cuatto',
      description: 'Personal portfolio website for a client. Clean design with smooth interactions, built to effectively showcase the client\'s work and personal brand.',
      tags: ['React', 'CSS', 'Frontend', 'Freelance'],
      link: 'https://francocuatto.com/',
      github: null,
      size: 'medium',
      inProgress: false,
    },
    {
      id: 4,
      name: "Neumaticos Lisandro",
      description: "Website for a tire shop. Developed with a focus on user experience, featuring a clean design and intuitive navigation to information and contact details to potential clients.",
      tags: ['React', 'Tailwind CSS', 'UX/UI', 'Freelance'],
      link: 'https://neumaticoslisandro.com.ar/',
      github: null,
      size: 'medium',
      inProgress: false,
    }
  ],
  es: [
    {
      id: 1,
      name: 'CrecivAI',
      description: 'Aplicación full-stack de análisis financiero con IA para evaluación de portafolios, decisiones técnicas y visualización de datos en tiempo real. Desarrollada con arquitectura escalable y diseño moderno.',
      tags: ['React', 'Vite', 'Node.js', 'AI', 'PostgreSQL'],
      link: "https://crecivai.com/landing",
      github: null,
      size: 'large',
      inProgress: false,
    },
    {
      id: 2,
      name: 'Staff Modern',
      description: 'Sitio web para una peluqueria y estetica. Desarrollado con foco en diseño UX/UI, layout responsive y estructura orientada a conversión.',
      tags: ['React', 'Tailwind CSS', 'UX/UI', 'Freelance'],
      link: 'https://www.staffmodern.com.ar/',
      github: null,
      size: 'medium',
      inProgress: false,
    },
    {
      id: 3,
      name: 'Franco Cuatto',
      description: 'Sitio web de portfolio personal para un cliente. Diseño limpio con interacciones fluidas, construido para mostrar el trabajo y la marca personal del cliente.',
      tags: ['React', 'CSS', 'Frontend', 'Freelance'],
      link: 'https://francocuatto.com/',
      github: null,
      size: 'small',
      inProgress: false,
    },
    {
      id: 4,
      name: "Neumaticos Lisandro",
      description: "Sitio web para una gomeria. Desarrollado con foco en experiencia de usuario, con diseño limpio y navegación intuitiva para información y contacto a potenciales clientes.",
      tags: ['React', 'Tailwind CSS', 'UX/UI', 'Freelance'],
      link: 'https://neumaticoslisandro.com.ar/',
      github: null,
      size: 'small',
      inProgress: false,
    }
  ],
}

export const education = {
  en: [
    {
      institution: 'UADE',
      degree: 'Computer Engineering (Ingeniería en Informática)',
      period: '2022 – Present',
    },
    {
      institution: 'Colegio Montessori de Luján',
      degree: 'Bachillerato en Lenguas Extranjeras',
      period: '2016 – 2021',
    },
    {
      institution: 'freeCodeCamp',
      degree: 'Legacy JavaScript Algorithms and Data Structures',
      period: 'Certificate',
    },
  ],
  es: [
    {
      institution: 'UADE',
      degree: 'Ingeniería en Informática',
      period: '2022 – Presente',
    },
    {
      institution: 'Colegio Montessori de Luján',
      degree: 'Bachillerato en Lenguas Extranjeras',
      period: '2016 – 2021',
    },
    {
      institution: 'freeCodeCamp',
      degree: 'Certificación: Algoritmos y Estructuras de Datos en JavaScript',
      period: 'Certificado',
    },
  ],
}

export const languages = {
  en: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Advanced' },
    { name: 'Portuguese', level: 'Basic' },
  ],
  es: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Avanzado' },
    { name: 'Portugués', level: 'Básico' },
  ],
}