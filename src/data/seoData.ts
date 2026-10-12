export interface KeywordResearchItem {
  pageName: string;
  url: string;
  mainKeyword: string;
  relatedKeyword1: string;
  relatedKeyword2: string;
  searchIntent: string;
  searchVolume: string;
  competition: string;
  titleTag: string; // 30-60 chars
  metaDescription: string; // 120-160 chars
  aeoQuestion: string;
  aeoAnswerSummary: string;
}

export const HOMEPAGE_SEO: KeywordResearchItem = {
  pageName: "Homepage (The Willow & Seam)",
  url: "/",
  mainKeyword: "cricket analysis journal",
  relatedKeyword1: "cricket technique guides",
  relatedKeyword2: "tactical cricket analysis",
  searchIntent: "Informational & Navigational",
  searchVolume: "14,800 / mo",
  competition: "Medium",
  titleTag: "Cricket Analysis Journal & Tactical Guides | Willow & Seam", // 58 chars
  metaDescription: "Explore longform cricket analysis, bowling aerodynamics, batting mechanics, pitch conditions lab, and tactical fielding blueprints in our journal.", // 148 chars
  aeoQuestion: "What is The Willow & Seam cricket analysis journal?",
  aeoAnswerSummary: "The Willow & Seam is an editorial cricket journal providing deep tactical analysis, biomechanical batting breakdowns, pitch wear science, and cricket history essays."
};

export const FEATURED_ARTICLES_SEO: KeywordResearchItem[] = [
  {
    pageName: "Article 1: English Willow Craft",
    url: "/article/alchemy-of-english-willow",
    mainKeyword: "English willow cricket bats",
    relatedKeyword1: "Salix alba caerulea",
    relatedKeyword2: "Grade 1 cricket bat craft",
    searchIntent: "Informational & Commercial Investigation",
    searchVolume: "9,600 / mo",
    competition: "Low-Medium",
    titleTag: "English Willow Cricket Bats: Craft & Grading Guide", // 51 chars
    metaDescription: "Discover how master podshavers craft English willow cricket bats from Salix alba caerulea. Learn grading scales, pressing secrets, and sweet spot science.", // 154 chars
    aeoQuestion: "What makes English willow the best wood for cricket bats?",
    aeoAnswerSummary: "English willow (Salix alba caerulea) combines ultra-low specific gravity with fibrous cell resilience, absorbing 90 mph ball impacts while rebounding with maximum spring."
  },
  {
    pageName: "Article 2: Reverse Swing Aerodynamics",
    url: "/article/reverse-swing-and-whispering-seam",
    mainKeyword: "reverse swing bowling physics",
    relatedKeyword1: "aerodynamics of cricket ball",
    relatedKeyword2: "Wasim Akram reverse swing",
    searchIntent: "Informational & Educational",
    searchVolume: "12,200 / mo",
    competition: "Low",
    titleTag: "Reverse Swing Bowling Physics: Aerodynamics & Ball Care", // 55 chars
    metaDescription: "Master the aerodynamics of reverse swing bowling in cricket. Learn how boundary layer turbulence and ball maintenance create late unplayable swing at 82+ mph.", // 159 chars
    aeoQuestion: "What causes reverse swing in cricket bowling?",
    aeoAnswerSummary: "Reverse swing occurs when ball speed exceeds 82 mph and the rough side produces a thick turbulent boundary layer that separates early, pulling the ball toward the shiny side."
  },
  {
    pageName: "Article 3: Leg Spin Bowling Mastery",
    url: "/article/lost-art-of-leg-spin",
    mainKeyword: "leg spin bowling technique",
    relatedKeyword1: "Shane Warne ball of the century",
    relatedKeyword2: "wrist spin biomechanics",
    searchIntent: "Informational & Coaching",
    searchVolume: "8,400 / mo",
    competition: "Medium",
    titleTag: "Leg Spin Bowling Technique: Wrist Spin Biomechanics", // 52 chars
    metaDescription: "Learn the biomechanics of leg spin bowling in cricket. Analyze Shane Warne's Ball of the Century, wrist pronation, and the Magnus effect causing late drift.", // 157 chars
    aeoQuestion: "How do you bowl leg spin with maximum revolutions?",
    aeoAnswerSummary: "Leg spin requires cocking the third finger behind the seam and unleashing an explosive 3,000 RPM anti-clockwise wrist pronation that generates aerodynamic Magnus dip."
  }
];

export const KEYWORD_RESEARCH_TABLE: KeywordResearchItem[] = [
  HOMEPAGE_SEO,
  ...FEATURED_ARTICLES_SEO
];
