import { useState } from "react";
import { MapPin, Search, UtensilsCrossed } from "lucide-react";
import { cities, quickTags } from "@/data/food";
import { useFoodStore } from "@/store/useFoodStore";
import { Chip } from "@/components/FoodPrimitives";
import { cn } from "@/lib/utils";

export function Header() {
  const [cityOpen, setCityOpen] = useState(false);
  const activeTag = useFoodStore((state) => state.activeTag);
  const navKeyword = useFoodStore((state) => state.navKeyword);
  const selectedCity = useFoodStore((state) => state.selectedCity);
  const setActiveTag = useFoodStore((state) => state.setActiveTag);
  const setNavKeyword = useFoodStore((state) => state.setNavKeyword);
  const setSelectedCity = useFoodStore((state) => state.setSelectedCity);
  const showToast = useFoodStore((state) => state.showToast);

  const chooseCity = (city: string) => {
    setSelectedCity(city);
    setCityOpen(false);
  };

  return (
    <header className="nav-shell fixed inset-x-0 top-0 z-50">
      <div className="section-shell flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            className="flex min-w-0 items-center gap-3 text-left"
            onClick={() => showToast("欢迎来到饭局，今天先找一口稳的")}
            aria-label="饭局首页"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--food-primary)] text-[var(--food-card)]">
              <UtensilsCrossed className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="food-display block truncate text-xl font-extrabold leading-none text-[var(--food-text)]">
                饭局
              </span>
              <span className="food-body-sm block truncate text-[var(--food-text-muted)]">城市年轻人的探店社区</span>
            </span>
          </button>
          <CityPicker
            compact
            open={cityOpen}
            selectedCity={selectedCity}
            onToggle={() => setCityOpen((value) => !value)}
            onChoose={chooseCity}
          />
        </div>

        <div className="flex flex-col gap-3 lg:min-w-0 lg:flex-1 lg:flex-row lg:items-center">
          <div className="flex flex-1 items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--food-line)] bg-[var(--food-card)] p-2">
            <CityPicker
              open={cityOpen}
              selectedCity={selectedCity}
              onToggle={() => setCityOpen((value) => !value)}
              onChoose={chooseCity}
            />
            <div className="flex min-w-0 flex-1 items-center gap-2" role="search" aria-label="同城搜索">
              <Search className="h-4 w-4 shrink-0 text-[var(--food-text-muted)]" />
              <input
                className="search-input w-full min-w-0 border-0 px-0 py-0 outline-none"
                aria-label="搜索餐厅、菜系或区域"
                placeholder="搜索餐厅、菜系或区域"
                value={navKeyword}
                onChange={(event) => setNavKeyword(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    showToast(navKeyword ? `正在搜索「${navKeyword}」` : "先输入想找的餐厅、菜系或区域");
                  }
                }}
              />
            </div>
          </div>
          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto">
            {quickTags.map((tag) => (
              <Chip key={tag} asButton active={activeTag === tag} className="shrink-0" onClick={() => setActiveTag(tag)}>
                {tag}
              </Chip>
            ))}
          </div>
          <button type="button" className="primary-button shrink-0" onClick={() => showToast("已准备打开应用下载引导")}>
            下载应用
          </button>
        </div>
      </div>
    </header>
  );
}

type CityPickerProps = {
  compact?: boolean;
  open: boolean;
  selectedCity: string;
  onToggle: () => void;
  onChoose: (city: string) => void;
};

function CityPicker({ compact, open, selectedCity, onToggle, onChoose }: CityPickerProps) {
  return (
    <div className={cn("relative", compact ? "lg:hidden" : "hidden lg:block")}>
      <button
        type="button"
        className="nav-item inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--food-line)] bg-[var(--food-card-muted)] px-3 text-sm font-semibold text-[var(--food-text)] whitespace-nowrap"
        aria-expanded={open}
        onClick={onToggle}
      >
        <MapPin className="h-4 w-4" />
        {selectedCity}
      </button>
      {open ? (
        <div className="absolute right-0 top-12 z-[60] w-44 rounded-[var(--radius-lg)] border border-[var(--food-line)] bg-[var(--food-bg-elevated)] p-2 shadow-[var(--shadow-float)] backdrop-blur">
          {cities.map((city) => (
            <button
              key={city}
              type="button"
              className={cn(
                "w-full rounded-[var(--radius-md)] px-3 py-2 text-left text-sm font-semibold transition-colors hover:bg-[var(--food-primary-50)] hover:text-[var(--food-primary)]",
                selectedCity === city ? "bg-[var(--food-primary-50)] text-[var(--food-primary)]" : "text-[var(--food-text)]",
              )}
              onClick={() => onChoose(city)}
            >
              {city}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
