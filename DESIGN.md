---
name: Engrama
description: Fotografía terapéutica con psicólogas colegiadas, maquetada como el número 1 de una revista de arte.
colors:
  papel-melocoton: "oklch(0.9 0.04 60)"
  papel-claro: "oklch(0.93 0.03 60)"
  papel-sombra: "oklch(0.86 0.045 55)"
  tinta-calida: "oklch(0.25 0.02 30)"
  tinta-suave: "oklch(0.4 0.03 35)"
  filete: "oklch(0.25 0.02 30 / 0.22)"
  coral-amapola: "oklch(0.6 0.15 30)"
  coral-texto: "oklch(0.98 0.01 60)"
  noche: "oklch(0.17 0.008 40)"
  papel-en-la-noche: "oklch(0.92 0.025 60)"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(4.5rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "6rem"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "3.25rem"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.01em"
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  body-small:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    letterSpacing: "0.18em"
rounded:
  plancha: "3px"
  pildora: "999px"
spacing:
  margen-movil: "20px"
  margen-escritorio: "40px"
  medianil: "32px"
  bloque: "56px"
  seccion-movil: "96px"
  seccion-escritorio: "144px"
  pagina: "1440px"
components:
  pill-solid:
    backgroundColor: "{colors.tinta-calida}"
    textColor: "{colors.papel-melocoton}"
    rounded: "{rounded.pildora}"
    padding: "0 24px"
    height: "48px"
  pill-line:
    backgroundColor: "transparent"
    textColor: "{colors.tinta-calida}"
    rounded: "{rounded.pildora}"
    padding: "0 24px"
    height: "48px"
  pill-line-hover:
    backgroundColor: "{colors.tinta-calida}"
    textColor: "{colors.papel-melocoton}"
  pill-solid-hover:
    backgroundColor: "{colors.noche}"
    textColor: "{colors.papel-melocoton}"
  pill-sticky-movil:
    backgroundColor: "{colors.tinta-calida}"
    textColor: "{colors.papel-melocoton}"
    rounded: "{rounded.pildora}"
    height: "56px"
    width: "100%"
  plancha-foto:
    backgroundColor: "{colors.noche}"
    rounded: "{rounded.plancha}"
  pie-de-foto:
    textColor: "{colors.tinta-calida}"
    typography: "{typography.title}"
  rotulo:
    textColor: "{colors.tinta-suave}"
    typography: "{typography.label}"
  pliego-noche:
    backgroundColor: "{colors.noche}"
    textColor: "{colors.papel-en-la-noche}"
    padding: "96px 20px"
---

# Design System: Engrama

## Overview

**Creative North Star: "La amapola, número 1"**

Engrama se maqueta como el primer número de una revista de arte sobre la memoria emocional. Una sola imagen macro, ampliada hasta volverse paisaje, carga la emoción; el texto la acompaña con titulares de serif fina y una tipografía de lectura discreta. El papel es melocotón mate, la tinta es marrón cálido casi negro y el único color saturado de la página es el coral de la amapola.

La densidad es baja y editorial: secciones con mucho aire (96px en móvil, 144px en escritorio), rejilla de 12 columnas que se usa de forma asimétrica (columna estrecha de nota al margen y bloque ancho desplazado), fotos desfasadas en vertical como en un pliego. Una sección entera pasa a casi negro para cambiar de registro, como una doble página nocturna. No hay sombras, degradados decorativos ni tarjetas: la profundidad la dan el tamaño de la foto, el recorte y el cambio de papel a noche.

El movimiento es uno y con sentido: la foto principal pasa de desenfocada a enfocada al entrar en pantalla, como un recuerdo que vuelve. Todo lo demás son transiciones de color cortas.

**Key Characteristics:**
- Papel melocotón, tinta cálida y un único acento coral que vive sobre todo en la fotografía.
- Titulares en Instrument Serif regular con palabras clave en cursiva; texto en Hanken Grotesk.
- Pies de foto en serif y mayúsculas; rótulos diminutos y muy espaciados para metadatos.
- Botones en píldora con borde fino del color del texto.
- Planchas de foto casi rectas (3px), sin marco ni sombra.
- Un pliego nocturno (#141110 aprox.) por página como cambio de registro.

## Colors

Una paleta de papel y tinta cálidos donde el color saturado lo pone la imagen, no la interfaz.

### Primary
- **Coral Amapola** (`coral-amapola`): el único acento. Aparece en la amapola (el archivo está virado a coral, pétalo medio aprox. #d1573c), en el anillo de foco (2px, separación 3px) y en la selección de texto. Es color de imagen y de señal, no de texto pequeño.

### Neutral
- **Papel Melocotón** (`papel-melocoton`): fondo de toda la página y `theme-color` del navegador. Texto sobre la tinta en las píldoras sólidas.
- **Papel Claro** y **Papel Sombra** (`papel-claro`, `papel-sombra`): variantes tonales disponibles para superficies secundarias; la landing apenas las usa.
- **Tinta Cálida** (`tinta-calida`): texto principal, píldora sólida, borde de la píldora de línea y color de la barra de scroll. Contraste sobre el papel de 11.9:1.
- **Tinta Suave** (`tinta-suave`): texto secundario, notas al margen, rótulos de metadatos (6.9:1 sobre el papel).
- **Filete** (`filete`): tinta al 22% para las líneas finas que separan el cierre y el pie.
- **Noche** (`noche`): fondo del pliego nocturno y relleno de las planchas de foto mientras cargan.
- **Papel en la Noche** (`papel-en-la-noche`): texto sobre la noche; en rótulos baja al 70% y en párrafos al 80%, y la línea superior de cada ficha va al 25%.

### Named Rules
**The Una Sola Amapola Rule.** El coral es el único color saturado de la página y lo carga la fotografía. La interfaz no añade otros acentos, degradados ni fondos de color.

**The Coral No Es Tinta Rule.** El coral no se usa como color de texto pequeño ni como fondo de texto pequeño: sobre el papel da 3.1:1 y con texto claro encima 4:1, por debajo de AA. Solo para imagen, foco, selección y texto grande.

## Typography

**Display Font:** Instrument Serif, regular y cursiva (con Georgia, serif)
**Body Font:** Hanken Grotesk (con ui-sans-serif, system-ui)

**Character:** Una serif de titular alta y estrecha, siempre en su único peso, contra una grotesca limpia y cálida. La cursiva de la serif es la voz emocional: marca la palabra que importa.

### Hierarchy
- **Display** (400, 3.25rem en móvil, clamp(4.5rem, 7vw, 6rem) en escritorio, 0.95): titular de portada, centrado, máximo 14 a 18 caracteres por línea.
- **Headline** (400, 3.25rem en móvil, hasta 6rem en escritorio, 0.9 a 0.95): títulos de sección. El título de servicios usa 3.5 a 5.5rem con 0.9.
- **Titular gigante nocturno** (400, 5.5rem en móvil, 11rem en escritorio, 0.8, tracking -0.03em): solo en el pliego nocturno, una palabra que se sale del margen.
- **Lead** (400, 2rem a 3.25rem, 1.08; en la noche 1.75 a 2.5rem, 1.1): párrafo de entrada en serif, con frases clave en cursiva.
- **Title / Pie de foto** (400, 1.75rem, 1, mayúsculas, 0.01em): nombre de cada servicio bajo su foto y nombre de cada psicóloga (1.5rem).
- **Subtítulo en cursiva** (400 cursiva, 1.25rem): la línea de entrada de cada servicio.
- **Body** (400, 1rem, 1.625, máximo 40 a 60ch): texto de lectura, casi siempre en tinta suave.
- **Body small** (400, 0.875rem, 1.625, máximo 26 a 38ch): notas al margen, descripciones de servicio, pie de página.
- **Label** (600, 0.6875rem, 0.18em, mayúsculas): metadatos. El folio de la cabecera («Vol. I · Fotografía terapéutica»), credenciales, autoría de testimonios y enlaces de acción secundarios.
- **Logotipo** (Instrument Serif cursiva, 1.5rem, minúsculas): «engrama» en cabecera y pie.

### Named Rules
**The Cursiva Que Señala Rule.** En cada titular, una o dos palabras van en cursiva: las que cargan la emoción («deja», «mirarla», «de mirarte»). Nunca la frase entera ni negrita en la serif.

**The Un Solo Peso Rule.** Instrument Serif se usa solo en 400. La jerarquía la dan el tamaño, el interlineado apretado y la cursiva.

## Layout

Página de 1440px de ancho máximo con márgenes de 20px en móvil y 40px desde 768px. En escritorio, rejilla de 12 columnas con medianil de 32px, usada en asimetría: nota al margen en 3 columnas y bloque principal en 8 desplazado a la columna 5; titular en 8 y párrafo alineado abajo en 4. Las secciones respiran 96px arriba y abajo en móvil y 144px en escritorio; los bloques internos se separan unos 56px.

Las tres fotos de servicios se desfasan en vertical (0, 160px, 64px) como un pliego de revista. La foto de portada sangra por los lados en móvil (118vw) y en escritorio queda centrada detrás del titular, que la pisa. En móvil, la acción principal es una píldora fija abajo a todo el ancho; el pie y la portada reservan unos 112px para no quedar tapados. Scroll-snap vertical en `proximity` en todos los tamaños (el carrusel fijado no admite `mandatory`). Un único punto de corte de diseño a 768px; a 640px solo aparecen el folio de la cabecera y la doble fila de botones del cierre.

## Elevation & Depth

Sistema plano. No hay sombras ni capas elevadas. La profundidad la crean la escala (foto macro detrás del titular), el recorte de la amapola por su propio contorno y el cambio de papel melocotón a noche. Las fotos de servicio crecen un 3% al pasar el ratón (700ms, ease-out-expo) dentro de su plancha, que recorta.

### Named Rules
**The Papel Plano Rule.** Ningún elemento proyecta sombra. Si algo necesita separarse, se separa con espacio, con un filete al 22% o pasando a la noche.

## Shapes

Dos formas, sin término medio: la píldora completa (999px) para todo lo que se pulsa y la plancha casi recta (3px) para las fotos. Las líneas son filetes de 1px en tinta al 22% (o papel al 25% en la noche), siempre horizontales, encima del cierre, del pie y de cada ficha. La amapola rompe la geometría con su contorno natural.

## Components

### Buttons
Píldoras de revista: tinta y borde fino, sin iconos en baldosa.
- **Shape:** píldora completa (999px), borde de 1px del color del texto, 48px de alto mínimo, 24px de relleno lateral, Hanken Grotesk 600 a 0.9375rem.
- **Sólida:** fondo de tinta, texto de papel. Es la acción de WhatsApp, con el logotipo de WhatsApp a 20px. Al pasar el ratón se oscurece a noche (nunca a coral: ver Coral No Es Tinta).
- **De línea:** transparente con borde de tinta; al pasar el ratón se rellena de tinta con texto de papel (300ms, ease-out-expo).
- **Fija en móvil:** la sólida a todo el ancho, 56px de alto y 1rem de texto, pegada abajo con el margen de seguridad del dispositivo.
- **Compacta de cabecera:** la de línea a 40px de alto y 0.875rem.
- **Focus:** anillo coral de 2px separado 3px.

### Planchas de foto
- **Corner Style:** casi recta (3px).
- **Background:** noche mientras carga.
- **Proporción:** 4:5 vertical, foto a sangre dentro (cover).
- **Shadow Strategy:** ninguna (ver Elevation & Depth).
- **Hover:** la foto crece un 3% en 700ms.

### Pie de foto
Bajo cada plancha: título en serif mayúscula (1.75rem), subtítulo en serif cursiva (1.25rem), descripción en body small de tinta suave y un enlace de acción en rótulo subrayado (1px, separación 4px) con una flecha en línea de 14px.

### Rótulos
Hanken 600 a 0.6875rem, 0.18em, mayúsculas. Solo para metadatos que la revista imprimiría: folio, credenciales, autoría, acciones secundarias. Nunca encima de un titular de sección.

### Pliego nocturno
Sección a sangre en noche con texto de papel. Abre con un titular gigante que se sale ligeramente del margen (-4px) y sigue con un lead en serif a 6 columnas y fichas a 5 columnas, cada una con un filete superior.

### Navigation
Cabecera sin fondo: logotipo en cursiva y folio en rótulo a la izquierda, cuatro anclas en Hanken 0.875rem al centro (subrayado al pasar el ratón), píldora de línea compacta a la derecha. En móvil, las anclas desaparecen y «Escríbenos» queda como rótulo.

### Enlaces
Subrayado de 1px con separación de 0.2em.

### Plancha de texto
Ocupa el sitio de una foto donde no la hay (piezas y contacto): plancha 4:5 en noche, 3px, con una frase en Instrument Serif (2 a 2.5rem, interlineado 1) en papel, abajo a la izquierda, y una palabra en cursiva. Al pasar el ratón la frase crece un 3% (700ms). Componente `components/text-plate.tsx`.

### Piezas (carrusel GSAP)
Inspirado en el «Selected work» de huyml.co. Con GSAP + ScrollTrigger la sección se fija a pantalla completa y el scroll gira un carrusel 3D de planchas de texto (perspectiva 1400px; cada vecina desplazada 1.12 anchos, -18° en Y y hacia atrás), encajando pieza a pieza. La central va a tinta plena, la vecina al 50% y la segunda se desvanece. Bajo el carrusel, una ficha centrada (rótulo de categoría, filete de 12px, descripción) que entra enfocándose (blur 6px → 0, 0.6s); abajo, contador en serif («01 / 06»), «Desliza para girar» y dos píldoras de línea. El ancho de plancha se calcula con la altura de pantalla para que todo quepa en móvil. Sin JS o con reduced-motion queda como carril horizontal con scroll-snap. La frase de la plancha escala con su ancho (container queries).

### Índice
Lista numerada con filete entre filas: número en rótulo, título en pie de foto (2.25 a 3rem), subtítulo en cursiva, ficha `dl` (Modalidad, Duración, Quién) y descripción con enlace de WhatsApp.

### Menú
Diálogo a pantalla completa en papel (Dialog de `components/ui`): logotipo y «Cerrar» arriba, secciones numeradas en serif de 2.75 a 5rem separadas por filetes, y la píldora de WhatsApp abajo. Al saltar a una sección no devuelve el foco al botón.

### Ficha de portada y pie
En escritorio, la portada cierra con una fila de metadatos (Número, Psicólogas, Formato) y «Desliza». El pie va en rejilla: logotipo, «Psicólogas independientes», la hora de Madrid en vivo y los enlaces legales.

### Recuerdo (movimiento propio)
La foto de portada entra desenfocada (blur 4px, saturación 0.7, brillo 1.05, escala 1.04) y se enfoca durante el primer 40% de su recorrido en pantalla, ligada al scroll. Solo con `prefers-reduced-motion: no-preference` y soporte de `animation-timeline`; si no, la foto aparece enfocada.

## Do's and Don'ts

### Do:
- **Do** deja que la fotografía lleve el color: papel melocotón, tinta cálida y el coral solo en la imagen, el foco y la selección.
- **Do** pon en cursiva la palabra que carga la emoción en cada titular de Instrument Serif.
- **Do** usa la píldora sólida de tinta para la acción de WhatsApp y la de línea para la secundaria.
- **Do** monta las fotos en planchas de 3px sin marco ni sombra y desfásalas en vertical cuando vayan en serie.
- **Do** reserva el rótulo espaciado para metadatos impresos (folio, credenciales, autoría).
- **Do** usa un pliego nocturno por página como cambio de registro.

### Don't:
- **Don't** pongas texto pequeño en coral ni sobre coral (3.1:1 y 4:1, por debajo de AA).
- **Don't** añadas sombras, degradados decorativos ni iconos en baldosa.
- **Don't** redondees las fotos más allá de 3px ni uses tarjetas con fondo para agrupar contenido.
- **Don't** pongas rótulos ni antetítulos encima de los titulares de sección.
- **Don't** uses Instrument Serif en negrita ni la frase entera en cursiva.
