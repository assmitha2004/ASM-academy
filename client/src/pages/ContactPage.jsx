import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/utils/seo";

const ContactPage = () => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, [mouseX, mouseY]);

  const glowX = useSpring(
    useTransform(mouseX, (v) => (v - 0.5) * 120),
    {
      stiffness: 40,
      damping: 30,
    }
  );

  const glowY = useSpring(
    useTransform(mouseY, (v) => (v - 0.5) * 120),
    {
      stiffness: 40,
      damping: 30,
    }
  );

  return (
    <>
      <SEO
        title="Contact"
        description="Contact ASM Vocal Academy for collaborations, performances and mentorship inquiries."
      />

      <Navbar />

      <main className="bg-black text-white overflow-hidden relative min-h-screen">

        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">

          {/* GOLD GLOW */}
          <motion.div
            style={{
              x: glowX,
              y: glowY,
            }}
            className="
              absolute
              top-[-10%]
              right-[-10%]
              w-[900px]
              h-[900px]
              rounded-full
              opacity-40
              blur-[140px]
            "
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background: `
                  radial-gradient(
                    circle,
                    rgba(255,210,90,0.25) 0%,
                    rgba(255,170,40,0.15) 30%,
                    rgba(255,140,0,0.08) 55%,
                    transparent 75%
                  )
                `,
              }}
            />
          </motion.div>

          {/* SECOND GLOW */}
          <div
            className="
              absolute
              bottom-[-20%]
              left-[-10%]
              w-[700px]
              h-[700px]
              rounded-full
              opacity-20
              blur-[120px]
            "
            style={{
              background:
                "radial-gradient(circle, rgba(255,180,40,0.20), transparent 70%)",
            }}
          />

          {/* GRID */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
            }}
          />

          {/* FLOATING PARTICLES */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="
                absolute
                rounded-full
                bg-gold-400
              "
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 6 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* VIGNETTE */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.82) 100%)",
            }}
          />
        </div>

        {/* HERO */}
        <section className="relative z-20 min-h-screen flex items-center justify-center section-padding">

          <div className="container-premium text-center max-w-4xl">

            {/* EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                inline-flex
                items-center
                gap-3
                border
                border-gold-500/20
                bg-white/[0.03]
                backdrop-blur-xl
                px-5
                py-2
                rounded-full
                mb-8
              "
            >
              <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />

              <span
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.38em]
                  text-gold-400
                  font-mono
                "
              >
                Contact
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="
  text-[2rem]
  sm:text-[2.8rem]
  md:text-[4rem]
  lg:text-[5rem]
  xl:text-[6rem]

  leading-[1.05]
  sm:leading-[0.95]

  font-display
"
            >
              Let’s Create
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-gold-200
                  via-gold-400
                  to-gold-500
                  bg-clip-text
                  text-transparent
                  italic
                "
              >
                Something Beautiful
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="
                mt-10
                max-w-2xl
                mx-auto
                text-lg
                md:text-xl
                text-white/60
                leading-relaxed
              "
            >
              For collaborations, performances,
              mentorship inquiries, or artistic
              conversations — feel free to
              reach out directly.
            </motion.p>

            {/* EMAIL BUTTON */}
<motion.a
  href="mailto:Aadithyamusics@gmail.com?subject=Collaboration Inquiry"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.55 }}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  className="
    relative
    inline-flex
    items-center
    justify-center

    gap-3
    sm:gap-4

    mt-10
    sm:mt-14

    px-5
    sm:px-8

    py-4
    sm:py-5

    rounded-full

    border
    border-gold-500/20

    bg-white/[0.05]
    backdrop-blur-2xl

    shadow-[0_0_60px_rgba(255,180,40,0.12)]

    overflow-hidden
    group

    max-w-full
  "
>
  {/* SHIMMER */}
  <div
    className="
      absolute
      inset-0
      -translate-x-full
      group-hover:translate-x-full
      transition-transform
      duration-1000
      bg-gradient-to-r
      from-transparent
      via-white/10
      to-transparent
    "
  />

  {/* ICON */}
  <div
    className="
      relative
      z-10

      w-10
      h-10
      sm:w-11
      sm:h-11

      rounded-full
      bg-gold-500/10

      border
      border-gold-400/20

      flex
      items-center
      justify-center

      shrink-0
    "
  >
    ✦
  </div>

  {/* EMAIL */}
  <span
    className="
      relative
      z-10

      text-gold-300

      text-xs
      sm:text-sm
      md:text-base
      lg:text-lg

      font-medium

      break-all
      text-center
    "
  >
    Aadithyamusics@gmail.com
  </span>

  {/* ARROW */}
  <motion.div
    animate={{ x: [0, 4, 0] }}
    transition={{
      repeat: Infinity,
      duration: 1.5,
    }}
    className="
      relative
      z-10
      text-gold-400
      shrink-0
    "
  >
    →
  </motion.div>
</motion.a>

            {/* INFO CARDS */}
            <div
              className="
                grid
                md:grid-cols-3
                gap-6
                mt-20
              "
            >

              {[
                {
                  title: "Worldwide",
                  desc: "Available globally",
                },

                {
                  title: "Response",
                  desc: "Within 24–48 hours",
                },

                {
                  title: "Sessions",
                  desc: "Online mentorship",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.7 + i * 0.15,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    relative
                    overflow-hidden

                    rounded-[32px]

                    border
                    border-gold-500/10

                    bg-white/[0.03]
                    backdrop-blur-xl

                    p-8
                  "
                >

                  {/* GLOW */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                    style={{
                      background:
                        "radial-gradient(circle at top, rgba(255,190,60,0.12), transparent 70%)",
                    }}
                  />

                  <div className="relative z-10">
                    <div
                      className="
                        text-xs
                        uppercase
                        tracking-[0.3em]
                        text-gold-400
                        font-mono
                        mb-5
                      "
                    >
                      {item.title}
                    </div>

                    <p className="text-white/70 text-lg">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default ContactPage;