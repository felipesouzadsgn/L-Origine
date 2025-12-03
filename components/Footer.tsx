import React from 'react';
import { Instagram, Mail, Phone, MapPin, Clock, CalendarCheck } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-[#050507] border-t border-bgCard pt-16 pb-8 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      
      {/* Brand */}
      <div>
        <div className="text-2xl font-bold font-heading mb-4 text-white">L'Origine.</div>
        <p className="text-textMuted text-sm leading-relaxed mb-6">
          Restaurante autoral & wine bar. Noite boa é noite vivida sem pressa.
        </p>
        <div className="flex gap-4">
          <div className="p-2 bg-bgCard rounded-full text-white hover:text-primary cursor-pointer transition-colors"><Instagram size={18}/></div>
          <div className="p-2 bg-bgCard rounded-full text-white hover:text-primary cursor-pointer transition-colors"><Mail size={18}/></div>
        </div>
      </div>

      {/* Contato */}
      <div>
        <h4 className="text-white font-semibold mb-6">Contato</h4>
        <ul className="space-y-4 text-sm text-textMuted">
          <li className="flex items-center gap-3">
            <Phone size={16} className="text-primary"/> (11) 99999-9999
          </li>
          <li className="flex items-center gap-3">
            <Mail size={16} className="text-primary"/> contato@lorigine.com.br
          </li>
        </ul>
      </div>

      {/* Localização */}
      <div>
        <h4 className="text-white font-semibold mb-6">Localização</h4>
        <ul className="space-y-4 text-sm text-textMuted">
          <li className="flex items-start gap-3">
            <MapPin size={16} className="text-primary mt-1"/> 
            <span>Rua Oscar Freire, 1234<br/>Jardins, São Paulo/SP</span>
          </li>
          <li>
            <a href="#" className="text-secondary hover:underline text-xs">Abrir no Google Maps →</a>
          </li>
        </ul>
      </div>

      {/* Horários */}
      <div>
        <h4 className="text-white font-semibold mb-6">Horários</h4>
        <ul className="space-y-4 text-sm text-textMuted">
          <li className="flex items-start gap-3">
            <Clock size={16} className="text-primary mt-1"/> 
            <span>Terça a Sábado<br/>19h – 23h</span>
          </li>
          <li className="flex items-start gap-3">
            <CalendarCheck size={16} className="text-primary mt-1"/> 
            <span>Dom e Seg: Eventos</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="max-w-6xl mx-auto border-t border-bgCard pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#50505E]">
      <p>© 2024 L'Origine Restaurante. Todos os direitos reservados.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
      </div>
    </div>
  </footer>
);

export default Footer;