import { GymMachine, Exercise, Tactic, Supplement, TrainingVideo, NutritionSection } from './types';

export const GYM_MACHINES: GymMachine[] = [
  {
    id: 'bench-press',
    nameEn: 'Bench Press',
    nameAr: 'البنش برس',
    descriptionEn: 'The primary machine for chest development.',
    descriptionAr: 'الجهاز الأساسي لتطوير عضلات الصدر.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400&h=300',
    reps: '3x10',
    weight: 'Moderate to Heavy'
  },
  {
    id: 'lat-pulldown',
    nameEn: 'Lat Pulldown',
    nameAr: 'آلة العريض',
    descriptionEn: 'Targets the latissimus dorsi for back width.',
    descriptionAr: 'يستهدف عضلات الظهر العريضة لعرض الظهر.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=400&h=300',
    reps: '3x12',
    weight: 'Moderate'
  },
  {
    id: 'leg-press',
    nameEn: 'Leg Press',
    nameAr: 'ماكينة الأرجل',
    descriptionEn: 'Excellent for overall leg development.',
    descriptionAr: 'ممتاز لتطوير عضلات الأرجل بشكل عام.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400&h=300',
    reps: '4x10',
    weight: 'Heavy'
  },
  {
    id: 'cable-machine',
    nameEn: 'Cable Machine',
    nameAr: 'كابل ماشين',
    descriptionEn: 'Versatile machine for various exercises.',
    descriptionAr: 'جهاز متعدد الاستخدامات لمختلف التمارين.',
    image: 'https://images.unsplash.com/photo-1591940742878-13aba4b7a35e?auto=format&fit=crop&q=80&w=400&h=300',
    reps: '3x15',
    weight: 'Light to Moderate'
  },
  {
    id: 'shoulder-press',
    nameEn: 'Shoulder Press',
    nameAr: 'ضغط الأكتاف',
    descriptionEn: 'Targets the deltoids for shoulder strength.',
    descriptionAr: 'يستهدف العضلات الدالية لقوة الأكتاف.',
    image: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&q=80&w=400&h=300',
    reps: '3x10',
    weight: 'Moderate'
  },
  {
    id: 'leg-extension',
    nameEn: 'Leg Extension',
    nameAr: 'تمديد الأرجل',
    descriptionEn: 'Isolates the quadriceps.',
    descriptionAr: 'يعزل عضلات الفخذ الأمامية.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=400&h=300',
    reps: '3x15',
    weight: 'Light'
  },
  {
    id: 'leg-curl',
    nameEn: 'Leg Curl',
    nameAr: 'لف الأرجل',
    descriptionEn: 'Isolates the hamstrings.',
    descriptionAr: 'يعزل عضلات الفخذ الخلفية.',
    image: 'https://images.unsplash.com/photo-1591940742878-13aba4b7a35e?auto=format&fit=crop&q=80&w=400&h=300',
    reps: '3x15',
    weight: 'Light'
  },
  {
    id: 'chest-fly',
    nameEn: 'Chest Fly',
    nameAr: 'تفتيح الصدر',
    descriptionEn: 'Isolates the pectoral muscles.',
    descriptionAr: 'يعزل عضلات الصدر.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400&h=300',
    reps: '3x12',
    weight: 'Light to Moderate'
  },
  {
    id: 'seated-row',
    nameEn: 'Seated Row',
    nameAr: 'تجديف جالس',
    descriptionEn: 'Targets the middle back muscles.',
    descriptionAr: 'يستهدف عضلات منتصف الظهر.',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=400&h=300',
    reps: '3x12',
    weight: 'Moderate'
  },
  {
    id: 'smith-machine',
    nameEn: 'Smith Machine',
    nameAr: 'سميث ماشين',
    descriptionEn: 'Guided barbell for safe heavy lifting.',
    descriptionAr: 'بار موجه للرفع الثقيل الآمن.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400&h=300',
    reps: '3x8',
    weight: 'Heavy'
  }
];

export const EXERCISES: Exercise[] = [
  // Compound
  { id: 'squat', nameEn: 'Squat', nameAr: 'القرفصاء', categoryEn: 'Compound', categoryAr: 'مركب', descriptionEn: 'King of all exercises.', descriptionAr: 'ملك كل التمارين.', image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'deadlift', nameEn: 'Deadlift', nameAr: 'الرفعة الميتة', categoryEn: 'Compound', categoryAr: 'مركب', descriptionEn: 'Total body strength.', descriptionAr: 'قوة الجسم بالكامل.', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400&h=300' },
  // Chest
  { id: 'db-press', nameEn: 'Dumbbell Press', nameAr: 'ضغط دمبل', categoryEn: 'Chest', categoryAr: 'الصدر', descriptionEn: 'Great for chest isolation.', descriptionAr: 'رائع لعزل الصدر.', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'incline-press', nameEn: 'Incline Press', nameAr: 'ضغط مائل', categoryEn: 'Chest', categoryAr: 'الصدر', descriptionEn: 'Targets upper chest.', descriptionAr: 'يستهدف الصدر العلوي.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400&h=300' },
  // Back
  { id: 'pull-up', nameEn: 'Pull Up', nameAr: 'عقلة', categoryEn: 'Back', categoryAr: 'الظهر', descriptionEn: 'Best bodyweight back exercise.', descriptionAr: 'أفضل تمرين ظهر بوزن الجسم.', image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'bent-over-row', nameEn: 'Bent Over Row', nameAr: 'تجديف منحني', categoryEn: 'Back', categoryAr: 'الظهر', descriptionEn: 'Builds back thickness.', descriptionAr: 'يبني سمك الظهر.', image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=400&h=300' },
  // Legs
  { id: 'lunge', nameEn: 'Lunge', nameAr: 'طعن', categoryEn: 'Legs', categoryAr: 'الأرجل', descriptionEn: 'Great for balance and legs.', descriptionAr: 'رائع للتوازن والأرجل.', image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'calf-raise', nameEn: 'Calf Raise', nameAr: 'رفع السمانة', categoryEn: 'Legs', categoryAr: 'الأرجل', descriptionEn: 'Targets the calves.', descriptionAr: 'يستهدف السمانة.', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400&h=300' },
  // Shoulders
  { id: 'lateral-raise', nameEn: 'Lateral Raise', nameAr: 'رفرفة جانبي', categoryEn: 'Shoulders', categoryAr: 'الأكتاف', descriptionEn: 'Builds shoulder width.', descriptionAr: 'يبني عرض الأكتاف.', image: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'front-raise', nameEn: 'Front Raise', nameAr: 'رفرفة أمامي', categoryEn: 'Shoulders', categoryAr: 'الأكتاف', descriptionEn: 'Targets front delts.', descriptionAr: 'يستهدف الدالية الأمامية.', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400&h=300' },
  // Arms
  { id: 'bicep-curl', nameEn: 'Bicep Curl', nameAr: 'تبادل بايسبس', categoryEn: 'Arms', categoryAr: 'الذراعين', descriptionEn: 'Classic bicep exercise.', descriptionAr: 'تمرين بايسبس كلاسيكي.', image: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'tricep-pushdown', nameEn: 'Tricep Pushdown', nameAr: 'ترايسبس كابل', categoryEn: 'Arms', categoryAr: 'الذراعين', descriptionEn: 'Targets the triceps.', descriptionAr: 'يستهدف الترايسبس.', image: 'https://images.unsplash.com/photo-1591940742878-13aba4b7a35e?auto=format&fit=crop&q=80&w=400&h=300' },
  // Core
  { id: 'plank', nameEn: 'Plank', nameAr: 'بلانك', categoryEn: 'Core', categoryAr: 'البطن', descriptionEn: 'Best for core stability.', descriptionAr: 'الأفضل لاستقرار البطن.', image: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'crunch', nameEn: 'Crunch', nameAr: 'طحن بطن', categoryEn: 'Core', categoryAr: 'البطن', descriptionEn: 'Classic abs exercise.', descriptionAr: 'تمرين بطن كلاسيكي.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400&h=300' },
  // Cardio
  { id: 'running', nameEn: 'Running', nameAr: 'جري', categoryEn: 'Cardio', categoryAr: 'القلب', descriptionEn: 'Great for endurance.', descriptionAr: 'رائع للتحمل.', image: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 'cycling', nameEn: 'Cycling', nameAr: 'ركوب الدراجة', categoryEn: 'Cardio', categoryAr: 'القلب', descriptionEn: 'Low impact cardio.', descriptionAr: 'كارديو منخفض التأثير.', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=400&h=300' },
];

export const TACTICS: Tactic[] = [
  { id: 'progressive-overload', titleEn: 'Progressive Overload', titleAr: 'الحمل التدريجي', descriptionEn: 'Gradually increasing the weight, frequency, or number of repetitions in your strength training routine.', descriptionAr: 'زيادة الوزن أو التكرار أو عدد المجموعات تدريجياً في روتين تدريب القوة الخاص بك.' },
  { id: 'push-pull-legs', titleEn: 'Push-Pull-Legs', titleAr: 'تقسيم Push-Pull-Legs', descriptionEn: 'A training split that categorizes exercises into pushing, pulling, and leg movements.', descriptionAr: 'تقسيم تدريبي يصنف التمارين إلى حركات دفع وسحب وحركات أرجل.' },
  { id: 'compound-first', titleEn: 'Compound Movements First', titleAr: 'الحركات المركبة أولاً', descriptionEn: 'Prioritize exercises that work multiple muscle groups simultaneously.', descriptionAr: 'إعطاء الأولوية للتمارين التي تعمل على مجموعات عضلية متعددة في وقت واحد.' },
  { id: 'rest-recovery', titleEn: 'Rest and Recovery', titleAr: 'الراحة والتعافي', descriptionEn: 'Ensuring adequate sleep and rest days for muscle growth and repair.', descriptionAr: 'ضمان النوم الكافي وأيام الراحة لنمو العضلات وإصلاحها.' },
  { id: 'mind-muscle', titleEn: 'Mind-Muscle Connection', titleAr: 'اتصال العقل بالعضلة', descriptionEn: 'Focusing on the muscle you are working to maximize activation.', descriptionAr: 'التركيز على العضلة التي تعمل عليها لزيادة التنشيط.' },
  { id: 'supersets', titleEn: 'Supersets and Drop Sets', titleAr: 'المجموعات الفائقة والإسقاط', descriptionEn: 'Advanced techniques to increase intensity and volume.', descriptionAr: 'تقنيات متقدمة لزيادة الكثافة والحجم.' }
];

export const SUPPLEMENTS: Supplement[] = [
  { id: 'whey-protein', nameEn: 'Whey Protein', nameAr: 'واي بروتين', descriptionEn: 'Fast-digesting protein for muscle recovery.', descriptionAr: 'بروتين سريع الهضم لتعافي العضلات.', isEssential: true },
  { id: 'creatine', nameEn: 'Creatine', nameAr: 'كرياتين', descriptionEn: 'Increases strength and power output.', descriptionAr: 'يزيد من القوة والقدرة الانفجارية.', isEssential: true },
  { id: 'bcaas', nameEn: 'BCAAs', nameAr: 'بي سي ايه ايه', descriptionEn: 'Branched-chain amino acids for muscle preservation.', descriptionAr: 'أحماض أمينية متشعبة السلسلة للحفاظ على العضلات.', isEssential: false },
  { id: 'pre-workout', nameEn: 'Pre-Workout', nameAr: 'بريفورك أوت', descriptionEn: 'Boosts energy and focus during training.', descriptionAr: 'يعزز الطاقة والتركيز أثناء التدريب.', isEssential: false },
  { id: 'fish-oil', nameEn: 'Fish Oil', nameAr: 'زيت السمك', descriptionEn: 'Supports joint health and reduces inflammation.', descriptionAr: 'يدعم صحة المفاصل ويقلل من الالتهابات.', isEssential: false },
  { id: 'vitamin-d3', nameEn: 'Vitamin D3', nameAr: 'فيتامين د3', descriptionEn: 'Essential for bone health and hormone production.', descriptionAr: 'ضروري لصحة العظام وإنتاج الهرمونات.', isEssential: false }
];

export const TRAINING_VIDEOS: TrainingVideo[] = [
  { id: 'squat-form', titleEn: 'Perfect Squat Form', titleAr: 'شكل القرفصاء المثالي', url: 'https://www.youtube.com/watch?v=gcNh17Ckjgg', thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400&h=225' },
  { id: 'deadlift-cycle', titleEn: 'Master Deadlift Cycle', titleAr: 'دورة الرفع الرئيسية', url: 'https://www.youtube.com/watch?v=op9kVnSso6Q', thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400&h=225' },
  { id: 'bench-secrets', titleEn: 'Bench Press Secrets', titleAr: 'أسرار مكبس الصدر', url: 'https://www.youtube.com/watch?v=vthMCtgVtFw', thumbnail: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400&h=225' },
  { id: 'back-width', titleEn: 'Back Width Training', titleAr: 'تمرين عرض الظهر', url: 'https://www.youtube.com/watch?v=eGo4IYlbE5g', thumbnail: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=400&h=225' },
  { id: 'arm-generator', titleEn: 'Arm Routine Generator', titleAr: 'روتين مولد الذراع', url: 'https://www.youtube.com/watch?v=H530fWElko8', thumbnail: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=400&h=225' },
  { id: 'core-strength', titleEn: 'Core Strength Basics', titleAr: 'أساسيات قوة القلب', url: 'https://www.youtube.com/watch?v=dJlFmxiL11s', thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400&h=225' }
];

export const NUTRITION_GUIDE: NutritionSection[] = [
  { id: 'protein', titleEn: 'Protein Intake', titleAr: 'تناول البروتين', contentEn: 'Aim for 0.8-1g of protein per pound of body weight.', contentAr: 'استهدف تناول 0.8-1 جرام من البروتين لكل رطل من وزن الجسم.' },
  { id: 'carbs', titleEn: 'Carb Timing', titleAr: 'توقيت الكربوهيدرات', contentEn: 'Focus on consuming carbs before and after your workout.', contentAr: 'ركز على تناول الكربوهيدرات قبل وبعد التمرين.' },
  { id: 'fats', titleEn: 'Healthy Fats', titleAr: 'الدهون الصحية', contentEn: 'Fats should make up 20-30% of your daily calories.', contentAr: 'يجب أن تشكل الدهون 20-30% من سعراتك الحرارية اليومية.' },
  { id: 'hydration', titleEn: 'Hydration', titleAr: 'الترطيب', contentEn: 'Drink 0.5-1 gallon of water daily.', contentAr: 'اشرب 0.5-1 جالون من الماء يومياً.' },
  { id: 'calories', titleEn: 'Calorie Goals', titleAr: 'أهداف السعرات الحرارية', contentEn: 'Adjust calories based on your goal (bulk, cut, or maintain).', contentAr: 'اضبط السعرات الحرارية بناءً على هدفك (تضخيم، تنشيف، أو محافظة).' }
];

export const WORKOUT_PLANS = [
  { id: 'push', nameEn: 'Push Day', nameAr: 'يوم الدفع', exercises: ['bench-press', 'shoulder-press', 'chest-fly', 'tricep-pushdown'] },
  { id: 'pull', nameEn: 'Pull Day', nameAr: 'يوم السحب', exercises: ['lat-pulldown', 'seated-row', 'bent-over-row', 'bicep-curl'] },
  { id: 'legs', nameEn: 'Leg Day', nameAr: 'يوم الأرجل', exercises: ['squat', 'leg-press', 'leg-extension', 'leg-curl'] },
  { id: 'cardio', nameEn: 'Cardio', nameAr: 'قلبي', exercises: ['running', 'cycling'] },
  { id: 'arms', nameEn: 'Arm Day', nameAr: 'يوم الذراعين', exercises: ['bicep-curl', 'tricep-pushdown'] },
  { id: 'core', nameEn: 'Core', nameAr: 'يوم البطن', exercises: ['plank', 'crunch'] }
];
