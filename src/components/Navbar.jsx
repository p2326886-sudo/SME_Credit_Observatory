import { useState, useEffect, useCallback } from 'react';
import { Building2, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Summary', href: '#executive-summary' },
  { label: 'Findings', href: '#key-findings' },
  { label: 'Friction', href: '#stress-indicators' },
  { label: 'Working Capital', href: '#working-capital' },
  { label: 'Sectors', href: '#sector-analysis' },
  { label: 'States', href: '#state-readiness' },
  { label: 'Digital', href: '#digital-lending' },
  { label: 'Policy', href: '#policy' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Researcher', href: '#researcher' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  /* ── Scroll listener ─────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── IntersectionObserver for active section ─────────────── */
  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -40% 0px', threshold: 0.1 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* ── Smooth scroll handler ───────────────────────────────── */
  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setMobileOpen(false);
    },
    []
  );

  /* ── Lock body scroll when mobile menu open ──────────────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(59,130,246,0.08)]'
          : 'bg-transparent'
      }`}
    >
      {/* ── Top accent line ──────────────────────────────────── */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          {/* ── Logo ─────────────────────────────────────────── */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileOpen(false);
            }}
            className="group flex items-center gap-2.5 shrink-0"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-blue/10 ring-1 ring-accent-blue/20 transition-all duration-300 group-hover:bg-accent-blue/20 group-hover:ring-accent-blue/40">
              <Building2 className="h-4 w-4 text-accent-blue" />
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-steel-200 uppercase">
                India SME Credit
              </span>
              <span className="text-[10px] font-medium tracking-[0.18em] text-steel-400 uppercase">
                Observatory
              </span>
            </span>
          </a>

          {/* ── Desktop Navigation ───────────────────────────── */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`nav-link px-2.5 py-2 text-[11px] font-medium tracking-wide uppercase whitespace-nowrap ${
                    activeSection === item.href.slice(1) ? 'active' : ''
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="/report.html"
              className="text-[11px] font-semibold text-white bg-accent-blue hover:bg-accent-blue/90 px-3.5 py-2 rounded-lg transition-colors decoration-none whitespace-nowrap"
            >
              Read Research
            </a>
          </div>

          {/* ── Mobile Toggle ────────────────────────────────── */}
          <button
            id="mobile-nav-toggle"
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg text-steel-300 hover:text-steel-50 hover:bg-navy-800/60 transition-colors duration-200"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────────── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy-950/95 backdrop-blur-xl border-t border-navy-700/30 px-4 pb-6 pt-2">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`nav-link block px-3 py-3 text-[13px] font-medium tracking-wide uppercase border-b border-navy-800/40 last:border-b-0 ${
                activeSection === item.href.slice(1) ? 'active' : ''
              }`}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
