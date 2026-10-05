import React, { useState } from 'react';
import { CloudRain, Sun, Wind, Compass, Sparkles, Layers } from 'lucide-react';

interface PitchPreset {
  id: string;
  name: string;
  location: string;
  ground: string;
  soil: string;
  grassCover: number; // percentage
  moisture: number; // percentage
  crackWidth: number; // mm
  bounceRating: 'Low' | 'Medium' | 'Steep / Head-High' | 'Variable';
  seamMovement: 'High' | 'Moderate' | 'Low' | 'Extreme';
  spinDegree: 'Negligible' | 'Low' | 'Moderate' | 'Aggressive' | 'Vicious (Turn & Bounce)';
  reverseSwingOvers: string;
  narrative: string;
  tactics: string[];
}

const PITCH_PRESETS: PitchPreset[] = [
  {
    id: 'lords',
    name: "Lord's Early June Green Top",
    location: "London, England",
    ground: "Lord's Cricket Ground",
    soil: "English Clay & Loam",
    grassCover: 12,
    moisture: 24,
    crackWidth: 0,
    bounceRating: 'Medium',
    seamMovement: 'Extreme',
    spinDegree: 'Negligible',
    reverseSwingOvers: 'Overs 60+ (Late)',
    narrative: "Heavily grassed with fresh morning moisture under English cloud cover. The Dukes ball grips the seam and jags unpredictably down the 8-foot natural ground slope.",
    tactics: [
      "Bowl full length at fourth stump to test outside edge",
      "Pack slip cordon with 4 slips and a floating gully",
      "Batter must leave aggressively outside off and play late under the eyes"
    ]
  },
  {
    id: 'waca',
    name: "WACA Perth Hard Baking Deck",
    location: "Perth, Western Australia",
    ground: "WACA Ground",
    soil: "Harvey River Black Clay",
    grassCover: 4,
    moisture: 6,
    crackWidth: 3,
    bounceRating: 'Steep / Head-High',
    seamMovement: 'Moderate',
    spinDegree: 'Low',
    reverseSwingOvers: 'Overs 35-50',
    narrative: "Baked by 38°C West Australian sun. The afternoon 'Fremantle Doctor' sea-breeze aids swing, while rock-hard clay sends bouncers hurtling past the batsman's grille.",
    tactics: [
      "Target chest and armpit with 145+ km/h bouncers",
      "Deploy fly slip and leg gully for deflected pull shots",
      "Batsman must get onto front foot only with absolute certainty"
    ]
  },
  {
    id: 'eden',
    name: "Eden Gardens Day 5 Dustbowl",
    location: "Kolkata, India",
    ground: "Eden Gardens",
    soil: "Gangetic Alluvial Red-Grey Clay",
    grassCover: 0,
    moisture: 3,
    crackWidth: 9,
    bounceRating: 'Variable',
    seamMovement: 'Low',
    spinDegree: 'Vicious (Turn & Bounce)',
    reverseSwingOvers: 'Overs 25-45 (Potent)',
    narrative: "Extensively fractured surface with deep fissures and chalky rough outside off stump. Bowlers target the scuffed footmarks to generate 8° to 12° of deviation.",
    tactics: [
      "Spinners operate continuously from both ends targeting rough",
      "Crouch with bat-pad, forward short leg, and leg slip",
      "Batter must use feet to smother spin or sweep with soft hands"
    ]
  },
  {
    id: 'pindi',
    name: "Rawalpindi Abrasive Highway",
    location: "Rawalpindi, Pakistan",
    ground: "Rawalpindi Cricket Stadium",
    soil: "Punjab Silt & Dense Clay",
    grassCover: 1,
    moisture: 4,
    crackWidth: 2,
    bounceRating: 'Low',
    seamMovement: 'Low',
    spinDegree: 'Moderate',
    reverseSwingOvers: 'Overs 20-40 (Lethal)',
    narrative: "Dry, flat, and hard-packed like concrete. Offers zero assistance to conventional seamers, but rapidly scuffs the leather for devastating 90 mph reverse swing.",
    tactics: [
      "Rigorous one-sided sweat polishing to induce reverse swing",
      "Attack the stumps with yorkers and skiddy angled deliveries",
      "Spread boundary riders as batsmen play through the line"
    ]
  }
];

export const PitchConditionsLab: React.FC = () => {
  const [selectedPitch, setSelectedPitch] = useState<PitchPreset>(PITCH_PRESETS[0]);
  const [dayWear, setDayWear] = useState<number>(1);

  // Dynamic calculations based on day of test match
  const dynamicCracks = Math.min(12, selectedPitch.crackWidth + (dayWear - 1) * 2.2);
  const dynamicMoisture = Math.max(2, selectedPitch.moisture - (dayWear - 1) * 4.5);
  const dynamicTurn = dayWear >= 4 ? 'Sharp 8°–12° Break' : dayWear >= 3 ? 'Moderate 4°–6° Grip' : 'True line / Minimal';

  return (
    <div className="bg-[#FFFFFF] border border-[#E7DFD3] rounded-xl p-6 lg:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#EBE4D8] pb-6 mb-8 gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#78350F] font-mono mb-1">
            Tactical Simulator · The Pitch Conditions Lab
          </div>
          <h2 className="text-2xl lg:text-3xl font-serif text-[#1C1917] font-semibold">
            Soil Dynamics, Climate & Ball Behavior
          </h2>
          <p className="text-sm text-[#78716C] mt-1 max-w-2xl">
            In cricket, the pitch is not merely a surface—it is an evolving, living protagonist that dictates tactics, ball wear, and bowling warfare across five days.
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex items-center gap-2 bg-[#F7F4EE] border border-[#E7DFD3] rounded-lg p-1.5 self-start md:self-auto">
          <span className="text-xs font-medium text-[#78716C] px-2">Match Progression:</span>
          {[1, 2, 3, 4, 5].map((d) => (
            <button
              key={d}
              onClick={() => setDayWear(d)}
              className={`px-3 py-1 text-xs font-mono font-medium rounded-md transition-all ${
                dayWear === d
                  ? 'bg-[#14532D] text-white shadow-xs'
                  : 'text-[#44403C] hover:text-[#1C1917] hover:bg-[#EBE4D8]'
              }`}
            >
              Day {d}
            </button>
          ))}
        </div>
      </div>

      {/* Pitch Archetype Selector */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {PITCH_PRESETS.map((p) => {
          const isSelected = selectedPitch.id === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedPitch(p)}
              className={`text-left p-4 rounded-lg border transition-all ${
                isSelected
                  ? 'border-[#14532D] bg-[#F4F9F5] ring-1 ring-[#14532D]'
                  : 'border-[#E7DFD3] bg-[#FCFAF7] hover:border-[#D6CEBE]'
              }`}
            >
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#78716C]">
                {p.location}
              </div>
              <div className="font-serif font-bold text-base text-[#1C1917] mt-1 leading-snug">
                {p.name}
              </div>
              <div className="text-xs text-[#57534E] mt-2 line-clamp-1">
                {p.soil}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Pitch Simulator Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Pitch Graphic Representation */}
        <div className="lg:col-span-7 bg-[#F7F4EE] border border-[#E7DFD3] rounded-xl p-6 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-[#78716C] font-mono mb-4">
            <span>22 Yards · 66 Feet Regulated Crease</span>
            <span>Soil Moisture: {dynamicMoisture.toFixed(1)}%</span>
          </div>

          {/* Interactive Turf Strip */}
          <div className="relative h-48 w-full rounded-lg overflow-hidden border border-[#D6CEBE] bg-[#967C58] shadow-inner flex items-center justify-center">
            {/* Base Soil color according to pitch */}
            <div
              className={`absolute inset-0 transition-colors duration-500 ${
                selectedPitch.id === 'lords'
                  ? 'bg-gradient-to-r from-[#3D6942] via-[#5C7D52] to-[#3D6942]'
                  : selectedPitch.id === 'waca'
                  ? 'bg-gradient-to-r from-[#A37340] via-[#B88448] to-[#996C3A]'
                  : selectedPitch.id === 'eden'
                  ? 'bg-gradient-to-r from-[#8C5D3B] via-[#754E31] to-[#8C5D3B]'
                  : 'bg-gradient-to-r from-[#A89276] via-[#B5A084] to-[#A89276]'
              }`}
            />

            {/* Grass flecks for green tops */}
            {selectedPitch.grassCover > 5 && (
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#2A522F_1.5px,transparent_1.5px)] [background-size:8px_8px]" />
            )}

            {/* Fissures and Cracks on Day 4 & 5 */}
            {dynamicCracks > 3 && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 180">
                <path d="M70,20 Q85,70 80,120 T90,160" stroke="#2B1A0E" strokeWidth={dynamicCracks * 0.45} fill="none" opacity="0.8" />
                <path d="M210,10 Q215,60 230,110 T220,170" stroke="#2B1A0E" strokeWidth={dynamicCracks * 0.55} fill="none" opacity="0.85" />
                <path d="M310,40 Q325,90 318,140" stroke="#2B1A0E" strokeWidth={dynamicCracks * 0.4} fill="none" opacity="0.75" />
              </svg>
            )}

            {/* Stumps at both ends */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-1 items-center">
              <div className="w-1.5 h-14 bg-[#F5F0E6] border border-[#5C3D2E] rounded-xs shadow-xs" />
              <div className="w-1.5 h-14 bg-[#F5F0E6] border border-[#5C3D2E] rounded-xs shadow-xs" />
              <div className="w-1.5 h-14 bg-[#F5F0E6] border border-[#5C3D2E] rounded-xs shadow-xs" />
              <span className="text-[9px] font-mono text-white/90 uppercase tracking-wider mt-1 bg-black/40 px-1 rounded">
                Bowling Crease
              </span>
            </div>

            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-1 items-center">
              <div className="w-1.5 h-14 bg-[#F5F0E6] border border-[#5C3D2E] rounded-xs shadow-xs" />
              <div className="w-1.5 h-14 bg-[#F5F0E6] border border-[#5C3D2E] rounded-xs shadow-xs" />
              <div className="w-1.5 h-14 bg-[#F5F0E6] border border-[#5C3D2E] rounded-xs shadow-xs" />
              <span className="text-[9px] font-mono text-white/90 uppercase tracking-wider mt-1 bg-black/40 px-1 rounded">
                Batting Crease
              </span>
            </div>

            {/* Ball impact point & vector trajectory */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-[#B91C1C] border-2 border-white shadow-md animate-pulse flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <div className="text-[11px] font-mono text-white bg-black/60 px-2 py-0.5 rounded-full mt-2 backdrop-blur-xs">
                Good Length Impact (6.5m)
              </div>
            </div>
          </div>

          {/* Environmental metrics strip */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-[#E7DFD3] text-center">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#78716C]">
                Bounce Profile
              </div>
              <div className="font-serif font-bold text-base text-[#1C1917] mt-0.5">
                {selectedPitch.bounceRating}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#78716C]">
                Seam Nip
              </div>
              <div className="font-serif font-bold text-base text-[#14532D] mt-0.5">
                {selectedPitch.seamMovement}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#78716C]">
                Spin Deviation
              </div>
              <div className="font-serif font-bold text-base text-[#9A3412] mt-0.5">
                {dynamicTurn}
              </div>
            </div>
          </div>
        </div>

        {/* Narrative & Tactical Directives */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className="p-5 rounded-xl bg-[#FCFAF7] border border-[#E7DFD3]">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#78350F] mb-2">
              <Compass className="w-4 h-4 text-[#78350F]" />
              Curator&apos;s Match Assessment
            </div>
            <p className="text-sm font-serif text-[#292524] leading-relaxed">
              {selectedPitch.narrative}
            </p>
            <div className="mt-3 text-xs text-[#78716C] font-mono flex items-center gap-2">
              <Wind className="w-3.5 h-3.5 text-[#14532D]" />
              Reverse Swing Window: <strong className="text-[#1C1917]">{selectedPitch.reverseSwingOvers}</strong>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#F4F9F5] border border-[#D1E7D8]">
            <div className="text-xs font-mono uppercase tracking-widest text-[#14532D] mb-3 font-semibold">
              Tactical Playbook Directives
            </div>
            <ul className="space-y-2.5">
              {selectedPitch.tactics.map((t, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#292524] leading-normal">
                  <span className="w-4 h-4 rounded-full bg-[#14532D] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-mono">
                    {idx + 1}
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
