import React from 'react';

export function FormInput({ label, id, required, error, className = '', ...props }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label} {required && <span className="text-teal-500">*</span>}
      </label>
      <input
        id={id}
        {...props}
        className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm placeholder:text-slate-400
          bg-white transition-all duration-200 outline-none
          focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500
          ${error ? 'border-red-400 focus:ring-red-400/20 focus:border-red-400' : 'border-slate-200 hover:border-slate-300'}
        `}
      />
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  );
}

export function FormTextarea({ label, id, required, error, rows = 4, className = '', ...props }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label} {required && <span className="text-teal-500">*</span>}
      </label>
      <textarea
        id={id}
        rows={rows}
        {...props}
        className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm placeholder:text-slate-400
          bg-white transition-all duration-200 outline-none resize-none
          focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500
          ${error ? 'border-red-400 focus:ring-red-400/20 focus:border-red-400' : 'border-slate-200 hover:border-slate-300'}
        `}
      />
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  );
}

export function FormSelect({ label, id, required, error, options = [], placeholder, className = '', ...props }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label} {required && <span className="text-teal-500">*</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          {...props}
          className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm bg-white
            transition-all duration-200 outline-none appearance-none cursor-pointer
            focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500
            ${error ? 'border-red-400 focus:ring-red-400/20 focus:border-red-400' : 'border-slate-200 hover:border-slate-300'}
          `}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  );
}

export function FormCheckbox({ id, label, checked, onChange, className = '' }) {
  return (
    <label htmlFor={id} className={`flex items-center gap-3 cursor-pointer group ${className}`}>
      <div className="relative shrink-0">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-5 h-5 rounded-md border-2 border-slate-300 bg-white transition-all duration-200
          peer-checked:bg-teal-500 peer-checked:border-teal-500 group-hover:border-teal-400 flex items-center justify-center">
          {checked && (
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      <span className="text-sm text-slate-700 leading-relaxed">{label}</span>
    </label>
  );
}
