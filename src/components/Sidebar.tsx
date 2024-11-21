import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart2, 
  Settings as SettingsIcon,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: BarChart2, label: 'Analytics', path: '/analytics' },
    { icon: SettingsIcon, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 bg-gray-900 text-white transition-all duration-300 z-30
      ${isOpen ? 'w-64' : 'w-20'} 
      ${!isOpen && 'items-center'} 
      lg:block
      ${!isOpen && 'lg:w-20'}
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
      
      <div className="flex items-center justify-between h-16 px-4">
        <h1 className={`text-xl font-bold transition-opacity duration-200 
          ${!isOpen && 'lg:opacity-0'}`}>
          Dashboard
        </h1>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-gray-800 hidden lg:block"
        >
          {isOpen ? (
            <ChevronLeft className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>
      </div>

      <nav className="mt-8">
        <div className="px-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center px-4 py-2 rounded-lg transition-colors
                  ${isActive ? 'bg-blue-600' : 'hover:bg-gray-800'}
                `}
              >
                <Icon className="w-5 h-5" />
                <span className={`ml-3 transition-opacity duration-200
                  ${!isOpen && 'lg:hidden'}`}>
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;