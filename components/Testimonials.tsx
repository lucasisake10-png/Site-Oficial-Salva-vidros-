import React from 'react';
import { Star, Phone, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Ricardo Mendes",
      role: "Empresário",
      text: "Eu estava quase trocando o vidro original. O Julio recuperou e ficou impecável. A comodidade dele vir até aqui é o grande diferencial."
    },
    {
      name: "Cláudio Silva",
      role: "Gerente de Frota",
      text: "Tradição que gera confiança. Atendimento rápido e preço justo. Economizamos milhares de reais mantendo os vidros originais dos caminhões."
    },
    {
      name: "Fernanda Costa",
      role: "Arquiteta",
      text: "Precisão absoluta. Estava com medo de trocarem o vidro do meu SUV importado, mas o reparo do Julio manteve a originalidade 100%."
    }
  ];

  return (
    <div className="py-24 bg-zinc-950 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#FACC15] font-black text-sm uppercase tracking-[0.3em] mb-4 block">Autoridade</span>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white tracking-tighter leading-none">Quem conhece, <br className="sm:hidden" /><span className="text-[#FACC15]">confia.</span></h2>
          <p className="text-zinc-400 font-medium">Resultados que falam por mais de 30 anos de estrada.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reviews.map((r, i) => (
            <div key={i} className="dark-glass-card p-10 rounded-[2.5rem] relative overflow-hidden hover:-translate-y-2 transition-all duration-500 border-white/5 group">
               <Quote size={40} className="absolute -top-4 -left-4 text-white/5 group-hover:text-[#FACC15]/10 transition-colors" />
               <div className="flex gap-1 mb-8">
                 {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="#FACC15" className="text-[#FACC15]" />)}
               </div>
               <p className="text-zinc-200 italic mb-10 leading-relaxed font-light text-lg">
                 "{r.text}"
               </p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center font-black text-[#FACC15] border border-white/5">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white leading-none mb-1">{r.name}</h4>
                    <p className="text-[#FACC15] text-[10px] font-black uppercase tracking-widest">{r.role}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href="https://wa.me/5547999020477"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-12 py-6 rounded-full text-base font-black uppercase tracking-widest flex items-center gap-4 text-black"
          >
            <Phone size={24} />
            Falar com o Especialista Agora
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;