import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, UserCog, Handshake, ArrowRight, ThumbsUp } from 'lucide-react';

export const Oferta: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 md:p-12 bg-white text-brand-dark rounded-3xl shadow-xl min-h-[80vh] flex flex-col justify-center border border-gray-200 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-red opacity-5 rounded-full blur-[80px]"></div>
      
      <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
        
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 text-brand-red rounded-full mb-6 border border-red-100">
          <Handshake className="w-8 h-8" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-brand-dark leading-tight">
          A Parceria: <br /> <span className="text-brand-red">Como vamos trabalhar juntos</span>
        </h1>
        <p className="text-xl text-gray-500 mb-12">
          Eu pego na sua mão e faço o trabalho difícil. Nossa meta é você ter mais tempo livre e parar de ser babá de funcionário, enquanto as vendas chegam sozinhas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
          {/* Box O que eu faço */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-brand-dark flex items-center gap-3">
              <UserCog className="w-6 h-6 text-brand-red" />
              O que Eu faço (A Assessoria):
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-700 text-lg">
                <CheckCircle2 className="w-6 h-6 text-brand-red shrink-0 mt-1" />
                <span>Pego o trabalho pesado da internet pra mim (Site, Instagram, Mercado Livre).</span>
              </li>
              <li className="flex gap-3 text-gray-700 text-lg">
                <CheckCircle2 className="w-6 h-6 text-brand-red shrink-0 mt-1" />
                <span>Tenho autonomia para executar as coisas e cuidar de todos os botões difíceis.</span>
              </li>
              <li className="flex gap-3 text-gray-700 text-lg">
                <CheckCircle2 className="w-6 h-6 text-brand-red shrink-0 mt-1" />
                <span>Tiro de vez as suas dúvidas, te ensino o que precisar de forma simples e fácil.</span>
              </li>
              <li className="flex gap-3 text-gray-700 text-lg font-bold">
                <CheckCircle2 className="w-6 h-6 text-brand-red shrink-0 mt-1" />
                <span>Te mostro tudo pronto e você só diz se está "Aprovado" ou se precisa mudar algo.</span>
              </li>
            </ul>
          </div>

          {/* Box O que dono faz */}
          <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
            <h3 className="text-2xl font-bold mb-6 text-red-900 flex items-center gap-3">
              <ThumbsUp className="w-6 h-6 text-brand-red" />
              O que Você faz (O Dono):
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-800 text-lg font-medium">
                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <span>Garante o estoque dos produtos e despacha as vendas pros clientes.</span>
              </li>
              <li className="flex gap-3 text-gray-800 text-lg font-medium">
                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <span>Faz o investimento nas propagandas (anúncios) e no valor do meu serviço.</span>
              </li>
              <li className="flex gap-3 text-gray-800 text-lg font-medium">
                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <span>Aprova o caminho que eu colocar na mesa, de forma rápida e prática.</span>
              </li>
              <li className="flex gap-3 text-gray-800 text-lg font-bold">
                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <span>Aproveita seu tempo livre! Os funcionários cuidam da embalagem e você foca em crescer, sem dor de cabeça.</span>
              </li>
            </ul>
          </div>
        </div>

        <button className="bg-brand-red hover:bg-red-700 text-white text-xl font-bold py-5 px-10 rounded-full transition-all shadow-lg hover:shadow-[0_0_20px_rgba(227,0,15,0.4)] flex items-center justify-center gap-3 w-full max-w-xl mx-auto group">
          Começar a trabalhar juntos <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </button>
        <p className="mt-4 text-sm text-gray-400 font-medium">Basta clicar para me mandar um WhatsApp dizendo que aprovou</p>

      </div>
    </motion.div>
  );
};
