import { Building2, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-navy-800/50">
      {/* Gradient line at top */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 border border-accent-blue/20 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-accent-blue" />
              </div>
              <div>
                <div className="text-sm font-semibold text-steel-100 tracking-wide">
                  INDIA SME CREDIT
                </div>
                <div className="text-xs text-steel-400 tracking-widest">
                  OBSERVATORY
                </div>
              </div>
            </div>
            <p className="text-sm text-steel-400 leading-relaxed max-w-xs">
              An institutional analytical study examining financing friction,
              working-capital stress, and digital credit readiness in India's
              MSME ecosystem.
            </p>
          </div>

          {/* Research */}
          <div>
            <h4 className="text-xs font-semibold text-steel-300 tracking-widest uppercase mb-4">
              Research Sections
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Executive Summary', href: '#executive-summary' },
                { label: 'Credit Friction Index', href: '#credit-friction' },
                { label: 'Working Capital Dashboard', href: '#working-capital' },
                { label: 'Policy Recommendations', href: '#policy' },
                { label: 'Methodology', href: '#methodology' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-steel-400 hover:text-accent-blue transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Attribution */}
          <div>
            <h4 className="text-xs font-semibold text-steel-300 tracking-widest uppercase mb-4">
              Researcher
            </h4>
            <div className="space-y-3">
              <p className="text-sm text-steel-200 font-medium">Priyanshu Gupta</p>
              <p className="text-sm text-steel-400">
                BBA (Final Year)<br />
                Lovely Professional University
              </p>
              <div className="flex items-center gap-2 text-sm text-steel-400 hover:text-accent-blue transition-colors">
                <Mail className="w-4 h-4" />
                <span>p2326886@gmail.com</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-semibold text-steel-300 tracking-widest uppercase mb-3">
                Data Sources
              </h4>
              <div className="flex flex-wrap gap-2">
                {['RBI', 'SIDBI', 'GSTN', 'World Bank', 'NABARD'].map((source) => (
                  <span
                    key={source}
                    className="px-2.5 py-1 text-xs text-steel-400 bg-navy-800/50 rounded-md border border-navy-700/30"
                  >
                    {source}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-800/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-steel-500 max-w-2xl leading-relaxed">
              © 2025 India SME Credit Intelligence Observatory. <strong>Independent Research Initiative.</strong><br />
              <span className="text-steel-600">This project is an independent analytical and educational research initiative created for portfolio and academic purposes.</span>
            </div>
            <div className="flex items-center gap-6 shrink-0">
              <span className="text-xs text-steel-500">
                LPU Academic Portfolio · Priyanshu Gupta
              </span>
              <div className="flex items-center gap-1.5 text-xs text-steel-500">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                <span>Research Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
