import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      

      const sections = ['accueil', 'recommandations', 'offres', 'tarifs', 'temoignages', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMenuOpen(false);
  };

  const navLinks = (
    <>
      <motion.button 
        onClick={() => scrollToSection('accueil')}
        whileHover={{ scale: 1.05, y: -2 }}
        className={`relative px-3 py-2 transition-colors duration-300 ${
          activeSection === 'accueil' 
            ? 'text-yellow-400 font-semibold' 
            : 'hover:text-yellow-400'
        }`}
      >
        Accueil
        {activeSection === 'accueil' && (
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"
            layoutId="activeSection"
          />
        )}
      </motion.button>
      
      <motion.button 
        onClick={() => scrollToSection('recommandations')}
        whileHover={{ scale: 1.05, y: -2 }}
        className={`relative px-3 py-2 transition-colors duration-300 ${
          activeSection === 'recommandations' 
            ? 'text-yellow-400 font-semibold' 
            : 'hover:text-yellow-400'
        }`}
      >
        Recommandations
        {activeSection === 'recommandations' && (
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"
            layoutId="activeSection"
          />
        )}
      </motion.button>
      
      <motion.button 
        onClick={() => scrollToSection('offres')}
        whileHover={{ scale: 1.05, y: -2 }}
        className={`relative px-3 py-2 transition-colors duration-300 ${
          activeSection === 'offres' 
            ? 'text-yellow-400 font-semibold' 
            : 'hover:text-yellow-400'
        }`}
      >
        Offres
        {activeSection === 'offres' && (
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"
            layoutId="activeSection"
          />
        )}
      </motion.button>
      
      <motion.button 
        onClick={() => scrollToSection('tarifs')}
        whileHover={{ scale: 1.05, y: -2 }}
        className={`relative px-3 py-2 transition-colors duration-300 ${
          activeSection === 'tarifs' 
            ? 'text-yellow-400 font-semibold' 
            : 'hover:text-yellow-400'
        }`}
      >
        Tarifs
        {activeSection === 'tarifs' && (
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"
            layoutId="activeSection"
          />
        )}
      </motion.button>
      
      <motion.button 
        onClick={() => scrollToSection('temoignages')}
        whileHover={{ scale: 1.05, y: -2 }}
        className={`relative px-3 py-2 transition-colors duration-300 ${
          activeSection === 'temoignages' 
            ? 'text-yellow-400 font-semibold' 
            : 'hover:text-yellow-400'
        }`}
      >
        Témoignages
        {activeSection === 'temoignages' && (
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"
            layoutId="activeSection"
          />
        )}
      </motion.button>
      
      <motion.button 
        onClick={() => scrollToSection('contact')}
        whileHover={{ scale: 1.05, y: -2 }}
        className={`relative px-3 py-2 transition-colors duration-300 ${
          activeSection === 'contact' 
            ? 'text-yellow-400 font-semibold' 
            : 'hover:text-yellow-400'
        }`}
      >
        Contact
        {activeSection === 'contact' && (
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"
            layoutId="activeSection"
          />
        )}
      </motion.button>
    </>
  );

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 px-6 py-3 flex items-center justify-between transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <motion.div 
        className="flex items-center gap-3 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={() => scrollToSection('accueil')}
      >
        <motion.div
          className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
          whileHover={{ rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src="/logo.png" 
            alt="SuperCouture" 
            className="h-6 w-6 md:h-8 md:w-8"
          />
        </motion.div>
        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
          SuperCouture
        </span>
      </motion.div>

      <nav className="hidden md:flex items-center gap-2">
        {navLinks}
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-white"
          aria-label="Changer le mode sombre"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
        >
          <User size={18} />
          Connexion
        </motion.button>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="md:hidden p-2 bg-gray-200 dark:bg-slate-700 rounded-lg"
        onClick={() => setMenuOpen(true)}
        aria-label="Ouvrir le menu"
      >
        <Menu size={24} className="text-gray-800 dark:text-white" />
      </motion.button>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 w-80 h-full bg-white dark:bg-slate-900 z-50 flex flex-col p-6 shadow-xl"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SuperCouture
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full bg-gray-200 dark:bg-slate-700"
                  aria-label="Fermer le menu"
                >
                  <X size={24} className="text-gray-800 dark:text-white" />
                </motion.button>
              </div>
              
              <nav className="flex flex-col gap-4 text-lg">
                {['accueil', 'recommandations', 'offres', 'tarifs', 'temoignages', 'contact'].map((section) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    whileHover={{ x: 10 }}
                    className={`py-3 px-4 rounded-lg text-left transition-colors ${
                      activeSection === section
                        ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                        : 'hover:bg-gray-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.button>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700 flex flex-col gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-white"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  {darkMode ? 'Mode clair' : 'Mode sombre'}
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 px-4 rounded-lg font-medium"
                >
                  <User size={18} />
                  Connexion
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}