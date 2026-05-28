import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { number: '01', label: 'Founder Info' },
  { number: '02', label: 'Startup Info' },
  { number: '03', label: 'Funding & Growth' },
  { number: '04', label: 'Traction' },
  { number: '05', label: 'Vision' },
  { number: '06', label: 'Review' },
];

export default function ProgressStepper({ currentStep }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center justify-between min-w-max mx-auto px-2 py-4">
        {steps.map((step, i) => {
          const stepIndex = i + 1;
          const isCompleted = stepIndex < currentStep;
          const isActive = stepIndex === currentStep;
          return (
            <React.Fragment key={step.number}>
              {/* Step node */}
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: isCompleted ? '#14b8a6' : isActive ? '#0f766e' : '#f1f5f9',
                    borderColor: isCompleted || isActive ? 'transparent' : '#e2e8f0',
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-9 h-9 rounded-full border-2 flex items-center justify-center shadow-sm"
                >
                  {isCompleted ? (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className={`text-xs font-bold ${isActive ? 'text-white' : 'text-slate-400'}`}>
                      {step.number}
                    </span>
                  )}
                </motion.div>
                <span className={`text-xs font-medium whitespace-nowrap transition-colors duration-200 ${isActive ? 'text-teal-700' : isCompleted ? 'text-teal-500' : 'text-slate-400'}`}>
                  {step.label}
                </span>
              </div>

              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="relative h-[2px] flex-1 mx-2 bg-slate-100 min-w-[32px]">
                  <motion.div
                    className="absolute inset-0 bg-teal-400 origin-left"
                    initial={false}
                    animate={{ scaleX: isCompleted ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
