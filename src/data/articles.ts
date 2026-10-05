export interface ArticleSection {
  title?: string;
  paragraphs: string[];
  callout?: {
    title: string;
    description: string;
    stats?: { label: string; value: string }[];
  };
}

export interface CricketArticle {
  id: string;
  title: string;
  subtitle: string;
  category: 
    | "Craft & Equipment"
    | "Bowling & Tactics"
    | "Spin Mastery"
    | "Historic Epics"
    | "The Modern Era"
    | "Sacred Grounds"
    | "Batting Technique"
    | "Rivalry & Lore"
    | "Wicketkeeping"
    | "Fielding & Strategy";
  readTime: string;
  publishDate: string;
  issue: string;
  author: {
    name: string;
    role: string;
    publication: string;
    initials: string;
  };
  summary: string;
  pullQuote: string;
  pullQuoteAttribution: string;
  sections: ArticleSection[];
  tags: string[];
  featured?: boolean;
  statBadge?: {
    value: string;
    label: string;
  };
  artworkType: "willow" | "ball" | "ground" | "spin" | "partnership" | "t20" | "coverdrive" | "ashes" | "keeper" | "tactics";
}

export const CRICKET_ARTICLES: CricketArticle[] = [
  {
    id: "alchemy-of-english-willow",
    title: "The Alchemy of English Willow: From Suffolk Marshlands to the Test Match Crease",
    subtitle: "How master podshavers shape seasoned Salix alba caerulea clefts into the resonant instruments of cricketing immortals.",
    category: "Craft & Equipment",
    readTime: "8 min read",
    publishDate: "October 1, 2026",
    issue: "Vol. XII · No. 04",
    featured: true,
    statBadge: {
      value: "8-12",
      label: "Straight Grain Count in Grade 1+ Clefts"
    },
    artworkType: "willow",
    author: {
      name: "Rupert Penhaligon",
      role: "Curator of Equipment & Craft",
      publication: "Suffolk Cricket Guild",
      initials: "RP"
    },
    summary: "Deep in the river valleys of Essex and Suffolk grows Salix alba caerulea—a peculiar hybrid willow tree whose sapwood yields the feather-light, shock-absorbing wood from which every great cricket bat in history was born.",
    pullQuote: "A master batmaker does not force the willow into shape; he feels the grain run through the palm of his hand and obeys where the wood wishes to rebound.",
    pullQuoteAttribution: "Julian Millichamp, Legendary Batmaker",
    tags: ["Willow", "Equipment", "Craftsmanship", "Batmaking", "English Heritage"],
    sections: [
      {
        title: "The Solitary Hybrid of the River Stour",
        paragraphs: [
          "For more than two centuries, the sweetest sound in sport—the sharp, dry, champagne-cork *clonk* of leather meeting wood—has owed its existence to a single botanical hybrid: Salix alba var. caerulea. Grown almost exclusively along the damp river meadows of Suffolk, Essex, and Hampshire, these cricket bat willows are felled only after fifteen to twenty years of steady, unhurried growth.",
          "Unlike standard white willow, the caerulea variety combines an astonishingly low specific gravity with fibrous cell resilience. It absorbs the shock of a five-and-a-half-ounce missile arriving at ninety miles per hour, compressing microscopically upon impact and releasing the stored kinetic energy back through the ball with supreme elasticity.",
          "When the timber arrives at the yard, it is cleft by axe along its natural grain rather than sawn. Sawn wood severs the continuous capillary fibers; cleft willow preserves them intact, ensuring the blade will not fracture down its central spine under the battering of modern fast bowling."
        ],
        callout: {
          title: "The 5-Tier Willow Grading Scale",
          description: "Inspectors evaluate every cleft by grain straightness, heartwood percentage, and fiber density before pressing.",
          stats: [
            { label: "Grade 1+ (Pro Reserve)", value: "8-12 straight grains, zero blemish" },
            { label: "Grade 1 (Test Standard)", value: "6-8 straight grains, rare speck" },
            { label: "Grade 2 (County / Shield)", value: "5-7 grains, slight redwood tinge" },
            { label: "Grade 3 (Club Match)", value: "4-6 grains, natural knot markings" }
          ]
        }
      },
      {
        title: "The Cold Steel of the Drawknife and the Mechanical Press",
        paragraphs: [
          "In the workshop, the cleft meets the drawknife. The podshaver stands over his bench, peeling paper-thin ribbons of fragrant timber with rhythmic strokes. No two clefts possess the exact same moisture balance or weight distribution; thus, computer-numerical milling machines will never replicate the intuitive touch of an artisan whose thumb can feel the rebound density of the sweet spot.",
          "Before the blade can face a bowler, it must undergo mechanical pressing. Under six hundred to two thousand pounds per square inch of hydraulic pressure, the porous cell walls are consolidated just enough to prevent the surface from denting, yet left supple enough to deliver explosive ping.",
          "Finally, the handle—twelve pieces of sarawak cane spliced together with thin strips of vulcanized Indian rubber—is wedged into the blade with fish glue. This composite handle behaves like a miniature leaf-spring suspension system, dampening vibration before the batter's hands can register the sting."
        ]
      },
      {
        title: "The Modern Conundrum: Massive Edges vs Featherweight Pick-Up",
        paragraphs: [
          "Thirty years ago, Sir Donald Bradman scored three hundred runs in a single day wielding a blade weighing barely two pounds two ounces, with edges scarcely thicker than ten millimeters. Today, elite players like Rohit Sharma and Ben Stokes walk out with edges exceeding forty millimeters and spine heights reaching sixty-five millimeters, yet balanced to feel no heavier than two pounds nine.",
          "This aerodynamic marvel is achieved through convex spine profiling and strategic scalloping. The modern master batmaker removes timber from the high shoulders while concentrating mass directly in the middle-to-low hitting zone.",
          "The result is an instrument that turns defensive edges into boundaries and leaves bowlers looking helplessly at the boundary ropes. Yet the fundamental truth remains unchanged: treat the willow with cold-pressed linseed oil, knock it in with three thousand gentle mallet taps, and it will serve you for a decade of memorable innings."
        ]
      }
    ]
  },
  {
    id: "reverse-swing-and-whispering-seam",
    title: "Reverse Swing & The Whispering Seam: The Dark Physics of Bowling's Most Lethal Art",
    subtitle: "From Sarfraz Nawaz's dry Gaddafi Stadium experiments to Wasim and Waqar's banana Yorkers: how aerodynamic chaos dismantled conventional wisdom.",
    category: "Bowling & Tactics",
    readTime: "10 min read",
    publishDate: "September 24, 2026",
    issue: "Vol. XII · No. 03",
    statBadge: {
      value: "80+ mph",
      label: "Critical Velocity for Turbulent Boundary Inversion"
    },
    artworkType: "ball",
    author: {
      name: "Arjun Ramanathan",
      role: "Aerodynamics & Fast Bowling Analyst",
      publication: "The High Performance Journal",
      initials: "AR"
    },
    summary: "For eighty overs, a bowler relies on the shiny side to cut through air while the rough seam creates conventional drift. But once the ball ages and the air turns warm, the laws of aerodynamics flip on their head.",
    pullQuote: "Conventional swing is polite debate; reverse swing is an assassination in broad daylight.",
    pullQuoteAttribution: "Imran Khan, Lahore 1982",
    tags: ["Reverse Swing", "Fast Bowling", "Aerodynamics", "Wasim Akram", "Subcontinent"],
    sections: [
      {
        title: "The Reversal of the Pressure Differential",
        paragraphs: [
          "When a new cricket ball departs the seam bowler's fingers, conventional swing is governed by boundary layer separation. The seam is cocked at twenty degrees toward fine leg or slips. Air flowing past the smooth hemisphere remains laminar, separating early, while air colliding with the raised seam becomes turbulent, sticking longer to that side. The resultant lateral pressure differential pulls the ball toward the rough side.",
          "However, when the ball reaches forty overs of wear on abrasive subcontinent outfields, a counter-intuitive phenomenon occurs. The previously 'rough' side becomes scarred with microscopic craters, gouges, and abrasions, while the fielding side buffs the opposing hemisphere with sweat until it gleams like patent leather.",
          "At speeds exceeding eighty-two miles per hour, the scarred side creates an extremely thick, turbulent boundary layer that separates far earlier than expected. In contrast, the micro-laminar flow over the shiny side remains adhered deeper around the contour. Suddenly, the net pressure pushes the projectile *toward the shiny side*—defying the batter's muscle memory."
        ],
        callout: {
          title: "Conventional vs Reverse Swing Matrix",
          description: "How ball age, release speed, and seam orientation dictate flight deviation.",
          stats: [
            { label: "New Ball (0-20 overs)", value: "Swings toward the rough side" },
            { label: "Critical Speed", value: "Conventional: 65-80 mph | Reverse: 82-95 mph" },
            { label: "Old Ball (45+ overs)", value: "Swings late toward the shiny side" },
            { label: "Deviation Timing", value: "Occurs within last 4 meters of trajectory" }
          ]
        }
      },
      {
        title: "The Pioneers of Lahore and the Searing 1990s",
        paragraphs: [
          "The origins trace back to Sarfraz Nawaz at Lahore in 1979, who observed how old balls behaved on sun-baked clay pitches. He shared the secret with Imran Khan, who codified the ball-maintenance rituals that transformed Pakistan's pace battery into the most feared force on earth.",
          "Then arrived Wasim Akram and Waqar Younis in the early 1990s. With their whippy wrist actions and slingy round-arm trajectory, they delivered reverse swing at blistering speeds. To a batsman on a fifth-day pitch, a Waqar inswinging yorker was not merely challenging; it was physiologically impossible to counter.",
          "The ball would appear destined for fourth stump, only to take an erratic, late dive into the base of leg stump after the batter's front foot had already committed. By the time England's Simon Jones and Andrew Flintoff mastered the discipline during the magical 2005 Ashes, reverse swing had evolved from an Eastern curiosity into cricket's apex weapon."
        ]
      },
      {
        title: "The Art of Legal Maintenance in the Post-Sandpaper Era",
        paragraphs: [
          "Following the seismic scandals in Cape Town, the stewardship of the ball came under microscopic surveillance. Bowlers could no longer use mint lozenges, bottle caps, or foreign grit to accelerate wear.",
          "Modern bowling attacks like Jasprit Bumrah's India and Pat Cummins' Australia have returned to pure physical craft: dry sweat applied rigorously to one half, while preserving the natural leather grain on the other through cross-seam throws from the deep outfield.",
          "When executed with pristine integrity, reverse swing remains cricket's most poetic spectacle—a testament to how grit, sweat, and aerodynamic physics can unlock fifth-day stalemates on the flattest pitches known to man."
        ]
      }
    ]
  },
  {
    id: "lost-art-of-leg-spin",
    title: "The Hypnotic Geometry of Leg-Spin: From Clarrie Grimmett to Shane Warne's Golden Era",
    subtitle: "Why the wrist-spinner's trade is the most psychologically punishing and aesthetically sublime discipline in world sport.",
    category: "Spin Mastery",
    readTime: "11 min read",
    publishDate: "September 18, 2026",
    issue: "Vol. XII · No. 02",
    statBadge: {
      value: "3,100 rpm",
      label: "Average Revolutions on Warne's Leg Break"
    },
    artworkType: "spin",
    author: {
      name: "Clara Sterling",
      role: "Senior Features Editor",
      publication: "The Cricketer's Quarterly",
      initials: "CS"
    },
    summary: "No other cricketer lives on such a knife edge between humiliation and transcendence as the wrist-spinner. We examine the biomechanics of the flipper, the psychic toll of full tosses, and the legacy of the King of Spin.",
    pullQuote: "To bowl leg-spin is to sign a contract with catastrophe in exchange for glimpses of pure magic.",
    pullQuoteAttribution: "Richie Benaud, 1978",
    tags: ["Leg Spin", "Shane Warne", "Spin Bowling", "Biomechanics", "Cricket History"],
    sections: [
      {
        title: "The Anatomy of Wrist Pronation",
        paragraphs: [
          "Off-spin is an honest, geometric trade: the fingers roll over the seam, relying on drift and repeatable angles. Leg-spin, however, is an unnatural contortion. To impart three thousand revolutions per minute from right to left requires the third finger to cock behind the seam while the wrist uncoils in a violent, anti-clockwise whip at the instant of release.",
          "If the bowler misses their release point by three millimeters, the delivery turns into a chest-high full toss or a rank long hop destined for the mid-wicket boundary. There is no middle ground for the leg-spinner; you are either a sorcerer or an embarrassment.",
          "Yet when the axis of rotation tilts fifty degrees forward, the Magnus effect drags the red ball downwards faster than gravity alone would dictate. The batsman perceives the ball to be pitched at the driving length, steps forward with certainty, and is frozen as the ball dips, grips the dry turf, and explodes across his off-stump."
        ],
        callout: {
          title: "The Leg-Spinner's Arsenal of Deception",
          description: "The six foundational deliveries mastered by the immortals:",
          stats: [
            { label: "The Leg Break", value: "Turns sharp from leg to off; supreme drift" },
            { label: "The Googly (Bosie)", value: "Released out the back of the hand; turns into RHB" },
            { label: "The Topspinner", value: "Magnus downforce; bites and bounds high" },
            { label: "The Flipper (Grimmett)", value: "Squeezed between thumb and fingers; skids low" }
          ]
        }
      },
      {
        title: "June 4, 1993: The Ball of the Century",
        paragraphs: [
          "At Old Trafford during the 1993 Ashes, Shane Warne ambled in off eight casual paces for his maiden delivery on English soil. Mike Gatting, arguably the premier player of spin in Britain, took his guard with placid confidence.",
          "Warne flicked his wrist. The ball drifted through the Manchester drizzle like an errant leaf, pitching a foot outside Gatting's leg stump. Gatting thrust his left pad forward, perfectly content to let the ball die in the rough.",
          "What happened next rewrote cricket history. The ball gripped, hissed, and turned ninety degrees across Gatting's defensive blade, clipping the absolute peak of the off-bail. Gatting stood stock-still for ten seconds, peering down at the woodwork in bewildered disbelief before walking off. In a solitary fraction of a second, Warne had resurrected an endangered art form."
        ]
      },
      {
        title: "The Modern Leg-Spinner in the White-Ball Cauldron",
        paragraphs: [
          "In the age of twenty-over spectacles, many predicted wrist-spin would be pulverized out of existence. Instead, the opposite occurred. In an era where finger spinners are routinely milked for easy singles, leg-spinners like Rashid Khan, Adam Zampa, and Kuldeep Yadav have become the primary wicket-takers in international cricket.",
          "Their weapon is not merely big turn, but speed through the air. Rashid bowls his googlies at ninety-five kilometers per hour—leaving batters zero reaction time to read the seam from the pitch.",
          "Even as boundaries shrink and bats balloon, the wrist-spinner remains the romantic center of the game: the smiling gambler willing to be hit for six if it buys them one more delivery to weave their web."
        ]
      }
    ]
  },
  {
    id: "eden-gardens-2001-partnership",
    title: "Eden Gardens 2001: The Sweltering Kolkata Miracle that Defied Infinity",
    subtitle: "Follow-on enforced, 274 runs adrift, facing Australia's 16-match juggernaut: how VVS Laxman and Rahul Dravid batted an entire day without parting.",
    category: "Historic Epics",
    readTime: "12 min read",
    publishDate: "September 12, 2026",
    issue: "Vol. XII · No. 01",
    statBadge: {
      value: "335 Runs",
      label: "Day 4 Unbroken Partnership (90 Overs)"
    },
    artworkType: "partnership",
    author: {
      name: "Vikram Sengupta",
      role: "Historian of Indian Cricket",
      publication: "Calcutta Cricket Society",
      initials: "VS"
    },
    summary: "Steve Waugh called it the 'Final Frontier'. Australia arrived in India on a record-shattering 16-match Test winning streak. What unfolded across five days at Eden Gardens turned the sport on its axis forever.",
    pullQuote: "If you want to know what courage looks like, look at Dravid's helmet grill soaked in sweat at tea on Day 4, pointing his bat toward the Australian dressing room.",
    pullQuoteAttribution: "Harsha Bhogle, Eden Gardens 2001",
    tags: ["Eden Gardens", "VVS Laxman", "Rahul Dravid", "Steve Waugh", "Test Classics"],
    sections: [
      {
        title: "The Follow-On and the Despair of Day 3",
        paragraphs: [
          "By the morning of Day 3, the Test match appeared to be following the prescribed Australian script. Steve Waugh's invincible side had posted 445, powered by Matthew Hayden's sweeping masterclass, before skittling India for a feeble 171. Sourav Ganguly was made to follow on, 274 runs behind.",
          "Eden Gardens sat under a thick, stifling haze of March humidity. The crowd, normally eighty thousand voices of deafening roar, was reduced to a numbed murmur. No team had won a Test match after following on since Ian Botham's Ashes heist at Headingley in 1981.",
          "When Sachin Tendulkar was trapped leg-before by Jason Gillespie late on Day 3 for just ten runs, the obituary of Indian cricket seemed written. But at number three walked VVS Laxman, whose sore back had forced him to drop down the order in the first innings, and joining him at number six was Rahul Dravid, fighting through cramps and public scrutiny."
        ],
        callout: {
          title: "Day 4 by the Numbers: The Impossibility",
          description: "The complete statistical breakdown of the historic fourth day in Kolkata:",
          stats: [
            { label: "Overs Bowled", value: "90 full overs" },
            { label: "Wickets Lost", value: "Zero (0)" },
            { label: "Runs Scored", value: "335 runs in a single day" },
            { label: "Laxman Final", value: "281 off 452 balls (44 boundaries)" }
          ]
        }
      },
      {
        title: "The Day Without a Wicket: 90 Overs of Transcendent Grace",
        paragraphs: [
          "What followed on March 14, 2001, is etched into the collective folklore of world sport. For six continuous hours under a relentless sun, Steve Waugh threw everything in Australia's formidable arsenal at the pair: Glenn McGrath's metronomic off-stump probing, Gillespie's reverse swinging bouncers, and Shane Warne's leg-spin firing into the footmarks outside leg stump.",
          "Laxman answered with batting from another astral plane. He repeatedly walked across his stumps to meet Warne's sharpest spinning deliveries, flicking them against the turn through mid-wicket with rubberized Hyderabadi wrists. Any ball pitched short was punched with imperious ease through extra cover.",
          "At the other end stood Dravid—'The Wall' incarnate. Relentless, immovable, and fiercely focused. Every forward defense was celebrated by sixty thousand roaring fans as though it were a six. When Dravid reached his century, he raised his bat and pointed it toward the media press box in an uncharacteristically fierce assertion of his worth."
        ]
      },
      {
        title: "The Dominoes Fall: Harbhajan's Day 5 Climax",
        paragraphs: [
          "Having batted through the entire fourth day without losing a single wicket, India declared on Day 5, setting Australia a target of 384 in sixty-eight overs. What started as an improbable survival transformed into a carnivorous pursuit.",
          "A nineteen-year-old Harbhajan Singh, who had already claimed India's first-ever Test hat-trick on Day 1, tore through the Australian middle order. When Glenn McGrath was trapped plumb in front with just minutes left on the clock, Eden Gardens erupted into an earthquake of noise.",
          "Australia's golden run was severed. More importantly, Indian cricket found an unshakeable belief that would carry them to the summit of the Test rankings over the subsequent two decades."
        ]
      }
    ]
  },
  {
    id: "death-of-90-over-day-rise-of-blitz",
    title: "The Death of the 90-Over Day and the Biomechanics of the Franchise Blitz",
    subtitle: "How 20-over cricket dismantled century-old rhythms, invented new bat speeds, and reconstructed the modern athlete.",
    category: "The Modern Era",
    readTime: "9 min read",
    publishDate: "September 6, 2026",
    issue: "Vol. XI · No. 06",
    statBadge: {
      value: "142 km/h",
      label: "Average T20 Bat-Speed in Modern Range Hitting"
    },
    artworkType: "t20",
    author: {
      name: "Marcus Holloway",
      role: "High Performance Director & Biomechanist",
      publication: "Cricket Tech Institute",
      initials: "MH"
    },
    summary: "Cricket was conceived as an agrarian pastoral pastime governed by daylight, tea breaks, and patient attrition. T20 reduced that temporal canvas into a three-hour pressure-cooker of kinetic maximization.",
    pullQuote: "We used to coach batsmen to let the ball come to them; now we teach them to treat every delivery as an explosion waiting for an ignition trigger.",
    pullQuoteAttribution: "Julian Wood, Power Hitting Specialist",
    tags: ["T20", "Franchise Cricket", "Biomechanics", "Power Hitting", "Analytics"],
    sections: [
      {
        title: "From Defense to Launch Angles: The Baseball Colonization",
        paragraphs: [
          "For a century and a half, cricket batting coaching was dogmatic: high elbow, head over the ball, play along the ground, avoid the air. A batter who lifted his head or dragged his back leg was deemed uncouth and technically deficient.",
          "The advent of the Indian Premier League and global franchise circuits dismantled this orthodoxy overnight. Power-hitting coaches like Julian Wood borrowed kinetic sequence drills from Major League Baseball, introducing concepts of ground-reaction force, hip-to-shoulder separation, and launch angles.",
          "Today's power hitters do not merely block; their front foot clears itself to open the hip axis, allowing the bat head to swing through an arc exceeding one hundred and forty kilometers per hour. The scoop, the ramp, the switch-hit, and the helicopter shot are no longer gimmicks—they are mathematically optimized responses to field restrictions."
        ],
        callout: {
          title: "The Shift in Kinetic Variables",
          description: "Comparing traditional Test match fundamentals with T20 franchise protocols:",
          stats: [
            { label: "Impact Target", value: "Test: Grounded front-v | T20: 25°-35° Launch Arc" },
            { label: "Stance Width", value: "Test: Shoulder width | T20: Wide base, lowered CoG" },
            { label: "Decision Window", value: "Test: 450ms | T20: Sub-320ms commit" },
            { label: "Match Ball Turnover", value: "Test: 80 overs | T20: Two white balls, 10 overs each" }
          ]
        }
      },
      {
        title: "The Bowling Renaissance: Slower Ball Bouncers and Knuckleballs",
        paragraphs: [
          "Far from extinguishing bowlers, the franchise blitz spurred an unprecedented tactical renaissance. Bowlers who relied purely on swing or seam were quickly exposed; survival required a bag of disguised deceptions.",
          "The modern death bowler executes the back-of-the-hand slower ball, the knuckleball, the wide yorker on the tramline, and the sharp bouncer aimed at the batter's armpit. Bowlers like Jasprit Bumrah and Lasith Malinga transformed yorkers into sniper bullets released from unorthodox, low-sling trajectory points that rob batters of visual pick-up time."
        ]
      },
      {
        title: "The Soul of the Game: Coexistence or Cannibalization?",
        paragraphs: [
          "As private equity capital flows into multi-club ownership models across Mumbai, London, Texas, and Johannesburg, the traditional five-day Test match finds itself defending its calendar territory.",
          "Yet the greatest modern players—from Virat Kohli and Steve Smith to Kane Williamson—continue to insist that Test cricket remains the apex test of human spirit. The challenge of our era is not choosing between the two, but celebrating how the visceral energy of twenty overs feeds back into the enduring cathedral of the five-day game."
        ]
      }
    ]
  },
  {
    id: "lords-long-room-and-cathedrals",
    title: "Inside the Lord's Long Room: The Architectural Reverence of St John's Wood",
    subtitle: "Oil paintings of WG Grace, Victorian wrought iron, and the most hallowed ninety seconds in world sports.",
    category: "Sacred Grounds",
    readTime: "7 min read",
    publishDate: "August 30, 2026",
    issue: "Vol. XI · No. 05",
    statBadge: {
      value: "1890",
      label: "Year the Current Lord's Pavilion Opened"
    },
    artworkType: "ground",
    author: {
      name: "Rupert Penhaligon",
      role: "Curator of Equipment & Craft",
      publication: "Suffolk Cricket Guild",
      initials: "RP"
    },
    summary: "There is no walk in sport quite like descending the narrow wooden steps of the Lord's Pavilion, navigating through the packed rows of Marylebone Cricket Club members, and stepping onto the hallowed turf.",
    pullQuote: "Walking through the Long Room is like walking through a living museum where the portraits on the wall seem to judge your backlift before you face your first ball.",
    pullQuoteAttribution: "Sir Viv Richards",
    tags: ["Lords", "Pavilion", "MCC", "Cricket Heritage", "London"],
    sections: [
      {
        title: "The Corridor of History",
        paragraphs: [
          "Nestled in the leafy quiet of St John's Wood in North London, the Lord's cricket ground has stood as the spiritual headquarters of the sport since Thomas Lord rolled his first pitch here in 1814.",
          "At the center of its majesty sits the Grade II* listed Victorian Pavilion, completed in 1890 to the designs of architect Thomas Verity. Within its heart lies the Long Room—a temple of dark polished oak, brass fittings, and walls lined with the finest collection of cricket art in the world.",
          "Here, oil portraits of William Gilbert Grace, Lord Harris, and Prince Ranjitsinhji gaze down with austere authority. On a Test match morning, several hundred MCC members in egg-and-bacon striped ties gather shoulder to shoulder to form an intimate guard of honour for departing batters."
        ]
      },
      {
        title: "The 8-Foot Slope and the Ghost of Father Time",
        paragraphs: [
          "Lord's is not merely historic; it is idiosyncratic. Across the width of the playing surface runs a notorious eight-foot slope (2.5 meters from north to south). For visiting bowlers, this topographic anomaly can prove disorienting: bowling from the Pavilion End drives the ball in with the slope, while bowling from the Nursery End drags it relentlessly down the hill toward the batsman's pads.",
          "High atop the weather vane behind the Mound Stand sits 'Father Time'—a wrought-iron figure representing the mythic grim reaper, bending over the wickets with a scythe, reminding players and spectators alike that while empires rise and crumble, the timeless contest between bat and ball continues unabated."
        ]
      }
    ]
  },
  {
    id: "anatomy-of-the-cover-drive",
    title: "The Anatomy of a Flawless Cover Drive: Where Biomechanics Meets Ballet",
    subtitle: "Dissecting the head position, high leading elbow, and weight transfer behind cricket's most photogenic stroke.",
    category: "Batting Technique",
    readTime: "8 min read",
    publishDate: "August 21, 2026",
    issue: "Vol. XI · No. 04",
    statBadge: {
      value: "45°",
      label: "Optimal Leading Elbow Elevation at Impact"
    },
    artworkType: "coverdrive",
    author: {
      name: "Marcus Holloway",
      role: "High Performance Director & Biomechanist",
      publication: "Cricket Tech Institute",
      initials: "MH"
    },
    summary: "No stroke in world sport unites violent kinetic transfer and effortless aesthetic grace quite like the cover drive. From David Gower's lazy velvet to Virat Kohli's snapping crunch.",
    pullQuote: "You don't hit a cover drive with your hands; you caress it with your nose directly over the seam.",
    pullQuoteAttribution: "David Gower, Lord's 1985",
    tags: ["Cover Drive", "Virat Kohli", "Batting Technique", "Kumar Sangakkara", "Masterclass"],
    sections: [
      {
        title: "The Trinity of Balance: Head, Foot, and Elbow",
        paragraphs: [
          "The cover drive is cricket's high-wire act. Play it a fraction too early and the outside edge flies to third slip; play it with your head back and the ball loops gently to point. It requires an exact synchronization of three independent anatomical anchors.",
          "First is the head. At the point of impact, the batter's eyes must be positioned directly over the bouncing ball. If the head tilts, the shoulders open prematurely, altering the swing plane. Second is the front foot—not stepped flatly across, but planted heel-first beside the line of the delivery, with the toe pointing directly toward the extra-cover boundary.",
          "Third is the exalted high elbow. The leading arm (left arm for right-handers) must act as the primary steering rudder, elevated at forty-five degrees, while the bottom hand remains feather-light on the rubber grip. It is the top hand that controls the trajectory along the turf; the bottom hand provides only late throttle."
        ],
        callout: {
          title: "The Three Archetypes of the Drive",
          description: "How three legendary masters executed the shot with contrasting stylistic signatures:",
          stats: [
            { label: "Virat Kohli", value: "Explosive wrist snap, bottom-hand crunch into turf" },
            { label: "Kumar Sangakkara", value: "High elbow poise, regal stillness, immaculate timing" },
            { label: "David Gower", value: "Featherlight lazy extension, nonchalant follow-through" }
          ]
        }
      },
      {
        title: "The Sensory Reward of the Sweet Spot",
        paragraphs: [
          "When all parameters align—when the red ball meets the dead center of seasoned English willow on the up—there is no sensation of impact. No vibration travels up the forearms. The ball simply accelerates across the green grass as if drawn by a magnet toward the boundary fence.",
          "In that single stroke, cricket justifies its hundred-year literature. It is kinetic violence disguised as high art."
        ]
      }
    ]
  },
  {
    id: "ashes-144-years-of-urns-and-animosity",
    title: "The Ashes: 144 Years of Urns, Animosity, and Timeless Theatre",
    subtitle: "How an obituary for English cricket in the Sporting Times birthed sport's most fiercely contested bilateral civil war.",
    category: "Rivalry & Lore",
    readTime: "10 min read",
    publishDate: "August 14, 2026",
    issue: "Vol. XI · No. 03",
    statBadge: {
      value: "10.5 cm",
      label: "Height of the Fragile Terracotta Ashes Urn"
    },
    artworkType: "ashes",
    author: {
      name: "Clara Sterling",
      role: "Senior Features Editor",
      publication: "The Cricketer's Quarterly",
      initials: "CS"
    },
    summary: "The prize is a four-inch terracotta urn containing the charred remains of a wooden cricket bail, permanently housed in the Lord's museum. Yet grown men weep and fracture bones in its pursuit.",
    pullQuote: "Bodyline, Botham in '81, Warne's ball of the century, Edgbaston 2005, Stokes at Headingley 2019: The Ashes is not a tournament; it is our national mythology.",
    pullQuoteAttribution: "Gideon Haigh, Renowned Cricket Author",
    tags: ["The Ashes", "England vs Australia", "Botham", "Ben Stokes", "Bodyline"],
    sections: [
      {
        title: "The Death Notice at The Oval: 1882",
        paragraphs: [
          "On August 29, 1882, the unthinkable occurred on the sodden turf of The Oval in South London. An Australian touring side, captained by WL Murdoch, defeated England on English soil for the very first time, bowling the hosts out for just seventy-seven runs as Fred 'The Demon' Spofforth claimed fourteen wickets.",
          "The British sporting public was seized by collective grief. Three days later, *The Sporting Times* printed a satirical mock obituary bordered in thick mourning black:",
          "\"In Affectionate Remembrance of English Cricket, which died at the Oval... The body will be cremated and the ashes taken to Australia.\"",
          "A few weeks later, the Hon. Ivo Bligh captained an English team to Australia with a solemn vow: to recover those mythical ashes. At Rupertswood estate in Sunbury, Victoria, Florence Morphy and friends presented Bligh with a tiny terracotta perfume jar containing the ashes of a cricket bail. The myth was christened."
        ]
      },
      {
        title: "The Crucible of Edgbaston 2005 and Headingley 2019",
        paragraphs: [
          "What makes the Ashes transcendent is its unmatched capacity for nerve-shredding theatrical climaxes.",
          "In August 2005 at Edgbaston, after four days of ferocious combat, Australia's tail-enders Brett Lee and Michael Kasprowicz dragged their side to within two runs of an unthinkable victory. When Steve Harmison forced Kasprowicz to gloat a catch behind, England won by two runs—the narrowest margin in Ashes history.",
          "Andrew Flintoff, instead of wildly joining his teammates in manic jubilation, knelt down beside a weeping Brett Lee, placing a hand on his shoulder in a moment that encapsulated the fierce sportsmanship underpinning this rivalry.",
          "Fourteen years later at Headingley in 2019, Ben Stokes walked out with England needing seventy-three runs with only number-eleven Jack Leach for company. Feeding off potato crisps and sheer willpower, Stokes reverse-swept Nathan Lyon, smashed Pat Cummins onto the rugby ground roof, and secured an immortal one-wicket victory."
        ]
      }
    ]
  },
  {
    id: "the-unsung-guardians-subcontinent-keeping",
    title: "The Unsung Guardians: Test Match Wicketkeeping on Day 5 Subcontinent Dustbowls",
    subtitle: "Crouching through 150 overs in 40°C heat, reading spin off the rough, and the razor-thin margin between bye and stumping.",
    category: "Wicketkeeping",
    readTime: "8 min read",
    publishDate: "August 5, 2026",
    issue: "Vol. XI · No. 02",
    statBadge: {
      value: "600+",
      label: "Deep Squat Repetitions Per Test Match Day"
    },
    artworkType: "keeper",
    author: {
      name: "Vikram Sengupta",
      role: "Historian of Indian Cricket",
      publication: "Calcutta Cricket Society",
      initials: "VS"
    },
    summary: "The wicketkeeper is the only player on the field who cannot afford a single second of mental drift across five days. We go inside the gloves of the masters who crouch amid the dust and heat.",
    pullQuote: "A batsman makes one mistake and his innings is over; a wicketkeeper makes one mistake and he has twenty thousand people reminding him for five days.",
    pullQuoteAttribution: "Wriddhiman Saha, Master Gloveman",
    tags: ["Wicketkeeping", "MS Dhoni", "Subcontinent", "Dustbowl", "Mastery"],
    sections: [
      {
        title: "The Crucible of the Turning Ball",
        paragraphs: [
          "Standing back to eighty-five-mile-an-hour pace bowling is a matter of reflexes and athletic reach. Standing up to world-class spin on a crumbling, fractured fifth-day wicket in Ahmedabad, Galle, or Rawalpindi is an exercise in pure psychic endurance.",
          "The pitch is cracked like dried mosaic tiles. One ball bites the edge of a fissure and bounds toward the keeper's chin; the very next skids along the turf at ankle height. The wicketkeeper must stay down in their crouch until the ball has pitched, resisting the instinct to rise with the batter's backlift.",
          "Soft hands are the golden doctrine. If the keeper's fingers are tense upon receiving the ball, the leather rebounds off the palms like a billiard ball. The hands must give way with the trajectory, creating a cushioned pocket in the split second before whipping the bails off."
        ],
        callout: {
          title: "The Physical Toll of Keeping",
          description: "Biometric load measurements recorded during a grueling five-day Test in Chennai:",
          stats: [
            { label: "Squat Cycles", value: "540 to 620 squats per day" },
            { label: "Reaction Window", value: "0.18 seconds on inside edges" },
            { label: "Core Body Temp", value: "Sustained 38.2°C inside full pads" },
            { label: "Distance Covered", value: "7.5 km in lateral shuttle movements" }
          ]
        }
      },
      {
        title: "Dhoni's No-Look Lightning Stumping",
        paragraphs: [
          "No discussion of subcontinent wicketkeeping is complete without analyzing MS Dhoni's radical re-engineering of the stumping motion. Traditional coaching dictated taking the ball back with the hands, then sweeping forward to break the wickets.",
          "Dhoni eliminated the backward recoil entirely. He positioned his gloves mere inches behind the stumps, using the ball's own momentum to guide it into the bails with a sharp flick of the wrists in under 0.08 seconds—faster than the blink of a human eye.",
          "In doing so, Dhoni turned a defensive recovery position into an offensive ambush, trapping wandering batters before their back foot could register the drag."
        ]
      }
    ]
  },
  {
    id: "mystery-spin-carrom-and-digitized-deception",
    title: "Mystery Spin, Carrom Balls, and the Digitization of Deception",
    subtitle: "From Jack Iverson's Australian bush grip to Ajantha Mendis and modern finger-spinners flicking with knuckles.",
    category: "Spin Mastery",
    readTime: "9 min read",
    publishDate: "July 29, 2026",
    issue: "Vol. XI · No. 01",
    statBadge: {
      value: "0.08 sec",
      label: "Time Batter Has to Decipher the Knuckle Release"
    },
    artworkType: "tactics",
    author: {
      name: "Arjun Ramanathan",
      role: "Aerodynamics & Fast Bowling Analyst",
      publication: "The High Performance Journal",
      initials: "AR"
    },
    summary: "How an eccentric Australian blinder, a Sri Lankan army officer, and high-definition video analysis gave birth to bowling's most mysterious weapon: the carrom ball.",
    pullQuote: "You don't play a mystery spinner with your eyes; you play him by the fear in your throat.",
    pullQuoteAttribution: "Kumar Sangakkara on Ajantha Mendis",
    tags: ["Mystery Spin", "Carrom Ball", "Ajantha Mendis", "Sunil Narine", "Tactics"],
    sections: [
      {
        title: "The Rediscovery of the Flick",
        paragraphs: [
          "In 1950, a blind-striker and eccentric Melbourne club cricketer named Jack Iverson stepped into Test cricket with an alien grip: the ball pinched between his bent middle finger and thumb. Without moving his wrist, he could make the ball turn either way, flummoxing John Goddard's West Indians for twenty-one wickets in a single series.",
          "Half a century later, a young Sri Lankan army soldier named Ajantha Mendis emerged from Colombo. Inspired by the traditional South Asian tabletop game of carrom, Mendis used his middle finger to flick the ball out of the front of the hand like an ivory striker.",
          "In the 2008 Asia Cup Final, Mendis dismantled an Indian batting lineup featuring Sehwag, Tendulkar, Dravid, Ganguly, and Laxman with figures of six for thirteen. The cricket world stood in awe: nobody could tell whether the ball would turn in, slide straight, or spit away toward slip."
        ]
      },
      {
        title: "The High-Definition Video Arms Race",
        paragraphs: [
          "In the 1950s, a mystery spinner could maintain their illusion for half a decade because opponents only saw them once every four years. Today, within forty-five minutes of a new mystery spinner's debut, video analysts in Mumbai, Sydney, and London have spliced fifty high-frame-rate close-ups of the bowler's fingers onto players' tablets.",
          "Spinners like Sunil Narine and Varun Chakaravarthy responded by concealing their grip behind their non-bowling hand until the final millisecond before release, shortening their run-ups and altering their wrist angles to keep the batters guessing in the dark.",
          "It is cricket's ultimate cybernetic duel: human biomechanical trickery pitted against forty-thousand-dollar optical tracking cameras."
        ]
      }
    ]
  }
];

export const CATEGORIES = [
  "All Articles",
  "Craft & Equipment",
  "Bowling & Tactics",
  "Spin Mastery",
  "Historic Epics",
  "The Modern Era",
  "Sacred Grounds",
  "Batting Technique",
  "Rivalry & Lore",
  "Wicketkeeping"
] as const;
