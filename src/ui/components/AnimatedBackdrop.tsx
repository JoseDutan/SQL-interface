/**
 * Fondo ilustrativo con manchas animadas (reutilizable en HomePage, SectionPage, etc.).
 */
export function AnimatedBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden>
      <div className="anim-blob absolute -left-32 top-1/4 h-[22rem] w-[22rem] rounded-full bg-cyan-300/35 blur-3xl" />
      <div className="anim-blob-alt absolute -right-24 bottom-1/4 h-[18rem] w-[18rem] rounded-full bg-violet-300/30 blur-3xl" />
      <div className="anim-blob absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/25 blur-3xl" />
    </div>
  );
}
