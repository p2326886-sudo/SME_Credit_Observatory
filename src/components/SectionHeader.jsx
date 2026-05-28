import { useEffect, useRef, useState } from 'react';

export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

export default function SectionHeader({ badge, title, subtitle, align = 'left' }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`mb-12 ${align === 'center' ? 'text-center' : ''} ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
          <span className="text-xs font-medium text-accent-blue tracking-wider uppercase">
            {badge}
          </span>
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl font-semibold text-steel-50 tracking-tight ${
          align === 'center' ? '' : ''
        }`}
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-steel-400 text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-px w-16 bg-gradient-to-r from-accent-blue to-accent-cyan ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
