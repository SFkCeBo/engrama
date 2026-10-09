export function About() {
  return (
    <section
      id="que-es"
      aria-labelledby="que-es-title"
      className="mx-auto grid max-w-[90rem] gap-10 px-5 py-24 md:grid-cols-12 md:gap-8 md:px-10 md:py-36"
    >
      <aside className="text-muted-foreground text-sm leading-relaxed md:col-span-3">
        <p className="display text-2xl text-foreground">
          en·gra·ma <span className="italic">(n.)</span>
        </p>
        <p className="mt-3 max-w-[34ch]">
          En neurociencia, la huella física que una experiencia deja en el cerebro y que nos permite
          volver a ella. El término lo acuñó el biólogo Richard Semon en 1904.
        </p>
      </aside>
      <div className="md:col-span-8 md:col-start-5">
        <h2 id="que-es-title" className="sr-only">
          Qué es la fotografía terapéutica
        </h2>
        <p className="display text-[2rem] leading-[1.08] md:text-[3.25rem]">
          La fotografía terapéutica usa la cámara para mirar lo que{" "}
          <em>a veces no sabemos decir.</em> Una imagen detiene una emoción el tiempo suficiente
          para <em>reconocerla</em>, ponerle nombre y entender de dónde viene.
        </p>
        <p className="mt-8 max-w-[60ch] text-muted-foreground leading-relaxed">
          No hace falta saber de fotografía. Trabajamos con lo que tú traes: tu mirada, tus
          recuerdos y lo que aparece delante del objetivo, siempre con una psicóloga a tu lado.
        </p>
      </div>
    </section>
  );
}
