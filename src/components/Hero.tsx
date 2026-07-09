import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  // 마우스 이동 방향의 반대로 움직이는 패럴랙스 이벤트 리스너
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const percentX = (e.clientX / innerWidth) - 0.5;
      const percentY = (e.clientY / innerHeight) - 0.5;

      setParallaxOffset({
        x: -percentX * 15,
        y: -percentY * 15,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      id="hero"
      className="relative min-h-screen bg-brand-violet text-white flex flex-col justify-between pt-24 pb-12 overflow-hidden px-8 md:px-16"
    >
      {/* 1. 배경 그리드 패턴 */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* 2. MICE! 오브제 — 글자 높이와 막대 높이를 정확히 일치시킨 정렬 */}
      <div className="absolute right-[7vw] lg:right-[9vw] top-[44%] -translate-y-1/2 z-[5] pointer-events-none select-none hidden md:block">
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ x: parallaxOffset.x, y: parallaxOffset.y }}
            transition={{ type: "spring", stiffness: 100, damping: 25 }}
            className="flex flex-col items-center scale-75 lg:scale-100 origin-center"
          >
            {/* MICE 글자열과 느낌표를 같은 시작선(top)에 정렬 */}
            <div className="flex items-start gap-[32px]">
              {/* MICE — 4글자 총 높이가 막대 높이 290px과 정확히 일치하도록 flex-col, items-center, justify-between 적용 */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="items-center"
                style={{
                  height: "290px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {["M", "I", "C", "E"].map((letter) => (
                  <span
                    key={letter}
                    className="font-black uppercase text-center block"
                    style={{
                      fontSize: "76px",
                      color: "#E4FF3A",
                      textShadow: "0 0 28px rgba(228,255,58,0.35)",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </motion.div>

              {/* 느낌표 — 막대 290px + 점 (점은 글자열보다 아래로 내려와 '!'를 완성) */}
              <div className="flex flex-col items-center gap-5">
                <div className="w-[72px] h-[290px] rounded-full bg-[#D93762]" />
                <div className="w-[88px] h-[88px] bg-[#D93762] rounded-full" />
              </div>
            </div>

            {/* 레이블 — 오브제 전체 아래 중앙 정렬 */}
            <span className="mt-8 font-mono text-[10px] tracking-[0.35em] text-white/50 uppercase whitespace-nowrap text-center block w-full">
              MICE Branding &amp; Design
            </span>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full my-auto flex flex-col justify-center relative z-10">
        <div className="w-full flex flex-col justify-center text-left">

          {/* 3. 타이포그래피 헤드라인 */}
          <div className="space-y-0 relative">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              style={{ lineHeight: 0.98 }}
              className="text-[12vw] sm:text-[10.5vw] lg:text-[8.5vw] font-black tracking-tighter uppercase font-sans relative z-10"
            >
              당신의 행사를
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ lineHeight: 0.98 }}
              className="text-[12vw] sm:text-[10.5vw] lg:text-[8.5vw] font-black tracking-tighter uppercase text-brand-pink font-sans relative z-10"
            >
              브랜드로
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ lineHeight: 0.98 }}
              className="text-[12vw] sm:text-[10.5vw] lg:text-[8.5vw] font-black tracking-tighter uppercase font-sans relative z-10"
            >
              기억되게<span className="text-[#F5416F] font-black">.</span>
            </motion.h1>
          </div>

          {/* 4. 서브카피 및 문의 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6"
          >
            <button
              onClick={scrollToContact}
              className="bg-brand-pink text-white text-lg font-extrabold px-8 py-5 flex items-center justify-center gap-3 hover:bg-white hover:text-brand-violet transition-all duration-300 transform hover:-translate-y-1 shadow-lg active:translate-y-0 cursor-pointer"
            >
              프로젝트 문의
              <ArrowDown size={20} className="animate-bounce" />
            </button>

            <p className="font-mono text-sm tracking-widest text-white/50">
              MICE Branding &amp; Design Studio — Seoul, Korea
            </p>
          </motion.div>
        </div>
      </div>

      {/* 5. 하단 무한 흐름 마퀴 스트립 */}
      <div className="w-full border-y border-white/15 py-3 overflow-hidden relative my-8 select-none">
        <div className="flex w-max">
          <motion.div
            className="flex whitespace-nowrap text-[11px] font-mono tracking-[0.22em] text-white/40 uppercase gap-16 pr-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            <div className="flex gap-16">
              <span>Planning. Design. Education. — Plankit Studio —</span>
              <span>Planning. Design. Education. — Plankit Studio —</span>
              <span>Planning. Design. Education. — Plankit Studio —</span>
              <span>Planning. Design. Education. — Plankit Studio —</span>
            </div>
            <div className="flex gap-16">
              <span>Planning. Design. Education. — Plankit Studio —</span>
              <span>Planning. Design. Education. — Plankit Studio —</span>
              <span>Planning. Design. Education. — Plankit Studio —</span>
              <span>Planning. Design. Education. — Plankit Studio —</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 6. 히어로 푸터 */}
      <div className="w-full relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end pt-8 border-t border-white/10 gap-4">
        <div>
          <span className="font-mono text-xs text-white/40 tracking-widest block uppercase">STUDIO</span>
          <p className="font-mono text-sm tracking-wider font-bold text-white/95 mt-1">
            Plankit Studio — MICE Branding &amp; Design
          </p>
        </div>
        <div className="flex gap-12 text-white/60 font-mono text-xs">
          <div>
            <span className="block text-white/30 text-[10px]">LOCAL TIME</span>
            <span>SEOUL, KR</span>
          </div>
          <div>
            <span className="block text-white/30 text-[10px]">CAPABILITIES</span>
            <span>PLANNING. DESIGN. EDU.</span>
          </div>
        </div>
      </div>
    </section>
  );
}