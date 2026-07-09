import React from "react";
import { motion } from "motion/react";
import { Award, Target, Sparkles } from "lucide-react";

export default function Team() {
  return (
    <section
      id="team"
      className="bg-white text-brand-violet py-24 md:py-32 px-6 md:px-12 border-b border-brand-violet/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="border-b border-brand-violet/20 pb-12 mb-20">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-pink block uppercase mb-4">
            // LEADERSHIP
          </span>
          <h2 className="text-[8vw] md:text-[4vw] font-black tracking-tighter leading-none">
            OUR TEAM
          </h2>
        </div>

        {/* 2-Column Team Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
          
          {/* Member 1: 김연주 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between p-8 md:p-12 border-4 border-brand-violet bg-[#fbfbfb] relative"
          >
            {/* Corner Graphic Accent */}
            <div className="absolute right-0 top-0 w-16 h-16 bg-brand-violet text-white flex items-center justify-center font-mono font-bold text-sm">
              MICE
            </div>
            
            <div>
              <span className="font-mono text-sm font-extrabold text-brand-pink uppercase tracking-widest block mb-2">
                CO-FOUNDER & EXECUTIVE PLANNER
              </span>
              <h3 className="text-4xl font-black text-brand-violet tracking-tight">
                김연주
              </h3>
              <p className="mt-2 text-brand-violet/60 font-mono text-xs font-semibold uppercase tracking-wider">
                10+ Years of Global MICE Strategy
              </p>

              <div className="h-[2px] bg-brand-violet/10 my-8 w-full" />

              <p className="text-brand-violet/90 font-medium leading-relaxed text-base">
                글로벌 및 아시아태평양급 대형 컨퍼런스, 포럼, 비즈니스 매칭 행사를 직접 총괄 기획 및 직접 운영해 온 실무형 디렉터입니다. 행사의 목적에 맞춰 운영 전략과 디자인 큐레이션을 유기적으로 연계시킵니다.
              </p>
            </div>

            {/* Credentials / Core details */}
            <ul className="mt-10 space-y-3 font-mono text-xs font-bold text-brand-violet">
              <li className="flex items-center gap-3">
                <Target size={16} className="text-brand-pink flex-shrink-0" />
                <span>글로벌 MICE 기획 · 브랜딩 전략 · 총괄</span>
              </li>
              <li className="flex items-center gap-3">
                <Award size={16} className="text-brand-pink flex-shrink-0" />
                <span>아태지역 장관급 회의 및 대형 테크 컨퍼런스 총괄</span>
              </li>
              <li className="flex items-center gap-3">
                <Sparkles size={16} className="text-brand-pink flex-shrink-0" />
                <span>AI 활용 MICE 스마트 워크플로우 전문 강사</span>
              </li>
            </ul>
          </motion.div>

          {/* Member 2: 최용환 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between p-8 md:p-12 border-4 border-brand-violet bg-[#fbfbfb] relative"
          >
            {/* Corner Graphic Accent */}
            <div className="absolute right-0 top-0 w-16 h-16 bg-brand-pink text-white flex items-center justify-center font-mono font-bold text-sm">
              DSGN
            </div>

            <div>
              <span className="font-mono text-sm font-extrabold text-brand-pink uppercase tracking-widest block mb-2">
                CO-FOUNDER & CREATIVE DIRECTOR
              </span>
              <h3 className="text-4xl font-black text-brand-violet tracking-tight">
                최용환
              </h3>
              <p className="mt-2 text-brand-violet/60 font-mono text-xs font-semibold uppercase tracking-wider">
                10+ Years of Brand Experience Design
              </p>

              <div className="h-[2px] bg-brand-violet/10 my-8 w-full" />

              <p className="text-brand-violet/90 font-medium leading-relaxed text-base">
                에디토리얼, 키비주얼 비주얼 시스템 설계, 패키지 및 시공 인쇄 제작까지 오프라인과 디지털 접점을 자유롭게 연결하는 브랜드 디자이너입니다. 시공 현장 규격에 맞춘 무결점 디자인 설계를 고집합니다.
              </p>
            </div>

            {/* Credentials / Core details */}
            <ul className="mt-10 space-y-3 font-mono text-xs font-bold text-brand-violet">
              <li className="flex items-center gap-3">
                <Target size={16} className="text-brand-pink flex-shrink-0" />
                <span>브랜드 디자인 · 인쇄 제작물 · 비주얼 시스템</span>
              </li>
              <li className="flex items-center gap-3">
                <Award size={16} className="text-brand-pink flex-shrink-0" />
                <span>기업 및 공공기관 랜드마크 스페이스 비주얼 총괄</span>
              </li>
              <li className="flex items-center gap-3">
                <Sparkles size={16} className="text-brand-pink flex-shrink-0" />
                <span>MICE 특화 초고해상도 실무 시공 설계 전문가</span>
              </li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
