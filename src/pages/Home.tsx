import { useEffect } from "react";
import { Header } from "@/components/Header";
import { CategorySection, RankingSection } from "@/components/DiscoverySections";
import { DownloadSection, EditorsPickSection, FoodFooter, ReviewSection } from "@/components/ContentSections";
import { HeroSection } from "@/components/HeroSection";
import { Toast } from "@/components/FoodPrimitives";
import { useFoodStore } from "@/store/useFoodStore";

export default function Home() {
  const toastMessage = useFoodStore((state) => state.toastMessage);
  const clearToast = useFoodStore((state) => state.clearToast);

  useEffect(() => {
    if (!toastMessage) {
      return;
    }

    const timer = window.setTimeout(() => clearToast(), 2200);
    return () => window.clearTimeout(timer);
  }, [clearToast, toastMessage]);

  return (
    <main className="min-h-screen">
      <div className="page-shell">
        <Header />
        <HeroSection />
        <CategorySection />
        <RankingSection />
        <EditorsPickSection />
        <ReviewSection />
        <DownloadSection />
        <FoodFooter />
      </div>
      <Toast message={toastMessage} />
    </main>
  );
}
