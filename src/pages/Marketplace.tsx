import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ShoppingCart, Star, ShieldCheck, ShoppingBag, Truck } from 'lucide-react';

export const Marketplace: React.FC = () => {
  const [tab, setTab] = useState<'ml' | 'shopee'>('ml');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 md:p-12 bg-white rounded-3xl shadow-sm border border-gray-100 min-h-[80vh] flex flex-col md:flex-row gap-12 items-center"
    >
      <div className="flex-1 order-2 md:order-1">
        <span className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2 block">O Shopping da Internet</span>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-brand-dark">
          Vamos colocar suas coisas onde o Brasil inteiro já compra.
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Mercado Livre e Shopee são os maiores shoppings do país. A pessoa entra lá já com o cartão de crédito salvo no celular. Ela quer comprar!
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Nós vamos criar e arrumar a sua conta nas duas plataformas. <strong>Clique nos botões abaixo</strong> para ver como fica:
        </p>

        {/* Tab Buttons */}
        <div className="flex gap-4 mb-4">
          <button 
            onClick={() => setTab('ml')}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-center border-2 transition-all ${tab === 'ml' ? 'border-[#FFE600] bg-[#FFE600]/10 text-yellow-700' : 'border-gray-200 text-gray-400 hover:border-gray-300'}`}
          >
            Mercado Livre
          </button>
          <button 
            onClick={() => setTab('shopee')}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-center border-2 transition-all ${tab === 'shopee' ? 'border-[#EE4D2D] bg-[#EE4D2D]/10 text-[#EE4D2D]' : 'border-gray-200 text-gray-400 hover:border-gray-300'}`}
          >
            Shopee
          </button>
        </div>
      </div>

      <div className="flex-1 order-1 md:order-2 w-full flex justify-center">
        {/* Mockup Area */}
        <div className="w-full max-w-sm">
          
          {tab === 'ml' && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-2xl">
              {/* Header Amarelo */}
              <div className="bg-[#FFE600] p-4 flex items-center gap-4">
                 <div className="font-bold text-brand-dark text-xl tracking-tighter ml-1">M <br/> L</div>
                 <div className="bg-white rounded-full flex-1 h-9 px-3 flex items-center shadow-sm text-gray-400 w-full overflow-hidden">
                    <Search className="w-4 h-4 mr-2" />
                    <span className="text-sm truncate">Notebook Positivo...</span>
                 </div>
                 <ShoppingCart className="w-6 h-6 text-brand-dark" />
              </div>
              <div className="p-5">
                 <div className="bg-gray-50 border border-gray-100 rounded-lg mb-4 flex items-center justify-center p-4">
                     <img src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&w=400&q=80" alt="Computador" className="w-[80%] rounded shadow-sm" />
                 </div>
                 <h3 className="text-sm font-semibold text-gray-800 leading-tight mb-2">
                    Computador Pc Gamer Completo Core i5
                 </h3>
                 <div className="flex items-center gap-1 mb-2">
                     <Star className="w-3 h-3 text-blue-500 fill-blue-500" /><Star className="w-3 h-3 text-blue-500 fill-blue-500" /><Star className="w-3 h-3 text-blue-500 fill-blue-500" />
                 </div>
                 <div className="mb-4">
                     <p className="text-3xl text-gray-900 font-normal">R$ 2.499</p>
                     <p className="text-sm text-green-500 font-semibold">em 10x R$ 249,90 sem juros</p>
                 </div>
                 <button className="w-full bg-blue-500 text-white font-bold py-3 rounded-md mb-2 hover:bg-blue-600 transition-colors">
                    Comprar agora
                 </button>
              </div>
            </motion.div>
          )}

          {tab === 'shopee' && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-gray-100 border border-gray-200 rounded-lg overflow-hidden shadow-2xl">
              {/* Header Laranja */}
              <div className="bg-[#EE4D2D] p-4 flex items-center gap-3">
                 <ShoppingBag className="text-white w-7 h-7" />
                 <div className="bg-white rounded-sm flex-1 h-8 px-2 flex items-center w-full">
                    <span className="text-xs text-gray-400">Buscar produtos...</span>
                 </div>
              </div>
              <div className="p-0">
                 <img src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80" alt="Placa" className="w-full aspect-square object-cover" />
                 <div className="bg-white p-4">
                    <h3 className="text-sm font-medium text-gray-800 leading-tight mb-1">
                       Combo Teclado Gamer + Mouse RGB - Set Computadores
                    </h3>
                    <div className="mt-2 text-[#EE4D2D] text-2xl font-semibold mb-2">
                       R$ 149,90
                    </div>
                    <div className="flex items-center gap-2 text-xs text-green-600 font-semibold mb-4 bg-green-50 p-1.5 w-fit rounded border border-green-200">
                       <Truck className="w-4 h-4" /> Frete Grátis
                    </div>
                    <div className="flex gap-2">
                       <button className="flex-1 bg-orange-100 text-[#EE4D2D] border border-[#EE4D2D] font-bold py-2 rounded-sm text-sm hover:bg-orange-200 transition-colors">
                          Carrinho
                       </button>
                       <button className="flex-1 bg-[#EE4D2D] text-white font-bold py-2 rounded-sm text-sm hover:bg-red-600 transition-colors">
                          Comprar
                       </button>
                    </div>
                 </div>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </motion.div>
  );
};
