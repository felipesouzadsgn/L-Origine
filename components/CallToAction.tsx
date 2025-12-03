import React from 'react';
import Button from './ui/Button';

const CallToAction: React.FC = () => (
  <section className="py-24 px-4 relative overflow-hidden">
    {/* Fundo Gradiente */}
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-bgMain z-0"></div>
    
    <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-heading mb-6 text-white">Sua próxima grande lembrança começa com uma reserva.</h2>
        <p className="text-lg text-gray-300">Mesas limitadas por noite para manter a qualidade do serviço. Garanta a sua agora.</p>
      </div>
      <div className="flex flex-col gap-4 w-full md:w-auto">
        <Button variant="primary" className="w-full md:w-auto text-lg py-4">Garantir minha reserva</Button>
        <Button variant="secondary" className="w-full md:w-auto">Ver localização no mapa</Button>
      </div>
    </div>
  </section>
);

export default CallToAction;