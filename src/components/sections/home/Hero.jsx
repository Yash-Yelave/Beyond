import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/3580-172488178_tiny.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/60"></div>

      {/* Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 mt-16 md:mt-0"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8 drop-shadow-lg">
          Beyond Wealth Creation: A Trusted Ecosystem for Mutual Growth, Knowledge, and Contribution.
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto drop-shadow">
          Exclusive access to curated opportunities and an elite network designed for visionaries and intellectual authorities.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/membership"
              className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/30"
            >
              Join the Ecosystem
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/submit-opportunity"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors"
            >
              Explore Opportunities
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
