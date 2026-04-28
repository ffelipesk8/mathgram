export type NavItem = {
  href: string;
  label: string;
};

export type ServiceItem = {
  title: string;
  body: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type MethodStep = {
  index: string;
  title: string;
  body: string;
};

export type DiffItem = {
  title: string;
  body: string;
};

export const brand = {
  name: "Mathgram",
  tagline: "De conocimiento a sistemas",
  email: "hola@mathgram.com",
};

export const navItems: NavItem[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#educacion", label: "Educaci\u00f3n" },
  { href: "#contacto", label: "Contacto" },
];

export const heroCopy = {
  eyebrow: "Mathgram",
  titleLines: [
    "Tecnolog\u00eda de alta calidad para",
    "conocimiento, educaci\u00f3n y crecimiento.",
  ],
  lead:
    "Mathgram une software, inteligencia artificial y contenido educativo para convertir el conocimiento de una organizaci\u00f3n en sistemas claros, modernos y escalables.",
  primaryCta: { label: "Agendar demo", href: "#contacto" },
  secondaryCta: { label: "Ver soluciones", href: "#soluciones" },
};

export const manifestoCopy = {
  title: ["Una visi\u00f3n experta,", "una ejecuci\u00f3n real."],
  paragraphs: [
    "No somos una suma de servicios aislados. Somos una estructura que combina estrategia, software, inteligencia artificial y aprendizaje para dise\u00f1ar sistemas que s\u00ed funcionan.",
    "Mathgram existe para ayudar a empresas que ya tienen conocimiento, experiencia y herramientas, pero todav\u00eda no logran convertir todo eso en una operaci\u00f3n coherente.",
    "Nuestro trabajo no es agregar complejidad. Es darle forma al conocimiento para que pueda escalar.",
  ],
};

export const stats: StatItem[] = [
  { value: "3", label: "\u00c1reas integradas: SaaS, IA y contenido educativo" },
  { value: "15+", label: "A\u00f1os de experiencia acumulada en ejecuci\u00f3n real" },
  { value: "1", label: "Sistema conectado en lugar de soluciones separadas" },
  { value: "LatAm", label: "Contexto regional con est\u00e1ndar de ejecuci\u00f3n global" },
];

export const servicesIntro = {
  title: ["Lo que construimos", "en Mathgram"],
  lead:
    "Cada soluci\u00f3n nace del cruce entre operaci\u00f3n, tecnolog\u00eda y aprendizaje. No trabajamos por silos.",
};

export const services: ServiceItem[] = [
  {
    title: "Software y plataformas",
    body:
      "Desarrollo de productos y plataformas que ordenan procesos, estructuran conocimiento y sostienen crecimiento real.",
  },
  {
    title: "SaaS y LMS",
    body:
      "Sistemas dise\u00f1ados para escalar experiencias de software y aprendizaje con una arquitectura clara y mantenible.",
  },
  {
    title: "IA aplicada y automatizaci\u00f3n",
    body:
      "Implementaci\u00f3n de agentes, automatizaciones y flujos de IA con impacto operativo, no solo demostrativo.",
  },
  {
    title: "Contenido educativo premium",
    body:
      "Dise\u00f1o instruccional y producci\u00f3n de contenido que ense\u00f1a, activa y acompa\u00f1a la adopci\u00f3n real dentro del negocio.",
  },
  {
    title: "Sistemas de experiencia y engagement",
    body:
      "Dise\u00f1amos interacciones, mec\u00e1nicas y recorridos que aumentan claridad, adopci\u00f3n y compromiso del usuario.",
  },
  {
    title: "Estrategia para crecimiento",
    body:
      "Traducimos visi\u00f3n de negocio en sistemas accionables: mejor posicionamiento, mejor adopci\u00f3n y mejor ejecuci\u00f3n.",
  },
];

export const educationCopy = {
  title: ["Llevamos lo mejor de la tecnolog\u00eda", "al aprendizaje y a la operaci\u00f3n."],
  body:
    "Ayudamos a empresas, instituciones, academias y equipos en crecimiento a modernizar su conocimiento con software, contenido, automatizaci\u00f3n y experiencias de alto nivel.",
};

export const educationProblems = [
  "Plataformas que no comunican valor con claridad",
  "Procesos manuales que frenan el crecimiento",
  "Productos digitales sin una l\u00f3gica estrat\u00e9gica com\u00fan",
  "Contenido que informa, pero no ense\u00f1a ni transforma",
  "Inversi\u00f3n en tecnolog\u00eda sin adopci\u00f3n real",
];

export const dashboardStats: StatItem[] = [
  { value: "1,284", label: "Usuarios activos" },
  { value: "87%", label: "Finalizaci\u00f3n" },
  { value: "24", label: "M\u00f3dulos vivos" },
];

export const dashboardFeed = [
  {
    initials: "MS",
    title: "M\u00f3dulo 4: Dise\u00f1o instruccional",
    meta: "IA aplicada \u00b7 32 min restantes",
    badge: "Activo",
  },
  {
    initials: "AL",
    title: "Sprint: Gamificaci\u00f3n avanzada",
    meta: "LMS Enterprise \u00b7 8 participantes",
    badge: "En curso",
  },
];

export const methodCopy = {
  title: ["Nuestro proceso"],
  lead:
    "Un m\u00e9todo iterativo y multidisciplinario para construir sistemas de alta calidad de principio a fin.",
};

export const methodSteps: MethodStep[] = [
  {
    index: "01",
    title: "Estrategia",
    body: "Diagn\u00f3stico, contexto y definici\u00f3n de objetivos reales.",
  },
  {
    index: "02",
    title: "Dise\u00f1o",
    body: "Arquitectura, UX, estructura de experiencia y decisiones de claridad.",
  },
  {
    index: "03",
    title: "Desarrollo",
    body: "Ingenier\u00eda de producto con calidad, consistencia y foco operativo.",
  },
  {
    index: "04",
    title: "Contenido",
    body: "Dise\u00f1o instruccional y producci\u00f3n de activos que ense\u00f1an.",
  },
  {
    index: "05",
    title: "Implementaci\u00f3n",
    body: "Despliegue, activaci\u00f3n y alineaci\u00f3n con equipos reales.",
  },
  {
    index: "06",
    title: "Optimizaci\u00f3n",
    body: "Iteraci\u00f3n con aprendizaje, datos y evoluci\u00f3n continua.",
  },
];

export const visionCopy = {
  title: ["Las empresas no necesitan", "m\u00e1s herramientas.", "Necesitan mejores sistemas."],
  paragraphs: [
    "M\u00e1s software no garantiza adopci\u00f3n. M\u00e1s contenido no produce aprendizaje. M\u00e1s tecnolog\u00eda no asegura resultados.",
    "El valor real aparece cuando existe una l\u00f3gica compartida entre lo que la empresa sabe, lo que hace y la forma en que crece.",
    "Mathgram opera precisamente en esa capa: la que articula producto, inteligencia y aprendizaje bajo una sola estructura.",
  ],
  pullquote: "No agregamos piezas. Dise\u00f1amos el sistema que las conecta.",
};

export const diffIntro = {
  title: ["Lo que nos diferencia"],
  lead:
    "Mathgram combina exigencia de producto, criterio estrat\u00e9gico y ejecuci\u00f3n interdisciplinaria.",
};

export const differentiators: DiffItem[] = [
  {
    title: "Calidad como est\u00e1ndar",
    body: "No entregamos lo suficiente. Dise\u00f1amos y construimos con el nivel de exigencia de un producto serio.",
  },
  {
    title: "Experiencia multidisciplinaria",
    body: "Estrategia, software, IA y educaci\u00f3n trabajando juntos, no como disciplinas separadas.",
  },
  {
    title: "Ejecuci\u00f3n con visi\u00f3n",
    body: "No solo hacemos lo pedido. Aportamos criterio en la forma de estructurarlo.",
  },
  {
    title: "Contexto regional, nivel global",
    body: "Entendemos el mercado latinoamericano y ejecutamos con est\u00e1ndares internacionales.",
  },
];

export const teamCopy = {
  title: ["Experiencia que conecta", "empresa, tecnolog\u00eda y aprendizaje."],
  body:
    "Mathgram fue creado por cuatro perfiles con experiencia en matem\u00e1ticas, empresa, tecnolog\u00eda y emprendimiento. Venimos de construir, optimizar y escalar operaciones reales.",
};

export const finalCtaCopy = {
  title: ["Hablemos de la soluci\u00f3n", "que tu organizaci\u00f3n necesita."],
  body:
    "Si est\u00e1s construyendo una plataforma, un producto educativo, una experiencia SaaS o un sistema de conocimiento m\u00e1s claro, podemos ayudarte a convertirlo en algo real.",
  primary: {
    label: "Contactarnos",
    href: "mailto:hola@mathgram.com?subject=Hablemos%20de%20Mathgram",
  },
  secondary: {
    label: "Agendar demo",
    href: "mailto:hola@mathgram.com?subject=Agendar%20demo%20Mathgram",
  },
};
