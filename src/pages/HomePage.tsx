import Hero from '../components/home/Hero';
import FeatureHighlights from '../components/home/FeatureHighlights';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Skills from '../components/home/Skills';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeatureHighlights />
      <FeaturedProjects />
      <Skills />
    </div>
  );
};

export default HomePage;