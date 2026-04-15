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

export const experience = [
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
]

export const projects = [
  {
    id: 1,
    name: 'Staff Modern',
    description: 'Corporate website for an Argentine recruitment and staffing company. Built with a focus on UX/UI design, responsive layout, and conversion-oriented structure.',
    tags: ['React', 'Tailwind CSS', 'UX/UI', 'Freelance'],
    link: 'https://www.staffmodern.com.ar/',
    github: null,
    size: 'large',
    inProgress: false,
  },
  {
    id: 2,
    name: 'Franco Cuatto',
    description: 'Personal portfolio website for a client. Clean design with smooth interactions, built to effectively showcase the client\'s work and personal brand.',
    tags: ['React', 'CSS', 'Frontend', 'Freelance'],
    link: 'https://francocuatto.com/',
    github: null,
    size: 'medium',
    inProgress: false,
  },
  {
    id: 3,
    name: 'Corralito',
    description: 'Business management tool for budgets, supplier relationships, and product pricing. Features a dashboard, quotation system, and multi-supplier price lists.',
    tags: ['React', 'Vite', 'Node.js', 'In Progress'],
    link: null,
    github: 'https://github.com/LuisIngrassia/corralito',
    size: 'medium',
    inProgress: true,
  },
]

export const education = [
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
]

export const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Advanced' },
  { name: 'Portuguese', level: 'Basic' },
]

// Full CV text for the AI analyzer backend context
export const cvText = `
Name: Luis Pedro Ingrassia
Role: Full-Stack Developer

About: Computer Engineering student currently developing microservices and infrastructure tools in Go and Java. Background combines technical rigor of high-scale backend architectures with a strong creative side as a freelance Full-Stack Developer, specializing in React and Tailwind CSS. Current goal is to move into Full-Stack or Front-end roles, applying analytical skills and focus on user experience (UX) to build end-to-end digital products.

Experience:
- Software Engineer at Mercadolibre (February 2025 – March 2026): Development of microservices and applications using Go and Java (Spring Boot) within the Fury ecosystem. Creation and maintenance of internal SDKs. Design of Datadog dashboards for monitoring. Unit and end-to-end testing. CI/CD participation.
- Freelance Full-Stack Developer (January 2022 – February 2025): Comprehensive web design and development. UX/UI focus. Booking systems, service catalogs, promotion management.

Skills: React, Tailwind CSS, Spring Boot, Node.js, JavaScript, DataDog, Python, Java, Git/GitHub, Go, MySQL, Jira

Languages: Spanish (Native), English (Advanced), Portuguese (Basic)

Education: Computer Engineering at UADE (2022 – present), Bachillerato en Lenguas Extranjeras at Colegio Montessori de Luján (2016-2021), Legacy JavaScript Algorithms and Data Structures certification (freeCodeCamp)
`
