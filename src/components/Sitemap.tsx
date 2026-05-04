import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Store } from 'lucide-react';

export const Sitemap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 pb-24 md:pb-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-brand-dark p-6 text-white text-center rounded-t-2xl">
          <Compass className="w-12 h-12 mx-auto mb-4 text-brand-red opacity-90" />
          <h1 className="text-2xl font-display font-bold">Apresentação: <br/><span className="text-brand-red">Set Computadores</span></h1>
          <p className="text-gray-400 text-sm mt-2 opacity-90">Navegue pelas páginas da proposta</p>
        </div>
        
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-6 text-center leading-relaxed">
            Selecione qual página deseja abrir:
          </p>
          
          <div className="flex flex-col gap-3">
            <SitemapLink to="/hoje" title="A Loja Hoje" desc="O problema da loja física" />
            <SitemapLink to="/futuro" title="O Futuro" desc="A loja com 2 portas" />
            <SitemapLink to="/instagram" title="A Vitrine" desc="Mockup do Instagram" />
            <SitemapLink to="/shopping" title="O Shopping" desc="Mockup do Mercado Livre" />
            <SitemapLink to="/catalogo" title="O Catálogo" desc="Mockup do Mini E-commerce" />
            <SitemapLink to="/proposta" title="O Acordo" desc="Como vai funcionar a parceria" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SitemapLink = ({ to, title, desc }: { to: string, title: string, desc: string }) => (
  <Link 
    to={to} 
    className="flex items-center justify-between p-4 bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-brand-red/30 rounded-xl transition-all group"
  >
    <div className="flex flex-col">
      <span className="font-semibold text-brand-dark group-hover:text-brand-red transition-colors">👉 {title}</span>
      <span className="text-xs text-gray-400 mt-1">{desc}</span>
    </div>
  </Link>
);
