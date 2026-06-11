import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Music2, Instagram, Youtube, Facebook, Twitter,
  Mail, Phone, MapPin, ArrowUpRight, Send,
} from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { SITE_CONFIG, NAV_LINKS } from '@/utils/constants';
import { fadeUp, staggerContainer } from '@/utils/animations';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email');
      return;
    }
    toast.success("Subscribed! We'll be in touch.");
    setEmail('');
  };

  const socials = [
  {
    Icon: Instagram,
    href: SITE_CONFIG.social.instagram,
  },

  {
    Icon: Youtube,
    href: SITE_CONFIG.social.youtube,
  },

  {
    Icon: Music2,
    href: SITE_CONFIG.social.spotify,
  },
];

  return (
  <footer className="border-t border-gold-500/10 mt-20">

    <div className="container-premium px-5 sm:px-8 lg:px-16 py-12">

      <div className="flex flex-col items-center justify-center text-center">

        {/* LOGO */}

        <Link
          to="/"
          className="inline-flex items-center gap-3 mb-5"
        >

          <div className="h-12 w-12 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold-glow">

            <Music2
              className="h-6 w-6 text-black"
              strokeWidth={2.5}
            />

          </div>

          <div className="flex flex-col leading-none text-left">

            <span className="font-display text-2xl font-bold text-white">
              ASMVocal
            </span>

            <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-gold-400 mt-1">
              Academy
            </span>

          </div>

        </Link>

        {/* DESCRIPTION */}

        <p className="text-white/50 max-w-md leading-relaxed mb-6">

          A premium vocal mentorship platform
          helping singers unlock their full
          artistic potential.

        </p>

        {/* COPYRIGHT */}

        <p className="text-xs text-white/30 font-mono uppercase tracking-wider">

          © {new Date().getFullYear()}
          {" "}
           ASM Vocal Academy.
          All rights reserved.

        </p>

      </div>

    </div>

  </footer>
);
};

export default Footer;