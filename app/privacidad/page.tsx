import type { Metadata } from "next";
import { LegalPage, Pending } from "@/components/legal-page";

export const metadata: Metadata = { title: "Privacidad", robots: { index: false } };

// TODO: revisar con el titular antes de publicar (RGPD y LOPDGDD).
export default function Privacidad() {
  return (
    <LegalPage title="Privacidad">
      <p>
        Responsable del tratamiento: <Pending>nombre o razón social</Pending>,{" "}
        <Pending>NIF</Pending>, <Pending>correo electrónico</Pending>.
      </p>
      <h2>Qué datos tratamos</h2>
      <p>
        Esta web no tiene formularios ni crea cuentas. Si nos escribes por WhatsApp o nos llamas,
        tratamos tu nombre, tu número de teléfono y lo que decidas contarnos, solo para responderte
        y, si lo quieres, organizar una sesión, taller o formación.
      </p>
      <h2>Base legal y conservación</h2>
      <p>
        Tu consentimiento al contactarnos y, si contratas un servicio, la relación profesional.
        Conservamos los datos el tiempo necesario para atenderte y el que marque la ley para la
        documentación clínica.
      </p>
      <h2>Tus derechos</h2>
      <p>
        Puedes pedir acceso, rectificación, supresión, oposición, limitación y portabilidad
        escribiendo a <Pending>correo electrónico</Pending>. También puedes reclamar ante la Agencia
        Española de Protección de Datos (aepd.es).
      </p>
      <p>
        WhatsApp es un servicio de Meta. Al escribirnos por ahí también se aplica su propia política
        de privacidad.
      </p>
    </LegalPage>
  );
}
