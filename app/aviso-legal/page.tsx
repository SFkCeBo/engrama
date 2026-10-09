import type { Metadata } from "next";
import { LegalPage, Pending } from "@/components/legal-page";

export const metadata: Metadata = { title: "Aviso legal", robots: { index: false } };

// TODO: completar con los datos reales del titular (LSSI-CE, art. 10).
export default function AvisoLegal() {
  return (
    <LegalPage title="Aviso legal">
      <p>
        Este sitio web pertenece a <Pending>nombre o razón social</Pending>, con NIF{" "}
        <Pending>NIF</Pending> y domicilio en <Pending>dirección</Pending>. Contacto:{" "}
        <Pending>correo electrónico</Pending>.
      </p>
      <p>
        Las profesionales que prestan los servicios son psicólogas colegiadas en{" "}
        <Pending>colegio oficial</Pending>, con números de colegiada <Pending>números</Pending>.
      </p>
      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, imágenes y diseño de este sitio pertenecen a su titular o se usan con licencia.
        No está permitida su reproducción sin autorización.
      </p>
      <h2>Responsabilidad</h2>
      <p>
        La información de esta web es orientativa y no sustituye una valoración psicológica
        individual. Si estás en una situación de crisis, llama al 024 (línea de atención a la
        conducta suicida) o al 112.
      </p>
    </LegalPage>
  );
}
