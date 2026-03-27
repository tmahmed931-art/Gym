import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'app.name': 'D. Gym Pro',
    'nav.home': 'Home',
    'nav.machines': 'Machines',
    'nav.exercises': 'Exercises',
    'nav.tactics': 'Tactics',
    'nav.supplements': 'Supplements',
    'nav.videos': 'Videos',
    'nav.nutrition': 'Nutrition',
    'nav.planner': 'Planner',
    'nav.tracker': 'Tracker',
    'nav.challenge': 'Challenge',
    'nav.contact': 'Contact',
    'common.login': 'Login with Google',
    'common.logout': 'Logout',
    'common.welcome': 'Welcome back',
    'common.streak': 'Current Streak',
    'common.totalSessions': 'Total Sessions',
    'common.completed': 'Completed',
    'common.days': 'Days',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong',
    'common.success': 'Success!',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.submit': 'Submit',
    'common.language': 'العربية',
    'home.hero.title': 'Elevate Your Fitness Journey',
    'home.hero.subtitle': 'Track, Plan, and Compete with D. Gym Pro',
    'home.stats.title': 'Your Performance',
    'machines.title': 'Gym Machines',
    'exercises.title': 'Exercise Library',
    'tactics.title': 'Workout Tactics',
    'supplements.title': 'Supplements',
    'videos.title': 'Training Videos',
    'nutrition.title': 'Nutrition Guide',
    'planner.title': 'Workout Planner',
    'tracker.title': 'Progress Tracker',
    'challenge.title': 'Friend Challenge',
    'contact.title': 'Contact Us',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'challenge.shareCode': 'Your Share Code',
    'challenge.friends': 'Friends Stats',
    'challenge.enterCode': 'Enter Friend Code',
    'challenge.add': 'Add Friend',
  },
  ar: {
    'app.name': 'دي جيم برو',
    'nav.home': 'الرئيسية',
    'nav.machines': 'الأجهزة',
    'nav.exercises': 'التمارين',
    'nav.tactics': 'الاستراتيجيات',
    'nav.supplements': 'المكملات',
    'nav.videos': 'الفيديوهات',
    'nav.nutrition': 'التغذية',
    'nav.planner': 'المخطط',
    'nav.tracker': 'المتتبع',
    'nav.challenge': 'التحدي',
    'nav.contact': 'التواصل',
    'common.login': 'تسجيل الدخول بجوجل',
    'common.logout': 'تسجيل الخروج',
    'common.welcome': 'مرحباً بك مجدداً',
    'common.streak': 'المتتالية الحالية',
    'common.totalSessions': 'إجمالي الجلسات',
    'common.completed': 'مكتمل',
    'common.days': 'أيام',
    'common.save': 'حفظ',
    'common.cancel': 'إلغاء',
    'common.delete': 'حذف',
    'common.loading': 'جاري التحميل...',
    'common.error': 'حدث خطأ ما',
    'common.success': 'تم بنجاح!',
    'common.back': 'رجوع',
    'common.next': 'التالي',
    'common.submit': 'إرسال',
    'common.language': 'English',
    'home.hero.title': 'ارتقِ برحلة لياقتك البدنية',
    'home.hero.subtitle': 'تتبع، خطط، وتنافس مع دي جيم برو',
    'home.stats.title': 'أداؤك الشخصي',
    'machines.title': 'أجهزة الصالة',
    'exercises.title': 'مكتبة التمارين',
    'tactics.title': 'استراتيجيات التدريب',
    'supplements.title': 'المكملات الغذائية',
    'videos.title': 'فيديوهات التدريب',
    'nutrition.title': 'دليل التغذية',
    'planner.title': 'مخطط التدريب',
    'tracker.title': 'متتبع التقدم',
    'challenge.title': 'تحدي الأصدقاء',
    'contact.title': 'اتصل بنا',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'challenge.shareCode': 'كود المشاركة الخاص بك',
    'challenge.friends': 'إحصائيات الأصدقاء',
    'challenge.enterCode': 'أدخل كود الصديق',
    'challenge.add': 'إضافة صديق',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang) setLanguage(savedLang);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  const t = (key: string) => translations[language][key] || key;
  const isRtl = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isRtl }}>
      <div dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
