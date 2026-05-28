import { keyFindings } from '../data/researchData';

export default function KeyFindings() {
  return (
    <section id="key-findings" className="relative py-24 px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 animate-fade-in-up">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-accent-amber to-accent-rose" />
          <span className="text-accent-amber text-sm font-medium tracking-[0.2em] uppercase">
            Research Insights
          </span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
          Structural Findings
        </h2>
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-accent-amber to-accent-rose mt-4" />
        <p className="text-steel-300 text-lg mt-6 max-w-3xl">
          Six core analytical observations emerged from the cross-sectional analysis of India's
          MSME credit and working-capital ecosystem.
        </p>
      </div>

      {/* Findings Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {keyFindings.map((finding, index) => {
          const delayClass = `delay-${(index + 1) * 100}`;
          return (
            <div
              key={finding.id}
              className={`glass-card p-8 relative overflow-hidden group animate-fade-in-up ${delayClass}`}
            >
              {/* Numbered badge — top right */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full border border-steel-700/60 flex items-center justify-center">
                <span className="text-steel-500 text-xs font-mono font-semibold">
                  {String(finding.id).padStart(2, '0')}
                </span>
              </div>

              {/* Accent corner glow */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-accent-amber/5 group-hover:bg-accent-amber/10 transition-colors duration-500" />

              {/* Content */}
              <div className="relative">
                <p className="gradient-text-gold text-5xl md:text-6xl font-bold tracking-tight leading-none mb-4">
                  {finding.stat}
                </p>
                <h3 className="text-white font-semibold text-lg md:text-xl leading-snug mb-3">
                  {finding.title}
                </h3>
                <p className="text-steel-300 text-sm leading-relaxed">
                  {finding.description}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-amber/0 via-accent-amber/30 to-accent-amber/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          );
        })}
      </div>

      {/* Section divider */}
      <div className="section-divider max-w-7xl mx-auto mt-24" />
    </section>
  );
}
