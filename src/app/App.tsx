import { Toaster } from 'sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectsSection } from './components/ProjectsSection';
import { CreativeProcess } from './components/CreativeProcess';
import { ServicesList } from './components/ServicesList';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { VLibras } from './components/VLibras';
import { AccessibilityMenu } from './components/AccessibilityMenu';

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased cursor-none">
      <CustomCursor />
      <VLibras />
      <AccessibilityMenu />
      <Toaster position="top-center" />
      <Header />
      <Hero />
      <About />
      <ProjectsSection />
      <CreativeProcess />
      <ServicesList />
      <Contact />
      <Footer />
    </div>
  );
}
