import React, { useState } from 'react';
import { Expand, Heart, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Robe de soirée sur mesure",
      title: "Robe de soirée élégante",
      category: "Soirée",
      likes: 128
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
      alt: "Costume professionnel sur mesure",
      title: "Costume d'affaires",
      category: "Professionnel",
      likes: 96
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      alt: "Robe de mariée artisanale",
      title: "Robe de mariée romantique",
      category: "Mariage",
      likes: 215
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
      alt: "Veste moderne personnalisée",
      title: "Veste tendance",
      category: "Décontracté",
      likes: 87
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1",
      alt: "Ensemble printanier floral",
      title: "Ensemble printanier",
      category: "Printemps",
      likes: 142
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1545361367-3202270671e7",
      alt: "Tenue de cérémonie traditionnelle",
      title: "Tenue traditionnelle",
      category: "Cérémonie",
      likes: 178
    }
  ];

  const openLightbox = (index) => {
    setSelectedImage(galleryItems[index]);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (lightboxIndex + 1) % galleryItems.length;
    } else {
      newIndex = (lightboxIndex - 1 + galleryItems.length) % galleryItems.length;
    }
    setSelectedImage(galleryItems[newIndex]);
    setLightboxIndex(newIndex);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
 
      <div className="absolute top-10 left-10 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Nos réalisations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez les créations uniques de nos couturiers talentueux
          </p>
        </motion.div>

  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-slate-800 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
    
              <div className="aspect-square overflow-hidden">
                <motion.img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

       
              <motion.div 
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <Expand size={24} className="text-white" />
                </div>
              </motion.div>

       
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent"
              >
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <div className="flex justify-between items-center mt-2">
                  <span className="px-2 py-1 bg-pink-600 rounded-full text-xs">{item.category}</span>
                  <div className="flex items-center gap-1">
                    <Heart size={16} className="fill-white text-white" />
                    <span className="text-sm">{item.likes}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

 
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
    
                <button
                  className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors z-10"
                  onClick={closeLightbox}
                >
                  <X size={32} />
                </button>

      
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors z-10"
                  onClick={() => navigateLightbox('prev')}
                >
                  <ChevronLeft size={32} />
                </button>

                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors z-10"
                  onClick={() => navigateLightbox('next')}
                >
                  <ChevronRight size={32} />
                </button>

       
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>

  
                <div className="bg-white/10 backdrop-blur-sm rounded-b-xl p-4 text-white mt-2">
                  <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-pink-600 rounded-full text-sm">
                      {selectedImage.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <Heart size={20} className="fill-white text-white" />
                      <span>{selectedImage.likes} j'aime</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-shadow">
            Voir plus de réalisations
          </button>
        </motion.div>
      </div>
    </section>
  );
}