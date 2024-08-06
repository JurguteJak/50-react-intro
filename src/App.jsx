import { Features } from './components/features/Features';
import { Footer } from './components/footer/Footer';
import { Header } from './components/Header';
import { Hero } from './components/hero/Hero';
import { Sponsors } from './components/sponsors/Sponsors';

function App() {

  return (
    <>
      <Header />  
     
      <main>
        <Hero />
        <Features />
        <Sponsors /> 
      </main>
      <Footer />
    </>
  );
}

export default App;