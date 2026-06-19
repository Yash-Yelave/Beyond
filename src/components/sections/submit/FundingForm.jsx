import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormInput, FormTextarea, FormSelect, FormCheckbox } from '../../forms';
import FileUpload from '../../forms/FileUpload';

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
  { n: '01', label: 'Founder Info' },
  { n: '02', label: 'Startup Info' },
  { n: '03', label: 'Funding & Growth' },
  { n: '04', label: 'Traction' },
  { n: '05', label: 'Vision' },
  { n: '06', label: 'Review' },
];

function MiniStepper({ current }) {
  return (
    <div className="flex items-center gap-1 overflow-x-auto pb-1">
      {STEPS.map((s, i) => {
        const idx = i + 1; const done = idx < current; const active = idx === current;
        return (
          <React.Fragment key={s.n}>
            <div className={`flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              active ? 'bg-slate-900 text-white' : done ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-400'
            }`}>
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

const STAGE_OPTIONS = [
  { value: 'idea', label: 'Idea' }, { value: 'mvp', label: 'MVP' },
  { value: 'early-revenue', label: 'Early Revenue' }, { value: 'growth', label: 'Growth' }, { value: 'scaling', label: 'Scaling' },
];
const SUPPORT_OPTIONS = [
  { id: 'funding', label: 'Funding' }, { id: 'mentorship', label: 'Mentorship' },
  { id: 'partnerships', label: 'Strategic Partnerships' }, { id: 'hiring', label: 'Hiring' },
  { id: 'networking', label: 'Networking' }, { id: 'gtm', label: 'GTM Support' }, { id: 'product', label: 'Product Guidance' },
];

function StepFounder({ d, u, e }) {
  return (<>
    <SectionLabel title="A. Founder Information" subtitle="Tell us about yourself." />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <FormInput label="Full Name" id="fn" required value={d.fullName} onChange={ev => u('fullName', ev.target.value)} placeholder="Jane Doe" error={e.fullName} />
      <FormInput label="Email Address" id="em" required type="email" value={d.email} onChange={ev => u('email', ev.target.value)} placeholder="jane@startup.com" error={e.email} />
      <FormInput label="Phone Number" id="ph" required type="tel" value={d.phone} onChange={ev => u('phone', ev.target.value)} placeholder="+91 98765 43210" error={e.phone} />
      <FormInput label="LinkedIn Profile" id="li" value={d.linkedin} onChange={ev => u('linkedin', ev.target.value)} placeholder="linkedin.com/in/janedoe" />
      <FormInput label="City / Country" id="lo" required value={d.location} onChange={ev => u('location', ev.target.value)} placeholder="Mumbai, India" error={e.location} />
      <FormInput label="Role in Company" id="ro" required value={d.role} onChange={ev => u('role', ev.target.value)} placeholder="Co-Founder & CEO" error={e.role} />
      <FormInput label="Years of Experience" id="yr" type="number" min="0" value={d.experience} onChange={ev => u('experience', ev.target.value)} placeholder="5" className="md:col-span-2 md:max-w-xs" />
    </div>
  </>);
}
function StepStartup({ d, u, e }) {
  return (<>
    <SectionLabel title="B. Startup / Project Information" subtitle="Give us a clear picture of what you're building." />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <FormInput label="Startup Name" id="sn" required value={d.startupName} onChange={ev => u('startupName', ev.target.value)} placeholder="Acme Technologies" error={e.startupName} />
      <FormInput label="Website URL" id="wu" type="url" value={d.website} onChange={ev => u('website', ev.target.value)} placeholder="https://acme.com" />
      <FormInput label="Industry / Sector" id="in" required value={d.industry} onChange={ev => u('industry', ev.target.value)} placeholder="FinTech, EdTech…" error={e.industry} />
      <FormSelect label="Startup Stage" id="st" required options={STAGE_OPTIONS} placeholder="Select stage…" value={d.stage} onChange={ev => u('stage', ev.target.value)} error={e.stage} />
      <FormInput label="One-line Elevator Pitch" id="ep" required value={d.pitch} onChange={ev => u('pitch', ev.target.value)} placeholder="We help X do Y so they can Z." className="md:col-span-2" error={e.pitch} />
      <FormTextarea label="Detailed Description" id="dd" required value={d.description} onChange={ev => u('description', ev.target.value)} placeholder="Describe your product, team, and what makes it unique…" className="md:col-span-2" error={e.description} />
      <FormTextarea label="Problem You Are Solving" id="pr" required rows={3} value={d.problem} onChange={ev => u('problem', ev.target.value)} placeholder="What pain point are you addressing?" error={e.problem} />
      <FormTextarea label="Target Market" id="tm" required rows={3} value={d.market} onChange={ev => u('market', ev.target.value)} placeholder="Who are your primary customers?" error={e.market} />
      <FormTextarea label="Business Model" id="bm" rows={3} value={d.businessModel} onChange={ev => u('businessModel', ev.target.value)} placeholder="How do you make money?" className="md:col-span-2" />
    </div>
  </>);
}
function StepFunding({ d, u, e }) {
  const toggle = id => { const c = d.supportNeeds || []; u('supportNeeds', c.includes(id) ? c.filter(x => x !== id) : [...c, id]); };
  return (<>
    <SectionLabel title="C. Funding & Growth" subtitle="Help us understand your financial position." />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
      <FormInput label="Funding Required" id="fr" value={d.fundingRequired} onChange={ev => u('fundingRequired', ev.target.value)} placeholder="₹2 Crore / $500K" />
      <FormInput label="Current Revenue (MRR/ARR)" id="cr" value={d.revenue} onChange={ev => u('revenue', ev.target.value)} placeholder="₹5 Lakh MRR" />
      <FormInput label="Monthly Growth Rate" id="gr" value={d.growth} onChange={ev => u('growth', ev.target.value)} placeholder="15%" />
      <FormInput label="Existing Investors" id="ei" value={d.existingInvestors} onChange={ev => u('existingInvestors', ev.target.value)} placeholder="Bootstrapped / None" />
      <FormInput label="Team Size" id="ts" type="number" min="1" value={d.teamSize} onChange={ev => u('teamSize', ev.target.value)} placeholder="8" />
      <FormInput label="Geographic Presence" id="gp" value={d.geography} onChange={ev => u('geography', ev.target.value)} placeholder="Pan-India, SEA…" />
    </div>
    <p className="text-sm font-medium text-slate-700 mb-3">What support are you looking for? <span className="text-teal-500">*</span></p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {SUPPORT_OPTIONS.map(o => <FormCheckbox key={o.id} id={`s-${o.id}`} label={o.label} checked={(d.supportNeeds || []).includes(o.id)} onChange={() => toggle(o.id)} />)}
    </div>
    {e.supportNeeds && <p className="text-xs text-red-500 mt-2">{e.supportNeeds}</p>}
  </>);
}
function StepTraction({ d, u }) {
  return (<>
    <SectionLabel title="D. Traction & Proof" subtitle="Share evidence of market validation and momentum." />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <FormTextarea label="Key Achievements" id="ka" rows={3} value={d.achievements} onChange={ev => u('achievements', ev.target.value)} placeholder="Raised pre-seed, 1000+ paying users…" />
      <FormTextarea label="Current Users / Customers" id="cu" rows={3} value={d.users} onChange={ev => u('users', ev.target.value)} placeholder="5,000 MAU, 200 enterprise clients…" />
      <FormTextarea label="Market Validation" id="mv" rows={3} value={d.validation} onChange={ev => u('validation', ev.target.value)} placeholder="LOIs, pilots, case studies…" className="md:col-span-2" />
      <FormInput label="Product Demo URL" id="du" type="url" value={d.demoUrl} onChange={ev => u('demoUrl', ev.target.value)} placeholder="https://demo.acme.com" />
      <div className="md:col-span-2 grid md:grid-cols-2 gap-5">
        <FileUpload label="Pitch Deck" id="pd" accept=".pdf,.pptx" hint="PDF or PPTX, max 25 MB" onFileChange={f => u('pitchDeck', f)} />
        <FileUpload label="Additional Documents" id="ad" accept=".pdf,.doc,.docx,.xlsx" hint="Financials, press… max 20 MB" onFileChange={f => u('additionalDocs', f)} />
      </div>
    </div>
  </>);
}
function StepVision({ d, u, e }) {
  return (<>
    <SectionLabel title="E. Vision & Alignment" subtitle="Help us understand your 'why'." />
    <div className="flex flex-col gap-5">
      <FormTextarea label="Why do you want to join Beyond?" id="wb" required rows={4} value={d.whyBeyond} onChange={ev => u('whyBeyond', ev.target.value)} placeholder="What about the ecosystem resonates with your journey?" error={e.whyBeyond} />
      <FormTextarea label="What long-term vision are you building?" id="lv" required rows={4} value={d.longTermVision} onChange={ev => u('longTermVision', ev.target.value)} placeholder="Where do you see your company in 5–10 years?" error={e.longTermVision} />
      <FormTextarea label="How can you contribute to the ecosystem?" id="co" rows={3} value={d.contribution} onChange={ev => u('contribution', ev.target.value)} placeholder="Mentoring, domain expertise, partnerships…" />
    </div>
  </>);
}
function StepReview({ d, u, e }) {
  return (<>
    <SectionLabel title="F. Final Agreement" subtitle="Please confirm before submitting." />
    <div className="flex flex-col gap-4 mb-7">
      <FormCheckbox id="ca" label="I confirm all information provided is accurate and truthful." checked={d.confirmAccurate || false} onChange={() => u('confirmAccurate', !d.confirmAccurate)} />
      <FormCheckbox id="ap" label="I agree to Beyond's Privacy Policy and understand how my data will be used." checked={d.agreePrivacy || false} onChange={() => u('agreePrivacy', !d.agreePrivacy)} />
      <FormCheckbox id="up" label="I understand submissions are reviewed internally and do not guarantee any outcome." checked={d.understandProcess || false} onChange={() => u('understandProcess', !d.understandProcess)} />
    </div>
    {(e.confirmAccurate || e.agreePrivacy || e.understandProcess) && <p className="text-xs text-red-500 mb-4">Please accept all agreements before submitting.</p>}
    <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-2.5">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">Summary</p>
      {[['Name', d.fullName], ['Email', d.email], ['Startup', d.startupName], ['Stage', d.stage], ['Funding', d.fundingRequired]].map(([l, v]) =>
        v ? <div key={l} className="flex justify-between text-sm"><span className="text-slate-500">{l}</span><span className="font-medium text-slate-800 truncate max-w-[60%]">{v}</span></div> : null
      )}
    </div>
  </>);
}

const INIT = {
  fullName:'',email:'',phone:'',linkedin:'',location:'',role:'',experience:'',
  startupName:'',website:'',industry:'',stage:'',pitch:'',description:'',problem:'',market:'',businessModel:'',
  fundingRequired:'',revenue:'',growth:'',existingInvestors:'',teamSize:'',geography:'',supportNeeds:[],
  achievements:'',users:'',validation:'',demoUrl:'',pitchDeck:null,additionalDocs:null,
  whyBeyond:'',longTermVision:'',contribution:'',
  confirmAccurate:false,agreePrivacy:false,understandProcess:false,
};

function validate(step, d) {
  const e = {};
  if (step === 1) { if (!d.fullName.trim()) e.fullName='Required.'; if (!d.email.trim()||!/\S+@\S+\.\S+/.test(d.email)) e.email='Valid email required.'; if (!d.phone.trim()) e.phone='Required.'; if (!d.location.trim()) e.location='Required.'; if (!d.role.trim()) e.role='Required.'; }
  if (step === 2) { if (!d.startupName.trim()) e.startupName='Required.'; if (!d.industry.trim()) e.industry='Required.'; if (!d.stage) e.stage='Required.'; if (!d.pitch.trim()) e.pitch='Required.'; if (!d.description.trim()) e.description='Required.'; if (!d.problem.trim()) e.problem='Required.'; if (!d.market.trim()) e.market='Required.'; }
  if (step === 3) { if (!d.supportNeeds?.length) e.supportNeeds='Select at least one.'; }
  if (step === 5) { if (!d.whyBeyond.trim()) e.whyBeyond='Required.'; if (!d.longTermVision.trim()) e.longTermVision='Required.'; }
  if (step === 6) { if (!d.confirmAccurate) e.confirmAccurate=true; if (!d.agreePrivacy) e.agreePrivacy=true; if (!d.understandProcess) e.understandProcess=true; }
  return e;
}

export default function FundingForm() {
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [data, setData] = useState(INIT);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (f, v) => { setData(p => ({ ...p, [f]: v })); setErrors(p => { const n={...p}; delete n[f]; return n; }); };
  const next = () => { const e = validate(step, data); if (Object.keys(e).length) { setErrors(e); return; } setErrors({}); setDir(1); setStep(s => s + 1); };
  const back = () => { setErrors({}); setDir(-1); setStep(s => s - 1); };
  const submit = () => { const e = validate(6, data); if (Object.keys(e).length) { setErrors(e); return; } setSubmitted(true); };

  if (submitted) return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-16 text-center">
      <div className="w-16 h-16 bg-teal-50 border border-teal-100 rounded-full flex items-center justify-center mx-auto mb-5">
        <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3">Opportunity Submitted</h3>
      <p className="text-slate-500 mb-2">Thank you, <strong className="text-slate-700">{data.fullName || 'Founder'}</strong>. We'll be in touch within 5–7 business days.</p>
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
            {step === 1 && <StepFounder {...p} />}
            {step === 2 && <StepStartup {...p} />}
            {step === 3 && <StepFunding {...p} />}
            {step === 4 && <StepTraction {...p} />}
            {step === 5 && <StepVision {...p} />}
            {step === 6 && <StepReview {...p} />}
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
            Submit for Review <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </motion.button>
        )}
      </div>
    </div>
  );
}
