import { Smartphone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-md border border-neutral-800 grid place-items-center">
            <Smartphone className="h-4 w-4 text-neutral-900" />
          </div>
          <span className="font-semibold tracking-tight text-neutral-900">j2:prime</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
          <a href="#features" className="hover:text-neutral-900 transition-colors">Features</a>
          <a href="#specs" className="hover:text-neutral-900 transition-colors">Specs</a>
          <a href="#buy" className="hover:text-neutral-900 transition-colors">Buy</a>
        </nav>
      </div>
    </header>
  );
}
