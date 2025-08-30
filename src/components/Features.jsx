import React, { useState } from 'react';
import { Sparkles, Heart, Crown, Star, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      title: "Recommandations personnalisées",
      description: "Recevez des suggestions de couturiers selon vos besoins et votre style.",
      icon: Sparkles,
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-purple-50",
      delay: 0.1
    },
    {
      id: 2,
      title: "Offres exclusives",
      description: "Profitez de tarifs avantageux et d'offres spéciales réservées à nos membres.",
      icon: Crown,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      delay: 0.2
    },
    {
      id: 3,
      title: "Accompagnement dédié",
      description: "Bénéficiez d'un suivi personnalisé tout au long de votre projet couture.",
      icon: Heart,
      color: "from-rose-500 to-red-600",
      bgColor: "bg-gradient-to-br from-rose-50 to-red-50",
      delay: 0.3
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id='recommandations' className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
 
      <div className="absolute top-10 left-10 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-amber-500/10 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Pourquoi choisir SuperCouture ?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez tous les avantages qui rendent votre expérience unique et mémorable
          </p>
        </motion.div>

    
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredCard(feature.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`relative rounded-2xl p-8 shadow-lg ${feature.bgColor} dark:bg-slate-700 border border-white/50 dark:border-slate-600/50 overflow-hidden group`}
              >
     
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm"></div>
            
                <motion.div 
                  className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ 
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.5 } 
                  }}
                >
                  <IconComponent size={32} className="text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 relative z-10">
                  {feature.description}
                </p>
                
                {/* Lien/action */}
                <motion.div 
                  className="flex items-center text-sm font-medium relative z-10"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    Découvrir
                  </span>
                  <motion.div
                    animate={{ x: hoveredCard === feature.id ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={16} className={`ml-2 ${hoveredCard === feature.id ? feature.color : 'text-gray-400'}`} />
                  </motion.div>
                </motion.div>
                
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-pink-400/30"></div>
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-purple-400/30"></div>
              </motion.div>
            );
          })}
        </motion.div>


        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -10px rgba(192, 38, 211, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold text-lg flex items-center gap-2 mx-auto"
          >
            <Zap size={20} className="fill-yellow-300 text-yellow-300" />
            Commencer maintenant
            <Star size={20} className="fill-yellow-300 text-yellow-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}