import { ArrowRight } from "lucide-react";
import heroFood from "@/assets/food/hero-food.jpg";
import { heroRanks, hotTags, insightCards } from "@/data/food";
import { Chip, RankNumber, ScoreBadge, SearchField } from "@/components/FoodPrimitives";
import { useFoodStore } from "@/store/useFoodStore";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const activeTag = useFoodStore((state) => state.activeTag);
  const heroKeyword = useFoodStore((state) => state.heroKeyword);
  const setActiveTag = useFoodStore((state) => state.setActiveTag);
  const setHeroKeyword = useFoodStore((state) => state.setHeroKeyword);
  const showToast = useFoodStore((state) => state.showToast);

  return (
    <section className="section-shell pt-32 pb-14 md:pt-36 md:pb-18 lg:pt-40 lg:pb-24">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-10">
        <div className="flex min-w-0 flex-col gap-6 lg:gap-8">
          <div className="min-w-0 animate-rise">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Chip active>本周新上线</Chip>
              <span className="food-body-sm text-[var(--food-text-muted)]">新增 12 家编辑首刷餐厅</span>
            </div>
            <h1 className="food-display food-h1 balanced-title text-[var(--food-text)]">饭局</h1>
            <p className="mt-5 max-w-2xl food-body text-[var(--food-text-muted)]">
              同城热门榜单、真实点评和即时灵感都放在这里。下班约饭、周末探店、临时起意想吃点好的，都能更快找到想去的那一口。
            </p>
          </div>
          <div className="flex flex-wrap gap-2 animate-rise animation-delay-100">
            {["同城热搜", "今晚约饭", "真实点评"].map((tag) => (
              <Chip key={tag} asButton active={activeTag === tag} onClick={() => setActiveTag(tag)}>
                {tag}
              </Chip>
            ))}
          </div>
          <div className="surface-card p-4 animate-rise animation-delay-200 md:p-5">
            <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
              <SearchField
                value={heroKeyword}
                ariaLabel="搜索推荐内容"
                placeholder="想找适合约会、朋友聚餐还是一人食？"
                onChange={setHeroKeyword}
                onSubmit={() => showToast(heroKeyword ? `正在为你找「${heroKeyword}」` : "试试输入约会、朋友聚餐或一人食")}
              />
              <div className="flex items-center gap-3">
                <button type="button" className="outline-button px-4" onClick={() => showToast("可以在顶部切换城市")}>
                  切城市
                </button>
                <button
                  type="button"
                  className="primary-button px-5"
                  onClick={() => showToast(heroKeyword ? `已按「${heroKeyword}」更新推荐` : "已为你打开今晚热榜")}
                >
                  去发现
                </button>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="no-scrollbar flex items-center gap-2 overflow-x-auto">
                <span className="food-body-sm shrink-0 text-[var(--food-text-muted)]">热门标签</span>
                {hotTags.map((tag) => (
                  <Chip key={tag} asButton active={activeTag === tag} className="shrink-0" onClick={() => setActiveTag(tag)}>
                    {tag}
                  </Chip>
                ))}
              </div>
              <button type="button" className="text-button shrink-0" onClick={() => scrollToSection("ranking")}>
                看榜单
                <ArrowRight className="h-4 w-4 transition-transform duration-150" />
              </button>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {insightCards.map((card) => (
              <div key={card.title} className="soft-card p-4">
                <p className="food-body-sm text-[var(--food-text-muted)]">{card.label}</p>
                <p className="mt-2 text-lg font-bold text-[var(--food-text)]">{card.title}</p>
                <p className="mt-1 line-clamp-2 text-sm text-[var(--food-text-muted)]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-4 lg:gap-5">
          <div className="media-frame interactive-card surface-card p-3 md:p-4">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)]">
              <img
                src={heroFood}
                alt="带有热闹都市气氛的美食拼盘主视觉"
                className="h-[20rem] w-full object-cover md:h-[24rem] lg:h-[27rem]"
              />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--food-bg-elevated)] px-3 py-2 backdrop-blur">
                <ScoreBadge>热度上升</ScoreBadge>
                <span className="text-sm font-semibold text-[var(--food-text)] whitespace-nowrap">今晚最适合组局</span>
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-[var(--radius-lg)] bg-[var(--food-bg-elevated)] p-4 backdrop-blur-sm">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-lg font-bold text-[var(--food-text)]">今日热榜</p>
                    <p className="mt-1 line-clamp-2 text-sm text-[var(--food-text-muted)]">
                      从热门收藏、真实点评和今晚营业状态里，快速锁定值得马上出发的餐厅。
                    </p>
                  </div>
                  <Chip active className="shrink-0">榜单中</Chip>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {heroRanks.map((item) => (
              <article key={item.id} className="interactive-card surface-card p-4 md:p-5">
                <div className="flex items-start justify-between gap-3">
                  <RankNumber>{item.rank}</RankNumber>
                  <ScoreBadge>{item.score}</ScoreBadge>
                </div>
                <h2 className="mt-4 truncate text-xl font-bold text-[var(--food-text)]">{item.name}</h2>
                <p className="mt-2 line-clamp-2 text-sm text-[var(--food-text-muted)]">{item.description}</p>
                <div className="hover-detail mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Chip key={tag} className={cn(tag.includes("营业") ? "status-open" : tag.includes("排队") ? "status-busy" : "")}>
                      {tag}
                    </Chip>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
