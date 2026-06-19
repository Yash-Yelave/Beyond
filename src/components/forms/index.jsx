import React from 'react';

// ── Base field wrapper ───────────────────────────────────────────────────────
function FieldWrapper({ label, id, required, error, children, className }) {
  return (
    <div className={`flex flex-col gap-2 ${className || ''}`}>
      {label && (
        <label htmlFor={id} className="text-[13px] font-bold text-ink uppercase tracking-wider">
          {label}{required && <span className="text-copper ml-1">*</span>}
        </label>
      )}
      {children}
      {error && <p className="text-[12px] text-copper font-medium mt-1">{error}</p>}
    </div>
  );
}

const inputBase = (error) =>
  `w-full px-4 py-3.5 rounded-lg border text-ink text-[15px] font-medium placeholder:text-slate/60 bg-card
   transition-all duration-300 outline-none
   focus:ring-2 ${
     error
       ? 'border-copper/50 focus:ring-copper/20 focus:border-copper'
       : 'border-line hover:border-slate/40 focus:ring-forest/10 focus:border-forest'
   }`;

// ── FormInput ────────────────────────────────────────────────────────────────
export function FormInput({ label, id, required, error, className, ...props }) {
  return (
    <FieldWrapper label={label} id={id} required={required} error={error} className={className}>
      <input id={id} {...props} className={inputBase(error)} />
    </FieldWrapper>
  );
}

// ── FormTextarea ─────────────────────────────────────────────────────────────
export function FormTextarea({ label, id, required, error, rows = 4, className, ...props }) {
  return (
    <FieldWrapper label={label} id={id} required={required} error={error} className={className}>
      <textarea id={id} rows={rows} {...props} className={`${inputBase(error)} resize-none`} />
    </FieldWrapper>
  );
}

// ── FormSelect ───────────────────────────────────────────────────────────────
export function FormSelect({ label, id, required, error, options = [], placeholder, className, ...props }) {
  return (
    <FieldWrapper label={label} id={id} required={required} error={error} className={className}>
      <div className="relative">
        <select id={id} {...props} className={`${inputBase(error)} appearance-none cursor-pointer pr-10`}>
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate">
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </FieldWrapper>
  );
}

// ── FormCheckbox ─────────────────────────────────────────────────────────────
export function FormCheckbox({ id, label, checked, onChange, className }) {
  return (
    <label htmlFor={id} className={`flex items-start gap-3 cursor-pointer group ${className || ''}`}>
      <div className="relative shrink-0 mt-0.5">
        <input type="checkbox" id={id} checked={checked} onChange={onChange} className="sr-only peer" />
        <div className="w-5 h-5 rounded border border-line bg-card transition-all duration-300
          peer-checked:bg-forest peer-checked:border-forest group-hover:border-slate/40
          flex items-center justify-center">
          {checked && (
            <svg className="w-3.5 h-3.5 text-card" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      <span className="text-[14px] text-slate font-medium leading-[1.6]">{label}</span>
    </label>
  );
}
