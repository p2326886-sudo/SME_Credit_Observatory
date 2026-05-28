import { MapPin, GraduationCap, Briefcase, Lightbulb, Target } from 'lucide-react';
import { researcherProfile } from '../data/researchData';

export default function AboutResearcher() {
  return (
    <section id="researcher" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <p className="text-accent-emerald text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Research Author
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-steel-50 mb-4">
          About the{' '}
          <span className="gradient-text">Researcher</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        {/* Left Column — Profile */}
        <div className="lg:col-span-2 animate-fade-in-up delay-100">
          <div className="glass-card p-8 text-center">
            {/* Avatar */}
            <div className="w-28 h-28 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br from-accent-blue via-accent-cyan to-accent-emerald shadow-lg shadow-accent-blue/20">
              <span className="text-3xl font-bold keep-white tracking-wide">
                PG
              </span>
            </div>

            {/* Name & Role */}
            <h3 className="text-2xl font-serif font-bold text-steel-50 mb-1">
              {researcherProfile.name}
            </h3>
            <p className="text-accent-cyan text-sm font-medium mb-4">
              {researcherProfile.role}
            </p>

            {/* Details */}
            <div className="space-y-3 text-left border-t border-navy-700/60 pt-5">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-4 h-4 text-accent-blue shrink-0" />
                <span className="text-steel-300 text-sm">
                  {researcherProfile.institution}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-accent-violet shrink-0" />
                <span className="text-steel-300 text-sm">
                  {researcherProfile.program}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent-rose shrink-0" />
                <span className="text-steel-300 text-sm">
                  {researcherProfile.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column — Motivation, Competencies, Interests */}
        <div className="lg:col-span-3 space-y-6 animate-fade-in-up delay-200">
          {/* Research Motivation */}
          <div className="glass-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent-amber/10 flex items-center justify-center">
                <Lightbulb className="w-4.5 h-4.5 text-accent-amber" />
              </div>
              <h4 className="text-lg font-semibold text-steel-100">
                Research Motivation
              </h4>
            </div>
            <p className="text-steel-300 text-sm sm:text-base leading-relaxed italic border-l-2 border-accent-amber/40 pl-4">
              "{researcherProfile.researchMotivation}"
            </p>
          </div>

          {/* Competencies */}
          <div className="glass-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                <Target className="w-4.5 h-4.5 text-accent-blue" />
              </div>
              <h4 className="text-lg font-semibold text-steel-100">
                Core Competencies
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {researcherProfile.competencies.map((comp, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-navy-800/60 border border-navy-700/40"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                  <span className="text-steel-300 text-sm">{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Research Interests */}
          <div className="glass-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
                <Lightbulb className="w-4.5 h-4.5 text-accent-cyan" />
              </div>
              <h4 className="text-lg font-semibold text-steel-100">
                Research Interests
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {researcherProfile.researchInterests.map((interest, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 hover:bg-accent-cyan/20 transition-colors cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
}
