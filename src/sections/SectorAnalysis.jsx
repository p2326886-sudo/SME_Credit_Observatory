import { useState } from 'react';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from 'recharts';
import { Layers, ShieldOff, CheckCircle, AlertCircle } from 'lucide-react';
import { sectorFrictionData } from '../data/researchData';

const CHART_COLORS = {
  blue: '#1e40af',     // Oxford Blue
  cyan: '#0369a1',     // Steel Blue
  emerald: '#047857',  // Forest Emerald
  amber: '#b45309',    // Warm Amber
  rose: '#be123c',     // Crimson
  violet: '#6d28d9',   // Royal Purple
};

const tabs = [
  { id: 'overview', label: 'Multi-Dimensional Stress Profile', icon: Layers },
  { id: 'wcc', label: 'Working Capital Cycle Days', icon: ShieldOff },
  { id: 'informal', label: 'Informal Lending Dependence', icon: AlertCircle },
  { id: 'digital', label: 'Digital Readiness Indicators', icon: CheckCircle },
];

// Top 5 sectors by score for Radar Chart
const top5 = [...sectorFrictionData]
  .sort((a, b) => b.score - a.score)
  .slice(0, 5);

const radarColors = [CHART_COLORS.rose, CHART_COLORS.amber, CHART_COLORS.violet, CHART_COLORS.cyan, CHART_COLORS.blue];

// Helper to convert digital readiness to numerical values for charts
const getDigitalScore = (label) => {
  if (label === 'High') return 85;
  if (label === 'Medium' || label === 'Improving') return 55;
  if (label === 'Low-Med') return 40;
  return 20; // Low
};

// Help to convert credit access to numerical values
const getAccessScore = (label) => {
  if (label === 'Good') return 85;
  if (label === 'Moderate') return 55;
  if (label === 'Low-Mod') return 40;
  return 20; // Low
};

// Radar Dimensions
const radarDimensions = [
  { key: 'score', label: 'Friction Index' },
  { key: 'informalDependence', label: 'Informal Dependence' },
  { key: 'wcCycleMax', label: 'WC Cycle Max (Days)' },
  { key: 'digitalReadinessVal', label: 'Digital Access' },
  { key: 'creditAccessVal', label: 'Credit Access Barrier' }
];

const radarData = radarDimensions.map((dim) => {
  const entry = { dimension: dim.label };
  top5.forEach((sector) => {
    let val = 0;
    if (dim.key === 'digitalReadinessVal') {
      val = getDigitalScore(sector.digitalReadiness);
    } else if (dim.key === 'creditAccessVal') {
      // Invert so higher score represents higher barrier
      val = 100 - getAccessScore(sector.creditAccess);
    } else if (dim.key === 'wcCycleMax') {
      // Scale down max cycle (up to 180 days) to 0-100 scale
      val = Math.round((sector.wcCycleMax / 180) * 100);
    } else {
      val = sector[dim.key] || sector.score;
    }
    entry[sector.sector] = val;
  });
  return entry;
});

const sortedByScore = [...sectorFrictionData].sort(
  (a, b) => b.score - a.score
);

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="custom-tooltip">
      <p className="label text-steel-100 font-semibold text-sm mb-2">{payload[0].payload.sector}</p>
      <div className="space-y-1">
        {payload.map((entry, i) => (
          <p key={i} className="text-xs text-steel-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: entry.color }} />
            <span className="text-steel-400">{entry.name}:</span>
            <span className="text-steel-50 font-semibold">
              {entry.value}
              {entry.name.includes('Cycle') ? ' days' : '%'}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

const RadarTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="custom-tooltip">
      <p className="label text-steel-100 font-semibold text-sm mb-2">{label}</p>
      <div className="space-y-1">
        {payload.map((entry, i) => (
          <p key={i} className="text-xs text-steel-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: entry.color }} />
            <span className="text-steel-400 truncate max-w-[120px]">{entry.name}:</span>
            <span className="text-steel-50 font-semibold">{entry.value}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default function SectorAnalysis() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="sector-analysis" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-transparent to-accent-violet" />
            <span className="text-xs font-semibold tracking-[0.2em] text-accent-violet uppercase">
              Sectoral Intelligence
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-steel-50 mb-4">
            Sectoral <span className="gradient-text">Credit &amp; Working-Capital Intelligence</span>
          </h2>
          <p className="text-steel-400 max-w-2xl text-base leading-relaxed">
            A comprehensive sectoral assessment mapping Table 7.1 metrics from the primary source research to profile credit access, liquidity cycle lengths, and informal capital dependencies.
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
        <div className="glass-card p-6 lg:p-8 mb-8 animate-fade-in-up delay-200">
          <div className="chart-container">
            {activeTab === 'overview' ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-steel-200">
                    Multi-Dimensional Stress Profile — Top 5 High-Friction Sectors
                  </h3>
                </div>
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  {top5.map((s, i) => (
                    <span key={i} className="flex items-center gap-1.5 text-xs text-steel-400">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: radarColors[i] }} />
                      {s.sector}
                    </span>
                  ))}
                </div>
                <ResponsiveContainer width="100%" height={420}>
                  <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
                    <PolarGrid stroke="rgba(15, 23, 42, 0.08)" />
                    <PolarAngleAxis
                      dataKey="dimension"
                      tick={{ fill: '#64748b', fontSize: 11 }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 100]}
                      tick={{ fill: '#64748b', fontSize: 9 }}
                      axisLine={false}
                    />
                    <Tooltip content={<RadarTooltip />} />
                    {top5.map((sector, i) => (
                      <Radar
                        key={sector.sector}
                        name={sector.sector}
                        dataKey={sector.sector}
                        stroke={radarColors[i]}
                        fill={radarColors[i]}
                        fillOpacity={0.05}
                        strokeWidth={2}
                        animationDuration={1200}
                      />
                    ))}
                  </RadarChart>
                </ResponsiveContainer>
              </>
            ) : activeTab === 'wcc' ? (
              <>
                <h3 className="text-sm font-semibold text-steel-200 mb-4">
                  Working Capital Conversion Cycle Duration Range (Days)
                </h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={sortedByScore}
                    margin={{ top: 8, right: 24, left: 8, bottom: 80 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(15, 23, 42, 0.05)" />
                    <XAxis
                      dataKey="sector"
                      tick={{ fill: '#64748b', fontSize: 11 }}
                      axisLine={{ stroke: 'rgba(15, 23, 42, 0.1)' }}
                      tickLine={false}
                      angle={-40}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis
                      tick={{ fill: '#64748b', fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                      domain={[0, 200]}
                      label={{ value: 'Days', angle: -90, position: 'insideLeft', fill: '#64748b' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Bar
                      dataKey="wcCycleMin"
                      name="Min Cycle Days"
                      fill={CHART_COLORS.cyan}
                      radius={[4, 4, 0, 0]}
                      barSize={16}
                      animationDuration={1200}
                    />
                    <Bar
                      dataKey="wcCycleMax"
                      name="Max Cycle Days"
                      fill={CHART_COLORS.rose}
                      radius={[4, 4, 0, 0]}
                      barSize={16}
                      animationDuration={1200}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </>
            ) : activeTab === 'informal' ? (
              <>
                <h3 className="text-sm font-semibold text-steel-200 mb-4">
                  Informal Lending Dependence by Sector (%)
                </h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={[...sectorFrictionData].sort((a, b) => b.informalDependence - a.informalDependence)}
                    margin={{ top: 8, right: 24, left: 8, bottom: 80 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(15, 23, 42, 0.05)" />
                    <XAxis
                      dataKey="sector"
                      tick={{ fill: '#64748b', fontSize: 11 }}
                      axisLine={{ stroke: 'rgba(15, 23, 42, 0.1)' }}
                      tickLine={false}
                      angle={-40}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis
                      tick={{ fill: '#64748b', fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                      domain={[0, 100]}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                      dataKey="informalDependence"
                      name="Informal Dependence %"
                      radius={[6, 6, 0, 0]}
                      barSize={32}
                      animationDuration={1200}
                    >
                      {[...sectorFrictionData]
                        .sort((a, b) => b.informalDependence - a.informalDependence)
                        .map((entry, i) => (
                          <Cell
                            key={`cell-${i}`}
                            fill={entry.informalDependence > 70 ? CHART_COLORS.rose : entry.informalDependence >= 45 ? CHART_COLORS.amber : CHART_COLORS.emerald}
                            fillOpacity={0.85}
                          />
                        ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </>
            ) : (
              <>
                <h3 className="text-sm font-semibold text-steel-200 mb-4">
                  Digital Readiness Index Values by Sector (Scaled 0-100)
                </h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={sortedByScore}
                    margin={{ top: 8, right: 24, left: 8, bottom: 80 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(15, 23, 42, 0.05)" />
                    <XAxis
                      dataKey="sector"
                      tick={{ fill: '#64748b', fontSize: 11 }}
                      axisLine={{ stroke: 'rgba(15, 23, 42, 0.1)' }}
                      tickLine={false}
                      angle={-40}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis
                      tick={{ fill: '#64748b', fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                      domain={[0, 100]}
                    />
                    <Tooltip />
                    <Bar
                      dataKey={(item) => getDigitalScore(item.digitalReadiness)}
                      name="Digital Readiness Score"
                      radius={[6, 6, 0, 0]}
                      barSize={32}
                      animationDuration={1200}
                    >
                      {sortedByScore.map((entry, i) => {
                        const val = getDigitalScore(entry.digitalReadiness);
                        return (
                          <Cell
                            key={`cell-${i}`}
                            fill={val > 70 ? CHART_COLORS.emerald : val >= 50 ? CHART_COLORS.cyan : CHART_COLORS.amber}
                            fillOpacity={0.85}
                          />
                        );
                      })}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </>
            )}
          </div>
        </div>

        {/* Comparison Table (Direct copy of Table 7.1 from report.html) */}
        <div className="glass-card p-6 lg:p-8 animate-fade-in-up delay-300 overflow-x-auto">
          <h3 className="text-lg font-semibold text-steel-100 mb-6">
            Table 7.1 — Sector-wise Credit &amp; Working-Capital Stress Matrix
          </h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-navy-700 bg-navy-800/40">
                <th className="text-left py-3.5 px-4 text-steel-400 font-semibold text-xs uppercase tracking-wider">
                  Sector
                </th>
                <th className="text-center py-3.5 px-4 text-steel-400 font-semibold text-xs uppercase tracking-wider">
                  Credit Access
                </th>
                <th className="text-center py-3.5 px-4 text-steel-400 font-semibold text-xs uppercase tracking-wider">
                  WC Cycle (Days)
                </th>
                <th className="text-center py-3.5 px-4 text-steel-400 font-semibold text-xs uppercase tracking-wider">
                  Collateral Profile
                </th>
                <th className="text-center py-3.5 px-4 text-steel-400 font-semibold text-xs uppercase tracking-wider">
                  Digital Readiness
                </th>
                <th className="text-center py-3.5 px-4 text-steel-400 font-semibold text-xs uppercase tracking-wider">
                  Overall Stress
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedByScore.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-navy-800/40 transition-colors hover:bg-navy-800/20"
                >
                  <td className="py-3.5 px-4 text-steel-100 font-medium">{row.sector}</td>
                  <td className="py-3.5 px-4 text-center">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded text-xs font-semibold ${
                        row.creditAccess === 'Good'
                          ? 'bg-green-100 text-green-800'
                          : row.creditAccess.includes('Low')
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {row.creditAccess}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center text-steel-300 font-mono">
                    {row.wcCycleMin}–{row.wcCycleMax}
                  </td>
                  <td className="py-3.5 px-4 text-center text-steel-300">{row.collateralProfile}</td>
                  <td className="py-3.5 px-4 text-center">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded text-xs font-semibold ${
                        row.digitalReadiness === 'High'
                          ? 'bg-blue-100 text-blue-800'
                          : row.digitalReadiness === 'Low'
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {row.digitalReadiness}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span
                      className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-bold"
                      style={{
                        background:
                          row.overallStress === 'Critical'
                            ? 'rgba(190, 18, 60, 0.12)'
                            : row.overallStress === 'High'
                            ? 'rgba(180, 83, 9, 0.12)'
                            : row.overallStress === 'Medium'
                            ? 'rgba(3, 105, 161, 0.12)'
                            : 'rgba(4, 120, 87, 0.12)',
                        color:
                          row.overallStress === 'Critical'
                            ? '#be123c'
                            : row.overallStress === 'High'
                            ? '#b45309'
                            : row.overallStress === 'Medium'
                            ? '#0369a1'
                            : '#047857',
                      }}
                    >
                      {row.overallStress}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
