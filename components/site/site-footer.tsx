export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] py-8">
      <div className="container-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display-kicker text-lg text-white">Mathgram</p>
          <p className="mt-1 text-sm text-white/[0.54]">De conocimiento a sistemas</p>
        </div>
        <div className="text-sm text-white/[0.48]">
          <p>SaaS + IA + Contenido educativo</p>
          <p className="mt-1">Contacto: hola@mathgram.com</p>
        </div>
      </div>
    </footer>
  );
}
