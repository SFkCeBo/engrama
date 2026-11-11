// Fotos de las planchas de «Qué ofrecemos». Provisionales (TODO: sustituir por fotos propias):
// Unsplash, Licencia Unsplash, con un mismo tratamiento cálido y desaturado. Fuente y autoría de
// cada una en public/img/CREDITOS.md. La clave es el nombre del archivo en public/img/oferta/,
// que sale del título de la pieza (ver `imageKey`).

export type OfferImage = { alt: string };

export const offerImages: Record<string, OfferImage> = {
  // Organizaciones · Acompañamiento e intervención con grupos
  "proyectos-de-acompanamiento-a-traves-de-la-fotografia-en-cen": {
    alt: "Un grupo de personas mayores se inclina sobre una mesa para mirar juntas una pantalla",
  },
  "intervenciones-con-personas-mayores-personas-con-discapacida": {
    alt: "Una mujer mayor sostiene delante del pecho un retrato antiguo en blanco y negro",
  },
  "propuestas-para-personas-con-dificultades-de-comunicacion-o": {
    alt: "Una mano coloca una foto en blanco y negro sobre una pared blanca, junto a otras",
  },
  "espacios-grupales-para-trabajar-memoria-identidad-vinculos-e": {
    alt: "Un montón de fotos instantáneas sobre una mesa de madera oscura",
  },
  "proyectos-de-expresion-y-participacion-con-colectivos-en-con": {
    alt: "Personas trabajando juntas alrededor de una mesa larga llena de plantas y papeles",
  },
  // Organizaciones · Bienestar y desarrollo de equipos
  "talleres-sobre-fotografia-emociones-y-bienestar": {
    alt: "Un grupo de personas con cámaras se agacha a fotografiar en una calle",
  },
  "espacios-de-reflexion-sobre-la-mirada-la-representacion-y-la": {
    alt: "Primer plano de un ojo claro, atento, con la luz cálida sobre la piel",
  },
  "experiencias-fotograficas-para-favorecer-la-comunicacion-la": {
    alt: "Tres personas se juntan para mirar a la vez la pantalla de una cámara",
  },
  "acompanamiento-a-profesionales-de-los-ambitos-social-educati": {
    alt: "Dos mujeres conversan sentadas frente a frente en dos butacas",
  },
  // Organizaciones · Conferencias y encuentros
  "mirar-lo-que-miramos": {
    alt: "Una mujer se acerca mucho a una fotografía colgada en una exposición",
  },
  "que-puede-hacer-una-fotografia-por-nosotros": {
    alt: "Una mano sostiene una foto instantánea de un coche antiguo, junto a unas flores rosas",
  },
  "la-fotografia-como-memoria-identidad-y-vinculo": {
    alt: "Foto familiar antigua en blanco y negro: dos niños sentados y una mujer detrás de ellos",
  },
  "imagenes-que-cuidan": {
    alt: "Dos manos sostienen con cuidado unas fotografías, en blanco y negro",
  },
  // Personas · ¿Qué podemos explorar?
  "memoria-e-historia-personal": {
    alt: "Unas manos arrugadas pasan las hojas de un álbum de fotos familiares",
  },
  emociones: {
    alt: "Rostro en penumbra con una franja de luz sobre la mirada",
  },
  "identidad-y-autorrepresentacion": {
    alt: "Una mujer sostiene un espejo redondo en un campo al atardecer y se mira de perfil",
  },
  "vinculos-y-relaciones": {
    alt: "Dos mujeres se abrazan con los ojos cerrados en medio de un prado",
  },
  "cambios-y-transiciones": {
    alt: "Cajas de mudanza apiladas en una habitación vacía junto a la ventana",
  },
  "recursos-personales": {
    alt: "Unas manos acogen un pequeño brote verde",
  },
  // Personas · ¿Con quién trabajamos?
  "personas-mayores": {
    alt: "Retrato de una mujer mayor con gafas que sonríe con la mirada",
  },
  "personas-con-discapacidad": {
    alt: "Un joven en silla de ruedas se ríe a carcajadas",
  },
  "personas-autistas-y-neurodivergentes": {
    alt: "Una mujer de perfil, tranquila, con unos auriculares puestos",
  },
  "personas-que-encuentran-dificultades": {
    alt: "Una mano sujeta un pincel fino, a punto de empezar a pintar",
  },
  "personas-que-atraviesan-cambios-vitales": {
    alt: "Una persona de pie, sola, al borde de un acantilado frente al mar",
  },
  grupos: {
    alt: "Vista desde arriba de un grupo sentado en círculo en una sala luminosa",
  },
  // Personas · ¿Cómo trabajamos con las fotografías?
  "fotografias-personales-y-familiares": {
    alt: "Fotos familiares antiguas desordenadas sobre una mesa",
  },
  "fotografias-proyectivas": {
    alt: "Unas manos señalan una de las fotografías extendidas sobre una mesa",
  },
  "creacion-fotografica": {
    alt: "Una mujer fotografía entre flores, con la cámara delante de la cara",
  },
  "autorretrato-y-autorrepresentacion": {
    alt: "La sombra de una persona que se hace una foto, proyectada sobre el suelo",
  },
  "secuencias-y-narrativas-visuales": {
    alt: "Retratos en blanco y negro colgados en fila de una rejilla metálica",
  },
  // Personas · Propuestas y formatos
  "procesos-individuales": {
    alt: "Dos personas sentadas a una mesa con sus tazas, con las manos cerca",
  },
  "procesos-grupales": {
    alt: "Vista desde arriba de muchas manos que se juntan sobre una mesa",
  },
  "talleres-tematicos": {
    alt: "Fotografías y papeles de colores alineados sobre una mesa de luz en la penumbra",
  },
  "intervenciones-en-centros-y-entidades": {
    alt: "Un grupo de personas mayores conversa alrededor de una mesa al aire libre",
  },
  // Artistas · Qué ofrecemos
  "acompanamiento-individual-de-proyectos-fotograficos": {
    alt: "Un fotógrafo mayor revisa una copia sobre una mesa de luz",
  },
  "exploracion-de-motivaciones-personales-y-temas-recurrentes": {
    alt: "Una mano sostiene un cuaderno abierto lleno de notas y dibujos",
  },
  "desarrollo-de-narrativas-y-secuencias-visuales": {
    alt: "Fotografías esparcidas por el suelo de un estudio, a la espera de ordenarse",
  },
  "reflexion-sobre-la-mirada-la-representacion-y-la-relacion-co": {
    alt: "Un fotógrafo con gorro mira por el visor de su cámara en la calle",
  },
  "construccion-del-relato-y-del-texto-de-artista": {
    alt: "Unas manos escriben en una máquina de escribir antigua",
  },
  "espacios-colectivos-de-lectura-y-reflexion-sobre-proyectos": {
    alt: "Un libro de fotografía abierto con retratos en blanco y negro",
  },
};

/** Nombre de archivo de una pieza: su título como ancla, recortado a 60 caracteres. */
export function imageKey(slug: string) {
  return slug.slice(0, 60).replace(/-$/, "");
}
