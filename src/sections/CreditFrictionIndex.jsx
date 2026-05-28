import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from 'recharts';
import { AlertTriangle, TrendingDown, Shield } from 'lucide-react';
import { sectorFrictionData } from '../data/researchData';

const COLORS = {
  rose: '#be123c',     // Crimson
  amber: '#b45309',    // Warm Amber
  emerald: '#047857',  // Forest Emerald
};

const getBarColor = (value) => {
  if (value > 70) return COLORS.rose;
  if (value >= 50) return COLORS.amber;
  return COLORS.emerald;
};

const sortedData = [...sectorFrictionData].sort(
  (a, b) => b.score - a.score
);

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const data = payload[0].payload;
  return (
    <div className="custom-tooltip">
      <p className="label text-steel-100 font-semibold text-sm mb-2">{data.sector}</p>
      <div className="space-y-1">
        <p className="text-xs text-steel-300">
          <span className="text-accent-blue font-medium">Credit Friction Index:</span>{' '}
          <span className="text-steel-50 font-semibold">{data.score}/100</span>
        </p>
        <p className="text-xs text-steel-300">
          <span className="text-accent-rose font-medium">Overall Stress:</span>{' '}
          <span className="text-steel-50 font-semibold">{data.overallStress}</span>
        </p>
        <p className="text-xs text-steel-300">
          <span className="text-accent-cyan font-medium">Credit Access:</span>{' '}
          <span className="text-steel-50">{data.creditAccess}</span>
        </p>
        <p className="text-xs text-steel-300">
          <span className="text-accent-amber font-medium">WC Cycle:</span>{' '}
          <span className="text-steel-50">{data.wcCycleMin}–{data.wcCycleMax} days</span>
        </p>
        <p className="text-xs text-steel-300">
          <span className="text-accent-emerald font-medium">Collateral Profile:</span>{' '}
          <span className="text-steel-50">{data.collateralProfile}</span>
        </p>
        <p className="text-xs text-steel-300">
          <span className="text-accent-violet font-medium">Informal Dependence:</span>{' '}
          <span className="text-steel-50">{data.informalDependence}%</span>
        </p>
      </div>
    </div>
  );
};

const insights = [
  {
    icon: AlertTriangle,
    color: 'accent-rose',
    bgColor: 'rgba(190, 18, 60, 0.08)',
    borderColor: 'rgba(190, 18, 60, 0.3)',
    title: 'Critical Friction Zones',
    stat: 'Agro & Construction',
    description:
      'Agro-processing and sub-contracted civil construction register friction scores at or above 85, driven by highly seasonal cycles and thin/absent asset profiles.',
  },
  {
    icon: TrendingDown,
    color: 'accent-amber',
    bgColor: 'rgba(180, 83, 9, 0.08)',
    borderColor: 'rgba(180, 83, 9, 0.3)',
    title: 'Informal Dependancy Spikes',
    stat: '71–82%',
    description:
      'High-stress sectors demonstrate severe structural lock-in, relying on arhatiyas and trade credit carrying interest premiums of 24–36% per annum.',
  },
  {
    icon: Shield,
    color: 'accent-emerald',
    bgColor: 'rgba(4, 120, 87, 0.08)',
    borderColor: 'rgba(4, 120, 87, 0.3)',
    title: 'Digital Benchmark Baseline',
    stat: 'IT & Digital Services',
    description:
      'IT and Digital Services show the lowest credit friction, leveraging cash-flow-based profiles and high digital payment registries.',
  },
];

export default function CreditFrictionIndex() {
  return (
    <section id="credit-friction" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-transparent to-accent-blue" />
            <span className="text-xs font-semibold tracking-[0.2em] text-accent-blue uppercase">
              Analytical Framework
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-steel-50 mb-4">
            MSME <span className="gradient-text">Credit Friction Index Analysis</span>
          </h2>
          <p className="text-steel-400 max-w-2xl text-base leading-relaxed">
            A composite analytical framework evaluating the structural distance between SME credit demand and formal institutional supply across 9 key industry sectors.
          </p>
        </div>

        {/* Chart */}
        <div className="glass-card p-6 lg:p-8 mb-8 animate-fade-in-up delay-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-steel-100">
              Sectoral Credit Friction Scores (0–100)
            </h3>
            <div className="flex items-center gap-4 text-xs text-steel-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: COLORS.rose }} />
                Critical (&gt;70)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: COLORS.amber }} />
                Medium (50–70)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: COLORS.emerald }} />
                Low (&lt;50)
              </span>
            </div>
          </div>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height={440}>
              <BarChart
                data={sortedData}
                layout="vertical"
                margin={{ top: 8, right: 40, left: 16, bottom: 8 }}
              >
                <defs>
                  <linearGradient id="barGradientRose" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#be123c" stopOpacity={0.7} />
                    <stop offset="100%" stopColor="#be123c" stopOpacity={1} />
                  </linearGradient>
                  <linearGradient id="barGradientAmber" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#b45309" stopOpacity={0.7} />
                    <stop offset="100%" stopColor="#b45309" stopOpacity={1} />
                  </linearGradient>
                  <linearGradient id="barGradientEmerald" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#047857" stopOpacity={0.7} />
                    <stop offset="100%" stopColor="#047857" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(15, 23, 42, 0.05)"
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  axisLine={{ stroke: 'rgba(15, 23, 42, 0.1)' }}
                  tickLine={false}
                  label={{
                    value: 'Credit Friction Index Value',
                    position: 'insideBottom',
                    offset: -2,
                    fill: '#64748b',
                    fontSize: 11,
                  }}
                />
                <YAxis
                  dataKey="sector"
                  type="category"
                  width={150}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(30, 64, 175, 0.02)' }} />
                <ReferenceLine
                  x={40}
                  stroke="#1e40af"
                  strokeDasharray="6 4"
                  strokeWidth={1.5}
                  label={{
                    value: 'Low Friction Benchmark (40)',
                    position: 'top',
                    fill: '#1e40af',
                    fontSize: 11,
                    fontWeight: 600,
                  }}
                />
                <Bar
                  dataKey="score"
                  radius={[0, 6, 6, 0]}
                  barSize={28}
                  animationDuration={1200}
                  animationEasing="ease-out"
                >
                  {sortedData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        entry.score > 70
                          ? 'url(#barGradientRose)'
                          : entry.score >= 50
                          ? 'url(#barGradientAmber)'
                          : 'url(#barGradientEmerald)'
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 animate-fade-in-up"
                style={{
                  animationDelay: `${300 + index * 100}ms`,
                  borderLeft: `3px solid ${insight.borderColor}`,
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: insight.bgColor }}
                  >
                    <Icon size={18} className={`text-${insight.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-steel-100">{insight.title}</p>
                    <p className={`text-xs font-bold text-${insight.color}`}>{insight.stat}</p>
                  </div>
                </div>
                <p className="text-xs text-steel-400 leading-relaxed">{insight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
