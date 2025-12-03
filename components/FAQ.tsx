import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section, SectionHeader } from './ui/Section';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button 
        className="w-full py-6 flex justify-between items-center text-left hover:text-secondary transition-colors group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg text-white group-hover:text-secondary transition-colors">{question}</span>
        <ChevronDown 
          size={20} 
          className={`transform transition-transform duration-300 text-textMuted group-hover:text-secondary ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-textMuted leading-relaxed pr-4">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => (
  <Section id="faq" className="max-w-4xl mx-auto">
    <SectionHeader title="Dúvidas Frequentes" />
    <div className="max-w-3xl mx-auto">
      <FAQItem 
        question="É necessário reservar com antecedência?"
        answer="Recomendamos fortemente a reserva antecipada, especialmente de quinta a sábado. Trabalhamos com número limitado de mesas para manter a experiência mais exclusiva."
      />
      <FAQItem 
        question="Vocês atendem restrições alimentares?"
        answer="Sim. Informe sua restrição no momento da reserva (vegetariano, vegano, sem glúten, etc.) e o chef adapta o menu sempre que possível."
      />
      <FAQItem 
        question="Existe taxa de rolha?"
        answer="Sim, trabalhamos com taxa de rolha por garrafa. Entre em contato para saber o valor atualizado."
      />
      <FAQItem 
        question="Há estacionamento ou valet?"
        answer="Temos parceria com estacionamento ao lado da casa e serviço de valet em dias selecionados (Sexta e Sábado)."
      />
    </div>
  </Section>
);

export default FAQ;