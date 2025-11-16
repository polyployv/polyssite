import { motion } from '../lib/cdnMotion';

interface HeaderProps {
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
}

export const Header = ({ isMusicPlaying, onToggleMusic }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-boutique/90 backdrop-blur border-b border-white/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div>
          <p className="font-serif text-2xl text-rose-600">Paper Doll Studio</p>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Boutique mix & match</p>
        </div>
        <div className="text-sm text-center hidden md:block">
          <p className="text-slate-600">Mix & Match Your Outfit</p>
          <p className="text-slate-400">powered by real shop drops</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMusic}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow transition hover:-translate-y-0.5"
            aria-label={isMusicPlaying ? 'Pause ambience' : 'Play ambience'}
          >
            <motion.span
              className="text-xl"
              animate={{ rotate: isMusicPlaying ? 20 : 0 }}
              transition={{ duration: 0.6 }}
            >
              {isMusicPlaying ? '⏸️' : '▶️'}
            </motion.span>
          </button>
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-lg shadow-sm">
            ?
          </button>
        </div>
      </div>
    </header>
  );
};
