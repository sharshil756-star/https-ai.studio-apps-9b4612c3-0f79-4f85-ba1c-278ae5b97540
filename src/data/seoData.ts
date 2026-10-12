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
  goodUrlRules: string[];
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
  aeoAnswerSummary: "The Willow & Seam is an editorial cricket journal providing deep tactical analysis, biomechanical batting breakdowns, pitch wear science, and cricket history essays.",
  goodUrlRules: [
    "Root canonical URL without trailing slash (/)",
    "Short and branded",
    "Zero special characters or session IDs"
  ]
};

export const FEATURED_ARTICLES_SEO: KeywordResearchItem[] = [
  {
    pageName: "Article 1: English Willow Craft",
    url: "/article/english-willow-cricket-bats",
    mainKeyword: "English willow cricket bats",
    relatedKeyword1: "Salix alba caerulea",
    relatedKeyword2: "Grade 1 cricket bat craft",
    searchIntent: "Informational & Commercial Investigation",
    searchVolume: "9,600 / mo",
    competition: "Low-Medium",
    titleTag: "English Willow Cricket Bats: Craft & Grading Guide", // 51 chars
    metaDescription: "Discover how master podshavers craft English willow cricket bats from Salix alba caerulea. Learn grading scales, pressing secrets, and sweet spot science.", // 154 chars
    aeoQuestion: "Why is English Willow (Salix alba caerulea) the Standard Timber for Cricket Bats?",
    aeoAnswerSummary: "English willow (Salix alba caerulea) combines ultra-low specific gravity with fibrous cell resilience, absorbing 90 mph ball impacts while rebounding with maximum spring.",
    goodUrlRules: [
      "All lowercase: /article/english-willow-cricket-bats",
      "Kebab-case hyphens (no underscores or %20)",
      "Zero stop words (removed 'the', 'of')",
      "Primary keyword at the front of the slug",
      "Human-readable, under 5 words"
    ]
  },
  {
    pageName: "Article 2: Reverse Swing Aerodynamics",
    url: "/article/reverse-swing-bowling-physics",
    mainKeyword: "reverse swing bowling physics",
    relatedKeyword1: "aerodynamics of cricket ball",
    relatedKeyword2: "Wasim Akram reverse swing",
    searchIntent: "Informational & Educational",
    searchVolume: "12,200 / mo",
    competition: "Low",
    titleTag: "Reverse Swing Bowling Physics: Aerodynamics & Ball Care", // 55 chars
    metaDescription: "Master the aerodynamics of reverse swing bowling in cricket. Learn how boundary layer turbulence and ball maintenance create late unplayable swing at 82+ mph.", // 159 chars
    aeoQuestion: "What Physical Aerodynamics Cause a Cricket Ball to Reverse Swing?",
    aeoAnswerSummary: "Reverse swing occurs when ball speed exceeds 82 mph and the rough side produces a thick turbulent boundary layer that separates early, pulling the ball toward the shiny side.",
    goodUrlRules: [
      "All lowercase: /article/reverse-swing-bowling-physics",
      "Matches exact search keyword phrase",
      "Zero stop words",
      "Hyphen-separated words",
      "No file extensions (.html, .php)"
    ]
  },
  {
    pageName: "Article 3: Leg Spin Bowling Mastery",
    url: "/article/leg-spin-bowling-technique",
    mainKeyword: "leg spin bowling technique",
    relatedKeyword1: "Shane Warne ball of the century",
    relatedKeyword2: "wrist spin biomechanics",
    searchIntent: "Informational & Coaching",
    searchVolume: "8,400 / mo",
    competition: "Medium",
    titleTag: "Leg Spin Bowling Technique: Wrist Spin Biomechanics", // 52 chars
    metaDescription: "Learn the biomechanics of leg spin bowling in cricket. Analyze Shane Warne's Ball of the Century, wrist pronation, and the Magnus effect causing late drift.", // 157 chars
    aeoQuestion: "What Biomechanical Hand Mechanics Separate Leg-Spin from Off-Spin?",
    aeoAnswerSummary: "Leg spin requires cocking the third finger behind the seam and unleashing an explosive 3,000 RPM anti-clockwise wrist pronation that generates aerodynamic Magnus dip.",
    goodUrlRules: [
      "All lowercase: /article/leg-spin-bowling-technique",
      "Direct keyword targeting",
      "No stop words (removed 'the', 'art', 'of')",
      "Hyphen-delimited tokens",
      "Permanent clean canonical structure"
    ]
  }
];

export const KEYWORD_RESEARCH_TABLE: KeywordResearchItem[] = [
  HOMEPAGE_SEO,
  ...FEATURED_ARTICLES_SEO
];
