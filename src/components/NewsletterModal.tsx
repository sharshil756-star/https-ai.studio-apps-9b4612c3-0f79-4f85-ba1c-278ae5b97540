import React, { useState } from 'react';
import { X, Mail, CheckCircle2, Send } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FAF8F5] border border-[#E7DFD3] rounded-2xl max-w-lg w-full p-6 lg:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-[#78716C] hover:text-[#1C1917] hover:bg-[#EBE4D8] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-[#D1FAE5] text-[#065F46] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#1C1917]">
              Welcome to the Pavilion
            </h3>
            <p className="text-sm font-serif text-[#57534E] mt-2 max-w-sm mx-auto">
              Your seat is reserved. The next edition of <em>The Morning Session</em> dispatch will arrive in your inbox before the first ball is bowled.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 bg-[#14532D] text-white text-xs font-medium rounded-lg hover:bg-[#0F3E22] transition-colors"
            >
              Return to Journal
            </button>
          </div>
        ) : (
          <div>
            <div className="text-xs uppercase tracking-widest text-[#78350F] font-mono mb-1">
              Weekly Cricket Dispatch
            </div>
            <h2 className="text-2xl lg:text-3xl font-serif text-[#1C1917] font-bold">
              The Morning Session
            </h2>
            <p className="text-sm font-serif text-[#57534E] mt-2 leading-relaxed">
              Curated longform essays on cricket history, tactical deconstruction, interview excerpts with willow craftsmen, and statistical deep dives delivered every Friday at 10:30 AM GMT.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              <div>
                <label className="block text-xs font-mono text-[#78716C] uppercase tracking-wider mb-1.5">
                  Reader Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#A8A29E] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="clive.lloyd@pavilion.org"
                    required
                    className="w-full bg-white border border-[#D6CEBE] rounded-lg pl-10 pr-4 py-2.5 text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#14532D] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#14532D] text-white text-xs font-medium rounded-lg hover:bg-[#0F3E22] transition-colors shadow-xs"
              >
                <span>Subscribe to Dispatch</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              <p className="text-[11px] text-[#A8A29E] text-center font-mono mt-3">
                No sponsored spam. Unsubscribe with a single click at any time.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
