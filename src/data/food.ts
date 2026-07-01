export type RestaurantStatus = "营业中" | "排队中" | "营业至 24:00" | "深夜友好";

export type Restaurant = {
  id: string;
  name: string;
  area: string;
  score: number;
  price: string;
  status: RestaurantStatus;
  scene: string;
  description: string;
  tags: string[];
};

export type Category = {
  id: string;
  title: string;
  icon: "SunMedium" | "FlameKindling" | "Wine" | "IceCreamCone";
  description: string;
  tags: string[];
};

export type Review = {
  id: string;
  user: string;
  avatar: string;
  scene: string;
  title: string;
  content: string;
  restaurant: string;
  recommend: string;
};

export const cities = ["上海", "杭州", "南京", "北京", "广州"];

export const quickTags = ["排行榜", "附近", "夜宵"];

export const hotTags = ["徐汇夜宵", "约会餐酒", "周末早午餐", "一人火锅", "新店首刷"];

export const insightCards = [
  {
    label: "今晚适合",
    title: "朋友拼桌",
    description: "热闹但不吵，适合聊天和分享。",
  },
  {
    label: "新店提醒",
    title: "本周首发",
    description: "优先收录试营业与编辑首刷。",
  },
  {
    label: "社交氛围",
    title: "易分享",
    description: "大图菜品与点评卡片都适合收藏转发。",
  },
];

export const restaurants: Restaurant[] = [
  {
    id: "shan-hai",
    name: "山海炭炉",
    area: "静安",
    score: 4.9,
    price: "¥138",
    status: "营业至 24:00",
    scene: "适合约饭",
    description: "晚间最容易被收藏的炭火餐酒，推荐牛肋条、烤杏鲍菇和自然酒拼杯。",
    tags: ["人均 ¥138", "营业至 24:00", "适合约饭"],
  },
  {
    id: "market-noodle",
    name: "菜场面馆",
    area: "长宁",
    score: 4.8,
    price: "¥42",
    status: "深夜友好",
    scene: "翻台快",
    description: "夜里也能吃到认真现炒浇头，适合加班后一个人来一碗热面。",
    tags: ["人均 ¥42", "深夜友好", "翻台快"],
  },
  {
    id: "river-brunch",
    name: "河畔早场",
    area: "黄浦",
    score: 4.8,
    price: "¥88",
    status: "排队中",
    scene: "周末上升",
    description: "周末早午餐榜单常驻选手，法式吐司和炒蛋三明治几乎不会失手。",
    tags: ["人均 ¥88", "周末上升", "排队中"],
  },
  {
    id: "warm-pot",
    name: "暖锅社",
    area: "徐汇",
    score: 4.7,
    price: "¥96",
    status: "营业中",
    scene: "两人友好",
    description: "人均友好的番茄锅底和小份拼盘，适合两个人临时起意就去吃。",
    tags: ["人均 ¥96", "两人友好", "营业中"],
  },
];

export const heroRanks = [
  {
    id: "charcoal-party",
    rank: "01",
    name: "炭火局",
    score: "4.9 分",
    description: "静安 · 炭烤与自然酒搭配，适合两三好友晚间慢聊。",
    tags: ["人均 ¥128", "营业中"],
  },
  {
    id: "bread-lane",
    rank: "02",
    name: "面包巷",
    score: "4.8 分",
    description: "徐汇 · 早午餐与甜点组合，下午拍照和聊天都很轻松。",
    tags: ["人均 ¥76", "营业中"],
  },
  {
    id: "late-pot",
    rank: "03",
    name: "深夜锅",
    score: "4.7 分",
    description: "黄浦 · 夜宵火锅热度高，适合临时组局和续摊。",
    tags: ["人均 ¥98", "排队中"],
  },
];

export const categories: Category[] = [
  {
    id: "brunch",
    title: "早午餐",
    icon: "SunMedium",
    description: "适合周末慢起床后补充元气，优先显示采光、座位舒适度和出片率。",
    tags: ["采光好", "适合聊天"],
  },
  {
    id: "hotpot",
    title: "火锅局",
    icon: "FlameKindling",
    description: "看锅底稳定度、排队耐心值和适合几人拼桌，适合下班后快速做决定。",
    tags: ["多人友好", "夜间加分"],
  },
  {
    id: "bistro",
    title: "小酒馆",
    icon: "Wine",
    description: "优先展示氛围、音乐音量和适合约会还是朋友续摊，避免踩雷式社交。",
    tags: ["约会感", "可续摊"],
  },
  {
    id: "dessert",
    title: "甜点站",
    icon: "IceCreamCone",
    description: "适合饭后转场和一人放空，重点看甜度平衡、环境安静度和外带体验。",
    tags: ["一人也行", "适合转场"],
  },
];

export const zones = [
  {
    name: "巨鹿路",
    tag: "夜间热",
    description: "餐酒馆和小份菜最近升温，晚间收藏明显更高。",
  },
  {
    name: "武康路",
    tag: "午后热",
    description: "早午餐和甜点站讨论度回升，下午转场路线更集中。",
  },
  {
    name: "大学路",
    tag: "新店多",
    description: "人均友好的新店增长明显，更适合随手约人试新馆子。",
  },
];

export const editorPicks = [
  {
    id: "river",
    name: "河畔早场",
    tag: "早午餐",
    description: "适合周末先散步再吃饭，法式吐司、咖啡和窗边位置都很稳。",
    meta: ["黄浦", "人均 ¥88", "可预订"],
  },
  {
    id: "charcoal",
    name: "巷口炭炉",
    tag: "晚餐局",
    description: "适合边吃边聊的炭火小馆，牛肋条和蒜香口蘑几乎桌桌会点。",
    meta: ["静安", "人均 ¥128", "夜间热"],
  },
  {
    id: "sweet",
    name: "街角甜房",
    tag: "甜点站",
    description: "适合饭后转场，巴斯克和冰滴咖啡搭配很稳，环境也够安静。",
    meta: ["徐汇", "人均 ¥54", "适合独处"],
  },
];

export const reviews: Review[] = [
  {
    id: "lin",
    user: "林岚",
    avatar: "林",
    scene: "朋友聚餐 · 静安",
    title: "聊天友好",
    content: "周五晚上去也不会吵到听不见对话，店员上菜节奏顺，牛肋条和土豆泥最稳，适合边聊边慢慢吃。",
    restaurant: "山海炭炉",
    recommend: "牛肋条",
  },
  {
    id: "zhou",
    user: "周一鸣",
    avatar: "周",
    scene: "一人下班 · 长宁",
    title: "一人轻松",
    content: "一个人去也不会尴尬，浇头很热，翻台快，适合加班后不想再做决定的时候直接去吃。",
    restaurant: "菜场面馆",
    recommend: "葱油拌面",
  },
  {
    id: "shen",
    user: "沈青",
    avatar: "沈",
    scene: "约会晚餐 · 徐汇",
    title: "气氛在线",
    content: "灯光够柔和但不昏暗，甜点不会过甜，吃完还可以顺路散步，很适合作为约会的后半场。",
    restaurant: "街角甜房",
    recommend: "巴斯克",
  },
];

export const downloadPicks = [
  {
    id: "tonight",
    title: "今晚组局",
    description: "把热榜第一和编辑精选一起存进清单，临出门时更快定店。",
  },
  {
    id: "share",
    title: "朋友转发",
    description: "把点评卡片直接分享给同伴，少来回问“这家到底行不行”。",
  },
  {
    id: "nearby",
    title: "附近补位",
    description: "路上临时改主意，也能快速看附近同风格和同价位的新选择。",
  },
];
