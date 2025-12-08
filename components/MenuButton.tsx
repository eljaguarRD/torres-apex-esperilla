
import React from 'react';

interface MenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className="fixed top-6 left-6 z-50 p-2 rounded-md bg-black/40 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all backdrop-blur-sm"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
      </svg>
    </button>
  );
};

export default MenuButton;
