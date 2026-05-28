import { TrendingDown, TrendingUp } from 'lucide-react';
import { stressIndicators } from '../data/researchData';

/**
 * Determine if the current trend is positive or negative for each indicator.
 * - CFI (Credit Friction): lower is better → declining = improving
 * - WCV (Working-Capital Volatility): lower CCC is better → declining = improving
 * - OLS (Operational Liquidity): higher is better → improving = improving
 * - ILD (Informal Lending Dependence): lower is better → declining = improving
 */
function getIndicatorHealth(indicator) {
  const { id, trend } = indicator;

  // "improving" in the data already means the direction is good
  if (trend === 'improving') return 'positive';

  // For declining indicators: CFI and ILD declining is good, OLS declining would be bad
  if (trend === 'declining') {
    if (id === 'cfi' || id === 'ild' || id === 'wcv') return 'positive';
    return 'negative';
  }

  return 'neutral';
}

function CircularProgress({ value, max = 100, health, size = 88, strokeWidth = 6 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const normalizedValue = Math.min(value, max);
  const progress = (normalizedValue / max) * circumference;

  const colorMap = {
    positive: 'stroke-accent-emerald',
    negative: 'stroke-accent-rose',
    neutral: 'stroke-accent-amber',
  };
  const strokeColor = colorMap[health] || colorMap.neutral;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className="text-navy-800"
      />
      {/* Progress */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        className={`${strokeColor} transition-all duration-1000 ease-out`}
      />
    </svg>
  );
}

export default function StressIndicators() {
  return (
    <section id="stress-indicators" className="relative py-24 px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 animate-fade-in-up">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-accent-emerald to-accent-cyan" />
          <span className="text-accent-emerald text-sm font-medium tracking-[0.2em] uppercase">
            Quantitative Framework
          </span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
          Financing Stress Framework
        </h2>
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-accent-emerald to-accent-cyan mt-4" />
        <p className="text-steel-300 text-lg mt-6 max-w-3xl">
          Four composite indicators tracking the structural health of India's MSME financing
          ecosystem — from credit-access friction to operational liquidity resilience.
        </p>
      </div>

      {/* Indicator Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stressIndicators.map((indicator, index) => {
          const health = getIndicatorHealth(indicator);
          const delayClass = `delay-${(index + 1) * 100}`;

          const isPositive = health === 'positive';
          const trendColor = isPositive ? 'text-accent-emerald' : 'text-accent-rose';
          const trendBg = isPositive ? 'bg-accent-emerald/10' : 'bg-accent-rose/10';
          const progressColor = isPositive ? 'bg-accent-emerald' : 'bg-accent-rose';
          const deltaPrefix = indicator.delta > 0 ? '+' : '';

          // Normalise value for progress bar (out of 100)
          const progressValue =
            indicator.unit === '/100'
              ? indicator.value
              : indicator.unit === '%'
                ? indicator.value
                : Math.min((indicator.value / 150) * 100, 100); // days-based scale

          return (
            <div
              key={indicator.id}
              className={`glass-card p-6 relative overflow-hidden group animate-fade-in-up ${delayClass}`}
            >
              {/* Top section: Label + Trend badge */}
              <div className="flex items-start justify-between mb-5">
                <p className="text-steel-300 text-sm font-medium leading-snug pr-2">
                  {indicator.label}
                </p>
                <div
                  className={`flex items-center gap-1 px-2 py-1 rounded-full ${trendBg} flex-shrink-0`}
                >
                  {isPositive ? (
                    <TrendingDown className={`w-3.5 h-3.5 ${trendColor}`} />
                  ) : (
                    <TrendingUp className={`w-3.5 h-3.5 ${trendColor}`} />
                  )}
                  <span className={`text-xs font-semibold ${trendColor}`}>
                    {deltaPrefix}{indicator.delta}
                  </span>
                </div>
              </div>

              {/* Circular visual + Value */}
              <div className="flex items-center gap-5 mb-5">
                <div className="relative flex-shrink-0">
                  <CircularProgress
                    value={indicator.value}
                    max={indicator.unit === '/100' || indicator.unit === '%' ? 100 : 150}
                    health={health}
                  />
                  {/* Center text inside circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-lg leading-none">
                      {indicator.value}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-steel-400 text-xs uppercase tracking-wider mb-1">
                    {indicator.unit}
                  </p>
                  <p className="text-steel-500 text-xs">
                    Benchmark:{' '}
                    <span className="text-steel-300 font-medium">
                      {indicator.benchmark}
                      {indicator.unit}
                    </span>
                  </p>
                </div>
              </div>

              {/* Horizontal progress bar */}
              <div className="mb-4">
                <div className="progress-bar">
                  <div
                    className={`progress-fill ${progressColor}`}
                    style={{ width: `${progressValue}%` }}
                  />
                </div>
                <div className="flex justify-between mt-1.5">
                  <span className="text-steel-500 text-[10px]">0</span>
                  <span className="text-steel-500 text-[10px]">
                    {indicator.unit === '/100' || indicator.unit === '%' ? '100' : '150'}
                  </span>
                </div>
              </div>

              {/* Benchmark marker on bar (visual reference) */}
              <div className="relative -mt-3 mb-4">
                <div
                  className="absolute top-0 h-2.5 border-l border-dashed border-steel-500/50"
                  style={{
                    left: `${
                      indicator.unit === '/100' || indicator.unit === '%'
                        ? indicator.benchmark
                        : (indicator.benchmark / 150) * 100
                    }%`,
                  }}
                />
              </div>

              {/* Description */}
              <p className="text-steel-400 text-xs leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                {indicator.description}
              </p>

              {/* Bottom accent */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isPositive
                    ? 'bg-gradient-to-r from-accent-emerald/0 via-accent-emerald/40 to-accent-emerald/0'
                    : 'bg-gradient-to-r from-accent-rose/0 via-accent-rose/40 to-accent-rose/0'
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Section divider */}
      <div className="section-divider max-w-7xl mx-auto mt-24" />
    </section>
  );
}
