import React from 'react';

const FeatureGrid = () => {
  return (
    <section className="w-full bg-slate-50 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: M2M Connects */}
          <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 flex flex-col border border-slate-100 transition-transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">M2M Connects</h3>
            <p className="text-slate-500 mb-10 text-lg">Discover synergistic opportunities</p>
            <div className="mt-auto bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 flex items-center space-x-4 w-full shadow-sm">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                <span className="text-teal-700 font-bold text-lg">FV</span>
              </div>
              <span className="font-semibold text-slate-800 text-lg">Fintech Visionary</span>
            </div>
          </div>

          {/* Card 2: Relationship Team */}
          <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 flex flex-col border border-slate-100 transition-transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Relationship Team</h3>
            <p className="text-slate-500 mb-10 text-lg">Your dedicated growth partners</p>
            <div className="mt-auto space-y-4 w-full">
              <div className="flex items-center space-x-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-slate-300 flex-shrink-0 overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=32" alt="Avatar" className="w-full h-full object-cover"/>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Sarah Jenkins</h4>
                  <p className="text-sm text-slate-500 font-medium">Lead Strategist</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-slate-300 flex-shrink-0 overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-full h-full object-cover"/>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Marcus Chen</h4>
                  <p className="text-sm text-slate-500 font-medium">Wealth Advisor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Investment Hub USA */}
          <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl shadow-slate-900/30 flex flex-col text-white transition-transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-3">Investment Hub USA</h3>
            <p className="text-slate-400 mb-10 text-lg">Exclusive market access</p>
            
            <div className="mt-auto w-full space-y-6 bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
              <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                <span className="text-slate-300 font-medium">Active Deals</span>
                <span className="text-3xl font-bold text-white">14</span>
              </div>
              <div className="flex justify-between items-center pb-4">
                <span className="text-slate-300 font-medium">Capital Deployed</span>
                <span className="text-3xl font-bold text-teal-400">$76M</span>
              </div>
              
              {/* Minimalist CSS Bar Chart */}
              <div className="w-full pt-4 space-y-4">
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-teal-500 h-full rounded-full transition-all duration-1000 ease-out" style={{ width: '85%' }}></div>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-teal-600 h-full rounded-full transition-all duration-1000 ease-out" style={{ width: '60%' }}></div>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-teal-700 h-full rounded-full transition-all duration-1000 ease-out" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
