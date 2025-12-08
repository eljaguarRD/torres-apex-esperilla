
import React from 'react';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { href: '#about', label: 'Sobre el Proyecto' },
  { href: '#location', label: 'Ubicación' },
  { href: '#types', label: 'Tipos de Apartamentos' },
  { href: '#amenities', label: 'Amenidades' },
  { href: '#availability', label: 'Disponibilidad' },
  { href: '#contact', label: 'Contacto' },
];

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Prevent default anchor behavior
    const id = href.substring(1);
    const element = document.getElementById(id);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    onClose(); // Close the menu
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Menu */}
      <nav
        className={`fixed top-0 left-0 h-full w-72 bg-[#0d1a2e] shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Main navigation"
      >
        <div className="p-8">
            <h2 className="text-2xl font-bold text-[#F97316] font-sans mb-8 border-b-2 border-orange-500/30 pb-4">Menú</h2>
            <ul className="space-y-4">
            {menuItems.map((item) => (
                <li key={item.href}>
                <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="block py-2 text-lg text-gray-300 hover:text-[#F97316] transition-colors duration-200"
                >
                    {item.label}
                </a>
                </li>
            ))}
            </ul>
        </div>
      </nav>
    </>
  );
};

export default SideMenu;