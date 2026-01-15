import React from 'react';
import { MessageCircle, CheckCircle2, Star, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const desktopBg = "https://rawcdn.githack.com/lucasisake10-png/imagens-/c968b7c70642a0cbb5ac41b4852eb5488fcb68a8/julio%20salva%20vidros%20amarelo.png";
  const mobileBg = "https://rawcdn.githack.com/lucasisake10-png/imagens-/b27ceacdd5f1888f46bd5767c50ad3f4cc182b86/julio%20mobile%20amarelo2.png";

  return (
    <section id="inicio" className="relative min-h-[100vh] lg:min-h-screen flex items-end md:items-center overflow-hidden bg-zinc-950">
      {/* Imagens de Fundo Responsivas */}
      <div className="absolute inset-0 z-0">
        <img 
          src={mobileBg}
          alt="Salva Vidros Background Mobile" 
          className="block md:hidden w-full h-full object-cover object-center opacity-100"
        />
        <img 
          src={desktopBg}
          alt="Salva Vidros Background Desktop" 
          className="hidden md:block w-full h-full object-cover object-right opacity-100"
        />
        {/* Gradiente para garantir leitura do texto no rodapé do hero */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent md:bg-gradient-to-r md:from-zinc-950 md:via-zinc-950/40 md:to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 pt-[45vh] md:pt-40 pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto md:mx-0 flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* Badge Localização */}
          <div className="inline-flex items-center gap-3 bg-zinc-950/90 border border-[#FACC15]/50 px-6 py-3 rounded-full mb-8 backdrop-blur-md animate-fade-in-up shadow-[0_0_20px_rgba(250,204,21,0.1)]">
            <div className="w-5 h-5 bg-[#FACC15] rounded-full flex items-center justify-center">
              <MapPin size={12} className="text-black" />
            </div>
            <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">O Julio vai até você</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black leading-[1.0] mb-8 text-white tracking-tighter animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Não troque seu <br />
            <span className="text-[#FACC15]">Para-brisa Original</span>
          </h1>
          
          <div className="mb-10 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-[#FACC15] text-xl lg:text-2xl font-black mb-5 flex items-center justify-center md:justify-start gap-3">
              <CheckCircle2 size={26} className="shrink-0" /> Atendemos no seu local!
            </p>
            <p className="hidden md:block text-zinc-300 text-sm lg:text-lg font-medium leading-relaxed opacity-80">
              Conserto de trincas e riscos com técnica profissional de 30 anos. <br className="hidden lg:block" /> <strong>Nós vamos até você onde você estiver.</strong>
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 mb-12 w-full md:w-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a 
              href="https://wa.me/5547999020477" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full md:w-auto btn-whatsapp flex items-center justify-center gap-4 px-12 py-5 rounded-full text-base font-black uppercase tracking-widest text-black shadow-xl"
            >
              <MessageCircle size={24} />
              Chamar o Julio Agora
            </a>
          </div>

          {/* Badge de Prova Social Fiel à imagem solicitada */}
          <div className="bg-black/90 px-6 py-4 rounded-3xl border border-white/10 w-fit shadow-2xl flex flex-col gap-1.5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {/* Linha 1: +1000 VIDROS SALVOS */}
            <div className="flex items-center gap-2">
              <span className="text-[#FACC15] text-2xl font-black tracking-tighter">+1000</span>
              <span className="text-white text-sm font-black uppercase tracking-tight">VIDROS SALVOS</span>
            </div>
            
            {/* Linha 2: Estrelas | SATISFAÇÃO COMPROVADA */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} className="text-[#FACC15] fill-[#FACC15]" />
                ))}
              </div>
              <span className="text-white/30 text-xs">|</span>
              <span className="text-[#FACC15] text-[10px] font-black uppercase tracking-[0.15em]">SATISFAÇÃO COMPROVADA</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 z-10 hidden lg:flex items-center gap-5 text-white animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="w-20 h-20 bg-[#FACC15] rounded-[2rem] flex items-center justify-center shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
           <MapPin size={36} className="text-black" />
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FACC15] leading-none mb-2">Serviço Móvel</p>
          <p className="text-5xl font-black uppercase tracking-tighter leading-none italic">VOU ATÉ VOCÊ</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;