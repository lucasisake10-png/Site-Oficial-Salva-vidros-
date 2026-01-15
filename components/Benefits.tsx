import React from 'react';
import { CheckCircle2, Phone, MapPin, Sparkles } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    { title: "Atendimento Full Mobile", desc: "Sua casa ou empresa vira o centro cirúrgico do seu para-brisa." },
    { title: "30+ Anos de Know-how", desc: "Tradição alemã em técnica de recuperação de cristais." },
    { title: "Especialista em Premium", desc: "Técnica apurada para Porsche, BMW, Mercedes e muito mais." },
    { title: "Sustentabilidade", desc: "Mantenha o vidro original e a vedação de fábrica. Menos lixo, mais originalidade." }
  ];

  return (
    <div id="beneficios" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FACC15 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FACC15]/10 text-[#FACC15] text-[10px] font-black uppercase tracking-widest mb-6 border border-[#FACC15]/20">
               <Sparkles size={12} className="text-[#FACC15]" /> Vantagens Reais
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none tracking-tighter text-white">
              Por que escolher o <br />
              <span className="text-[#FACC15]">Julio Salva Vidros?</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {benefits.map((b, i) => (
                <div key={i} className="bg-zinc-900/50 backdrop-blur-md p-6 rounded-[2.5rem] border border-white/5 hover:border-[#FACC15]/20 hover:bg-zinc-900 transition-all group shadow-xl">
                  <CheckCircle2 className="text-[#FACC15] mb-4 group-hover:scale-125 transition-transform" size={24} />
                  <h4 className="font-bold text-lg mb-2 text-white leading-tight">{b.title}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            <a 
              href="https://wa.me/5547999020477"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-10 py-5 rounded-full text-base font-black uppercase tracking-widest flex items-center justify-center gap-3 w-full sm:w-auto text-black"
            >
              <Phone size={20} />
              Quero Atendimento VIP
            </a>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700 border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop" 
                alt="Carro de Luxo" 
                className="w-full aspect-[4/5] object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 animate-float">
                <div className="bg-zinc-900/95 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex items-center gap-6 shadow-2xl">
                   <div className="w-14 h-14 bg-[#FACC15] rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                      <MapPin size={28} className="text-black" />
                   </div>
                   <div>
                      <h5 className="font-black text-white uppercase tracking-tight">Atendimento 100% On-Site</h5>
                      <p className="text-xs text-[#FACC15] font-medium italic">Balneário, Itajaí e região.</p>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FACC15]/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;