import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experiência', href: '#experiencia' },
    { name: 'Menu', href: '#menu' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-bgMain/90 backdrop-blur-md border-b border-border' : 'py-6 bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter font-heading text-textMain">
          L'Origine<span className="text-primary">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-textMain hover:text-primary transition-colors font-body"
            >
              {link.name}
            </a>
          ))}
          <Button href="#reserva" variant="primary">Reservar Mesa</Button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-primary transition-colors">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-bgCard border-b border-border p-4 flex flex-col space-y-4 md:hidden animate-in slide-in-from-top-5 shadow-2xl">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg py-2 text-textMain hover:text-secondary font-body"
            >
              {link.name}
            </a>
          ))}
          <Button href="#reserva" variant="primary" className="w-full">Reservar Mesa</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;