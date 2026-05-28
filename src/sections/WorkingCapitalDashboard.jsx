import { useState } from 'react';
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceArea,
} from 'recharts';
import { Activity, Clock, Droplets } from 'lucide-react';
import { workingCapitalTimeline } from '../data/researchData';

const tabs = [
  { id: 'ccc', label: 'Cash Conversion Cycle', icon: Clock },
  { id: 'rvp', label: 'Receivable vs Payable', icon: Activity },
  { id: 'liq', label: 'Liquidity Score', icon: Droplets },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="custom-tooltip">
      <p className="label text-steel-100 font-semibold text-sm mb-2">{label}</p>
      <div className="space-y-1.5">
        {payload.map((entry, i) => (
          <p key={i} className="text-xs text-steel-300 flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: entry.color }}
            />
            <span className="text-steel-400">{entry.name}:</span>
            <span className="text-steel-50 font-semibold">
              {entry.value}
              {entry.name === 'Liquidity Score' ? '/100' : ' days'}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

const CovidAnnotation = () => (
  <div className="flex items-center gap-2 mt-4 px-4 py-2.5 rounded-lg"
    style={{ background: 'rgba(244, 63, 94, 0.06)', border: '1px solid rgba(244, 63, 94, 0.15)' }}
  >
    <div className="w-1.5 h-1.5 rounded-full bg-accent-rose animate-pulse" />
    <p className="text-xs text-steel-400">
      <span className="text-accent-rose font-semibold">COVID-19 Disruption (Q4 FY20 – Q2 FY21):</span>{' '}
      Cash conversion cycle spiked to 142 days as receivable collection collapsed while payable obligations accelerated, creating acute liquidity stress across the MSME segment.
    </p>
  </div>
);

export default function WorkingCapitalDashboard() {
  const [activeTab, setActiveTab] = useState('ccc');

  return (
    <section id="working-capital" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-transparent to-accent-cyan" />
            <span className="text-xs font-semibold tracking-[0.2em] text-accent-cyan uppercase">
              Operational Analysis
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-steel-50 mb-4">
            Working-Capital <span className="gradient-text">Volatility Dashboard</span>
          </h2>
          <p className="text-steel-400 max-w-2xl text-base leading-relaxed">
            Time-series decomposition of cash conversion dynamics across FY20–FY24, tracking how COVID-induced
            receivable delays and payable compression created unprecedented liquidity stress for MSMEs.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 animate-fade-in-up delay-100">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-button flex items-center gap-2 ${
                  activeTab === tab.id ? 'active' : ''
                }`}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Chart Area */}
        <div className="glass-card p-6 lg:p-8 animate-fade-in-up delay-200">
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={400}>
              {activeTab === 'ccc' ? (
                <AreaChart data={workingCapitalTimeline} margin={{ top: 16, right: 24, left: 8, bottom: 8 }}>
                  <defs>
                    <linearGradient id="cccGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f43f5e" stopOpacity={0.35} />
                      <stop offset="50%" stopColor="#f59e0b" stopOpacity={0.15} />
                      <stop offset="100%" stopColor="#10b981" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(75, 100, 145, 0.15)" />
                  <XAxis
                    dataKey="quarter"
                    tick={{ fill: '#969cb3', fontSize: 11 }}
                    axisLine={{ stroke: 'rgba(75, 100, 145, 0.2)' }}
                    tickLine={false}
                    angle={-35}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis
                    tick={{ fill: '#969cb3', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    label={{
                      value: 'Days',
                      angle: -90,
                      position: 'insideLeft',
                      fill: '#969cb3',
                      fontSize: 11,
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceArea
                    x1="Q4 FY20"
                    x2="Q2 FY21"
                    fill="rgba(244, 63, 94, 0.06)"
                    stroke="rgba(244, 63, 94, 0.15)"
                    strokeDasharray="4 4"
                    label={{
                      value: 'COVID Shock',
                      position: 'insideTop',
                      fill: '#f43f5e',
                      fontSize: 10,
                      fontWeight: 600,
                    }}
                  />
                  <ReferenceLine
                    y={82}
                    stroke="#3b82f6"
                    strokeDasharray="6 4"
                    strokeWidth={1}
                    label={{
                      value: 'Pre-COVID Baseline (82)',
                      position: 'right',
                      fill: '#3b82f6',
                      fontSize: 10,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="cashConversionCycle"
                    name="Cash Conversion Cycle"
                    stroke="#f43f5e"
                    strokeWidth={2.5}
                    fill="url(#cccGradient)"
                    dot={{ fill: '#f43f5e', r: 3, strokeWidth: 0 }}
                    activeDot={{ r: 6, stroke: '#f43f5e', strokeWidth: 2, fill: '#ffffff' }}
                    animationDuration={1500}
                  />
                </AreaChart>
              ) : activeTab === 'rvp' ? (
                <LineChart data={workingCapitalTimeline} margin={{ top: 16, right: 24, left: 8, bottom: 8 }}>
                  <defs>
                    <linearGradient id="gapFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.12} />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(75, 100, 145, 0.15)" />
                  <XAxis
                    dataKey="quarter"
                    tick={{ fill: '#969cb3', fontSize: 11 }}
                    axisLine={{ stroke: 'rgba(75, 100, 145, 0.2)' }}
                    tickLine={false}
                    angle={-35}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis
                    tick={{ fill: '#969cb3', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    label={{
                      value: 'Days',
                      angle: -90,
                      position: 'insideLeft',
                      fill: '#969cb3',
                      fontSize: 11,
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
                    iconType="circle"
                    iconSize={8}
                  />
                  <ReferenceArea
                    x1="Q4 FY20"
                    x2="Q2 FY21"
                    fill="rgba(244, 63, 94, 0.06)"
                    stroke="rgba(244, 63, 94, 0.15)"
                    strokeDasharray="4 4"
                  />
                  <Line
                    type="monotone"
                    dataKey="receivableDays"
                    name="Receivable Days"
                    stroke="#f59e0b"
                    strokeWidth={2.5}
                    dot={{ fill: '#f59e0b', r: 3, strokeWidth: 0 }}
                    activeDot={{ r: 6, stroke: '#f59e0b', strokeWidth: 2, fill: '#ffffff' }}
                    animationDuration={1200}
                  />
                  <Line
                    type="monotone"
                    dataKey="payableDays"
                    name="Payable Days"
                    stroke="#06b6d4"
                    strokeWidth={2.5}
                    dot={{ fill: '#06b6d4', r: 3, strokeWidth: 0 }}
                    activeDot={{ r: 6, stroke: '#06b6d4', strokeWidth: 2, fill: '#ffffff' }}
                    animationDuration={1200}
                  />
                </LineChart>
              ) : (
                <LineChart data={workingCapitalTimeline} margin={{ top: 16, right: 24, left: 8, bottom: 8 }}>
                  <defs>
                    <linearGradient id="liqGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="#10b981" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(75, 100, 145, 0.15)" />
                  <XAxis
                    dataKey="quarter"
                    tick={{ fill: '#969cb3', fontSize: 11 }}
                    axisLine={{ stroke: 'rgba(75, 100, 145, 0.2)' }}
                    tickLine={false}
                    angle={-35}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fill: '#969cb3', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    label={{
                      value: 'Score',
                      angle: -90,
                      position: 'insideLeft',
                      fill: '#969cb3',
                      fontSize: 11,
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceArea
                    x1="Q4 FY20"
                    x2="Q2 FY21"
                    fill="rgba(244, 63, 94, 0.06)"
                    stroke="rgba(244, 63, 94, 0.15)"
                    strokeDasharray="4 4"
                  />
                  <ReferenceLine
                    y={50}
                    stroke="#f59e0b"
                    strokeDasharray="6 4"
                    strokeWidth={1}
                    label={{
                      value: 'Stress Threshold (50)',
                      position: 'right',
                      fill: '#f59e0b',
                      fontSize: 10,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="liquidityScore"
                    name="Liquidity Score"
                    stroke="#10b981"
                    strokeWidth={2.5}
                    dot={{ fill: '#10b981', r: 3, strokeWidth: 0 }}
                    activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2, fill: '#ffffff' }}
                    animationDuration={1200}
                  />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>

          <CovidAnnotation />

          {/* Key Metrics Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { label: 'Peak CCC', value: '142 days', sub: 'Q1 FY21', color: '#f43f5e' },
              { label: 'Current CCC', value: '68 days', sub: 'Q2 FY24', color: '#10b981' },
              { label: 'Lowest Liquidity', value: '21/100', sub: 'Q1 FY21', color: '#f43f5e' },
              { label: 'Current Liquidity', value: '70/100', sub: 'Q2 FY24', color: '#10b981' },
            ].map((metric, i) => (
              <div
                key={i}
                className="rounded-lg p-4"
                style={{
                  background: `linear-gradient(135deg, ${metric.color}08, ${metric.color}03)`,
                  border: `1px solid ${metric.color}20`,
                }}
              >
                <p className="text-xs text-steel-400 mb-1">{metric.label}</p>
                <p className="text-lg font-bold" style={{ color: metric.color }}>
                  {metric.value}
                </p>
                <p className="text-[10px] text-steel-500">{metric.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
