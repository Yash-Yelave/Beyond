import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormInput, FormTextarea, FormSelect, FormCheckbox } from '../../forms';

const EASE = [0.25, 0.1, 0.25, 1];

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (dir) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
};

const SectionLabel = ({ title, subtitle }) => (
  <div className="mb-7">
    <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
    {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
    <div className="h-[2px] w-8 bg-teal-500 rounded-full mt-3" />
  </div>
);

const STEPS = [
  { n: '01', label: 'Personal Info' },
  { n: '02', label: 'Background' },
  { n: '03', label: 'Alignment' },
  { n: '04', label: 'Interests' },
  { n: '05', label: 'Review' },
];

const ROLE_OPTIONS = [
  { value: 'founder', label: 'Startup Founder / Co-Founder' },
  { value: 'investor', label: 'Investor / Angel / VC' },
  { value: 'operator', label: 'Operator / Executive' },
  { value: 'creator', label: 'Creator / Content Builder' },
  { value: 'mentor', label: 'Mentor / Advisor' },
  { value: 'expert', label: 'Industry Expert / Consultant' },
  { value: 'other', label: 'Other' },
];

const INTEREST_OPTIONS = [
  { id: 'networking', label: 'Networking' }, { id: 'funding', label: 'Funding' },
  { id: 'mentorship', label: 'Mentorship' }, { id: 'collaborations', label: 'Collaborations' },
  { id: 'learning', label: 'Learning' }, { id: 'partnerships', label: 'Partnerships' },
  { id: 'speaking', label: 'Speaking Opportunities' }, { id: 'investments', label: 'Investments' },
  { id: 'founder-circles', label: 'Founder Circles' },
];

function MiniStepper({ current }) {
  return (
    <div className="flex items-center gap-1 overflow-x-auto pb-1">
      {STEPS.map((s, i) => {
        const idx = i + 1; const done = idx < current; const active = idx === current;
        return (
          <React.Fragment key={s.n}>
            <div className={`flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${active ? 'bg-slate-900 text-white' : done ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
              {done ? <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> : <span>{s.n}</span>}
              <span className="hidden sm:inline">{s.label}</span>
            </div>
            {i < STEPS.length - 1 && <div className={`h-[1px] w-4 shrink-0 ${i < current - 1 ? 'bg-teal-400' : 'bg-slate-100'}`} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function StepPersonal({ d, u, e }) {
  return (<>
    <SectionLabel title="A. Personal Information" subtitle="Tell us who you are." />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <FormInput label="Full Name" id="m_fn" required value={d.fullName} onChange={ev => u('fullName', ev.target.value)} placeholder="Jane Doe" error={e.fullName} />
      <FormInput label="Email Address" id="m_em" required type="email" value={d.email} onChange={ev => u('email', ev.target.value)} placeholder="jane@company.com" error={e.email} />
      <FormInput label="Phone Number" id="m_ph" required type="tel" value={d.phone} onChange={ev => u('phone', ev.target.value)} placeholder="+91 98765 43210" error={e.phone} />
      <FormInput label="LinkedIn Profile" id="m_li" value={d.linkedin} onChange={ev => u('linkedin', ev.target.value)} placeholder="linkedin.com/in/janedoe" />
      <FormInput label="City / Country" id="m_lo" required value={d.location} onChange={ev => u('location', ev.target.value)} placeholder="Bengaluru, India" error={e.location} />
      <FormSelect label="Current Role" id="m_ro" required options={ROLE_OPTIONS} placeholder="Select your role…" value={d.role} onChange={ev => u('role', ev.target.value)} error={e.role} />
      <FormInput label="Organization / Startup Name" id="m_or" value={d.org} onChange={ev => u('org', ev.target.value)} placeholder="Acme Ventures" className="md:col-span-2" />
    </div>
  </>);
}
function StepBackground({ d, u, e }) {
  return (<>
    <SectionLabel title="B. Professional Background" subtitle="Help us understand your expertise and journey." />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <FormInput label="Industry / Domain" id="m_in" required value={d.industry} onChange={ev => u('industry', ev.target.value)} placeholder="FinTech, HealthTech, SaaS…" error={e.industry} />
      <FormInput label="Years of Experience" id="m_yr" type="number" min="0" value={d.experience} onChange={ev => u('experience', ev.target.value)} placeholder="8" />
      <FormInput label="Area of Expertise" id="m_ex" required value={d.expertise} onChange={ev => u('expertise', ev.target.value)} placeholder="Product, Growth, Finance…" error={e.expertise} />
      <FormInput label="Current Focus" id="m_fo" value={d.focus} onChange={ev => u('focus', ev.target.value)} placeholder="Scaling Series A, Investing in EdTech…" />
      <FormTextarea label="Notable Achievements" id="m_ac" rows={3} value={d.achievements} onChange={ev => u('achievements', ev.target.value)} placeholder="Raised $2M seed, built from 0 to 50K users, exited a company…" className="md:col-span-2" />
      <FormInput label="Personal Website / Portfolio" id="m_ws" type="url" value={d.website} onChange={ev => u('website', ev.target.value)} placeholder="https://janedoe.com" className="md:col-span-2" />
    </div>
  </>);
}
function StepAlignment({ d, u, e }) {
  return (<>
    <SectionLabel title="C. Community Alignment" subtitle="Alignment is the foundation of everything we build together." />
    <div className="flex flex-col gap-5">
      <FormTextarea label="Why do you want to join Beyond?" id="m_wb" required rows={4} value={d.whyBeyond} onChange={ev => u('whyBeyond', ev.target.value)} placeholder="What draws you to this ecosystem?" error={e.whyBeyond} />
      <FormTextarea label="What value can you contribute?" id="m_co" required rows={4} value={d.contribution} onChange={ev => u('contribution', ev.target.value)} placeholder="Mentoring, deal referrals, domain expertise…" error={e.contribution} />
      <FormTextarea label="What kind of people are you looking to connect with?" id="m_cn" rows={3} value={d.connect} onChange={ev => u('connect', ev.target.value)} placeholder="Other founders, investors in X space…" />
      <FormTextarea label="What are you currently building or exploring?" id="m_bu" rows={3} value={d.building} onChange={ev => u('building', ev.target.value)} placeholder="Share what excites you most right now." />
    </div>
  </>);
}
function StepInterests({ d, u, e }) {
  const toggle = id => { const c = d.interests || []; u('interests', c.includes(id) ? c.filter(x => x !== id) : [...c, id]); };
  return (<>
    <SectionLabel title="D. Ecosystem Interests" subtitle="Select all that apply — this helps us place you in the right circles." />
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {INTEREST_OPTIONS.map(o => <FormCheckbox key={o.id} id={`int-${o.id}`} label={o.label} checked={(d.interests || []).includes(o.id)} onChange={() => toggle(o.id)} />)}
    </div>
    {e.interests && <p className="text-xs text-red-500 mt-3">{e.interests}</p>}
  </>);
}
function StepReview({ d, u, e }) {
  return (<>
    <SectionLabel title="E. Final Review" subtitle="Please confirm your commitments before submitting." />
    <div className="flex flex-col gap-4 mb-7">
      <FormCheckbox id="m_g" label="I agree to abide by the Beyond community guidelines and code of conduct." checked={d.guidelines || false} onChange={() => u('guidelines', !d.guidelines)} />
      <FormCheckbox id="m_i" label="I understand my application will be reviewed internally before any decision is made." checked={d.internal || false} onChange={() => u('internal', !d.internal)} />
      <FormCheckbox id="m_c" label="I agree to maintain respectful and confidential participation within the ecosystem." checked={d.confidential || false} onChange={() => u('confidential', !d.confidential)} />
    </div>
    {(e.guidelines || e.internal || e.confidential) && <p className="text-xs text-red-500 mb-4">Please accept all agreements before submitting.</p>}
    <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-2.5">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">Summary</p>
      {[['Name', d.fullName], ['Email', d.email], ['Role', d.role], ['Industry', d.industry], ['Interests', (d.interests || []).length ? `${(d.interests || []).length} selected` : null]].map(([l, v]) =>
        v ? <div key={l} className="flex justify-between text-sm"><span className="text-slate-500">{l}</span><span className="font-medium text-slate-800 truncate max-w-[60%]">{v}</span></div> : null
      )}
    </div>
  </>);
}

const INIT = {
  fullName:'',email:'',phone:'',linkedin:'',location:'',role:'',org:'',
  industry:'',experience:'',expertise:'',focus:'',achievements:'',website:'',
  whyBeyond:'',contribution:'',connect:'',building:'',
  interests:[], guidelines:false, internal:false, confidential:false,
};

function validate(step, d) {
  const e = {};
  if (step === 1) { if (!d.fullName.trim()) e.fullName='Required.'; if (!d.email.trim()||!/\S+@\S+\.\S+/.test(d.email)) e.email='Valid email required.'; if (!d.phone.trim()) e.phone='Required.'; if (!d.location.trim()) e.location='Required.'; if (!d.role) e.role='Required.'; }
  if (step === 2) { if (!d.industry.trim()) e.industry='Required.'; if (!d.expertise.trim()) e.expertise='Required.'; }
  if (step === 3) { if (!d.whyBeyond.trim()) e.whyBeyond='Required.'; if (!d.contribution.trim()) e.contribution='Required.'; }
  if (step === 4) { if (!d.interests?.length) e.interests='Select at least one.'; }
  if (step === 5) { if (!d.guidelines) e.guidelines=true; if (!d.internal) e.internal=true; if (!d.confidential) e.confidential=true; }
  return e;
}

export default function MembershipForm() {
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [data, setData] = useState(INIT);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (f, v) => { setData(p => ({ ...p, [f]: v })); setErrors(p => { const n={...p}; delete n[f]; return n; }); };
  const next = () => { const e = validate(step, data); if (Object.keys(e).length) { setErrors(e); return; } setErrors({}); setDir(1); setStep(s => s + 1); };
  const back = () => { setErrors({}); setDir(-1); setStep(s => s - 1); };
  const submit = () => { const e = validate(5, data); if (Object.keys(e).length) { setErrors(e); return; } setSubmitted(true); };

  if (submitted) return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-16 text-center">
      <div className="w-16 h-16 bg-teal-50 border border-teal-100 rounded-full flex items-center justify-center mx-auto mb-5">
        <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3">Application Submitted</h3>
      <p className="text-slate-500 mb-2">Thank you, <strong className="text-slate-700">{data.fullName || 'Applicant'}</strong>. We'll reach out within 5–7 business days.</p>
      <p className="text-xs text-slate-400">Confirmation sent to <strong className="text-slate-600">{data.email}</strong></p>
    </div>
  );

  const p = { d: data, u: update, e: errors };
  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
      <div className="border-b border-slate-100 px-6 py-4 bg-white sticky top-16 z-20">
        <MiniStepper current={step} />
      </div>
      <div className="px-6 md:px-10 py-10 min-h-[480px]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div key={step} custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3, ease: EASE }}>
            {step === 1 && <StepPersonal {...p} />}
            {step === 2 && <StepBackground {...p} />}
            {step === 3 && <StepAlignment {...p} />}
            {step === 4 && <StepInterests {...p} />}
            {step === 5 && <StepReview {...p} />}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="border-t border-slate-100 px-6 md:px-10 py-5 flex items-center justify-between bg-slate-50/50">
        <button onClick={back} disabled={step === 1} className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>Back
        </button>
        <span className="text-xs text-slate-400">{step} of {STEPS.length}</span>
        {step < STEPS.length ? (
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={next} className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors">
            Continue <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </motion.button>
        ) : (
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={submit} className="flex items-center gap-2 bg-teal-600 text-white px-8 py-2.5 rounded-xl text-sm font-semibold hover:bg-teal-700 transition-colors">
            Apply for Review <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </motion.button>
        )}
      </div>
    </div>
  );
}
