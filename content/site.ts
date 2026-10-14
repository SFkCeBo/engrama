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

/** Una «pieza» del trabajo: plancha de texto en lugar de foto. */
export type Piece = {
  id: string;
  category: string;
  phrase: string;
  /** Palabra de la frase que va en cursiva (debe aparecer tal cual en `phrase`). */
  emphasis: string;
  body: string;
  service: Service["id"];
};

export const pieces: Piece[] = [
  {
    id: "la-foto-que-no-hiciste",
    category: "Sesión individual",
    phrase: "La foto que nunca te atreviste a hacer.",
    emphasis: "atreviste",
    body: "Volver al lugar donde algo se rompió y mirarlo, esta vez, con la cámara en la mano.",
    service: "sesiones",
  },
  {
    id: "album-familiar",
    category: "Sesión individual",
    phrase: "Tu álbum familiar también habla de ti.",
    emphasis: "habla",
    body: "Elegir tres fotos antiguas y escuchar qué cuentan de quién fuiste y de quién eres.",
    service: "sesiones",
  },
  {
    id: "autorretrato",
    category: "Taller",
    phrase: "Un autorretrato sin espejo.",
    emphasis: "sin espejo",
    body: "Seis personas se fotografían unas a otras como se ven por dentro.",
    service: "talleres",
  },
  {
    id: "lo-cotidiano",
    category: "Taller",
    phrase: "Lo cotidiano también guarda emociones.",
    emphasis: "guarda",
    body: "Una semana fotografiando una taza, una ventana, un camino. Al final, nadie habla de objetos.",
    service: "talleres",
  },
  {
    id: "mirar-acompanar",
    category: "Formación",
    phrase: "Mirar para acompañar mejor.",
    emphasis: "acompañar",
    body: "Herramientas de fotografía terapéutica para psicólogas, educadoras y trabajadoras sociales.",
    service: "formacion",
  },
  {
    id: "la-imagen-como-pregunta",
    category: "Formación",
    phrase: "Una imagen es una pregunta.",
    emphasis: "pregunta",
    body: "Cómo usar la fotografía para abrir conversaciones que con palabras no empiezan.",
    service: "formacion",
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

export type Testimonial = { quote: string; author: string; context?: string };

// TODO: testimonios reales con permiso. Mientras esté vacío, la sección no se muestra.
export const testimonials: Testimonial[] = [];
