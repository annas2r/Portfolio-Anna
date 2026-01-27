import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Project } from './ProjectsSection';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#795558]/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-[#FCF6EF] rounded-3xl max-w-5xl w-full max-h-[85vh] shadow-2xl relative overflow-y-auto custom-scrollbar"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - Sticky */}
          <div className="sticky top-4 right-4 z-50 flex justify-end px-4">
             <button
              onClick={onClose}
              className="bg-white/80 backdrop-blur hover:bg-white p-2 rounded-full transition-all duration-300 shadow-sm"
            >
              <X className="w-5 h-5 text-[#795558]" />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Column: Cover & Visuals */}
            <div className="bg-white p-6 lg:p-8 flex flex-col gap-6 lg:sticky lg:top-0 lg:h-fit">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {project.mockups.map((mockup, index) => (
                  <div key={index} className="relative rounded-xl overflow-hidden aspect-square">
                    <ImageWithFallback
                      src={mockup}
                      alt="Mockup"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-[#E8DCCA] text-[#795558] text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="flex items-center gap-1 text-gray-400 text-sm font-medium">
                  <Calendar className="w-4 h-4" /> {project.year}
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-serif text-[#795558] mb-8 leading-tight">
                {project.title}
              </h2>

              <div className="space-y-10">
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#795558]/80">O Desafio</h3>
                  <p className="text-base text-gray-600 leading-relaxed font-light">
                    {project.challenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#795558]/80">A Jornada</h3>
                  <p className="text-base text-gray-600 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#FFDAF0] relative shadow-sm">
                   <p className="text-[#795558] italic text-base leading-relaxed text-center font-medium">
                    "{project.personalPhrase}"
                   </p>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-4 border-t border-[#795558]/10">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#795558]/80 mb-4">Paleta</h3>
                    <div className="flex flex-wrap gap-2">
                       {project.colors.map((color, i) => (
                        <div key={i} className="group relative">
                          <div 
                            className="w-8 h-8 rounded-full border border-gray-100 shadow-sm cursor-help"
                            style={{ backgroundColor: color }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#795558]/80 mb-4">Tipografia</h3>
                    <div className="flex flex-col gap-2">
                      {project.typography.map((font, i) => (
                        <span key={i} className="text-gray-600 font-serif text-base">
                          {font}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
