// Fotos de las secciones de la portada y de las portadillas de cada puerta. Provisionales
// (TODO: sustituir por fotos propias): Unsplash, Licencia Unsplash, con el mismo tratamiento
// cálido y desaturado que las de «Qué ofrecemos». Fuente y autoría en public/img/CREDITOS.md.

export type SectionImage = { src: string; alt: string };

const image = (name: string, alt: string): SectionImage => ({
  src: `/img/secciones/${name}.webp`,
  alt,
});

/** Foto ya usada en «Qué ofrecemos» (public/img/oferta/) que se repite en otra sección. */
const offerPhoto = (name: string, alt: string): SectionImage => ({
  src: `/img/oferta/${name}.webp`,
  alt,
});

export const sectionImages = {
  "puerta-organizaciones": image(
    "puerta-organizaciones",
    "Dos personas abrazadas miran fotografías colgadas en la pared de una exposición",
  ),
  "puerta-personas": image(
    "puerta-personas",
    "Una mano arrugada sostiene una vieja foto en blanco y negro de una iglesia",
  ),
  "puerta-artistas": image(
    "puerta-artistas",
    "Dos personas trabajan en un laboratorio de revelado bajo la luz roja",
  ),
  "como-mirar": image(
    "servicio-sesiones",
    "Una mujer en penumbra se lleva la cámara a la cara para hacer una foto",
  ),
  "como-acompanar": image(
    "servicio-talleres",
    "Un grupo conversa alrededor de una mesa cubierta de fotografías; una mujer enseña una",
  ),
  "como-disenar": image(
    "servicio-formacion",
    "Un formador explica algo, sonriente, ante un grupo de adultos junto a un rotafolios",
  ),
  "que-es": image(
    "que-es",
    "Una mano sostiene una foto instantánea del mismo paisaje de montaña que tiene delante",
  ),
  donde: image(
    "donde",
    "Una carretera sube entre árboles hacia un molino blanco sobre un cerro de La Mancha",
  ),
  contacto: image(
    "contacto",
    "Un adulto y un niño, sentados en el suelo, miran juntos un álbum de fotos familiares",
  ),
  "puerta-fototerapia": offerPhoto(
    "imagenes-que-cuidan",
    "Dos manos sostienen con cuidado unas fotografías, en blanco y negro",
  ),
  "como-escuchar": offerPhoto(
    "procesos-individuales",
    "Dos personas sentadas a una mesa con sus tazas, con las manos cerca",
  ),
  "como-dar-forma": offerPhoto(
    "mirar-lo-que-miramos",
    "Una mujer se acerca mucho a una fotografía colgada en una exposición",
  ),
} satisfies Record<string, SectionImage>;
