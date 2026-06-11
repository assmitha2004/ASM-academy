import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import { SEO } from '@/utils/seo';

const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        description="A premium music academy where world-class artists mentor the next generation. Explore classes, masterclasses, and live mentorship."
      />
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default Home;