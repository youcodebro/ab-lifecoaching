import Loader   from './components/Loader';
import Nav      from './components/Nav';
import Hero     from './components/Hero';
import Marquee  from './components/Marquee';
import Coaching from './components/Coaching';
import Impact   from './components/Impact';
import FAQ      from './components/FAQ';
import About    from './components/About';
import Connect  from './components/Connect';
import Footer   from './components/Footer';

export default function App() {
  return (
    <>
      <Loader />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Coaching />
        <Impact />
        <FAQ />
        <About />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
