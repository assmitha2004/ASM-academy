import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

import {
  Mic2,
  Users,
  Globe,
  Clock3,
  Video,
  Music4,
  ChevronDown,
} from "lucide-react";

import InquiryModal from "@/components/booking/InquiryModal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";

import { SEO } from "@/utils/seo";

import heroImage from "@/assets/images/aadithya1.jpeg";

const curriculum = [
  {
    title: "Voice Culture",
    desc: "Breathing alignment, tonal support, resonance clarity and vocal stability.",
  },

  {
    title: "Rhythm & Timing",
    desc: "Internal rhythm development with practical pace and timing exercises.",
  },

  {
    title: "Cine Song Training",
    desc: "Tamil & Hindi film songs to naturally apply vocal foundations.",
  },

  {
    title: "Progressive Advancement",
    desc: "Advanced song interpretation and theoretical growth over milestones.",
  },
];

const policies = [
  {
    title: "Scheduling",
    content:
      "A recurring weekly slot will be assigned and strictly followed.",
  },

  {
    title: "Payment Terms",
    content:
      "Fees are due monthly before the 7th. Classes resume after payment confirmation.",
  },

  {
    title: "Student Absence",
    content:
      "Only one reschedule per month is allowed with advance notice.",
  },

  {
    title: "Teacher Absence",
    content:
      "Instructor cancellations will always be compensated with makeup sessions.",
  },
];

const ClassesPage = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const pricingRef = useRef(null);
  const curriculumRef = useRef(null);

 useEffect(() => {
  const fetchCountries = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}/api/country`
      );

      const countryArray = Array.isArray(data)
        ? data
        : data.countries || [];

      setCountries(countryArray);

      if (countryArray.length > 0) {
        setSelectedCountry(countryArray[0].name);
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchCountries();
}, []);

const selectedCountryData = Array.isArray(countries)
  ? countries.find((c) => c.name === selectedCountry)
  : null;

const scrollToPlans = () => {
  pricingRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
const scrollToCurriculum = () => {
  curriculumRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

  return (
    <>
      <SEO title="Classes" />

      <Navbar />

      <main className="bg-black text-white overflow-hidden">
        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <section className="relative min-h-screen overflow-hidden">
          {{/* IMAGE — DESKTOP ONLY */}
<div className="absolute inset-0 hidden lg:block">
  <img
    src={heroImage}
    alt="Aadithya SM"
    className="
      absolute
      right-[-6%]
      top-[-2%]

      h-[122%]
      w-auto
      max-w-none

      object-cover
      object-top

      scale-[1.08]

      brightness-[0.78]
      contrast-[1.1]
      saturate-[1.15]

      opacity-100
    "
    style={{
      maskImage:
        "linear-gradient(to left, black 72%, transparent 100%)",
      WebkitMaskImage:
        "linear-gradient(to left, black 72%, transparent 100%)",
    }}
  />
</div>

          {/* BLACK + GOLD MERGE */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background: `
                linear-gradient(
                  to right,
                  rgba(0,0,0,1) 0%,
                  rgba(0,0,0,0.98) 28%,
                  rgba(0,0,0,0.92) 42%,
                  rgba(10,6,0,0.74) 56%,
                  rgba(35,20,0,0.45) 66%,
                  rgba(120,70,0,0.16) 80%,
                  rgba(255,180,40,0.05) 90%,
                  rgba(0,0,0,0) 100%
                )
              `,
            }}
          />

          {/* GOLD GLOW */}
          <div
            className="
              absolute
              top-[-10%]
              right-[-10%]
              w-[1200px]
              h-[1200px]
              rounded-full
              z-0
              opacity-80
            "
            style={{
              background: `
                radial-gradient(
                  circle,
                  rgba(255,210,90,0.20) 0%,
                  rgba(255,170,40,0.12) 28%,
                  rgba(255,140,0,0.06) 46%,
                  transparent 70%
                )
              `,
              filter: "blur(140px)",
            }}
          />

          {/* CONTENT */}
          <div className="relative z-20 container-premium min-h-screen flex items-center pt-32">
            <div
  className="
    max-w-3xl
    text-center
    lg:text-left
    mx-auto
    lg:mx-0
  "
>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="
                  text-xs
                  uppercase
                  tracking-[0.45em]
                  text-gold-400
                  font-mono
                "
              >
                Structured Vocal Mentorship
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="
  text-4xl
  sm:text-5xl
  md:text-6xl
  lg:text-8xl
  font-display
  leading-[0.94]
  mt-5
  lg:mt-6
"
              >
                Master The
                <br />

                <span className="italic text-gold-400">
                  Art Of Singing
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="
  mt-6
  lg:mt-10

  max-w-[320px]
  sm:max-w-[420px]
  lg:max-w-2xl

  mx-auto
  lg:mx-0

  text-sm
  sm:text-base
  lg:text-xl

  text-white/65
  leading-7
"
              >
                Personalized online vocal mentorship designed to
                strengthen technique, musicality, confidence and
                performance ability through cinematic song-based
                learning.
              </motion.p>

              {/* QUICK INFO */}
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 mt-8 lg:mt-14">
                {[
                  {
                    icon: Clock3,
                    label: "45–60 mins",
                  },

                  {
                    icon: Video,
                    label: "Google Meet",
                  },

                  {
                    icon: Music4,
                    label: "4 Sessions",
                  },

                  {
                    icon: Globe,
                    label: "Worldwide",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="
                      border
                      border-gold-500/10
                      bg-white/[0.03]
                      backdrop-blur-xl
                      rounded-2xl lg:rounded-3xl
p-3 lg:p-5
                    "
                  >
                   <item.icon className="h-4 w-4 lg:h-5 lg:w-5 text-gold-400 mb-4" />

                    <p className="text-xs lg:text-sm text-white/70">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

            <div
  className="
    mt-8
    lg:mt-12
    flex
    flex-col
    items-center
    lg:items-start
  "
>
  <Button
    size="lg"
    className="min-w-[220px]"
    onClick={() => setIsInquiryOpen(true)}
  >
    Check Availability
  </Button>

  <div
    className="
      mt-5
      flex
      items-center
      gap-4
      text-sm
      text-white/55
    "
  >
  </div>
</div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* PRICING */}
        {/* ================================================= */}

        <section
  ref={pricingRef}
  className="section-padding"
>
          <div className="container-premium">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
              <div>
                <span className="text-xs uppercase tracking-[0.45em] text-gold-400 font-mono">
                  Fee Structure
                </span>

                <h2 className="text-5xl md:text-6xl font-display mt-5">
                  Class Plans
                </h2>
                <p
  className="
    mt-6
    max-w-3xl
    text-white/60
    leading-relaxed
    text-lg
  "
>
  <span className="text-gold-400 font-semibold">
    Flexible Payment Instructions:
  </span>

  {" "}
  To avoid high international wire transfer
  fees, please avoid standard SWIFT bank
  transfers. Instead, use your Wise account
  or pay directly using your local debit or
  credit card through your browser without
  downloading additional apps.
</p>
              </div>

              {/* COUNTRY SELECTOR */}
              <div className="relative group">
                <select
                  value={selectedCountry}
                  onChange={(e) =>
                    setSelectedCountry(e.target.value)
                  }
                  style={{
  WebkitAppearance: "none",
  MozAppearance: "none",
  appearance: "none",
  backgroundColor: "#0b0b0b",
  color: "white",
}}
                  className="
                    bg-[#0b0b0b]/95
                    backdrop-blur-2xl
                    border border-[#2c2108]
                    rounded-2xl
                    px-6
                    pr-14
                    py-4
                    min-w-[220px]
                    text-white
                    text-[15px]
                    font-medium
                    shadow-[0_0_30px_rgba(255,180,40,0.06)]
                    hover:border-gold-500/40
                    hover:bg-[#111111]
                    focus:outline-none
                    focus:border-gold-400/50
                    focus:shadow-[0_0_40px_rgba(255,190,60,0.12)]
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  {countries.map((country) => (
                    <option
                      key={country._id}
                      value={country.name}
                      className="bg-black text-white"
                    >
                      {country.name}
                    </option>
                  ))}
                </select>

                {/* CUSTOM ARROW */}
                <div
                  className="
                    absolute
                    right-5
                    top-1/2
                    -translate-y-1/2
                    pointer-events-none
                  "
                >
                  
                </div>

                {/* GOLD GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    pointer-events-none
                  "
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(255,190,60,0.10), transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />
              </div>
            </div>

            {/* PLAN CARDS */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* ONE ON ONE */}
              <motion.div
                whileHover={{ y: -8 }}
                className="
                  relative
                  overflow-hidden
                  rounded-[40px]
                  border
                  border-gold-500/10
                  bg-gradient-to-b
                  from-[#141000]
                  to-black
                  p-10
                "
              >
                <Mic2 className="h-10 w-10 text-gold-400 mb-10" />

                <h3 className="text-4xl font-display mb-6">
                  One-on-One
                </h3>

                <p className="text-white/65 leading-relaxed mb-10">
                  Personalized individual mentorship tailored
                  completely to the student’s vocal pace and
                  artistic growth.
                </p>

                {/* PRICE */}
                <div className="text-6xl font-display text-gold-400">
                  {selectedCountryData?.currency}{" "}
                  {selectedCountryData?.onePrice}
                </div>

                <p className="text-white/40 mt-3">
                  Private weekly sessions
                </p>

                <ul className="space-y-4 mt-10 text-white/70">
                  <li>• 1 class per week</li>
                  <li>• Direct vocal correction</li>
                  <li>• Personalized exercises</li>
                  <li>• Song-oriented training</li>
                </ul>
              </motion.div>

              {/* DUO */}
              <motion.div
                whileHover={{ y: -8 }}
                className="
                  relative
                  overflow-hidden
                  rounded-[40px]
                  border
                  border-gold-500/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-10
                "
              >
                <Users className="h-10 w-10 text-gold-400 mb-10" />

                <h3 className="text-4xl font-display mb-6">
                  Duo / Semi-Private
                </h3>

                <p className="text-white/65 leading-relaxed mb-10">
                  Perfect for siblings, friends or partners
                  learning together in a shared interactive
                  environment.
                </p>

                {/* PRICE */}
                <div className="text-6xl font-display text-gold-400">
                   {selectedCountryData?.currency}{" "}
                  {selectedCountryData?.duoPrice}

                 
                </div>

                <p className="text-white/40 mt-3">
                  Shared weekly sessions
                </p>

                <ul className="space-y-4 mt-10 text-white/70">
                  <li>• Collaborative learning</li>
                  <li>• Shared performance training</li>
                  <li>• Duo harmony exercises</li>
                  <li>• Interactive practice sessions</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* CURRICULUM */}
        {/* ================================================= */}

       <section
  ref={curriculumRef}
  className="pt-10 pb-24 border-t border-gold-500/10"
>
  <div className="container-premium">

    {/* HEADER — same structure as Fee Structure */}
    <div className="mb-12 px-6 sm:px-0">

  <span
    className="
      block
      text-[11px]
      uppercase
      tracking-[0.35em]
      text-gold-400
      font-mono
    "
  >
    Curriculum
  </span>

  <h2
    className="
      mt-4
      text-3xl
      sm:text-4xl
      md:text-6xl
      font-display
      leading-tight
    "
  >
    Structured Artistic Growth
  </h2>

  <p
    className="
      mt-4
      text-sm
      sm:text-base
      text-white/60
      leading-relaxed
      max-w-xl
    "
  >
    Carefully designed progressive vocal training focused on long-term artistic development.
  </p>

</div>

    {/* CARDS */}
    <div className="grid md:grid-cols-2 gap-8">
      {curriculum.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -5 }}
          className="
            border
            border-gold-500/10
            rounded-[32px]
            p-10
            bg-white/[0.03]
          "
        >
          <h3 className="text-3xl font-display mb-5 text-gold-400">
            {item.title}
          </h3>

          <p className="text-white/65 leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>

        {/* ================================================= */}
        {/* POLICIES */}
        {/* ================================================= */}

        <section className="pt-12 pb-24 border-t border-gold-500/10"
>
          <div className="container-premium max-w-5xl">
            <div className="text-center mb-20">
              <span className="text-xs uppercase tracking-[0.45em] text-gold-400 font-mono">
                Guidelines
              </span>

              <h2 className="text-5xl md:text-6xl font-display mt-5">
                Class Policies
              </h2>
            </div>

            <div className="space-y-6">
              {policies.map((item, i) => (
                <div
                  key={i}
                  className="
                    border
                    border-gold-500/10
                    rounded-[28px]
                    p-8
                    bg-white/[0.03]
                  "
                >
                  <h3 className="text-2xl font-display mb-4">
                    {item.title}
                  </h3>

                  <p className="text-white/65 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />

      <Footer />
    </>
  );
};

export default ClassesPage;
