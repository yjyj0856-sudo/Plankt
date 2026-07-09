import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Clock, Instagram, Send, Sparkles } from "lucide-react";

export default function Contact() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventVenue, setEventVenue] = useState("");
  const [collaterals, setCollaterals] = useState("");

  const emailAddress = "plankitplanning@gmail.com";
  const phoneNumber = "010-8349-1155";
  const instagramId = "@aiforwardplanner";

  // Form handler to compose a structured email
  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`[Plankit Studio] 행사 브랜딩·디자인 제안 요청 (${eventName || "신규 문의"})`);
    
    const body = encodeURIComponent(
      `안녕하세요, Plankit Studio 팀.\n\n` +
      `행사 브랜딩 및 디자인 상담을 신청합니다. 아래 정보를 토대로 제안 검토 부탁드립니다.\n\n` +
      `1. 행사명: ${eventName || "(미정/내용작성)"}\n` +
      `2. 일정: ${eventDate || "(미정/내용작성)"}\n` +
      `3. 장소: ${eventVenue || "(미정/내용작성)"}\n` +
      `4. 제작물 리스트: ${collaterals || "(미정/내용작성)"}\n\n` +
      `감사합니다.`
    );

    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="bg-brand-violet text-white py-24 md:py-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative vertical running background text */}
      <div className="absolute left-0 top-1/4 opacity-[0.03] pointer-events-none -translate-x-1/3 rotate-90 origin-left">
        <span className="font-mono text-[12vw] font-black tracking-widest uppercase">
          CONTACT_US
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Left Column: Direct Info & Large Typography */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-brand-pink block uppercase mb-6">
              // PROJECT INQUIRY
            </span>
            
            {/* Massive Display Text */}
            <h2 className="text-[7.5vw] md:text-[3.8vw] font-black tracking-tighter leading-none text-white uppercase mb-8">
              행사의 격,
              <br />
              디자인으로
              <br />
              <span className="text-brand-pink">결정됩니다.</span>
            </h2>

            {/* Guide Text */}
            <p className="text-white/80 font-medium text-base md:text-lg leading-relaxed max-w-lg mb-12">
              행사명 · 일정 · 장소 · 제작물 리스트, 네 가지만 보내주시면 맞춤 제안서를 빠르게 보내드립니다.
            </p>
          </div>

          {/* Core Contact Channels */}
          <div className="space-y-6 border-t border-white/10 pt-10">
            {/* Email - mailto link with pink underline style */}
            <div className="flex items-start gap-4">
              <Mail size={22} className="text-brand-pink flex-shrink-0 mt-1" />
              <div>
                <span className="font-mono text-xs text-white/40 block tracking-widest">EMAIL INQUIRY</span>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-lg md:text-xl font-extrabold text-white tracking-tight hover:text-brand-pink transition-colors duration-200 relative inline-block group"
                >
                  {emailAddress}
                  {/* Pink Underline Style */}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-brand-pink" />
                </a>
              </div>
            </div>

            {/* Phone & Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-brand-pink flex-shrink-0 mt-1" />
                <div>
                  <span className="font-mono text-xs text-white/40 block tracking-widest">CALL DIRECT</span>
                  <a href={`tel:${phoneNumber}`} className="text-base font-bold text-white/95 hover:text-brand-pink transition-colors">
                    {phoneNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram size={20} className="text-brand-pink flex-shrink-0 mt-1" />
                <div>
                  <span className="font-mono text-xs text-white/40 block tracking-widest">INSTAGRAM</span>
                  <a
                    href="https://instagram.com/aiforwardplanner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white/95 hover:text-brand-pink transition-colors"
                  >
                    {instagramId}
                  </a>
                </div>
              </div>
            </div>

            {/* Consultation Hours */}
            <div className="flex items-center gap-4 bg-white/5 p-4 border border-white/10 mt-6">
              <Clock size={18} className="text-brand-pink flex-shrink-0" />
              <div className="text-xs font-mono tracking-wider text-white/70">
                <span className="font-bold text-white mr-2">상담 시간</span>
                매일 10:00~22:00 (주말 · 공휴일 포함)
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Pre-fill Direct Email Draft Generator */}
        <div className="lg:col-span-6 bg-[#1a0045] p-8 md:p-10 border-4 border-white flex flex-col justify-between">
          <form onSubmit={handleComposeEmail} className="space-y-6">
            <div className="border-b border-white/20 pb-4 mb-2 flex items-center justify-between">
              <span className="font-mono text-xs font-bold tracking-wider text-brand-pink">
                // EMAIL DRAFT ASSISTANT
              </span>
              <span className="font-mono text-[10px] text-white/40">FAST REPLY</span>
            </div>

            <p className="text-xs text-white/60 leading-relaxed mb-6">
              아래에 네 가지 항목을 입력하시면, 자동으로 이메일 초안을 작성하여 메일함으로 바로 연결해 드립니다.
            </p>

            {/* Input 1 */}
            <div>
              <label className="font-mono text-xs text-white/60 block uppercase tracking-wider mb-2 font-bold">
                1. 행사명 (Event Title)
              </label>
              <input
                type="text"
                required
                placeholder="예: 2026 글로벌 테크 포럼"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-pink focus:bg-white/10 transition-all font-sans text-sm rounded-none"
              />
            </div>

            {/* Input 2 */}
            <div>
              <label className="font-mono text-xs text-white/60 block uppercase tracking-wider mb-2 font-bold">
                2. 행사 일정 (Date & Schedule)
              </label>
              <input
                type="text"
                required
                placeholder="예: 2026년 10월 12일 ~ 14일 (3일간)"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-pink focus:bg-white/10 transition-all font-sans text-sm rounded-none"
              />
            </div>

            {/* Input 3 */}
            <div>
              <label className="font-mono text-xs text-white/60 block uppercase tracking-wider mb-2 font-bold">
                3. 행사 장소 (Venue Location)
              </label>
              <input
                type="text"
                required
                placeholder="예: 서울 코엑스(COEX) 그랜드볼룸"
                value={eventVenue}
                onChange={(e) => setEventVenue(e.target.value)}
                className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-pink focus:bg-white/10 transition-all font-sans text-sm rounded-none"
              />
            </div>

            {/* Input 4 */}
            <div>
              <label className="font-mono text-xs text-white/60 block uppercase tracking-wider mb-2 font-bold">
                4. 제작물 리스트 (Requested Items)
              </label>
              <textarea
                required
                rows={3}
                placeholder="예: 메인 키비주얼, 무대 스크린 백월, 등록대 현수막, 리플렛, 네임택"
                value={collaterals}
                onChange={(e) => setCollaterals(e.target.value)}
                className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-pink focus:bg-white/10 transition-all font-sans text-sm rounded-none resize-none"
              />
            </div>

            {/* Action Trigger button */}
            <button
              type="submit"
              className="w-full bg-brand-pink text-white font-black text-sm uppercase tracking-widest py-4 flex items-center justify-center gap-3 hover:bg-white hover:text-brand-violet transition-all duration-300 cursor-pointer"
            >
              <span>이메일 초안 전송하기</span>
              <Send size={16} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
