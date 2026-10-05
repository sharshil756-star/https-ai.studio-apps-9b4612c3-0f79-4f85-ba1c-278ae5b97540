import React, { useState } from 'react';
import { Target, Users, ShieldAlert, Award } from 'lucide-react';

interface Fielder {
  id: string;
  name: string;
  x: number; // percentage on field
  y: number; // percentage on field
  type: 'attacking' | 'saving' | 'boundary';
  role: string;
  historicMaster: string;
  tacticalNote: string;
}

interface FieldSetup {
  id: string;
  title: string;
  scenario: string;
  bowlerType: 'Right-Arm Fast' | 'Right-Arm Leg-Spin' | 'Death-Overs Pacer';
  description: string;
  fielders: Fielder[];
}

const FIELD_SETUPS: FieldSetup[] = [
  {
    id: 'test-pace',
    title: "Test Match: 4-Man Slip Cordon & Gully",
    scenario: "New ball outside off, overs 1-15, seam & swing on offer",
    bowlerType: "Right-Arm Fast",
    description: "The classic English & Australian cordon designed to tempt the batter into a loose defensive push outside off-stump.",
    fielders: [
      { id: 'wk', name: "Wicketkeeper", x: 48, y: 72, type: 'attacking', role: "Primary catcher; 18-22 yards back", historicMaster: "Adam Gilchrist / Alan Knott", tacticalNote: "Dives across slips, dictates cordon spacing." },
      { id: '1s', name: "1st Slip", x: 53, y: 74, type: 'attacking', role: "Takes thick edges off the shoulder of the bat", historicMaster: "Mark Waugh / Rahul Dravid", tacticalNote: "Anchors the cordon, hands at knee height until edge." },
      { id: '2s', name: "2nd Slip", x: 58, y: 73, type: 'attacking', role: "Receptive to squared-up deflections", historicMaster: "Ricky Ponting / Matthew Hayden", tacticalNote: "Slightly staggered behind first slip." },
      { id: '3s', name: "3rd Slip", x: 63, y: 71, type: 'attacking', role: "Catches sliced drives and angled pushes", historicMaster: "Michael Clarke", tacticalNote: "Ready to leap to the right on slashed drives." },
      { id: 'gul', name: "Gully", x: 72, y: 64, type: 'attacking', role: "Catches high flying edges off extra bounce", historicMaster: "Jonty Rhodes / Cameron Green", tacticalNote: "Stands backward of point; diving backward reflex." },
      { id: 'cp', name: "Cover Point", x: 78, y: 48, type: 'saving', role: "Saves the single on the drive", historicMaster: "Paul Collingwood", tacticalNote: "Rings the off-side 30-yard circle." },
      { id: 'mo', name: "Mid Off", x: 58, y: 32, type: 'saving', role: "Prevents straight driven boundary", historicMaster: "Clive Lloyd", tacticalNote: "Walks in with the bowler to cut off crisp drives." },
      { id: 'mi', name: "Mid On", x: 42, y: 32, type: 'saving', role: "Guards the straight mid-on zone", historicMaster: "Allan Border", tacticalNote: "Tightens the straight channel." },
      { id: 'mw', name: "Mid Wicket", x: 30, y: 46, type: 'saving', role: "Saves leg-side whip", historicMaster: "Viv Richards", tacticalNote: "Catches clipped shots off the hip." },
      { id: 'sl', name: "Square Leg", x: 26, y: 62, type: 'saving', role: "Guards short ball deflections", historicMaster: "Ian Chappell", tacticalNote: "Watches for top-edged hooks or pulled balls." },
      { id: 'fb', name: "Fine Leg", x: 24, y: 84, type: 'boundary', role: "Deep boundary rider for mistimed glances", historicMaster: "Lasith Malinga", tacticalNote: "Sprint coverage across the fine leg rope." },
    ]
  },
  {
    id: 'spin-trap',
    title: "Subcontinent Dustbowl: 3-Man Close-In Trap",
    scenario: "Day 5 crumbling turf, ball turning sharply across right-hander",
    bowlerType: "Right-Arm Leg-Spin",
    description: "Suffocating ring of helmeted close catchers waiting for the smallest glove, pad, or inside edge deflection.",
    fielders: [
      { id: 'wk', name: "Wicketkeeper", x: 49, y: 64, type: 'attacking', role: "Up to the stumps; lightning stumping ready", historicMaster: "MS Dhoni / Wriddhiman Saha", tacticalNote: "Takes the ball off the turf with soft hands." },
      { id: '1s', name: "1st Slip", x: 55, y: 66, type: 'attacking', role: "Sharp leg-break catcher", historicMaster: "Shane Warne / Mark Waugh", tacticalNote: "Close in; watches the edge off the pitch." },
      { id: 'sp', name: "Silly Point", x: 58, y: 55, type: 'attacking', role: "Helmeted catcher 2 meters from bat", historicMaster: "Brian Close / Cheteshwar Pujara", tacticalNote: "Absorbs blows to the shin guards on bat-pad pops." },
      { id: 'fsl', name: "Forward Short Leg", x: 42, y: 55, type: 'attacking', role: "Crouched inside batsman's peripheral vision", historicMaster: "Eknath Solkar / David Boon", tacticalNote: "The bravest position in cricket; catches reflex gloats." },
      { id: 'ls', name: "Leg Slip", x: 43, y: 66, type: 'attacking', role: "Catches glancing deflections off pads", historicMaster: "Harbhajan Singh cordon", tacticalNote: "Positioned for the ball kicking down leg-stump." },
      { id: 'sc', name: "Short Cover", x: 70, y: 50, type: 'saving', role: "Smothers drive through extra cover", historicMaster: "Virat Kohli", tacticalNote: "Attacks the ball aggressively on every defense." },
      { id: 'smw', name: "Short Mid-Wicket", x: 33, y: 48, type: 'saving', role: "Catches leading edges on the flick", historicMaster: "Sourav Ganguly", tacticalNote: "Positioned directly in the batter's eye line." },
      { id: 'mo', name: "Mid Off", x: 62, y: 34, type: 'saving', role: "Provides lofted drive deterrence", historicMaster: "Pat Cummins", tacticalNote: "Prevents easy singles." },
      { id: 'dsw', name: "Deep Square Leg", x: 18, y: 60, type: 'boundary', role: "Deep protection for sweep shot", historicMaster: "Ben Stokes", tacticalNote: "Guards the 6-run sweep." },
      { id: 'dco', name: "Deep Cover", x: 84, y: 45, type: 'boundary', role: "Outfield insurance for inside-out loft", historicMaster: "Ravindra Jadeja", tacticalNote: "Rocket throw back to the keeper." },
      { id: 'lr', name: "Long On", x: 38, y: 20, type: 'boundary', role: "Protects straight lofted strike", historicMaster: "Kieron Pollard", tacticalNote: "Tall boundary rider capable of overhead catches." }
    ]
  },
  {
    id: 't20-death',
    title: "T20 Franchise: 19th Over Yorker Defense",
    scenario: "14 runs needed off 6 balls, pacers executing wide yorkers",
    bowlerType: "Death-Overs Pacer",
    description: "Calculated boundary containment designed to squeeze boundary hits into hurried twos or high-pressure mishits.",
    fielders: [
      { id: 'wk', name: "Wicketkeeper", x: 50, y: 68, type: 'saving', role: "Back 12 yards, one glove off for run-out sprint", historicMaster: "Jos Buttler / MS Dhoni", tacticalNote: "Unsheathes throwing hand to target stumps directly." },
      { id: 'sw', name: "Short Third Man", x: 68, y: 65, type: 'saving', role: "Inside ring; cuts off edged squirts", historicMaster: "Rashid Khan", tacticalNote: "Guards the ramp and reverse scoop single." },
      { id: 'ep', name: "Extra Cover Ring", x: 74, y: 44, type: 'saving', role: "Inside circle to maintain 5-fielders rule", historicMaster: "Faf du Plessis", tacticalNote: "Dives left and right to stop singles." },
      { id: 'sm', name: "Short Mid-Wicket Ring", x: 30, y: 46, type: 'saving', role: "Inside circle catching position", historicMaster: "Glenn Maxwell", tacticalNote: "Anticipates mistimed slog sweeps." },
      { id: 'dp', name: "Deep Point Sweeper", x: 86, y: 55, type: 'boundary', role: "Guards the wide off-stump carve", historicMaster: "David Warner", tacticalNote: "Rides the rope to turn four into one." },
      { id: 'dc', name: "Deep Extra Cover", x: 84, y: 35, type: 'boundary', role: "Guards inside-out aerial drive", historicMaster: "Ravindra Jadeja", tacticalNote: "Flat projectile arm capable of direct hits." },
      { id: 'lo', name: "Long Off", x: 64, y: 16, type: 'boundary', role: "Straight boundary rider", historicMaster: "Hardik Pandya", tacticalNote: "Jump-timing boundary relay catcher." },
      { id: 'ln', name: "Long On", x: 36, y: 16, type: 'boundary', role: "Protects powerful straight hit", historicMaster: "Andre Russell", tacticalNote: "Covers the sight screen zone." },
      { id: 'dmw', name: "Deep Mid-Wicket", x: 18, y: 40, type: 'boundary', role: "The Cow Corner destroyer", historicMaster: "Tim David", tacticalNote: "The most active boundary fielder in T20 cricket." },
      { id: 'fl', name: "Short Fine Leg", x: 34, y: 66, type: 'saving', role: "Inside ring to deter paddle sweep", historicMaster: "Mitchell Santner", tacticalNote: "Tight against the 30-yard ring line." },
      { id: 'bw', name: "Bowler Follow-Through", x: 50, y: 42, type: 'saving', role: "Collects straight bullet drives", historicMaster: "Jasprit Bumrah", tacticalNote: "Protects their own face and shins on return rockets." }
    ]
  }
];

export const FieldTacticsVisualizer: React.FC = () => {
  const [selectedSetup, setSelectedSetup] = useState<FieldSetup>(FIELD_SETUPS[0]);
  const [activeFielder, setActiveFielder] = useState<Fielder>(FIELD_SETUPS[0].fielders[0]);

  return (
    <div className="bg-[#FFFFFF] border border-[#E7DFD3] rounded-xl p-6 lg:p-8 shadow-xs">
      <div className="border-b border-[#EBE4D8] pb-6 mb-8">
        <div className="text-xs uppercase tracking-widest text-[#78350F] font-mono mb-1">
          Tactical Blueprint · Cricket Field Visualizer
        </div>
        <h2 className="text-2xl lg:text-3xl font-serif text-[#1C1917] font-semibold">
          Fielding Geometries & Strategic Ambush
        </h2>
        <p className="text-sm text-[#78716C] mt-1 max-w-2xl">
          A cricket captain moves eleven human chess pieces across seventy meters of turf. Click any fielder to examine their tactical mandate and historic masters.
        </p>
      </div>

      {/* Preset Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FIELD_SETUPS.map((setup) => {
          const isSelected = selectedSetup.id === setup.id;
          return (
            <button
              key={setup.id}
              onClick={() => {
                setSelectedSetup(setup);
                setActiveFielder(setup.fielders[0]);
              }}
              className={`px-4 py-2 text-xs font-medium rounded-lg border transition-all ${
                isSelected
                  ? 'bg-[#14532D] text-white border-[#14532D] shadow-xs'
                  : 'bg-[#FCFAF7] text-[#44403C] border-[#E7DFD3] hover:bg-[#F7F4EE]'
              }`}
            >
              {setup.title}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* The Cricket Oval Graphic */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full max-w-[440px] aspect-square rounded-full border-4 border-[#14532D]/30 bg-gradient-to-b from-[#2A5C35] via-[#224E2B] to-[#1C4224] p-4 shadow-inner overflow-hidden">
            {/* Outfield mow rings */}
            <div className="absolute inset-4 rounded-full border border-white/10" />
            <div className="absolute inset-8 rounded-full border border-white/10" />
            <div className="absolute inset-14 rounded-full border border-white/15" />
            
            {/* 30-Yard Inner Circle */}
            <div className="absolute inset-[24%] rounded-full border-2 border-white/30 border-dashed" />
            <div className="absolute top-[26%] left-1/2 -translate-x-1/2 text-[9px] font-mono text-white/50 uppercase tracking-widest">
              30-Yard Ring
            </div>

            {/* Central 22-Yard Pitch */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-28 bg-[#B89874] border border-[#E7DFD3] rounded-xs shadow-md flex flex-col justify-between items-center py-1">
              {/* Bowler end stumps */}
              <div className="w-4 h-1 bg-[#4A2E1B] rounded-xs" />
              {/* Pitch central indicator */}
              <div className="text-[8px] font-mono text-[#4A2E1B]/70 rotate-90 whitespace-nowrap">
                22 YARDS
              </div>
              {/* Batter end stumps */}
              <div className="w-4 h-1 bg-[#4A2E1B] rounded-xs" />
            </div>

            {/* Batter silhouette marker */}
            <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 text-[9px] text-[#FEF3C7] font-bold bg-[#78350F] px-1 rounded">
              RHB
            </div>

            {/* Bowler marker */}
            <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 text-[9px] text-[#DCFCE7] font-bold bg-[#14532D] px-1 rounded">
              BWL
            </div>

            {/* Fielders rendered as interactive pins */}
            {selectedSetup.fielders.map((f) => {
              const isActive = activeFielder.id === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFielder(f)}
                  style={{ left: `${f.x}%`, top: `${f.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-transform ${
                    isActive ? 'scale-125 z-30' : 'hover:scale-110 z-20'
                  }`}
                  title={f.name}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold font-mono shadow-md border ${
                      isActive
                        ? 'bg-[#F59E0B] text-[#1C1917] border-white ring-2 ring-[#F59E0B]'
                        : f.type === 'attacking'
                        ? 'bg-[#EF4444] text-white border-white/80'
                        : f.type === 'boundary'
                        ? 'bg-[#3B82F6] text-white border-white/80'
                        : 'bg-[#10B981] text-white border-white/80'
                    }`}
                  >
                    {f.id.toUpperCase().slice(0, 2)}
                  </div>
                  <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-1.5 py-0.5 bg-black/80 text-white text-[10px] rounded whitespace-nowrap backdrop-blur-xs">
                    {f.name}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4 mt-4 text-[11px] font-mono text-[#78716C]">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" /> Close Attacking
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" /> Ring Saving
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" /> Deep Boundary
            </span>
          </div>
        </div>

        {/* Selected Fielder Profile & Tactical Info */}
        <div className="lg:col-span-5 bg-[#FCFAF7] border border-[#E7DFD3] rounded-xl p-6">
          <div className="flex items-center justify-between border-b border-[#EBE4D8] pb-4 mb-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#78350F]">
                Selected Position
              </span>
              <h3 className="text-xl font-serif font-bold text-[#1C1917]">
                {activeFielder.name}
              </h3>
            </div>
            <span className={`px-2.5 py-1 text-xs font-mono font-medium rounded-full ${
              activeFielder.type === 'attacking'
                ? 'bg-[#FEE2E2] text-[#991B1B]'
                : activeFielder.type === 'boundary'
                ? 'bg-[#DBEAFE] text-[#1E40AF]'
                : 'bg-[#D1FAE5] text-[#065F46]'
            }`}>
              {activeFielder.type.toUpperCase()}
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-xs font-mono text-[#78716C] uppercase tracking-wider">
                Primary Function
              </div>
              <p className="text-sm font-serif text-[#292524] mt-0.5">
                {activeFielder.role}
              </p>
            </div>

            <div>
              <div className="text-xs font-mono text-[#78716C] uppercase tracking-wider">
                Tactical Nuance
              </div>
              <p className="text-sm text-[#44403C] mt-0.5 leading-relaxed">
                {activeFielder.tacticalNote}
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#F4F1EA] border border-[#E2D9C8]">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#78350F] font-semibold mb-1">
                <Award className="w-3.5 h-3.5 text-[#78350F]" />
                Historic Benchmark Master
              </div>
              <div className="text-sm font-serif font-bold text-[#1C1917]">
                {activeFielder.historicMaster}
              </div>
            </div>

            <div className="pt-2 text-xs text-[#78716C] italic font-serif">
              Tactical Setup: {selectedSetup.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
