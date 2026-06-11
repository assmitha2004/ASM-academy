import { motion } from 'framer-motion';
import clsx from 'clsx';

const Loader = ({ fullscreen = false, label = 'Loading' }) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center gap-6',
        fullscreen ? 'fixed inset-0 z-[9999] bg-obsidian-950' : 'py-20'
      )}
    >
      <div className="relative h-16 w-16">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-gold-500/20"
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold-400"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <p className="text-sm font-mono uppercase tracking-[0.3em] text-gold-300/70">
        {label}
      </p>
    </div>
  );
};

export default Loader;