export interface UserProfile {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
  shareCode: string;
  totalSessions: number;
  completedSessions: number;
  currentStreak: number;
  lastWorkoutDate: string | null;
  friends?: string[]; // List of shareCodes
}

export interface Workout {
  id: string;
  uid: string;
  date: string;
  workoutName: string;
  exercises: string[];
  completed: boolean;
  dateCompleted: string | null;
}

export interface GymMachine {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  image: string;
  reps: string;
  weight: string;
}

export interface Exercise {
  id: string;
  nameEn: string;
  nameAr: string;
  categoryEn: string;
  categoryAr: string;
  descriptionEn: string;
  descriptionAr: string;
  image: string;
}

export interface Tactic {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
}

export interface Supplement {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  isEssential: boolean;
}

export interface TrainingVideo {
  id: string;
  titleEn: string;
  titleAr: string;
  url: string;
  thumbnail: string;
}

export interface NutritionSection {
  id: string;
  titleEn: string;
  titleAr: string;
  contentEn: string;
  contentAr: string;
}
