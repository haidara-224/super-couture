import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause, Heart, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [hovered, setHovered] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Fatoumata Diallo",
      role: "Client particulier",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      rating: 5,
      content: "SuperCouture a transformé ma vision de la mode ! J'ai trouvé une couturière exceptionnelle qui a créé ma robe de mariée sur mesure. Un service impeccable et un résultat au-delà de mes attentes.",
      date: "15 Nov 2023",
      project: "Robe de mariée sur mesure"
    },
    {
      id: 2,
      name: "Mamadou Bah",
      role: "Entrepreneur",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 5,
      content: "En tant qu'homme d'affaires, l'image est cruciale. Les costumes sur mesure que j'ai commandés sont d'une qualité exceptionnelle. Service professionnel et délais respectés.",
      date: "22 Oct 2023",
      project: "Costumes professionnels"
    },
    {
      id: 3,
      name: "Aïssatou Camara",
      role: "Styliste",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
      rating: 4,
      content: "Je collabore régulièrement avec les couturiers de SuperCouture pour mes clients. La plateforme facilite énormément la mise en relation et garantit un travail de qualité.",
      date: "5 Dec 2023",
      project: "Collection printemps/été"
    },
    {
      id: 4,
      name: "Ibrahima Sow",
      role: "Marié",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db1604",
      rating: 5,
      content: "Pour mon mariage traditionnel, j'ai trouvé le parfait tailleur grâce à SuperCouture. Le boubou et le chapeau étaient parfaitement assortis et de grande qualité.",
      date: "30 Sep 2023",
      project: "Tenue traditionnelle de mariage"
    },
    {
      id: 5,
      name: "Kadiatou Touré",
      role: "Influenceuse mode",
      avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
      rating: 5,
      content: "Je recommande vivement SuperCouture ! Les créations uniques que j'ai commandées ont toujours suscité l'admiration de ma communauté. Qualité et originalité au rendez-vous.",
      date: "18 Nov 2023",
      project: "Tenues influenceuse"
    }
  ];

  useEffect(() => {
    let interval;
    if (autoPlay && !hovered) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, hovered, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial(currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="temoignages" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white mb-6"
          >
            <Star className="fill-white" size={20} />
            <span className="font-semibold">Témoignages</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Ils nous font confiance
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Découvrez les expériences authentiques de nos clients satisfaits
          </p>
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          <div 
            className="relative rounded-3xl overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"
              >
     
                <div className="absolute top-6 right-6 text-amber-400 opacity-20">
                  <Quote size={48} />
                </div>

                <div className="flex flex-col md:flex-row gap-8">
          
                  <div className="flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="relative"
                    >
                      <img
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                        <Heart size={20} className="text-white fill-white" />
                      </div>
                    </motion.div>

                    <div className="mt-6 text-center">
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className={i < testimonials[currentTestimonial].rating
                              ? "text-amber-400 fill-amber-400"
                              : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-4">
                        <Calendar size={14} />
                        <span>{testimonials[currentTestimonial].date}</span>
                      </div>
                    </div>
                  </div>

             
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-amber-600 dark:text-amber-400 font-medium mb-4">
                      {testimonials[currentTestimonial].role}
                    </p>

                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                        {testimonials[currentTestimonial].project}
                      </span>
                    </div>

                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic">
                      "{testimonials[currentTestimonial].content}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

 
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={24} className="text-slate-700 dark:text-slate-300" />
            </motion.button>


            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial
                      ? 'bg-amber-500 w-8'
                      : 'bg-gray-300 dark:bg-slate-600'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg"
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={24} className="text-slate-700 dark:text-slate-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setAutoPlay(!autoPlay)}
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg ml-2"
              aria-label={autoPlay ? "Arrêter le carousel" : "Démarrer le carousel"}
            >
              {autoPlay ? (
                <Pause size={20} className="text-slate-700 dark:text-slate-300" />
              ) : (
                <Play size={20} className="text-slate-700 dark:text-slate-300" />
              )}
            </motion.button>
          </div>
        </div>


        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: "98%", label: "Clients satisfaits" },
            { value: "500+", label: "Témoignages" },
            { value: "4.9/5", label: "Note moyenne" },
            { value: "24h", label: "Support réponse" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-slate-600 dark:text-slate-300 mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Rejoignez nos clients satisfaits et partagez votre expérience
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Laisser un témoignage
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}