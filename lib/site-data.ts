import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  BrainCircuit,
  ChartNoAxesCombined,
  Network,
  Orbit,
  Sparkles,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
};

export type ServiceItem = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#vision", label: "Visión" },
  { href: "#contacto", label: "Contacto" },
];

export const services: ServiceItem[] = [
  {
    title: "Software as a Service",
    body: "Plataformas diseñadas para ordenar, operacionalizar y escalar el conocimiento dentro de organizaciones que ya están creciendo.",
    icon: Blocks,
  },
  {
    title: "Inteligencia Artificial",
    body: "Agentes y flujos de IA que acompañan procesos reales, automatizan tareas clave y amplifican la capacidad de cada equipo.",
    icon: BrainCircuit,
  },
  {
    title: "Contenido educativo",
    body: "Experiencias de aprendizaje claras, aplicables y profundamente alineadas con el contexto operativo del negocio.",
    icon: Sparkles,
  },
];

export const valuePoints = [
  "Organizamos el conocimiento dentro de tu empresa",
  "Conectamos tecnología, contenido y personas",
  "Aplicamos inteligencia artificial de forma útil",
  "Convertimos aprendizaje en resultados",
];

export const audienceItems = [
  "Organizaciones en crecimiento",
  "Equipos en expansión",
  "Empresas que invierten en tecnología sin retorno claro",
  "Compañías que necesitan escalar conocimiento",
];

export const transformation = {
  before: [
    "Información desconectada",
    "Procesos manuales",
    "Bajo engagement",
    "Poca adopción tecnológica",
  ],
  after: [
    "Conocimiento estructurado",
    "Sistemas conectados",
    "Procesos optimizados",
    "Aprendizaje escalable",
  ],
};

export const pillars = [
  {
    title: "Mapear",
    body: "Le damos forma al conocimiento disperso para hacerlo visible, utilizable y transferible.",
    icon: Orbit,
  },
  {
    title: "Conectar",
    body: "Integramos personas, flujos y tecnología para que cada pieza tenga sentido dentro del sistema.",
    icon: Network,
  },
  {
    title: "Escalar",
    body: "Diseñamos activos y procesos que sostienen el crecimiento sin multiplicar la complejidad.",
    icon: ChartNoAxesCombined,
  },
];

export const manifestoParagraphs = [
  "El problema no es la falta de conocimiento. Nunca lo ha sido.",
  "Las empresas están llenas de experiencia, talento, procesos y herramientas. Pero ese potencial rara vez se convierte en resultados reales porque el conocimiento no está estructurado, no está conectado y no está diseñado para escalar.",
  "Durante años, la respuesta ha sido sumar más software, más contenido y más tecnología. Pero más no es mejor cuando nada funciona en conjunto.",
  "Mathgram nace desde una idea clara: el verdadero valor no está en agregar más piezas. Está en entender cómo funcionan juntas.",
  "Combinamos Software as a Service, inteligencia artificial y creación de contenido educativo para transformar el conocimiento en sistemas que realmente funcionan.",
  "No venimos de la teoría. Venimos de la ejecución. Más de 15 años construyendo empresas nos enseñaron que el problema no son las herramientas, sino cómo se usan y cómo se conectan.",
  "No creamos soluciones aisladas. Construimos sistemas donde el conocimiento fluye, la tecnología tiene propósito y el aprendizaje se convierte en acción.",
  "No agregamos complejidad. Creamos estructura. Porque las empresas no necesitan empezar de cero: necesitan activar lo que ya tienen.",
];
