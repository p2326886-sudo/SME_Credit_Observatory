import { TrendingUp, Building2, Globe, ShieldCheck } from 'lucide-react';

const calloutStats = [
  {
    value: '63M+',
    label: 'Registered MSMEs',
    sublabel: 'Udyam + informal estimates',
    icon: Building2,
  },
  {
    value: '₹25L Cr',
    label: 'Estimated Credit Gap',
    sublabel: 'IFC / World Bank methodology',
    icon: TrendingUp,
  },
  {
    value: '14-day',
    label: 'Avg Payment Delay',
    sublabel: 'Beyond contractual terms',
    icon: Globe,
  },
  {
    value: '38%',
    label: 'Digitally Excluded',
    sublabel: 'No formal digital footprint',
    icon: ShieldCheck,
  },
];

export default function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="relative py-24 px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 animate-fade-in-up">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-accent-blue to-accent-cyan" />
          <span className="text-accent-cyan text-sm font-medium tracking-[0.2em] uppercase">
            Research Overview
          </span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
          Executive Summary
        </h2>
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan mt-4" />
      </div>

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Left column — Prose */}
        <div className="lg:col-span-3 space-y-6 animate-fade-in-up delay-200">
          <p className="text-steel-200 text-lg leading-relaxed">
            India's micro, small, and medium enterprise ecosystem — encompassing over 63&nbsp;million
            registered and informal entities — constitutes the single largest engine of non-agricultural
            employment and distributed economic output in the subcontinent. Yet this vast productive
            base operates under a persistent structural paradox: the enterprises most critical to
            employment generation and supply-chain resilience remain those least served by the formal
            financial infrastructure designed to support them. The estimated credit gap of
            ₹25&nbsp;lakh crore represents not merely an unmet demand figure, but a systemic
            constraint on industrial capacity utilization, working-capital efficiency, and
            enterprise-level capital formation.
          </p>

          <p className="text-steel-200 text-lg leading-relaxed">
            The COVID-19 disruption of 2020–21 exposed — and in many cases, deepened — the fragility
            of MSME financing architectures. Cash conversion cycles extended to 142&nbsp;days at peak
            stress, receivable collection periods doubled, and an estimated 12–15% of micro
            enterprises permanently exited their sectors due to liquidity failure rather than demand
            contraction. The crisis simultaneously accelerated India's digital lending infrastructure:
            fintech-intermediated credit channels grew from 8% of new MSME disbursals in FY19 to 44%
            in FY24, while regulatory frameworks including the Account Aggregator ecosystem and
            OCEN protocol began reshaping the credit intermediation landscape at structural level.
          </p>

          <p className="text-steel-300 text-base leading-relaxed italic border-l-2 border-accent-blue/30 pl-5">
            This observatory synthesizes institutional data from RBI, SIDBI, TransUnion CIBIL, and
            World Bank sources with operational-level observations to construct a composite analytical
            framework. The Credit Friction Index, Working-Capital Volatility Model, and Operational
            Liquidity Score presented herein provide quantitative instruments for evaluating the
            structural distance between MSME credit demand and formal supply — and for identifying
            the policy levers most likely to reduce that distance at scale.
          </p>
        </div>

        {/* Right column — Callout stats */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {calloutStats.map((stat, index) => {
            const Icon = stat.icon;
            const delayClass = `delay-${(index + 2) * 100}`;
            return (
              <div
                key={stat.label}
                className={`glass-card p-6 animate-fade-in-up ${delayClass} group relative overflow-hidden`}
              >
                {/* Subtle background glow */}
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-accent-blue/5 group-hover:bg-accent-blue/10 transition-colors duration-500" />

                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <p className="gradient-text text-3xl font-bold tracking-tight leading-none mb-1">
                      {stat.value}
                    </p>
                    <p className="text-white font-semibold text-sm">{stat.label}</p>
                    <p className="text-steel-400 text-xs mt-1">{stat.sublabel}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider max-w-7xl mx-auto mt-24" />
    </section>
  );
}
