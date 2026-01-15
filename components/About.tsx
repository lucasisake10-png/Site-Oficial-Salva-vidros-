import React from 'react';
import { Phone, MapPin, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const juliaPhoto = "https://rawcdn.githack.com/lucasisake10-png/imagens-/927500824f0bf1bb69f76ea9188005071f33b0bf/JULIO%20C%C3%89SAR%20.png";

  return (
    <div id="sobre" className="py-32 bg-zinc-950 text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FACC15]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 text-xs font-bold uppercase tracking-widest text-[#FACC15] animate-fade-in-up">
            <Sparkles size={14} /> Exclusividade Móvel
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tighter animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Laboratório Técnico <br />
            <span className="text-[#FACC15]">na Sua Porta</span>
          </h2>
          
          <p className="text-zinc-400 leading-relaxed mb-12 text-lg md:text-xl font-light max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            "Eu levo a precisão de uma oficina especializada diretamente para onde seu carro está. Sem filas, sem espera, apenas técnica pura e resultados impecáveis."
          </p>
          
          <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col items-center gap-6">
               <div className="w-16 h-16 bg-[#FACC15] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#FACC15]/20 animate-float">
                  <MapPin className="text-black" size={32} />
               </div>
               <div className="space-y-4">
                 <h4 className="text-2xl md:text-3xl font-bold">Atendimento Premium Local</h4>
                 <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                    Recuperação completa realizada no seu local de preferência. Atendemos de carros populares a superesportivos com o mesmo rigor técnico e dedicação.
                 </p>
               </div>
            </div>
            
            <div className="mt-10 pt-10 border-t border-white/5 flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FACC15]/50 shadow-lg">
                  <img src={juliaPhoto} alt="Julio César Heffko" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-base leading-none">Julio César Heffko</p>
                  <p className="text-[#FACC15] text-[10px] font-black uppercase tracking-widest mt-1">Responsável Técnico</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://wa.me/5547999020477" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center justify-center gap-4 px-12 py-6 rounded-full text-base md:text-lg font-black uppercase tracking-widest w-full sm:w-auto text-black"
            >
              <Phone size={24} />
              Agendar Atendimento Agora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;