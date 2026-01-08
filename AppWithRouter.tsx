import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LocationSection from './components/LocationSection';
import ApartmentTypesSection from './components/ApartmentTypesSection';
import AmenitiesSection from './components/AmenitiesSection';
import AvailabilityTable from './components/AvailabilityTable';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import MenuButton from './components/MenuButton';
import SideMenu from './components/SideMenu';
import ApartmentModal from './components/ApartmentModal';
import ThankYou from './ThankYou';
import type { ApartmentType } from './types';

const MainApp: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectedApartment, setSelectedApartment] = React.useState<ApartmentType | null>(null);

  React.useEffect(() => {
    const isModalOpen = !!selectedApartment;
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedApartment]);

  return (
    <div className="bg-[#0c1839] text-white font-sans overflow-x-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 bg-blue-900/50 rounded-full opacity-30 filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-orange-500/10 rounded-full opacity-20 filter blur-3xl animate-pulse animation-delay-4000"></div>
        <div 
            className="absolute bottom-0 right-0 h-2/3 w-2/3 opacity-40"
            style={{
                backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 20px, rgba(200, 200, 220, 0.08) 20px, rgba(200, 200, 220, 0.08) 22px)',
                maskImage: 'radial-gradient(ellipse at bottom right, white 0%, transparent 70%)'
            }}
        ></div>
        <style>{`
            .animation-delay-4000 {
                animation-delay: 4000ms;
            }
        `}</style>
      </div>
      <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      {selectedApartment && (
        <ApartmentModal 
          apartment={selectedApartment} 
          onClose={() => setSelectedApartment(null)} 
        />
      )}
      <div className={`relative z-10 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-72' : 'translate-x-0'}`} style={{ willChange: 'transform' }}>
        <Header />
        <main className="container mx-auto px-6 py-12 md:py-16 space-y-16 md:space-y-24">
          <LocationSection />
          <ApartmentTypesSection onSelectApartment={setSelectedApartment} />
          <AmenitiesSection />
          <AvailabilityTable />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  </Router>
);

export default App;
