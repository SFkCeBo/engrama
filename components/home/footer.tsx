import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[90rem] flex-col gap-6 border-border border-t px-5 pt-10 pb-28 text-sm md:flex-row md:items-baseline md:justify-between md:px-10 md:pb-10">
      <p className="display text-2xl italic">engrama</p>
      <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
        <Link href="/aviso-legal">Aviso legal</Link>
        <Link href="/privacidad">Privacidad</Link>
        <Link href="/cookies">Cookies</Link>
      </nav>
      <p className="text-muted-foreground">Fotografías provisionales de Unsplash.</p>
    </footer>
  );
}
