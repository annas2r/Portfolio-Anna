import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectModal } from './ProjectModal';
import { ArrowRight, Quote } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  challenge: string;
  personalPhrase: string;
  colors: string[];
  typography: string[];
  mockups: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Alegria Doce Ateliê",
    category: "Identidade Visual",
    year: "2024",
    image: "/assets/alegria_doce_cover_new.png",
    description: "Uma marca que transborda afeto e doçura em cada detalhe.",
    challenge: "Criar uma identidade que fosse ao mesmo tempo profissional e acolhedora, transmitindo o sabor caseiro com um toque de sofisticação.",
    personalPhrase: "Foi delicioso ver essa marca nascer. Cada cor foi escolhida como um ingrediente de uma receita especial.",
    colors: ["#9fc8a6", "#7b4b33", "#fef3ee", "#628e6b"],
    typography: ["Poly", "ITC New Baskerville"],
    mockups: [
      "/assets/alegria_doce_1.png",
      "/assets/alegria_doce_mugs_new.png"
    ]
  },
  {
    id: 2,
    title: "Recanto do Sereno",
    category: "Logo & Identidade",
    year: "2024",
    image: "/assets/recanto_logo.jpg",
    description: "Uma identidade visual que convida à paz e ao contato com a natureza.",
    challenge: "Traduzir a tranquilidade e a rusticidade elegante de um refúgio em Minas Gerais para uma marca visual sólida.",
    personalPhrase: "O verde profundo e o laranja terroso contam a história do lugar antes mesmo de você chegar lá.",
    colors: ["#10433a", "#e89137", "#f5f5f5"],
    typography: ["Draculas Personal", "Poppins"],
    mockups: [
      "/assets/recanto_business_card.jpg",
      "/assets/recanto_tote.jpg",
      "/assets/recanto_flyer.jpg",
      "/assets/recanto_logo_green.png"
    ]
  },
  {
    id: 3,
    title: "Social Media Supermercado",
    category: "Social Media",
    year: "2024",
    image: "/assets/supermercado_pao.png",
    description: "Estratégia visual para varejo que converte seguidores em vendas.",
    challenge: "Criar peças de alta conversão para WhatsApp e Instagram, mantendo a identidade da marca e despertando apetite visual.",
    personalPhrase: "No varejo, o design precisa ser rápido e direto. Cada post é um convite irresistível.",
    colors: ["#0057B7", "#FF8C00", "#F5F5F5"],
    typography: ["Montserrat", "Poppins"],
    mockups: [
      "/assets/supermercado_zap.png",
      "/assets/supermercado_pao.png",
      "/assets/supermercado_macarrao.png",
      "/assets/supermercado_entrega.png"
    ]
  }
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="py-24 md:py-32 px-6 md:px-12 bg-[#FCF6EF]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#795558] font-medium mb-4">
            Projetos Selecionados
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#795558] leading-tight mb-6">
            Histórias que ajudei a criar
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl">
            Cada projeto é uma jornada única. Aqui, compartilho não apenas o resultado, 
            mas o sentimento e o aprendizado de cada caminho percorrido.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row gap-10 md:gap-20 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div 
                className="w-full md:w-1/2 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transition-all duration-700 hover:shadow-2xl">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-[#795558]/10 transition-colors duration-700" />
                  
                  {/* Floating 'View' Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/95 backdrop-blur-md px-8 py-4 rounded-full text-[#795558] font-serif tracking-wide shadow-lg transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out flex items-center gap-3">
                      <span>Ver Processo</span> 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Narrative */}
              <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-xs md:text-sm font-medium tracking-widest text-[#795558]/80">
                    <span className="uppercase">{project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-[#795558]" />
                    <span>{project.year}</span>
                  </div>
                  <h3 
                    className="text-3xl md:text-4xl font-serif text-[#795558] cursor-pointer hover:text-[#5A3D3F] transition-colors"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400">O Desafio</h4>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    {project.challenge}
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-[#FFDAF0]">
                  <Quote className="absolute -top-4 -left-3 w-6 h-6 text-[#FFDAF0] bg-[#FCF6EF]" />
                  <p className="text-gray-500 italic font-medium leading-relaxed">
                    "{project.personalPhrase}"
                  </p>
                </div>

                {/* Color preview mini */}
                <div className="flex items-center gap-3 pt-4">
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Paleta:</span>
                  <div className="flex -space-x-2">
                    {project.colors.map((color, i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: color }} 
                      />
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedProject(project)}
                  className="group inline-flex items-center gap-2 text-[#795558] font-medium hover:gap-4 transition-all duration-300 border-b border-[#795558]/30 pb-1 hover:border-[#795558]"
                >
                  Conhecer a história completa
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
