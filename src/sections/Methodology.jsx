import { Database, FlaskConical, AlertTriangle, Layers } from 'lucide-react';
import { methodology } from '../data/researchData';

export default function Methodology() {
  return (
    <section id="methodology" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <p className="text-accent-violet text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Analytical Framework
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-steel-50 mb-4">
          Research{' '}
          <span className="gradient-text">Methodology</span>
        </h2>
        <p className="text-steel-400 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
          Rigorous analytical approach combining institutional datasets with
          proprietary composite indices for comprehensive MSME credit assessment.
        </p>
      </div>

      {/* Approach */}
      <div className="animate-fade-in-up delay-100 mb-12">
        <div className="metric-highlight p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent-violet/10 flex items-center justify-center shrink-0 mt-0.5">
              <Layers className="w-5 h-5 text-accent-violet" />
            </div>
            <div>
              <h3 className="text-steel-100 font-semibold text-lg mb-2">
                Research Approach
              </h3>
              <p className="text-steel-300 leading-relaxed text-sm sm:text-base">
                {methodology.approach}. This study integrates macro-level
                institutional reporting with ground-level operational observation
                to construct a multi-dimensional view of India's MSME credit
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Sources */}
      <div className="mb-12 animate-fade-in-up delay-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-lg bg-accent-blue/10 flex items-center justify-center">
            <Database className="w-4.5 h-4.5 text-accent-blue" />
          </div>
          <h3 className="text-xl font-semibold text-steel-100">Data Sources</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {methodology.dataSources.map((source, idx) => (
            <div
              key={idx}
              className="glass-card p-4 flex items-start gap-4 group"
            >
              <span className="w-7 h-7 rounded-full bg-accent-blue/15 text-accent-blue text-xs font-bold flex items-center justify-center shrink-0 border border-accent-blue/20 group-hover:bg-accent-blue/25 transition-colors">
                {idx + 1}
              </span>
              <p className="text-steel-300 text-sm leading-relaxed">{source}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Analytical Frameworks */}
      <div className="mb-12 animate-fade-in-up delay-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
            <FlaskConical className="w-4.5 h-4.5 text-accent-cyan" />
          </div>
          <h3 className="text-xl font-semibold text-steel-100">
            Analytical Frameworks
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methodology.frameworks.map((fw, idx) => {
            const colors = [
              { border: 'border-t-accent-blue', icon: 'text-accent-blue', bg: 'bg-accent-blue/10' },
              { border: 'border-t-accent-cyan', icon: 'text-accent-cyan', bg: 'bg-accent-cyan/10' },
              { border: 'border-t-accent-emerald', icon: 'text-accent-emerald', bg: 'bg-accent-emerald/10' },
            ][idx];
            return (
              <div
                key={idx}
                className={`glass-card p-6 border-t-2 ${colors.border}`}
              >
                <div
                  className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center mb-4`}
                >
                  <span className={`text-sm font-bold ${colors.icon}`}>
                    {fw.name
                      .match(/\(([^)]+)\)/)
                      ?.pop() || `F${idx + 1}`}
                  </span>
                </div>
                <h4 className="text-steel-100 font-semibold text-sm mb-3">
                  {fw.name}
                </h4>
                <p className="text-steel-400 text-xs leading-relaxed">
                  {fw.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Limitations */}
      <div className="animate-fade-in-up delay-400">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-lg bg-accent-amber/10 flex items-center justify-center">
            <AlertTriangle className="w-4.5 h-4.5 text-accent-amber" />
          </div>
          <h3 className="text-xl font-semibold text-steel-100">
            Limitations &amp; Caveats
          </h3>
        </div>
        <div className="glass-card p-6 sm:p-8 space-y-4">
          {methodology.limitations.map((limitation, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded flex items-center justify-center bg-accent-amber/10 shrink-0 mt-0.5">
                <AlertTriangle className="w-3 h-3 text-accent-amber" />
              </span>
              <p className="text-steel-300 text-sm leading-relaxed">
                {limitation}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
}
