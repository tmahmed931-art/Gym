import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { WORKOUT_PLANS, EXERCISES } from '../constants';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Plus, CheckCircle2, ChevronRight, X, Dumbbell } from 'lucide-react';

interface WorkoutPlannerProps {
  uid: string;
}

const WorkoutPlanner: React.FC<WorkoutPlannerProps> = ({ uid }) => {
  const { t, language, isRtl } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSaveWorkout = async () => {
    if (!selectedPlan) return;
    setLoading(true);
    try {
      const plan = WORKOUT_PLANS.find(p => p.id === selectedPlan);
      if (!plan) return;

      await addDoc(collection(db, 'workouts'), {
        uid,
        date: selectedDate,
        workoutName: language === 'en' ? plan.nameEn : plan.nameAr,
        exercises: plan.exercises,
        completed: false,
        dateCompleted: null,
        createdAt: serverTimestamp()
      });
      
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, 'workouts');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <header className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 bg-[#ff6b35] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,107,53,0.2)]">
          <Calendar size={24} />
        </div>
        <h1 className="text-4xl font-black tracking-tight">{t('planner.title')}</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Plan Selection */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Plus className="text-[#ff6b35]" />
            {isRtl ? 'اختر خطة' : 'Choose a Plan'}
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {WORKOUT_PLANS.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`
                  p-6 rounded-3xl border text-left transition-all flex items-center justify-between group
                  ${selectedPlan === plan.id 
                    ? 'bg-[#ff6b35] border-[#ff6b35] text-white shadow-xl scale-[1.02]' 
                    : 'bg-[#0a0a0a] border-white/5 text-gray-400 hover:border-[#ff6b35]/30 hover:text-white'}
                `}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedPlan === plan.id ? 'bg-white/20' : 'bg-white/5 text-[#ff6b35]'}`}>
                    <Dumbbell size={20} />
                  </div>
                  <span className="font-bold text-lg">{language === 'en' ? plan.nameEn : plan.nameAr}</span>
                </div>
                {selectedPlan === plan.id && <CheckCircle2 size={24} />}
              </button>
            ))}
          </div>
        </div>

        {/* Date and Summary */}
        <div className="space-y-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Calendar className="text-[#00d4ff]" />
              {isRtl ? 'حدد التاريخ' : 'Set Date'}
            </h2>
            <input 
              type="date" 
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 text-xl font-bold focus:outline-none focus:border-[#ff6b35]/50 transition-all text-white"
            />
          </div>

          <AnimatePresence>
            {selectedPlan && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-white/5 p-8 rounded-[40px] shadow-2xl space-y-8"
              >
                <h3 className="text-xl font-bold text-[#ff6b35]">
                  {isRtl ? 'محتويات الجلسة' : 'Session Contents'}
                </h3>
                <div className="space-y-4">
                  {WORKOUT_PLANS.find(p => p.id === selectedPlan)?.exercises.map(exId => {
                    const ex = EXERCISES.find(e => e.id === exId);
                    return (
                      <div key={exId} className="flex items-center gap-4 text-gray-400 group">
                        <div className="w-2 h-2 bg-[#ff6b35] rounded-full group-hover:scale-150 transition-transform" />
                        <span className="font-medium group-hover:text-white transition-colors">
                          {language === 'en' ? ex?.nameEn : ex?.nameAr}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={handleSaveWorkout}
                  disabled={loading}
                  className={`
                    w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all active:scale-95
                    ${success ? 'bg-green-500 text-white' : 'bg-[#ff6b35] text-white hover:bg-[#ff8c5a] shadow-xl'}
                    ${loading ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                >
                  {loading ? t('common.loading') : success ? (
                    <>
                      <CheckCircle2 size={24} />
                      {t('common.success')}
                    </>
                  ) : (
                    <>
                      {t('common.save')}
                      <ChevronRight size={24} className={isRtl ? 'rotate-180' : ''} />
                    </>
                  )}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlanner;
