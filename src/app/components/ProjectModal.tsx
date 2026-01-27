import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, ArrowRight, CheckCircle, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Project } from './ProjectsSection';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [fullscreenImage, setFullscreenImage] = useState<{src: string, style?: React.CSSProperties} | null>(null);

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
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md group cursor-zoom-in"
                   onClick={() => setFullscreenImage({ src: project.image })}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover ${project.virtualSlideCount ? 'object-left' : 'object-center'}`}
                />
              </div>
              
              {/* Conditional Layout: Grid or Carousel */}
              {project.layoutType === 'carousel' ? (
                <div className="space-y-3">
                  <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 -mx-2 px-2 custom-scrollbar">
                    {project.virtualSlideCount ? (
                       /* Virtual Slides Logic (Panorama Split) */
                       Array.from({ length: project.virtualSlideCount }).map((_, index) => (
                        <div 
                          key={index} 
                          className="flex-none w-[70%] sm:w-[40%] aspect-[4/5] rounded-xl overflow-hidden snap-center shadow-sm border border-gray-100 relative cursor-zoom-in"
                          onClick={() => setFullscreenImage({ 
                            src: project.image, 
                            style: { objectPosition: `${(index / (project.virtualSlideCount! - 1)) * 100}% center` } 
                          })}
                        >
                          <img
                            src={project.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                            style={{ 
                              objectPosition: `${(index / (project.virtualSlideCount! - 1)) * 100}% center`
                            }}
                          />
                          <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-full">
                            {index + 1}/{project.virtualSlideCount}
                          </div>
                        </div>
                      ))
                    ) : ( 
                       /* Standard Slides Logic (Multiple Files) */
                       project.mockups.map((mockup, index) => (
                        <div 
                          key={index} 
                          className="flex-none w-[70%] sm:w-[40%] aspect-[4/5] rounded-xl overflow-hidden snap-center shadow-sm border border-gray-100 relative cursor-zoom-in"
                          onClick={() => setFullscreenImage({ src: mockup })}
                        >
                          <ImageWithFallback
                            src={mockup}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-full">
                            {index + 1}/{project.mockups.length}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <p className="text-center text-xs text-[#795558]/60 font-medium tracking-wide flex items-center justify-center gap-1">
                    Deslize para ver mais <ArrowRight className="w-3 h-3" />
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {project.mockups.map((mockup, index) => (
                    <div 
                      key={index} 
                      className="relative rounded-xl overflow-hidden aspect-square shadow-sm group cursor-zoom-in"
                      onClick={() => setFullscreenImage({ src: mockup })}
                    >
                      <ImageWithFallback
                        src={mockup}
                        alt="Mockup"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              )}
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

                {/* Creative Process Steps */}
                {project.process && (
                  <div className="space-y-6 pt-4">
                     <h3 className="text-xs font-bold uppercase tracking-widest text-[#795558]/80">O Processo Criativo</h3>
                     <div className="relative border-l border-[#795558]/20 ml-2 space-y-8 pb-2">
                        {project.process.map((item, index) => (
                          <div key={index} className="relative pl-6 group">
                            {/* Dot */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#e8dcca] group-hover:bg-[#795558] transition-colors duration-300 ring-4 ring-white" />
                            
                            <h4 className="text-lg font-serif text-[#795558] mb-2 leading-none">
                              {item.step}
                            </h4>
                            <p className="text-sm text-gray-600 font-light leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        ))}
                     </div>
                  </div>
                )}

                {/* Deliverables List */}
                {project.deliverables && (
                  <div className="space-y-4 pt-8 border-t border-[#795558]/10">
                     <h3 className="text-xs font-bold uppercase tracking-widest text-[#795558]/80 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#795558]" />
                        O que foi entregue
                     </h3>
                     <div className="flex flex-wrap gap-2">
                        {project.deliverables.map((item, index) => (
                          <span key={index} className="px-3 py-1.5 bg-[#FCF6EF] text-[#795558] text-sm rounded-lg border border-[#E8DCCA] font-medium transition-colors hover:bg-[#E8DCCA]/50 cursor-default">
                            {item}
                          </span>
                        ))}
                     </div>
                  </div>
                )}

                <div className="bg-white p-6 rounded-2xl border border-[#FFDAF0] relative shadow-sm mt-8">
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

                {/* CTA - Call to Action */}
                <div className="mt-12 pt-8 border-t border-[#795558]/10 flex flex-col items-center text-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#795558]/60 mb-2">Gostou do resultado?</span>
                  <p className="text-[#795558] mb-6 font-serif text-xl italic">Vamos escrever a história da sua marca.</p>
                  
                  <a 
                    href={`https://wa.me/5531992781019?text=Olá Anna! Vi seu projeto "${project.title}" no portfólio e adorei. Gostaria de conversar sobre a minha marca!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 bg-[#795558] text-[#FCF6EF] px-8 py-4 rounded-xl hover:bg-[#5A3D3F] transition-all duration-300 shadow-[0_10px_20px_-5px_rgba(121,85,88,0.3)] hover:shadow-[0_15px_25px_-5px_rgba(121,85,88,0.4)] hover:-translate-y-1"
                  >
                    <span className="font-medium tracking-wide">Solicitar Orçamento</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Fullscreen Lightbox */}
      {fullscreenImage && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
           onClick={() => setFullscreenImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 transition-colors z-[70]"
            onClick={() => setFullscreenImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          {fullscreenImage.style ? (
            /* Cropped View for Panorama Slides */
            <div className="w-full max-w-[380px] aspect-[4/5] overflow-hidden relative rounded-sm shadow-2xl bg-black">
               <img 
                src={fullscreenImage.src} 
                alt="Vizualização parcial" 
                className="w-full h-full object-cover"
                style={fullscreenImage.style}
              />
            </div>
          ) : (
            /* Standard Full Image View */
            <img 
              src={fullscreenImage.src} 
              alt="Vizualização em tela cheia" 
              className="max-w-full max-h-screen object-contain rounded-sm shadow-2xl"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
