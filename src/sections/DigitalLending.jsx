import {
  AreaChart,
  Area,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, Zap, PieChart } from 'lucide-react';
import { digitalLendingData } from '../data/researchData';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="custom-tooltip">
      <p className="label text-sm font-semibold text-steel-100 mb-2">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} className="text-xs text-steel-300 leading-relaxed">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full mr-2"
            style={{ backgroundColor: entry.color }}
          />
          {entry.name}: {entry.value}
          {entry.name === 'Total Disbursal' ? ' Lakh Cr' : '%'}
        </p>
      ))}
    </div>
  );
};

const insights = [
  {
    icon: TrendingUp,
    title: 'Fintech Disruption',
    description:
      'Fintech-intermediated channels grew from 8% to 44% market share in just 5 years, fundamentally reshaping MSME credit intermediation.',
    color: 'accent-cyan',
  },
  {
    icon: Zap,
    title: 'Bank Share Erosion',
    description:
      'Traditional bank share declined from 52% to 34% as digital-first platforms captured the underserved micro-enterprise segment.',
    color: 'accent-amber',
  },
  {
    icon: PieChart,
    title: 'Volume Surge',
    description:
      'Total MSME credit disbursal grew 3× from ₹1.1L Cr to ₹3.4L Cr, with digital channels absorbing the majority of incremental volume.',
    color: 'accent-emerald',
  },
];

export default function DigitalLending() {
  return (
    <section id="digital-lending" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <p className="text-accent-cyan text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Digital Credit Evolution
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-steel-50 mb-4">
          Digital Lending{' '}
          <span className="gradient-text">Adoption Analysis</span>
        </h2>
        <p className="text-steel-400 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
          Tracking the structural transformation of MSME credit intermediation as
          digital channels reshape India's lending landscape.
        </p>
      </div>

      {/* Key Stat Callout */}
      <div className="animate-fade-in-up delay-100 mb-12">
        <div className="metric-highlight p-6 sm:p-8 max-w-3xl mx-auto text-center">
          <p className="text-steel-400 text-sm uppercase tracking-widest mb-2">
            Digital Lending Share Growth
          </p>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-2">
            8% → 44%
          </p>
          <p className="text-steel-300 text-sm">
            FY19 to FY24 — a 5.5× expansion in digital credit penetration
          </p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
        {/* Stacked Area Chart — Lender Market Share */}
        <div className="chart-container animate-fade-in-up delay-200">
          <h3 className="text-lg font-semibold text-steel-100 mb-1">
            Lender Market Share Evolution
          </h3>
          <p className="text-steel-500 text-xs mb-6">
            Percentage share by lender category (FY19–FY24)
          </p>
          <ResponsiveContainer width="100%" height={340}>
            <AreaChart data={digitalLendingData}>
              <defs>
                <linearGradient id="gradBank" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="gradNbfc" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="gradFintech" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(75,100,145,0.12)" />
              <XAxis
                dataKey="year"
                tick={{ fill: '#969cb3', fontSize: 12 }}
                axisLine={{ stroke: 'rgba(75,100,145,0.2)' }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: '#969cb3', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{ fontSize: 12, color: '#969cb3' }}
                iconType="circle"
                iconSize={8}
              />
              <Area
                type="monotone"
                dataKey="bankShare"
                name="Banks"
                stackId="1"
                stroke="#3b82f6"
                fill="url(#gradBank)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="nbfcShare"
                name="NBFCs"
                stackId="1"
                stroke="#8b5cf6"
                fill="url(#gradNbfc)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="digitalShare"
                name="Digital Channels"
                stackId="1"
                stroke="#06b6d4"
                fill="url(#gradFintech)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Composed Chart — Disbursal + Digital Share */}
        <div className="chart-container animate-fade-in-up delay-300">
          <h3 className="text-lg font-semibold text-steel-100 mb-1">
            Disbursal Volume &amp; Digital Penetration
          </h3>
          <p className="text-steel-500 text-xs mb-6">
            Total disbursal (₹ Lakh Cr) with digital share overlay
          </p>
          <ResponsiveContainer width="100%" height={340}>
            <ComposedChart data={digitalLendingData}>
              <defs>
                <linearGradient id="gradBar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#10b981" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(75,100,145,0.12)" />
              <XAxis
                dataKey="year"
                tick={{ fill: '#969cb3', fontSize: 12 }}
                axisLine={{ stroke: 'rgba(75,100,145,0.2)' }}
                tickLine={false}
              />
              <YAxis
                yAxisId="left"
                tick={{ fill: '#969cb3', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `₹${v}L`}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fill: '#969cb3', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{ fontSize: 12, color: '#969cb3' }}
                iconType="circle"
                iconSize={8}
              />
              <Bar
                yAxisId="left"
                dataKey="totalDisbursal"
                name="Total Disbursal"
                fill="url(#gradBar)"
                radius={[6, 6, 0, 0]}
                barSize={36}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="digitalShare"
                name="Digital Share"
                stroke="#f59e0b"
                strokeWidth={3}
                dot={{ fill: '#f59e0b', r: 5, strokeWidth: 2, stroke: '#ffffff' }}
                activeDot={{ r: 7, stroke: '#f59e0b', strokeWidth: 2 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`glass-card p-6 animate-fade-in-up delay-${(idx + 4) * 100}`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-${item.color}/10`}
              >
                <Icon className={`w-5 h-5 text-${item.color}`} />
              </div>
              <h4 className="text-steel-100 font-semibold text-sm mb-2">
                {item.title}
              </h4>
              <p className="text-steel-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
}
