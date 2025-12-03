import React from 'react';
import { Section, SectionHeader } from './ui/Section';

const Gallery: React.FC = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1550966871-3ed3c6227753?q=80&w=2070&auto=format&fit=crop", title: "O Salão" },
    { src: "https://images.unsplash.com/photo-1551024601-562963526310?q=80&w=1888&auto=format&fit=crop", title: "Nossos Vinhos" },
    { src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop", title: "Pratos Autorais" },
    { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop", title: "Detalhes" },
    { src: "https://images.unsplash.com/photo-1563507466357-1941d48c8b67?q=80&w=1887&auto=format&fit=crop", title: "Sobremesas" },
    { src: "https://images.unsplash.com/photo-1554679665-f5537f187268?q=80&w=1887&auto=format&fit=crop", title: "Chef" },
  ];

  return (
    <Section>
      <SectionHeader 
        title="Uma prévia do que te espera" 
        subtitle="Um pouco do que já servimos – o resto você descobre ao vivo."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-lg aspect-square bg-bgCard">
            <img 
              src={img.src} 
              alt={img.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-heading text-lg tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Gallery;