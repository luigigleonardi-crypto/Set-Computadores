import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Store, Smartphone, ShoppingCart, ShoppingBag, Handshake } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24 md:pb-0 md:pt-20">
      {/* Top Navbar for Desktop */}
      <nav className="hidden md:flex fixed top-0 w-full bg-brand-dark text-white h-20 items-center px-8 z-50 shadow-md">
        <div className="font-display font-bold text-2xl tracking-tight">
          Set<span className="text-brand-red">Computadores</span>
        </div>
        <div className="ml-auto flex gap-6">
          <NavItem to="/hoje" icon={<Store />} text="Hoje" />
          <NavItem to="/futuro" icon={<LayoutDashboard />} text="O Futuro" />
          <NavItem to="/instagram" icon={<Smartphone />} text="Instagram" />
          <NavItem to="/shopping" icon={<ShoppingCart />} text="Marketplace" />
          <NavItem to="/catalogo" icon={<ShoppingBag />} text="A Loja" />
          <NavItem to="/proposta" icon={<Handshake />} text="O Acordo" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto md:p-8">
        {children}
      </main>

      {/* Bottom Navbar for Mobile */}
      <nav className="md:hidden fixed bottom-0 w-full bg-brand-dark text-white flex justify-around items-center h-20 pb-4 pt-2 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] overflow-x-auto">
        <MobileNavItem to="/hoje" icon={<Store />} text="Hoje" />
        <MobileNavItem to="/futuro" icon={<LayoutDashboard />} text="Futuro" />
        <MobileNavItem to="/instagram" icon={<Smartphone />} text="Insta" />
        <MobileNavItem to="/shopping" icon={<ShoppingCart />} text="Shopping" />
        <MobileNavItem to="/catalogo" icon={<ShoppingBag />} text="Loja" />
        <MobileNavItem to="/proposta" icon={<Handshake />} text="Acordo" />
      </nav>
    </div>
  );
};

const NavItem = ({ to, icon, text }: { to: string, icon: React.ReactNode, text: string }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => 
      `flex items-center gap-2 font-semibold transition-colors ${isActive ? 'text-brand-red' : 'text-gray-300 hover:text-white'}`
    }
  >
    {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' })}
    <span>{text}</span>
  </NavLink>
);

const MobileNavItem = ({ to, icon, text }: { to: string, icon: React.ReactNode, text: string }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => 
      `flex flex-col items-center gap-1 p-2 min-w-[70px] ${isActive ? 'text-brand-red' : 'text-gray-400'}`
    }
  >
    {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
    <span className="text-[10px] uppercase font-bold tracking-wider">{text}</span>
  </NavLink>
);
