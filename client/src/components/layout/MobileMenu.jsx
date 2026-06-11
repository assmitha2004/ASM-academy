import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import {
  X,
  Instagram,
  Youtube,
  Music2,
} from "lucide-react";

import useLockBody from "@/hooks/useLockBody";

import {
  NAV_LINKS,
  SITE_CONFIG,
} from "@/utils/constants";

import Button from "@/components/common/Button";

const linkVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },

  visible: (i) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.08 + i * 0.05,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const MobileMenu = ({
  onClose,
}) => {
  useLockBody(true);

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
    <motion.div
      initial={{
        opacity: 0,
      }}

      animate={{
        opacity: 1,
      }}

      exit={{
        opacity: 0,
      }}

      transition={{
        duration: 0.22,
      }}

      className="
        fixed
        inset-0
        z-[60]

        bg-obsidian-950/98
        backdrop-blur-md

        overflow-y-auto
      "
    >
      {/* AMBIENT GLOW */}

      <div
        className="
          absolute
          top-1/3
          left-1/2
          -translate-x-1/2

          w-[260px]
          h-[260px]

          sm:w-[420px]
          sm:h-[420px]

          bg-gold-500/10

          rounded-full

          mobile-glow

          pointer-events-none
        "
      />

      {/* CLOSE */}

      <div
        className="
          flex
          justify-end

          p-4
          sm:p-6
        "
      >
        <button
          onClick={onClose}

          aria-label="Close menu"

          className="
            h-11
            w-11

            grid
            place-items-center

            rounded-full

            border
            border-gold-500/30

            hover:bg-gold-500/10

            transition-colors
          "
        >
          <X
            className="
              h-5
              w-5
              text-ivory
            "
          />
        </button>
      </div>

      {/* NAVIGATION */}

      <nav
        className="
          flex
          flex-col

          items-center
          justify-center

          px-6
          sm:px-8

          mt-6
          sm:mt-8

          gap-1
        "
      >
        {NAV_LINKS.map(
          (link, i) => (
            <motion.div
              key={link.path}

              custom={i}

              variants={linkVariants}

              initial="hidden"

              animate="visible"
            >
              <Link
                to={link.path}

                onClick={onClose}

                className="
                  block

                  py-3
                  sm:py-4

                  text-3xl
                  sm:text-4xl

                  font-display
                  font-semibold

                  text-ivory

                  hover:text-gradient-gold

                  transition-all
                  duration-300
                "
              >
                {link.name}
              </Link>
            </motion.div>
          )
        )}
      </nav>

      {/* CTA + SOCIAL */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: 0.3,
          duration: 0.45,
        }}

        className="
          relative

          mt-12
          sm:mt-16

          pb-10

          flex
          flex-col

          items-center

          gap-6
          sm:gap-8

          px-6
          sm:px-8
        "
      >
        <Button
          onClick={onClose}

          size="lg"

          className="
            w-full
            max-w-sm
          "
        >
          Book a Class
        </Button>

        {/* SOCIALS */}

        <div
          className="
            flex
            items-center
            gap-5
          "
        >
          {socials.map(
            (
              { Icon, href },
              i
            ) => (
              <a
                key={i}

                href={href}

                target="_blank"

                rel="noopener noreferrer"

                className="
                  h-10
                  w-10

                  grid
                  place-items-center

                  rounded-full

                  border
                  border-gold-500/20

                  hover:border-gold-500/60
                  hover:bg-gold-500/10

                  transition-all
                "
              >
                <Icon
                  className="
                    h-4
                    w-4

                    text-ivory/80
                  "
                />
              </a>
            )
          )}
        </div>

        {/* FOOTER */}

        <p
          className="
            text-[10px]
            sm:text-xs

            font-mono
            uppercase

            tracking-[0.28em]

            text-gold-400/50

            text-center
          "
        >
          © {new Date().getFullYear()}{" "}
          {SITE_CONFIG.name}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;