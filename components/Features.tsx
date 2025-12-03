import React from 'react';
import { ChefHat, Wine, Lamp, Users } from 'lucide-react';
import { Section, SectionHeader } from './ui/Section';
import Card from './ui/Card';

const Features: React.FC = () => {
  const features = [
    {
      icon: <ChefHat size={32} className="text-secondary" />,
      title: "Menu autoral sazonal",
      desc: "Pratos criados com ingredientes frescos e combinações que mudam conforme a estação."
    },
    {
      icon: <Wine size={32} className="text-secondary" />,
      title: "Wine bar selecionado",
      desc: "Rótulos escolhidos a dedo para harmonizar com o menu. Do clássico ao surpreendente."
    },
    {
      icon: <Lamp size={32} className="text-secondary" />,
      title: "Ambiente intimista",
      desc: "Iluminação na medida, trilha sonora discreta e mesas pensadas para presença."
    },
    {
      icon: <Users size={32} className="text-secondary" />,
      title: "Experiências para grupos",
      desc: "Aniversários e jantares de negócios em formatos sob medida, com menus especiais."
    }
  ];

  return (
    <Section id="experiencia">
      <SectionHeader 
        title="Muito mais do que 'comer fora'" 
        subtitle="Cada detalhe foi pensado para quem valoriza boa mesa, boa conversa e boas memórias."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <Card key={idx} className="hover:-translate-y-2 group cursor-default">
            <div className="mb-4 transition-transform duration-300 group-hover:scale-110 origin-left">{feature.icon}</div>
            <h3 className="text-xl font-medium mb-3 text-textMain font-heading">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-textMuted">{feature.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Features;