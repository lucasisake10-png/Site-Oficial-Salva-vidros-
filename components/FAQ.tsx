import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Qualquer trinca pode ser recuperada?", a: "Na maioria dos casos, sim! Trincas de até o tamanho de uma moeda geralmente são totalmente recuperáveis. O ideal é fazer o diagnóstico o quanto antes para evitar que ela cresça com vibrações ou calor." },
    { q: "O serviço é garantido?", a: "Sim, utilizamos técnicas profissionais e equipamentos adequados para garantir que a trinca não evolua e que a transparência seja restaurada o máximo possível." },
    { q: "Quanto tempo leva o atendimento?", a: "A maioria dos serviços de recuperação de trincas e remoção de manchas é concluída em menos de 1 hora, dependendo da complexidade do dano." },
    { q: "O reparo é aceito em vistorias?", a: "Com certeza! O reparo profissional elimina o risco de reprovação em vistorias do DETRAN ou de seguro, além de evitar multas graves." },
    { q: "Vocês atendem em domicílio?", a: "O Julio vai até você! Atendemos em Balneário Camboriú, Itajaí e região com agendamento no seu local de preferência, seja casa, trabalho ou garagem." }
  ];

  return (
    <div id="faq" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-20 right-[-10%] w-64 h-64 bg-[#FACC15]/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <div className="w-16 h-16 bg-zinc-900 shadow-2xl rounded-2xl flex items-center justify-center mb-8 border border-white/5">
              <HelpCircle size={32} className="text-[#FACC15]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tighter leading-none">Dúvidas <br /><span className="text-[#FACC15]">Frequentes</span></h2>
            <p className="text-zinc-500 mb-10 leading-relaxed font-medium">
              Esclareça suas dúvidas técnicas ou peça uma avaliação rápida via WhatsApp enviando uma foto do dano.
            </p>

            <div className="bg-zinc-900 p-10 rounded-[2.5rem] shadow-2xl border border-white/5 group">
              <h4 className="font-black text-white uppercase tracking-tight mb-4">Ainda tem dúvidas?</h4>
              <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                Envie uma foto da sua trinca para uma pré-avaliação gratuita e instantânea direto com o Julio.
              </p>
              <a href="https://wa.me/5547999020477" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#FACC15] font-black uppercase tracking-widest text-xs group-hover:translate-x-3 transition-transform">
                Consultar Julio Agora <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-2/3 space-y-5">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`group border rounded-[2rem] overflow-hidden transition-all duration-500 ${openIndex === i ? 'bg-zinc-900/50 border-[#FACC15]/30' : 'bg-zinc-900/20 border-white/5 hover:border-white/10'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left font-bold text-white"
                >
                  <span className="pr-8 text-lg md:text-xl tracking-tight">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-[#FACC15] text-black rotate-180' : 'bg-zinc-800 text-zinc-500'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                {openIndex === i && (
                  <div className="px-8 pb-10 text-zinc-400 text-lg leading-relaxed animate-fade-in-up">
                    <div className="w-16 h-1 bg-[#FACC15]/20 mb-8 rounded-full"></div>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;