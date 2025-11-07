import { Battery, Camera, Cpu, Ruler } from 'lucide-react';

export default function Features() {
  const items = [
    { icon: Camera, title: 'Balanced cameras', desc: '8MP back with LED flash, 5MP selfie with front flash — made for everyday snaps.' },
    { icon: Cpu, title: 'Reliable performance', desc: 'Quad‑core chipset tuned for essentials. Smooth, simple, dependable.' },
    { icon: Battery, title: 'All‑day removable', desc: '2600 mAh battery you can swap. Classic practicality, modern polish.' },
    { icon: Ruler, title: 'Compact comfort', desc: '5-inch form factor with textured back — easy to hold, easy to love.' },
  ];

  return (
    <section id="features" className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 text-center">
          Essentials, refined
        </h2>
        <p className="mt-3 text-neutral-600 text-center max-w-2xl mx-auto">
          A minimalist approach inspired by Nothing — gridded layouts, soft shadows, and clarity-first design.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-[0_1px_0_#e5e7eb]">
              <Icon className="h-5 w-5 text-neutral-900" />
              <h3 className="mt-3 font-medium text-neutral-900">{title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
