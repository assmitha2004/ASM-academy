import { motion } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  loading = false,
  disabled,
  className,
  onClick,
  type = 'button',
  ...rest
}) => {
  const base =
    'relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-400/70 focus-visible:outline-offset-2';

  const variants = {
    primary:
      'bg-gold-gradient text-obsidian-950 shadow-gold-glow hover:shadow-gold-glow-lg active:translate-y-[1px]',
    ghost:
      'border border-gold-500/30 text-ivory bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-gold-400/50 active:translate-y-[1px]',
    dark:
      'bg-obsidian-900 text-ivory border border-white/10 hover:bg-obsidian-900/80 active:translate-y-[1px]',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={twMerge(clsx(base, variants[variant], sizes[size], className))}
      {...rest}
    >
      {Icon && iconPosition === 'left' && <Icon className="h-5 w-5" />}
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full border-2 border-current border-r-transparent animate-spin" />
          Loading...
        </span>
      ) : (
        children
      )}
      {Icon && iconPosition === 'right' && !loading && <Icon className="h-5 w-5" />}
    </motion.button>
  );
};

export default Button;