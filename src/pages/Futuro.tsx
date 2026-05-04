import React from 'react';
import { motion } from 'motion/react';
import { Zap, Coffee, Smartphone } from 'lucide-react';

export const Futuro: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 md:p-12 bg-brand-dark text-white rounded-3xl shadow-sm min-h-[80vh] flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red opacity-20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="w-20 h-20 bg-white/10 text-brand-red rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20">
          <Zap className="w-10 h-10" />
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
          O Futuro: <br/><span className="text-brand-red">A Loja Automática.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
          Imagine ter um "clone" seu empurrando vendas na internet dia e noite, enquanto a loja física continua funcionando normalmente.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-red/50 transition-colors">
            <Smartphone className="w-10 h-10 text-brand-red mb-4" />
            <h3 className="text-2xl font-bold mb-3">Vendas Caindo Sozinhas</h3>
            <p className="text-gray-400 text-lg">
              Milhares de pessoas na sua cidade mexem no celular todos os dias. Vamos colocar os seus anúncios piscando na tela delas. Elas clicam e o WhatsApp do seu vendedor começa a chamar.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-red/50 transition-colors">
            <Coffee className="w-10 h-10 text-brand-red mb-4" />
            <h3 className="text-2xl font-bold mb-3">Você Vira Apenas "O Chefe"</h3>
            <p className="text-gray-400 text-lg">
              Sua função passa a ser apenas olhar os números de vendas pelo celular, tomar seu café e gerenciar o negócio. Chega de apertar botão e responder mensagem igual um robô o dia inteiro.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
