import React from 'react';
import { GlassWater, Scissors, Eraser, Phone, Building2, Car } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <GlassWater size={32} />,
      title: "Conserto de Pequenas Trincas",
      desc: "Processo cirúrgico com resina alemã que restaura a integridade estrutural e evita a troca da peça original."
    },
    {
      icon: <Scissors size={32} />,
      title: "Remoção de Riscos",
      desc: "Polimento de alta performance que elimina marcas superficiais e devolve a clareza total ao seu vidro."
    },
    {
      icon: <Eraser size={32} />,
      title: "Chuva Ácida e Manchas",
      desc: "Tratamento químico especializado para remover incrustações que as lavagens comuns não conseguem limpar."
    }
  ];

  return (
    <div id="servicos" className="py-24 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FACC15]/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-[#FACC15] font-black text-xs uppercase tracking-[0.3em] mb-4 block">Laboratório Móvel</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter">Tecnologia e <span className="text-[#FACC15] italic font-light">Precisão</span></h2>
          <div className="w-20 h-1 bg-[#FACC15]/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((s, i) => (
            <div key={i} className="bg-zinc-900/40 backdrop-blur-lg p-12 rounded-[3rem] border border-white/5 hover:bg-zinc-900 transition-all duration-500 group shadow-2xl">
               <div className="w-16 h-16 bg-[#FACC15] rounded-3xl flex items-center justify-center mb-8 text-black shadow-xl group-hover:scale-110 transition-transform">
                 {s.icon}
               </div>
               <h3 className="text-2xl font-bold mb-4 text-white leading-tight">{s.title}</h3>
               <p className="text-zinc-400 text-sm leading-relaxed font-medium">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900/60 backdrop-blur-md p-8 md:p-12 rounded-[3rem] shadow-2xl border border-white/5 flex flex-col md:flex-row items-center gap-10 animate-fade-in-up">
            <div className="flex-1 space-y-4">
              <div className="flex gap-4 mb-4">
                {/* Badge Particulares estilo solicitado */}
                <div className="flex items-center gap-3 bg-black px-5 py-2.5 rounded-2xl border border-white/10">
                   <Car size={18} className="text-[#FACC15]" />
                   <span className="text-[11px] font-black text-white uppercase tracking-widest">Particulares</span>
                </div>
                {/* Badge Frotas estilo solicitado */}
                <div className="flex items-center gap-3 bg-black px-5 py-2.5 rounded-2xl border border-white/10">
                   <Building2 size={18} className="text-[#FACC15]" />
                   <span className="text-[11px] font-black text-white uppercase tracking-widest">Frotas</span>
                </div>
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-white leading-none">Atendimento especializado no local</h4>
              <p className="text-zinc-400 text-sm font-medium">Soluções customizadas para manter sua frota sempre segura e em conformidade com as leis de trânsito.</p>
            </div>
            
            <div className="shrink-0 w-full md:w-auto">
              <a 
                href="https://wa.me/5547999020477"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full md:w-auto px-10 py-5 rounded-full text-base font-black uppercase tracking-widest flex items-center justify-center gap-3 text-black"
              >
                <Phone size={20} />
                Falar com o Julio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;