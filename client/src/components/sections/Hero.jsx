import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
  Instagram,
  Youtube,
  Music2,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  heroTextReveal,
  fadeUp,
  staggerContainer,
} from "@/utils/animations";

import Button from "@/components/common/Button";

import heroImage from "../../assets/images/aadithya1.jpeg";

const Hero = () => {
  const containerRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] =
  useState(null);

useEffect(() => {
  const checkScreen = () => {
    setIsSmallScreen(window.innerWidth < 1024);
  };

  checkScreen();

  window.addEventListener("resize", checkScreen);

  return () =>
    window.removeEventListener(
      "resize",
      checkScreen
    );
}, []);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "8%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0]
  );
if (isSmallScreen === null) return null;
  return (
    <section
      ref={containerRef}
      className="
        relative
        safe-screen
        overflow-hidden
        bg-gradient-to-b
        from-black
        via-[#040404]
        to-black
      "
    >
      {/* BACKGROUND */}
      <motion.div
        style={{ y: isSmallScreen ? 0 : y }}
        className="
          absolute
          inset-0
          z-0
          overflow-hidden
        "
      >
        {/* ====================================== */}
        {/* MOBILE + TABLET PREMIUM HERO */}
        {/* ====================================== */}

        {isSmallScreen ? (
          <>
            {/* FULL BACKGROUND IMAGE */}
            <div
              className="
                absolute
                inset-0
                overflow-hidden
                z-0
              "
            >
              <img
                src={heroImage}
                alt="Aadithya SM"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  scale-[1.12]
                  blur-[8px]
                  brightness-[0.45]
                  opacity-70
                "
              />
            </div>

            {/* DARK CINEMATIC OVERLAY */}
            <div
              className="
                absolute
                inset-0
                z-10
              "
              style={{
                background: `
                  linear-gradient(
                    to bottom,
                    rgba(0,0,0,0.55) 0%,
                    rgba(0,0,0,0.72) 25%,
                    rgba(0,0,0,0.84) 55%,
                    rgba(0,0,0,0.95) 100%
                  )
                `,
              }}
            />

            {/* GOLD TINT */}
            <div
              className="
                absolute
                inset-0
                z-10
              "
              style={{
                background: `
                  radial-gradient(
                    circle at center,
                    rgba(255,180,40,0.08),
                    transparent 60%
                  )
                `,
              }}
            />
          </>
        ) : (
          <>
            {/* ====================================== */}
            {/* DESKTOP ORIGINAL — UNCHANGED */}
            {/* ====================================== */}

            <div
              className="
                absolute
                inset-0
                overflow-hidden
                z-0
              "
            >
              <img
                src={heroImage}
                alt="Aadithya SM"
                className="
                  absolute
                  md:right-[-8%]
                  lg:right-[-6%]
                  top-0
                  h-[100%]
                  lg:h-[122%]
                  w-auto
                  max-w-none
                  object-cover
                  object-top
                  lg:scale-[1.08]
                  brightness-[0.82]
                  contrast-[1.08]
                  saturate-[1.12]
                  opacity-100
                "
                style={{
                  maskImage:
                    "linear-gradient(to left, black 30%, transparent 100%)",

                  WebkitMaskImage:
                    "linear-gradient(to left, black 30%, transparent 100%)",
                }}
              />
            </div>

            {/* DESKTOP OVERLAY */}
            <div
              className="
                absolute
                inset-0
                z-10
                pointer-events-none
              "
              style={{
                background: `
                  linear-gradient(
                    to right,
                    rgba(0,0,0,1) 0%,
                    rgba(0,0,0,0.98) 28%,
                    rgba(0,0,0,0.92) 48%,
                    rgba(0,0,0,0.55) 70%,
                    rgba(0,0,0,0.12) 100%
                  )
                `,
              }}
            />

            {/* DESKTOP ATMOSPHERE */}
            <div
              className="
                absolute
                top-[0%]
                left-[-20%]
                md:left-auto
                md:right-[-20%]
                w-[380px]
                h-[380px]
                lg:w-[1500px]
                lg:h-[1500px]
                rounded-full
                z-0
                opacity-80
              "
              style={{
                background: `
                  radial-gradient(
                    circle,
                    rgba(255,200,80,0.08) 0%,
                    rgba(255,170,40,0.04) 30%,
                    transparent 72%
                  )
                `,
              }}
            />

            {/* DESKTOP GOLD MIST */}
            <div
              className="
                absolute
                inset-0
                z-0
                pointer-events-none
              "
              style={{
                background: `
                  radial-gradient(
                    circle at 70% 30%,
                    rgba(255,190,40,0.03),
                    transparent 45%
                  )
                `,
              }}
            />
          </>
        )}

        {/* VIGNETTE */}
        <div
          className="
            absolute
            inset-0
            z-10
            bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.82)_100%)]
          "
        />

        {/* GOLD FLOATING PARTICLES */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(isSmallScreen ? 8 : 26)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -18, 0],
                opacity: [0.05, 0.25, 0.05],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
                background: "#f6c453",
                boxShadow:
                  "0 0 2px rgba(246,196,83,0.25)",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* ====================================== */}
      {/* CONTENT */}
      {/* ====================================== */}
      
      <motion.div
        style={{
          opacity: isSmallScreen ? 1 : opacity,
        }}
        className="
          relative
          z-20
          safe-screen
          flex
          items-start
          md:items-center
        "
      >
        <div className="container-premium w-full px-5 sm:px-6 lg:px-16">
          <motion.div
            variants={staggerContainer(0.12, 0.15)}
            initial="hidden"
            animate="visible"
            className="
              max-w-[340px]
              sm:max-w-xl
              lg:max-w-3xl

              flex
              flex-col
              items-start
              text-left

              pt-32
              sm:pt-32
              lg:pt-20
            "
          >
            {/* TITLE */}
            <motion.h1
              variants={heroTextReveal}
              className="
                text-[clamp(2.6rem,7vw,5.8rem)]
                leading-[0.92]
                tracking-tight
                font-bold
                text-white
              "
            >
              Where Voices
              <br />

              <span className="italic font-normal text-yellow-400">
                Become Legends
              </span>
            </motion.h1>

            {/* FOUNDER */}
            <motion.div
              variants={fadeUp}
              className="
                flex items-center gap-3
                text-white/40
                mt-6 sm:mt-8
              "
            >
              <span className="h-px w-8 sm:w-12 bg-yellow-500/40" />

              <span className="text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-mono">
                Founded by Aadithya SM
              </span>

              <span className="h-px w-8 sm:w-12 bg-yellow-500/40" />
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              className="
                mt-5 sm:mt-6
                max-w-md
                text-sm
                sm:text-lg
                md:text-xl
                leading-relaxed
                text-white/75
              "
            >
              A premium music conservatory where
              world-class artists mentor the next
              generation of singers, performers,
              and composers.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={fadeUp}
              className="
                flex
                flex-col
                sm:flex-row
                items-start
                sm:items-center
                gap-5
                mt-8 sm:mt-12
              "
            >
              <Link to="/classes">
                <Button size="lg">
                  Explore Classes
                </Button>
              </Link>

              <div className="flex flex-wrap items-center gap-5 sm:gap-7">

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/aadithya.sm?igsh=MWM4eGduajN3azJkeg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 transition-all duration-300"
                >
                  <Instagram className="h-4 w-4 text-yellow-400/70 transition-all duration-300 group-hover:text-yellow-300 group-hover:scale-110" />

                  <span className="text-sm tracking-wide text-white/55 transition-colors duration-300 group-hover:text-white">
                    Instagram
                  </span>
                </a>

                {/* YOUTUBE */}
                <a
                  href="https://youtube.com/@aadithya_sm?si=_CVQoy_3XgmZIdVw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 transition-all duration-300"
                >
                  <Youtube className="h-4 w-4 text-yellow-400/70 transition-all duration-300 group-hover:text-yellow-300 group-hover:scale-110" />

                  <span className="text-sm tracking-wide text-white/55 transition-colors duration-300 group-hover:text-white">
                    YouTube
                  </span>
                </a>

                {/* SPOTIFY */}
                <a
                  href="https://open.spotify.com/artist/5mTcAgiWPNZovCBWAwHdvS?si=pj17YZneQLy9G6ElAh_UOA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 transition-all duration-300"
                >
                  <Music2 className="h-4 w-4 text-yellow-400/70 transition-all duration-300 group-hover:text-yellow-300 group-hover:scale-110" />

                  <span className="text-sm tracking-wide text-white/55 transition-colors duration-300 group-hover:text-white">
                    Spotify
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* SCROLL INDICATOR - DESKTOP ONLY */}
      {!isSmallScreen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.4,
            duration: 0.8,
          }}
          className="
            absolute
            bottom-8
            sm:bottom-10
            left-1/2
            -translate-x-1/2
            z-20
            hidden sm:flex
            flex-col
            items-center
            gap-3
          "
        >
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.42em]
              text-white/35
              font-mono
            "
          >
            Scroll Down
          </span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              h-11
              w-6
              rounded-full
              border border-white/15
              flex
              justify-center
              pt-2
              backdrop-blur-sm
              bg-white/[0.02]
            "
          >
            <ArrowDown className="h-3.5 w-3.5 text-white/45" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
