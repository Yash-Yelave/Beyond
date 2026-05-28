import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormInput, FormTextarea, FormSelect, FormCheckbox } from '../submit/FormInput';

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

const interestOptions = [
  { id: 'networking', label: 'Networking' },
  { id: 'funding', label: 'Funding' },
  { id: 'mentorship', label: 'Mentorship' },
  { id: 'collaborations', label: 'Collaborations' },
  { id: 'learning', label: 'Learning' },
  { id: 'partnerships', label: 'Partnerships' },
  { id: 'speaking', label: 'Speaking Opportunities' },
  { id: 'investments', label: 'Investments' },
  { id: 'founder-circles', label: 'Founder Circles' },
];

const STEPS = [
  { number: '01', label: 'Personal Info' },
  { number: '02', label: 'Background' },
  { number: '03', label: 'Alignment' },
  { number: '04', label: 'Interests' },
  { number: '05', label: 'Review' },
];

function MiniStepper({ current }) {
  return (
    <div className="flex items-center gap-1 overflow-x-auto pb-1">
      {STEPS.map((s, i) => {
        const idx = i + 1;
        const done = idx < current;
        const active = idx === current;
        return (
          <React.Fragment key={s.number}>
            <div className={`flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              active ? 'bg-slate-900 text-white' : done ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-400'
            }`}>
              {done ? (
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span>{s.number}</span>
              )}
              <span className="hidden sm:inline">{s.label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`h-[1px] w-4 shrink-0 transition-colors duration-300 ${done ? 'bg-teal-400' : 'bg-slate-100'}`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ── Step A: Personal ────────────────────────────────────────────────────────
function StepPersonal({ data, onChange, errors }) {
  const roleOptions = [
    { value: 'founder', label: 'Startup Founder / Co-Founder' },
    { value: 'investor', label: 'Investor / Angel / VC' },
    { value: 'operator', label: 'Operator / Executive' },
    { value: 'creator', label: 'Creator / Content Builder' },
    { value: 'mentor', label: 'Mentor / Advisor' },
    { value: 'expert', label: 'Industry Expert / Consultant' },
    { value: 'other', label: 'Other' },
  ];
  return (
    <>
      <SectionHeading title="A. Personal Information" subtitle="Tell us who you are." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormInput label="Full Name" id="m_fullName" required value={data.fullName} onChange={(e) => onChange('fullName', e.target.value)} placeholder="Jane Doe" error={errors.fullName} />
        <FormInput label="Email Address" id="m_email" required type="email" value={data.email} onChange={(e) => onChange('email', e.target.value)} placeholder="jane@company.com" error={errors.email} />
        <FormInput label="Phone Number" id="m_phone" required type="tel" value={data.phone} onChange={(e) => onChange('phone', e.target.value)} placeholder="+91 98765 43210" error={errors.phone} />
        <FormInput label="LinkedIn Profile" id="m_linkedin" value={data.linkedin} onChange={(e) => onChange('linkedin', e.target.value)} placeholder="linkedin.com/in/janedoe" />
        <FormInput label="City / Country" id="m_location" required value={data.location} onChange={(e) => onChange('location', e.target.value)} placeholder="Bengaluru, India" error={errors.location} />
        <FormSelect label="Current Role" id="m_role" required options={roleOptions} placeholder="Select your role…" value={data.role} onChange={(e) => onChange('role', e.target.value)} error={errors.role} />
        <FormInput label="Organization / Startup Name" id="m_org" value={data.org} onChange={(e) => onChange('org', e.target.value)} placeholder="Acme Ventures" className="md:col-span-2" />
      </div>
    </>
  );
}

// ── Step B: Background ──────────────────────────────────────────────────────
function StepBackground({ data, onChange, errors }) {
  return (
    <>
      <SectionHeading title="B. Professional Background" subtitle="Help us understand your expertise and journey." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormInput label="Industry / Domain" id="m_industry" required value={data.industry} onChange={(e) => onChange('industry', e.target.value)} placeholder="FinTech, HealthTech, SaaS…" error={errors.industry} />
        <FormInput label="Years of Experience" id="m_experience" type="number" min="0" value={data.experience} onChange={(e) => onChange('experience', e.target.value)} placeholder="8" />
        <FormInput label="Area of Expertise" id="m_expertise" required value={data.expertise} onChange={(e) => onChange('expertise', e.target.value)} placeholder="Product, Growth, Finance, Legal…" error={errors.expertise} />
        <FormInput label="Current Focus" id="m_focus" value={data.focus} onChange={(e) => onChange('focus', e.target.value)} placeholder="Scaling Series A, Investing in EdTech…" />
        <FormTextarea label="Notable Achievements" id="m_achievements" rows={3} value={data.achievements} onChange={(e) => onChange('achievements', e.target.value)} placeholder="Raised $2M seed, built product from 0 to 50K users, exited a company…" className="md:col-span-2" />
        <FormInput label="Personal Website / Portfolio" id="m_website" type="url" value={data.website} onChange={(e) => onChange('website', e.target.value)} placeholder="https://janedoe.com" className="md:col-span-2" />
      </div>
    </>
  );
}

// ── Step C: Alignment ───────────────────────────────────────────────────────
function StepAlignment({ data, onChange, errors }) {
  return (
    <>
      <SectionHeading title="C. Community Alignment" subtitle="Alignment is the foundation of everything we build together." />
      <div className="flex flex-col gap-5">
        <FormTextarea label="Why do you want to join Beyond?" id="m_whyBeyond" required rows={4} value={data.whyBeyond} onChange={(e) => onChange('whyBeyond', e.target.value)} placeholder="What draws you to this ecosystem specifically?" error={errors.whyBeyond} />
        <FormTextarea label="What value can you contribute?" id="m_contribution" required rows={4} value={data.contribution} onChange={(e) => onChange('contribution', e.target.value)} placeholder="Mentoring, deal referrals, domain expertise, content, partnerships…" error={errors.contribution} />
        <FormTextarea label="What kind of people are you looking to connect with?" id="m_connect" rows={3} value={data.connect} onChange={(e) => onChange('connect', e.target.value)} placeholder="Other founders, specific type of investors, operators in X space…" />
        <FormTextarea label="What are you currently building or exploring?" id="m_building" rows={3} value={data.building} onChange={(e) => onChange('building', e.target.value)} placeholder="Share what excites you most right now." />
      </div>
    </>
  );
}

// ── Step D: Interests ───────────────────────────────────────────────────────
function StepInterests({ data, onChange, errors }) {
  const toggle = (id) => {
    const curr = data.interests || [];
    onChange('interests', curr.includes(id) ? curr.filter((x) => x !== id) : [...curr, id]);
  };
  return (
    <>
      <SectionHeading title="D. Ecosystem Interests" subtitle="Select all that apply — this helps us place you in the right circles." />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {interestOptions.map((opt) => (
          <FormCheckbox
            key={opt.id}
            id={`interest-${opt.id}`}
            label={opt.label}
            checked={(data.interests || []).includes(opt.id)}
            onChange={() => toggle(opt.id)}
          />
        ))}
      </div>
      {errors.interests && <p className="text-xs text-red-500 mt-3">{errors.interests}</p>}
    </>
  );
}

// ── Step E: Review & Agree ──────────────────────────────────────────────────
function StepReview({ data, onChange, errors }) {
  return (
    <>
      <SectionHeading title="E. Final Review" subtitle="Please confirm your commitments before submitting." />
      <div className="flex flex-col gap-4 mb-8">
        <FormCheckbox id="m_guidelines" label="I agree to abide by the Beyond community guidelines and code of conduct." checked={data.guidelines || false} onChange={() => onChange('guidelines', !data.guidelines)} />
        <FormCheckbox id="m_internal" label="I understand that my application will be reviewed internally before any decision is made." checked={data.internal || false} onChange={() => onChange('internal', !data.internal)} />
        <FormCheckbox id="m_confidential" label="I agree to maintain respectful and confidential participation within the ecosystem." checked={data.confidential || false} onChange={() => onChange('confidential', !data.confidential)} />
      </div>
      {(errors.guidelines || errors.internal || errors.confidential) && (
        <p className="text-xs text-red-500 mb-4">Please accept all agreements before submitting.</p>
      )}
      {/* Summary */}
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">Application Summary</p>
        {[
          { label: 'Name', value: data.fullName },
          { label: 'Email', value: data.email },
          { label: 'Role', value: data.role },
          { label: 'Industry', value: data.industry },
          { label: 'Interests', value: (data.interests || []).length ? `${(data.interests || []).length} selected` : null },
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

// ── Initial state ───────────────────────────────────────────────────────────
const init = {
  fullName: '', email: '', phone: '', linkedin: '', location: '', role: '', org: '',
  industry: '', experience: '', expertise: '', focus: '', achievements: '', website: '',
  whyBeyond: '', contribution: '', connect: '', building: '',
  interests: [],
  guidelines: false, internal: false, confidential: false,
};

function validateStep(step, d) {
  const e = {};
  if (step === 1) {
    if (!d.fullName.trim()) e.fullName = 'Full name is required.';
    if (!d.email.trim() || !/\S+@\S+\.\S+/.test(d.email)) e.email = 'Valid email is required.';
    if (!d.phone.trim()) e.phone = 'Phone is required.';
    if (!d.location.trim()) e.location = 'Location is required.';
    if (!d.role) e.role = 'Please select your role.';
  }
  if (step === 2) {
    if (!d.industry.trim()) e.industry = 'Industry is required.';
    if (!d.expertise.trim()) e.expertise = 'Area of expertise is required.';
  }
  if (step === 3) {
    if (!d.whyBeyond.trim()) e.whyBeyond = 'Please share why you want to join.';
    if (!d.contribution.trim()) e.contribution = 'Please describe how you can contribute.';
  }
  if (step === 4) {
    if (!d.interests || d.interests.length === 0) e.interests = 'Select at least one interest.';
  }
  if (step === 5) {
    if (!d.guidelines) e.guidelines = true;
    if (!d.internal) e.internal = true;
    if (!d.confidential) e.confidential = true;
  }
  return e;
}

// ── Main export ─────────────────────────────────────────────────────────────
export default function MembershipForm() {
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [data, setData] = useState(init);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => {
    setData((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => { const n = { ...p }; delete n[field]; return n; });
  };

  const next = () => {
    const e = validateStep(step, data);
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({}); setDir(1); setStep((s) => s + 1);
  };

  const back = () => { setErrors({}); setDir(-1); setStep((s) => s - 1); };

  const submit = () => {
    const e = validateStep(5, data);
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="membership-form" className="bg-white py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: EASE }}>
            <div className="w-20 h-20 bg-teal-50 border border-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Application Submitted</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Thank you, <strong className="text-slate-700">{data.fullName || 'Applicant'}</strong>. Your membership application is now under review. We'll reach out within 5–7 business days.
            </p>
            <p className="text-sm text-slate-400">Confirmation sent to <strong className="text-slate-600">{data.email}</strong></p>
          </motion.div>
        </div>
      </section>
    );
  }

  const props = { data, onChange: update, errors };

  return (
    <section id="membership-form" className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Title */}
        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-2">Application Form</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Apply for Membership</h2>
          <p className="mt-2 text-slate-500 text-sm">Takes 4–6 minutes. Every field helps us understand you better.</p>
        </motion.div>

        {/* Card */}
        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
          {/* Stepper header */}
          <div className="border-b border-slate-100 px-6 py-4 bg-white sticky top-[72px] z-30">
            <MiniStepper current={step} />
          </div>

          {/* Body */}
          <div className="px-6 md:px-10 py-10 min-h-[480px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div key={step} custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.32, ease: EASE }}>
                {step === 1 && <StepPersonal {...props} />}
                {step === 2 && <StepBackground {...props} />}
                {step === 3 && <StepAlignment {...props} />}
                {step === 4 && <StepInterests {...props} />}
                {step === 5 && <StepReview {...props} />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer nav */}
          <div className="border-t border-slate-100 px-6 md:px-10 py-5 flex items-center justify-between bg-slate-50/50">
            <button onClick={back} disabled={step === 1} className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Back
            </button>
            <span className="text-xs text-slate-400 font-medium">{step} of {STEPS.length}</span>
            {step < STEPS.length ? (
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={next} className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:bg-slate-800 transition-colors">
                Continue
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </motion.button>
            ) : (
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={submit} className="flex items-center gap-2 bg-teal-600 text-white px-8 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:bg-teal-700 transition-colors">
                Apply for Review
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </motion.button>
            )}
          </div>
        </div>
        <p className="text-center text-xs text-slate-400 mt-5">Our team carefully reviews every application to maintain the quality and integrity of the ecosystem.</p>
      </div>
    </section>
  );
}
