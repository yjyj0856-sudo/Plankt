import React from "react";
import { motion } from "motion/react";

export default function WhyPlankit() {
  const items = [
    {
      num: "01",
      title: "기획과 디자인이 한 팀입니다",
      desc: "기획·디자인 통합 진행으로 운영 맥락과 디자인을 동시에 풀어냅니다.",
    },
    {
      num: "02",
      title: "MICE 현장을 압니다",
      desc: "글로벌·아시아태평양급 행사를 직접 운영한 실무자의 기획은 결과부터 다릅니다.",
    },
    {
      num: "03",
      title: "처음부터 끝까지 톤이 무너지지 않습니다",
      desc: "포스터, 사이니지, 무대 백월, 굿즈까지 모든 접점이 하나의 브랜드로 보이게 만듭니다.",
    },
  ];

  return (
    <section
      id="why-plankit"
      className="bg-white text-brand-violet py-24 md:py-32 px-6 md:px-12 border-b border-brand-violet/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left column: Sticky-style title section */}
        <div className="lg:col-span-4 flex flex-col justify-start lg:sticky lg:top-32 h-fit">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-pink block uppercase mb-4">
            // CORE COMPETENCY
          </span>
          <h2 className="text-[9vw] lg:text-[4.5vw] font-black tracking-tighter leading-none uppercase">
            WHY
            <br />
            PLANKIT?
          </h2>
          <p className="mt-6 text-brand-violet/60 text-sm max-w-xs font-medium leading-relaxed">
            MICE 기획에 최적화된 브랜드 디자인 스튜디오, 플랜킷만이 제공할 수 있는 세 가지 가치.
          </p>
          <div className="hidden lg:block w-24 h-1 bg-brand-violet mt-12" />
        </div>

        {/* Right column: Vertical stacked list */}
        <div className="lg:col-span-8 flex flex-col gap-12 md:gap-16">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-6 md:gap-10 pb-12 border-b border-brand-violet/15 last:border-b-0 last:pb-0"
            >
              {/* Giant Index Number */}
              <div className="sm:w-1/4">
                <span className="font-mono text-6xl md:text-8xl font-black text-brand-pink tracking-tighter block leading-none select-none">
                  {item.num}
                </span>
              </div>
              
              {/* Core Content */}
              <div className="sm:w-3/4 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-black tracking-tight text-brand-violet leading-snug">
                  {item.title}
                </h3>
                <p className="mt-4 text-brand-violet/80 text-base md:text-lg font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
