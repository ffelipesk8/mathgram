export type NavItem = {
  href: string;
  label: string;
};

export type ServiceItem = {
  index: string;
  title: string;
  body: string;
  glyph: string;
};

export type MethodStep = {
  index: string;
  title: string;
  body: string;
};

export type Pillar = {
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
  { href: "#servicios", label: "Servicios" },
  { href: "#vision", label: "Visión" },
  { href: "#contacto", label: "Contacto" },
];

export const heroCopy = {
  eyebrow: "Mathgram — 01",
  titleLines: ["Hacemos legible", "lo que tu empresa", "ya sabe."],
  titleItalicIndex: 1,
  lead:
    "Mathgram es la capa que articula SaaS, inteligencia artificial y contenido educativo en un solo sistema operable. No sumamos herramientas: estructuramos lo que ya existe para que finalmente escale.",
  primaryCta: { label: "Agendar demo", href: "#contacto" },
  secondaryCta: { label: "Ver cómo funciona", href: "#metodo" },
  metaItems: [
    { num: "01", label: "Estructura" },
    { num: "02", label: "Inteligencia" },
    { num: "03", label: "Aprendizaje" },
  ],
};

export const manifestoCopy = {
  chapter: "Tesis",
  number: "I",
  title: [
    "El problema de las empresas",
    "no es lo que les falta.",
    "Es lo que no logran",
    "articular.",
  ],
  paragraphs: [
    "Las organizaciones crecen llenas de talento, datos y herramientas. Lo que rara vez tienen es una arquitectura que convierta esa abundancia en decisiones repetibles.",
    "Sumar otro software no resuelve un sistema desconectado. Comprar más cursos no garantiza adopción. Agregar otra IA no produce coherencia.",
    "Mathgram opera en la capa que une todo eso: la lógica común que vuelve operable el conocimiento que ya existe — antes de invertir en una herramienta más.",
  ],
  pullquote: "Más no es mejor. Coherente sí lo es.",
};

export const services: ServiceItem[] = [
  {
    index: "01",
    title: "Software como sistema",
    body:
      "Plataformas que ordenan el conocimiento operativo y lo vuelven utilizable día a día. No otro dashboard: el sistema que tu equipo ya estaba buscando.",
    glyph: "∑",
  },
  {
    index: "02",
    title: "Inteligencia artificial aplicada",
    body:
      "Agentes y flujos diseñados sobre tus procesos reales. La IA deja de ser una demo aislada y se convierte en capacidad instalada dentro del equipo.",
    glyph: "∂",
  },
  {
    index: "03",
    title: "Contenido educativo",
    body:
      "Aprendizaje construido sobre tu operación, no extraído de plantillas. La diferencia entre saber algo y poder ejecutarlo bajo presión.",
    glyph: "φ",
  },
];

export const methodSteps: MethodStep[] = [
  {
    index: "01",
    title: "Mapear",
    body:
      "Hacemos visible el conocimiento que circula en la organización: dónde vive, dónde se rompe y qué falta para cerrarlo.",
  },
  {
    index: "02",
    title: "Conectar",
    body:
      "Articulamos personas, datos y herramientas bajo una misma lógica operativa. Una sola gramática, no cuatro.",
  },
  {
    index: "03",
    title: "Activar",
    body:
      "Implementamos producto, IA y contenido como un solo sistema vivo. No tres iniciativas paralelas que compiten por atención.",
  },
  {
    index: "04",
    title: "Escalar",
    body:
      "El crecimiento deja de depender de heroicidades individuales. La capacidad queda instalada en la organización.",
  },
];

export const audienceItems = [
  "Operaciones que escalaron más rápido que sus procesos.",
  "Equipos que aprenden constantemente, pero no consolidan.",
  "Inversión en tecnología sin retorno claro.",
  "Negocios que ya no caben en su intuición fundadora.",
];

export const teamCopy = {
  chapter: "Equipo",
  number: "IV",
  title: ["Cuatro trayectorias,", "un mismo criterio."],
  body:
    "Mathgram fue fundado por cuatro perfiles que vienen de construir, no de teorizar. Matemáticas, empresa, tecnología y emprendimiento — más de quince años traduciendo complejidad en estructuras claras.",
  pillars: [
    {
      title: "Ejecución antes que método",
      body: "El criterio nace de haber operado, no de haber observado.",
    },
    {
      title: "Pensamiento estructural",
      body: "Traducimos sistemas complejos en marcos navegables.",
    },
    {
      title: "Diseño con criterio",
      body: "No agregamos: editamos. Sustraemos lo que no aporta.",
    },
    {
      title: "Sistemas, no piezas",
      body: "Cada decisión cuida cómo encaja con el resto.",
    },
  ] satisfies Pillar[],
};

export const finalCtaCopy = {
  chapter: "Contacto",
  number: "V",
  title: ["Es momento de operar", "lo que tu empresa", "ya sabe."],
  body:
    "Agenda una conversación de treinta minutos. Salimos con un mapa de tu sistema, no con una propuesta enlatada.",
  primary: { label: "Agendar demo", href: "mailto:hola@mathgram.com?subject=Agendar%20demo%20Mathgram" },
  secondary: { label: "Hablar con el equipo", href: "mailto:hola@mathgram.com?subject=Hablar%20con%20el%20equipo%20Mathgram" },
};

export const audienceCopy = {
  chapter: "Para quién",
  number: "III",
  title: ["Construido para empresas", "que ya sintieron el costo", "del desorden."],
  lead:
    "No trabajamos con quien busca otra herramienta. Trabajamos con quien ya entendió que lo que falta es coherencia.",
};

export const servicesCopy = {
  chapter: "Servicios",
  number: "II",
  title: ["Tres capacidades.", "Un mismo sistema."],
  lead:
    "Producto, IA y aprendizaje no se diseñan como frentes separados. Se refuerzan entre sí o no funcionan.",
};

export const methodCopy = {
  chapter: "Método",
  number: "II ·",
  title: ["Cómo se opera", "un sistema de conocimiento."],
  lead:
    "Cuatro movimientos. Sin saltos, sin frameworks prestados. Lo mínimo necesario para que un equipo deje de improvisar.",
};

export const visionCopy = {
  chapter: "Visión",
  number: "—",
  title: ["Las empresas no necesitan", "más herramientas.", "Necesitan", "mejores sistemas."],
  paragraphs: [
    "Más software no garantiza adopción. Más contenido no produce aprendizaje. Más tecnología no asegura impacto.",
    "El valor real aparece cuando existe una lógica compartida entre lo que la empresa sabe, lo que hace y la forma en que crece.",
  ],
  pullquote: "Nuestro trabajo es volver ese conocimiento operable.",
};
