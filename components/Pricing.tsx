import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from './ui/Section';
import Card from './ui/Card';
import Button from './ui/Button';

const Pricing: React.FC = () => (
  <Section id="menu">
    <SectionHeader 
      title="Escolha a experiência ideal" 
      subtitle="Do jantar casual ao menu completo, você decide o ritmo da noite."
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      
      {/* À La Carte */}
      <Card className="h-full">
        <h3 className="text-2xl font-heading mb-2 text-white">À la carte</h3>
        <p className="text-sm text-textMuted mb-6 h-10">Para quem gosta de escolher cada detalhe.</p>
        <div className="mb-6">
          <span className="text-sm text-gray-500">Pratos principais a partir de</span>
          <div className="text-3xl font-semibold text-secondary">R$ 89</div>
        </div>
        <ul className="space-y-3 mb-8 text-sm text-gray-300">
          <li className="flex gap-2"><ArrowRight size={16} className="text-primary"/> Entradas e principais</li>
          <li className="flex gap-2"><ArrowRight size={16} className="text-primary"/> Carta de vinhos completa</li>
          <li className="flex gap-2"><ArrowRight size={16} className="text-primary"/> Visitas casuais</li>
        </ul>
        <Button variant="secondary" className="w-full">Ver opções</Button>
      </Card>
      
      {/* Degustação - Destaque */}
      <div className="relative transform md:-translate-y-4">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-lg">
          Mais Escolhido
        </div>
        <Card highlight className="h-full bg-[#1A1A24]">
          <h3 className="text-2xl font-heading mb-2 text-white">Menu Degustação</h3>
          <p className="text-sm text-textMuted mb-6 h-10">A melhor forma de conhecer a casa.</p>
          <div className="mb-6">
             <span className="text-sm text-gray-500">Por pessoa</span>
             <div className="text-3xl font-semibold text-secondary">R$ 280</div>
          </div>
          <ul className="space-y-3 mb-8 text-sm text-white">
            <li className="flex gap-2"><ArrowRight size={16} className="text-secondary"/> Sequência autoral (7 tempos)</li>
            <li className="flex gap-2"><ArrowRight size={16} className="text-secondary"/> Opção com harmonização</li>
            <li className="flex gap-2"><ArrowRight size={16} className="text-secondary"/> Quantidade limitada</li>
          </ul>
          <Button variant="primary" className="w-full">Reservar Degustação</Button>
        </Card>
      </div>

      {/* Eventos */}
      <Card className="h-full">
        <h3 className="text-2xl font-heading mb-2 text-white">Eventos & Grupos</h3>
        <p className="text-sm text-textMuted mb-6 h-10">Celebrações sem dor de cabeça.</p>
        <div className="mb-6">
          <span className="text-sm text-gray-500">Valores</span>
          <div className="text-3xl font-semibold text-white">Sob Consulta</div>
        </div>
        <ul className="space-y-3 mb-8 text-sm text-gray-300">
          <li className="flex gap-2"><ArrowRight size={16} className="text-primary"/> Menus fechados</li>
          <li className="flex gap-2"><ArrowRight size={16} className="text-primary"/> Espaço reservado</li>
          <li className="flex gap-2"><ArrowRight size={16} className="text-primary"/> Suporte corporativo</li>
        </ul>
        <Button variant="secondary" className="w-full">Falar com o time</Button>
      </Card>

    </div>
  </Section>
);

export default Pricing;