import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SUPPLEMENTS } from '../constants';
import { motion } from 'motion/react';
import { Pill, Star, Info, CheckCircle2, AlertCircle } from 'lucide-react';

const Supplements: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  return (
    <div className="space-y-10">
      <header className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 bg-[#ff6b35] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,107,53,0.2)]">
          <Pill size={24} />
        </div>
        <h1 className="text-4xl font-black tracking-tight">{t('supplements.title')}</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SUPPLEMENTS.map((supplement, index) => (
          <motion.div
            key={supplement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[40px] group hover:border-[#ff6b35]/30 transition-all relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-[#ff6b35]/10 rounded-2xl flex items-center justify-center text-[#ff6b35] group-hover:scale-110 group-hover:bg-[#ff6b35] group-hover:text-white transition-all duration-500">
                  <Pill size={28} />
                </div>
                {supplement.isEssential && (
                  <div className="flex items-center gap-2 bg-[#ff6b35]/10 text-[#ff6b35] px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-[#ff6b35]/20">
                    <Star size={14} fill="currentColor" />
                    {isRtl ? 'أساسي' : 'Essential'}
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl font-bold mb-6 group-hover:text-[#ff6b35] transition-colors">
                {language === 'en' ? supplement.nameEn : supplement.nameAr}
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium mb-8">
                {language === 'en' ? supplement.descriptionEn : supplement.descriptionAr}
              </p>
              
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Info size={16} className="text-[#00d4ff]" />
                <span>{isRtl ? 'استشر طبيبك دائماً' : 'Always consult your doctor'}</span>
              </div>
            </div>
            
            {/* Decorative Glow */}
            <div className={`absolute -bottom-20 -right-20 w-40 h-40 ${supplement.isEssential ? 'bg-[#ff6b35]/5' : 'bg-blue-500/5'} rounded-full blur-3xl group-hover:opacity-100 transition-opacity`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Supplements;
