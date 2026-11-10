"use client";

import { useRef } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { whatsappHref } from "@/lib/contact";
import { WhatsappIcon } from "../whatsapp-icon";

const sections = [
  { href: "/#que-es", label: "Qué es" },
  { href: "/#que-hacemos", label: "Qué hacemos" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#nosotras", label: "Nosotras" },
  { href: "/#contacto", label: "Contacto" },
];

/** Menú a pantalla completa, en papel, con las secciones en serif grande. */
export function Menu() {
  // Al saltar a una sección no devolvemos el foco al botón (haría scroll de vuelta arriba).
  const jumped = useRef(false);

  return (
    <Dialog>
      <DialogTrigger className="label -my-3 cursor-pointer px-1 py-4 text-sm underline-offset-4 hover:underline md:text-base">
        Menú
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        onCloseAutoFocus={(e) => {
          if (jumped.current) e.preventDefault();
          jumped.current = false;
        }}
        className="top-0 left-0 flex h-dvh max-w-none translate-x-0 translate-y-0 flex-col rounded-none border-0 bg-background p-0 shadow-none sm:max-w-none"
      >
        <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between px-5 py-5 md:px-10">
          <DialogTitle className="display font-normal text-[2rem] italic leading-none md:text-[2.75rem]">
            engrama
          </DialogTitle>
          <DialogClose className="label -my-3 cursor-pointer px-1 py-4 text-sm underline-offset-4 hover:underline md:text-base">
            Cerrar
          </DialogClose>
        </div>
        <DialogDescription className="sr-only">Secciones de la página</DialogDescription>
        <nav
          aria-label="Secciones"
          className="mx-auto flex w-full max-w-[90rem] flex-1 flex-col justify-center px-5 md:px-10"
        >
          <ol>
            {sections.map((s, i) => (
              <li key={s.href} className="border-border border-t last:border-b">
                <DialogClose asChild>
                  <a
                    href={s.href}
                    onClick={() => {
                      jumped.current = true;
                    }}
                    className="flex items-baseline gap-6 py-3 no-underline transition-colors hover:text-muted-foreground md:py-4"
                  >
                    <span className="label text-muted-foreground tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="display text-[2.75rem] leading-none md:text-[5rem]">
                      {s.label}
                    </span>
                  </a>
                </DialogClose>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-4 px-5 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-muted-foreground text-sm md:flex-row md:items-baseline md:justify-between md:px-10 md:pb-10">
          <p>Bianca y Laura · Psicólogas colegiadas · Por toda España y online</p>
          <a href={whatsappHref()} className="pill pill-solid self-start">
            <WhatsappIcon className="size-5" />
            Escríbenos por WhatsApp
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
