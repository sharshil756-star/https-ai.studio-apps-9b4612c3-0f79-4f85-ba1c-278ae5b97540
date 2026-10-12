import React from 'react';
import { X, Search, CheckCircle2, Globe, FileText, HelpCircle, ArrowRight } from 'lucide-react';
import { KEYWORD_RESEARCH_TABLE, KeywordResearchItem } from '../data/seoData';

interface SeoKeywordMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToUrl?: (url: string) => void;
}

export const SeoKeywordMatrixModal: React.FC<SeoKeywordMatrixModalProps> = ({
  isOpen,
  onClose,
  onNavigateToUrl
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FAF8F5] border border-[#E7DFD3] rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 lg:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#78716C] hover:text-[#1C1917] hover:bg-[#EBE4D8] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-[#E7DFD3] pb-4 mb-6">
          <div className="text-xs uppercase tracking-widest text-[#78350F] font-mono">
            Step 2 Audit · On-Page SEO & Keyword Strategy
          </div>
          <h2 className="text-2xl lg:text-3xl font-serif text-[#1C1917] font-bold mt-1">
            Keyword Research Table for Homepage & 3 Core Articles
          </h2>
          <p className="text-sm text-[#78716C] mt-1 max-w-2xl">
            Detailed breakdown of search volume, intent, main and secondary keywords, titles (30-60 chars), meta descriptions (120-160 chars), and AEO question-answer structures.
          </p>
        </div>

        {/* The Matrix Table */}
        <div className="overflow-x-auto border border-[#E7DFD3] rounded-xl bg-white shadow-2xs mb-8">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F7F4EE] border-b border-[#E7DFD3] text-[#78350F] font-mono uppercase tracking-wider">
              <tr>
                <th className="p-3.5 font-semibold">Page / URL</th>
                <th className="p-3.5 font-semibold">Primary Keyword</th>
                <th className="p-3.5 font-semibold">2 Related Keywords</th>
                <th className="p-3.5 font-semibold">Search Intent & Metrics</th>
                <th className="p-3.5 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EBE4D8]">
              {KEYWORD_RESEARCH_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#FCFAF7] transition-colors">
                  <td className="p-4 align-top">
                    <div className="font-serif font-bold text-sm text-[#1C1917]">
                      {row.pageName}
                    </div>
                    <code className="text-[11px] font-mono text-[#14532D] bg-[#F2EDE4] px-1.5 py-0.5 rounded mt-1 inline-block">
                      {row.url}
                    </code>
                  </td>

                  <td className="p-4 align-top">
                    <span className="font-semibold text-[#1C1917] bg-[#FEF3C7] px-2 py-0.5 rounded text-xs">
                      {row.mainKeyword}
                    </span>
                  </td>

                  <td className="p-4 align-top space-y-1">
                    <div className="text-[#57534E]">1. {row.relatedKeyword1}</div>
                    <div className="text-[#57534E]">2. {row.relatedKeyword2}</div>
                  </td>

                  <td className="p-4 align-top">
                    <div className="font-medium text-[#1C1917]">{row.searchIntent}</div>
                    <div className="text-[11px] text-[#78716C] font-mono mt-0.5">
                      Vol: {row.searchVolume} · Comp: {row.competition}
                    </div>
                  </td>

                  <td className="p-4 align-top whitespace-nowrap">
                    {onNavigateToUrl && (
                      <button
                        onClick={() => {
                          onNavigateToUrl(row.url);
                          onClose();
                        }}
                        className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#14532D] bg-[#F4F9F5] border border-[#D1E7D8] rounded-md hover:bg-[#14532D] hover:text-white transition-all"
                      >
                        <span>View Page</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detailed Metadata & AEO Specifications */}
        <h3 className="text-xl font-serif font-bold text-[#1C1917] mb-4">
          On-Page Metadata & AEO (Answer Engine Optimization) Rules Checklist
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {KEYWORD_RESEARCH_TABLE.map((row, idx) => (
            <div key={idx} className="p-4 bg-white border border-[#E7DFD3] rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-[#F2EDE4] pb-2">
                <span className="font-serif font-bold text-sm text-[#1C1917]">
                  {row.pageName}
                </span>
                <span className="text-[10px] font-mono text-[#14532D] bg-[#D1FAE5] px-2 py-0.5 rounded-full font-semibold">
                  AEO Optimized
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#78716C]">
                  <span>Title Tag ({row.titleTag.length} chars · Rule: 30-60)</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="text-xs font-medium text-[#1C1917] mt-0.5 font-serif">
                  {row.titleTag}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#78716C]">
                  <span>Meta Description ({row.metaDescription.length} chars · Rule: 120-160)</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <p className="text-xs text-[#57534E] mt-0.5 font-serif leading-relaxed">
                  {row.metaDescription}
                </p>
              </div>

              <div className="p-2.5 bg-[#FBF9F5] rounded-lg border border-[#EBE4D8]">
                <div className="text-[10px] font-mono uppercase text-[#78350F] font-semibold">
                  AEO Question Subheading (H2)
                </div>
                <div className="text-xs font-serif font-bold text-[#1C1917] mt-0.5">
                  &ldquo;{row.aeoQuestion}&rdquo;
                </div>
                <div className="text-[11px] text-[#57534E] mt-1 font-serif leading-relaxed">
                  <strong>Direct Answer:</strong> {row.aeoAnswerSummary}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
