import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRAINING_VIDEOS } from '../constants';
import { motion } from 'motion/react';
import { Video, Play, ExternalLink, Clock } from 'lucide-react';

const TrainingVideos: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  return (
    <div className="space-y-10">
      <header className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 bg-[#ff6b35] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,107,53,0.2)]">
          <Video size={24} />
        </div>
        <h1 className="text-4xl font-black tracking-tight">{t('videos.title')}</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TRAINING_VIDEOS.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#0a0a0a] border border-white/5 rounded-[40px] overflow-hidden group hover:border-[#ff6b35]/30 transition-all"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={video.thumbnail} 
                alt={language === 'en' ? video.titleEn : video.titleAr} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,107,53,0.4)] group-hover:scale-125 transition-transform">
                  <Play size={28} fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10 flex items-center gap-2">
                <Clock size={12} />
                <span>10:00</span>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-bold mb-6 group-hover:text-[#ff6b35] transition-colors">
                {language === 'en' ? video.titleEn : video.titleAr}
              </h3>
              
              <a 
                href={video.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-white/5 border border-white/5 py-4 rounded-2xl flex items-center justify-center gap-3 font-bold hover:bg-[#ff6b35] hover:text-white transition-all group/btn active:scale-95"
              >
                {isRtl ? 'مشاهدة الآن' : 'Watch Now'}
                <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrainingVideos;
