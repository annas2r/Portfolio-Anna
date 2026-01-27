import { Toaster } from 'sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectsSection } from './components/ProjectsSection';
import { CreativeProcess } from './components/CreativeProcess';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased cursor-none">
      <CustomCursor />
      <Toaster position="top-center" />
      <Header />
      <Hero />
      <About />
      <ProjectsSection />
      <CreativeProcess />
      <Contact />
      <Footer />
    </div>
  );
}
