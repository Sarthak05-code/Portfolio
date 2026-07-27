import BackgroundGrid from './components/BackgroundGrid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-on-surface">
      {/* WebGL animated grid background */}
      <BackgroundGrid />

      {/* CRT scanline overlay */}
      <div className="crt-overlay" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <Skills />
          <Projects />
          <Education />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
