import { Features } from './components/features/Features';
import { FeaturesBigOne } from './components/featuresBigOne/FeaturesBigOne';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Sponsors } from './components/sponsors/Sponsors';
import { fourFeatures } from './data/fourFeatures';
import { sixFeatures } from './data/sixFeatures';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Sponsors />
        <FeaturesBigOne data={fourFeatures} />
        <Sponsors />
        <FeaturesBigOne data={sixFeatures} />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}

export default App; 