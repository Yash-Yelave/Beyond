import React from 'react';

const PlayIcon = () => (
  <svg
    className="w-14 h-14 text-white drop-shadow-lg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <circle cx="12" cy="12" r="12" fill="rgba(255,255,255,0.15)" />
    <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="1.5" fill="none" />
    <polygon points="10,8 18,12 10,16" fill="white" />
  </svg>
);

const VolumeIcon = () => (
  <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
  </svg>
);

const reels = [
  { duration: '0:55' },
  { duration: '1:12' },
  { duration: '0:43' },
];

export default function CommunityReel() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Stay in Sync with Beyond Community
          </h2>
          <p className="mt-3 text-slate-500 text-sm">
            Short-form stories from founders, investors &amp; builders in our network.
          </p>
        </div>

        {/* 3-column video reel grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reels.map((reel, i) => (
            <div
              key={i}
              className="relative bg-slate-800 rounded-2xl overflow-hidden cursor-pointer group"
              style={{ aspectRatio: '9/16' }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-slate-900/70" />

              {/* Play icon — centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <PlayIcon />
                </div>
              </div>

              {/* Bottom-left overlay */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <VolumeIcon />
                <span className="text-white/80 text-xs font-mono tracking-wide">
                  0:00 / {reel.duration}
                </span>
              </div>

              {/* Subtle top gradient for depth */}
              <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
