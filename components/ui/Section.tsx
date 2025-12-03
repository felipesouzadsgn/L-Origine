import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: string;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, bg = 'transparent' }) => (
  <section 
    id={id} 
    className={`w-full py-16 md:py-24 px-4 md:px-8 ${className}`}
    style={{ backgroundColor: bg }}
  >
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 
      className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight text-textMain font-heading"
    >
      {title}
    </h2>
    {subtitle && (
      <p 
        className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-textMuted font-body"
      >
        {subtitle}
      </p>
    )}
  </div>
);