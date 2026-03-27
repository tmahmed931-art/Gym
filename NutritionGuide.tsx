import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TACTICS } from '../constants';
import { motion } from 'motion/react';
import { Target, Zap, Shield, Brain, Repeat, ArrowUpRight } from 'lucide-react';

const icons = [Zap, Shield, Target, Brain, Repeat, ArrowUpRight];

const WorkoutTactics: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  return (
    <div className="space-y-10">
      <header className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 bg-[#ff6b35] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,107,53,0.2)]">
          <Target size={24} />
        </div>
        <h1 className="text-4xl font-black tracking-tight">{t('tactics.title')}</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TACTICS.map((tactic, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={tactic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[40px] group hover:border-[#ff6b35]/30 transition-all relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#ff6b35]/10 rounded-2xl flex items-center justify-center text-[#ff6b35] mb-8 group-hover:scale-110 group-hover:bg-[#ff6b35] group-hover:text-white transition-all duration-500">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-[#ff6b35] transition-colors">
                  {language === 'en' ? tactic.titleEn : tactic.titleAr}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed font-medium">
                  {language === 'en' ? tactic.descriptionEn : tactic.descriptionAr}
                </p>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#ff6b35]/5 rounded-full blur-3xl group-hover:bg-[#ff6b35]/10 transition-colors" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutTactics;
