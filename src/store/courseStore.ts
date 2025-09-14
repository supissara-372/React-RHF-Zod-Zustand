import { create } from "zustand";

interface Course {
  id: string;
  nameTH: string;
  nameEN: string;
  credit: number;
  teacher: string;
  grade: string;   // A, B+, B, C+, ...
}

interface CourseState {
  courses: Course[];
  dropped: Course[];
  addCourse: (course: Course) => void;
  dropCourse: (id: string) => void;
}

export const useCourseStore = create<CourseState>((set) => ({
  courses: [],
  dropped: [],
  addCourse: (course) =>
    set((state) => ({ courses: [...state.courses, course] })),
  dropCourse: (id) =>
    set((state) => {
      const courseToDrop = state.courses.find((c) => c.id === id);
      if (!courseToDrop) return state;
      return {
        courses: state.courses.filter((c) => c.id !== id),
        dropped: [...state.dropped, courseToDrop],
      };
    }),
}));
