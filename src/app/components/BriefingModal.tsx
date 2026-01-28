import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';

interface BriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BriefingModal({ isOpen, onClose }: BriefingModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="fixed inset-0 bg-[#795558]/60 backdrop-blur-sm z-[100] flex items-center justify-center p-0 md:p-4"
           onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full md:max-w-6xl h-full md:h-[95vh] rounded-none md:rounded-3xl shadow-2xl overflow-hidden relative flex flex-col"
          >
            {/* Header Modal */}
            <div className="bg-[#FCF6EF] px-4 md:px-6 py-3 md:py-4 flex justify-between items-center border-b border-[#E8DCCA]">
               <div className="flex flex-col">
                 <h3 className="text-[#795558] font-serif font-bold text-lg">Briefing de Projeto</h3>
                 <span className="text-xs text-gray-500 hidden md:block">Preencha com calma, são essas informações que guiarão nosso projeto.</span>
               </div>
               
               <div className="flex items-center gap-2">
                 <a 
                   href="https://annas2r.github.io/Briefing-Forms/" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-[#795558] hover:bg-[#E8DCCA]/30 rounded-lg transition-colors"
                 >
                   Abrir em nova janela <ExternalLink className="w-4 h-4" />
                 </a>
                 <button 
                   onClick={onClose}
                   className="p-2 hover:bg-[#E8DCCA]/50 rounded-full transition-colors text-[#795558]"
                 >
                   <X className="w-6 h-6" />
                 </button>
               </div>
            </div>

            {/* Iframe */}
            <div className="flex-1 w-full bg-white relative">
               <iframe 
                 src="https://annas2r.github.io/Briefing-Forms/" 
                 className="w-full h-full border-none"
                 title="Formulário de Briefing"
               />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
