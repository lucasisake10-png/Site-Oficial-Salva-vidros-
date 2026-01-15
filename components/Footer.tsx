import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, CheckCircle, Clock, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  const logoLightBg = "https://rawcdn.githack.com/lucasisake10-png/imagens-/2e481a1c36048984485087ff3aa5db9b363ef6da/logotipo%20salva%20vidro%20fundo%20claros.png";

  return (
    <footer className="bg-zinc-950 pt-24 pb-12 text-zinc-400 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Coluna 1: Logo e Bio */}
          <div className="space-y-8">
            <div className="mb-4">
              <img src={logoLightBg} alt="Salva Vidros Original" className="h-32 md:h-60 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed font-medium text-zinc-500 max-w-xs">
              Recuperação de para-brisas com técnica alemã, experiência de 30 anos e responsabilidade total com a sua segurança.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/salvavidros/?hl=pt-br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#FACC15] hover:text-black transition-all border border-white/5 group"
              >
                <Instagram size={22} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.facebook.com/salvavidrosoriginal?locale=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#FACC15] hover:text-black transition-all border border-white/5 group"
              >
                <Facebook size={22} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Horários */}
          <div>
            <h4 className="text-white font-black mb-10 uppercase text-xs tracking-[0.3em] flex items-center gap-2">
              <Clock size={16} className="text-[#FACC15]" />
              Horários
            </h4>
            <div className="space-y-5 text-sm font-medium">
              <div>
                <p className="text-white font-black flex items-center gap-2 mb-1 uppercase text-[11px] tracking-widest">
                  Segunda à Sexta
                </p>
                <p className="text-zinc-500">08:30 - 12:00 / 13:30 - 19:00</p>
              </div>
              <div>
                <p className="text-white font-black flex items-center gap-2 mb-1 uppercase text-[11px] tracking-widest">
                  Sábado
                </p>
                <p className="text-zinc-500">08:30 às 14:00</p>
              </div>
              <div className="pt-4">
                <span className="inline-block bg-[#FACC15]/10 text-[#FACC15] text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest border border-[#FACC15]/10">
                  Atendimento Móvel Ativo
                </span>
              </div>
            </div>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="text-white font-black mb-10 uppercase text-xs tracking-[0.3em]">Contato</h4>
            <ul className="space-y-8 text-sm">
              <li className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#FACC15] shadow-sm">
                  <Phone size={20} />
                </div>
                <a href="https://wa.me/5547999020477" target="_blank" rel="noopener noreferrer" className="text-white font-black text-lg hover:text-[#FACC15] transition-colors">
                  +55 (47) 99902-0477
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#FACC15] shadow-sm">
                  <MapPin size={20} />
                </div>
                <span className="text-zinc-400 font-bold">BC, Itajaí e Região</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Diferenciais */}
          <div>
            <h4 className="text-white font-black mb-10 uppercase text-xs tracking-[0.3em]">Qualificações</h4>
            <ul className="space-y-5 text-sm font-bold text-zinc-500">
              <li className="flex items-center gap-3">
                <CheckCircle size={18} className="text-[#FACC15]" />
                +30 Anos de Estrada
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle size={18} className="text-[#FACC15]" />
                Técnica Profissional
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle size={18} className="text-[#FACC15]" />
                Frotas e Particulares
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle size={18} className="text-[#FACC15]" />
                Padrão Concessionária
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <span>Responsável: Julio César Heffko</span>
            <span>© 2026 Salva Vidros Original</span>
            <span className="flex items-center gap-1.5">
              Criado por 
              <a 
                href="https://clickdigitalhub.com.br/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-400 hover:text-[#FACC15] transition-colors"
              >
                Click Digital Hub
              </a>
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
             <div className="w-2.5 h-2.5 bg-[#FACC15] rounded-full animate-pulse"></div>
             Excelência técnica no local
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;