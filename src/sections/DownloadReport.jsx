import { BookOpen, Calendar, FileText, ExternalLink } from 'lucide-react';

export default function DownloadReport() {
  return (
    <section id="download-report" className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
          <span className="text-xs font-semibold tracking-[0.2em] text-accent-blue uppercase">
            Full Publication
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-steel-50 mb-4">
          Access Full <span className="gradient-text">Research Publication</span>
        </h2>
        <p className="text-steel-400 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
          Open the complete, independent analytical monograph to examine the granular frameworks, extensive dataset appendices, and bibliography.
        </p>
      </div>

      {/* Publication Access Card */}
      <div className="max-w-3xl mx-auto animate-fade-in-up delay-100">
        <div className="glass-card p-8 sm:p-10 border border-navy-700/60 shadow-lg relative overflow-hidden">
          {/* Subtle accent corner glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-accent-blue/5 pointer-events-none" />
          
          {/* Publication Metadata */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-steel-300 text-sm">
              <Calendar className="w-4 h-4 text-accent-blue" />
              <span>Independent Edition (2025)</span>
            </div>
            <div className="flex items-center gap-2 text-steel-300 text-sm">
              <FileText className="w-4 h-4 text-accent-cyan" />
              <span>18 Core Sections</span>
            </div>
            <div className="flex items-center gap-2 text-steel-300 text-sm">
              <BookOpen className="w-4 h-4 text-accent-emerald" />
              <span>Premium Editorial Layout</span>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="/report.html"
              className="flex-1 group glass-card flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-steel-100 font-semibold text-sm hover:border-accent-cyan/40 hover:bg-accent-cyan/5 transition-all cursor-pointer text-center decoration-none"
            >
              <FileText className="w-5 h-5 text-accent-cyan group-hover:scale-110 transition-transform" />
              Read Full Research (HTML)
            </a>
            <a
              href="/report.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-sm text-white transition-all cursor-pointer text-center decoration-none"
              style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #0369a1 100%)',
                boxShadow: '0 4px 20px rgba(30,64,175,0.2)',
              }}
            >
              <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Open Interactive Publication
            </a>
          </div>

          {/* Positioning & Disclaimer */}
          <div className="border-t border-navy-700/60 pt-6">
            <div className="flex items-start gap-3">
              <BookOpen className="w-4 h-4 text-steel-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-steel-400 text-xs leading-relaxed font-medium mb-1">
                  Independent Research Initiative
                </p>
                <p className="text-steel-500 text-xs leading-relaxed">
                  This project is an independent analytical and educational research initiative created for portfolio and academic purposes. All charts, summaries, and findings are aligned with the primary source monograph available at the publication link above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
