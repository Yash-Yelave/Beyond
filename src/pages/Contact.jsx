import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { FormInput, FormTextarea } from '../components/forms';

const EASE = [0.25, 0.1, 0.25, 1];

export default function Contact() {
  const [data, setData] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-stone min-h-screen pt-[120px] pb-[100px] lg:pt-[160px] lg:pb-[140px]">
      <div className="max-w-[1440px] mx-auto px-6 w-full">
        <div className="max-w-[980px] mx-auto">
          <SectionHeading 
            eyebrow="Get In Touch" 
            title="Contact the Team" 
            subtitle="Have a question about the ecosystem, partnerships, or membership? We're here to help."
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="bg-card border border-line rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.02)] p-10 lg:p-16 mt-12"
          >
            {submitted ? (
              <div className="text-center py-10 max-w-[620px] mx-auto">
                <div className="w-16 h-16 bg-forest/10 border border-forest/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-[32px] font-medium text-ink mb-3">Message Received</h3>
                <p className="text-[16px] text-slate font-medium leading-[1.7]">Thank you for reaching out. A member of our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 max-w-[800px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormInput 
                    label="Name" 
                    id="c_name" 
                    required 
                    value={data.name} 
                    onChange={e => setData({...data, name: e.target.value})} 
                    placeholder="Your Name" 
                  />
                  <FormInput 
                    label="Email" 
                    id="c_email" 
                    required 
                    type="email" 
                    value={data.email} 
                    onChange={e => setData({...data, email: e.target.value})} 
                    placeholder="you@company.com" 
                  />
                </div>
                <FormInput 
                  label="Subject" 
                  id="c_subj" 
                  required 
                  value={data.subject} 
                  onChange={e => setData({...data, subject: e.target.value})} 
                  placeholder="How can we help?" 
                />
                <FormTextarea 
                  label="Message" 
                  id="c_msg" 
                  required 
                  rows={5} 
                  value={data.message} 
                  onChange={e => setData({...data, message: e.target.value})} 
                  placeholder="Tell us what's on your mind..." 
                />
                
                <motion.button 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }} 
                  type="submit" 
                  className="w-full bg-forest text-card py-4 rounded-xl text-[15px] font-semibold hover:bg-forest-hover transition-colors shadow-sm mt-4"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
