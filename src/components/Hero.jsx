import { useState, useEffect } from 'react';
import SystemCore from './SystemCore';
import avatarImg from '../assets/avatar.png';

const fullName = 'Sarthak Thapa';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullName.length) {
        setDisplayText(fullName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        // Slight delay before revealing rest of content
        setTimeout(() => setShowContent(true), 400);
      }
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative z-10 px-md py-xl md:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="terminal-window">
          {/* Title bar */}
          <div className="terminal-titlebar">
            <div className="terminal-dot bg-[#ff5f57]" />
            <div className="terminal-dot bg-[#febc2e]" />
            <div className="terminal-dot bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-outline">
              ~/sarthak_thapa — bash
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-lg md:p-xl">
            {/* whoami command */}
            <div className="mb-lg">
              <p className="font-mono text-sm text-outline mb-2">
                <span className="text-primary-container">$</span> whoami
              </p>
              <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
                {displayText}
                <span className="inline-block w-[3px] h-[0.9em] bg-primary-container animate-blink align-baseline ml-1" />
              </h1>
            </div>

            {/* Subtitle + Avatar row */}
            <div
              className="transition-all duration-500"
              style={{ opacity: showContent ? 1 : 0, transform: showContent ? 'translateY(0)' : 'translateY(10px)' }}
            >
              <p className="font-mono text-lg md:text-xl text-secondary mb-lg">
                Backend Developer &amp; DevOps Enthusiast
              </p>

              <div className="flex flex-col-reverse md:flex-row gap-lg items-start">
                {/* Bio + links */}
                <div className="flex-1">
                  <p className="text-on-surface-variant leading-relaxed max-w-2xl mb-lg text-sm md:text-base">
                    I build robust backend systems, automate infrastructure with Docker &amp; CI/CD pipelines,
                    and work with databases at scale. Passionate about clean architecture, system reliability,
                    and shipping tools that developers actually want to use.
                  </p>

                  {/* Quick links */}
                  <div className="flex flex-wrap gap-sm md:gap-md">
                    <a
                      href="https://github.com/Sarthak05-code"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-full font-mono text-sm text-primary-container hover:border-primary-container hover:bg-primary-container/10 transition-all"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      GitHub
                    </a>
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-full font-mono text-sm text-primary-container hover:border-primary-container hover:bg-primary-container/10 transition-all"
                    >
                      <span className="material-symbols-outlined text-base">folder_open</span>
                      Projects
                    </a>
                    <a
                      href="mailto:sarthak@example.com"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-full font-mono text-sm text-primary-container hover:border-primary-container hover:bg-primary-container/10 transition-all"
                    >
                      <span className="material-symbols-outlined text-base">mail</span>
                      Contact
                    </a>
                  </div>
                </div>

                {/* Avatar */}
                <div className="shrink-0 mx-auto md:mx-0">
                  <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-xl overflow-hidden border-2 border-outline-variant hover:border-primary-container/60 transition-all duration-300 group">
                    <img
                      src={avatarImg}
                      alt="Sarthak Thapa"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/60 to-transparent" />
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Core */}
            <div
              className="mt-xl transition-all duration-700 delay-300"
              style={{ opacity: showContent ? 1 : 0 }}
            >
              <SystemCore />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
