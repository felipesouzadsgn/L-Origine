import React from 'react';
import { Star } from 'lucide-react';
import { Section, SectionHeader } from './ui/Section';
import Card from './ui/Card';

const Testimonials: React.FC = () => {
  const reviews = [
    { text: "Serviço impecável, carta de vinhos incrível e um ambiente perfeito para conversar. Virou nosso restaurante favorito.", name: "Ana & Rodrigo", tag: "Casal" },
    { text: "Fechamos um contrato importante depois de um jantar aqui. Clima ideal para negócios sem perder a elegância.", name: "Ricardo M.", tag: "Negócios" },
    { text: "A experiência do menu degustação foi uma viagem de sabores. Simplesmente inesquecível.", name: "Juliana Costa", tag: "Aniversário" },
  ];

  return (
    <Section bg="#101015" id="depoimentos">
       <SectionHeader 
        title="O que dizem depois da sobremesa" 
        subtitle="Histórias reais de noites que começaram com uma reserva."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, idx) => (
          <Card key={idx} className="flex flex-col justify-between h-full">
            <div>
               <div className="flex text-secondary mb-4">
                 {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
               </div>
               <p className="text-lg italic opacity-90 mb-6 font-light font-heading">"{review.text}"</p>
            </div>
            <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
              <span className="font-semibold text-sm text-textMain">{review.name}</span>
              <span className="text-xs px-2 py-1 rounded bg-border text-gray-300">{review.tag}</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;