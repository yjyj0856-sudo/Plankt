import React from "react";
import { motion } from "motion/react";

export default function WorkProcess() {
  const steps = [
    {
      num: "01",
      title: "심층 인터뷰 (Deep Interview)",
      desc: "행사의 목적, 예산, 예상 참여자, 공간 환경 등 핵심 맥락을 밀도 있게 진단합니다.",
    },
    {
      num: "02",
      title: "창의적 기획 (Creative Concept)",
      desc: "인터뷰 결과를 바탕으로 행사 고유의 키비주얼 방향성 및 슬로건/컨셉을 수립합니다.",
    },
    {
      num: "03",
      title: "시각 제안 (Visual Proposal)",
      desc: "디자이너와 플래너가 도출한 최적의 키비주얼 디자인 모듈 시안 2~3종을 제안합니다.",
    },
    {
      num: "04",
      title: "비주얼 확장 (Visual Extension)",
      desc: "확정된 키비주얼을 기반으로 포스터, 사이니지, 무대, 디지털 미디어까지 완벽히 배리에이션합니다.",
    },
    {
      num: "05",
      title: "최종 납품 (Final Delivery)",
      desc: "MICE 시공 규격을 완벽히 준수하는 고해상도 인쇄 파일 및 제작 가이드를 납품합니다.",
    },
  ];

  return (
    <section
      id="process"
      className="bg-brand-violet text-white py-24 md:py-32 px-6 md:px-12 border-b border-white/10 overflow-hidden relative"
    >
      <div className="max-w-4xl mx-auto relative">
        
        {/* Header */}
        <div className="border-b border-white/20 pb-12 mb-20 text-center md:text-left">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-pink block uppercase mb-4">
            // METHODOLOGY
          </span>
          <h2 className="text-[8vw] md:text-[4vw] font-black tracking-tighter leading-none">
            WORK PROCESS
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Vertical Connector Line (Hidden in single-column mobile, visible on desktop) */}
          <div className="absolute left-6 md:left-[50px] top-0 bottom-0 w-[2px] bg-white/10" />

          {/* Timeline Steps */}
          <div className="flex flex-col gap-16 md:gap-24 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-6 md:gap-12 relative"
              >
                {/* Step Circle with Number */}
                <div className="flex-shrink-0 z-20">
                  <motion.div 
                    className="w-12 h-12 md:w-[100px] md:h-[100px] bg-brand-pink text-white rounded-none flex items-center justify-center font-mono text-xl md:text-3xl font-black tracking-tighter border-2 border-brand-violet group-hover:bg-white group-hover:text-brand-violet transition-all duration-300 shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {step.num}
                  </motion.div>
                </div>

                {/* Content Box */}
                <div className="flex-grow pt-1 md:pt-4">
                  <span className="font-mono text-xs text-brand-pink font-bold tracking-widest block uppercase mb-1">
                    PHASE {step.num}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black tracking-tight text-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-white/80 text-sm md:text-base font-medium leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
