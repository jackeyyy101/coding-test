import { create } from "zustand";

type FoodState = {
  activeTag: string;
  heroKeyword: string;
  navKeyword: string;
  rankingMode: "今晚热榜" | "周末热榜";
  savedItems: string[];
  selectedCity: string;
  toastMessage: string;
  setActiveTag: (tag: string) => void;
  setHeroKeyword: (keyword: string) => void;
  setNavKeyword: (keyword: string) => void;
  setRankingMode: (mode: "今晚热榜" | "周末热榜") => void;
  setSelectedCity: (city: string) => void;
  showToast: (message: string) => void;
  clearToast: () => void;
  toggleSavedItem: (id: string) => void;
};

export const useFoodStore = create<FoodState>((set) => ({
  activeTag: "同城热搜",
  heroKeyword: "",
  navKeyword: "",
  rankingMode: "今晚热榜",
  savedItems: ["tonight"],
  selectedCity: "上海",
  toastMessage: "",
  setActiveTag: (tag) => {
    set({ activeTag: tag, toastMessage: `已切换到「${tag}」推荐` });
  },
  setHeroKeyword: (keyword) => {
    set({ heroKeyword: keyword });
  },
  setNavKeyword: (keyword) => {
    set({ navKeyword: keyword });
  },
  setRankingMode: (mode) => {
    set({ rankingMode: mode, toastMessage: `已切换为${mode}` });
  },
  setSelectedCity: (city) => {
    set({ selectedCity: city, toastMessage: `已切换到${city}` });
  },
  showToast: (message) => {
    set({ toastMessage: message });
  },
  clearToast: () => {
    set({ toastMessage: "" });
  },
  toggleSavedItem: (id) => {
    set((state) => {
      const hasSaved = state.savedItems.includes(id);
      return {
        savedItems: hasSaved
          ? state.savedItems.filter((item) => item !== id)
          : [...state.savedItems, id],
        toastMessage: hasSaved ? "已从清单移除" : "已保存到今晚想吃",
      };
    });
  },
}));
