import React, { useState } from 'react';
import { Check, Crown, Star, User, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [annualBilling, setAnnualBilling] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const pricingPlans = [
    {
      id: 1,
      title: "Accompagnement",
      description: "Suivi personnalisé pour tous vos projets",
      monthlyPrice: 0,
      annualPrice: 0,
      currency: "GNF",
      features: [
        "Accès aux recommandations de base",
        "Contact avec 3 couturiers/mois",
        "Support par email",
        "Évaluations et commentaires"
      ],
      buttonText: "Commencer gratuitement",
      buttonColor: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      popular: false,
      icon: User
    },
    {
      id: 2,
      title: "Offre Premium",
      description: "Accès complet à toutes les fonctionnalités",
      monthlyPrice: 290000,
      annualPrice: 2900000,
      currency: "GNF",
      features: [
        "Recommandations personnalisées illimitées",
        "Contact avec tous les couturiers",
        "Support prioritaire 24/7",
        "Accès aux offres exclusives",
        "Réservations en avant-première",
        "Guide style personnalisé"
      ],
      buttonText: "S'abonner maintenant",
      buttonColor: "from-amber-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      popular: true,
      icon: Crown
    },
    {
      id: 3,
      title: "Espace Couturier",
      description: "Visibilité et gestion de votre activité",
      monthlyPrice: 190000, 
      annualPrice: 1900000, 
      currency: "GNF",
      features: [
        "Profil professionnel mis en avant",
        "Gestion des rendez-vous en ligne",
        "Outils de gestion de clients",
        "Statistiques détaillées",
        "Formation en ligne incluse",
        "Certification officielle"
      ],
      buttonText: "Devenir partenaire",
      buttonColor: "from-blue-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      popular: false,
      icon: Star
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-GN', {
      maximumFractionDigits: 0
    }).format(price);
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id='tarifs' className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">

      <div className="absolute top-10 left-10 w-24 h-24 bg-green-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Nos formules d'abonnement
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choisissez la formule qui correspond à vos besoins et bénéficiez d'un accompagnement sur mesure
          </p>


          <div className="flex items-center justify-center mt-8 gap-4">
            <span className={`text-sm font-medium ${!annualBilling ? 'text-green-600' : 'text-gray-500'}`}>
              Facturation mensuelle
            </span>
            <button
              onClick={() => setAnnualBilling(!annualBilling)}
              className="relative w-14 h-7 flex items-center bg-gradient-to-r from-green-500 to-blue-500 rounded-full p-1 cursor-pointer"
            >
              <motion.div
                className="w-5 h-5 bg-white rounded-full shadow-md"
                animate={{ x: annualBilling ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${annualBilling ? 'text-blue-600' : 'text-gray-500'}`}>
                Facturation annuelle
              </span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                -2 mois offerts
              </span>
            </div>
          </div>
        </motion.div>


        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan) => {
            const IconComponent = plan.icon;
            const price = annualBilling ? plan.annualPrice : plan.monthlyPrice;
            const period = annualBilling ? 'an' : 'mois';
            
            return (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredPlan(plan.id)}
                onHoverEnd={() => setHoveredPlan(null)}
                className={`relative rounded-2xl p-8 border-2 ${plan.borderColor} ${plan.bgColor} dark:bg-slate-800 dark:border-slate-700 overflow-hidden group ${
                  plan.popular ? 'ring-2 ring-amber-300 dark:ring-amber-500' : ''
                }`}
              >
          
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-4 py-1 rounded-bl-2xl rounded-tr-2xl">
                    <div className="flex items-center gap-1">
                      <Zap size={12} className="fill-white" />
                      <span>Populaire</span>
                    </div>
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.buttonColor} flex items-center justify-center mb-6 shadow-lg`}>
                  <IconComponent size={32} className="text-white" />
                </div>

       
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {plan.description}
                </p>

       
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-800 dark:text-white">
                      {price === 0 ? 'Gratuit' : `${formatPrice(price)} GNF`}
                    </span>
                    {price > 0 && (
                      <span className="text-gray-500 dark:text-gray-400">/{period}</span>
                    )}
                  </div>
                  {annualBilling && price > 0 && (
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                      Soit {formatPrice(Math.round(plan.monthlyPrice))} GNF/mois
                    </p>
                  )}
                </div>

           
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 bg-gradient-to-r ${plan.buttonColor} text-white rounded-xl font-semibold flex items-center justify-center gap-2 group-hover:shadow-lg transition-shadow`}
                >
                  {plan.buttonText}
                  <motion.div
                    animate={{ x: hoveredPlan === plan.id ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

  
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl"
        >
          <p className="text-blue-700 dark:text-blue-300 text-sm">
            💡 Tous nos abonnements incluent une période d'essai de 7 jours sans engagement
          </p>
        </motion.div>
      </div>
    </section>
  );
}