import React from "react";
import { motion } from "motion/react";

export default function WhatWeDo() {
  const services = [
    {
      title: "Planning.",
      desc: "행사 컨셉 · 핵심 메시지 · 톤앤매너 전략",
      sub: "행사의 아이덴티티를 관통하는 핵심 기획과 명확한 메시지를 발굴하여 성공적인 행사의 기틀을 다집니다.",
      tags: ["Concept Development", "Core Messaging", "Branding Strategy"]
    },
    {
      title: "Design.",
      desc: "키비주얼 · 인쇄물 · 현장물 · 온라인 홍보물",
      sub: "온·오프라인 전 채널을 포괄하는 독창적 비주얼 아이덴티티 시스템을 구축하고 완벽한 행사 산출물을 제작합니다.",
      tags: ["Key Visuals", "Print System", "Venue Signage", "Digital Assets"]
    },
    {
      title: "Education.",
      desc: "AI 활용 MICE 실무 교육 · 기업/기관 강의",
      sub: "업계 최전선의 노하우를 담아 MICE 현업에 최적화된 생성형 AI 및 디지털 브랜딩 실무 교육을 제공합니다.",
      tags: ["MICE Workflow AI", "Digital Media Lecture", "Corporate Training"]
    },
  ];

  return (
    <section
      id="what-we-do"
      className="bg-brand-violet text-white py-24 md:py-32 px-6 md:px-12 border-b border-white/10 overflow-hidden relative"
    >
      {/* Background graphic */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
        <span className="font-mono text-[20vw] font-black tracking-tighter leading-none select-none text-white">
          DO_
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="border-b border-white/20 pb-12 mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-pink block uppercase mb-4">
            // SERVICES
          </span>
          <h2 className="text-[8vw] md:text-[4vw] font-black tracking-tighter leading-none">
            WHAT WE DO
          </h2>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
          {services.map((svc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-12 lg:py-0 lg:px-10 first:lg:pl-0 last:lg:pr-0 group flex flex-col justify-between"
            >
              <div>
                {/* Heading */}
                <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white group-hover:text-brand-pink transition-colors duration-300">
                  {svc.title}
                </h3>
                
                {/* Core description */}
                <h4 className="mt-6 text-xl font-bold text-white tracking-tight">
                  {svc.desc}
                </h4>
                
                {/* Detail explanation */}
                <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-sm">
                  {svc.sub}
                </p>
              </div>

              {/* Tags & Bullet details */}
              <div className="mt-10 pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[10px] tracking-wider uppercase bg-white/10 text-white/90 px-2 py-1 rounded font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
