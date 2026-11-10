// Contenido del sitio. Los textos de piezas, bios y contacto son provisionales e inventados
// (aprobados por Engrama, 2026-10-14). Lo marcado como TODO sigue pendiente de datos reales:
// números de colegiada y testimonios no se inventan.

export type Psychologist = {
  name: string;
  role: string;
  bio: string;
  /** TODO: número de colegiada real. */
  license: string | null;
};

export const team: Psychologist[] = [
  {
    name: "Bianca",
    role: "Psicóloga sanitaria · Duelo y vínculos",
    bio: "Acompaña procesos de pérdida y cambio. Usa el retrato y el álbum familiar para que lo que duele tenga dónde apoyarse.",
    license: null,
  },
  {
    name: "Laura",
    role: "Psicóloga · Autoestima y grupos",
    bio: "Coordina los talleres. Trabaja la mirada propia con autorretrato y fotografía de lo cotidiano, sin necesidad de saber de cámaras.",
    license: null,
  },
];

export type Service = {
  id: string;
  title: string;
  lead: string;
  body: string;
  mode: string;
  duration: string;
  with: string;
  message: string;
};

export const services: Service[] = [
  {
    id: "sesiones",
    title: "Sesiones individuales",
    lead: "Una cámara, una psicóloga y tú.",
    body: "Sesiones fotográficas con acompañamiento psicológico para poner imagen a lo que sientes y reconocerlo cuando aparece.",
    mode: "Presencial u online",
    duration: "60 min",
    with: "Con Bianca o Laura",
    message: "Hola, me interesan las sesiones individuales de fotografía terapéutica.",
  },
  {
    id: "talleres",
    title: "Talleres grupales",
    lead: "Mirar con otros también cura.",
    body: "Encuentros en grupo donde la fotografía sirve para expresar emociones, compartirlas y escuchar las de los demás.",
    mode: "Presencial",
    duration: "4 sesiones",
    with: "Con Laura",
    message: "Hola, me gustaría información sobre los talleres grupales.",
  },
  {
    id: "formacion",
    title: "Formación",
    lead: "Para quien acompaña a otros.",
    body: "Formación sobre fotografía y emociones para profesionales y para quien quiera usar la imagen como herramienta.",
    mode: "Presencial u online",
    duration: "20 h",
    with: "Con Bianca y Laura",
    message: "Hola, me interesa la formación sobre fotografía y emociones.",
  },
];

export type ContactGroup = { title: string; note: string };

export const contactGroups = {
  write: {
    title: "Escríbenos",
    note: "Por WhatsApp, a cualquier hora. Te contestamos nosotras en menos de un día.",
  },
  call: { title: "Llámanos", note: "De lunes a viernes, de 10:00 a 19:00." },
  where: {
    title: "Dónde estamos",
    note: "Por toda España en presencial y, desde cualquier sitio, por videollamada.",
  },
} satisfies Record<string, ContactGroup>;

/** Textos mientras no haya WhatsApp ni teléfono configurados (primera versión publicada). */
export const contactSoon = {
  write: "Muy pronto podrás escribirnos por WhatsApp. Estamos preparando el canal.",
  call: "El teléfono llega en unos días. Vuelve pronto.",
};

export type Testimonial = { quote: string; author: string; context?: string };

// TODO: testimonios reales con permiso. Mientras esté vacío, la sección no se muestra.
export const testimonials: Testimonial[] = [];

// Puertas (servicios) y sus páginas: texto del briefing v2 (apps/engramaBriefing.md, 2026-11-08),
// recuperado de la rama engrama-v2.

export type OfferItem = { title: string; body?: string };

export type Offer = { title: string; body?: string; items?: OfferItem[] };

export type OfferGroup = {
  title: string;
  intro?: string[];
  list?: string[];
  items?: OfferItem[];
  offers?: Offer[];
  /** Texto que cierra el grupo. */
  note?: string;
};

export type Emphasized = { text: string; emphasis: string };

export type Door = {
  slug: "organizaciones" | "personas" | "artistas";
  /** Número de sección dentro del número de la revista. */
  numeral: "I" | "II" | "III";
  name: string;
  /** Frase del briefing para la plancha de la portadilla. */
  plate: Emphasized;
  /** Cita a todo el ancho tras el índice de grupos. */
  pullQuote?: Emphasized;
  /** Titular de su página; `emphasis` va en cursiva (debe aparecer tal cual en `title`). */
  title: string;
  emphasis: string;
  intro: string[];
  /** Asunto del correo que se abre desde esta puerta. */
  subject: string;
  contact: string;
  groups: OfferGroup[];
};

export const doors: Door[] = [
  {
    slug: "organizaciones",
    numeral: "I",
    name: "Organizaciones",
    plate: {
      text: "Escuchar, visibilizar experiencias y generar relatos colectivos.",
      emphasis: "relatos colectivos",
    },
    pullQuote: {
      text: "El resultado visual nunca es una obligación: lo importante es el proceso.",
      emphasis: "el proceso",
    },
    title: "Psicología y fotografía en contextos colectivos",
    emphasis: "contextos colectivos",
    intro: [
      "Colaboramos con organizaciones, entidades, centros educativos, espacios culturales y equipos profesionales que quieren incorporar la fotografía a sus proyectos de bienestar, cuidado, participación y transformación social.",
      "Diseñamos intervenciones adaptadas al contexto y a las personas participantes, combinando herramientas psicológicas, metodologías participativas y creación visual.",
    ],
    subject: "Propuesta para una organización",
    contact:
      "¿Eres una organización que quiere incorporar la fotografía a sus proyectos de acompañamiento?",
    groups: [
      {
        title: "Acompañamiento e intervención con grupos",
        list: [
          "Proyectos de acompañamiento a través de la fotografía en centros residenciales, centros de día y entidades sociales.",
          "Intervenciones con personas mayores, personas con discapacidad y personas neurodivergentes.",
          "Propuestas para personas con dificultades de comunicación o que encuentran en los lenguajes visuales otras formas de expresión.",
          "Espacios grupales para trabajar memoria, identidad, vínculos, emociones y experiencias compartidas.",
          "Proyectos de expresión y participación con colectivos en contextos de vulnerabilidad y exclusión.",
        ],
      },
      {
        title: "Bienestar y desarrollo de equipos",
        list: [
          "Talleres sobre fotografía, emociones y bienestar.",
          "Espacios de reflexión sobre la mirada, la representación y la construcción de significado.",
          "Experiencias fotográficas para favorecer la comunicación, la creatividad y la conexión entre equipos.",
          "Acompañamiento a profesionales de los ámbitos social, educativo, cultural y de los cuidados.",
        ],
      },
      {
        title: "Conferencias y encuentros",
        items: [
          {
            title: "Mirar lo que miramos:",
            body: "fotografía, percepción y significado.",
          },
          { title: "¿Qué puede hacer una fotografía por nosotros?" },
          { title: "La fotografía como memoria, identidad y vínculo." },
          {
            title: "Imágenes que cuidan:",
            body: "posibilidades de la fotografía en contextos de acompañamiento.",
          },
        ],
      },
      {
        title: "Proyectos participativos y culturales",
        intro: [
          "Diseñamos proyectos que utilizan la fotografía para escuchar, visibilizar experiencias y generar relatos colectivos.",
          "Trabajamos con metodologías como Photovoice, la fotografía participativa y la exploración de narrativas visuales.",
          "También colaboramos en exposiciones, publicaciones, archivos comunitarios y proyectos de mediación cultural.",
        ],
      },
    ],
  },
  {
    slug: "personas",
    numeral: "II",
    name: "Personas",
    plate: {
      text: "Las imágenes se convierten en un punto de partida.",
      emphasis: "punto de partida",
    },
    pullQuote: {
      text: "No es necesario tener conocimientos técnicos ni experiencia fotográfica.",
      emphasis: "No es necesario",
    },
    title: "Acompañamiento a través de la fotografía",
    emphasis: "fotografía",
    intro: [
      "La fotografía puede abrir una vía para explorar experiencias, emociones y aspectos de nuestra historia que a veces resultan difíciles de expresar únicamente con palabras.",
      "En Engrama proponemos espacios individuales y grupales donde las imágenes se convierten en un punto de partida para recordar, asociar, crear, representar y compartir experiencias.",
      "Trabajamos tanto con fotografías personales como con imágenes encontradas y fotografías creadas durante el proceso. No es necesario tener conocimientos técnicos ni experiencia fotográfica: lo importante es la relación que cada persona establece con las imágenes.",
    ],
    subject: "Propuestas para personas",
    contact: "¿Buscas una propuesta para un grupo o un espacio individual?",
    groups: [
      {
        title: "¿Qué podemos explorar?",
        items: [
          {
            title: "Memoria e historia personal:",
            body: "recuerdos, experiencias significativas y etapas vitales.",
          },
          {
            title: "Emociones:",
            body: "identificación, expresión y exploración de experiencias emocionales.",
          },
          {
            title: "Identidad y autorrepresentación:",
            body: "cómo nos vemos, cómo nos mostramos y cómo construimos nuestra imagen.",
          },
          {
            title: "Vínculos y relaciones:",
            body: "personas significativas, pertenencia, familia y relaciones afectivas.",
          },
          {
            title: "Cambios y transiciones:",
            body: "experiencias de pérdida, transformación y adaptación.",
          },
          {
            title: "Recursos personales:",
            body: "capacidades, autonomía, reconocimiento y nuevas perspectivas sobre uno mismo.",
          },
        ],
      },
      {
        title: "¿Con quién trabajamos?",
        intro: [
          "Diseñamos propuestas adaptadas a diferentes edades, necesidades y formas de comunicación:",
        ],
        items: [
          {
            title: "Personas mayores,",
            body: "explorando memoria autobiográfica, identidad, recuerdos y vínculos.",
          },
          {
            title: "Personas con discapacidad,",
            body: "favoreciendo la expresión personal, la autonomía y la comunicación.",
          },
          {
            title: "Personas autistas y neurodivergentes,",
            body: "adaptando las propuestas a sus formas de percepción, comunicación e interacción.",
          },
          {
            title: "Personas que encuentran dificultades",
            body: "para expresar verbalmente sus experiencias.",
          },
          {
            title: "Personas que atraviesan cambios vitales,",
            body: "procesos de adaptación o momentos de búsqueda personal.",
          },
          {
            title: "Grupos",
            body: "que quieren compartir experiencias y construir relatos colectivos.",
          },
        ],
      },
      {
        title: "¿Cómo trabajamos con las fotografías?",
        intro: [
          "Cada propuesta se adapta a los objetivos y características del proceso. Algunas de las principales formas de intervención son:",
        ],
        offers: [
          {
            title: "Fotografías personales y familiares",
            body: "Trabajamos con imágenes de la propia historia para explorar recuerdos, vínculos, identidad y experiencias significativas.",
          },
          {
            title: "Fotografías proyectivas",
            body: "Utilizamos imágenes seleccionadas para facilitar asociaciones personales, explorar emociones y abrir nuevas preguntas sobre experiencias actuales.",
          },
          {
            title: "Creación fotográfica",
            body: "Proponemos ejercicios de observación y producción de imágenes para expresar experiencias, explorar el entorno y desarrollar nuevas formas de representación.",
          },
          {
            title: "Autorretrato y autorrepresentación",
            body: "Trabajamos con diferentes formas de representarse, explorar la relación con el cuerpo y reflexionar sobre la identidad y la mirada propia y ajena.",
          },
          {
            title: "Secuencias y narrativas visuales",
            body: "Organizamos fotografías para construir relatos sobre la propia historia, los vínculos y los procesos de cambio.",
          },
        ],
      },
      {
        title: "Propuestas y formatos",
        offers: [
          {
            title: "Procesos individuales",
            body: "Un espacio de acompañamiento personalizado en el que las fotografías y la creación visual pueden ayudar a explorar una experiencia, una pregunta o un momento vital.",
          },
          {
            title: "Procesos grupales",
            body: "Encuentros donde las imágenes facilitan la expresión, el intercambio y la construcción de significados compartidos.",
          },
          {
            title: "Talleres temáticos",
            items: [
              { title: "Volver a mirar:", body: "memoria e identidad." },
              { title: "Autorretrato sin cara:", body: "otras formas de representarnos." },
              { title: "El álbum:", body: "historias, vínculos y recuerdos." },
              { title: "Mirar de otra manera:", body: "emociones y percepción." },
              { title: "Raíces y mudanzas:", body: "imágenes de pertenencia y transformación." },
            ],
          },
          {
            title: "Intervenciones en centros y entidades",
            body: "Diseñamos programas específicos para residencias, centros de día, asociaciones, entidades sociales y espacios educativos, ajustando la metodología, los objetivos y la duración a cada contexto.",
          },
        ],
      },
    ],
  },
  {
    slug: "artistas",
    numeral: "III",
    name: "Artistas",
    plate: { text: "Una manera propia de mirar y contar.", emphasis: "mirar y contar" },
    title: "Acompañamiento de proyectos fotográficos",
    emphasis: "proyectos fotográficos",
    intro: [
      "Crear un proyecto fotográfico también implica tomar decisiones, posicionarse y encontrar una manera propia de mirar y contar.",
      "Ofrecemos espacios de acompañamiento y reflexión para artistas y fotógrafos que quieran profundizar en sus proyectos, explorar sus motivaciones y desarrollar su lenguaje visual.",
      "Trabajamos desde una perspectiva que combina psicología, cultura visual y práctica fotográfica.",
    ],
    subject: "Acompañamiento de proyecto",
    contact: "¿Eres artista y quieres explorar tu proyecto desde otra mirada?",
    groups: [
      {
        title: "Qué ofrecemos",
        list: [
          "Acompañamiento individual de proyectos fotográficos.",
          "Exploración de motivaciones personales y temas recurrentes.",
          "Desarrollo de narrativas y secuencias visuales.",
          "Reflexión sobre la mirada, la representación y la relación con las personas fotografiadas.",
          "Construcción del relato y del texto de artista.",
          "Espacios colectivos de lectura y reflexión sobre proyectos.",
        ],
        note: "Nos interesa tanto el resultado visual como el proceso que lo hace posible.",
      },
    ],
  },
];

export function getDoor(slug: Door["slug"]) {
  const door = doors.find((d) => d.slug === slug);
  if (!door) throw new Error(`Puerta desconocida: ${slug}`);
  return door;
}

/** La sección que sigue a esta en el número; tras la última, ninguna (se vuelve a la portada). */
export function nextDoor(slug: Door["slug"]) {
  return doors[doors.findIndex((d) => d.slug === slug) + 1];
}

/** Ancla legible a partir de un título: «¿Cómo trabajamos?» → «como-trabajamos». */
export function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const contactInvite = "Nos encantará conocer tu idea y pensar juntas cómo darle forma.";
