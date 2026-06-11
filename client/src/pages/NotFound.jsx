import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '@/components/common/Button';

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-5 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative max-w-md"
      >
        <div className="text-[clamp(8rem,20vw,16rem)] font-display font-bold text-gradient-gold leading-none mb-6">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-display mb-4">
          Lost in the Melody
        </h1>
        <p className="text-ivory/60 mb-8 leading-relaxed">
          The page you're searching for has drifted off-tempo. Let's get you back
          on stage.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button icon={Home} iconPosition="left">Back Home</Button>
          </Link>
          <button onClick={() => window.history.back()} className="btn-ghost">
            <ArrowLeft className="h-4 w-4" /> Previous Page
          </button>
        </div>
      </motion.div>
    </main>
  );
};

export default NotFound;