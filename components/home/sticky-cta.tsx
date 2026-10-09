import { whatsappHref } from "@/lib/contact";
import { WhatsappIcon } from "../whatsapp-icon";

/** En el móvil, el WhatsApp siempre a un toque. */
export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-20 px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden">
      <a href={whatsappHref()} className="pill pill-solid min-h-14 w-full text-base">
        <WhatsappIcon className="size-5" />
        Escríbenos por WhatsApp
      </a>
    </div>
  );
}
