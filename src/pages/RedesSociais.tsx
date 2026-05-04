import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, MessageCircle, Send, Bookmark, MousePointer2 } from 'lucide-react';

export const RedesSociais: React.FC = () => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 md:p-12 bg-white rounded-3xl shadow-sm border border-gray-100 min-h-[80vh] flex flex-col md:flex-row gap-12 items-center"
    >
      <div className="flex-1">
        <span className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2 block">O ímã de clientes</span>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-brand-dark">
          Seu Instagram como uma vitrine brilhante.
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Quando alguém passa na frente de uma loja escura e bagunçada, a pessoa nem entra. Na internet é igual.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Nós arrumamos toda a casa. Vamos deixar seu Instagram parecendo loja grande, passando confiança. E o melhor: usamos as propagandas (os anúncios) para puxar as pessoas da sua região para dentro dele.
        </p>
      </div>

      <div className="flex-1 w-full flex justify-center">
        {/* Mockup Instagram */}
        <div className="w-[320px] bg-white border-2 border-gray-200 rounded-[30px] overflow-hidden shadow-2xl relative">
          
          <div className="bg-gray-100 p-3 flex justify-center gap-1 border-b">
            <div className="w-12 h-4 bg-gray-300 rounded-full"></div>
          </div>

          <div className="p-3 border-b flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-dark text-white font-bold flex items-center justify-center text-xs">SET</div>
            <span className="font-bold text-sm">setcomputadores</span>
            <span className="text-blue-500 font-bold ml-auto text-xs bg-blue-50 px-2 py-1 rounded">Seguir</span>
          </div>
          
          {/* Post Interaction Image */}
          <div 
            className="aspect-square bg-gray-100 relative group overflow-hidden cursor-pointer"
            onDoubleClick={() => setLiked(true)}
          >
            <img 
              src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=500&q=80" 
              alt="PC Gamer setup" 
              className="w-full h-full object-cover"
            />
            
            {/* Pop de like falso quando clica duas vezes */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={liked ? { scale: [0, 1.5, 1], opacity: [0, 1, 0] } : {}}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <Heart className="w-24 h-24 text-white drop-shadow-xl fill-white" />
            </motion.div>

            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-black/60 text-white px-4 py-2 rounded-full flex gap-2 items-center backdrop-blur-sm text-sm font-bold">
                <MousePointer2 className="w-4 h-4" /> Dê 2 toques na foto
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-4">
                <button onClick={() => setLiked(!liked)}>
                  <Heart className={`w-6 h-6 transition-colors ${liked ? 'text-red-500 fill-red-500' : 'text-gray-800'}`} />
                </button>
                <MessageCircle className="w-6 h-6 text-gray-800" />
                <Send className="w-6 h-6 text-gray-800" />
              </div>
              <Bookmark className="w-6 h-6 text-gray-800" />
            </div>
            <p className="font-bold text-sm mb-1">{liked ? '1.043 curtidas' : '1.042 curtidas'}</p>
            <p className="text-sm text-gray-700">
              <span className="font-bold mr-1">setcomputadores</span>
              Sexta-feira feliz é de PC Gamer novo. Setup entregue e cliente dando show! 🚀🕹️ Orçamentos pelo link na bio.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
