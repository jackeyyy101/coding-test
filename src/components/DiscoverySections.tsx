import { FlameKindling, IceCreamCone, SunMedium, Wine } from "lucide-react";
import { categories, restaurants, zones } from "@/data/food";
import { Chip, RankNumber, ScoreBadge, SectionHeading } from "@/components/FoodPrimitives";
import { useFoodStore } from "@/store/useFoodStore";
import { cn } from "@/lib/utils";

const categoryIcons = {
  SunMedium,
  FlameKindling,
  Wine,
  IceCreamCone,
};

export function CategorySection() {
  const activeTag = useFoodStore((state) => state.activeTag);
  const setActiveTag = useFoodStore((state) => state.setActiveTag);

  return (
    <section id="categories" className="section-shell scroll-mt-28 py-12 md:py-16 lg:py-20">
      <SectionHeading
        title="热门分类"
        description="按真实场景找店，比单纯看菜系更快。把下班、约会、聚餐、独处这些情绪也一起算进去。"
        action={
          <>
            <Chip active>年轻社交</Chip>
            <Chip>内容优先</Chip>
          </>
        }
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => {
          const Icon = categoryIcons[category.icon];
          return (
            <button
              key={category.id}
              type="button"
              className={cn(
                "interactive-card surface-card flex h-full flex-col gap-4 p-5 text-left",
                activeTag === category.title && "border-[var(--food-line-strong)] bg-[var(--food-primary-50)]",
              )}
              onClick={() => setActiveTag(category.title)}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--food-primary-50)] text-[var(--food-primary)]">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-xl font-bold text-[var(--food-text)]">{category.title}</span>
                <span className="mt-2 line-clamp-3 block text-sm text-[var(--food-text-muted)]">{category.description}</span>
              </span>
              <span className="mt-auto flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export function RankingSection() {
  const rankingMode = useFoodStore((state) => state.rankingMode);
  const setRankingMode = useFoodStore((state) => state.setRankingMode);
  const setActiveTag = useFoodStore((state) => state.setActiveTag);

  return (
    <section id="ranking" className="section-shell scroll-mt-28 py-12 md:py-16 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-8">
        <div className="surface-card p-5 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <h2 className="food-h2 balanced-title text-[var(--food-text)]">同城热榜</h2>
              <p className="mt-3 max-w-xl food-body text-[var(--food-text-muted)]">
                把热度、点评可信度和营业状态合在一起看，今晚能不能立刻出发，一眼就知道。
              </p>
            </div>
            <button
              type="button"
              className="outline-button self-start md:self-auto"
              onClick={() => setRankingMode(rankingMode === "今晚热榜" ? "周末热榜" : "今晚热榜")}
            >
              {rankingMode}
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-3">
            {restaurants.map((restaurant, index) => (
              <button
                key={restaurant.id}
                type="button"
                className={cn(
                  "interactive-row flex w-full items-start gap-4 rounded-[var(--radius-md)] border border-[var(--food-line)] p-4 text-left",
                  index === 0 ? "bg-[var(--food-card-muted)]" : "bg-[var(--food-card)]",
                )}
                onClick={() => setActiveTag(restaurant.name)}
              >
                <RankNumber>{String(index + 1).padStart(2, "0")}</RankNumber>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span className="truncate text-lg font-bold text-[var(--food-text)]">{restaurant.name}</span>
                    <ScoreBadge>{restaurant.score} 分</ScoreBadge>
                  </span>
                  <span className="mt-2 line-clamp-2 block text-sm text-[var(--food-text-muted)]">
                    {restaurant.area} · {restaurant.description}
                  </span>
                  <span className="mt-3 flex flex-wrap gap-2">
                    {restaurant.tags.map((tag) => (
                      <Chip
                        key={tag}
                        className={cn(tag.includes("排队") ? "status-busy" : tag.includes("适合") || tag.includes("营业") ? "status-open" : "")}
                      >
                        {tag}
                      </Chip>
                    ))}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-4">
          <article className="soft-card p-5 md:p-6">
            <h2 className="text-2xl font-bold text-[var(--food-text)]">热区动态</h2>
            <div className="mt-5 grid gap-3">
              {zones.map((zone, index) => (
                <button
                  key={zone.name}
                  type="button"
                  className="flex items-start justify-between gap-3 rounded-[var(--radius-md)] border border-[var(--food-line)] bg-[var(--food-card)] p-4 text-left transition hover:-translate-y-0.5"
                  onClick={() => setActiveTag(zone.name)}
                >
                  <span className="min-w-0">
                    <span className="block truncate font-semibold text-[var(--food-text)]">{zone.name}</span>
                    <span className="mt-1 line-clamp-2 block text-sm text-[var(--food-text-muted)]">{zone.description}</span>
                  </span>
                  <Chip active={index === 0} className="shrink-0">{zone.tag}</Chip>
                </button>
              ))}
            </div>
          </article>
          <article className="surface-card p-5 md:p-6">
            <h2 className="text-2xl font-bold text-[var(--food-text)]">收藏理由</h2>
            <div className="mt-5 flex flex-col gap-4">
              {["真实点评优先", "营业状态清楚", "氛围感明确"].map((title, index) => (
                <div key={title}>
                  <p className="font-semibold text-[var(--food-text)]">{title}</p>
                  <p className="mt-1 line-clamp-2 text-sm text-[var(--food-text-muted)]">
                    {[
                      "优先看具体菜品、排队体验和适合什么局，不靠空泛五星评价。",
                      "临时起意要出发时，先确认是否营业和适不适合排队。",
                      "能快速判断是适合聊天、约会、独处还是朋友聚餐。",
                    ][index]}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
