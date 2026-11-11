// Contenido del sitio: texto de Engrama «Psicología y fotografía» (entregado el 2026-11-11).
// Lo marcado como TODO sigue pendiente de datos reales: números de colegiada, enlace de Instagram
// y testimonios no se inventan.

export type Psychologist = {
  name: string;
  role: string;
  bio: string[];
  /** TODO: número de colegiada real. Mientras sea null, no se muestra. */
  license: string | null;
  /** Retrato real (public/img/equipo/), con el mismo tratamiento cálido que el resto de fotos. */
  photo: { src: string; alt: string };
};

export const team: Psychologist[] = [
  {
    name: "Bianca Re",
    role: "Psicóloga y fotógrafa",
    bio: [
      "Su trabajo se sitúa en el encuentro entre la psicología, la fotografía y la cultura visual. Cuenta con experiencia en acompañamiento psicosocial, intervención comunitaria y proyectos con personas y colectivos en contextos de vulnerabilidad y exclusión.",
      "Su práctica incorpora una perspectiva feminista y de género, y entiende la fotografía como una herramienta para explorar la identidad, la memoria, las emociones y las formas de relación.",
      "Le interesa especialmente el potencial de las imágenes para abrir espacios de expresión y construir relatos propios, tanto a nivel individual como colectivo.",
    ],
    license: null,
    photo: {
      src: "/img/equipo/bianca.webp",
      alt: "Retrato de Bianca, con el pelo rizado, mirando de lado junto a un cuadro de una mujer pintada",
    },
  },
  {
    name: "Laura van Berwaer",
    role: "Psicóloga",
    bio: [
      "Para ella, la fotografía es un puente al mundo emocional: una forma de expresar y dar sentido a lo que vivimos, a solas y en grupo.",
      "Su mirada combina la psicología y la experiencia fotográfica, con interés por los procesos personales y colectivos que pueden surgir al observar, crear y compartir imágenes.",
    ],
    license: null,
    photo: {
      src: "/img/equipo/laura.webp",
      alt: "Retrato de Laura de perfil, con gorro negro y chaleco marrón, en la calle",
    },
  },
];

/** Portada: entrada, presentación y «¿Por qué Engrama?». */
export const home = {
  tagline: "Psicología y fotografía",
  hero: {
    title: "Mirar, expresar y dar sentido a través de las imágenes.",
    lead: "En Engrama unimos psicología y fotografía para desarrollar propuestas de acompañamiento, exploración personal y creación colectiva.",
  },
  intro: {
    statement:
      "Trabajamos con las imágenes como una vía para explorar la memoria, las emociones, la identidad y los vínculos.",
    paragraphs: [
      "Nos interesa tanto lo que una fotografía muestra como aquello que despierta, evoca y permite elaborar. Diseñamos experiencias para personas, grupos, organizaciones y artistas, combinando conocimientos psicológicos, práctica fotográfica y metodologías participativas.",
      "Entendemos la fotografía no solo como una representación de lo que hemos vivido, sino también como una oportunidad para explorar cómo lo recordamos, lo sentimos y le damos significado.",
    ],
  },
  why: {
    title: "¿Por qué Engrama?",
    conviction:
      "En Engrama partimos de una convicción: mirar una imagen también es una forma de relacionarnos con nuestra propia historia.",
    paragraphs: [
      "Las imágenes forman parte de nuestra vida psicológica. Nos ayudan a recordar, construir nuestra identidad, relacionarnos con otras personas y dar sentido a nuestras experiencias.",
      "Una fotografía puede activar un recuerdo, despertar una emoción, hacer visible una experiencia o abrir una conversación que hasta entonces no había encontrado palabras.",
      "Desde la psicología, nos interesa explorar los procesos de memoria, identificación, expresión emocional y construcción de significado que se ponen en juego al mirar y crear fotografías.",
      "Desde la práctica fotográfica, trabajamos con la capacidad de las imágenes para representar, narrar, comunicar y generar nuevas perspectivas.",
      "Es en ese encuentro donde situamos nuestra práctica: entre la experiencia psicológica, la creación visual y la relación con los demás.",
    ],
  },
};

export type MethodStep = { title: string; body: string; image: string };

/** «Cómo trabajamos»: cinco pasos. `image` es una clave de sectionImages. */
export const method = {
  intro:
    "Cada persona, grupo y organización tiene una historia y unas necesidades diferentes. Por eso no aplicamos una metodología cerrada: diseñamos cada propuesta a partir del contexto y de los objetivos del proceso.",
  steps: [
    {
      title: "Escuchar y comprender",
      body: "Conocemos a las personas participantes, el contexto y las necesidades a las que queremos responder.",
      image: "como-escuchar",
    },
    {
      title: "Diseñar la propuesta",
      body: "Definimos los objetivos, el formato, las actividades y los recursos necesarios. Adaptamos el lenguaje y las dinámicas a las capacidades y formas de expresión de cada grupo.",
      image: "como-disenar",
    },
    {
      title: "Mirar, crear y explorar",
      body: "Trabajamos con fotografías personales, imágenes encontradas o ejercicios de creación visual. La experiencia puede ser individual o colectiva.",
      image: "como-mirar",
    },
    {
      title: "Acompañar el proceso",
      body: "Facilitamos espacios de observación, diálogo y reflexión, respetando los tiempos, límites y decisiones de cada persona.",
      image: "como-acompanar",
    },
    {
      title: "Dar forma a lo vivido",
      body: "Cuando tiene sentido para el grupo, el proceso puede culminar en una exposición, un álbum, una publicación o una creación colectiva. El resultado visual nunca es una obligación: lo importante es el proceso y el significado que tiene para quienes participan.",
      image: "como-dar-forma",
    },
  ] satisfies MethodStep[],
  care: "Trabajamos desde el respeto, la participación y el consentimiento. Las imágenes personales son especialmente sensibles: cuidamos su uso, su circulación y la decisión de cada persona sobre qué quiere compartir.",
};

/** Cierre de la portada: «¿Hablamos?». */
export const closing = {
  questions: [
    "¿Eres una organización que quiere incorporar la fotografía a sus proyectos de acompañamiento?",
    "¿Buscas una propuesta para un grupo o un espacio individual?",
    "¿Eres artista y quieres explorar tu proyecto desde otra mirada?",
  ],
  plate: {
    text: "Nos encantará conocer tu idea y pensar juntas cómo darle forma.",
    emphasis: "darle forma",
  },
};

export type ContactGroup = { title: string; note: string };

export const contactGroups = {
  email: { title: "Correo", note: "Cuéntanos tu idea por escrito." },
  instagram: { title: "Instagram", note: "Síguenos y escríbenos." },
  whatsapp: {
    title: "WhatsApp",
    note: "Por WhatsApp, a cualquier hora. Te contestamos nosotras en menos de un día.",
  },
  where: {
    title: "Dónde estamos",
    note: "Por toda España en presencial y, desde cualquier sitio, por videollamada.",
  },
} satisfies Record<string, ContactGroup>;

/** TODO: enlace de Instagram de Engrama. Mientras sea null, el cierre dice que llega pronto. */
export const instagramUrl: string | null = null;

/** Textos mientras no haya WhatsApp ni Instagram configurados. */
export const contactSoon = {
  whatsapp: "Muy pronto podrás escribirnos por WhatsApp. Estamos preparando el canal.",
  instagram: "Muy pronto. Estamos preparando la cuenta.",
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
  slug: "organizaciones" | "personas" | "artistas" | "fototerapia";
  /** Número de sección dentro del número de la revista. */
  numeral: "I" | "II" | "III" | "IV";
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
        intro: [
          "Desarrollamos encuentros y conferencias que exploran la relación entre psicología, fotografía y experiencia humana. Algunas de nuestras propuestas:",
        ],
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

/** La sección que sigue a esta en el número; tras la última (o fuera de las puertas), la portada. */
export function nextDoor(slug: Door["slug"]) {
  const at = doors.findIndex((d) => d.slug === slug);
  return at < 0 ? undefined : doors[at + 1];
}

/**
 * Fototerapia y fotografía terapéutica: sección IV del número, con la misma maqueta que las
 * puertas pero fuera de «Qué hacemos». Sus planchas no llevan foto (tonos de papel y noche).
 */
export const phototherapy: Door = {
  slug: "fototerapia",
  numeral: "IV",
  name: "Fototerapia",
  plate: {
    text: "La imagen no ofrece respuestas por sí sola.",
    emphasis: "por sí sola",
  },
  pullQuote: {
    text: "Su potencial reside en el proceso que se construye alrededor de ella.",
    emphasis: "el proceso",
  },
  title: "Trabajar con imágenes en procesos de acompañamiento",
  emphasis: "imágenes",
  intro: [
    "La fotografía puede ser mucho más que una herramienta para documentar la realidad. También puede convertirse en un medio para explorar experiencias, expresar emociones, trabajar con recuerdos y construir nuevas formas de representación.",
    "En el ámbito de la psicología y el acompañamiento, las imágenes permiten acercarse a aspectos de nuestra experiencia personal y relacional desde una perspectiva diferente.",
    "No trabajamos únicamente con lo que aparece en una fotografía, sino con la relación que cada persona establece con ella: qué recuerda, qué siente, qué asociaciones construye y qué significado adquiere a lo largo del proceso.",
  ],
  subject: "Fototerapia y fotografía terapéutica",
  contact: closing.questions.join(" "),
  groups: [
    {
      title: "Dos campos de práctica relacionados",
      intro: [
        "La literatura especializada distingue entre diferentes formas de utilizar la fotografía en procesos de acompañamiento.",
        "Ambas perspectivas comparten el interés por el potencial psicológico y relacional de las imágenes, aunque responden a encuadres y objetivos diferentes.",
        "En Engrama nos inspiramos en estas líneas de trabajo y en metodologías de fotografía participativa, narrativa y comunitaria para diseñar propuestas ajustadas a cada persona y contexto.",
      ],
      offers: [
        {
          title: "Fototerapia",
          body: "Desarrollada especialmente por Judy Weiser, comprende el uso de fotografías y de las interacciones que las personas establecen con ellas dentro de procesos de counselling y psicoterapia. Incluye el trabajo con fotografías personales, imágenes tomadas por otras personas, autorretratos, fotografías proyectivas y álbumes familiares.",
        },
        {
          title: "Fotografía terapéutica",
          body: "Se refiere a prácticas de creación y exploración fotográfica orientadas al autoconocimiento, la expresión, la reflexión y el bienestar. Puede desarrollarse en contextos educativos, sociales, comunitarios, culturales y de acompañamiento, sin requerir necesariamente un proceso psicoterapéutico.",
        },
      ],
    },
    {
      title: "¿Qué ocurre cuando trabajamos con una fotografía?",
      intro: ["El proceso puede incluir diferentes momentos:"],
      items: [
        {
          title: "Observar",
          body: "detenerse en la imagen, en aquello que llama la atención y en lo que queda fuera del encuadre.",
        },
        {
          title: "Asociar",
          body: "explorar recuerdos, sensaciones, pensamientos y emociones que aparecen al mirar.",
        },
        {
          title: "Narrar",
          body: "construir relatos a partir de las imágenes y relacionarlos con experiencias personales.",
        },
        {
          title: "Representar",
          body: "crear fotografías para explorar la identidad, el cuerpo y la manera de mostrarnos.",
        },
        { title: "Crear", body: "producir nuevas imágenes como forma de expresión y exploración." },
        {
          title: "Compartir",
          body: "poner en común diferentes miradas y construir significados colectivos.",
        },
      ],
    },
    {
      title: "El papel del acompañamiento",
      intro: [
        "La fotografía no tiene un significado psicológico universal. Una misma imagen puede despertar experiencias muy diferentes en cada persona y cambiar de sentido a lo largo del tiempo.",
        "Por eso, el acompañamiento no consiste en interpretar las imágenes desde fuera, sino en facilitar un espacio de escucha y exploración. Se trata de atender a las asociaciones, las palabras, las emociones y los significados que aparecen, respetando los tiempos y las decisiones de cada persona.",
        "La imagen no ofrece respuestas por sí sola. Su potencial reside en el proceso que se construye alrededor de ella.",
      ],
    },
  ],
};

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
