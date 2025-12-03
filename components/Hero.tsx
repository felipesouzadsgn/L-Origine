import React from 'react';
import { Star } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => (
  <section className="relative min-h-screen flex items-center pt-24 pb-12 px-4 md:px-8 overflow-hidden">
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Texto */}
      <div className="space-y-8 z-10 order-2 lg:order-1">
        <div 
          className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-bgCard/50 backdrop-blur-sm"
        >
          <span className="text-xs tracking-wide uppercase font-semibold text-secondary">
            Experiência autoral em São Paulo
          </span>
        </div>
        
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-heading text-textMain"
        >
          Um jantar para <br/>
          <span className="italic font-light opacity-80">lembrar</span>, não <br/>
          para postar.
        </h1>
        
        <p 
          className="text-lg opacity-80 max-w-md leading-relaxed text-textMuted"
        >
          Menu autoral, carta de vinhos selecionada e um ambiente feito para conversar sem pressa. Reserve sua mesa e viva uma noite que não cabe em stories.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="#reserva" variant="primary">Reservar sua mesa</Button>
          <Button href="#menu" variant="secondary">Ver menu degustação</Button>
        </div>

        <div className="flex items-center gap-3 pt-4 opacity-80">
           <div className="flex text-secondary">
             {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
           </div>
           <span className="text-sm text-gray-400">4.9 no Google • +2.000 clientes</span>
        </div>
      </div>

      {/* Imagem */}
      <div className="relative order-1 lg:order-2 h-[50vh] lg:h-[700px] w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-bgMain via-transparent to-transparent z-10 lg:hidden"></div>
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
          alt="Ambiente do restaurante com vinhos e pratos" 
          className="w-full h-full object-cover rounded-2xl opacity-90"
        />
        
        {/* Floating Tag */}
        <div className="absolute bottom-6 right-6 z-20 bg-bgCard/90 backdrop-blur border border-border p-4 rounded-lg hidden md:block shadow-xl">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <div>
               <p className="text-xs text-gray-400 uppercase">Hoje</p>
               <p className="text-sm font-semibold text-white">19h – 23h • Reservas abertas</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;