# Phase 1: pbwiki (bilconference.pbwiki.com) Wayback recovery — BIL 2008, BIL 2009, PIL 2009

All source HTML saved under `$TMP/pbwiki-fetches/` (plus `.txt` extractions). Snapshot timestamps are Wayback UTC.

**Event dates for pre/post attribution:**
- BIL 2008: Feb 29 – Mar 2, 2008 weekend, Monterey, CA (schedule page says "last updated 18:02 Sat" and cites elliottng.com "sunday-schedule-as-of-551pm-sat_20080301" — i.e., Sat = Mar 1, 2008; alongside TED2008).
- BIL 2009: Feb 7–8, 2009, Cal State Long Beach (wiki sidebar states "BIL2009 - Feb 7-8, 2009 in Long Beach, CA").
- PIL 2009 (health-focused spinoff): pbwiki pages captured Feb 2009 are *planning-stage*; the event itself had not happened at capture time.

## Sources fetched (all snapshots enumerated via CDX first)

| page | all snapshots (status 200) | fetched | pre/post event |
|---|---|---|---|
| `/Schedule?raw=1` | 20080325171345 only | `schedule-2008-raw-20080325171345.html` | POST (page last edited ~Mar 1–4, 2008 — "3 weeks ago" at capture) |
| `/Schedule` | 20080117…20090227 (16 captures) | not needed (raw capture supersedes) | — |
| `/BIL-Speaker-Schedule` | 20090208152609, 20090209213626, 20090226012539, 20090227055235 | 20090227055235 + 20090208152609 | POST (and during-event) |
| `/Room-Assignments-by-Speaker` | 20090209195528 only | `room-assignments-20090209195528.html` | POST (captured day after event; page last edited Feb 6, 2009, eve of event, by rion@cs.stanford.edu) |
| `/Speaker-bios` | 20090216200829, 20090217223421, 20090227155452 | 20090227155452 (latest) | POST (page created after event by organizers; "add yourself if you spoke") |
| `/PIL-Speakers` | 20090213081706, 20090213124638, 20090213181540, 20090301000052 | 20090301000052 (latest) | PRE (planning list) |
| `/BIL2009+-+Videos` | 20090215182116 | fetched | POST |
| `/film-the-talks` | 20090209195533 | fetched | logistics only |
| `/Get+Speakers` | 20090125110155 | fetched | PRE, no speaker names (it's a how-to-invite guide) |
| `/f/Room_A_Schedule.pdf` (via bilconference.pbworks.com) | 20120316121233 (200) | `Room_A_Schedule.pdf` (4 pp) | period artifact (Feb 2009 planning grid), archived 2012 |
| `/f/Room_B_Schedule.pdf` | 20120316121643 (200) | `Room_B_Schedule.pdf` (3 pp) | same |
| `/f/Room_C_Schedule.pdf` | 20120316121649 (200) | `Room_C_Schedule.pdf` (2 pp) | same |
| `/f/Room_D_Schedule.pdf` | 20120316121651 (200) | `Room_D_Schedule.pdf` (1 p) | same |

---

# BIL 2008 (Monterey, Feb 29 – Mar 2, 2008)

Primary evidence: `Schedule?raw=1` @ **20080325171345** — clean wikitext of the schedule as it stood at end of event ("last updated 18:02 Sat"). This is POST/during-event evidence, the highest grade available. The page has three layers: (1) timed Saturday/Sunday schedules, (2) a master "Presentations" list with speaker attributions and links, (3) long verbatim talk descriptions/bios.

**Caveat on rooms:** the room headings ("SUNDAY - MAIN ROOM / Lobby 1 / Lobby 2 / CONFERENCE ROOM / SATURDAY - MAIN ROOM / SATURDAY - CONFERENCE ROOM") were mangled into a single tinyurl line in the capture, so room attribution below is *inferred from list order* and marked medium confidence. Time slots are verbatim.

## BIL 2008 — Presentations master list (talk + speaker, verbatim attributions)

| speaker | talk title | slot/room | snapshot evidence | confidence | notes |
|---|---|---|---|---|---|
| (group) | The Un-Concert - Musical interludes and improvisations | — | 20080325171345, post | high | no individual named |
| Christine Peterson | Open source-style security for the physical world | Sat 11:30 ("Open Source Physical Security - Chris Peterson"); also Sat 2:45 ideas session; "Life Extension Personal Strategies - Chris Petersen" Sat 2:30 conf room | 20080325171345, post | high | schedule spells her "Chris Peterson"/"Chris Petersen"; master list links foresight.org/about/Peterson.html |
| Martin Codrington | The Genocide of the Curious Mind | Sun 11:30 & 11:45 | 20080325171345, post | high | grad student, Nuclear Chemistry, Texas A&M (verbatim bio below) |
| Adrian Cockcroft | Millicomputing: The Future in Your Pocket | Sat 2:30 | 20080325171345, post | high | link millicomputing.com |
| Bill Erickson | Advancement of the TED Prize | Sun 2:00–2:15 ("Advancing the Ted Prize") | 20080325171345, post | high | billerickson.net |
| Tyler Emerson | BIL: Brainstorming Next Steps | — | 20080325171345, post | high | Singularity Institute Executive Director (verbatim below) |
| Aubrey de Grey | How to Be a Successful Heretic | Sat 4:00 ("Aubred de - Grey", sic; "currently setting up to start @ 4:26pm"); continued 4:15 conf room | 20080325171345, post | high | verbatim description below |
| Justin Orkney & Simone Syed | Outsourcing Survivability - The Disconnect Between Basic Human Needs and Us | Sun 1:30 | 20080325171345, post | high | |
| A. Garrett Lisi | An Exceptionally Simple Theory of Everything | Sun 2:45 ("Unified Theory of everything - AG List", sic) | 20080325171345, post | high | sifter.org/~aglisi |
| Todd Huffman | Hacking the Human Fantastic | Sun 2:00 (conference-room list) | 20080325171345, post | high | verbatim description below |
| Alexander R. Gorbis | LIST: Local Intelligence is There | — | 20080325171345, post | high | external link enetway.com/list |
| Aileen Mapes | Short Film Fest | "Film Techevo" Sun 12:00 / "Film Tech evolution" Sat 4:45 may be related film slots (unclear) | 20080325171345, post | high | choreographer/filmmaker (verbatim below) |
| Cody Marx Bailey & Bill Erickson | Coworking to Coliving - Digital Utopia? | Sun 11:15 | 20080325171345, post | high | verbatim description below |
| Baron RK Von Wolfsheild (CSA, CTO, Qtask Inc.) | Darknets - fascist gated associations, or intentional community? | Sun 2:30 ("-DarkNets: Facist Getaways or Intentional Community - Reichart -" then "2:30 The Baron Blabbers for 15 minutes. (Who is the Baron and what happened to DarkNets?)") | 20080325171345, post | high | schedule line says "Reichart" — Reichart Von Wolfsheild; verbatim bio below |
| Quinn Norton | Always the Next Human | Sun 12:15 | 20080325171345, post | high | verbatim description below |
| Kai Chang | Motivation Psychology. Learning Optimism. | Sun ~2:49 note: "Currently listening to Kai Chang's excellent talk." | 20080325171345, post | high | verbatim bio below |
| Nikhil Nilakantan | The BIL Social Graph Experiment | Sat 1:30–1:45 | 20080325171345, post | high | verbatim bio below |
| Jonathan Sheffi and Lexi Bright | Social Bonding | Sat 11:45 | 20080325171345, post | high | verbatim bios below |
| KV Fitzpatrick | Growing Up Gifted: The State of the Art of Raising Brilliant Minds | Sat 3:45 ("KV Fitz - Gifted Education") | 20080325171345, post | high | verbatim bio below |
| Brad Templeton | The Rise of the Machines and the End of Transit | Sat 1:15 ("Robot Cars and End of Transit"); "Robot car Parts II" Sat 1:30 conf room | 20080325171345, post | high | |
| Brad Templeton | Copying Minds + Patternism | Sun 11:30 | 20080325171345, post | high | schedule-only entry |
| Daniel Kraft, MD | Stem Cells: Everything You Wanted To Know But Were Afraid to Ask | Sun 12:00 | 20080325171345, post | high | verbatim bio below |
| Ilsa Bartlett | Breathing and Other of Life's Little Secrets | — | 20080325171345, post | high | hotlux.com/angel.htm |
| Rion Snow | Telephone Pictionary and the Future of Computational Semantics | — | 20080325171345, post | high | verbatim bio below |
| Lisa Galarneau | Why Virtual Worlds are Good for the Soul | Sat 1:00 | 20080325171345, post | high | verbatim description below |
| Gabriel Kent | The Smart Utility | Sat 4:30 | 20080325171345, post | high | verbatim bio below |
| Boris Galitsky | Don't cry for me, Google: Semantic Analysis of Travel Reviews to Understand Feelings | Sun 1:00 ("Semantic Analysis of Sentiment"); Sat 2:15 ("Semantic Analysis of Sentiments") | 20080325171345, post | high | kango.com/team |
| Chris Phoenix | Dyslexia: From Vicious Cycle To Opportunity | Sat 3:30 | 20080325171345, post | high | four separate talks |
| Chris Phoenix | Molecular Manufacturing: Fantastic Fabrication, or Fantastic Fabrication? | Sun 12:45 | 20080325171345, post | high | title's duplicated pun is verbatim |
| Chris Phoenix | The Cause of the Cambrian Explosion | Sat 11:15 | 20080325171345, post | high | |
| Chris Phoenix | Free Isn't Communist | Sun 11:15 | 20080325171345, post | high | also unlabeled "4:00 Chris Phoenix" Sat conf room |
| Dick Karpinski | JustGo - Really easy site navigation | Sun 12:30 ("Just Go They Said - Karpinski") | 20080325171345, post | high | |
| Dick Karpinski | SmoothFlow - A GPS enabled traffic calming system | — | 20080325171345, post | high | |
| Dick Karpinski | VibrantHealth - Making HEALTH matter in our non-system | — | 20080325171345, post | high | |
| Dick Karpinski | TheySaid - A cheaper, faster way to learn what's in expensive academic journals | — | 20080325171345, post | high | |
| Tom Munnecke | Reflections on Resilience: Summary of a recent Uplift Academy Workshop on Resilience | — | 20080325171345, post | high | verbatim description below |
| Pat Reilly | The Evolving Social Contract of IP Rights | Sat 1:15 conf room ("IT Rights - Social Contract") | 20080325171345, post | high | ipsociety.net; verbatim description below |
| Dylan Tweney and Quinn Norton | Experiment on and with Children | — | 20080325171345, post | high | |
| Dylan Tweney | Open source journalism | Sat 3:30 conf room ("Open Source Journalism with Dylan Tweney - Wired.com") | 20080325171345, post | high | |
| Praveen Paritosh | The Computer is the new Sewing Machine: benefits and perils of a global information marketplace | Sat 5:30 | 20080325171345, post | high | verbatim description below |
| Alexander Pagidas | Dare to be wise! - Reclaiming Philosophy from the Anatomists of Thought | Sun 1:45 ("A pagidas"/"A Pagidas") | 20080325171345, post | high | verbatim description below |
| Nick Ernst | The Future of Airships | Sat 5:15 | 20080325171345, post | high | groupaction.blogspot.com |
| Brooks Cole | HoloGenesis and the Geometry of Meaning | — | 20080325171345, post | high | linkedin.com/in/brookscole |
| Mark Fitzsimmons | Flexibility, Openness and Consensus: Keys to your Destiny | possibly Sat 4:15 "Business Lessons from Social Insects - Fitz" (bio is about social insects; "Fitz" as written) | 20080325171345, post | med (slot) / high (talk) | beekeeper & aerospace engineer; verbatim below |
| Andrew Mello | The Anti-Tipping Point | — | 20080325171345, post | high | |
| Shannon Clark | Networked Economics - modeling economics AS a network | Sat 11:00 | 20080325171345, post | high | verbatim description below |
| Chris Heuer | Transforming the Heart of Business - Is there room for the concept of 'love' @ work? | Sat 2:45 | 20080325171345, post | high | note: "could also do 'The Coming War: Command and Control Fundamentalism vs DIY Missionaries'" |
| Jason Youn | Photography for the Common Man? | — | 20080325171345, post | high | verbatim description below (talk section only; not in master list) |
| Craig Sim Webb | Lucid Living™: Consciously Harvest the Power of Dreams to Boost Success & Life Mastery | — | 20080325171345, post | high | verbatim description below |
| Sean Bonner | Anonymous Vs Scientology: When the super serious meets the super smart asses | — | 20080325171345, post | med | listed as "Tentative, depending on travel" |
| Erica O'Grady | Friends Guide to Social Media | Sun 12:45–1:00 | 20080325171345, post | high | schedule-only entry |
| Rand Fitzpatrick and Alex Kawas | Procedural Lifestyle Hacking | Sun 11:00 | 20080325171345, post | high | schedule-only entry |

### BIL 2008 — schedule-only entries without full names (recorded as written; NO guessed identities)

| as written on schedule | slot | snapshot evidence | notes |
|---|---|---|---|
| "3 years in a Foreign Rathole: Challenges of Appropriate Development in Africa" | Sun 11:00 | 20080325171345, post | no speaker given |
| "Natural Language Search - B. Pell" | Sun 3:00 | 20080325171345, post | handle "B. Pell" as-is; identity not confirmed by this page |
| "Vibration Navigation (in the lobby)" | Sun 3:00 | 20080325171345, post | links stanford.edu/~tanders VibroHat page; no name on schedule |
| "Innovation Killed the Radio Star - Ryan Plesko" | Sun 1:00–1:15 | 20080325171345, post | name given on schedule only, no bio |
| "Health, the one thing you should take this year - Katheryn M" | Sun 12:30 (one list struck-through, one not) | 20080325171345, post | surname abbreviated as written |
| "Freeze tag" | Sun 12:30 | 20080325171345, post | activity |
| "Bodies, Bodies, Soul, and Society" | Sun 1:15 | 20080325171345, post | no speaker |
| "Film Techevo" / "Film Tech evolution" | Sun 12:00 / Sat 4:45 | 20080325171345, post | film screening slots |
| "Wymyn, Redskins, and the New World Order - Keck" | Sun 12:15 | 20080325171345, post | handle "Keck" as-is |
| "A - Maximizing Positive Impact for Business Decisions - Revi"; "B - Modeling Sustainable Community - Revi"; "C - Integrating Play and Work: The Living Room - Revi" | Sun 1:15 / 1:30 / 1:45 | 20080325171345, post | handle "Revi" as-is |
| "Universal Solvent Machines" | Sun 2:15 "(or 2:30, not sure)" | 20080325171345, post | no speaker |
| "What if Information is Free" | Sat 2:00 | 20080325171345, post | no speaker |
| "Beware time traveling A.I.s From the Future!" | Sat 5:00 | 20080325171345, post | no speaker |
| "Open Source Physical Security Please: Your Ideas" | Sat 2:45 conf room | 20080325171345, post | follow-on session (C. Peterson's topic) |
| "The Baron Blabbers for 15 minutes" | Sun 2:30 | 20080325171345, post | period humor re: Von Wolfsheild |
| "Late nite talks" | Sat 8:00 | 20080325171345, post | |

### BIL 2008 — cancelled (listed verbatim under "Some presentations have been cancelled due to travel issues")

- Keeping Context - Deb Lavoy
- Digital Graffiti: Art, Advertizing, and Anarchy - Marshall Reaves
- Sustainability and Community - Raines Cohen
- Aging In Community - Betsy Morris

## BIL 2008 — verbatim period text (talk descriptions & bios, from 20080325171345 raw capture)

> **How Presentations Work at BIL** — "Lots of ideas will be provided for you and everybody else, but do bring some of your own to share. The presentation schedule is flexible. If you know what you want to talk about beforehand you can ensure some speaking time and get people interested."

**Advancement of the TED Prize — Bill Erickson:** "Every year, three individuals are awarded $100,000 and granted a wish to change the world. The TED attendees, through their generosity and influence, help make the wishes a reality. BIL would like to support this great cause by helping, in any way possible, advance the wishes of the TED Prize winners. On Saturday the wishes will be announced, and on Sunday we will dedicate a session (or three) to brainstorming and pulling together our social networks to help make it happen." (2008 TED Prize winners referenced: Neil Turok, Dave Eggers, Karen Armstrong.)

**BIL: Brainstorming Next Steps — Tyler Emerson** (Singularity Institute Executive Director, Singularity Summit Curator): "I'll help run brainstorming sessions on where we might take BIL and the community we're building."

**How to Be a Successful Heretic — Aubrey de Grey:** "In my 12 minutes I will give a light-hearted - but unerringly accurate - string of nuggets of advice, drawn mostly from my own experience of recent years, on how to shepherd a diabolically dangerous idea from conception to world domination (yes, the last part will be drawn from others' experience!) as quickly as possible in the teeth of determined and powerful vested interests. My comments will apply not only to science but to heresies in general."

**An Exceptionally Simple Theory of Everything — A. Garrett Lisi:** "In his much talked about paper *An Exceptionally Simple Theory of Everything* physicist Garrett Lisi proposed a novel model for all fundamental interactions ever observed. At BIL Garrett will be fielding questions and discussing everything and anything."

**Hacking the Human Fantastic — Todd Huffman:** "The boundaries between the human and his environment have been thinning for thousands of years, and this session will trace the co-evolution of the human mind and the technology it has created. From the cuniform and cartouch to the iLife, the impact and significance of artifacts on the human experience are often not recognized for what they are, implements of dehumanization. The subtle cyborgation of the modern consumer will be discussed in with respect to our designs, desires, and destiny."
Bio: "Todd Huffman is a freelance developer and scientist working in neuroscience, cryonics, body modification, and photography. His most recent project is developing a cell phone UI for organizing mobile photographs, code-named pTaggy."

**Short Film Fest — Aileen Mapes:** "Choreographer and filmmaker Aileen Mapes will be curating a short film festival comprising of original submissions as well as her personal favourites. Pieces will be accompanied by lively discussion, insight, and opinion."

**Photography for the Common Man? — Jason Youn:** "Radical drops in the cost of consumer electronics have brought the artistic tools of photography to the masses. Professional photographer Jason Youn will be discussing the philosophy of the photographer as an observer and participant, as well as the impact of photography theory on techniques which help the amateur further blur the lines between vacation photos and fine art."

**Coworking to Coliving - Digital Utopia? — Cody Marx Bailey & Bill Erickson:** "Humanity has always searched for paradise, and the dream of utopia has seeded many unconventional life-structures over the millennium. In this presentation participants in the 'Creative Space' project discuss the successes, challenges and future of another attempt to create a utopian community, one with a Web Two Point Oh spin. Come prepared to contribute your thoughts and ideas on intentional communities, entrepreneurialism, and social technologies."

**Darknets — Baron RK Von Wolfsheild, CSA, CTO, Qtask, Inc.:** "A darknet is a private virtual network where people connect only to others they trust. The web is being built in our own image; we bring to it our fears, and our hopes. Some communities are designed to promote social interaction, others are designed to protect and to segregate. Even if the internet were made available to every person, would any services be available? Where do features and ethics collide?"
Bio: "Von Wolfsheild was an early pioneer in multi-player entertainment, developing the first computer arcade games that allowed for players to chat and play simultaneously over the modem. Currently he is developing a premier massive project management social network (a Darknet). He has designed over 120 consumer products for companies such as Activision, Bally, Disney, Dreamworks, Eidos, Konami, Mattel, Microsoft, and Time Warner (to name a few)"

**Always the Next Human — Quinn Norton:** "Society, technology, and bodies are all breaking each other. In the coming decades, we are likely to be pushing out the boundaries of our definition of human. Body modification, pharmaceuticals, the justice system, medical research, class systems, psychology and surgery are swept up in the same wave- how we see our selves, and how we act upon our bodies. The next humans will need new ethics, new markets, new laws, and very different criteria for choosing research goals and legal solutions. It can get very scary, but don't worry too much- turns out we've done all this before, though not this fast. We've done ok so far. Let's figure out how to do it better this time."

**Motivation Psychology. Learning Optimism. — Kai Chang:** "Conventional psychology spends a great deal of time studying, analyzing and evaluating people at the bottom 10% (in terms of psychological health) of the population - the crazy and dysfunctional. … But what can we learn by studing the top 10 precent - those who carry an unusually resilient and healthy psyche and deal with setbacks with aplomb and grace?"
Bio: "Kai Chang is a screenwriter, blogger, photography enthusiast and consultant on nonprofits and charitable trusts. He is an ENTP on the MBTI scale, and his mutant power is his uncanny ability to correctly identify a new stranger's MBTI type after one minute of one-on-one conversation. Those who interact him socially/casually are often surprised to hear that he is a natural depressive/pessimist."

**The BIL Social Graph Experiment — Nikhil Nilakantan:** "The BIL Social Graph Experiment will collect and map how news of the BIL conference flowed through various formal and informal social networks leading up to the conference."
Bio: "Nikhil Nilakantan is President & CEO of Social Span Media LLC, a social media strategy and marketing consultancy. He is a technologist, marketer, social media expert and avid cyclist. His blog on social media marketing can be found at strategicast.com. At BIL, Nikhil plans to catch up with old friends, make new friends and test Kai's mutant power to see if he can guess his MBTI type."

**Social Bonding — Jonathan Sheffi and Lexi Bright:** "Is this about business, friends, romance? All of it! We'll talk about how to cultivate curiosity about other people, create social connections between people, and add value to other people's lives."
Bio (Sheffi): "Jonathan Sheffi is a lifelong student dedicated to improving patient lives through miracles of biotechnology. He currently serves as a Senior Biopharmaceutical Representative with Amgen in the Enbrel Dermatology sales force in Portland, Oregon. He attended MIT both as an undergraduate and as a graduate student. …"
Bio (Bright): "Lexi Bright helps people toward positive change. She believes that self-improvement comes from growth from the core. She is currently seeking a Marriage and Family Therapy internship in San Francisco, having recently completed her MA in Psychology at a private university in Los Angeles. … Additionally, Lexi has been an event planner and coordinator, working events ranging from small private events to a large fundraiser for the Accelerating Studies Foundation (2003)."

**Growing Up Gifted — KV Fitzpatrick:** "What makes a child 'gifted'? How do we accommodate a ten-year-old who is ready to learn calculus? What happens to a child who is labeled a 'genius'? Who do gifted kids grow up to be? … Most importantly, is it ever too late to be precocious?"
Bio: "KV Fitzpatrick is an alumna of the Early Entrance Program at Cal State LA, the Individualized Honors Program at Walter Reed Jr. High School, and The Mutaytor Performance Group. She is currently a graduate student of Neuroengineering at the University of Southern California, and a firm believer in the principle of making one's own luck."

**Stem Cells — Daniel Kraft, MD:** "Stem cell technology and the debate surrounding it has generated a great deal of excitement and controversy in recent years. The field is surrounded by misconceptions, hype and yet very significant potential. …"
Bio: "Daniel Kraft is a Stanford & Harvard trained physician-scientist with extensive research and clinical experience. Now on faculty at Stanford, as well as at UCSF on the Bone Marrow Transplant service, his work has focused on developing novel techologies and medical devices utilizing stem cells for the treatment of cancer and for use in a widening array of regenerative therapies."

**The Genocide of the Curious Mind — Martin Codrington:** "The Renaissance Man is an anachronism in our modern society, due to the huge driving force toward specialization. … How can we end this horrible, inhumane, senseless genocide of the curious mind? We will explore the answers to these questions at BIL. See you in Monterey!"
Bio: "Martin Codrington is a graduate student in Nuclear Chemistry at Texas A&M University College Station TX."

**Telephone Pictionary and the Future of Computational Semantics — Rion Snow:** "The aim of this talk is to spread the joy of mixed media semantic translation (audience participation required!) and to discuss some insights into the nature of meaning as inspired by the parlor game 'Telephone Pictionary'."
Bio: "Rion Snow is a PhD Candidate in Computer Science at Stanford University, working with Professors Andrew Ng and Dan Jurafsky. … His work on automatically inferring semantic taxonomies received the Best Paper Award at the 2006 conference of the Association of Computational Linguistics."

**Why Virtual Worlds Are Good for the Soul — Lisa Galarneau:** "The presentation of results from a four year doctoral research project examining social learning associated with virtual worlds (including massively multiplayer online games), the development of 21st century skills, and how these environments reflect the power of spontaneous collaboration to positively affect people's lives and better prepare them for both their individual and our collective future."

**The Smart Utility — Gabriel Kent:** "Imagine plugging your toaster into a wall socket and instead of pulling electricity from your local power company, you were presented with an opportunity to browse the latest prices worldwide and choose the cheapest with the least latency. … In this talk attendees will be introduced to utility computing (a.k.a Cloud Computing), its current uses and future implications as well as how to connect and utilize the grids available today."
Bio: "Gabriel Kent is a technologist with an inborn technolust and loves making music. He has worked in a variety of tech. related fields … for companies such as Intel, Panasonic, AOL (TimeWarner), Macrovision and Warner Brothers … Gabriel would like to dedicate this talk to his friend Vladimir Miloushev; a true visionary of utility computing and founder of 3Tera. ~Rest in Peace Vlad~"

**Don't Cry for me, Google — Boris Galitsky:** "Conventional search engines deliver documents which include significant occurrences of keywords in user queries. … To enable such feeling-based recommendation, we built a knowledge base and reasoning engine which operates with entities of the travel domain. We also constructed a formal model of human sentiments and feelings to be extracted from text and to serve as a basis for providing recommendations."

**Lucid Living™ — Craig Sim Webb:** "Discover how to tap and integrate powerful wisdom of the dreaming mind so that it can become the inner compass, supportive life tool, and unparalleled source of creative inspiration and insight that it is meant to be. … Be prepared to have your mind stretched, your heart opened, and your funny bone tickled."

**Reflections on Resilience — Tom Munnecke:** "Last week, I invited an historian, a poet, a science fiction writer, an anthropologist, a social worker, a network theorist, an eclectic author, a mathematician, a psychiatrist, a Biotech CEO, to a 2-day workshop on the general notion of resilience. I'll be presenting some of the ideas that were generated by David Brin, Dorion Sagan, Frederick Turner, David Ellerman, Heather Wood Ion, Lenore Ealy, and others. This is just a quiet invitation to meet others interested in this topic, not a big lecture."

**The Evolving Social Contract of IP Rights — Pat Reilly:** "I'll be giving a talk about designing intellectual property rights that (a.) maximize the benefit of knowledge and creativity to society and humanity, (b.) benefit the creative worker, (c.) enable the creative worker to maintain more than mere economic rights, yet (d.) support attraction to the investment community to high tech (and high risk) ventures by creating fair and reasonable intellectual property rights."

**The Computer is the new Sewing Machine — Praveen Paritosh:** "There is increased participation by the developing world in the global manufacturing marketplace: the sewing machine in Bangladesh can be a means to support an entire family. Given a marketplace for jobs a la Amazon's Mechanical Turk, a laptop from the One Laptop Per Child project can become a modern-day sewing machine. … At its best, it is a powerful bootstrap for over a billion people. At its worst, it is enslavement. How should we proceed?"

**Dare to be wise! — Alexander Pagidas:** "We finish high-school and know more about mathematics than we do of ourselves. Yet knowing ourselves is more important than algebra. … In this talk I'll tell the story of how philosophy unwittingly condemned itself to irrelevance by divorcing itself from life; what are the broader cultural consequences of that divorce and what do we gain by seducing her back to life."

**Networked Economics — Shannon Clark:** "What happens when we model all of economics (i.e. all economic activity - at any scale) as a network? … My starting point is the statement that *all economic activity can be represented as the creation and destruction of links between entities over time.*" (Bio: "I started MeshForum, a conference on the study of Networks…")

**Flexibility, Openness and Consensus: Keys to your Destiny — Mark Fitzsimmons:** "I am a Beekeeper and an Aerospace Engineer. I am naturally interested in social insects and have noticed analogies between large human organizations and ant and bee colonies. Some years back I was reading Holldobler and Wilson's pulitzer prize winning book 'The Ants' and was startled by some profound information in the chapter 'Social Homeostasis and Flexibility.' It has changed the way I approach cooperative and business relationships."

Period color notes (verbatim from the live-edited schedule): "2:49 - Schedule seems a little out of whack. Currently listening to Kai Chang's excellent talk." / "email me at elliott (aat) ngventures (ddot) com with changes or additions or just update the wiki yourself!" (schedule maintained live by Elliott Ng) / "To edit the page, use the password: bil"

---

# BIL 2009 (Cal State Long Beach, Feb 7–8, 2009)

Primary evidence: `Room-Assignments-by-Speaker` @ **20090209195528** (captured the day after the event; page last edited by rion@cs.stanford.edu ~Feb 6, 2009 — the finalized assignment grid, includes live-event entries like Reichart's "Telling people where to go since this is over for today…" which prove during/post-event editing). Room capacities from `BIL-Speaker-Schedule` @ 20090227055235: Room A = 450 seats (main), B = 54, C = 20, D = 20, F = small/self-scheduled ("ROOM F: YOU MAKE IT" — butcher-paper unconference room). "Over 100 guest speakers / Only two short days! WOWZA" (verbatim).

Time slots recovered from the wiki's own `Room_A/B/C/D_Schedule.pdf` files (see per-room section below).

## BIL 2009 — speakers & talks (verbatim from Room-Assignments-by-Speaker, 20090209195528, post-event)

| speaker | talk title (verbatim) | room | snapshot evidence | confidence | notes |
|---|---|---|---|---|---|
| A.J. Pape | Oh yeah, it's the People - The Key Ingredient to Making Shit Happen | C | 20090209195528, post | high | |
| Adam Glickman | Chair Massage | D | 20090209195528, post | high | |
| Alex Kawas (+ Panel) | Where is My Cyborg Self | B | 20090209195528, post | high | |
| Alex Lightman | A Lever and A Place to Stand: How to Do Cool Things Around the World | B | 20090209195528, post | high | bio below |
| Alex Peake | Social Empowerment Makes Apathy Obsolete: Empowerment Anywhere Is An Inspiration For Empowerment Everywhere | D | 20090209195528, post | high | |
| Alexandros Pagidas | Creating the University of the Future | A | 20090209195528, post | high | bio below; also spoke BIL2008 |
| Andrew Berardini | "Salient Differences Between Art and Science and Why They Actually Need Each Other" | A | 20090209195528, post | high | |
| Andrew Hyde | Big Startup Weekend announcement... going open. | A | 20090209195528, post | high | |
| Aubrey de Grey | The Methuselah Foundation's university research projects: SENS progress worldwide | A | 20090209195528, post | high | bio below; slides BIL09-deGrey.ppt |
| Barbara Logan | An Extraordinary Collaboration to End the Diseases of Aging | A | 20090209195528, post | high | |
| Ben Huh | What's Funny about the Interwebs | A | 20090209195528, post | high | bio below |
| Blake Mycoskie | TBD | A | 20090209195528, post | high | TOMS founder is the famous bearer of this name, but page gives no affiliation — name recorded as written |
| Brad Templeton | The Evils of Cloud Computing, Data Portability & Single Sign On | A | 20090209195528, post | high | bio below |
| Brad Templeton | Robot cars saving the planet -- part two | B | 20090209195528, post | high | bios page also lists "Robot Cars, part 1" |
| Bruce A. McHenry | Zars: Cars that form Trains | B | 20090209195528, post | high | bio below |
| Cameron Sinclair | Open Source Architecture : From TED Prize to reality | A | 20090209195528, post | high | bio below; 2006 TED Prize winner |
| Carissa van den Berk Clark | "Land redistribution, community empowerment and community land trusts." | C | 20090209195528, post | high | |
| Charles Armstrong | One Click Organisations: Emergent Democracy For Everyone! | A | 20090209195528, post | high | |
| chris axton | The art of Conference Crashing | A | 20090209195528, post | high | lowercase as written |
| Chris Axton | Can we burn less gasses? YES WE CAN! | B | 20090209195528, post | high | |
| Chris Bucchere | Not So Simple Any More: The Bleeding Edge of RSS | A | 20090209195528, post | high | |
| Clint Schaff | It's the Experience, Stupid -- Thoughts on saving the music business | B | 20090209195528, post | high | |
| Craig Sim Webb | Lucid Living & World Peace from the Inside Out | C | 20090209195528, post | high | also spoke BIL2008 |
| Curt Beckmann | Sustainable Poverty Reduction for 3+ Billion | B | 20090209195528, post | high | |
| Damien Crowe | Why is longevity such a hard sell? | A | 20090209195528, post | high | |
| Daniel Ford | Happiness | B | 20090209195528, post | high | |
| Danielle Strachman | Building School Culture | B | 20090209195528, post | high | |
| Danielle Strachman | Fertility Awareness Method Crash Course | C | 20090209195528, post | high | |
| David Wygant | How Attracting The Opposite Sex Is Simpler Than You Think | A | 20090209195528, post | high | cell reads "…Think 30 a Sunday medium" — trailing scheduling scratch text |
| David Zetland | An "integrated" Solution to Water Mismanagement in the West | B | 20090209195528, post | high | bio below |
| Derek Lomas | Playpower: Using Computer-Aided Learning Games on $12 computers (for real) to enhance education worldwide | D | 20090209195528, post | high | |
| Drew Jones | Outworking & Innovation | A | 20090209195528, post | high | |
| Emma Persky | Democratic Source Development | A | 20090209195528, post | high | |
| Eric Boyd | Automotive X Prize | B | 20090209195528, post | high | bio below |
| Eric Boyd | Meta Civilization Tutorial | C | 20090209195528, post | high | bios page: "Metacivilization Tutorial" |
| eric gradman | Perils of Robotics | A | 20090209195528, post | high | bio below; Revision3 video noted |
| eric gradman (again) | Interactive Spaces | B | 20090209195528, post | high | "(again)" verbatim |
| Eric Rasmussen | Climate Change, Disaster Response, and the Spread of Infectious Diseases | A | 20090209195528, post | high | |
| Erik Hersman | AfriGadget: What do you see? | A | 20090209195528, post | high | |
| Eve Blossom | "Material Social Change" How a fabric company is transforming lives in local communities globally | A | 20090209195528, post | high | bio below |
| Evonne Heyning | Lightning Temple: Energetic Research on Stage | B | 20090209195528, post | high | |
| Francine Hardaway | !0 Lessons I Learned from Starting Companies in a Downturn | A | 20090209195528, post | high | "!0" typo verbatim (=10); bio below |
| Francisco Dao | Secrets of Social Influence (How to get a Date) | A | 20090209195528, post | high | bio below |
| Gavin Starks | By Video: Your Energy IDentity | D | 20090209195528, post | high | remote/video talk |
| George Bressler | Center 4 Smart Power (C4SP) | C | 20090209195528, post | high | |
| Glenn Zucman | Greed, Power, and the Sex-Life of Naked Pixels | C | 20090209195528, post | high | |
| Gordy Grundy | There Are Some Things We Just Don't Know | C | 20090209195528, post | high | |
| heathervescent | Practical Application of Technology | B | 20090209195528, post | high | handle as written (no full name on page) |
| heathervescent | Breakthrough News | C | 20090209195528, post | high | handle as written |
| Isa Gordon | Gargoyle in Your Pocket: the Future of Wearables | B | 20090209195528, post | high | |
| Jayson Elliot | Lightful: A open, public project to create the next generation of computer interfaces | A | 20090209195528, post | high | |
| Jenka | TBD | C | 20090209195528, post | med | handle as written |
| Jenn Ramsey | Everything I learned about being successful in life I earned from teaching blow job classes | A | 20090209195528, post | high | verbatim |
| Jessica Mullen | A mass with The Church of Internetology | A | 20090209195528, post | high | |
| Jessica Richman | Brazil, Russia, India, China (BRIC) - Whither the global order? | C | 20090209195528, post | high | |
| Joe Adams | Super "Hello World" Experience | C | 20090209195528, post | high | |
| Joel Grus | Your Religion is False | A | 20090209195528, post | high | bio below; the one talk named on BIL2009-Videos page |
| John Chisholm | Seven Axes of Sexual Orientation | D | 20090209195528, post | high | |
| John Deneen | Silicon Valley Conference Aims to Raise Planetary IQ | C | 20090209195528, post | high | |
| John Schloendorn | A Garage-Level Biomedical Research Effort is Taking on Death | A | 20090209195528, post | high | |
| John Smart | Evo Devo Universe? A Framework for Thinking About the Future | A, then breakout in C ("a (break out room in C)" / "c after talk in main room") | 20090209195528, post | high | listed twice |
| John Trager | Working with Complex Systems: Approaches, Techniques, and Philosophies | C | 20090209195528, post | high | |
| Jonathan Sheffi | The Promise and the Peril of Personalized Medicine | B | 20090209195528, post | high | bio below; also spoke BIL2008 |
| Joseph Jackson | The Free and Open Science/Technology Paradigm | B | 20090209195528, post | high | |
| Joseph Turian | Deep Learning for Artificial Intelligence | A | 20090209195528, post | high | bio below |
| Karl Roth | What You Don't Know About The Solar Panel Industry... | B | 20090209195528, post | high | |
| Kevin Baugh | Tactics and Strategy for the Organizational Guerilla: acheving positive change in organizations that resist it. | B | 20090209195528, post | high | "acheving" typo verbatim |
| Kiem Tjong | Democratizing the University Innovation Process | B | 20090209195528, post | high | |
| KV Fitzpatrick | Exercise and The Nervous System | A | 20090209195528, post | high | also spoke BIL2008 |
| Lindsay LaShell | In Support of Local | C | 20090209195528, post | high | |
| Lisa Tansey | Middle East - any new ideas? | C | 20090209195528, post | high | |
| Lynn Langit | Teaching Kids to Code with Boku | B | 20090209195528, post | high | |
| Marissa Louie | Advertising: Now and Future | D | 20090209195528, post | high | |
| Matias Viegener | What is Public Fruit and What Can it Do? | C | 20090209195528, post | high | |
| Matthew Schultz | Color by Numbers - The Wonders of Algorithmic Art | C | 20090209195528, post | high | |
| Matthew Schultz | PODCAST! | D | 20090209195528, post | high | |
| Micah Baldwin | You Are The Center of Your Universe | A | 20090209195528, post | high | |
| Mike Mettler | Traveling in the world's most dangerous places | C | 20090209195528, post | high | |
| Mitch Altman | The Hacker Space Movement | B | 20090209195528, post | high | |
| Patri Friedman | Seasteading: how to homestead the high seas and why it will make politics work better | B | 20090209195528, post | high | bio below |
| Peter Samuelson | EDAR (Everyone Deserves a roof) | A | 20090209195528, post | high | |
| Peter Voss | Towards Real AI | B | 20090209195528, post | high | bio below |
| Raines Cohen | Aging In Community: Cohousing, Village Networks, Elders' Guilds, Earth Elders | C | 20090209195528, post | high | (cancelled at BIL2008, delivered 2009) |
| Reichart | Telling people where to go since this is over for today, and that talks tomorrow start at 9:30 am with Cameron Sinclair | A | 20090209195528, post | high | live-event housekeeping entry, verbatim; Reichart = Reichart Von Wolfsheild (BIL co-founder; surname per 2008 page — the 2009 page itself says only "Reichart") |
| Reichart | introductions and stuff | (blank) | 20090209195528, post | high | verbatim |
| Richard Gordon | A New Basic Human Skill | C | 20090209195528, post | high | |
| Richard Leis | State of Humanity+ | B | 20090209195528, post | high | |
| Richard Leis | The Great Vanishing | C | 20090209195528, post | high | |
| Robert KirkPatrick | Open Mobile Consortium | A | 20090209195528, post | high | capital "KirkPatrick" verbatim |
| Robert Sperry | Your lack of script is killing us: How applying engineering to new domains can save lives and edcuate the world. | C | 20090209195528, post | high | "edcuate" typo verbatim |
| Ryan Arroyo | California's Water Crisis - What YOU can do! | A | 20090209195528, post | high | bio below |
| Silona Bonewald | Transparent Government starting with the Federal Budget | A | 20090209195528, post | high | |
| Steve Coast | OpenStreetMap and the Democratization of Maps and Geographic Data | A | 20090209195528, post | high | |
| Ted B. Cushion | TBD | A | 20090209195528, post | med | |
| Todd Huffman/Reichart | Opening Remarks | A | 20090209195528, post | high | |
| Tom Schaff | Freedom Isn't Free: The All New American Responsibility Movement | A | 20090209195528, post | high | |
| Tommi Virtanen | How Technology Keeps Failing Us | B | 20090209195528, post | high | |
| Varoujan Gorjian | From Extrasolar Planets to Black Holes: The Latest Results from the Spitzer Space Telescope | B | 20090209195528, post | high | |
| Virgil Griffith | Measuring consciousness of simple neural systems | A | 20090209195528, post | high | |
| Ward Plunet | Cancer: A Call for a New Health Science Research Paradigm | A | 20090209195528, post | high | |
| Whurley | 15 minutes with an evil genius | A | 20090209195528, post | high | handle as written (William Hurley widely known as "whurley", but the page gives only the handle) |

Count: 103 rows (98 distinct speaker names incl. handles; several speakers gave 2 talks).

## BIL 2009 — time slots per room (from `Room_A/B/C/D_Schedule.pdf`, the wiki's own scheduling-grid PDFs; archived 20120316 on bilconference.pbworks.com, but the files are the Feb 2009 artifacts)

**Grade note:** the wiki page warned the PDFs "contain Old Data" relative to the live (qtask) HTML schedules, so treat times as *as-scheduled shortly before/during the event*, not as-delivered minute-by-minute. Speaker/talk/room pairings match the post-event Room-Assignments page almost exactly. PDFs are image-only (no text layer); transcribed from page renders.

### Room A (main room, 450 seats)

Saturday: 9:30–9:55 Todd Huffman/Reichart — Opening Remarks · 10:00–10:30 Brad Templeton — The Evils of Cloud Computing, Data Portability & Single Sign On · 10:35–10:50 Charles Armstrong — One Click Organisations · 10:55–11:25 Silona Bonewald — Transparent Government starting with the Federal Budget · 11:30–11:45 Tom Schaff — Freedom Isn't Free · 11:50–12:20 David Wygant — How Attracting The Opposite Sex Is Simpler Than You Think · 12:25–12:40 Andrew Hyde — Big Startup Weekend announcement… going open. · 12:45–13:00 Francine Hardaway — !0 Lessons I Learned from Starting Companies in a Downturn · 13:05–13:25 Drew Jones — Outworking & Innovation · 13:30–13:45 Andrew Berardini — "Salient Differences Between Art and Science…" · 13:50–14:05 Steve Coast — OpenStreetMap and the Democratization of Maps and Geographic Data · 14:10–14:30 Jayson Elliot — Lightful · 14:35–14:50 Robert KirkPatrick — Open Mobile Consortium · 14:55–15:10 Jessica Mullen — A mass with The Church of Internetology · 15:15–15:30 Micah Baldwin — You Are The Center of Your Universe · 15:35–15:55 Alexandros Pagidas — Creating the University of the Future · 16:00–16:15 Joel Grus — Your Religion is False · 16:20–16:35 Eric Rasmussen — Climate Change, Disaster Response, and the Spread of Infectious Diseases · 16:40–16:55 Ben Huh — What's Funny about the Interwebs · 17:00–17:15 Whurley — 15 minutes with an evil genius · 17:20–17:25 Reichart — closing/"Telling people where to go…"

Sunday: 9:00–9:25 Reichart — introductions and stuff · 9:30–9:50 Cameron Sinclair — Open Source Architecture: From TED Prize to reality · 9:55–10:10 Erik Hersman — AfriGadget: What do you see? · 10:15–10:30 Eve Blossom — "Material Social Change" · 10:35–10:50 Blake Mycoskie — TBD · 10:55–11:15 Peter Samuelson — EDAR (Everyone Deserves a roof) · 11:20–11:35 John Smart — Evo Devo Universe? (breakout continues in C) · 11:40–11:55 eric gradman — Perils of Robotics · 12:00–12:20 Joseph Turian — Deep Learning for Artificial Intelligence · 12:25–12:40 Virgil Griffith — Measuring consciousness of simple neural systems · 12:45–13:00 John Schloendorn — A Garage-Level Biomedical Research Effort is Taking on Death · 13:05–13:20 Chris Bucchere — Not So Simple Any More: The Bleeding Edge of RSS · 13:25–13:40 Damien Crowe — Why is longevity such a hard sell? · 13:45–14:00 Aubrey de Grey — SENS progress worldwide · 14:05–14:20 Barbara Logan — An Extraordinary Collaboration to End the Diseases of Aging · 14:25–14:45 Ward Plunet — Cancer: A Call for a New Health Science Research Paradigm · 14:50–15:05 KV Fitzpatrick — Exercise and The Nervous System · 15:10–15:25 Ted B. Cushion — TBD · 15:30–15:45 Ryan Arroyo — California's Water Crisis · 15:50–16:05 Emma Persky — Democratic Source Development · 16:10–16:30 chris axton — The art of Conference Crashing · 16:35–16:50 Francisco Dao — Secrets of Social Influence (How to get a Date) · 16:55–17:10 Jenn Ramsey — "Everything I learned about being successful in life I earned from teaching blow job classes"

### Room B (54 seats)

Saturday: (9:30–10:30 in Main Room) · 10:35–11:05 Peter Voss — Towards Real AI · 11:10–11:25 Jonathan Sheffi — The Promise and the Peril of Personalized Medicine · 11:30–12:00 Kiem Tjong — Democratizing the University Innovation Process · 12:05–12:35 eric gradman (again) — Interactive Spaces · 12:40–13:10 Mitch Altman — The Hacker Space Movement · 13:15–13:45 heathervescent — Practical Application of Technology · 13:50–14:05 Lynn Langit — Teaching Kids to Code with Boku · 14:10–14:25 Danielle Strachman — Building School Culture · 14:30–15:00 Isa Gordon — Gargoyle in Your Pocket: the Future of Wearables · 15:05–15:35 Curt Beckmann — Sustainable Poverty Reduction for 3+ Billion · 15:40–16:10 Karl Roth — What You Don't Know About The Solar Panel Industry… · 16:15–16:35 Bruce A. McHenry — Zars: Cars that form Trains · 16:40–17:00 Chris Axton — Can we burn less gasses? YES WE CAN! · 17:05–17:35 Evonne Heyning — Lightning Temple: Energetic Research on Stage

Sunday: (9:30–10:00 in Main Room) · 10:05–10:25 David Zetland — An "integrated" Solution to Water Mismanagement in the West · 10:30–11:00 Patri Friedman — Seasteading · 11:05–11:35 Richard Leis — State of Humanity+ · 11:40–12:10 Brad Templeton — Robot cars saving the planet — part two · 12:15–12:45 Eric Boyd — Automotive X Prize · 12:50–13:15 Kevin Baugh — Tactics and Strategy for the Organizational Guerilla · 13:20–13:50 Alex Lightman — A Lever and A Place to Stand · 13:55–14:15 Tommi Virtanen — How Technology Keeps Failing Us · 14:20–14:50 Varoujan Gorjian — From Extrasolar Planets to Black Holes · 14:55–15:10 Clint Schaff — It's the Experience, Stupid · 15:15–15:45 Daniel Ford — Happiness · 15:50–16:20 Joseph Jackson — The Free and Open Science/Technology Paradigm · 16:25–16:55 Alex Kawas (+ Panel) — Where is My Cyborg Self

### Room C (20 seats)

Saturday: (9:30–9:55 Main Room introductions) · 10:00–10:30 heathervescent — Breakthrough News · 10:35–10:55 Lindsay LaShell — In Support of Local · 11:00–11:15 Jessica Richman — BRIC: Whither the global order? · 11:20–11:50 Raines Cohen — Aging In Community · 11:55–12:25 Joe Adams — Super "Hello World" Experience · 12:30–13:00 John Trager — Working with Complex Systems · 13:05–13:35 Richard Leis — The Great Vanishing · 13:40–14:25 A.J. Pape — Oh yeah, it's the People · 14:30–15:15 Matthew Schultz — Color by Numbers: The Wonders of Algorithmic Art · 15:20–16:05 Richard Gordon — A New Basic Human Skill · 16:10–16:25 Robert Sperry — Your lack of script is killing us ("Sautrday" typo verbatim in PDF) · 16:30–16:55 Craig Sim Webb — Lucid Living & World Peace from the Inside Out · 17:00–17:30 Carissa van den Berk Clark — "Land redistribution, community empowerment and community land trusts."

Sunday: (9:30–9:55 Main Room) · 10:00–10:45 Jenka — TBD · 10:50–11:35 Danielle Strachman — Fertility Awareness Method Crash Course · 11:40–12:10 John Smart — Evo Devo Universe? (c after talk in main room) · 12:15–12:45 Eric Boyd — Meta Civilization Tutorial · 12:50–13:20 Lisa Tansey — Middle East: any new ideas? · 13:25–13:55 Matias Viegener — What is Public Fruit and What Can it Do? · 14:00–14:30 Mike Mettler — Traveling in the world's most dangerous places · 14:35–15:05 John Deneen — Silicon Valley Conference Aims to Raise Planetary IQ · 15:10–15:40 George Bressler — Center 4 Smart Power (C4SP) · 15:45–16:15 Gordy Grundy — There Are Some Things We Just Don't Know · 16:20–16:50 Glenn Zucman — Greed, Power, and the Sex-Life of Naked Pixels

### Room D (20 seats; hour-long sessions)

Saturday: 11:00–12:00 Gavin Starks — By Video: Your Energy IDentity · 12:30–1:30 Derek Lomas — Playpower · 2:00–3:00 Alex Peake — Social Empowerment Makes Apathy Obsolete

Sunday: 11:00–12:00 Marissa Louie — Advertising: Now and Future · 12:30–1:30 Adam Glickman — Chair Massage · 2:00–3:00 Matthew Schultz — PODCAST! · 3:30–4:30 John Chisholm — Seven Axes of Sexual Orientation

## BIL 2009 — verbatim speaker bios (`Speaker-bios` @ 20090227155452, post-event; page maintained by lexbright — Lexi — "If you don't see yourself on here, and you spoke, ADD yourself!")

19 bios present (alphabetical by last name, per page TOC): Ryan Arroyo, Eve Blossom, Eric Boyd, Francisco Dao, Patri Friedman, Eric Gradman, Dr. Aubrey de Grey, Joel Grus, Francine Hardaway, Ben Huh, Alex Lightman, Bruce McHenry, Alexandros Pagidas, Jonathan Sheffi, Cameron Sinclair, Brad Templeton, Joseph Turian Ph.D., Peter Voss, David Zetland.

Full verbatim text preserved in `pbwiki-fetches/speaker-bios-20090227155452.txt` (lines 52–173). Highlights, verbatim:

- **Ryan Arroyo** (My Water Future) — "After spending several years working for an overseas manufacturer and seeing first hand the dramatic and massive factory infrastructure in China, India, and Vietnam, Ryan Arroyo decided to switch careers and focus on opportunities that promote earth-friendly practices and sustainable living. … Ryan's newest project, MyWaterFuture.com, is a website and e-store that teaches water conservation practices and promotes water saving products."
- **Eve Blossom** (Founder, CEO Lulan Artisans, Charleston SC) — "Ms. Blossom's seventeen years' experience in early-stage technology firms, international business, nonprofit and social ventures led her to founding Lulan Artisans. …"
- **Eric Boyd** (Founder Automotive X Prize; Engineer Jetalon) — "Eric Boyd is not a car nut. He's an efficiency nut. …"
- **Francisco Dao** (Founder and President The Killer Pitch) — "From 2005-2008 Francisco Dao was a leadership columnist for Inc.com and later covered technology 'Buzz' for FastCompany.com. …"
- **Patri Friedman** (Executive Director, The Seasteading Institute) — "Patri attended HMC where he received a bachelor's degree in math, then Stanford University for an MS in Computer Science and Cardean University for an MBA. He worked for Google as a software engineer from 2004 to 2008, when he left to found TSI. …"
- **Eric Gradman** (Design, Robotics and Interactice Systems [sic]) — "Eric Gradman is a circus performer, roboticist, and interactive artist. (Yes, the art and the artist are both interactive). He works for Applied Minds in Glendale, CA. He also performs with The Mutaytor and Cirque Berzerk…"
- **Dr. Aubrey de Grey** (Chairman and Chief Science Officer of the Methuselah Foundation) — full SENS bio; also cross-references "Bil2008 Talk: How to Be a Succesful Heretic [sic]".
- **Joel Grus** — two bios, verbatim: "Joel's version of Joel's bio: Joel Grus lives in Seattle. He has no hobbies. He is writing a book. That's really more of a 'calling' than a 'hobby' though." / "Alexis' version of Joel's bio: Funny man Joel Grus has a quick wit and sharp humor…"
- **Francine Hardaway** (Partner at Stealthmode Partners) — "Francine is a self-described geek-to-human translator. …" (slides link on slideshare)
- **Ben Huh** (CEO at Pet Holdings, Inc.) — "Ben Huh, is the Chief Cheezburger in charge of I Can Has Cheezburger. … Some say, he is the world's foremost expert in the captioning of cat pictures. Some say, he is allergic to cats."
- **Alex Lightman** (CEO, Innofone.com, Inc.) — "Alex Lightman is a leading writer and speaker on the future of technology and communications. He is the author of the first book on 4G wireless, Brave New Unwired World…"
- **Bruce McHenry** (Founder of RoadTrains.uf [sic] and the Key Prize Foundation) — "Bruce obtained three degrees from MIT, worked at SRI International…"
- **Alexandros Pagidas** (Philosopher) — "Alexandros Pagidas is a philosopher and entrepreneur from Greece, living in San Francisco since 2006."
- **Jonathan Sheffi** — "Senior Biopharmaceutical Representative, Dermatology at Amgen / Recently accepted to the MBA program at Harvard Business School" + long MIT bio; slides links for both 2009 and 2008 talks.
- **Cameron Sinclair** (Co-Founder Architecture for Humanity) — "Cameron Sinclair is the co-founder and 'eternal optimist' at Architecture for Humanity… recipient of numerous awards including the 2006 TED prize…"
- **Brad Templeton** (Chairman Electronic Frontier Foundation) — "Brad Templeton founded and ran ClariNet Communications Corp., the first internet-based content company… in 1987 he founded and edited rec.humor.funny…" (bios page lists three 2009 talks: "Robert Cars, saving the planet part 2" [sic], "The Evils of Cloud Computing, Data Portability & Single Sign On", "Robot Cars, part 1")
- **Joseph Turian, Ph.D.** (University of Montreal post-doc) — SCIENCE BIO + HACKER BIO both verbatim in txt ("'Dad! Type 'get sword''…").
- **Peter Voss** (Owner Adaptive A.I. Inc) — "Peter started his accomplished career as an entrepreneur, inventor, engineer and scientist at age 16. …"
- **David Zetland** (PhD Economist) — "David Zetland received his PhD in Agricultural and Resource Economics from UC Davis in 2008. He is now a S.V. Ciriacy-Wantrup Postdoctoral Fellow… He blogs on water, economics and politics at aguanomics.com."

Video evidence: Revision3 filmed the main room (revision3.com/bil); `BIL2009 - Videos` @ 20090215182116 (post) names one talk: "Joel Grus' funny, provocative talk from the first day of BIL - 'Your Religion is False'" (embed lost in capture). `film-the-talks` @ 20090209195533: volunteer camera crew for small rooms — Bill Erickson, Todd Huffman (Flip cam), Aileen Mapes (HD camcorder); commenter Dave offering Chrissy Strassburg's camera rig (girlmanmedia.com).

---

# PIL 2009 (health spinoff, "bil-pil-2009")

Evidence: `PIL-Speakers` @ **20090301000052** (also 20090213 captures) — **PRE-EVENT planning list only** (page last edited ~Feb 19, 2009 by Jonathan Sheffi). Lower-grade evidence; do not treat as a delivered lineup.

| speaker | affiliation (verbatim) | status | snapshot evidence | confidence |
|---|---|---|---|---|
| Jen McCabe Gorman | OrganizedWisdom.com | **Confirmed** | 20090301000052, pre | med-high (confirmed-to-speak, not confirmed-delivered) |
| Michael Phillips | MenssanaResearch.com | **Confirmed** | 20090301000052, pre | med-high |

"Ideas for possible speakers" (verbatim, NOT confirmed — record only as wishlist): Jamie Heywood (PatientsLikeMe.com), Roger Holzberg (MyBridge4Life.com), Dave Warner (MindTel.com), Kevin Baugh (KnowledgeBridgeIntl.com), Aubrey de Grey (Methuselah Institute), Linda Avey (23andMe.com), Chris Talley (Precision Food Works), Julia Ross (author of "The Mood Cure"), Kelly McGonigal (YogaBear.org), Jayant Ghiara (UCSD), Indu Subaiya (Health 2.0). Several tagged "[also @TEDMED]".

Related pbwiki pages captured Feb 2009: PIL-Contact, PIL-Info, PIL-Sponsors, PIL-Vol, PILgrims/PILgrams (not speaker-bearing; not fetched this phase).

---

# Unrecoverable / gaps

1. **BIL 2009 time slots: RECOVERED** via `Room_A/B/C/D_Schedule.pdf` (200s on bilconference.pbworks.com, archived 20120316) — transcribed above. Still unrecovered: the *live* qtask.com HTML schedules (`qwiki.cgi?mode=previewSynd&uuid=…` — no Wayback captures of those exact UUIDs), `Schedule_By_Speaker.pdf` (303 only), and `room_all_sat/sun_schedule.pdf` (301s only). So any day-of drift from the PDF grid is lost.
2. **BIL 2008 room labels** are inferred (headings garbled into a tinyurl line); times are verbatim.
3. **BIL 2008 Sunday-schedule orphans**: several talks have no speaker or only a handle ("B. Pell", "Keck", "Revi", "Katheryn M", "Fitz") — recorded as written, identities NOT guessed.
4. **BIL2009 Videos page** had its Revision3/YouTube embeds stripped by the archive — only the Joel Grus caption survives; revision3.com/bil is the lead for video recovery (Phase: YouTube/press).
5. **PIL 2009 delivered lineup** — pbwiki only holds the pre-event list; the event's own site (bil-pil-2009 slug) needs separate Wayback work.
6. **Get Speakers** page contains no speaker names (it's an outreach how-to; author Cody Marx Bailey; template letter text preserved in `get-speakers-20090125110155.txt`).
