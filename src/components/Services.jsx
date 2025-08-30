import React, { useState } from 'react';
import { MessageCircle, Heart, Shield, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Conseils personnalisés",
      description: "Des experts à votre écoute pour vous guider dans vos choix et trouver la solution parfaite.",
      icon: MessageCircle,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      features: ["Consultation gratuite", "Recommandations sur mesure", "Guide style personnalisé"],
      delay: 0.1
    },
    {
      id: 2,
      title: "Satisfaction garantie",
      description: "Un accompagnement complet jusqu'à la livraison de votre commande avec garantie de qualité.",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      features: ["Garantie 30 jours", "Retours gratuits", "Modifications incluses"],
      delay: 0.2
    },
    {
      id: 3,
      title: "Support réactif",
      description: "Une équipe dédiée disponible 7j/7 pour répondre à toutes vos questions et demandes.",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      features: ["Support 24/7", "Résolution rapide", "Multi-canaux (chat, tel, email)"],
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
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -15,
      scale: 1.03,
      boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-green-500/10 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>Nos engagements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            Des services exceptionnels
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez pourquoi nos clients nous font confiance pour toutes leurs créations sur mesure
          </p>
        </motion.div>

  
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className={`relative rounded-2xl p-8 ${service.bgColor} dark:bg-slate-800 border border-white/50 dark:border-slate-700/50 overflow-hidden group`}
              >
           
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
          
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm"></div>
                
         
                <motion.div 
                  className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg mx-auto`}
                  whileHover={{ 
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.5 } 
                  }}
                >
                  <IconComponent size={32} className="text-white" />
                </motion.div>
                
         
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center relative z-10">
                  {service.description}
                </p>
                
               
                <ul className="space-y-3 mb-8 relative z-10">
                  {service.features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: service.delay + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                        <Zap size={12} className="text-white" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
         
                <motion.div 
                  className="flex items-center justify-center text-sm font-medium relative z-10"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    En savoir plus
                  </span>
                  <motion.div
                    animate={{ x: hoveredService === service.id ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={16} className={`ml-2 ${hoveredService === service.id ? `text-${service.color.split('-')[1]}-500` : 'text-gray-400'}`} />
                  </motion.div>
                </motion.div>
                
   
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-blue-400/30"></div>
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-pink-400/30"></div>
              </motion.div>
            );
          })}
        </motion.div>

 
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-6 bg-gradient-to-r from-blue-500 to-pink-500 rounded-2xl text-white text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">💫 Satisfaction 100% garantie</h3>
            <p className="opacity-90">
              Nous nous engageons à vous offrir une expérience exceptionnelle. Si vous n'êtes pas satisfait, 
              nous ferons tout pour rectifier la situation ou vous rembourser.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}