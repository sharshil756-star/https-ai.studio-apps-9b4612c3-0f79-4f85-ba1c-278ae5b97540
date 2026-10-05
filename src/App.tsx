import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  Bookmark, 
  Compass, 
  Mail, 
  ArrowUpRight, 
  Clock, 
  Layers, 
  ShieldAlert, 
  Sparkles,
  BookOpen,
  Filter
} from 'lucide-react';
import { CRICKET_ARTICLES, CATEGORIES, CricketArticle } from './data/articles';
import { CricketArtwork } from './components/CricketArtwork';
import { ArticleReader } from './components/ArticleReader';
import { PitchConditionsLab } from './components/PitchConditionsLab';
import { FieldTacticsVisualizer } from './components/FieldTacticsVisualizer';
import { WillowAnatomyModal } from './components/WillowAnatomyModal';
import { ReadingListDrawer } from './components/ReadingListDrawer';
import { NewsletterModal } from './components/NewsletterModal';

export default function App() {
  // Navigation & View state
  const [activeTab, setActiveTab] = useState<'dispatches' | 'pitch-lab' | 'field-tactics'>('dispatches');
  const [selectedArticle, setSelectedArticle] = useState<CricketArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOption, setSortOption] = useState<'latest' | 'longest' | 'curated'>('curated');

  // Bookmarking state persisted in localStorage
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('willow_saved_articles');
      return stored ? JSON.parse(stored) : ['alchemy-of-english-willow'];
    } catch {
      return ['alchemy-of-english-willow'];
    }
  });

  // Modals state
  const [isReadingListOpen, setIsReadingListOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isWillowModalOpen, setIsWillowModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('willow_saved_articles', JSON.stringify(savedIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedIds]);

  const toggleBookmark = (article: CricketArticle) => {
    setSavedIds((prev) => 
      prev.includes(article.id)
        ? prev.filter((id) => id !== article.id)
        : [...prev, article.id]
    );
  };

  const savedArticles = useMemo(() => {
    return CRICKET_ARTICLES.filter((a) => savedIds.includes(a.id));
  }, [savedIds]);

  // Filtered & Sorted Articles
  const filteredArticles = useMemo(() => {
    return CRICKET_ARTICLES.filter((art) => {
      const matchesCategory =
        selectedCategory === 'All Articles' || art.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        art.title.toLowerCase().includes(q) ||
        art.subtitle.toLowerCase().includes(q) ||
        art.summary.toLowerCase().includes(q) ||
        art.author.name.toLowerCase().includes(q) ||
        art.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortOption === 'longest') {
        const aNum = parseInt(a.readTime) || 0;
        const bNum = parseInt(b.readTime) || 0;
        return bNum - aNum;
      }
      if (sortOption === 'latest') {
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      }
      // Curated / Editor's Pick
      if (a.featured) return -1;
      if (b.featured) return 1;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortOption]);

  // Lead story is the first featured or first in list
  const leadArticle = filteredArticles[0] || CRICKET_ARTICLES[0];
  const secondaryArticles = filteredArticles.slice(1, 4);
  const remainingArticles = filteredArticles.slice(4);

  // If viewing an article in detail
  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-[#FBF9F5] text-[#1C1917]">
        <ArticleReader
          article={selectedArticle}
          onBack={() => {
            setSelectedArticle(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          isBookmarked={savedIds.includes(selectedArticle.id)}
          onToggleBookmark={toggleBookmark}
          onSelectArticle={(art) => setSelectedArticle(art)}
          allArticles={CRICKET_ARTICLES}
        />
        <WillowAnatomyModal
          isOpen={isWillowModalOpen}
          onClose={() => setIsWillowModalOpen(false)}
        />
        <ReadingListDrawer
          isOpen={isReadingListOpen}
          onClose={() => setIsReadingListOpen(false)}
          savedArticles={savedArticles}
          onSelectArticle={(art) => setSelectedArticle(art)}
          onRemoveArticle={(id) => setSavedIds((prev) => prev.filter((i) => i !== id))}
          onClearAll={() => setSavedIds([])}
        />
        <NewsletterModal
          isOpen={isNewsletterOpen}
          onClose={() => setIsNewsletterOpen(false)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1917] flex flex-col selection:bg-[#E2D9C8]">
      {/* =========================================================================
          TOP BAR CONTRACT (Exact 3 Zones: Brand Title — 4-6 Nav Links — 1-2 Actions)
          ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E7DFD3] px-6 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('dispatches');
              setSelectedCategory('All Articles');
              setSearchQuery('');
            }}
            className="text-xl font-serif font-bold tracking-tight text-[#1C1917] hover:text-[#14532D] transition-colors whitespace-nowrap"
          >
            The Willow & Seam
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]">
            <button
              onClick={() => setActiveTab('dispatches')}
              className={`hover:text-[#1C1917] transition-colors pb-0.5 ${
                activeTab === 'dispatches' ? 'text-[#14532D] font-semibold border-b-2 border-[#14532D]' : ''
              }`}
            >
              Dispatches
            </button>
            <button
              onClick={() => setActiveTab('pitch-lab')}
              className={`hover:text-[#1C1917] transition-colors pb-0.5 ${
                activeTab === 'pitch-lab' ? 'text-[#14532D] font-semibold border-b-2 border-[#14532D]' : ''
              }`}
            >
              Pitch Lab
            </button>
            <button
              onClick={() => setActiveTab('field-tactics')}
              className={`hover:text-[#1C1917] transition-colors pb-0.5 ${
                activeTab === 'field-tactics' ? 'text-[#14532D] font-semibold border-b-2 border-[#14532D]' : ''
              }`}
            >
              Field Geometries
            </button>
            <button
              onClick={() => setIsWillowModalOpen(true)}
              className="hover:text-[#1C1917] transition-colors"
            >
              Willow Anatomy
            </button>
            <button
              onClick={() => setIsReadingListOpen(true)}
              className="hover:text-[#1C1917] transition-colors flex items-center gap-1.5"
            >
              <span>Ledger</span>
              {savedIds.length > 0 && (
                <span className="text-[11px] font-mono text-[#14532D] font-bold">
                  ({savedIds.length})
                </span>
              )}
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsReadingListOpen(true)}
              className="md:hidden p-2 rounded-lg text-[#57534E] hover:text-[#1C1917] hover:bg-[#F2EDE4] transition-colors relative"
              aria-label="Open reading ledger"
            >
              <Bookmark className="w-4 h-4" />
              {savedIds.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#14532D]" />
              )}
            </button>

            <button
              onClick={() => setIsNewsletterOpen(true)}
              className="px-4 py-2 text-xs font-medium text-white bg-[#14532D] rounded-lg hover:bg-[#0F3E22] transition-colors whitespace-nowrap shadow-xs flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Morning Dispatch</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 py-10">
        {/* Dynamic Views: Pitch Lab or Field Tactics */}
        {activeTab === 'pitch-lab' && (
          <div className="space-y-6">
            <button
              onClick={() => setActiveTab('dispatches')}
              className="text-xs font-mono text-[#78716C] hover:text-[#1C1917] flex items-center gap-1 mb-4"
            >
              ← Back to Journal Dispatches
            </button>
            <PitchConditionsLab />
          </div>
        )}

        {activeTab === 'field-tactics' && (
          <div className="space-y-6">
            <button
              onClick={() => setActiveTab('dispatches')}
              className="text-xs font-mono text-[#78716C] hover:text-[#1C1917] flex items-center gap-1 mb-4"
            >
              ← Back to Journal Dispatches
            </button>
            <FieldTacticsVisualizer />
          </div>
        )}

        {/* Primary Dispatches Index View */}
        {activeTab === 'dispatches' && (
          <>
            {/* Masthead Banner */}
            <div className="border-b border-[#E7DFD3] pb-8 mb-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#78350F] mb-1">
                    Vol. XII · Autumn Season · Ten Curated Dispatches
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1C1917] tracking-tight text-balance">
                    The Willow & Seam
                  </h1>
                  <p className="text-base sm:text-lg font-serif text-[#57534E] mt-2 max-w-2xl leading-relaxed">
                    An independent journal dedicated to cricket&apos;s timeless craft, aerodynamic mystery, five-day epics, and modern biomechanical revolution.
                  </p>
                </div>

                {/* Quick Interactive Tool Ribbons */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setActiveTab('pitch-lab')}
                    className="px-3.5 py-2 text-xs font-medium bg-[#FFFFFF] border border-[#E7DFD3] rounded-lg text-[#44403C] hover:border-[#14532D] hover:text-[#14532D] transition-colors flex items-center gap-1.5"
                  >
                    <Compass className="w-3.5 h-3.5 text-[#14532D]" />
                    <span>Launch Pitch Lab</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('field-tactics')}
                    className="px-3.5 py-2 text-xs font-medium bg-[#FFFFFF] border border-[#E7DFD3] rounded-lg text-[#44403C] hover:border-[#14532D] hover:text-[#14532D] transition-colors flex items-center gap-1.5"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#14532D]" />
                    <span>Field Geometries</span>
                  </button>
                  <button
                    onClick={() => setIsWillowModalOpen(true)}
                    className="px-3.5 py-2 text-xs font-medium bg-[#FFFFFF] border border-[#E7DFD3] rounded-lg text-[#44403C] hover:border-[#78350F] hover:text-[#78350F] transition-colors flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#78350F]" />
                    <span>Inspect Willow</span>
                  </button>
                </div>
              </div>

              {/* Search & Sort Controls Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-8 pt-6 border-t border-[#F2EDE4]">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-[#A8A29E] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search dispatches, players, bowling tactics, or craft..."
                    className="w-full bg-[#FFFFFF] border border-[#E7DFD3] rounded-lg pl-9 pr-4 py-2 text-xs text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:ring-1 focus:ring-[#14532D]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#78716C] hover:text-[#1C1917]"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Sort Option */}
                <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-[#78716C] font-mono">
                  <span>Order:</span>
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value as any)}
                    className="bg-[#FFFFFF] border border-[#E7DFD3] rounded-md px-2.5 py-1.5 text-xs text-[#1C1917] focus:outline-none focus:ring-1 focus:ring-[#14532D]"
                  >
                    <option value="curated">Curator&apos;s Sequence</option>
                    <option value="longest">Longest Reading Time</option>
                    <option value="latest">Most Recent Issue</option>
                  </select>
                </div>
              </div>

              {/* Category Segmented Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto py-3 mt-4 no-scrollbar">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                        isActive
                          ? 'bg-[#14532D] text-white shadow-2xs'
                          : 'bg-[#FCFAF7] text-[#57534E] hover:bg-[#F2EDE4] hover:text-[#1C1917] border border-[#E7DFD3]'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Zero State if search has no results */}
            {filteredArticles.length === 0 ? (
              <div className="text-center py-20 bg-[#FFFFFF] border border-[#E7DFD3] rounded-2xl p-8">
                <BookOpen className="w-10 h-10 text-[#A8A29E] mx-auto mb-3" />
                <h3 className="font-serif font-bold text-xl text-[#1C1917]">
                  No dispatches match your inquiry
                </h3>
                <p className="text-sm text-[#78716C] mt-1 max-w-sm mx-auto">
                  Try adjusting your search terms or return to all categories to view the full 10 cricket articles.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All Articles');
                    setSearchQuery('');
                  }}
                  className="mt-5 px-4 py-2 bg-[#14532D] text-white text-xs font-medium rounded-lg"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="space-y-16">
                {/* =========================================================================
                    TIER 1 SALIENCE: LEAD STORY (Dominant visual anchor & editorial depth)
                    ========================================================================= */}
                {leadArticle && (
                  <section className="bg-[#FFFFFF] border border-[#E7DFD3] rounded-2xl overflow-hidden shadow-xs hover:border-[#D6CEBE] transition-all">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                      {/* Dominant Visual Artwork */}
                      <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[460px]">
                        <CricketArtwork
                          type={leadArticle.artworkType}
                          className="w-full h-full min-h-[320px] lg:min-h-[460px]"
                          variant="hero"
                        />
                      </div>

                      {/* Story Presentation */}
                      <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between bg-[#FCFAF7]">
                        <div>
                          {/* Unboxed Metadata with Typographic Separators */}
                          <div className="flex items-center gap-2 text-xs text-[#78350F] font-mono mb-3">
                            <span className="font-semibold">{leadArticle.category}</span>
                            <span aria-hidden="true">·</span>
                            <span>{leadArticle.readTime}</span>
                            <span aria-hidden="true">·</span>
                            <span>Featured Lead</span>
                          </div>

                          <h2
                            onClick={() => setSelectedArticle(leadArticle)}
                            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C1917] hover:text-[#14532D] cursor-pointer transition-colors leading-[1.2] text-balance"
                          >
                            {leadArticle.title}
                          </h2>

                          <p className="text-sm sm:text-base font-serif text-[#57534E] mt-3 leading-relaxed">
                            {leadArticle.subtitle}
                          </p>

                          {/* Pull quote excerpt */}
                          <div className="my-5 p-4 rounded-lg bg-[#F7F4EE] border-l-2 border-[#14532D] text-xs font-serif italic text-[#292524] leading-relaxed">
                            &ldquo;{leadArticle.pullQuote}&rdquo;
                          </div>
                        </div>

                        <div className="pt-6 border-t border-[#EBE4D8] flex items-center justify-between">
                          <div className="text-xs text-[#78716C] font-mono">
                            By <strong className="text-[#1C1917] font-sans">{leadArticle.author.name}</strong>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => toggleBookmark(leadArticle)}
                              className={`p-2 rounded-lg border transition-colors ${
                                savedIds.includes(leadArticle.id)
                                  ? 'bg-[#14532D] text-white border-[#14532D]'
                                  : 'bg-white text-[#78716C] border-[#E7DFD3] hover:text-[#1C1917]'
                              }`}
                              title="Bookmark"
                            >
                              <Bookmark className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => setSelectedArticle(leadArticle)}
                              className="px-4 py-2 bg-[#14532D] text-white text-xs font-medium rounded-lg hover:bg-[#0F3E22] transition-colors flex items-center gap-1 shadow-2xs"
                            >
                              <span>Read Dispatch</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {/* =========================================================================
                    TIER 2 SALIENCE: SECONDARY FEATURED TRIO
                    ========================================================================= */}
                {secondaryArticles.length > 0 && (
                  <section>
                    <div className="flex items-center justify-between border-b border-[#E7DFD3] pb-3 mb-8">
                      <div className="text-xs uppercase tracking-widest text-[#78350F] font-mono font-semibold">
                        Curated Features · In-Depth Studies
                      </div>
                      <div className="text-xs font-mono text-[#78716C]">
                        Longform Analysis
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {secondaryArticles.map((art) => (
                        <div
                          key={art.id}
                          className="bg-[#FFFFFF] border border-[#E7DFD3] rounded-xl overflow-hidden flex flex-col justify-between transition-all hover:border-[#D6CEBE] hover:shadow-sm group"
                        >
                          <div>
                            {/* Card Artwork */}
                            <div className="h-48 overflow-hidden relative">
                              <CricketArtwork
                                type={art.artworkType}
                                className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                                variant="card"
                              />
                            </div>

                            <div className="p-6">
                              {/* Metadata text without pills */}
                              <div className="flex items-center gap-2 text-[11px] text-[#78350F] font-mono mb-2">
                                <span>{art.category}</span>
                                <span aria-hidden="true">·</span>
                                <span>{art.readTime}</span>
                              </div>

                              <h3
                                onClick={() => setSelectedArticle(art)}
                                className="text-xl font-serif font-bold text-[#1C1917] group-hover:text-[#14532D] cursor-pointer transition-colors leading-snug line-clamp-2"
                              >
                                {art.title}
                              </h3>

                              <p className="text-xs font-serif text-[#57534E] mt-2 line-clamp-3 leading-relaxed">
                                {art.summary}
                              </p>
                            </div>
                          </div>

                          <div className="px-6 pb-6 pt-3 border-t border-[#F7F4EE] flex items-center justify-between">
                            <span className="text-xs text-[#78716C] font-mono truncate max-w-[140px]">
                              {art.author.name}
                            </span>
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() => toggleBookmark(art)}
                                className={`p-1.5 rounded-md border transition-colors ${
                                  savedIds.includes(art.id)
                                    ? 'bg-[#14532D] text-white border-[#14532D]'
                                    : 'bg-white text-[#78716C] border-[#E7DFD3] hover:text-[#1C1917]'
                                }`}
                              >
                                <Bookmark className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => setSelectedArticle(art)}
                                className="text-xs font-medium text-[#14532D] hover:underline flex items-center gap-1"
                              >
                                <span>Study</span>
                                <ArrowUpRight className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* =========================================================================
                    TIER 3 SALIENCE: THE COMPLETE ARCHIVE (Remaining articles in catalog list)
                    ========================================================================= */}
                {remainingArticles.length > 0 && (
                  <section>
                    <div className="flex items-center justify-between border-b border-[#E7DFD3] pb-3 mb-6">
                      <div className="text-xs uppercase tracking-widest text-[#78350F] font-mono font-semibold">
                        The Complete Journal Archive ({remainingArticles.length} Dispatches)
                      </div>
                      <div className="text-xs font-mono text-[#78716C]">
                        Historical & Technical Records
                      </div>
                    </div>

                    <div className="divide-y divide-[#E7DFD3] border-y border-[#E7DFD3]">
                      {remainingArticles.map((art, idx) => (
                        <div
                          key={art.id}
                          className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#F7F4EE]/50 px-4 -mx-4 rounded-lg transition-colors group"
                        >
                          <div className="flex-1">
                            {/* Unboxed Metadata */}
                            <div className="flex items-center gap-2 text-xs text-[#78350F] font-mono mb-1.5">
                              <span className="font-semibold">{art.category}</span>
                              <span aria-hidden="true">·</span>
                              <span>{art.readTime}</span>
                              <span aria-hidden="true">·</span>
                              <span>{art.publishDate}</span>
                            </div>

                            <h3
                              onClick={() => setSelectedArticle(art)}
                              className="text-xl font-serif font-bold text-[#1C1917] group-hover:text-[#14532D] cursor-pointer transition-colors leading-snug"
                            >
                              {art.title}
                            </h3>

                            <p className="text-xs sm:text-sm font-serif text-[#57534E] mt-1.5 max-w-3xl leading-relaxed line-clamp-2">
                              {art.subtitle}
                            </p>

                            <div className="flex items-center gap-3 mt-3 text-xs text-[#78716C] font-mono">
                              <span>By <strong className="text-[#1C1917]">{art.author.name}</strong></span>
                              <span aria-hidden="true">·</span>
                              <span>{art.tags.slice(0, 3).map((t) => `#${t}`).join(' ')}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
                            <button
                              onClick={() => toggleBookmark(art)}
                              className={`p-2 rounded-lg border transition-colors ${
                                savedIds.includes(art.id)
                                  ? 'bg-[#14532D] text-white border-[#14532D]'
                                  : 'bg-white text-[#78716C] border-[#E7DFD3] hover:text-[#1C1917]'
                              }`}
                              title="Bookmark"
                            >
                              <Bookmark className="w-4 h-4" />
                            </button>

                            <button
                              onClick={() => setSelectedArticle(art)}
                              className="px-4 py-2 bg-white border border-[#E7DFD3] group-hover:border-[#14532D] group-hover:bg-[#14532D] group-hover:text-white text-[#1C1917] text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 shadow-2xs"
                            >
                              <span>Open Article</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E7DFD3] bg-[#F7F4EE] mt-20 py-12 px-6 lg:px-12 text-[#78716C]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="font-serif font-bold text-base text-[#1C1917]">The Willow & Seam</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>A Monograph on Cricket Lore & Tactica</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>10 Longform Articles</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsNewsletterOpen(true)}
              className="text-[#14532D] hover:underline"
            >
              The Morning Session Dispatch
            </button>
            <button
              onClick={() => setIsWillowModalOpen(true)}
              className="hover:text-[#1C1917]"
            >
              Willow Anatomy
            </button>
            <button
              onClick={() => {
                setActiveTab('dispatches');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#1C1917]"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </footer>

      {/* Modals & Drawers */}
      <WillowAnatomyModal
        isOpen={isWillowModalOpen}
        onClose={() => setIsWillowModalOpen(false)}
      />
      <ReadingListDrawer
        isOpen={isReadingListOpen}
        onClose={() => setIsReadingListOpen(false)}
        savedArticles={savedArticles}
        onSelectArticle={(art) => setSelectedArticle(art)}
        onRemoveArticle={(id) => setSavedIds((prev) => prev.filter((i) => i !== id))}
        onClearAll={() => setSavedIds([])}
      />
      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />
    </div>
  );
}
