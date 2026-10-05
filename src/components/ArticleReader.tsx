import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Bookmark, 
  BookmarkCheck, 
  Share2, 
  Type, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  MessageSquare, 
  ThumbsUp, 
  Clock, 
  Send,
  ChevronRight,
  ChevronLeft,
  Check
} from 'lucide-react';
import { CricketArticle } from '../data/articles';
import { CricketArtwork } from './CricketArtwork';

interface Comment {
  id: string;
  author: string;
  role: string;
  timestamp: string;
  content: string;
  likes: number;
  userLiked?: boolean;
}

interface ArticleReaderProps {
  article: CricketArticle;
  onBack: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (article: CricketArticle) => void;
  onSelectArticle: (article: CricketArticle) => void;
  allArticles: CricketArticle[];
}

export const ArticleReader: React.FC<ArticleReaderProps> = ({
  article,
  onBack,
  isBookmarked,
  onToggleBookmark,
  onSelectArticle,
  allArticles,
}) => {
  // Reading preference states
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'huge'>('normal');
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans'>('serif');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Discussion comments state
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 'c1',
      author: 'Edward Pendelton',
      role: 'Member, MCC Surrey Committee',
      timestamp: '2 hours ago',
      content: 'Extraordinary depth of prose. The technical distinction regarding Salix caerulea and mechanical pressing versus hand drawknife balancing is so rarely understood outside of Essex workshops.',
      likes: 14
    },
    {
      id: 'c2',
      author: 'Sameer Qureshi',
      role: 'Club Captain, Lahore Gymkhana',
      timestamp: '5 hours ago',
      content: 'Having bowled with old balls in 44-degree summer heat, the aerodynamic flip of the boundary layer is an absolute reality. Once the shiny side catches the sun, the ball feels like it weighs nothing until it takes that vicious late dive.',
      likes: 21
    }
  ]);
  const [newCommentText, setNewCommentText] = useState('');
  const [newCommentName, setNewCommentName] = useState('');

  // Scroll depth tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Audio simulation timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            return 0;
          }
          return prev + 1;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;
    const newEntry: Comment = {
      id: `c_${Date.now()}`,
      author: newCommentName.trim() || 'Cricket Enthusiast',
      role: 'Journal Subscriber',
      timestamp: 'Just now',
      content: newCommentText.trim(),
      likes: 1,
      userLiked: true
    };
    setComments([newEntry, ...comments]);
    setNewCommentText('');
    setNewCommentName('');
  };

  const handleToggleCommentLike = (id: string) => {
    setComments(
      comments.map((c) => {
        if (c.id === id) {
          return {
            ...c,
            likes: c.userLiked ? c.likes - 1 : c.likes + 1,
            userLiked: !c.userLiked
          };
        }
        return c;
      })
    );
  };

  // Find next and prev articles
  const currentIndex = allArticles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  return (
    <article className="min-h-screen pb-24">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-[#E7DFD3]">
        <div
          className="h-full bg-[#14532D] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Reader Utility Strip */}
      <div className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E7DFD3] px-4 lg:px-8 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#78716C] hover:text-[#1C1917] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Table of Contents</span>
          </button>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            {/* Audio narration button */}
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-md border transition-colors ${
                isPlayingAudio
                  ? 'bg-[#14532D] text-white border-[#14532D]'
                  : 'bg-white text-[#44403C] border-[#E7DFD3] hover:bg-[#F2EDE4]'
              }`}
              title="Simulated Audio Reader"
            >
              {isPlayingAudio ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause Voice ({audioProgress}%)</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#14532D]" />
                  <span>Listen Dispatch</span>
                </>
              )}
            </button>

            {/* Typography adjustments */}
            <div className="hidden sm:flex items-center bg-white border border-[#E7DFD3] rounded-md p-0.5">
              <button
                onClick={() => setFontFamily(fontFamily === 'serif' ? 'sans' : 'serif')}
                className={`px-2 py-1 text-xs font-medium rounded ${
                  fontFamily === 'serif' ? 'bg-[#F2EDE4] text-[#1C1917]' : 'text-[#78716C]'
                }`}
                title="Toggle Font Family"
              >
                {fontFamily === 'serif' ? 'Serif' : 'Sans'}
              </button>
              <button
                onClick={() => setFontSize(fontSize === 'normal' ? 'large' : fontSize === 'large' ? 'huge' : 'normal')}
                className="px-2 py-1 text-xs font-medium text-[#78716C] hover:text-[#1C1917]"
                title="Cycle Font Size"
              >
                <Type className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(article)}
              className={`p-2 rounded-md border transition-colors ${
                isBookmarked
                  ? 'bg-[#14532D] text-white border-[#14532D]'
                  : 'bg-white text-[#78716C] border-[#E7DFD3] hover:text-[#1C1917]'
              }`}
              title={isBookmarked ? 'Bookmarked' : 'Save to Reading Ledger'}
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-4 h-4" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>

            {/* Share button */}
            <button
              onClick={handleCopyLink}
              className="p-2 bg-white border border-[#E7DFD3] rounded-md text-[#78716C] hover:text-[#1C1917] transition-colors"
              title="Copy dispatch link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-[#14532D]" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Reading Container */}
      <div className="max-w-3xl mx-auto px-6 pt-10">
        {/* Article Meta Header */}
        <header className="mb-10 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#78350F] uppercase tracking-widest mb-3">
            <span>{article.issue}</span>
            <span aria-hidden="true">·</span>
            <span>{article.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight leading-[1.15] text-balance">
            {article.title}
          </h1>

          <p className="text-lg lg:text-xl font-serif text-[#57534E] mt-4 leading-relaxed max-w-2xl mx-auto">
            {article.subtitle}
          </p>

          <div className="flex items-center justify-center gap-3 text-xs text-[#78716C] font-mono mt-6 pt-6 border-t border-[#E7DFD3] max-w-md mx-auto">
            <span>By <strong className="text-[#1C1917] font-semibold">{article.author.name}</strong></span>
            <span aria-hidden="true">·</span>
            <span>{article.publishDate}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
          </div>
        </header>

        {/* Feature Artwork Banner */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-[#E7DFD3] shadow-sm">
          <CricketArtwork
            type={article.artworkType}
            className="w-full h-72 sm:h-96"
            variant="banner"
          />
        </div>

        {/* Article Summary Box */}
        <div className="p-6 rounded-xl bg-[#F7F4EE] border-l-4 border-[#14532D] mb-12">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#14532D] font-bold mb-1">
            Dispatch Abstract & Curatorial Thesis
          </div>
          <p className="font-serif text-[#292524] text-base leading-relaxed">
            {article.summary}
          </p>
        </div>

        {/* Dynamic Prose Body */}
        <div
          className={`space-y-10 leading-relaxed text-[#1C1917] ${
            fontFamily === 'serif' ? 'font-serif-editorial' : 'font-sans-editorial'
          } ${
            fontSize === 'normal'
              ? 'text-lg leading-relaxed'
              : fontSize === 'large'
              ? 'text-xl leading-loose'
              : 'text-2xl leading-loose'
          }`}
        >
          {article.sections.map((sec, idx) => (
            <section key={idx} className="space-y-6">
              {sec.title && (
                <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#1C1917] pt-4 border-t border-[#EBE4D8]">
                  {sec.title}
                </h2>
              )}

              {sec.paragraphs.map((para, pIdx) => (
                <p
                  key={pIdx}
                  className={`${idx === 0 && pIdx === 0 ? 'drop-cap' : ''} text-[#292524]`}
                >
                  {para}
                </p>
              ))}

              {/* Callout box if present */}
              {sec.callout && (
                <div className="my-8 p-6 bg-[#FFFFFF] border border-[#E7DFD3] rounded-xl shadow-xs">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#78350F] font-bold mb-1">
                    Technical Blueprint
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1C1917]">
                    {sec.callout.title}
                  </h3>
                  <p className="text-sm text-[#57534E] mt-1 mb-4 font-sans">
                    {sec.callout.description}
                  </p>
                  {sec.callout.stats && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#F2EDE4] font-sans">
                      {sec.callout.stats.map((s, sIdx) => (
                        <div key={sIdx} className="p-3 bg-[#FCFAF7] border border-[#EBE4D8] rounded-lg">
                          <div className="text-xs text-[#78716C] font-mono">{s.label}</div>
                          <div className="text-sm font-semibold text-[#1C1917] mt-0.5">{s.value}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Pull quote after second section */}
              {idx === 0 && article.pullQuote && (
                <figure className="my-10 py-6 px-8 border-y-2 border-[#14532D] bg-[#F7F4EE]/60 text-center">
                  <blockquote className="text-xl sm:text-2xl font-serif italic text-[#1C1917] leading-relaxed">
                    &ldquo;{article.pullQuote}&rdquo;
                  </blockquote>
                  <figcaption className="text-xs font-mono text-[#78350F] uppercase tracking-widest mt-3">
                    — {article.pullQuoteAttribution}
                  </figcaption>
                </figure>
              )}
            </section>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-12 pt-6 border-t border-[#E7DFD3]">
          <span className="text-xs font-mono text-[#78716C] mr-2">Discourse Topics:</span>
          {article.tags.map((t, idx) => (
            <span
              key={idx}
              className="text-xs font-mono text-[#57534E] bg-[#EFE9DF] px-2.5 py-1 rounded"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* Author Footnote Card */}
        <div className="mt-10 p-6 bg-[#FFFFFF] border border-[#E7DFD3] rounded-xl flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-[#14532D] text-white flex items-center justify-center font-serif text-xl font-bold shrink-0">
            {article.author.initials}
          </div>
          <div>
            <div className="text-xs font-mono text-[#78350F] uppercase tracking-wider">
              About the Correspondent
            </div>
            <h4 className="font-serif font-bold text-lg text-[#1C1917]">
              {article.author.name}
            </h4>
            <p className="text-xs text-[#57534E] mt-0.5">
              {article.author.role} · {article.author.publication}
            </p>
          </div>
        </div>

        {/* Next / Previous Dispatch Navigators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-[#E7DFD3]">
          {prevArticle ? (
            <button
              onClick={() => {
                onSelectArticle(prevArticle);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 bg-[#FCFAF7] border border-[#E7DFD3] rounded-xl text-left hover:border-[#14532D] transition-all group"
            >
              <div className="flex items-center gap-1 text-[11px] font-mono text-[#78716C] group-hover:text-[#14532D]">
                <ChevronLeft className="w-3.5 h-3.5" /> Previous Dispatch
              </div>
              <div className="font-serif font-semibold text-sm text-[#1C1917] mt-1 line-clamp-1">
                {prevArticle.title}
              </div>
            </button>
          ) : <div />}

          {nextArticle && (
            <button
              onClick={() => {
                onSelectArticle(nextArticle);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 bg-[#FCFAF7] border border-[#E7DFD3] rounded-xl text-right hover:border-[#14532D] transition-all group"
            >
              <div className="flex items-center justify-end gap-1 text-[11px] font-mono text-[#78716C] group-hover:text-[#14532D]">
                Next Dispatch <ChevronRight className="w-3.5 h-3.5" />
              </div>
              <div className="font-serif font-semibold text-sm text-[#1C1917] mt-1 line-clamp-1">
                {nextArticle.title}
              </div>
            </button>
          )}
        </div>

        {/* Reader Discussion Section */}
        <section className="mt-16 pt-10 border-t-2 border-[#E7DFD3]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#78350F]">
                Pavilion Discourse
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1C1917]">
                Reader Dialogue & Commentary ({comments.length})
              </h3>
            </div>
          </div>

          {/* New Comment Input */}
          <form onSubmit={handleAddComment} className="bg-[#FFFFFF] border border-[#E7DFD3] rounded-xl p-5 mb-8 shadow-2xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                value={newCommentName}
                onChange={(e) => setNewCommentName(e.target.value)}
                placeholder="Your Name / Cricket Affiliation (optional)"
                className="w-full bg-[#FCFAF7] border border-[#E7DFD3] rounded-lg px-3.5 py-2 text-xs text-[#1C1917] focus:outline-none focus:ring-1 focus:ring-[#14532D]"
              />
            </div>
            <textarea
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              placeholder="Contribute your observation, counter-argument, or technical critique..."
              rows={3}
              required
              className="w-full bg-[#FCFAF7] border border-[#E7DFD3] rounded-lg p-3 text-xs text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:ring-1 focus:ring-[#14532D] resize-none"
            />
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 py-2 bg-[#14532D] text-white text-xs font-medium rounded-lg hover:bg-[#0F3E22] transition-colors"
              >
                <span>Publish to Ledger</span>
                <Send className="w-3 h-3" />
              </button>
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comm) => (
              <div key={comm.id} className="p-5 bg-[#FFFFFF] border border-[#E7DFD3] rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-bold text-sm text-[#1C1917]">
                      {comm.author}
                    </span>
                    <span className="text-[11px] font-mono text-[#78716C]">
                      · {comm.role}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#A8A29E]">
                    {comm.timestamp}
                  </span>
                </div>
                <p className="text-xs text-[#44403C] leading-relaxed font-serif">
                  {comm.content}
                </p>
                <div className="flex items-center gap-3 mt-3 pt-2 border-t border-[#F2EDE4]">
                  <button
                    onClick={() => handleToggleCommentLike(comm.id)}
                    className={`flex items-center gap-1 text-[11px] font-mono transition-colors ${
                      comm.userLiked ? 'text-[#14532D] font-bold' : 'text-[#78716C] hover:text-[#1C1917]'
                    }`}
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>{comm.likes} Agreements</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};
