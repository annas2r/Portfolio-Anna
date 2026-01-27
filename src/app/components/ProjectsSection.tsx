import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectModal } from "./ProjectModal";
import { ArrowUpRight, FolderOpen } from "lucide-react";

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
    image: `${import.meta.env.BASE_URL}assets/alegria_doce_cover_new.png`,
    description: "Uma marca que transborda afeto e doçura em cada detalhe.",
    challenge:
      "Criar uma identidade que fosse ao mesmo tempo profissional e acolhedora, transmitindo o sabor caseiro com um toque de sofisticação.",
    personalPhrase:
      "Foi delicioso ver essa marca nascer. Cada cor foi escolhida como um ingrediente de uma receita especial.",
    colors: ["#9fc8a6", "#7b4b33", "#fef3ee", "#628e6b"],
    typography: ["Poly", "ITC New Baskerville"],
    mockups: [
      `${import.meta.env.BASE_URL}assets/alegria_doce_1.png`,
      `${import.meta.env.BASE_URL}assets/alegria_doce_mugs_new.png`,
    ],
  },
  {
    id: 2,
    title: "Recanto do Sereno",
    category: "Logo & Identidade",
    year: "2024",
    image: `${import.meta.env.BASE_URL}assets/recanto_logo.jpg`,
    description:
      "Uma identidade visual que convida à paz e ao contato com a natureza.",
    challenge:
      "Traduzir a tranquilidade e a rusticidade elegante de um refúgio em Minas Gerais para uma marca visual sólida.",
    personalPhrase:
      "O verde profundo e o laranja terroso contam a história do lugar antes mesmo de você chegar lá.",
    colors: ["#10433a", "#e89137", "#f5f5f5"],
    typography: ["Draculas Personal", "Poppins"],
    mockups: [
      `${import.meta.env.BASE_URL}assets/recanto_business_card.jpg`,
      `${import.meta.env.BASE_URL}assets/recanto_tote.jpg`,
      `${import.meta.env.BASE_URL}assets/recanto_flyer.jpg`,
      `${import.meta.env.BASE_URL}assets/recanto_logo_green.png`,
    ],
  },
  {
    id: 3,
    title: "Social Media Supermercado",
    category: "Social Media",
    year: "2024",
    image: `${import.meta.env.BASE_URL}assets/supermercado_pao.png`,
    description:
      "Estratégia visual para varejo que converte seguidores em vendas.",
    challenge:
      "Criar peças de alta conversão para WhatsApp e Instagram, mantendo a identidade da marca e despertando apetite visual.",
    personalPhrase:
      "No varejo, o design precisa ser rápido e direto. Cada post é um convite irresistível.",
    colors: ["#0057B7", "#FF8C00", "#F5F5F5"],
    typography: ["Montserrat", "Poppins"],
    mockups: [
      `${import.meta.env.BASE_URL}assets/supermercado_zap.png`,
      `${import.meta.env.BASE_URL}assets/supermercado_pao.png`,
      `${import.meta.env.BASE_URL}assets/supermercado_macarrao.png`,
      `${import.meta.env.BASE_URL}assets/supermercado_entrega.png`,
    ],
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projetos"
      className="py-24 md:py-32 px-6 md:px-12 bg-[#FCF6EF]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#795558]/5 mb-6">
            <FolderOpen className="w-4 h-4 text-[#795558]" />
            <span className="text-sm uppercase tracking-widest text-[#795558] font-medium">
              Portfolio Selecionado
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#795558] leading-tight mb-6">
            Trabalhos Recentes
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Uma curadoria de projetos onde design, estratégia e afeto se
            encontram.
          </p>
        </motion.div>

        {/* Behance-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col gap-4"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                  <span className="text-white text-sm font-medium px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                    Ver Projeto
                  </span>
                  <div className="bg-white p-2 rounded-full text-[#795558]">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Text Content Below */}
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-serif text-[#795558] font-medium group-hover:text-[#5A3D3F] transition-colors leading-tight">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium tracking-wide">
                  <span className="uppercase text-xs">{project.category}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="text-xs">{project.year}</span>
                </div>
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
