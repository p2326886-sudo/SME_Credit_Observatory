import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from 'recharts';
import { MapPin, Wifi, FileText, Landmark, TrendingUp } from 'lucide-react';
import { stateReadinessData } from '../data/researchData';

const COLORS = {
  emerald: '#047857',  // Forest Emerald
  amber: '#b45309',    // Warm Amber
  rose: '#be123c',     // Crimson
  blue: '#1e40af',     // Oxford Blue
  cyan: '#0369a1',     // Steel Blue
  violet: '#6d28d9',   // Royal Purple
};

const getTierColor = (score) => {
  if (score >= 6.5) return COLORS.emerald;
  if (score >= 4.5) return COLORS.amber;
  return COLORS.rose;
};

const sortedStates = [...stateReadinessData].sort(
  (a, b) => b.score - a.score
);

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const data = payload[0].payload;
  return (
    <div className="custom-tooltip">
      <p className="label text-steel-100 font-semibold text-sm mb-2">{data.state}</p>
      <div className="space-y-1.5">
        <p className="text-xs text-steel-300">
          <span className="text-accent-blue font-medium">Credit Readiness Score:</span>{' '}
          <span className="text-steel-50 font-semibold">{data.score} / 10</span>
        </p>
        <p className="text-xs text-steel-300">
          <span className="text-accent-cyan font-medium">Bank Branch Density:</span>{' '}
          <span className="text-steel-50 font-semibold">{data.bankDensity} per 1L Pop.</span>
        </p>
        <p className="text-xs text-steel-300">
          <span className="text-accent-emerald font-medium">Digital Penetration:</span>{' '}
          <span className="text-steel-50">{data.digitalPenetration}</span>
        </p>
        <p className="text-xs text-steel-300">
          <span className="text-accent-violet font-medium">NBFC Presence:</span>{' '}
          <span className="text-steel-50">{data.nbfcPresence}</span>
        </p>
        <p className="text-xs text-steel-300">
          <span className="text-accent-rose font-medium">Formal Credit Penetration:</span>{' '}
          <span className="text-steel-50">~{data.formalCredit}%</span>
        </p>
        <p className="text-xs text-steel-300">
          <span className="text-accent-amber font-medium">Est. MSME Population:</span>{' '}
          <span className="text-steel-50">{data.population}</span>
        </p>
      </div>
    </div>
  );
};

const MiniBarTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const data = payload[0].payload;
  return (
    <div className="custom-tooltip">
      <p className="label text-steel-100 font-semibold text-xs mb-1">{data.state}</p>
      <p className="text-xs text-steel-300">
        <span className="text-steel-50 font-semibold">{payload[0].value}%</span>
      </p>
    </div>
  );
};

export default function StateReadiness() {
  return (
    <section id="state-readiness" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-transparent to-accent-emerald" />
            <span className="text-xs font-semibold tracking-[0.2em] text-accent-emerald uppercase">
              Geographic Intelligence
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-steel-50 mb-4">
            State-wise <span className="gradient-text">Credit Readiness Comparison</span>
          </h2>
          <p className="text-steel-400 max-w-2xl text-base leading-relaxed">
            A regional comparative analysis of credit infrastructure readiness across India's key MSME states, mapping Table 8.1 metrics to analyze digital inclusion, banking branch density, and formal credit penetration divides.
          </p>
        </div>

        {/* Key Insight Callout */}
        <div
          className="glass-card p-5 mb-8 animate-fade-in-up delay-100 flex items-start gap-4"
          style={{ borderLeft: '3px solid #b45309' }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: 'rgba(180, 83, 9, 0.08)' }}
          >
            <MapPin size={22} className="text-accent-amber" />
          </div>
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-bold text-accent-amber">2.2×</span>
              <span className="text-sm font-semibold text-steel-100">
                Credit Disparity Divide
              </span>
            </div>
            <p className="text-xs text-steel-400 leading-relaxed max-w-2xl">
              Maharashtra (score: 7.8/10) demonstrates credit readiness 2.2 times higher than Bihar (score: 3.5/10), revealing a persistent structural divide in financial infrastructure. States with higher banking branch density, GST registration compliance, and active NBFC presences consistently support stronger formal credit penetration levels.
            </p>
          </div>
        </div>

        {/* Tier Legend */}
        <div className="flex items-center gap-6 mb-6 animate-fade-in-up delay-100">
          <span className="text-xs text-steel-500 font-medium uppercase tracking-wider">State Tiers:</span>
          {[
            { label: 'Top Leader (>= 6.5)', color: COLORS.emerald },
            { label: 'Transition (5.0 - 6.4)', color: COLORS.amber },
            { label: 'Credit Desert (< 5.0)', color: COLORS.rose },
          ].map((tier, i) => (
            <span key={i} className="flex items-center gap-1.5 text-xs text-steel-400">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: tier.color }} />
              {tier.label}
            </span>
          ))}
        </div>

        {/* Main Horizontal Bar Chart */}
        <div className="glass-card p-6 lg:p-8 mb-8 animate-fade-in-up delay-200">
          <h3 className="text-lg font-semibold text-steel-100 mb-4">
            Credit Readiness Composite Scores (0–10 Scale)
          </h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={480}>
              <BarChart
                data={sortedStates}
                layout="vertical"
                margin={{ top: 8, right: 40, left: 16, bottom: 8 }}
              >
                <defs>
                  <linearGradient id="stateEmerald" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={COLORS.emerald} stopOpacity={0.6} />
                    <stop offset="100%" stopColor={COLORS.emerald} stopOpacity={1} />
                  </linearGradient>
                  <linearGradient id="stateAmber" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={COLORS.amber} stopOpacity={0.6} />
                    <stop offset="100%" stopColor={COLORS.amber} stopOpacity={1} />
                  </linearGradient>
                  <linearGradient id="stateRose" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={COLORS.rose} stopOpacity={0.6} />
                    <stop offset="100%" stopColor={COLORS.rose} stopOpacity={1} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(15, 23, 42, 0.05)"
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  domain={[0, 10]}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  axisLine={{ stroke: 'rgba(15, 23, 42, 0.1)' }}
                  tickLine={false}
                  label={{
                    value: 'Composite Score (Out of 10)',
                    position: 'insideBottom',
                    offset: -2,
                    fill: '#64748b',
                    fontSize: 11,
                  }}
                />
                <YAxis
                  dataKey="state"
                  type="category"
                  width={130}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(30, 64, 175, 0.02)' }} />
                <ReferenceLine
                  x={5.5}
                  stroke="#1e40af"
                  strokeDasharray="6 4"
                  strokeWidth={1}
                  label={{
                    value: 'National Median (5.5)',
                    position: 'top',
                    fill: '#1e40af',
                    fontSize: 10,
                    fontWeight: 600,
                  }}
                />
                <Bar
                  dataKey="score"
                  radius={[0, 6, 6, 0]}
                  barSize={26}
                  animationDuration={1400}
                  animationEasing="ease-out"
                >
                  {sortedStates.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        entry.score >= 6.5
                          ? 'url(#stateEmerald)'
                          : entry.score >= 5.0
                          ? 'url(#stateAmber)'
                          : 'url(#stateRose)'
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Mini Comparison Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up delay-300">
          {/* Bank Density */}
          <div className="glass-card p-5">
            <div className="flex items-center gap-3 mb-1">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-accent-cyan/15"
              >
                <Landmark size={16} className="text-accent-cyan" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-steel-100">Bank Branch Density</h4>
                <p className="text-[10px] text-steel-500">Commercial bank branches per 100,000 population</p>
              </div>
            </div>
            <div className="chart-container mt-3" style={{ padding: '12px' }}>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart
                  data={[...stateReadinessData].sort((a,b) => b.bankDensity - a.bankDensity)}
                  layout="vertical"
                  margin={{ top: 0, right: 24, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(15, 23, 42, 0.05)" horizontal={false} />
                  <XAxis type="number" domain={[0, 35]} tick={{ fill: '#64748b', fontSize: 9 }} axisLine={false} tickLine={false} />
                  <YAxis dataKey="state" type="category" width={110} tick={{ fill: '#64748b', fontSize: 9 }} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: 'rgba(30, 64, 175, 0.02)' }} />
                  <Bar dataKey="bankDensity" radius={[0, 4, 4, 0]} barSize={12} fill={COLORS.cyan}>
                    {stateReadinessData.map((entry, i) => (
                      <Cell key={`mini-b-${i}`} fill={COLORS.cyan} fillOpacity={0.8} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Formal Credit Penetration */}
          <div className="glass-card p-5">
            <div className="flex items-center gap-3 mb-1">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-accent-violet/15"
              >
                <Landmark size={16} className="text-accent-violet" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-steel-100">Formal Credit Penetration</h4>
                <p className="text-[10px] text-steel-500">Percentage of registered MSMEs with active formal credit lines</p>
              </div>
            </div>
            <div className="chart-container mt-3" style={{ padding: '12px' }}>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart
                  data={[...stateReadinessData].sort((a,b) => b.formalCredit - a.formalCredit)}
                  layout="vertical"
                  margin={{ top: 0, right: 24, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(15, 23, 42, 0.05)" horizontal={false} />
                  <XAxis type="number" domain={[0, 30]} tick={{ fill: '#64748b', fontSize: 9 }} axisLine={false} tickLine={false} />
                  <YAxis dataKey="state" type="category" width={110} tick={{ fill: '#64748b', fontSize: 9 }} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: 'rgba(30, 64, 175, 0.02)' }} />
                  <Bar dataKey="formalCredit" radius={[0, 4, 4, 0]} barSize={12} fill={COLORS.violet}>
                    {stateReadinessData.map((entry, i) => (
                      <Cell key={`mini-f-${i}`} fill={COLORS.violet} fillOpacity={0.8} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
