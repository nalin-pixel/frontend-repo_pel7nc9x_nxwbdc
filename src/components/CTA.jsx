export default function CTA() {
  return (
    <section id="buy" className="relative bg-neutral-900 text-white py-16">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="mx-auto max-w-6xl h-full px-4 grid grid-cols-12 gap-2 opacity-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-dotted border-neutral-500" />
          ))}
        </div>
      </div>
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Own the nostalgia</h3>
            <p className="mt-2 text-neutral-400 max-w-xl">
              Limited showcase edition inspired by Nothing's visual language. Clean lines, dot grid, and a timeless compact form.
            </p>
          </div>
          <a href="#" className="inline-flex items-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors">
            Pre‑order
          </a>
        </div>
      </div>
    </section>
  );
}
