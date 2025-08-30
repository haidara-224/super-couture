import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Star, MapPin, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1",
      title: "Votre plateforme de mise en relation avec les meilleurs couturiers",
      description: "Trouvez le couturier idéal pour vos besoins, découvrez des offres exclusives et bénéficiez d'un accompagnement personnalisé.",
      rating: 4.9,
      reviews: 245,
      location: "Paris, Lyon, Marseille"
    },
    {
      id: 2,
      image:"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
      title: "Des créations sur mesure à votre image",
      description: "Des vêtements uniques qui reflètent votre personnalité, réalisés par des artisans passionnés.",
      rating: 4.8,
      reviews: 187,
      location: "Toulouse, Bordeaux, Lille"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5",
      title: "Rendez-vous facile avec les experts de la mode",
      description: "Planifiez une consultation en ligne ou en atelier selon vos disponibilités.",
      rating: 4.7,
      reviews: 132,
      location: "Nantes, Strasbourg, Montpellier"
    }
  ];
const intervalRef = useRef(null);

useEffect(() => {
  if (autoPlay) {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
  }
  return () => clearInterval(intervalRef.current);
}, [autoPlay]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section  className="relative bg-gradient-to-br mt-15 from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
     
          <div className="w-full md:w-1/2 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {slides[currentSlide].description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < Math.floor(slides[currentSlide].rating) 
                          ? "text-yellow-400 fill-yellow-400" 
                          : "text-gray-300"
                        } 
                      />
                    ))}
                    <span className="ml-2 font-semibold">{slides[currentSlide].rating}</span>
                  </div>
                  <span>•</span>
                  <span>{slides[currentSlide].reviews} avis</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <MapPin size={18} />
                  <span>{slides[currentSlide].location}</span>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
                  >
                    Trouver un couturier
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white dark:bg-slate-700 text-gray-800 dark:text-white border border-gray-300 dark:border-slate-600 rounded-full font-medium shadow hover:shadow-md transition-all"
                  >
                    Voir les créations
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
        
            <div className="flex items-center gap-4 mt-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="p-2 bg-white dark:bg-slate-700 rounded-full shadow-md"
                aria-label="Slide précédent"
              >
                <ChevronLeft size={24} className="text-gray-700 dark:text-white" />
              </motion.button>
              
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-purple-600 w-8' 
                        : 'bg-gray-300 dark:bg-slate-600'
                    }`}
                    aria-label={`Aller au slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="p-2 bg-white dark:bg-slate-700 rounded-full shadow-md"
                aria-label="Slide suivant"
              >
                <ChevronRight size={24} className="text-gray-700 dark:text-white" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setAutoPlay(!autoPlay)}
                className="p-2 bg-white dark:bg-slate-700 rounded-full shadow-md ml-2"
                aria-label={autoPlay ? "Arrêter le carousel" : "Démarrer le carousel"}
              >
                {autoPlay ? (
                  <Pause size={20} className="text-gray-700 dark:text-white" />
                ) : (
                  <Play size={20} className="text-gray-700 dark:text-white" />
                )}
              </motion.button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7 }}
                  className="aspect-video md:aspect-square"
                >
                  <img 
                    src={slides[currentSlide].image} 
                    alt={`Slide ${currentSlide + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70" />
                </motion.div>
              </AnimatePresence>
            
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 left-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl py-3 px-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-purple-600" />
                  <span className="font-semibold text-sm">+500 rendez-vous/mois</span>
                </div>
              </motion.div>
            </div>
        
            <div className="absolute -z-10 -top-6 -right-6 w-64 h-64 bg-purple-200 dark:bg-purple-900 rounded-full opacity-30 blur-3xl" />
            <div className="absolute -z-10 -bottom-6 -left-6 w-56 h-56 bg-blue-200 dark:bg-blue-900 rounded-full opacity-30 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}