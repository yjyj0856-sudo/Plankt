import React from "react";
import { motion } from "motion/react";
import ProjectPoster from "./ProjectPoster.tsx";

export default function SelectedWorks() {
  const projects = [
    {
      id: 1,
      title: "2025 바이오·헬스케어 미주 진출 전략 세미나",
      year: "2025",
      scope: "온라인 포스터 제작",
    },
    {
      id: 2,
      title: "2025 KME MICEWAVE 웹 홍보물",
      year: "2025",
      scope: "컨퍼런스 / 마이스웨이브 / 오픈세션 비주얼 제작",
    },
    {
      id: 3,
      title: "2026 MICE기획자 양성과정 4기",
      year: "2026",
      scope: "인스타그램광고 / 상세페이지  ※ Key Visual 주최측 제공",
    },
    {
      id: 4,
      title: "2025 MICE 글로벌 전문가 상반기 발대식",
      year: "2025",
      scope: "키비주얼 / 현장물 / 홍보물",
    },
    {
      id: 5,
      title: "2025 MICE 글로벌 전문가 심화과정",
      year: "2025",
      scope: "키비주얼 / 현장물 / 홍보물",
    },
    {
      id: 6,
      title: "2026 랜딩 홈페이지 제작",
      year: "2026",
      scope: "MICE 행사 외",
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="works"
      className="bg-white text-brand-violet py-24 md:py-32 px-6 md:px-12 border-b border-brand-violet/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-violet/20 pb-12 mb-16 gap-6">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-brand-pink block uppercase mb-4">
              // DESIGN PORTFOLIO
            </span>
            <h2 className="text-[8vw] md:text-[4vw] font-black tracking-tighter leading-none">
              SELECTED WORKS
            </h2>
          </div>
          <p className="font-mono text-sm font-bold text-brand-violet/60 max-w-xs md:text-right leading-relaxed">
            행사의 정체성을 한눈에 보여주는 플랜킷 스튜디오의 대표 프로젝트 아카이브.
          </p>
        </div>

        {/* 3x2 Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectPoster
                id={project.id}
                title={project.title}
                year={project.year}
                scope={project.scope}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom "View All Works" Text Link */}
        <div className="mt-20 text-center">
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-3 font-sans text-xl md:text-2xl font-black text-brand-violet hover:text-brand-pink transition-colors duration-300 relative cursor-pointer"
          >
            <span>View All Works</span>
            <motion.span 
              className="text-brand-pink"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
            <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-brand-violet group-hover:bg-brand-pink transition-colors duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
}
