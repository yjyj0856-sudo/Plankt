import React from "react";
import { motion } from "motion/react";

interface ProjectPosterProps {
  id: number;
  title: string;
  year: string;
  scope: string;
}

export default function ProjectPoster({ id, title, year, scope }: ProjectPosterProps) {
  // We can render custom high-contrast graphic layouts based on the ID
  const renderGraphic = () => {
    switch (id) {
      case 1: // 2025 바이오·헬스케어 미주 진출 전략 세미나
        return (
          <div className="absolute inset-0 bg-[#12002E] overflow-hidden flex items-center justify-center">
            <img
              src="https://postfiles.pstatic.net/MjAyNjA3MDlfNDUg/MDAxNzgzNTc5ODI1OTY0.lYwbRxAMPRUaCsRngCjSyQTeOvCrUfrWQ5xNxSYw764g._qwMATJvE5cjJA4jTP5AHfV5uEo8n3KOHOGo9VSYDcAg.PNG/%EB%B0%94%EC%9D%B4%EC%98%A4%ED%97%AC%EC%8A%A4%EC%BC%80%EC%96%B4.png?type=w3840"
              alt="2025 바이오·헬스케어 미주 진출 전략 세미나"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Elegant dark gradient overlay for branding caption */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#12002E]/90 via-[#12002E]/30 to-transparent p-5 flex justify-between items-end pt-12">
              <span className="font-mono text-[10px] text-white/80 tracking-widest uppercase">PLANKIT // 2025</span>
              <span className="font-mono text-[10px] text-brand-pink font-bold tracking-wider">● ONLINE POSTER</span>
            </div>
          </div>
        );

      case 2: // 2025 KME MICEWAVE 웹 홍보물
        return (
          <div className="absolute inset-0 bg-[#12002E] overflow-hidden flex items-center justify-center">
            <img
              src="https://postfiles.pstatic.net/MjAyNjA3MDlfMTM4/MDAxNzgzNTc5NjY2MDk4.zrx1x08td-cW6YYv4o-vM2sK_UuVCCPdM3YYzqJEmZAg.gu65vh1uP751DTaswwMWrRG3FnK9e58C2k0O2-x_onAg.PNG/MICEWAVE.png?type=w3840"
              alt="2025 KME MICEWAVE 웹 홍보물"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Elegant dark gradient overlay for branding caption */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#12002E]/90 via-[#12002E]/30 to-transparent p-5 flex justify-between items-end pt-12">
              <span className="font-mono text-[10px] text-white/80 tracking-widest uppercase">PLANKIT // 2025</span>
              <span className="font-mono text-[10px] text-brand-pink font-bold tracking-wider">● DIGITAL PROMO</span>
            </div>
          </div>
        );

      case 3: // 2026 MICE기획자 양성과정 4기
        return (
          <div className="absolute inset-0 bg-[#12002E] overflow-hidden flex items-center justify-center">
            <img
              src="https://postfiles.pstatic.net/MjAyNjA3MDlfODgg/MDAxNzgzNTc5Njg4NjI3.kYfVj245eSgIMtLT9q7oQFr4jH-rjqwUnPFMVeAZd-Ag.0knW83z19xZWcBDPjcgascA1CLkNrPMzOCT0w8ZXGfUg.PNG/image.png?type=w3840"
              alt="2026 MICE기획자 양성과정 4기"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Elegant dark gradient overlay for branding caption */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#12002E]/90 via-[#12002E]/30 to-transparent p-5 flex justify-between items-end pt-12">
              <span className="font-mono text-[10px] text-white/80 tracking-widest uppercase">PLANKIT // 2026</span>
              <span className="font-mono text-[10px] text-brand-pink font-bold tracking-wider">● PROMO AD</span>
            </div>
          </div>
        );

      case 4: // 2025 MICE 글로벌 전문가 상반기 발대식
        return (
          <div className="absolute inset-0 bg-[#12002E] overflow-hidden flex items-center justify-center">
            <img
              src="https://postfiles.pstatic.net/MjAyNjA3MDlfMTkz/MDAxNzgzNTc5NzIzMTc1.B_d5QTZjeCWWxkGyd51I0alR6hoPAyiRVyIab3iCHKgg.9JY6SjXyOmmgsWarXD5mdnuu0fGQW9ZgaxqjJdaxq_og.PNG/image.png?type=w3840"
              alt="2025 MICE 글로벌 전문가 상반기 발대식"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Elegant dark gradient overlay for branding caption */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#12002E]/90 via-[#12002E]/30 to-transparent p-5 flex justify-between items-end pt-12">
              <span className="font-mono text-[10px] text-white/80 tracking-widest uppercase">PLANKIT // 2025</span>
              <span className="font-mono text-[10px] text-brand-pink font-bold tracking-wider">● KEY VISUAL</span>
            </div>
          </div>
        );

      case 5: // 2025 MICE 글로벌 전문가 심화과정
        return (
          <div className="absolute inset-0 bg-[#12002E] overflow-hidden flex items-center justify-center">
            <img
              src="https://postfiles.pstatic.net/MjAyNjA3MDlfNDcg/MDAxNzgzNTc5NzQ0MjE0.z83TREkGS3-JDdkwdKjaJ-2KBqrMciIAXE5mENoOn1Ug.D40eVjwfV61d-DEDteptpJh0Ywl2NPf_6opezZ4ZXpMg.PNG/image.png?type=w3840"
              alt="2025 MICE 글로벌 전문가 심화과정"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Elegant dark gradient overlay for branding caption */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#12002E]/90 via-[#12002E]/30 to-transparent p-5 flex justify-between items-end pt-12">
              <span className="font-mono text-[10px] text-white/80 tracking-widest uppercase">PLANKIT // 2025</span>
              <span className="font-mono text-[10px] text-brand-pink font-bold tracking-wider">● KEY VISUAL</span>
            </div>
          </div>
        );

      case 6: // 2026 랜딩 홈페이지 제작
        return (
          <div className="absolute inset-0 bg-[#12002E] overflow-hidden flex items-center justify-center">
            <img
              src="https://postfiles.pstatic.net/MjAyNjA3MDlfMTcg/MDAxNzgzNTgxNzQ5Njc5.2ezd_-7psYi-4hgiOPtbuxnEqx2qw53g35G1qX0q_rIg.G44EhN6T7BKVxJjoilTnJx0HLkqPboOLVkS3vc39QzUg.PNG/ChatGPT_Image_2026%EB%85%84_7%EC%9B%94_9%EC%9D%BC_%EC%98%A4%ED%9B%84_04_22_15.png?type=w3840"
              alt="2026 랜딩 홈페이지 제작"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Elegant dark gradient overlay for branding caption */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#12002E]/90 via-[#12002E]/30 to-transparent p-5 flex justify-between items-end pt-12">
              <span className="font-mono text-[10px] text-white/80 tracking-widest uppercase">PLANKIT // 2026</span>
              <span className="font-mono text-[10px] text-brand-pink font-bold tracking-wider">● WEB LANDING</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="absolute inset-0 bg-brand-violet flex items-center justify-center">
            <span className="text-white font-mono">PLANKIT ST.</span>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col group cursor-pointer" id={`project-card-${id}`}>
      {/* 4:5 aspect ratio card with zoom on hover */}
      <div className="relative aspect-[4/5] w-full overflow-hidden mb-4 border border-brand-violet bg-[#12002E]">
        <motion.div 
          className="w-full h-full relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {renderGraphic()}
        </motion.div>
      </div>
      
      {/* Description Info below */}
      <div className="flex flex-col pt-1 border-t border-brand-violet/10">
        <div className="flex justify-between items-baseline mb-1">
          <span className="font-mono text-sm font-bold text-brand-violet/60">{year}</span>
          <span className="text-xs font-semibold px-2 py-0.5 bg-brand-violet/5 text-brand-violet rounded font-mono">0{id}</span>
        </div>
        <h3 className="text-lg font-black text-brand-violet tracking-tight group-hover:text-brand-pink transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-brand-violet/80 font-medium mt-1 leading-snug">
          {scope}
        </p>
      </div>
    </div>
  );
}
