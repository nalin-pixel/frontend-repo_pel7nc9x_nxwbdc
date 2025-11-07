import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-neutral-950" />
      <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800/80 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300">
          <Sparkles className="h-3 w-3 text-neutral-200" />
          Inspired by Nothing's bold minimalism
        </div>
        <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight text-white">
          Samsung J2 Prime — reimagined
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-neutral-400">
          A nostalgic classic, presented with a clean grid aesthetic, dot-matrix accents, and pure focus on essentials.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#buy" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors">
            Buy now <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-neutral-700 px-5 py-3 text-sm text-white hover:bg-neutral-800">
            Explore features
          </a>
        </div>
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 grid md:grid-cols-2 gap-6">
          <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 grid place-items-center">
            <div className="relative w-48 h-96 rounded-[2rem] border-2 border-dotted border-neutral-500 grid place-items-center">
              <div className="absolute inset-2 rounded-[1.7rem] border border-neutral-600" />
              <div className="w-36 h-72 rounded-[1.4rem] bg-neutral-100/5 border border-neutral-700" />
              <div className="absolute -left-1.5 top-6 h-8 w-8 rounded-full bg-neutral-100/10 border border-neutral-500" />
            </div>
          </div>
          <div className="grid gap-4 text-neutral-300">
            <h3 className="text-xl font-semibold text-white">Minimal hardware, maximal vibe</h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              The beloved J2 Prime, showcased with a Nothing-esque palette: crisp whites, deep blacks, and subtle dotted motifs. Clean, confident, and effortlessly modern.
            </p>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              <li className="rounded-md border border-neutral-800 bg-neutral-900/60 p-3">5.0" TFT Display</li>
              <li className="rounded-md border border-neutral-800 bg-neutral-900/60 p-3">8MP rear · 5MP front</li>
              <li className="rounded-md border border-neutral-800 bg-neutral-900/60 p-3">2600 mAh removable</li>
              <li className="rounded-md border border-neutral-800 bg-neutral-900/60 p-3">Micro-USB · 3.5mm jack</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
