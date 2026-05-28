import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const metrics = [
  { target: 300,  prefix: '',  suffix: '+',   label: 'Members' },
  { target: 150,  prefix: '₹', suffix: ' Cr+', label: 'Capital Deployed' },
  { target: 45,   prefix: '',  suffix: '',     label: 'Ventures Funded' },
  { target: 1200, prefix: '',  suffix: '+',   label: 'Opportunities Evaluated' },
];

/** Counts from 0 up to `value` over 2 s and renders the formatted string. */
function Counter({ value, prefix, suffix }) {
  const count = useMotionValue(0);

  // Format: add thousands separator for numbers ≥ 1000
  const display = useTransform(count, (latest) => {
    const rounded = Math.round(latest);
    return `${prefix}${rounded.toLocaleString('en-IN')}${suffix}`;
  });

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: 'easeOut' });
    return controls.stop;
  }, [count, value]);

  return (
    <motion.span className="text-4xl font-bold text-white leading-none tracking-tight">
      {display}
    </motion.span>
  );
}

export default function MetricsBanner() {
  return (
    <section className="bg-slate-900 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          {metrics.map((m, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-8 px-6 text-center"
            >
              <Counter value={m.target} prefix={m.prefix} suffix={m.suffix} />
              <span className="mt-2 text-sm font-medium text-teal-400 uppercase tracking-wide">
                {m.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
