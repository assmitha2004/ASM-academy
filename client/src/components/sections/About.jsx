import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";

import {
  fadeUp,
  slideInLeft,
  staggerContainer,
} from "@/utils/animations";

import aadithyaImage from "../../assets/images/aadithya.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="
        section-padding
        relative
        overflow-hidden
      "
    >
      {/* Ambient Glow */}

      <div
        className="
          absolute
          top-1/2
          -translate-y-1/2
          -right-40

          w-[260px]
          h-[260px]

          lg:w-[500px]
          lg:h-[500px]

          bg-gold-700/[0.06]
          rounded-full
          mobile-glow
          pointer-events-none
        "
      />

      <div className="container-premium relative">
        {/* Heading */}

        <SectionHeading
          eyebrow="The Maestro"
          title="A Lifetime in Music"
          description="
            From sold-out arenas to intimate masterclasses —
            a journey of discipline, passion, and the relentless
            pursuit of sonic excellence.
          "
        />

        {/* Grid */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12

            gap-10
            lg:gap-16

            items-center
          "
        >
          {/* IMAGE */}

          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              lg:col-span-5
              relative
            "
          >
            <div
              className="
                relative

                aspect-[4/5]
                sm:aspect-[5/6]

                rounded-[28px]
                overflow-hidden
                glass
              "
            >
              <img
                src={aadithyaImage}
                alt="Aadithya SM"
                loading="lazy"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

              {/* Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-transparent
                  to-transparent
                "
              />

              {/* Gold Edge */}

              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-gold-500/60
                  to-transparent
                "
              />
            </div>
          </motion.div>

          {/* TEXT */}

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              lg:col-span-7

              space-y-5
              sm:space-y-6
            "
          >
            {/* Quote Label */}

            <motion.div
              variants={fadeUp}
              className="
                inline-flex
                items-center
                gap-3
              "
            >
              <Quote className="h-5 w-5 text-gold-400" />

              <span
                className="
                  text-[10px]
                  sm:text-xs

                  font-mono
                  uppercase

                  tracking-[0.28em]
                  sm:tracking-[0.3em]

                  text-gold-400
                "
              >
                A Note From The Founder
              </span>
            </motion.div>

            {/* Main Quote */}

            <motion.p
              variants={fadeUp}
              className="
                text-xl
                sm:text-2xl
                lg:text-3xl

                font-display
                italic

                leading-snug

                text-ivory/90
                text-balance
              "
            >
              "Music isn't taught — it's{" "}

              <span
                className="
                  text-gradient-gold
                  not-italic
                  font-semibold
                "
              >
                awakened
              </span>

              . Every voice carries a story waiting to be released."
            </motion.p>

            {/* Body */}

            <motion.div
              variants={fadeUp}
              className="
                space-y-5

                text-sm
                sm:text-base
                lg:text-lg

                leading-relaxed

                text-ivory/70
              "
            >
              <p>
                Aadithya SM is a multilingual vocalist and live performer
                recognized for his commanding stage presence, vocal versatility,
                and contributions across the Tamil, Telugu, and Malayalam music
                industries.
              </p>

              <p>
                He gained wider public recognition through appearances on
                <span className="text-gold-300">
                  {" "}Sun TV’s Rajaparvai{" "}
                </span>
                and
                <span className="text-gold-300">
                  {" "}Vijay TV’s Neeya Naana
                </span>.
              </p>

              <p>
                Aadithya has performed alongside artists including
                <span className="text-gold-300">
                  {" "}Vijay Antony
                </span>
                , and at major entertainment events including
                <span className="text-gold-300">
                  {" "}Varisu
                </span>
                ,
                <span className="text-gold-300">
                  {" "}Ponniyin Selvan I & II
                </span>.
              </p>

              <p>
                His performances have also reached international audiences
                across
                <span className="text-gold-300">
                  {" "}Singapore
                </span>
                and
                <span className="text-gold-300">
                  {" "}Sri Lanka
                </span>.
              </p>

              <p>
                Known for combining technical vocal excellence with engaging
                stage presentation, Aadithya SM continues to build a strong
                presence in the contemporary South Indian live entertainment
                industry.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;