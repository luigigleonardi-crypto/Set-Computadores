import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sitemap } from './components/Sitemap';
import { Layout } from './components/Layout';
import { Hoje } from './pages/Hoje';
import { Futuro } from './pages/Futuro';
import { RedesSociais } from './pages/RedesSociais';
import { Marketplace } from './pages/Marketplace';
import { Ecommerce } from './pages/Ecommerce';
import { Oferta } from './pages/Oferta';

/**
 * Utility function to detect if the app is heavily proxied (Preview Environments)
 * like CodeSandbox, StackBlitz, Google IDX, Google Cloud Run, etc.
 */
function checkPreviewEnvironment(): boolean {
  if (typeof window === 'undefined') return false;
  
  const { hostname, href } = window.location;
  // Included 'run.app' for Cloud Run / AI Studio preview URLs
  const indicators = [
    'googleusercontent', 
    'webcontainer', 
    'shim', 
    '.goog', 
    'scf.usercontent', 
    'stackblitz', 
    'codesandbox',
    'run.app'
  ];
  
  return indicators.some(indicator => hostname.includes(indicator) || href.includes(indicator));
}

const isPreview = checkPreviewEnvironment();
// Roteamento Híbrido Agressivo
// Preview Environments get HashRouter because complex proxy URLs break BrowserRouter.
// Production Gets BrowserRouter for better SEO and URL Parameters.
const Router = isPreview ? HashRouter : BrowserRouter;

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Redirecionamento Dinâmico na Raiz */}
        <Route 
          path="/" 
          element={<Navigate to={isPreview ? "/sitemap" : "/hoje"} replace />} 
        />
        
        {/* Utilitário para Proxy */}
        <Route path="/sitemap" element={<Sitemap />} />
        
        {/* App Principal com Layout envolto em páginas */}
        <Route 
          path="/*" 
          element={
            <Layout>
              <Routes>
                <Route path="/hoje" element={<Hoje />} />
                <Route path="/futuro" element={<Futuro />} />
                <Route path="/instagram" element={<RedesSociais />} />
                <Route path="/shopping" element={<Marketplace />} />
                <Route path="/catalogo" element={<Ecommerce />} />
                <Route path="/proposta" element={<Oferta />} />
                <Route path="*" element={<Navigate to="/hoje" replace />} />
              </Routes>
            </Layout>
          } 
        />
      </Routes>
    </Router>
  );
}
