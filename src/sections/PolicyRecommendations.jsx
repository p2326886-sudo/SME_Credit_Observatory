import { Building, Cpu, Wallet, Network, BookOpen, Shield } from 'lucide-react';
import { policyRecommendations } from '../data/researchData';

const categoryIcons = {
  'Credit Infrastructure': Building,
  'Digital Infrastructure': Cpu,
  'Working Capital': Wallet,
  'Institutional Capacity': Network,
  'Financial Literacy': BookOpen,
  'Risk Mitigation': Shield,
};

const categoryColors = {
  'Credit Infrastructure': { bg: 'bg-accent-blue/10', text: 'text-accent-blue', border: 'border-accent-blue/30' },
  'Digital Infrastructure': { bg: 'bg-accent-cyan/10', text: 'text-accent-cyan', border: 'border-accent-cyan/30' },
  'Working Capital': { bg: 'bg-accent-emerald/10', text: 'text-accent-emerald', border: 'border-accent-emerald/30' },
  'Institutional Capacity': { bg: 'bg-accent-violet/10', text: 'text-accent-violet', border: 'border-accent-violet/30' },
  'Financial Literacy': { bg: 'bg-accent-amber/10', text: 'text-accent-amber', border: 'border-accent-amber/30' },
  'Risk Mitigation': { bg: 'bg-accent-rose/10', text: 'text-accent-rose', border: 'border-accent-rose/30' },
};

const impactColors = {
  High: 'bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/30',
  'Medium-High': 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30',
  Medium: 'bg-accent-amber/15 text-accent-amber border border-accent-amber/30',
};

export default function PolicyRecommendations() {
  return (
    <section id="policy" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <p className="text-accent-amber text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Strategic Recommendations
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-steel-50 mb-4">
          Policy &amp; Institutional{' '}
          <span className="gradient-text-gold">Recommendations</span>
        </h2>
        <p className="text-steel-400 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
          Evidence-based interventions designed to reduce credit friction, enhance
          digital infrastructure, and strengthen MSME financial resilience across
          India's small business ecosystem.
        </p>
      </div>

      {/* Policy Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {policyRecommendations.map((rec, idx) => {
          const Icon = categoryIcons[rec.category] || Building;
          const colors = categoryColors[rec.category] || categoryColors['Credit Infrastructure'];
          const impact = impactColors[rec.impact] || impactColors['Medium'];

          return (
            <div
              key={rec.id}
              className={`glass-card p-6 sm:p-8 flex flex-col animate-fade-in-up delay-${(idx + 1) * 100}`}
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {rec.category}
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${impact}`}
                >
                  {rec.impact} Impact
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-steel-50 text-lg font-semibold mb-3 leading-snug">
                {rec.title}
              </h3>
              <p className="text-steel-400 text-sm leading-relaxed mb-6 flex-1">
                {rec.description}
              </p>

              {/* Timeline & Stakeholders */}
              <div className="border-t border-navy-700/60 pt-4 space-y-3">
                <div className="flex items-center gap-2 text-xs text-steel-500">
                  <span className="font-medium text-steel-300">Timeline:</span>
                  <span className="px-2 py-0.5 rounded bg-navy-800 text-steel-300">
                    {rec.timeline}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-medium text-steel-300 mr-1">
                    Stakeholders:
                  </span>
                  {rec.stakeholders.map((s, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-full bg-navy-800/80 text-steel-400 text-[11px] border border-navy-700/50"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
}
