/**
 * Fondo claro u oscuro con gradiente suave y manchas (paleta cyan / sky / slate).
 */
export function PageBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-cyan-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div className="anim-blob absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-900/20" />
      <div className="anim-blob-alt absolute -right-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-sky-200/35 blur-3xl dark:bg-sky-900/15" />
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(226 232 240 / 0.45) 1px, transparent 1px), linear-gradient(to bottom, rgb(226 232 240 / 0.45) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
}
