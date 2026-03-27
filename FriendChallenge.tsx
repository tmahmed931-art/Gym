import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { NUTRITION_GUIDE } from '../constants';
import { motion } from 'motion/react';
import { Apple, CheckCircle2, Droplets, Flame, Beef, Wheat } from 'lucide-react';

const icons = [Beef, Wheat, Flame, Droplets, Apple];

const NutritionGuide: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  return (
    <div className="space-y-10">
      <header className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 bg-[#ff6b35] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,107,53,0.2)]">
          <Apple size={24} />
        </div>
        <h1 className="text-4xl font-black tracking-tight">{t('nutrition.title')}</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-8">
          {NUTRITION_GUIDE.map((section, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[40px] group hover:border-[#ff6b35]/30 transition-all flex items-start gap-8"
              >
                <div className="w-16 h-16 bg-[#ff6b35]/10 rounded-2xl flex items-center justify-center text-[#ff6b35] shrink-0 group-hover:scale-110 group-hover:bg-[#ff6b35] group-hover:text-white transition-all duration-500">
                  <Icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#ff6b35] transition-colors">
                    {language === 'en' ? section.titleEn : section.titleAr}
                  </h3>
                  <p className="text-gray-500 text-lg leading-relaxed font-medium">
                    {language === 'en' ? section.contentEn : section.contentAr}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="lg:sticky lg:top-24 h-fit">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-white/5 p-12 rounded-[50px] relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-10 tracking-tight">
                {isRtl ? 'نصائح ذهبية' : 'Golden Tips'}
              </h2>
              <ul className="space-y-8">
                {[
                  isRtl ? 'تجنب السكر المضاف' : 'Avoid added sugar',
                  isRtl ? 'نم 7-9 ساعات يومياً' : 'Sleep 7-9 hours daily',
                  isRtl ? 'جهز وجباتك مسبقاً' : 'Meal prep in advance',
                  isRtl ? 'استمع لجسدك' : 'Listen to your body'
                ].map((tip, i) => (
                  <li key={i} className="flex items-center gap-6 group">
                    <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-xl font-medium text-gray-400 group-hover:text-white transition-colors">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#ff6b35]/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NutritionGuide;
