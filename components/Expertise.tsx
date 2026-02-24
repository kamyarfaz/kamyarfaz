import imgImage4 from "figma:asset/1ec1ab9d26365002d287000bb997c15cd282335a.png";
import imgImage3 from "figma:asset/70d480e5c10eea78ef694b1c03bbfb1f3ca28f0e.png";
import imgImage1 from "figma:asset/99e31470ef9e271576117b0da5cb8afabd4c21cc.png";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-9kz6jm3vjm";
import Image from "next/image";

const SkillCard = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex flex-col items-center gap-4 p-4 min-w-[100px]"
  >
    <div className="h-16 w-16 flex items-center justify-center relative">
      {children}
    </div>
    <span className="text-[#4b5563] text-lg font-normal">{name}</span>
  </motion.div>
);

export function Expertise() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <h2 className="text-5xl font-semibold text-[#202020] tracking-tight">
          Technical Expertise
        </h2>
        <p className="text-2xl text-[#404040] max-w-5xl leading-relaxed">
          I believe in using the right tool for the job. My skillset spans the
          entire web development spectrum, from pixel-perfect frontend
          implementations to scalable backend architectures.
        </p>
      </div>

      <div className="flex flex-col gap-16 w-full">
        {/* Row 1 */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {/* Redis */}
          <SkillCard name="Redis">
            <svg viewBox="0 0 64 55" className="w-16 h-auto" fill="none">
              <path d={svgPaths.p2f6bce00} fill="#4B5563" />
              <path d={svgPaths.pef9700} fill="#202020" />
              <path d={svgPaths.p3813c880} fill="#4B5563" />
              <path d={svgPaths.pa6ec100} fill="#202020" />
              <path d={svgPaths.p204d2300} fill="#4B5563" />
              <path d={svgPaths.p3be93780} fill="#202020" />
              <path d={svgPaths.p3185b880} fill="white" />
              <path d={svgPaths.p14710080} fill="#A1A4AA" />
              <path d={svgPaths.p3e7ca900} fill="#4B5563" />
            </svg>
          </SkillCard>

          {/* Typescript */}
          <SkillCard name="Typescript">
            <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
              <path d={svgPaths.p1f6e0680} fill="#202020" />
              <path
                d={svgPaths.pc96a1c0}
                fill="white"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </SkillCard>

          {/* React */}
          <SkillCard name="React">
            <svg viewBox="0 0 70 64" className="w-16 h-auto" fill="none">
              <path d={svgPaths.p87cd200} fill="#202020" />
              <g stroke="#202020" strokeWidth="3">
                <path d={svgPaths.p1f807d00} />
                <path d={svgPaths.p1dda2800} />
                <path d={svgPaths.p36c55b00} />
              </g>
            </svg>
          </SkillCard>

          {/* Next.js */}
          <SkillCard name="Next.js">
            <div className="w-16 h-16 relative">
              <svg viewBox="0 0 68 68" className="w-full h-full" fill="none">
                <path
                  d={svgPaths.p18907f00}
                  fill="black"
                  stroke="white"
                  strokeWidth="6"
                />
                <path d={svgPaths.p116cf100} fill="white" />
                <path d={svgPaths.p1159fd00} fill="white" />
              </svg>
            </div>
          </SkillCard>

          {/* HTML5 */}
          <SkillCard name="Html 5">
            <Image
              width={64}
              height={64}
              src="/html5.png"
              alt="HTML5"
              className="w-14 h-14 object-contain"
            />
          </SkillCard>

          {/* Redux */}
          <SkillCard name="Redux">
            <Image
              width={64}
              height={64}
              src="/redux.png"
              alt="Redux"
              className="w-16 h-16 object-contain"
            />
          </SkillCard>

          {/* Nest.js */}
          <SkillCard name="Nest.js">
            <svg viewBox="0 0 67 64" className="w-16 h-auto" fill="none">
              <path
                d={svgPaths.p205a96a0}
                fill="#202020"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </SkillCard>

          {/* Three.js */}
          <SkillCard name="Three.js">
            <svg viewBox="0 0 60 61" className="w-14 h-auto" fill="none">
              <path
                d={svgPaths.p7445670}
                stroke="#202020"
                strokeWidth="1.35"
                strokeLinejoin="round"
                fillRule="evenodd"
                clipRule="evenodd"
              />
              <path
                d={svgPaths.p10cbf3c0}
                stroke="#202020"
                strokeWidth="1.35"
                strokeLinejoin="round"
                fillRule="evenodd"
                clipRule="evenodd"
              />
              <path
                d={svgPaths.p1b242c00}
                stroke="#202020"
                strokeWidth="1.35"
                strokeLinejoin="round"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </SkillCard>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {/* Tanstack */}
          <SkillCard name="Tanstack">
            <Image
              src="tanstack.png"
              alt="Tanstack"
              className="w-16 h-16 object-contain"
              width={64}
              height={64}
            />
          </SkillCard>

          {/* Figma */}
          <SkillCard name="Figma">
            <svg viewBox="0 0 43 64" className="w-auto h-16" fill="none">
              <path d={svgPaths.p168cd580} fill="#4B5563" />
              <path d={svgPaths.p1a5faa00} fill="#4B5563" />
              <path d={svgPaths.p3a905b00} fill="#202020" />
              <path d={svgPaths.p14877f80} fill="#4B5563" />
              <path d={svgPaths.p18f9a280} fill="#202020" />
            </svg>
          </SkillCard>

          {/* Supabase */}
          <SkillCard name="Supabase">
            <svg viewBox="0 0 64 66" className="w-16 h-auto" fill="none">
              <path d={svgPaths.p31417d00} fill="url(#supabase-gradient)" />
              <path d={svgPaths.p2bce6c80} fill="#4B5563" />
              <defs>
                <linearGradient
                  id="supabase-gradient"
                  x1="31.69"
                  y1="32.1"
                  x2="55.25"
                  y2="42.04"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#202020" />
                  <stop offset="1" stopColor="#4B5563" />
                </linearGradient>
              </defs>
            </svg>
          </SkillCard>

          {/* Tailwind */}
          <SkillCard name="Tailwindcss">
            <div className="w-16 h-10 overflow-hidden relative">
              <svg viewBox="0 0 105 63" className="w-full h-full" fill="none">
                <path
                  d={svgPaths.p83e5e00}
                  fill="#202020"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </SkillCard>

          {/* GraphQL */}
          <SkillCard name="GraphQL">
            <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
              <path d={svgPaths.p32f13c80} fill="#202020" />
            </svg>
          </SkillCard>

          {/* Linux */}
          <SkillCard name="Linux">
            <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
              <path d={svgPaths.p2f91db00} fill="#4B5563" />
              <path d={svgPaths.p3c9df280} fill="#202020" />
              <path d={svgPaths.p204a7d00} fill="#202020" />
              <path d={svgPaths.p3d48b000} fill="#4B5563" />
              <path d={svgPaths.pc9b54c0} fill="#202020" />
            </svg>
          </SkillCard>

          {/* Jest */}
          <SkillCard name="Jest">
            <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
              <path d={svgPaths.p25305980} fill="#202020" />
              <path d={svgPaths.p2db76400} fill="#202020" />
              <path d={svgPaths.p2b4c8400} fill="#202020" />
            </svg>
          </SkillCard>

          {/* Git */}
          <SkillCard name="Git">
            <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
              <path d={svgPaths.p8fbe180} fill="#202020" />
            </svg>
          </SkillCard>
        </div>
      </div>
    </section>
  );
}
