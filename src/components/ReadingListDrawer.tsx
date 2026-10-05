import React from 'react';
import { X, Bookmark, ArrowRight, Trash2, BookOpen } from 'lucide-react';
import { CricketArticle } from '../data/articles';

interface ReadingListDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: CricketArticle[];
  onSelectArticle: (article: CricketArticle) => void;
  onRemoveArticle: (id: string) => void;
  onClearAll: () => void;
}

export const ReadingListDrawer: React.FC<ReadingListDrawerProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onSelectArticle,
  onRemoveArticle,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-[#FAF8F5] border-l border-[#E7DFD3] h-full shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-[#E7DFD3] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Bookmark className="w-5 h-5 text-[#14532D]" />
            <div>
              <h3 className="font-serif font-bold text-lg text-[#1C1917]">
                Your Reading Ledger
              </h3>
              <p className="text-xs text-[#78716C] font-mono">
                {savedArticles.length} {savedArticles.length === 1 ? 'Dispatch Saved' : 'Dispatches Saved'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#78716C] hover:text-[#1C1917] hover:bg-[#EBE4D8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {savedArticles.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-12 h-12 rounded-full bg-[#EBE4D8] text-[#78716C] flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-semibold text-base text-[#1C1917]">
                No dispatches bookmarked yet
              </h4>
              <p className="text-xs text-[#78716C] mt-1 max-w-xs mx-auto">
                Click the ribbon icon on any cricket article to save it to your reading ledger for quiet offline study.
              </p>
            </div>
          ) : (
            savedArticles.map((article) => (
              <div
                key={article.id}
                className="bg-[#FFFFFF] border border-[#E7DFD3] rounded-xl p-4 transition-all hover:border-[#D6CEBE] shadow-2xs group"
              >
                <div className="flex items-center justify-between text-[11px] text-[#78716C] font-mono mb-1.5">
                  <span className="text-[#14532D] font-medium">{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h4
                  onClick={() => {
                    onSelectArticle(article);
                    onClose();
                  }}
                  className="font-serif font-bold text-base text-[#1C1917] group-hover:text-[#14532D] cursor-pointer line-clamp-2 leading-snug transition-colors"
                >
                  {article.title}
                </h4>
                <p className="text-xs text-[#57534E] mt-1 line-clamp-2">
                  {article.summary}
                </p>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#F2EDE4]">
                  <span className="text-[11px] text-[#78716C]">
                    By {article.author.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onRemoveArticle(article.id)}
                      className="text-stone-400 hover:text-red-600 transition-colors p-1"
                      title="Remove from reading list"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        onSelectArticle(article);
                        onClose();
                      }}
                      className="text-xs font-medium text-[#14532D] hover:underline flex items-center gap-1"
                    >
                      Read <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedArticles.length > 0 && (
          <div className="p-4 border-t border-[#E7DFD3] bg-[#FCFAF7] flex items-center justify-between">
            <button
              onClick={onClearAll}
              className="text-xs font-mono text-[#78716C] hover:text-red-700 transition-colors"
            >
              Clear Ledger
            </button>
            <span className="text-xs font-mono text-[#78716C]">
              Syncs with local storage
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
