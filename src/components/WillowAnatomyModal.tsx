import React, { useState } from 'react';
import { X, CheckCircle, Info, Sparkles } from 'lucide-react';

interface WillowAnatomyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AnatomyHotspot {
  id: string;
  name: string;
  y: number; // percentage
  spec: string;
  description: string;
  material: string;
}

const HOTSPOTS: AnatomyHotspot[] = [
  {
    id: 'handle',
    name: "Sarawak Multi-Cane & Rubber Splice Handle",
    y: 12,
    spec: "12-piece cane with 3-ply vulcanized rubber strips",
    description: "Acts as a multi-leaf spring suspension system. Dampens violent 90+ mph ball impacts so shockwaves don't numb the batter's hands.",
    material: "Sustainably harvested Sarawak Cane & Natural Latex"
  },
  {
    id: 'splice',
    name: "The Deep 3-Prong Splice Joint",
    y: 28,
    spec: "V-shaped interlock glued with animal collagen resin",
    description: "Connects the flexible cane handle to the rigid willow blade. Tested to withstand up to 450 kg of shear bending torque during full-blooded drives.",
    material: "High-grade structural wood resin"
  },
  {
    id: 'shoulders',
    name: "Aerodynamic Scalloped Shoulders",
    y: 42,
    spec: "Scalloped concave profiling (2-3mm shaved)",
    description: "Removes excess dead timber from the non-striking zone, allowing massive 40mm hitting edges while keeping total bat weight under 2 lbs 9 oz.",
    material: "Seasoned Salix Alba Caerulea"
  },
  {
    id: 'sweetspot',
    name: "The Mid-to-Low Sweet Spot (Node of Zero Vibration)",
    y: 65,
    spec: "Maximum 65mm spine depth · 8-12 straight grains",
    description: "The primary node where the coefficient of restitution peaks at 0.78. Impact here yields that legendary dry clonk sound with zero hand vibration.",
    material: "Grade 1+ Heartwood/Sapwood boundary"
  },
  {
    id: 'edges',
    name: "40mm Full Power Profile Edges",
    y: 72,
    spec: "Edge thickness: 38mm to 42mm",
    description: "Modern bats concentrate timber into the edges so mistimed defensive pushes or thick outside edges still fly over the slip cordon for four runs.",
    material: "Pre-pressed willow fibers"
  },
  {
    id: 'toe',
    name: "Pre-Compressed Hardened Toe with Resin Shield",
    y: 92,
    spec: "15mm rounded toe with rubber guard",
    description: "The most vulnerable zone. Pre-compressed during pressing to prevent splitting when digging out searing yorkers that jam into the crease.",
    material: "Polyurethane dip & fiber tape"
  }
];

export const WillowAnatomyModal: React.FC<WillowAnatomyModalProps> = ({ isOpen, onClose }) => {
  const [selectedHotspot, setSelectedHotspot] = useState<AnatomyHotspot>(HOTSPOTS[3]); // default sweetspot

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FAF8F5] border border-[#E7DFD3] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 lg:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#78716C] hover:text-[#1C1917] hover:bg-[#EBE4D8] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-[#E7DFD3] pb-4 mb-6">
          <div className="text-xs uppercase tracking-widest text-[#78350F] font-mono">
            Craftsmanship Blueprint · Interactive Anatomy
          </div>
          <h2 className="text-2xl lg:text-3xl font-serif text-[#1C1917] font-bold mt-1">
            Anatomy of a Grade 1+ English Willow Bat
          </h2>
          <p className="text-sm text-[#78716C] mt-1">
            Explore how master podshavers balance fiber density, spine elevation, and hand-feel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Bat Visualizer with Hotspots */}
          <div className="md:col-span-5 flex justify-center py-4 bg-[#F2EDE4] rounded-xl border border-[#E2D9C8]">
            <div className="relative w-28 h-[380px] flex justify-center items-center">
              {/* Bat SVG Profile */}
              <svg className="w-full h-full" viewBox="0 0 120 400" fill="none">
                {/* Cane Handle */}
                <rect x="52" y="10" width="16" height="100" rx="3" fill="#D6C4AA" stroke="#3E2E20" strokeWidth="2" />
                {/* Handle grip texture */}
                {[25, 40, 55, 70, 85].map((y) => (
                  <line key={y} x1="52" y1={y} x2="68" y2={y} stroke="#8C6E4A" strokeWidth="1.5" />
                ))}

                {/* Splice V */}
                <polygon points="52,110 68,110 60,145" fill="#4A3423" />

                {/* Blade Body */}
                <path
                  d="M38,135 L82,135 L88,360 C88,380 75,385 60,385 C45,385 32,380 32,360 Z"
                  fill="#EEDCC4"
                  stroke="#4A3423"
                  strokeWidth="2.5"
                />

                {/* Grains */}
                <line x1="44" y1="140" x2="42" y2="370" stroke="#B89B77" strokeWidth="1.2" />
                <line x1="50" y1="140" x2="49" y2="375" stroke="#9E7F5B" strokeWidth="1.4" />
                <line x1="56" y1="145" x2="56" y2="380" stroke="#8C6D48" strokeWidth="1.5" />
                <line x1="64" y1="140" x2="65" y2="375" stroke="#9E7F5B" strokeWidth="1.4" />
                <line x1="70" y1="140" x2="72" y2="370" stroke="#B89B77" strokeWidth="1.2" />

                {/* Sweet Spot Target Ring */}
                <circle cx="60" cy="275" r="18" stroke="#78350F" strokeWidth="2" strokeDasharray="3 3" fill="none" opacity="0.8" />
              </svg>

              {/* Hotspots Buttons overlay */}
              {HOTSPOTS.map((h) => {
                const isSelected = selectedHotspot.id === h.id;
                return (
                  <button
                    key={h.id}
                    onClick={() => setSelectedHotspot(h)}
                    style={{ top: `${h.y}%` }}
                    className={`absolute -translate-y-1/2 left-full ml-2 flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-mono whitespace-nowrap transition-all ${
                      isSelected
                        ? 'bg-[#14532D] text-white shadow-xs font-semibold scale-105'
                        : 'bg-white/90 text-[#44403C] hover:bg-white border border-[#D6CEBE]'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]" />
                    {h.name.split(' ')[0]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Hotspot Breakdown */}
          <div className="md:col-span-7 space-y-5">
            <div className="bg-[#FFFFFF] border border-[#E7DFD3] rounded-xl p-5 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#78350F] mb-1">
                <Sparkles className="w-4 h-4 text-[#78350F]" />
                Craft Feature Profile
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1C1917]">
                {selectedHotspot.name}
              </h3>
              <p className="text-sm font-serif text-[#44403C] mt-2 leading-relaxed">
                {selectedHotspot.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#FCFAF7] border border-[#E7DFD3] rounded-lg">
                <div className="text-[11px] font-mono text-[#78716C] uppercase tracking-wider">
                  Technical Specification
                </div>
                <div className="text-sm font-semibold text-[#1C1917] mt-1">
                  {selectedHotspot.spec}
                </div>
              </div>

              <div className="p-4 bg-[#FCFAF7] border border-[#E7DFD3] rounded-lg">
                <div className="text-[11px] font-mono text-[#78716C] uppercase tracking-wider">
                  Material Component
                </div>
                <div className="text-sm font-semibold text-[#14532D] mt-1">
                  {selectedHotspot.material}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#F7F4EE] text-xs text-[#57534E] leading-relaxed border border-[#E7DFD3]">
              <strong className="text-[#1C1917]">Podshaver&apos;s Wisdom:</strong> &ldquo;Each willow tree drinks from English chalk streams for fifteen years before it enters our workshop. We don&apos;t cut to a template; we carve to release the music trapped inside the grain.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
