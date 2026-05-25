import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-100px' };

const projects = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Featured Project 0${i + 1}`,
  description: 'A dynamic, moving preview of the initiative.',
  videoSrc: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
}));

export default function FeaturedProjectsSlider() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      {/* Animated section header */}
      <motion.div
        className="max-w-7xl mx-auto px-6 mb-12"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        viewport={VIEWPORT}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Featured Projects
        </h2>
        <p className="mt-3 text-slate-500 text-base">
          Slide to explore our active ventures and dynamic initiatives.
        </p>
      </motion.div>

      {/* Animated carousel wrapper — fade only, no translate, to avoid CSS scroll conflicts */}
      <motion.div
        className="pl-6 md:pl-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: EASE }}
        viewport={VIEWPORT}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 pr-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="snap-start shrink-0 w-[85vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] flex flex-col"
              >
                <div className="w-full aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-sm relative mb-4">
                  <video
                    className="w-full h-full object-cover"
                    src={project.videoSrc}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    defaultMuted={true}
                    playsInline={true}
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
