import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GalleryHero from '@/components/gallery/GalleryHero';
import { SEO } from '@/utils/seo';

import aadithya from '@/assets/images/aadithya.jpg';
import aadithya1 from '@/assets/images/galler.jpeg';
import gallery from '@/assets/images/Gallary.jpeg';
import gallery1 from '@/assets/images/AADITYA.jpeg';
import gallery2 from '@/assets/images/ADD.jpeg';
import gallery3 from '@/assets/images/Gallery1.jpeg';
const galleryItems = [
  {
    image: aadithya,
    link: "https://www.instagram.com/reel/DXwfctBRfNv/",
    title: "Live Vocal Energy",
  },
  {
    image: aadithya1,
    link: "https://www.instagram.com/reel/DYmx71USDEf/",
    title: "Performance Experience",
  },
  {
    image: gallery,
    link: "https://www.instagram.com/reel/DY2PQwLtBLX/",
    title: "Academy Moments",
  },
  {
    image: gallery1,
    link: "https://www.instagram.com/reel/DY7aCqZyaGR/",
    title: "Cinematic Sessions",
  },
  {
    image: gallery2,
    link: "https://www.instagram.com/reel/DYpYcfBSHvf/",
    title: "Musical Paradise",
  },
  {
    image: gallery3,
    link: "https://www.instagram.com/reel/DZIQb5lyLB5/",
    title: "Global Vocal Journey",
  },
];
const GalleryPage = () => {
  return (
    <>
      <SEO
        title="Gallery"
        description="Explore cinematic academy moments, performances, workshops and vocal sessions from Vocal Academy."
      />

      <Navbar />

      <main className="bg-black overflow-hidden">
        {/* HERO */}
        <GalleryHero />

        {/* GALLERY SECTION */}
        <section className="relative py-32 border-t border-gold-500/10">
          {/* GOLD AMBIENT */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gold-500/5 rounded-full blur-[180px]" />
          </div>

          <div className="container-premium px-5 sm:px-8 lg:px-16 relative z-10">
            {/* SECTION HEADER */}
            <div className="max-w-3xl mb-24">
              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.45em]
                  text-gold-400
                  font-mono
                "
              >
                Academy Moments
              </span>

              <h2
                className="
                  text-5xl
                  md:text-7xl
                  font-display
                  mt-6
                  leading-[0.95]
                  text-white
                "
              >
                Captured
                <span className="italic text-gold-400">
                  {" "}
                  Experiences
                </span>
              </h2>

              <p
                className="
                  mt-8
                  text-white/60
                  text-lg
                  leading-relaxed
                  max-w-2xl
                "
              >
                A cinematic visual journey through performances,
                mentorship, workshops, rehearsals and artistic
                growth inside Vocal Academy.
              </p>
            </div>

            {/* GALLERY GRID */}
            {/* GALLERY GRID */}
<div
  className="
    grid
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
    gap-8
  "
>
  {galleryItems.map((item, i) => (
    <a
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative
        overflow-hidden
        rounded-[34px]
        aspect-[4/5]
        border
        border-gold-500/10
        bg-black
        group
        block
        transition-all
        duration-700
        hover:-translate-y-2
        hover:border-gold-400/30
      "
    >
      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.title}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          z-0
          transition-transform
          duration-700
          group-hover:scale-110
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          z-10
          bg-gradient-to-t
          from-black
          via-black/30
          to-transparent
        "
      />

      {/* GOLD GLOW */}
      <div
        className="
          absolute
          inset-0
          z-20
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-700
        "
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,190,60,0.22), transparent 70%)",
        }}
      />

      {/* PREMIUM HOVER SHINE */}
      <div
        className="
          absolute
          inset-0
          z-20
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-700
        "
      >
        <div
          className="
            absolute
            top-0
            -left-[120%]
            h-full
            w-[60%]
            rotate-12
            bg-white/10
            blur-2xl
            group-hover:left-[140%]
            transition-all
            duration-1000
          "
        />
      </div>

      {/* TEXT CONTENT */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-30
          p-8
        "
      >
        <h3
          className="
            text-2xl
            font-display
            text-white
          "
        >
          {item.title}
        </h3>

        <p
          className="
            text-gold-300/90
            mt-3
            text-sm
            tracking-[0.2em]
            uppercase
            font-medium
          "
        >
          Want to experience the paradise?
        </p>

        <div
          className="
            mt-4
            inline-flex
            items-center
            gap-2
            text-white/70
            text-sm
            group-hover:text-gold-300
            transition-colors
          "
        >
          Click to watch reel
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>
      </div>
    </a>
  ))}
</div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GalleryPage;