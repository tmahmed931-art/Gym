import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GYM_MACHINES } from '../constants';
import { motion } from 'motion/react';
import { Dumbbell, Info, Weight, Repeat } from 'lucide-react';

const GymMachines: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  return (
    <div className="space-y-10">
      <header className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 bg-[#ff6b35] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,107,53,0.2)]">
          <Dumbbell size={24} />
        </div>
        <h1 className="text-4xl font-black tracking-tight">{t('machines.title')}</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GYM_MACHINES.map((machine, index) => (
          <motion.div
            key={machine.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden group hover:border-[#ff6b35]/30 transition-all"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={machine.image} 
                alt={language === 'en' ? machine.nameEn : machine.nameAr} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#ff6b35] transition-colors">
                {language === 'en' ? machine.nameEn : machine.nameAr}
              </h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                {language === 'en' ? machine.descriptionEn : machine.descriptionAr}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-3 border border-white/5">
                  <Repeat size={18} className="text-[#ff6b35]" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{t('common.completed')}</p>
                    <p className="text-sm font-bold">{machine.reps}</p>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-3 border border-white/5">
                  <Weight size={18} className="text-[#00d4ff]" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{t('nav.machines')}</p>
                    <p className="text-sm font-bold truncate">{machine.weight}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GymMachines;
