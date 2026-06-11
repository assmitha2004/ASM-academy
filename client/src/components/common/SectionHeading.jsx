import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
} from "@/utils/animations";

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
}) => {
  const alignment =
    align === "left"
      ? "text-left items-start"
      : "text-center items-center";

  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className={`
        flex
        flex-col

        gap-4
        sm:gap-5

        ${alignment}

        max-w-3xl

        ${
          align === "center"
            ? "mx-auto"
            : ""
        }

        mb-10
        sm:mb-14
        lg:mb-20
      `}
    >
      {/* EYEBROW */}

      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className="
            inline-flex
            items-center
            gap-2

            text-[10px]
            sm:text-xs

            font-mono
            uppercase

            tracking-[0.28em]
            sm:tracking-[0.4em]

            text-gold-400
          "
        >
          <span
            className="
              h-px
              w-6
              sm:w-8

              bg-gold-500/50
            "
          />

          {eyebrow}
        </motion.span>
      )}

      {/* TITLE */}

      <motion.h2
        variants={fadeUp}
        className="
          text-display
          font-display
          text-balance

          leading-[1.02]

          text-ivory
        "
      >
        {title}
      </motion.h2>

      {/* DESCRIPTION */}

      {description && (
        <motion.p
          variants={fadeUp}
          className="
            text-sm
            sm:text-base
            lg:text-lg

            text-ivory/60

            leading-relaxed

            max-w-xl
            lg:max-w-2xl

            text-balance
          "
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;