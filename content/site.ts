// Contenido real del sitio. Lo marcado como TODO está pendiente de Engrama:
// no inventar nombres, credenciales ni testimonios.

export type Service = {
  id: string;
  title: string;
  lead: string;
  body: string;
  image: { src: string; alt: string };
  message: string;
};

export const services: Service[] = [
  {
    id: "sesiones",
    title: "Sesiones individuales",
    lead: "Una cámara, una psicóloga y tú.",
    body: "Sesiones fotográficas con acompañamiento psicológico para poner imagen a lo que sientes y reconocerlo cuando aparece.",
    image: {
      src: "/img/sesiones.jpg",
      alt: "Retrato de una mujer con media cara en sombra, mirando de frente a la cámara",
    },
    message: "Hola, me interesan las sesiones individuales de fotografía terapéutica.",
  },
  {
    id: "talleres",
    title: "Talleres grupales",
    lead: "Mirar con otros también cura.",
    body: "Encuentros en grupo donde la fotografía sirve para expresar emociones, compartirlas y escuchar las de los demás.",
    image: {
      src: "/img/talleres-foco.jpg",
      alt: "Dos personas se dan la mano bajo un foco, entre humo, en una sala oscura",
    },
    message: "Hola, me gustaría información sobre los talleres grupales.",
  },
  {
    id: "formacion",
    title: "Formación",
    lead: "Para quien acompaña a otros.",
    body: "Formación sobre fotografía y emociones para profesionales y para quien quiera usar la imagen como herramienta.",
    image: {
      src: "/img/formacion.jpg",
      alt: "Una persona de espaldas bajo un haz de luz en una sala oscura",
    },
    message: "Hola, me interesa la formación sobre fotografía y emociones.",
  },
];

export type Psychologist = { name: string | null; license: string | null; bio: string | null };

// TODO: nombres, número de colegiada y una línea de cada una.
export const team: Psychologist[] = [
  { name: null, license: null, bio: null },
  { name: null, license: null, bio: null },
];

export type Testimonial = { quote: string; author: string; context?: string };

// TODO: testimonios reales con permiso. Mientras esté vacío, la sección no se muestra.
export const testimonials: Testimonial[] = [];
