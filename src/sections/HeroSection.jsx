import { useCallback } from 'react';
import { ChevronDown, ArrowRight, BookOpen } from 'lucide-react';

export default function HeroSection() {
  const scrollTo = useCallback((href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Animated Gradient Mesh Background ──────────────── */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

        {/* Animated orbs */}
        <div
          className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, var(--color-accent-blue), transparent 70%)',
            animation: 'heroOrb1 18s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, var(--color-accent-cyan), transparent 70%)',
            animation: 'heroOrb2 22s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-[30%] right-[15%] w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, var(--color-accent-emerald), transparent 70%)',
            animation: 'heroOrb3 15s ease-in-out infinite',
          }}
        />

        {/* Noise-style overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.08) 1px, transparent 1px),
                              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── Floating Geometric Decorations ─────────────────── */}
      <div className="absolute inset-0 -z-[5] pointer-events-none" aria-hidden="true">
        {/* Diamond */}
        <div
          className="absolute top-[18%] left-[8%] w-4 h-4 border border-accent-blue/15 rotate-45"
          style={{ animation: 'heroFloat 6s ease-in-out infinite' }}
        />
        {/* Circle */}
        <div
          className="absolute top-[25%] right-[12%] w-3 h-3 rounded-full border border-accent-cyan/12"
          style={{ animation: 'heroFloat 8s ease-in-out infinite 1s' }}
        />
        {/* Plus */}
        <div
          className="absolute bottom-[30%] left-[15%] text-accent-emerald/10 text-2xl font-light select-none"
          style={{ animation: 'heroFloat 7s ease-in-out infinite 0.5s' }}
        >
          +
        </div>
        {/* Ring */}
        <div
          className="absolute bottom-[22%] right-[18%] w-6 h-6 rounded-full border border-accent-violet/10"
          style={{ animation: 'heroFloat 9s ease-in-out infinite 2s' }}
        />
        {/* Small diamond */}
        <div
          className="absolute top-[60%] left-[80%] w-2.5 h-2.5 border border-accent-amber/10 rotate-45"
          style={{ animation: 'heroFloat 5s ease-in-out infinite 1.5s' }}
        />
        {/* Dotted line */}
        <div
          className="absolute top-[45%] left-[5%] w-20 h-[1px]"
          style={{
            background: 'repeating-linear-gradient(90deg, rgba(59,130,246,0.08) 0px, rgba(59,130,246,0.08) 3px, transparent 3px, transparent 8px)',
            animation: 'heroFloat 10s ease-in-out infinite 3s',
          }}
        />
      </div>

      {/* ── Content Grid ───────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-screen">
        {/* Left Column: Editorial Headings & Call to Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left animate-fade-in">
          {/* Sleek Pill Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['INDEPENDENT ANALYSIS', 'FINANCIAL RESILIENCE', 'EMERGING ENTERPRISES'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[9px] font-bold tracking-wider text-accent-blue bg-accent-blue/10 border border-accent-blue/20 uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Main Editorial Title */}
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-navy-50 mb-6">
            India SME Credit <br />
            <span className="gradient-text font-serif italic font-semibold">&amp; Readiness Observatory</span>
          </h1>

          {/* Corporate Narrative Subtitle */}
          <p className="text-steel-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            Financing Friction, Working-Capital Stress &amp; Digital Credit Readiness in Emerging Business Ecosystems.
          </p>

          {/* Author Meta Details */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-8 text-[11px] text-steel-500 font-semibold tracking-wide uppercase">
            <span className="text-steel-200">Priyanshu Gupta</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
            <span>Lovely Professional University</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
            <span>BBA (Final Year)</span>
          </div>

          {/* Pointer-Based Primary Actions */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('#working-capital')}
              className="group inline-flex items-center gap-2 rounded-xl bg-accent-blue hover:bg-accent-blue/90 text-white px-6 py-4 text-sm font-semibold shadow-md shadow-accent-blue/15 hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-white"
              style={{ color: '#ffffff' }}
            >
              Explore Dashboard
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="/report.html"
              className="group inline-flex items-center gap-2 rounded-xl border border-navy-700/60 bg-white hover:bg-navy-800/10 hover:text-accent-blue text-steel-200 px-6 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 decoration-none cursor-pointer"
            >
              <BookOpen className="h-4 w-4 text-accent-cyan" />
              Read Research Monograph
            </a>
          </div>
        </div>

        {/* Right Column: High-Impact Interactive Index Dashboard */}
        <div className="lg:col-span-5 flex justify-center animate-fade-in-up delay-200">
          <div className="glass-card p-6 sm:p-8 w-full max-w-[420px] relative overflow-hidden border border-navy-700/50 shadow-xl bg-white">
            {/* Corner Decorative Aura */}
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-accent-blue/5 pointer-events-none" />

            {/* Composite Index Metric */}
            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-widest text-accent-cyan uppercase block mb-1">
                COMPOSITE LENDING INDEX
              </span>
              <div className="flex items-baseline gap-3">
                <span className="text-6xl font-black text-navy-50 font-sans tracking-tight leading-none">
                  68.5
                </span>
                <span className="text-xs font-bold text-accent-rose bg-accent-rose/10 px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0">
                  High Stress
                </span>
              </div>
            </div>

            {/* Dimensional Progress Indicators */}
            <div className="space-y-4 mb-6">
              {[
                { label: 'Credit Friction Index', value: 68.5, max: 100, color: 'bg-accent-blue', unit: '/100' },
                { label: 'Working-Capital Cycle', value: 68, max: 150, color: 'bg-accent-amber', unit: ' days' },
                { label: 'Formal Credit Access', value: 14, max: 100, color: 'bg-accent-rose', unit: '%' },
                { label: 'Digital Lending Share', value: 44, max: 100, color: 'bg-accent-emerald', unit: '%' },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-steel-400">{item.label}</span>
                    <span className="text-steel-100">{item.value}{item.unit}</span>
                  </div>
                  <div className="progress-bar bg-navy-800">
                    <div
                      className={`progress-fill ${item.color}`}
                      style={{ width: `${(item.value / item.max) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Sub-Metrics Footer Grid */}
            <div className="grid grid-cols-3 gap-3 border-t border-navy-700/50 pt-5 text-center">
              {[
                { value: '14%', label: 'PENETRATION' },
                { value: '₹25T', label: 'CREDIT GAP' },
                { value: '30%', label: 'GDP SHARE' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="text-base font-bold text-navy-50">{item.value}</div>
                  <div className="text-[8px] font-bold text-steel-500 tracking-wider uppercase mt-0.5">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll-Down Indicator ──────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-800 opacity-0">
        <span className="text-[10px] font-medium tracking-[0.2em] text-steel-500 uppercase">
          Scroll
        </span>
        <ChevronDown
          className="h-5 w-5 text-steel-500"
          style={{ animation: 'heroChevron 2s ease-in-out infinite' }}
        />
      </div>

      {/* ── Bottom gradient fade ───────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />

      {/* ── Inline keyframes for hero animations ───────────── */}
      <style>{`
        @keyframes heroOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(60px, 40px) scale(1.05); }
          66% { transform: translate(-30px, 60px) scale(0.97); }
        }
        @keyframes heroOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, -30px) scale(1.08); }
          66% { transform: translate(40px, -50px) scale(0.95); }
        }
        @keyframes heroOrb3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 30px) scale(1.06); }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0) rotate(var(--float-rotate, 0deg)); opacity: 0.6; }
          50% { transform: translateY(-12px) rotate(var(--float-rotate, 0deg)); opacity: 1; }
        }
        @keyframes heroChevron {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(6px); opacity: 0.9; }
        }
      `}</style>
    </section>
  );
}
