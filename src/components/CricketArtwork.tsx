import React from 'react';

interface CricketArtworkProps {
  type: string;
  className?: string;
  variant?: 'card' | 'hero' | 'banner';
}

export const CricketArtwork: React.FC<CricketArtworkProps> = ({
  type,
  className = '',
  variant = 'card',
}) => {
  const isHero = variant === 'hero';

  switch (type) {
    case 'willow':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#2D241E] via-[#3E3228] to-[#1C1612] ${className} flex items-center justify-center`}>
          {/* Subtle woodgrain lines */}
          <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 600 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 Q150,40 300,55 T600,45" stroke="#E2D9C8" strokeWidth="1.2" fill="none" />
            <path d="M0,100 Q180,90 320,110 T600,95" stroke="#E2D9C8" strokeWidth="1" fill="none" />
            <path d="M0,160 Q140,150 280,165 T600,150" stroke="#E2D9C8" strokeWidth="1.5" fill="none" />
            <path d="M0,220 Q200,210 340,230 T600,215" stroke="#E2D9C8" strokeWidth="1" fill="none" />
            <path d="M0,280 Q160,270 300,290 T600,275" stroke="#E2D9C8" strokeWidth="1.3" fill="none" />
            <path d="M0,340 Q210,330 360,350 T600,335" stroke="#E2D9C8" strokeWidth="1" fill="none" />
          </svg>

          {/* Central Crafted Willow & Drawknife Composition */}
          <svg className="relative z-10 w-4/5 h-4/5 max-w-[340px]" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EAD8BE" />
                <stop offset="50%" stopColor="#D4BE9B" />
                <stop offset="100%" stopColor="#B39B75" />
              </linearGradient>
              <linearGradient id="handleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4A3B2C" />
                <stop offset="50%" stopColor="#F5F0E6" />
                <stop offset="100%" stopColor="#36291C" />
              </linearGradient>
            </defs>

            {/* Glowing background warm aura */}
            <circle cx="200" cy="150" r="110" fill="#B39B75" opacity="0.15" filter="blur(20px)" />

            {/* Cricket Bat Blade Silhouette & Grains */}
            <g transform="translate(140, 20) rotate(15 60 130)">
              {/* Handle */}
              <rect x="52" y="0" width="16" height="75" rx="3" fill="url(#handleGrad)" stroke="#1C1612" strokeWidth="2" />
              {/* Handle grip rings */}
              <line x1="52" y1="15" x2="68" y2="15" stroke="#8C7355" strokeWidth="1.5" />
              <line x1="52" y1="30" x2="68" y2="30" stroke="#8C7355" strokeWidth="1.5" />
              <line x1="52" y1="45" x2="68" y2="45" stroke="#8C7355" strokeWidth="1.5" />
              <line x1="52" y1="60" x2="68" y2="60" stroke="#8C7355" strokeWidth="1.5" />
              
              {/* Splice V */}
              <polygon points="52,75 68,75 60,105" fill="#36291C" />

              {/* Blade Body */}
              <path d="M42,95 L78,95 L84,240 C84,255 74,260 60,260 C46,260 36,255 36,240 Z" fill="url(#bladeGrad)" stroke="#3E3228" strokeWidth="2.5" />
              
              {/* Straight Grains on Face */}
              <line x1="46" y1="100" x2="44" y2="250" stroke="#9E825D" strokeWidth="1.2" opacity="0.8" />
              <line x1="52" y1="100" x2="51" y2="255" stroke="#8C6F4B" strokeWidth="1.2" opacity="0.8" />
              <line x1="58" y1="105" x2="58" y2="258" stroke="#7A5F3E" strokeWidth="1.4" opacity="0.8" />
              <line x1="64" y1="100" x2="65" y2="255" stroke="#8C6F4B" strokeWidth="1.2" opacity="0.8" />
              <line x1="72" y1="100" x2="74" y2="250" stroke="#9E825D" strokeWidth="1.2" opacity="0.8" />

              {/* Sweet spot target ring */}
              <circle cx="60" cy="185" r="14" stroke="#78350F" strokeWidth="1.5" strokeDasharray="3 3" fill="none" opacity="0.6" />
            </g>

            {/* Podshaver's Traditional Curved Drawknife */}
            <g transform="translate(60, 140) rotate(-25 100 20)">
              <path d="M20,25 Q100,5 180,25" stroke="#E2D9C8" strokeWidth="4" strokeLinecap="round" />
              <path d="M25,27 Q100,9 175,27" stroke="#9E825D" strokeWidth="2" strokeLinecap="round" />
              {/* Left Handle */}
              <rect x="8" y="15" width="16" height="28" rx="4" fill="#6B4B32" stroke="#1C1612" strokeWidth="1.5" />
              {/* Right Handle */}
              <rect x="176" y="15" width="16" height="28" rx="4" fill="#6B4B32" stroke="#1C1612" strokeWidth="1.5" />
            </g>

            {/* Timber shavings curls */}
            <path d="M90,240 Q110,210 130,235 T150,225" stroke="#EAD8BE" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.85" />
            <path d="M250,230 Q270,205 290,228 T310,220" stroke="#D4BE9B" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.75" />
          </svg>

          {/* Badge indicator in corner */}
          <div className="absolute bottom-3 left-4 text-[11px] font-mono uppercase tracking-widest text-[#D4BE9B]/80 z-20">
            Salix Alba Cleft · Grade 1+ Reserve
          </div>
        </div>
      );

    case 'ball':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#380E0B] via-[#4D1511] to-[#1F0806] ${className} flex items-center justify-center`}>
          <svg className="relative z-10 w-4/5 h-4/5 max-w-[320px]" viewBox="0 0 360 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="ballShine" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#DF382B" />
                <stop offset="45%" stopColor="#9B1D14" />
                <stop offset="85%" stopColor="#5E0F0A" />
                <stop offset="100%" stopColor="#2E0503" />
              </radialGradient>
              <linearGradient id="seamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#E2D9C8" />
                <stop offset="100%" stopColor="#A89F91" />
              </linearGradient>
            </defs>

            {/* Aerodynamic Airflow stream vectors */}
            <path d="M20,90 Q90,80 140,110" stroke="#E2D9C8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
            <path d="M20,140 Q90,135 130,140" stroke="#E2D9C8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
            <path d="M20,190 Q90,200 140,170" stroke="#E2D9C8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />

            {/* Main Red Leather Cricket Ball Sphere */}
            <circle cx="180" cy="140" r="85" fill="url(#ballShine)" stroke="#1F0806" strokeWidth="2" />

            {/* Shiny side highlight curve */}
            <path d="M120,90 Q150,75 190,80 Q150,110 120,90 Z" fill="#FFA59E" opacity="0.3" filter="blur(6px)" />

            {/* Prominent Hand-Stitched Seam */}
            <g transform="rotate(22 180 140)">
              {/* Seam ribbon */}
              <ellipse cx="180" cy="140" rx="14" ry="85" fill="#420B08" stroke="#681510" strokeWidth="2" />
              <line x1="180" y1="55" x2="180" y2="225" stroke="url(#seamGrad)" strokeWidth="3" />
              
              {/* Stitched cross threads (6 rows of cricket ball seam) */}
              {[65, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165, 175, 185, 195, 205, 215].map((y, i) => (
                <g key={i}>
                  <line x1="174" y1={y} x2="186" y2={y + (i % 2 === 0 ? 3 : -3)} stroke="#FFFDF7" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="173" cy={y} r="1" fill="#2E0503" />
                  <circle cx="187" cy={y + (i % 2 === 0 ? 3 : -3)} r="1" fill="#2E0503" />
                </g>
              ))}
            </g>

            {/* Scuffed rough side texture markers */}
            <circle cx="215" cy="120" r="3" fill="#3D0C08" opacity="0.6" />
            <circle cx="230" cy="150" r="2.5" fill="#3D0C08" opacity="0.7" />
            <circle cx="210" cy="170" r="3.5" fill="#3D0C08" opacity="0.6" />

            {/* Late reverse drift arrow */}
            <path d="M280,80 Q290,140 240,210" stroke="#F59E0B" strokeWidth="2.5" fill="none" strokeDasharray="5 3" />
            <polygon points="242,216 235,206 248,206" fill="#F59E0B" />
          </svg>
          <div className="absolute bottom-3 left-4 text-[11px] font-mono uppercase tracking-widest text-[#FF8577]/80 z-20">
            Dukes 5½ oz · Pronounced Hand-Stitched Seam
          </div>
        </div>
      );

    case 'spin':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#12281D] via-[#1A3828] to-[#0D1F16] ${className} flex items-center justify-center`}>
          <svg className="relative z-10 w-4/5 h-4/5 max-w-[340px]" viewBox="0 0 380 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Spinning Orbit Rings */}
            <ellipse cx="190" cy="140" rx="120" ry="45" stroke="#34D399" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" transform="rotate(-15 190 140)" />
            <ellipse cx="190" cy="140" rx="140" ry="60" stroke="#A7F3D0" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" transform="rotate(-15 190 140)" />

            {/* The Pitch Turf & Dusty Footmark */}
            <path d="M40,230 L340,230" stroke="#8C7355" strokeWidth="3" />
            <ellipse cx="230" cy="230" rx="28" ry="6" fill="#4A3B2C" opacity="0.8" />
            <ellipse cx="230" cy="230" rx="14" ry="3" fill="#2E2419" />

            {/* Ball Pitch & Sharp 90-degree break trajectory */}
            <path d="M80,50 Q160,130 230,230" stroke="#F59E0B" strokeWidth="2.5" fill="none" />
            <path d="M230,230 L320,130" stroke="#10B981" strokeWidth="3" fill="none" />
            <polygon points="325,125 314,129 320,138" fill="#10B981" />

            {/* Dust puff at pitch point */}
            <circle cx="230" cy="225" r="10" fill="#E2D9C8" opacity="0.4" filter="blur(4px)" />
            <circle cx="240" cy="220" r="7" fill="#E2D9C8" opacity="0.3" filter="blur(3px)" />

            {/* Rotating Ball Icon */}
            <g transform="translate(140, 95)">
              <circle cx="25" cy="25" r="22" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="2" />
              <path d="M7,25 C7,15 43,15 43,25 C43,35 7,35 7,25 Z" stroke="#FFFFFF" strokeWidth="2" fill="none" />
              {/* Spin vector curved arrow */}
              <path d="M4,10 Q25,-5 42,8" stroke="#34D399" strokeWidth="2" fill="none" />
              <polygon points="45,9 41,2 37,8" fill="#34D399" />
            </g>

            {/* Off Stump target line */}
            <line x1="330" y1="110" x2="330" y2="230" stroke="#F5F0E6" strokeWidth="3.5" />
            <line x1="340" y1="110" x2="340" y2="230" stroke="#F5F0E6" strokeWidth="3.5" />
            <line x1="350" y1="110" x2="350" y2="230" stroke="#F5F0E6" strokeWidth="3.5" />
            {/* Flying Bail */}
            <rect x="325" y="100" width="28" height="4" rx="2" fill="#F59E0B" transform="rotate(-30 330 100)" />
          </svg>
          <div className="absolute bottom-3 left-4 text-[11px] font-mono uppercase tracking-widest text-[#34D399]/90 z-20">
            Wrist Pronation · 3,100 RPM Magnus Dip
          </div>
        </div>
      );

    case 'partnership':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#1A1A24] via-[#252538] to-[#12121A] ${className} flex items-center justify-center`}>
          <svg className="relative z-10 w-4/5 h-4/5 max-w-[340px]" viewBox="0 0 380 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Kolkata Sun & Afternoon Heat Haze */}
            <circle cx="190" cy="90" r="60" fill="#F59E0B" opacity="0.15" filter="blur(15px)" />
            
            {/* Historic Scoreboard Monolith Frame */}
            <rect x="60" y="50" width="260" height="150" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="2" />
            
            {/* Scoreboard Header */}
            <rect x="60" y="50" width="260" height="32" rx="6" fill="#1E293B" />
            <text x="190" y="72" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="sans-serif" letterSpacing="2" fontWeight="600">
              EDEN GARDENS · 4TH DAY UNBROKEN
            </text>

            {/* Laxman Row */}
            <text x="85" y="115" fill="#F8FAFC" fontSize="15" fontFamily="serif" fontWeight="bold">VVS LAXMAN</text>
            <text x="280" y="115" textAnchor="end" fill="#38BDF8" fontSize="20" fontFamily="monospace" fontWeight="bold">281*</text>

            <line x1="80" y1="130" x2="300" y2="130" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />

            {/* Dravid Row */}
            <text x="85" y="160" fill="#F8FAFC" fontSize="15" fontFamily="serif" fontWeight="bold">R DRAVID</text>
            <text x="280" y="160" textAnchor="end" fill="#38BDF8" fontSize="20" fontFamily="monospace" fontWeight="bold">180*</text>

            {/* Footer overs */}
            <rect x="60" y="175" width="260" height="25" fill="#020617" />
            <text x="190" y="192" textAnchor="middle" fill="#F59E0B" fontSize="11" fontFamily="monospace" fontWeight="600">
              PARTNERSHIP: 376 RUNS · 90 OVERS · 0 WKTS
            </text>

            {/* Crossed bats silhouette beneath */}
            <line x1="150" y1="230" x2="230" y2="255" stroke="#E2D9C8" strokeWidth="3" strokeLinecap="round" />
            <line x1="230" y1="230" x2="150" y2="255" stroke="#E2D9C8" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div className="absolute bottom-3 left-4 text-[11px] font-mono uppercase tracking-widest text-[#38BDF8]/90 z-20">
            March 14, 2001 · The Miracle of Kolkata
          </div>
        </div>
      );

    case 't20':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0A0A14] ${className} flex items-center justify-center`}>
          <svg className="relative z-10 w-4/5 h-4/5 max-w-[340px]" viewBox="0 0 380 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Stadium Floodlight Cones */}
            <polygon points="50,20 10,220 180,220" fill="#818CF8" opacity="0.08" />
            <polygon points="330,20 200,220 370,220" fill="#818CF8" opacity="0.08" />
            <circle cx="50" cy="20" r="8" fill="#E0E7FF" filter="blur(2px)" />
            <circle cx="330" cy="20" r="8" fill="#E0E7FF" filter="blur(2px)" />

            {/* Launch Angle Arc (28 degrees) */}
            <path d="M100,210 Q200,70 320,80" stroke="#F43F5E" strokeWidth="3.5" fill="none" />
            
            {/* Velocity ripple circles */}
            <circle cx="100" cy="210" r="15" stroke="#F43F5E" strokeWidth="1" opacity="0.8" />
            <circle cx="100" cy="210" r="28" stroke="#F43F5E" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            
            {/* Batter silhouette swing line */}
            <line x1="80" y1="220" x2="120" y2="180" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
            
            {/* White Kookaburra Ball in Flight */}
            <circle cx="280" cy="75" r="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            {/* Motion trail lines */}
            <line x1="250" y1="85" x2="270" y2="78" stroke="#F43F5E" strokeWidth="2" strokeDasharray="3 2" />

            {/* Radar Telemetry Readout */}
            <g transform="translate(190, 150)">
              <rect x="0" y="0" width="130" height="50" rx="6" fill="#0F172A" stroke="#6366F1" strokeWidth="1.5" opacity="0.9" />
              <text x="12" y="20" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">EXIT VELOCITY</text>
              <text x="12" y="40" fill="#38BDF8" fontSize="18" fontFamily="monospace" fontWeight="bold">142 KM/H</text>
            </g>
          </svg>
          <div className="absolute bottom-3 left-4 text-[11px] font-mono uppercase tracking-widest text-[#F43F5E]/90 z-20">
            Franchise Dynamics · 28° Launch Optimization
          </div>
        </div>
      );

    case 'ground':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#162B1D] via-[#1E3B27] to-[#112015] ${className} flex items-center justify-center`}>
          <svg className="relative z-10 w-4/5 h-4/5 max-w-[340px]" viewBox="0 0 380 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Manicured Outfield Lawn mower stripes */}
            <path d="M0,170 L380,170 L380,280 L0,280 Z" fill="#1A3824" />
            {[0, 40, 80, 120, 160, 200, 240, 280, 320, 360].map((x, i) => (
              <rect key={i} x={x} y="170" width="20" height="110" fill={i % 2 === 0 ? "#14301D" : "#1D4229"} />
            ))}

            {/* Victorian Pavilion Facade */}
            <g transform="translate(70, 70)">
              {/* Main Brick block */}
              <rect x="30" y="30" width="180" height="70" fill="#8B4513" rx="2" stroke="#5C2D0C" strokeWidth="2" />
              {/* Balcony Wrought Iron rail */}
              <rect x="25" y="60" width="190" height="15" fill="#E2D9C8" opacity="0.9" />
              <line x1="25" y1="67" x2="215" y2="67" stroke="#36291C" strokeWidth="1" strokeDasharray="3 3" />

              {/* Roof Pitches & Clock Tower */}
              <polygon points="20,30 120,0 220,30" fill="#5C2D0C" />
              <rect x="105" y="-15" width="30" height="25" fill="#E2D9C8" stroke="#5C2D0C" strokeWidth="1.5" />
              {/* Clock Face */}
              <circle cx="120" cy="-3" r="7" fill="#FFFFFF" stroke="#36291C" strokeWidth="1" />
              <line x1="120" y1="-3" x2="120" y2="-7" stroke="#1C1917" strokeWidth="1" />
              <line x1="120" y1="-3" x2="123" y2="-3" stroke="#1C1917" strokeWidth="1" />

              {/* Weather Vane / Father Time silhouette */}
              <line x1="120" y1="-15" x2="120" y2="-28" stroke="#D97706" strokeWidth="1.5" />
              <polygon points="120,-28 128,-25 120,-22" fill="#D97706" />

              {/* Arched Windows */}
              <rect x="45" y="38" width="16" height="16" rx="8" fill="#FDFBF7" stroke="#36291C" strokeWidth="1" />
              <rect x="80" y="38" width="16" height="16" rx="8" fill="#FDFBF7" stroke="#36291C" strokeWidth="1" />
              <rect x="145" y="38" width="16" height="16" rx="8" fill="#FDFBF7" stroke="#36291C" strokeWidth="1" />
              <rect x="180" y="38" width="16" height="16" rx="8" fill="#FDFBF7" stroke="#36291C" strokeWidth="1" />
            </g>
          </svg>
          <div className="absolute bottom-3 left-4 text-[11px] font-mono uppercase tracking-widest text-[#E2D9C8]/80 z-20">
            St John&apos;s Wood · Lord&apos;s Pavilion 1890
          </div>
        </div>
      );

    case 'coverdrive':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#1C1F2B] via-[#2A3145] to-[#151722] ${className} flex items-center justify-center`}>
          <svg className="relative z-10 w-4/5 h-4/5 max-w-[340px]" viewBox="0 0 380 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Angular Coordinates Overlay */}
            <circle cx="160" cy="120" r="70" stroke="#60A5FA" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            
            {/* The 45 degree Leading Elbow Line */}
            <line x1="160" y1="120" x2="120" y2="80" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
            <text x="90" y="75" fill="#38BDF8" fontSize="12" fontFamily="monospace" fontWeight="bold">45° ELBOW</text>

            {/* Plumb Line from Nose to Impact Point */}
            <line x1="160" y1="60" x2="160" y2="185" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="160" cy="60" r="4" fill="#F59E0B" />
            <circle cx="160" cy="185" r="4" fill="#F59E0B" />
            <text x="170" y="100" fill="#F59E0B" fontSize="10" fontFamily="sans-serif">HEAD OVER BALL</text>

            {/* Bat Blade Angle & Follow Through Arc */}
            <line x1="120" y1="80" x2="160" y2="185" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
            <path d="M160,185 Q220,170 290,140" stroke="#10B981" strokeWidth="3" fill="none" />
            <polygon points="295,138 285,138 288,147" fill="#10B981" />

            {/* Pitch Surface Line */}
            <line x1="40" y1="220" x2="340" y2="220" stroke="#8C7355" strokeWidth="2.5" />
            {/* Front Foot Striding Across */}
            <ellipse cx="140" cy="220" rx="20" ry="6" fill="#F5F0E6" stroke="#4A3B2C" strokeWidth="1.5" />
            {/* Back Foot Anchored */}
            <ellipse cx="80" cy="216" rx="14" ry="5" fill="#F5F0E6" stroke="#4A3B2C" strokeWidth="1" />
          </svg>
          <div className="absolute bottom-3 left-4 text-[11px] font-mono uppercase tracking-widest text-[#38BDF8]/90 z-20">
            Biomechanical Alignment · The High Elbow Rudder
          </div>
        </div>
      );

    case 'ashes':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#2E1A16] via-[#3E231E] to-[#1A0E0B] ${className} flex items-center justify-center`}>
          <svg className="relative z-10 w-4/5 h-4/5 max-w-[340px]" viewBox="0 0 380 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Terracotta Urn Aura */}
            <circle cx="190" cy="130" r="75" fill="#D97706" opacity="0.15" filter="blur(16px)" />

            {/* The Ashes Urn Silhouette */}
            <g transform="translate(145, 45)">
              {/* Urn Lid */}
              <ellipse cx="45" cy="18" rx="22" ry="7" fill="#B45309" stroke="#78350F" strokeWidth="1.5" />
              <circle cx="45" cy="10" r="4" fill="#92400E" />

              {/* Urn Neck */}
              <path d="M30,23 C30,35 60,35 60,23 Z" fill="#92400E" />

              {/* Urn Body */}
              <path d="M22,35 C10,65 15,115 45,130 C75,115 80,65 68,35 Z" fill="#B45309" stroke="#78350F" strokeWidth="2" />
              
              {/* Side Handles */}
              <path d="M22,45 C5,55 5,85 24,95" stroke="#78350F" strokeWidth="2.5" fill="none" />
              <path d="M68,45 C85,55 85,85 66,95" stroke="#78350F" strokeWidth="2.5" fill="none" />

              {/* Base */}
              <rect x="30" y="130" width="30" height="15" fill="#78350F" rx="2" />
              <ellipse cx="45" cy="145" rx="26" ry="6" fill="#451A03" />

              {/* Label Ribbon */}
              <rect x="25" y="70" width="40" height="24" rx="2" fill="#FEF3C7" stroke="#B45309" strokeWidth="1" />
              <line x1="28" y1="78" x2="62" y2="78" stroke="#78350F" strokeWidth="1" />
              <line x1="31" y1="84" x2="59" y2="84" stroke="#78350F" strokeWidth="1" />
            </g>

            {/* Commemorative Wreath Branch Lines */}
            <path d="M80,180 C80,130 110,80 135,70" stroke="#E2D9C8" strokeWidth="1.5" fill="none" strokeDasharray="3 3" opacity="0.6" />
            <path d="M300,180 C300,130 270,80 245,70" stroke="#E2D9C8" strokeWidth="1.5" fill="none" strokeDasharray="3 3" opacity="0.6" />

            <text x="190" y="235" textAnchor="middle" fill="#FEF3C7" fontSize="11" fontFamily="serif" letterSpacing="3">
              EST. AUGUST 1882 · THE OVAL
            </text>
          </svg>
          <div className="absolute bottom-3 left-4 text-[11px] font-mono uppercase tracking-widest text-[#FCD34D]/90 z-20">
            10.5cm Terracotta Urn · The Sacred Cremation
          </div>
        </div>
      );

    case 'keeper':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#1C1B17] via-[#2B2822] to-[#12110E] ${className} flex items-center justify-center`}>
          <svg className="relative z-10 w-4/5 h-4/5 max-w-[340px]" viewBox="0 0 380 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Timber Stumps */}
            <g transform="translate(190, 80)">
              <rect x="0" y="0" width="6" height="110" fill="#E2D9C8" rx="2" stroke="#5C3D2E" strokeWidth="1.5" />
              <rect x="14" y="0" width="6" height="110" fill="#E2D9C8" rx="2" stroke="#5C3D2E" strokeWidth="1.5" />
              <rect x="28" y="0" width="6" height="110" fill="#E2D9C8" rx="2" stroke="#5C3D2E" strokeWidth="1.5" />
              
              {/* Exploding Bails in air */}
              <rect x="-8" y="-18" width="22" height="4" fill="#F59E0B" transform="rotate(-25 0 -18)" />
              <rect x="18" y="-22" width="22" height="4" fill="#F59E0B" transform="rotate(35 25 -22)" />
            </g>

            {/* Wicketkeeper Gloves Webbing */}
            <g transform="translate(130, 95)">
              <ellipse cx="20" cy="40" rx="18" ry="24" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="2" />
              <path d="M22,20 C35,28 35,52 22,60" fill="#E2D9C8" stroke="#1C1917" strokeWidth="1" />
              {/* White finger pads */}
              <rect x="8" y="22" width="5" height="12" rx="2" fill="#FFFFFF" />
              <rect x="15" y="18" width="5" height="15" rx="2" fill="#FFFFFF" />
              <rect x="22" y="18" width="5" height="15" rx="2" fill="#FFFFFF" />
            </g>

            {/* Lightning Stumping Reaction Arc (0.08 sec) */}
            <path d="M110,60 Q150,40 185,75" stroke="#F59E0B" strokeWidth="2.5" fill="none" strokeDasharray="4 3" />
            <polygon points="190,78 180,72 186,67" fill="#F59E0B" />
            <text x="145" y="45" fill="#F59E0B" fontSize="10" fontFamily="monospace" fontWeight="bold">0.08 SEC</text>

            {/* Ground line & dust puff */}
            <line x1="40" y1="210" x2="340" y2="210" stroke="#785B3F" strokeWidth="2.5" />
            <ellipse cx="205" cy="210" rx="30" ry="6" fill="#453221" opacity="0.7" />
          </svg>
          <div className="absolute bottom-3 left-4 text-[11px] font-mono uppercase tracking-widest text-[#FCD34D]/90 z-20">
            Day 5 Subcontinent · Soft Hands & Lightning Reflexes
          </div>
        </div>
      );

    case 'tactics':
    default:
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#132226] via-[#1D353D] to-[#0E171A] ${className} flex items-center justify-center`}>
          <svg className="relative z-10 w-4/5 h-4/5 max-w-[340px]" viewBox="0 0 380 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Field Radial Grid */}
            <circle cx="190" cy="140" r="110" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            <circle cx="190" cy="140" r="75" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
            <circle cx="190" cy="140" r="40" stroke="#38BDF8" strokeWidth="1" opacity="0.5" />
            
            {/* Pitch Rectangle in Center */}
            <rect x="183" y="115" width="14" height="50" fill="#9A7B56" stroke="#E2D9C8" strokeWidth="1" />

            {/* Fielder Coordinate Markers */}
            {/* Slips cordon */}
            <circle cx="215" cy="120" r="4" fill="#F43F5E" />
            <circle cx="225" cy="125" r="4" fill="#F43F5E" />
            <circle cx="235" cy="132" r="4" fill="#F43F5E" />
            {/* Gully */}
            <circle cx="240" cy="150" r="4" fill="#F43F5E" />
            {/* Cover Point */}
            <circle cx="230" cy="185" r="4" fill="#38BDF8" />
            {/* Mid-on / Mid-off */}
            <circle cx="160" cy="100" r="4" fill="#38BDF8" />
            <circle cx="190" cy="90" r="4" fill="#38BDF8" />
            {/* Deep Square leg */}
            <circle cx="110" cy="170" r="4" fill="#10B981" />

            {/* Knuckle Carrom release vector */}
            <path d="M190,165 Q170,140 190,115" stroke="#F59E0B" strokeWidth="2.5" fill="none" />
            <polygon points="190,110 185,120 195,120" fill="#F59E0B" />
          </svg>
          <div className="absolute bottom-3 left-4 text-[11px] font-mono uppercase tracking-widest text-[#38BDF8]/90 z-20">
            Finger Flick Mechanics · Knuckle & Carrom Deception
          </div>
        </div>
      );
  }
};
