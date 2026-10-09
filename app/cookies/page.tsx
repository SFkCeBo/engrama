import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Cookies", robots: { index: false } };

export default function Cookies() {
  return (
    <LegalPage title="Cookies">
      <p>
        Esta web no usa cookies propias ni de terceros, ni herramientas de seguimiento o publicidad.
        Por eso no te mostramos ningún aviso de cookies.
      </p>
      <p>
        Si en el futuro añadimos analítica, usaremos una opción sin cookies o te pediremos permiso
        antes, y lo indicaremos aquí.
      </p>
    </LegalPage>
  );
}
