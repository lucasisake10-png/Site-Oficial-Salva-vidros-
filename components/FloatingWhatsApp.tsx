import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/5547999020477"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] group flex items-center gap-3"
      aria-label="Falar pelo WhatsApp"
    >
      {/* Tooltip/Label que aparece no hover (apenas desktop para não poluir mobile) */}
      <span className="hidden md:block bg-zinc-900 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl">
        Orçamento Rápido
      </span>
      
      {/* Botão Principal */}
      <div className="relative">
        {/* Animação de pulsação externa verde */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25 group-hover:opacity-40"></div>
        
        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] group-hover:scale-110 group-active:scale-95 transition-all duration-300 border-2 border-white/10">
          <MessageCircle size={32} className="text-white fill-white/10" />
          
          {/* Badge de Status Online */}
          <div className="absolute top-0 right-0 w-4 h-4 bg-emerald-400 border-2 border-zinc-950 rounded-full"></div>
        </div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;