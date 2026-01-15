import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const logoDarkBg = "https://rawcdn.githack.com/lucasisake10-png/imagens-/2e481a1c36048984485087ff3aa5db9b363ef6da/logotipo%20salva%20vidro%20fundo%20escuros.png";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-zinc-950/98 backdrop-blur-md shadow-2xl py-2 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo - Tamanho aumentado agressivamente no mobile conforme solicitado */}
        <div className="flex items-center shrink-0">
          <img 
            src={logoDarkBg} 
            alt="Salva Vidros Original" 
            className={`transition-all duration-500 w-auto object-contain ${isScrolled ? 'h-20 md:h-16' : 'h-28 md:h-32'}`}
          />
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden xl:flex items-center gap-10 ml-auto mr-12">
          {[
            { label: 'Início', href: '#inicio' },
            { label: 'O Especialista', href: '#sobre' },
            { label: 'Serviços', href: '#servicos' },
            { label: 'Vantagens', href: '#beneficios' },
            { label: 'FAQ', href: '#faq' }
          ].map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/70 hover:text-[#FACC15] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="shrink-0">
          <a 
            href="https://wa.me/5547999020477" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#FACC15] text-black px-4 md:px-8 py-2.5 md:py-3.5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.1em] md:tracking-[0.15em] hover:bg-[#EAB308] transition-all shadow-xl shadow-[#FACC15]/20 inline-block"
          >
            Orçamento <span className="hidden sm:inline">Rápido</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;