import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { EXERCISES } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { Library, Search, Filter, ChevronRight } from 'lucide-react';

const ExercisesLibrary: React.FC = () => {
  const { t, language, isRtl } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(EXERCISES.map(e => language === 'en' ? e.categoryEn : e.categoryAr)));

  const filteredExercises = EXERCISES.filter(exercise => {
    const matchesSearch = (language === 'en' ? exercise.nameEn : exercise.nameAr).toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || (language === 'en' ? exercise.categoryEn : exercise.categoryAr) === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#ff6b35] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,107,53,0.2)]">
            <Library size={24} />
          </div>
          <h1 className="text-4xl font-black tracking-tight">{t('exercises.title')}</h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#ff6b35] transition-colors" size={20} />
            <input 
              type="text" 
              placeholder={t('common.loading')} // Using loading as placeholder for simplicity
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-[#0a0a0a] border border-white/5 rounded-2xl py-3 pl-12 pr-6 focus:outline-none focus:border-[#ff6b35]/50 transition-all w-full sm:w-64"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-2xl font-bold transition-all whitespace-nowrap ${!selectedCategory ? 'bg-[#ff6b35] text-white' : 'bg-[#0a0a0a] text-gray-500 hover:text-white'}`}
            >
              {isRtl ? 'الكل' : 'All'}
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-2xl font-bold transition-all whitespace-nowrap ${selectedCategory === category ? 'bg-[#ff6b35] text-white' : 'bg-[#0a0a0a] text-gray-500 hover:text-white'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredExercises.map((exercise, index) => (
            <motion.div
              layout
              key={exercise.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, delay: index * 0.02 }}
              className="bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden group hover:border-[#ff6b35]/30 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={exercise.image} 
                  alt={language === 'en' ? exercise.nameEn : exercise.nameAr} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                  {language === 'en' ? exercise.categoryEn : exercise.categoryAr}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#ff6b35] transition-colors">
                  {language === 'en' ? exercise.nameEn : exercise.nameAr}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                  {language === 'en' ? exercise.descriptionEn : exercise.descriptionAr}
                </p>
                
                <button className="mt-6 flex items-center gap-2 text-[#ff6b35] text-sm font-bold group/btn">
                  {t('common.loading')} {/* Placeholder for details */}
                  <ChevronRight size={16} className={`group-hover/btn:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExercisesLibrary;
