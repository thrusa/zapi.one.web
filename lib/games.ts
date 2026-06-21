export type GameStatus = "released" | "coming-soon" | "in-development";

export type Game = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  longBlurb: string;
  icon: string;
  cover: string;
  shots: string[];
  status: GameStatus;
  platform: string;
  genre: string;
  accent: string; // hex used for per-game glow accents
  href?: string; // detail route; defaults to /games/<slug>
};

export const games: Game[] = [
  {
    slug: "evoleap",
    name: "EvoLeap",
    tagline: "Trench to Stars",
    blurb: "A one-finger evolution climber — from a single cell in the Mariana Trench to the stars.",
    longBlurb:
      "Begin as a single glowing cell in the Mariana Trench. Collect DNA, evolve through 16 forms, and climb 13 illustrated worlds all the way to the stars. One-finger controls, a deep upgrade tree, an Endless Climb mode — and no ads, ever.",
    icon: "/games/evoleap/icon.png",
    cover: "/games/evoleap/keyart.png",
    shots: [
      "/games/evoleap/shot-1.webp",
      "/games/evoleap/shot-2.webp",
      "/games/evoleap/shot-3.webp",
      "/games/evoleap/shot-4.webp",
      "/games/evoleap/shot-5.webp",
      "/games/evoleap/shot-6.webp",
    ],
    status: "coming-soon",
    platform: "iOS",
    genre: "Arcade · Evolution Climber",
    accent: "#3FE0D0",
  },
  {
    slug: "starforge-squadron",
    name: "Starforge Squadron",
    tagline: "Fight · Mine · Extract",
    blurb: "A sleek 2.5D space fighter — rebuild a lost squadron across five living worlds.",
    longBlurb:
      "You are the last survivor of a destroyed squadron. From a scrappy repair station, fly dangerous forward-runner missions: dodge and auto-fire through enemy waves, mine asteroids for rare ore, weigh extraction against pushing deeper, then return to trade, research, and rebuild. Three distinct ships, five living worlds, and an ancient gate mystery waiting at the edge of known space.",
    icon: "/games/starforge-squadron/emblem.png",
    cover: "/games/starforge-squadron/keyart.png",
    shots: [
      "/games/starforge-squadron/keyart.png",
      "/games/starforge-squadron/world-asteroid.png",
      "/games/starforge-squadron/cover-reference.png",
    ],
    status: "in-development",
    platform: "iOS",
    genre: "2.5D Space Fighter",
    accent: "#F6B94A",
  },
  {
    slug: "clearspace",
    name: "Clearspace",
    tagline: "Create space. Clear your mind.",
    blurb: "A premium, calm block puzzle for short mental resets — no ads, no pressure.",
    longBlurb:
      "A beautiful block puzzle for calm focus. Place pieces, clear lines, and build satisfying combos in short, low-pressure sessions. Six soothing themes, a deterministic Daily Challenge, a no-stakes Calm Mode, tactile haptics, and a one-time Premium unlock — with no ads and no manipulation. Just place and clear.",
    icon: "/games/clearspace/icon.png",
    cover: "/games/clearspace/cover.png",
    shots: [
      "/games/clearspace/02-home.png",
      "/games/clearspace/03-gameplay.png",
      "/games/clearspace/07-daily.png",
      "/games/clearspace/06-calm.png",
      "/games/clearspace/04-themes.png",
      "/games/clearspace/03b-gameplay-night.png",
      "/games/clearspace/09-result.png",
    ],
    status: "coming-soon",
    platform: "iOS",
    genre: "Calm Block Puzzle",
    accent: "#3AAFA9",
  },
  {
    slug: "brainatlas",
    name: "Brain Atlas",
    tagline: "A daily knowledge adventure",
    blurb: "A premium general-knowledge quiz-adventure for curious minds aged 7 to adult — learn, don't just memorise.",
    longBlurb:
      "Brain Atlas turns general knowledge into a daily adventure. Answer beautifully illustrated quizzes across geography, science, history, space, nature, maths, logic and culture — then tap “Tell Me More” to actually learn why, with real explanations, techniques and facts. A fresh Daily Challenge every day, an adventure map of 360 levels that adapts to your skill, streaks, quests, a season pass, and a collection to build. Thousands of questions so it stays fresh. Designed to help kids (and grown-ups) genuinely learn.",
    icon: "/games/brainatlas/icon.png",
    cover: "/games/brainatlas/keyart.jpg",
    shots: [
      "/games/brainatlas/01_home.png",
      "/games/brainatlas/02_quiz.png",
      "/games/brainatlas/04_learn.png",
      "/games/brainatlas/03_result.png",
      "/games/brainatlas/05_map.png",
      "/games/brainatlas/06_season.png",
    ],
    status: "coming-soon",
    platform: "iOS",
    genre: "Educational · Quiz Adventure",
    accent: "#F6B94A",
  },
];

export const statusLabel: Record<GameStatus, string> = {
  released: "Out now",
  "coming-soon": "Coming soon",
  "in-development": "In development",
};

export function gameHref(g: Game) {
  return g.href ?? `/games/${g.slug}`;
}
