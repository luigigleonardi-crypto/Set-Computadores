import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, Globe, MousePointerClick, Search, ShoppingBag } from 'lucide-react';

export const Ecommerce: React.FC = () => {
  const [added, setAdded] = useState<number | null>(null);

  const handleAdd = (id: number) => {
    setAdded(id);
    setTimeout(() => setAdded(null), 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 md:p-12 bg-white rounded-3xl shadow-sm border border-gray-100 min-h-[80vh] flex flex-col md:flex-row gap-12 items-center"
    >
      <div className="flex-1 w-full flex justify-center">
        {/* Mockup Catálogo Próprio */}
        <div className="w-full max-w-sm bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-2xl relative">
          
          <div className="bg-brand-dark p-4 flex items-center justify-between">
            <h1 className="text-white font-black tracking-widest text-sm">SET COMP.</h1>
            <div className="flex items-center gap-3 text-white">
              <Search className="w-4 h-4" />
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>

          <div className="bg-red-50 text-red-700 text-xs font-bold p-2 text-center border-b border-red-100">
             🔥 Ofertas da Semana
          </div>

          <div className="p-4 grid grid-cols-2 gap-3 pb-8">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm text-center group">
                 <div className="aspect-square bg-gray-100 rounded mb-2 overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=200&q=80&ixlib=rb-4.0.3`} alt="Produto" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform" />
                 </div>
                 <p className="text-[10px] font-bold text-gray-800 line-clamp-2">Notebook Dell Inspiron {i}</p>
                 <p className="text-xs font-bold text-brand-red my-1">R$ 3.500</p>
                 <button 
                  onClick={() => handleAdd(i)}
                  className={`w-full text-white text-[10px] font-bold py-2 rounded flex items-center justify-center gap-1 transition-all ${added === i ? 'bg-green-500 scale-95' : 'bg-brand-dark hover:bg-black'}`}
                 >
                    {added === i ? 'Na Sacola ✓' : '🛒 Comprar'}
                 </button>
               </div>
             ))}
          </div>
        </div>
      </div>

      <div className="flex-1">
        <span className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2 block">Seu E-commerce Próprio</span>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-brand-dark">
          Um site só seu. O vendedor que não dorme.
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Criamos uma loja inteira só para a Set Computadores na internet. O cliente olha tudo, clica em comprar, paga e não precisa que você fique respondendo mensagens sem parar.
        </p>

        <div className="space-y-4">
            <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-brand-red/30 transition-colors">
               <div className="bg-red-100 p-3 rounded-full shrink-0"><LayoutGrid className="w-6 h-6 text-brand-red" /></div>
               <p className="text-md font-medium text-gray-700">Temos tudo bonitinho: foto, preço e explicação da peça. O cliente lê sozinho e tira as próprias dúvidas.</p>
            </div>
            <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-brand-red/30 transition-colors">
               <div className="bg-red-100 p-3 rounded-full shrink-0"><Globe className="w-6 h-6 text-brand-red" /></div>
               <p className="text-md font-medium text-gray-700">Seu endereço na web: www.setcomputadores.com.br. Dá muita moral e passa muita confiança na hora da compra.</p>
            </div>
            <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-brand-red/30 transition-colors">
               <div className="bg-red-100 p-3 rounded-full shrink-0"><MousePointerClick className="w-6 h-6 text-brand-red" /></div>
               <p className="text-md font-medium text-gray-700">Ele compra com o celular deitado na cama à meia-noite. De manhã você só imprime o pedido e despacha.</p>
            </div>
        </div>
      </div>
    </motion.div>
  );
};
