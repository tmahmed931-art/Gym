import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { UserProfile } from '../types';
import { motion } from 'motion/react';
import { Flame, Trophy, CheckCircle2, ArrowRight, Dumbbell, Calendar, Users } from 'lucide-react';

interface HomeProps {
  profile: UserProfile | null;
  setCurrentView: (view: any) => void;
}

const Home: React.FC<HomeProps> = ({ profile, setCurrentView }) => {
  const { t, isRtl } = useLanguage();

  const stats = [
    { label: t('common.streak'), value: profile?.currentStreak || 0, icon: Flame, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { label: t('common.totalSessions'), value: profile?.totalSessions || 0, icon: Trophy, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { label: t('common.completed'), value: profile?.completedSessions || 0, icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-500/10' },
  ];

  const quickActions = [
    { id: 'planner', title: t('nav.planner'), icon: Calendar, color: 'bg-blue-500' },
    { id: 'exercises', title: t('nav.exercises'), icon: Dumbbell, color: 'bg-purple-500' },
    { id: 'challenge', title: t('nav.challenge'), icon: Users, color: 'bg-pink-500' },
  ];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#ff6b35] to-[#ff9f1c] p-10 lg:p-16 shadow-[0_20px_50px_rgba(255,107,53,0.2)]">
        <div className="relative z-10 max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl lg:text-6xl font-black mb-6 leading-tight"
          >
            {t('home.hero.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg lg:text-xl mb-10 leading-relaxed"
          >
            {t('home.hero.subtitle')}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => setCurrentView('planner')}
            className="bg-white text-[#ff6b35] font-bold py-4 px-8 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform active:scale-95 shadow-xl"
          >
            {t('nav.planner')}
            <ArrowRight size={20} className={isRtl ? 'rotate-180' : ''} />
          </motion.button>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Dumbbell size={400} className="absolute -top-20 -right-20 rotate-12" />
        </div>
      </section>

      {/* Stats Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <BarChart3 className="text-[#ff6b35]" />
          {t('home.stats.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl flex items-center gap-6 group hover:border-[#ff6b35]/30 transition-colors"
            >
              <div className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon size={32} />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">{stat.label}</p>
                <p className="text-3xl font-black tracking-tight">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-2xl font-bold mb-6">{t('common.next')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <motion.button
              key={action.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => setCurrentView(action.id)}
              className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl flex flex-col items-center gap-4 hover:bg-white/5 transition-all group"
            >
              <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform`}>
                <action.icon size={24} />
              </div>
              <span className="font-bold text-gray-400 group-hover:text-white transition-colors">{action.title}</span>
            </motion.button>
          ))}
        </div>
      </section>
    </div>
  );
};

import { BarChart3 } from 'lucide-react';

export default Home;
