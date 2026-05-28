import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressStepper from './ProgressStepper';
import { FormInput, FormTextarea, FormSelect, FormCheckbox } from './FormInput';
import FileUpload from './FileUpload';

const EASE = [0.25, 0.1, 0.25, 1];

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
};

const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold text-slate-900 mb-1">{title}</h3>
    {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
    <div className="h-[2px] w-10 bg-teal-500 rounded-full mt-3" />
  </div>
);

const supportOptions = [
  { id: 'funding', label: 'Funding' },
  { id: 'mentorship', label: 'Mentorship' },
  { id: 'partnerships', label: 'Strategic Partnerships' },
  { id: 'hiring', label: 'Hiring' },
  { id: 'networking', label: 'Networking' },
  { id: 'gtm', label: 'GTM Support' },
  { id: 'product', label: 'Product Guidance' },
];

// ── Step components ───────────────────────────────────────────────────────────

function StepFounder({ data, onChange, errors }) {
  return (
    <>
      <SectionHeading
        title="A. Founder Information"
        subtitle="Tell us about yourself and your background."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormInput label="Full Name" id="fullName" required value={data.fullName} onChange={(e) => onChange('fullName', e.target.value)} placeholder="Jane Doe" error={errors.fullName} />
        <FormInput label="Email Address" id="email" required type="email" value={data.email} onChange={(e) => onChange('email', e.target.value)} placeholder="jane@startup.com" error={errors.email} />
        <FormInput label="Phone Number" id="phone" required type="tel" value={data.phone} onChange={(e) => onChange('phone', e.target.value)} placeholder="+91 98765 43210" error={errors.phone} />
        <FormInput label="LinkedIn Profile" id="linkedin" value={data.linkedin} onChange={(e) => onChange('linkedin', e.target.value)} placeholder="linkedin.com/in/janedoe" />
        <FormInput label="Current City / Country" id="location" required value={data.location} onChange={(e) => onChange('location', e.target.value)} placeholder="Mumbai, India" error={errors.location} />
        <FormInput label="Role in Company" id="role" required value={data.role} onChange={(e) => onChange('role', e.target.value)} placeholder="Co-Founder & CEO" error={errors.role} />
        <FormInput label="Years of Experience" id="experience" type="number" min="0" value={data.experience} onChange={(e) => onChange('experience', e.target.value)} placeholder="5" className="md:col-span-2 md:max-w-xs" />
      </div>
    </>
  );
}

function StepStartup({ data, onChange, errors }) {
  const stageOptions = [
    { value: 'idea', label: 'Idea' },
    { value: 'mvp', label: 'MVP' },
    { value: 'early-revenue', label: 'Early Revenue' },
    { value: 'growth', label: 'Growth' },
    { value: 'scaling', label: 'Scaling' },
  ];
  return (
    <>
      <SectionHeading
        title="B. Startup / Project Information"
        subtitle="Give us a clear picture of what you're building."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormInput label="Startup / Project Name" id="startupName" required value={data.startupName} onChange={(e) => onChange('startupName', e.target.value)} placeholder="Acme Technologies" error={errors.startupName} />
        <FormInput label="Website URL" id="website" type="url" value={data.website} onChange={(e) => onChange('website', e.target.value)} placeholder="https://acme.com" />
        <FormInput label="Industry / Sector" id="industry" required value={data.industry} onChange={(e) => onChange('industry', e.target.value)} placeholder="FinTech, EdTech, HealthTech…" error={errors.industry} />
        <FormSelect label="Startup Stage" id="stage" required options={stageOptions} placeholder="Select stage…" value={data.stage} onChange={(e) => onChange('stage', e.target.value)} error={errors.stage} />
        <FormInput label="One-line Elevator Pitch" id="pitch" required value={data.pitch} onChange={(e) => onChange('pitch', e.target.value)} placeholder="We help X do Y so they can Z." className="md:col-span-2" error={errors.pitch} />
        <FormTextarea label="Detailed Startup Description" id="description" required value={data.description} onChange={(e) => onChange('description', e.target.value)} placeholder="Describe your product, team, and what makes it unique…" className="md:col-span-2" error={errors.description} />
        <FormTextarea label="Problem You Are Solving" id="problem" required rows={3} value={data.problem} onChange={(e) => onChange('problem', e.target.value)} placeholder="What pain point are you addressing?" error={errors.problem} />
        <FormTextarea label="Target Market" id="market" required rows={3} value={data.market} onChange={(e) => onChange('market', e.target.value)} placeholder="Who are your primary customers / users?" error={errors.market} />
        <FormTextarea label="Business Model" id="businessModel" rows={3} value={data.businessModel} onChange={(e) => onChange('businessModel', e.target.value)} placeholder="How do you make money? Subscription, transactional, marketplace…" className="md:col-span-2" />
      </div>
    </>
  );
}

function StepFunding({ data, onChange, errors }) {
  const toggleSupport = (id) => {
    const current = data.supportNeeds || [];
    const updated = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
    onChange('supportNeeds', updated);
  };
  return (
    <>
      <SectionHeading
        title="C. Funding & Growth"
        subtitle="Help us understand your financial position and what you need."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormInput label="Funding Required" id="fundingRequired" value={data.fundingRequired} onChange={(e) => onChange('fundingRequired', e.target.value)} placeholder="₹2 Crore / $500K" error={errors.fundingRequired} />
        <FormInput label="Current Revenue (MRR / ARR)" id="revenue" value={data.revenue} onChange={(e) => onChange('revenue', e.target.value)} placeholder="₹5 Lakh MRR" />
        <FormInput label="Monthly Growth Rate" id="growth" value={data.growth} onChange={(e) => onChange('growth', e.target.value)} placeholder="15%" />
        <FormInput label="Existing Investors" id="existingInvestors" value={data.existingInvestors} onChange={(e) => onChange('existingInvestors', e.target.value)} placeholder="Bootstrapped / Sequoia / None" />
        <FormInput label="Team Size" id="teamSize" type="number" min="1" value={data.teamSize} onChange={(e) => onChange('teamSize', e.target.value)} placeholder="8" />
        <FormInput label="Geographic Presence" id="geography" value={data.geography} onChange={(e) => onChange('geography', e.target.value)} placeholder="Pan-India, Southeast Asia…" />
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-slate-700 mb-3">
          What support are you looking for? <span className="text-teal-500">*</span>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {supportOptions.map((opt) => (
            <FormCheckbox
              key={opt.id}
              id={`support-${opt.id}`}
              label={opt.label}
              checked={(data.supportNeeds || []).includes(opt.id)}
              onChange={() => toggleSupport(opt.id)}
            />
          ))}
        </div>
        {errors.supportNeeds && <p className="text-xs text-red-500 mt-2">{errors.supportNeeds}</p>}
      </div>
    </>
  );
}

function StepTraction({ data, onChange }) {
  return (
    <>
      <SectionHeading
        title="D. Traction & Proof"
        subtitle="Share evidence of market validation and momentum."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormTextarea label="Key Achievements" id="achievements" rows={3} value={data.achievements} onChange={(e) => onChange('achievements', e.target.value)} placeholder="Raised pre-seed, 1000+ paying users, featured in Forbes…" />
        <FormTextarea label="Current Users / Customers" id="users" rows={3} value={data.users} onChange={(e) => onChange('users', e.target.value)} placeholder="5,000 MAU, 200 enterprise clients…" />
        <FormTextarea label="Market Validation" id="validation" rows={3} value={data.validation} onChange={(e) => onChange('validation', e.target.value)} placeholder="LOIs, pilots, case studies, testimonials…" className="md:col-span-2" />
        <FormInput label="Product Demo URL" id="demoUrl" type="url" value={data.demoUrl} onChange={(e) => onChange('demoUrl', e.target.value)} placeholder="https://demo.acme.com" />
        <div className="md:col-span-2 grid md:grid-cols-2 gap-5">
          <FileUpload
            label="Pitch Deck"
            id="pitchDeck"
            accept=".pdf,.pptx,.ppt"
            hint="PDF or PPTX, max 25 MB"
            onFileChange={(file) => onChange('pitchDeck', file)}
          />
          <FileUpload
            label="Additional Documents"
            id="additionalDocs"
            accept=".pdf,.doc,.docx,.xlsx"
            hint="Financials, product specs, press… max 20 MB"
            onFileChange={(file) => onChange('additionalDocs', file)}
          />
        </div>
      </div>
    </>
  );
}

function StepVision({ data, onChange, errors }) {
  return (
    <>
      <SectionHeading
        title="E. Vision & Alignment"
        subtitle="Help us understand your 'why' and how you fit within the Beyond ecosystem."
      />
      <div className="flex flex-col gap-5">
        <FormTextarea label="Why do you want to join Beyond?" id="whyBeyond" required rows={4} value={data.whyBeyond} onChange={(e) => onChange('whyBeyond', e.target.value)} placeholder="What about the ecosystem resonates with your journey?" error={errors.whyBeyond} />
        <FormTextarea label="What long-term vision are you building?" id="longTermVision" required rows={4} value={data.longTermVision} onChange={(e) => onChange('longTermVision', e.target.value)} placeholder="Where do you see your company in 5–10 years?" error={errors.longTermVision} />
        <FormTextarea label="How can you contribute to the ecosystem?" id="contribution" rows={4} value={data.contribution} onChange={(e) => onChange('contribution', e.target.value)} placeholder="Mentoring, domain expertise, pilot partnerships, referrals…" />
      </div>
    </>
  );
}

function StepReview({ data, onChange, errors }) {
  return (
    <>
      <SectionHeading
        title="F. Final Agreement"
        subtitle="Please confirm before submitting your opportunity for review."
      />
      <div className="flex flex-col gap-4 mb-8">
        <FormCheckbox
          id="confirmAccurate"
          label="I confirm that all information provided in this submission is accurate and truthful."
          checked={data.confirmAccurate || false}
          onChange={() => onChange('confirmAccurate', !data.confirmAccurate)}
        />
        <FormCheckbox
          id="agreePrivacy"
          label="I agree to Beyond's Privacy Policy and understand how my data will be used."
          checked={data.agreePrivacy || false}
          onChange={() => onChange('agreePrivacy', !data.agreePrivacy)}
        />
        <FormCheckbox
          id="understandProcess"
          label="I understand that submissions are reviewed internally and do not guarantee any outcome."
          checked={data.understandProcess || false}
          onChange={() => onChange('understandProcess', !data.understandProcess)}
        />
      </div>
      {(errors.confirmAccurate || errors.agreePrivacy || errors.understandProcess) && (
        <p className="text-xs text-red-500 mb-4">Please accept all agreements before submitting.</p>
      )}

      {/* Summary preview */}
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">Submission Summary</p>
        {[
          { label: 'Name', value: data.fullName },
          { label: 'Email', value: data.email },
          { label: 'Startup', value: data.startupName },
          { label: 'Stage', value: data.stage },
          { label: 'Funding Required', value: data.fundingRequired },
        ].map(({ label, value }) =>
          value ? (
            <div key={label} className="flex justify-between items-center text-sm">
              <span className="text-slate-500">{label}</span>
              <span className="font-medium text-slate-800 truncate max-w-[60%]">{value}</span>
            </div>
          ) : null
        )}
      </div>
    </>
  );
}

// ── Main Form ─────────────────────────────────────────────────────────────────

const TOTAL_STEPS = 6;

const initialState = {
  // Founder
  fullName: '', email: '', phone: '', linkedin: '', location: '', role: '', experience: '',
  // Startup
  startupName: '', website: '', industry: '', stage: '', pitch: '', description: '', problem: '', market: '', businessModel: '',
  // Funding
  fundingRequired: '', revenue: '', growth: '', existingInvestors: '', teamSize: '', geography: '', supportNeeds: [],
  // Traction
  achievements: '', users: '', validation: '', demoUrl: '', pitchDeck: null, additionalDocs: null,
  // Vision
  whyBeyond: '', longTermVision: '', contribution: '',
  // Agreement
  confirmAccurate: false, agreePrivacy: false, understandProcess: false,
};

function validateStep(step, data) {
  const errs = {};
  if (step === 1) {
    if (!data.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) errs.email = 'Valid email is required.';
    if (!data.phone.trim()) errs.phone = 'Phone number is required.';
    if (!data.location.trim()) errs.location = 'Location is required.';
    if (!data.role.trim()) errs.role = 'Your role is required.';
  }
  if (step === 2) {
    if (!data.startupName.trim()) errs.startupName = 'Startup name is required.';
    if (!data.industry.trim()) errs.industry = 'Industry is required.';
    if (!data.stage) errs.stage = 'Please select your startup stage.';
    if (!data.pitch.trim()) errs.pitch = 'Elevator pitch is required.';
    if (!data.description.trim()) errs.description = 'Startup description is required.';
    if (!data.problem.trim()) errs.problem = 'Problem statement is required.';
    if (!data.market.trim()) errs.market = 'Target market is required.';
  }
  if (step === 3) {
    if (!data.supportNeeds || data.supportNeeds.length === 0) errs.supportNeeds = 'Select at least one type of support.';
  }
  if (step === 5) {
    if (!data.whyBeyond.trim()) errs.whyBeyond = 'This field is required.';
    if (!data.longTermVision.trim()) errs.longTermVision = 'This field is required.';
  }
  if (step === 6) {
    if (!data.confirmAccurate) errs.confirmAccurate = true;
    if (!data.agreePrivacy) errs.agreePrivacy = true;
    if (!data.understandProcess) errs.understandProcess = true;
  }
  return errs;
}

export default function FundingForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  };

  const handleNext = () => {
    const errs = validateStep(step, formData);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setDirection(1);
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    setErrors({});
    setDirection(-1);
    setStep((s) => s - 1);
  };

  const handleSubmit = () => {
    const errs = validateStep(6, formData);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    // API-ready: console.log('Payload:', formData);
    setSubmitted(true);
  };

  // Success state
  if (submitted) {
    return (
      <section id="submit-form" className="bg-white py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="w-20 h-20 bg-teal-50 border border-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Opportunity Submitted</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Thank you, <strong className="text-slate-700">{formData.fullName || 'Founder'}</strong>. Your submission has been received and is currently under internal review. We'll be in touch within 5–7 business days.
            </p>
            <p className="text-sm text-slate-400">
              Confirmation has been sent to <strong className="text-slate-600">{formData.email}</strong>
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  const stepProps = { data: formData, onChange: updateField, errors };

  return (
    <section id="submit-form" className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">

        {/* Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-2">Application Form</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Submit Your Opportunity</h2>
          <p className="mt-2 text-slate-500 text-sm">Complete all sections for the fastest review.</p>
        </motion.div>

        {/* Card */}
        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
          {/* Sticky progress header */}
          <div className="border-b border-slate-100 px-6 pt-4 pb-2 bg-white sticky top-[72px] z-30">
            <ProgressStepper currentStep={step} />
          </div>

          {/* Form body */}
          <div className="px-6 md:px-10 py-10 min-h-[480px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: EASE }}
              >
                {step === 1 && <StepFounder {...stepProps} />}
                {step === 2 && <StepStartup {...stepProps} />}
                {step === 3 && <StepFunding {...stepProps} />}
                {step === 4 && <StepTraction {...stepProps} />}
                {step === 5 && <StepVision {...stepProps} />}
                {step === 6 && <StepReview {...stepProps} />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation footer */}
          <div className="border-t border-slate-100 px-6 md:px-10 py-5 flex items-center justify-between bg-slate-50/50">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

            <span className="text-xs text-slate-400 font-medium">{step} of {TOTAL_STEPS}</span>

            {step < TOTAL_STEPS ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNext}
                className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:bg-slate-800 transition-colors"
              >
                Continue
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="flex items-center gap-2 bg-teal-600 text-white px-8 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:bg-teal-700 transition-colors"
              >
                Submit for Review
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </motion.button>
            )}
          </div>
        </div>

        {/* Confidence note */}
        <p className="text-center text-xs text-slate-400 mt-5">
          Our team carefully reviews every opportunity before onboarding into the ecosystem.
        </p>
      </div>
    </section>
  );
}
