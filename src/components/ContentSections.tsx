import { Bookmark, Smartphone } from "lucide-react";
import editorFood from "@/assets/food/editor-food.jpg";
import { downloadPicks, editorPicks, reviews } from "@/data/food";
import { Chip, SectionHeading } from "@/components/FoodPrimitives";
import { useFoodStore } from "@/store/useFoodStore";
import { cn } from "@/lib/utils";

export function EditorsPickSection() {
  const setActiveTag = useFoodStore((state) => state.setActiveTag);

  return (
    <section id="editors" className="section-shell scroll-mt-28 py-12 md:py-16 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8">
        <div className="flex min-w-0 flex-col justify-between gap-5">
          <div className="min-w-0">
            <h2 className="food-h2 balanced-title text-[var(--food-text)]">编辑精选</h2>
            <p className="mt-3 max-w-xl food-body text-[var(--food-text-muted)]">
              编辑会把适合分享、值得专门跑一趟和适合二刷的店分开讲，让你不只是看图种草，还能判断今晚到底值不值得去。
            </p>
          </div>
          <article className="interactive-card surface-card overflow-hidden">
            <div className="grid gap-0 md:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]">
              <img src={editorFood} alt="朋友聚餐与桌面菜品特写" className="h-72 w-full object-cover md:h-full" />
              <div className="flex flex-col justify-between gap-5 p-5 md:p-6">
                <div>
                  <h2 className="text-2xl font-bold text-[var(--food-text)]">深夜小馆</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Chip active>本周精选</Chip>
                    <Chip>适合分享</Chip>
                  </div>
                  <p className="mt-3 line-clamp-4 text-sm text-[var(--food-text-muted)]">
                    一间把夜宵、聊天和轻松酒水平衡得很好的小馆。最适合三五个人下班后慢慢吃，推荐椒盐鸡翅、炭烤时蔬和热红酒。
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["人均 ¥112", "营业至 01:00", "推荐菜 3 款"].map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="grid gap-4">
          {editorPicks.map((pick) => (
            <button
              key={pick.id}
              type="button"
              className="interactive-card surface-card p-5 text-left"
              onClick={() => setActiveTag(pick.name)}
            >
              <span className="flex items-start justify-between gap-3">
                <span className="min-w-0">
                  <span className="block truncate text-xl font-bold text-[var(--food-text)]">{pick.name}</span>
                  <span className="mt-2 line-clamp-3 block text-sm text-[var(--food-text-muted)]">{pick.description}</span>
                </span>
                <Chip active className="shrink-0">{pick.tag}</Chip>
              </span>
              <span className="mt-4 flex flex-wrap gap-2">
                {pick.meta.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReviewSection() {
  const showToast = useFoodStore((state) => state.showToast);

  return (
    <section id="reviews" className="section-shell scroll-mt-28 py-12 md:py-16 lg:py-20">
      <SectionHeading
        title="真实点评"
        description="把“适不适合今天去吃”说清楚，比空泛的好吃更重要。这里的点评更关注场景、服务节奏和推荐菜是否真的稳定。"
        action={
          <button type="button" className="outline-button" onClick={() => showToast("已加载更多真实点评")}>
            看更多
          </button>
        }
      />
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.id} className="interactive-card surface-card flex h-full flex-col gap-5 p-5">
            <div className="flex items-center gap-3">
              <span className="avatar-dot">{review.avatar}</span>
              <div className="min-w-0">
                <p className="truncate font-semibold text-[var(--food-text)]">{review.user}</p>
                <p className="truncate text-sm text-[var(--food-text-muted)]">{review.scene}</p>
              </div>
            </div>
            <div className="min-w-0">
              <h2 className="truncate text-xl font-bold text-[var(--food-text)]">{review.title}</h2>
              <p className="mt-3 line-clamp-4 text-sm text-[var(--food-text-muted)]">{review.content}</p>
            </div>
            <div className="mt-auto flex flex-wrap gap-2">
              <Chip>{review.restaurant}</Chip>
              <Chip>推荐 {review.recommend}</Chip>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DownloadSection() {
  const savedItems = useFoodStore((state) => state.savedItems);
  const showToast = useFoodStore((state) => state.showToast);
  const toggleSavedItem = useFoodStore((state) => state.toggleSavedItem);

  return (
    <section id="download" className="section-shell scroll-mt-28 py-12 md:py-16 lg:py-20">
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--food-line)] bg-[var(--food-primary-50)] p-5 md:p-7 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-center">
          <div className="min-w-0">
            <h2 className="food-h2 balanced-title text-[var(--food-text)]">立即下载</h2>
            <p className="mt-4 max-w-2xl food-body text-[var(--food-text-muted)]">
              把同城热榜、探店清单和朋友转发的点评放进一个应用里。出门前先收藏，路上也能继续看附近有没有更合适的新选择。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" className="primary-button" onClick={() => showToast("下载链接已准备好")}>
                下载应用
              </button>
              <button type="button" className="outline-button" onClick={() => showToast("已订阅每周三与周五热榜")}>
                订阅榜单
              </button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["收藏清单同步", "附近热榜提醒", "朋友点评转发"].map((tag, index) => (
                <Chip key={tag} active={index === 0}>{tag}</Chip>
              ))}
            </div>
          </div>
          <div className="surface-card p-4 md:p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-[var(--food-text)]">今晚想吃</p>
                <p className="mt-1 text-sm text-[var(--food-text-muted)]">下载后可以随手保存和分享</p>
              </div>
              <Smartphone className="h-5 w-5 shrink-0 text-[var(--food-primary)]" />
            </div>
            <div className="mt-5 flex flex-col gap-3">
              {downloadPicks.map((pick) => {
                const saved = savedItems.includes(pick.id);
                return (
                  <button key={pick.id} type="button" className="download-pick text-left" onClick={() => toggleSavedItem(pick.id)}>
                    <span className="min-w-0">
                      <span className="block truncate font-semibold text-[var(--food-text)]">{pick.title}</span>
                      <span className="mt-1 line-clamp-2 block text-sm text-[var(--food-text-muted)]">{pick.description}</span>
                    </span>
                    <Chip active={saved} className={cn("shrink-0", saved ? "" : "bg-[var(--food-card)]")}>
                      {saved ? "已存" : "保存"}
                    </Chip>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FoodFooter() {
  const showToast = useFoodStore((state) => state.showToast);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="section-shell py-10">
      <div className="rounded-[var(--radius-lg)] border border-[var(--food-line)] bg-[var(--food-card)] p-5 md:p-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="min-w-0">
            <p className="food-display text-2xl font-extrabold text-[var(--food-text)]">饭局</p>
            <p className="mt-3 line-clamp-3 text-sm text-[var(--food-text-muted)]">
              年轻人的城市美食推荐网站，把榜单、探店、点评和收藏欲放在同一个首页里。
            </p>
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-bold text-[var(--food-text)]">城市切换</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {["上海", "杭州", "南京"].map((city) => (
                <Chip key={city} asButton onClick={() => showToast(`页脚已选择${city}`)}>{city}</Chip>
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-bold text-[var(--food-text)]">内容入口</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <button type="button" className="footer-link text-left" onClick={() => jump("ranking")}>同城热榜</button>
              <button type="button" className="footer-link text-left" onClick={() => jump("editors")}>编辑精选</button>
              <button type="button" className="footer-link text-left" onClick={() => jump("reviews")}>真实点评</button>
            </div>
          </div>
          <div className="min-w-0">
            <h2 className="flex items-center gap-2 text-lg font-bold text-[var(--food-text)]">
              联系合作
              <Bookmark className="h-4 w-4 text-[var(--food-primary)]" />
            </h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--food-text-muted)]">
              <p>品牌合作：探店专题与城市联名</p>
              <p>内容投递：推荐你的私藏小馆</p>
              <p>更新节奏：每周三与周五更新热榜</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
