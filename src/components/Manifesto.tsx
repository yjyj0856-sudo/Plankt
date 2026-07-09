import React from "react";
import { motion } from "motion/react";

export default function Manifesto() {
  return (
    <section
      id="about"
      className="bg-white text-brand-violet py-28 md:py-40 px-6 md:px-12 flex items-center justify-center border-b border-brand-violet/10 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          {/* Section Marker */}
          <span className="font-mono text-xs font-bold tracking-widest text-brand-pink block uppercase mb-6">
            // OUR MANIFESTO
          </span>

          {/* Large display statement */}
          <h2 className="text-[5.5vw] sm:text-[4.5vw] lg:text-[3.2vw] font-black tracking-tight leading-[1.2] text-brand-violet/90">
            우리는 디자인이 아니라,{" "}
            <span className="text-brand-violet relative inline-block">
              행사의 결과
              <span className="absolute left-0 bottom-1 w-full h-[6px] bg-brand-pink/20 -z-10" />
            </span>
            를 만듭니다.
          </h2>

          <p className="text-brand-violet/60 font-mono text-sm max-w-lg mx-auto mt-8 tracking-wider uppercase">
            WE DO NOT SCULPT PIXELS; WE SHAPE EVENT OUTCOMES.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
