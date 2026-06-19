import React, { useRef, useState } from 'react';

export default function FileUpload({ label, id, required, accept, hint, onFileChange, className = '' }) {
  const ref = useRef(null);
  const [file, setFile] = useState(null);
  const [drag, setDrag] = useState(false);

  const handle = (f) => { if (!f) return; setFile(f); onFileChange?.(f); };
  const fmt = (b) => b < 1048576 ? `${(b / 1024).toFixed(1)} KB` : `${(b / 1048576).toFixed(1)} MB`;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}{required && <span className="text-teal-500 ml-0.5">*</span>}
        </label>
      )}
      <div
        onClick={() => ref.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => { e.preventDefault(); setDrag(false); handle(e.dataTransfer.files[0]); }}
        className={`border-2 border-dashed rounded-xl px-6 py-8 text-center cursor-pointer transition-all duration-200
          ${drag ? 'border-teal-400 bg-teal-50' : file ? 'border-teal-300 bg-teal-50/40' : 'border-slate-200 hover:border-teal-300 hover:bg-slate-50'}`}
      >
        <input ref={ref} type="file" id={id} accept={accept} className="sr-only"
          onChange={(e) => handle(e.target.files[0])} />
        {file ? (
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-slate-800">{file.name}</p>
            <p className="text-xs text-slate-400">{fmt(file.size)}</p>
            <button type="button" onClick={(e) => { e.stopPropagation(); setFile(null); onFileChange?.(null); }}
              className="text-xs text-red-400 hover:text-red-600 mt-1">Remove</button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">
                <span className="text-teal-600">Click to upload</span> or drag & drop
              </p>
              {hint && <p className="text-xs text-slate-400 mt-1">{hint}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
