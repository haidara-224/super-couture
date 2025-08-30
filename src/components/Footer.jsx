import React, { useState } from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube, ArrowUp, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowScrollTop(window.scrollY > 300);
    });
  }

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
  
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    services: [
      { name: 'Couture sur mesure', href: '#' },
      { name: 'Rétouches', href: '#' },
      { name: 'Créations personnalisées', href: '#' },
      { name: 'Consultation style', href: '#' }
    ],
    company: [
      { name: 'À propos', href: '#' },
      { name: 'Notre équipe', href: '#' },
      { name: 'Carrières', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Guide des tailles', href: '#' },
      { name: 'Retours & Échanges', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Youtube, href: '#', color: 'hover:text-red-400' }
  ];

  return (
    <>
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
   
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="py-12 border-b border-slate-700"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Restez informé des dernières tendances</h3>
              <p className="text-slate-300 mb-6">
                Inscrivez-vous à notre newsletter pour recevoir des offres exclusives et des conseils de style
              </p>
              
              <AnimatePresence mode="wait">
                {subscribed ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-green-500/20 border border-green-500/30 rounded-lg p-4"
                  >
                    <p className="text-green-300">🎉 Merci pour votre inscription !</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                  >
                    <input
                      type="email"
                      placeholder="Votre email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                      required
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg font-semibold whitespace-nowrap"
                    >
                      S'inscrire
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

 
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
                SuperCouture
              </h3>
              <p className="text-slate-300 mb-6 max-w-md">
                Votre plateforme de mise en relation avec les meilleurs couturiers. 
                Nous valorisons le savoir-faire artisanal et offrons une expérience unique.
              </p>
              
          
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

       
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-lg mb-4 capitalize">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-slate-300 hover:text-white transition-colors"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

   
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="py-8 border-t border-slate-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-300">Email</p>
                  <p className="font-medium">contact@supercouture.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-300">Téléphone</p>
                  <p className="font-medium">+224 600 000 000</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-300">Adresse</p>
                  <p className="font-medium">Conakry, Guinée</p>
                </div>
              </div>
            </div>
          </motion.div>

  
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="py-6 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex items-center gap-2 text-slate-300">
              <span>&copy; {new Date().getFullYear()} SuperCouture. Tous droits réservés.</span>
              <Heart size={14} className="fill-pink-500 text-pink-500" />
            </div>
            
            <div className="flex gap-6 mt-4 md:mt-0">
              <motion.a 
                href="#" 
                whileHover={{ y: -2 }}
                className="text-slate-300 hover:text-white transition-colors"
              >
                Mentions légales
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -2 }}
                className="text-slate-300 hover:text-white transition-colors"
              >
                Politique de confidentialité
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -2 }}
                className="text-slate-300 hover:text-white transition-colors"
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        </div>
      </footer>


      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} className="text-white" />
          </motion.button>
        )}
      </AnimatePresence>


      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 left-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={24} className="text-white" />
      </motion.button>
    </>
  );
}