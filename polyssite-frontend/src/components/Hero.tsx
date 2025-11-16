import { Shop } from '../types';
import { motion } from '../lib/cdnMotion';

interface HeroProps {
  onStartStyling: () => void;
  isMusicPlaying: boolean;
  shops: Shop[];
}

export const Hero = ({ onStartStyling, isMusicPlaying, shops }: HeroProps) => {
  return (
    <section className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-16 pt-12 text-center lg:flex-row lg:text-left">
      <div className="space-y-6">
        <p className="inline-flex rounded-full bg-white/60 px-4 py-1 text-xs uppercase tracking-[0.4em] text-rose-500">
          Boutique Entrance
        </p>
        <h1 className="font-serif text-4xl text-vinyl lg:text-5xl">
          Mix & Match Your Outfit Like a Paper Doll
        </h1>
        <p className="text-lg text-slate-600">
          Customize your body, try on pieces from your favorite shops, and play with nostalgic looks layered over a dreamy
          mannequin.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <button
            onClick={onStartStyling}
            className="rounded-full bg-vinyl px-8 py-3 text-white shadow-xl transition hover:-translate-y-0.5"
          >
            Start Styling
          </button>
          <div className="text-left text-sm text-slate-500">
            <p className="font-semibold text-slate-700">Featured shops</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {shops.map((shop) => (
                <span key={shop.id} className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-rose-500">
                  {shop.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center gap-4">
        <motion.div
          className="relative flex h-60 w-60 items-center justify-center rounded-full bg-gradient-to-br from-vinyl via-vinyl to-black text-white shadow-2xl"
          animate={isMusicPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={{ repeat: isMusicPlaying ? Infinity : 0, duration: 8, ease: 'linear' }}
        >
          <div className="h-12 w-12 rounded-full bg-rose-200 shadow-inner" />
        </motion.div>
        <p className="text-sm text-slate-500">Vinyl ambience {isMusicPlaying ? 'spinning' : 'paused'}</p>
      </div>
    </section>
  );
};
