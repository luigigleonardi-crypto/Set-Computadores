import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Store, CloudRain, Clock, AlertTriangle, Users } from 'lucide-react';

export const Hoje: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 md:p-12 bg-white rounded-3xl shadow-sm border border-gray-100 min-h-[80vh] flex flex-col justify-center"
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className="w-20 h-20 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-8 border border-red-100">
          <Store className="w-10 h-10" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-dark leading-tight">
          O Raio-X da <span className="text-brand-red">Set Computadores</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-500 leading-relaxed mb-12 font-medium max-w-4xl mx-auto">
          Hoje, a sua loja é ótima, mas ela tem problemas sérios que estão roubando o seu tempo, o seu dinheiro e a sua paz todo santo dia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
          {/* Problema 1 */}
          <button 
            onClick={() => setClicked(!clicked)}
            className="group transition-all duration-300 hover:scale-[1.02] bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-red-200 hover:bg-red-50/30 text-left"
          >
            <div className="flex items-center gap-4 mb-4">
              <CloudRain className="w-8 h-8 text-brand-red group-hover:animate-bounce" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">1. Refém da Rua</h3>
            </div>
            <p className="text-gray-600 text-lg">
              Se chover, ninguém passa na frente. Se for feriado, a rua esvazia. Você fica de braços cruzados esperando o cliente decidir passar ali. 
            </p>
          </button>
          
          {/* Problema 2 */}
          <button 
            onClick={() => setClicked(!clicked)}
            className="group transition-all duration-300 hover:scale-[1.02] bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-red-200 hover:bg-red-50/30 text-left"
          >
            <div className="flex items-center gap-4 mb-4">
              <Clock className="w-8 h-8 text-brand-red group-hover:animate-spin-slow" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">2. Prisão de Tempo</h3>
            </div>
            <p className="text-gray-600 text-lg">
              Você faz de tudo: atende, vende, cobra, arruma. Se você ficar doente ou for viajar, a loja simplesmente paralisa. Sua loja depende 100% de você.
            </p>
          </button>

          {/* Problema 3 */}
          <button 
            onClick={() => setClicked(!clicked)}
            className="group transition-all duration-300 hover:scale-[1.02] bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-red-200 hover:bg-red-50/30 text-left"
          >
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-8 h-8 text-brand-red group-hover:scale-110 transition-transform" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">3. Babá de Equipe</h3>
            </div>
            <p className="text-gray-600 text-lg">
              Você tem funcionários, mas parece que as coisas só andam se você ficar em cima cobrando toda hora. Ficar vigiando tira o seu foco do crescimento.
            </p>
          </button>
        </div>

        <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-50 text-red-700 font-bold rounded-full animate-pulse border border-red-200">
          <AlertTriangle className="w-5 h-5" />
          <span>Nós vamos arrumar isso e colocar no piloto automático.</span>
        </div>
      </div>
    </motion.div>
  );
};
