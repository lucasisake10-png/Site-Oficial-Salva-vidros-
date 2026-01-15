import React from 'react';
import { ShieldCheck, Sparkles, Trophy } from 'lucide-react';

const Features: React.FC = () => {
  const highlights = [
    {
      title: "Reparo de Trincas",
      description: "Mantém a peça original do seu veículo evitando maiores custos. Além disso, evita multa gravíssima, pontos na carteira e acidentes causados pela distorção visual.",
      image: "https://rawcdn.githack.com/lucasisake10-png/imagens-/c12e54c9fb64031520df79f57b7c48405d42d99b/julio%20imagens%20site02.jpg",
      icon: <ShieldCheck size={24} className="text-black" />,
      tag: "Segurança Total"
    },
    {
      title: "Polimento de Parabrisas",
      description: "Renovar o seu parabrisa aumenta a visibilidade e segurança em condições desfavoráveis, como chuva intensa e trajetos noturnos, removendo ofuscamentos.",
      image: "https://rawcdn.githack.com/lucasisake10-png/imagens-/c12e54c9fb64031520df79f57b7c48405d42d99b/julio%20imagens%20site03.jpg",
      icon: <Sparkles size={24} className="text-black" />,
      tag: "Visibilidade"
    },
    {
      title: "A melhor do Brasil",
      description: "Somos os pioneiros no Brasil na especialidade de reparo de trincas. Mais de 30 anos de experiência real em veículos nacionais e importados de luxo.",
      image: "https://rawcdn.githack.com/lucasisake10-png/imagens-/c12e54c9fb64031520df79f57b7c48405d42d99b/julio%20imagens%20site01.jpg",
      icon: <Trophy size={24} className="text-black" />,
      tag: "Pioneirismo"
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Padrão de fundo sutil para profundidade */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FACC15 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#FACC15]/10 text-[#FACC15] text-[11px] font-black uppercase tracking-widest mb-6 border border-[#FACC15]/20">
            Serviços Especializados
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-none">
            Excelência técnica que <br />
            <span className="text-[#FACC15]">salva seu patrimônio</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#FACC15] mx-auto rounded-full shadow-[0_0_20px_rgba(250,204,21,0.3)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {highlights.map((item, index) => (
            <div key={index} className="group flex flex-col h-full bg-zinc-900/40 backdrop-blur-md rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 border border-white/5 hover:border-[#FACC15]/30 hover:-translate-y-3">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                   <span className="bg-[#FACC15] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                     {item.tag}
                   </span>
                   <div className="w-12 h-12 bg-[#FACC15] rounded-2xl flex items-center justify-center border border-white/20 text-black shadow-xl transform group-hover:rotate-12 transition-transform">
                      {item.icon}
                   </div>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-white mb-5 tracking-tight leading-tight group-hover:text-[#FACC15] transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 font-medium leading-relaxed text-sm">
                  {item.description}
                </p>
                <div className="mt-8 pt-6 border-t border-white/5">
                   <div className="flex items-center gap-2 text-[#FACC15] font-black text-[11px] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 duration-500">
                     Saber mais sobre este serviço →
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default Features;