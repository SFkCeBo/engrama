"use client";

import { useEffect, useState } from "react";

const format = new Intl.DateTimeFormat("es-ES", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Madrid",
});

/** Hora de Madrid en vivo. Se pinta tras montar para no desajustar la hidratación. */
export function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <time className="tabular-nums" suppressHydrationWarning>
      {time ?? "--:--"}
    </time>
  );
}
