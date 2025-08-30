import React, { useState } from 'react';
import { Target, Users, Heart, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const [hovered, setHovered] = useState(false);

  const stats = [
    { value: '500+', label: 'Couturiers experts' },
    { value: '98%', label: 'Clients satisfaits' },
    { value: '10k+', label: 'Créations réalisées' },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Nous célébrons l'artisanat et la créativité de chaque couturier."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Nous garantissons un service de qualité et des résultats exceptionnels."
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Nous connectons les passionnés de mode et les talents artisanaux."
    }
  ];

  return (
    <section id='offres' className="py-16 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
    
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <motion.img 
                src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c" 
                alt="Couturière professionnelle" 
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"></div>
              

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-6 left-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl py-3 px-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-pink-600" />
                  <span className="font-semibold text-sm">Artisans certifiés</span>
                </div>
              </motion.div>
            </div>
            

            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-pink-200 dark:bg-pink-900 rounded-full opacity-30 blur-3xl"></div>
          </motion.div>


          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5"
          >
            <div className="mb-2">
              <span className="inline-block px-4 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium mb-4">
                Notre histoire
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              À propos de SuperCouture
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              SuperCouture facilite la rencontre entre clients et couturiers professionnels. Notre mission : 
              valoriser le savoir-faire artisanal et offrir une expérience unique à chaque utilisateur.
            </p>

        
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

      
            <div className="space-y-4 mb-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                      <IconComponent size={20} className="text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

    
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -10px rgba(192, 38, 211, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-medium flex items-center gap-2 group"
            >
              Découvrir notre histoire
              <motion.div
                animate={{ x: hovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}