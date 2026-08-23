# Phase 3: International / spinoff BIL events — line-up research (RESEARCH ONLY)

14 events. Method per event: repo `_events/<slug>.md` → Wayback (bilconference.com event pages + any dedicated sites found via CDX) → web search (local-language where applicable). Raw fetched HTML saved under `$TMP/phase3-wb/` (file names cited below). Snapshot IDs are Wayback UTC timestamps; `id_` raw captures.

Conventions:
- **high** = period, post/during-event evidence the talk was delivered (live-blog, published talk video page)
- **med-high** = period post-event retrospective roster ("the speakers this year included")
- **med** = period pre-event announced roster ("confirmed", profiles published before event)
- Organizers ≠ speakers. Ambiguous single names recorded exactly as printed, never expanded by guesswork.

Headline: **3 events yielded substantial new lineup data** (BIL:PIL 2009 — 32-name roster + 8 talk titles; BIL:Chennai 2011 — 13 speaker profiles, 7 with day-of live-blogs, plus venue/theme; BIL Chennai 2017 — 4 announced speakers missing from the repo, incl. the "Oscar" of the agenda identified from the event's own site). **8 events: nothing recoverable beyond what the repo already holds.**

---

## 1. bil-act — BIL:ACT (Dec 2012)

**Correction to task brief: NOT Australia.** Repo front matter and every period source place it in **Tunis, Tunisia** (one of the Tunisian BIL series; country `TN`, dates 2012-12-01..31, i.e. month-precision only).

Sources checked:
- Repo `_events/bil-act.md` — empty body, no organizers/speakers/facebook.
- Wayback `bilconference.com/event/bilact/` @ ~2018 (`act-event.html`) — shell page: dates + "Tunis, Tunisia" only; no contact, no organizers. Past-events sidebar lists "BIL:ACT - (Tunis, Tunisia)".
- Wayback `bilconference.com/bil-act/` — not archived (IA error page).
- Web search — nothing (name collides with Australian Capital Territory, "ACT" test, etc.).

**Nothing recoverable.** Recommend handling alongside the other Tunisian events (organizer network around Karim Benabdallah / BIL Tunisia may be the only remaining source — Facebook pages of the TN series).

---

## 2. bil-afghanistan — BIL:Afghanistan (June 2010)

Sources checked:
- Repo `_events/bil-afghanistan.md` — empty body; dates 2010-06-01..30 (month precision), location just "Afghanistan".
- Wayback `bilconference.com/event/bilafghanistan/` @2018 (`afghanistan-event.html`) — shell, no data beyond dates.
- Wayback `bilconference.com/past-conferences/bil-afghanistan/` @2012 (`afghanistan-past.html`) — post exists in "Past Conferences" (posted 03/29/2011) but **body is empty**.
- Web search — swamped by the July 2010 governmental "Kabul International Conference on Afghanistan" (unrelated). One community source adds the city:
  - Slideshare deck "Bil conference in a glimpse" by Abdelkarim Benabdallah (BIL Tunisia organizer), past-events list, verbatim: "**BIL:Afghanistan Kabul (2010)**". No speakers named.

| speaker | talk title | evidence | confidence | notes |
|---|---|---|---|---|
| — | — | — | — | nothing recoverable |

New metadata lead only: **city = Kabul** (community deck, medium confidence; repo currently has no city).

---

## 3. bil-chennai — BIL:Chennai (Jan 22, 2011) — MAJOR RECOVERY

The event had its own site, **bilconference.in** (BIL India), well covered by Wayback, including **live-blog posts written during the event day** (Jan 22, 2011) by volunteers `amarnaik` and `sandeepvarma`. Repo file has no speakers at all today.

Sources checked:
- Repo `_events/bil-chennai.md` — date + facebook event link only.
- Wayback `bilconference.com/event/bilchennai/` @2018, `past-conferences/bil-chennai-2011` @2012, `press/bil-conference-coming-to-chennai` @2015 — all shells/empty.
- **bilconference.in via CDX** (`bilpil`-style sweep; ~65 distinct URLs). Fetched: home, speakers category, 13 speaker profiles, 7 event live-blogs, press post, videos category. Files `in-*.html`.

**New event metadata (verbatim, home page @20110104053518):**
> "BIL Chennai 2011 (Learn more) Venue: Vivekananda Auditorium, Anna University, Kotturpuram, Chennai-600085. Date: January 22, 2011. Theme: Ideas worth Doing"

Repo currently says only "Chennai, India" — venue + theme are new.

### Delivered talks (day-of live-blog posts, category "Event", all high confidence)

Post headlines are the closest period equivalent of talk titles; recorded verbatim.

| speaker | talk (post headline, verbatim) | evidence (snapshot) | confidence | notes |
|---|---|---|---|---|
| T Chendil Kumar ("CK") | "T Chendil Kumar – usage of situation humor to strike a rapport with the audience" | in-chendil @20121216080645, posted Jan 22 2011 | high | "CK agenda for today's discussion is 'how we can use relevant situation humor in striking a rapport with the audience'"; first speaker after lunch |
| L Kannan | "L kannan – micro spinning: enabling integration of textile value chain" | in-kannan @20111006191631, posted Jan 22 2011 | high | Vortex micro-spinning; malkha "freedom fabric" |
| Dr. Santhosh Babu | "Dr. Santhosh Babu – MD of ELCOT and CEO of e-governance in tamil nadu" (descriptor headline; talk on e-governance/NeGP) | in-santhosh @20121216124006, posted Jan 22 2011 | high | **Almost certainly the same Santhosh Babu IAS already in repo `_speakers/santhosh-babu-ias.md` (BIL:Salem 2017)** — TN IAS officer, ELCOT MD then TN Handicrafts CMD. Flag for cross-linking, verify before merging records |
| Mr Ilango | "Mr Ilango – simple things are most difficult once you follow" (recipe-of-happiness talk) | in-ilango @20121216154752, posted Jan 22 2011 | high | blind entrepreneur/motivational speaker, ex-Madras University. NOT the same person as Chennai-2017's Ilango Vasudevan (different bios) |
| Chaganti V.K. Maithreya | "Mr. Chaganti V.K. Maithreya" (talk on philanthropy, theosophy, tsunami relief/empowerment projects) | in-maithreya2 @20121216124010, posted Jan 22 2011 | high | no discrete title in headline |
| Yashasvini Rajeshwar ("Yashaswini") | "Yashaswini: Youngest speaker at BILChennai" (personal story: writing, TEDxYouth, follow your heart) | in-yashaswini2 @20121216154813, posted Jan 22 2011 | high | spelled Yashasvini in profile, Yashaswini in live-blog |
| M Pradeep John | "Pradeep John:International Volleyball and beach volleyball player" (life-story talk) | in-pradeep @20120519041808, posted Jan 25 2011 | high | posted 3 days after event, same live-blog series |

### Announced speakers with published profiles but NO recovered day-of post (category "Speakers", med confidence they delivered)

| speaker | affiliation (verbatim from profile) | evidence (snapshot) | confidence |
|---|---|---|---|
| Atlee Chennaite | "Visual Communication graduate from Sathyabama University … director of Mugaputhagam … started assisting Director Shankar with his magnum opus Endhiran (Robot)" | in-atlee @20110117050026 (posted Jan 14 2011) | med (announced) — note: this is the Atlee who later directed Theri/Mersal/Jawan; do NOT add modern framing without disclosure |
| G. J. Siddharth | "working for Indusind Bank Ltd as Associate Manager, Trade Ops … India's first CDCS with Cerebral Palsy" | in-siddharth @20110123065441 (posted Jan 18 2011) | med (announced) |
| Praveen Chrispugg | artist/animator, "British Chevening scholarship … design and animation studio in chennai called Ideaheavens" | in-praveen @20110118072600 (posted Jan 11 2011) | med (announced) |
| Muthiah Ramanathan | "Director – Training of Mind Dynamics Center … President of the Hypnotique Circle – Chennai" | in-muthiah @20110105073738 (posted Dec 31 2010) | med (announced) |
| Pravin Shekar | "kreator-in-chief at 'krea' … Founder-trustee of 'The Social Catalyst'" | in-pravinshekar @20110105073742 (posted Dec 31 2010) | med (announced) |
| Werner Keil | "Agile Coach and Consultant at emergn … committing member of Eclipse Foundation … Java Community Process" | in-werner @20120518154556 (profile posted **Feb 3, 2011 — after the event**) | **low-med / ambiguous**: profile postdates the Jan 22 event; may be late write-up of an actual speaker or prep for a never-held follow-up. Record only with caveat or hold back |

Anti-speaker note: **Sulekha** (`in-sulekha`) is filed under category **Sponsors** (Sulekha.com, sponsor) — not a speaker despite living in the same URL pattern.

Speaker-profile duplicates: chendil-kumar & kannan also have Dec 2010 profile posts (`in-chendil-2010`, `in-kannan-2010`) — same people as live-blogged above.

---

## 4. bil-chennai-2017-the-smart-city-conference (Jul 8, 2017)

Repo already has 6 speakers in front matter (gopi-mattel, dayal-nathan, chandrasekaran-j, vaidy-chandramouli, ilango-vasudevan, shriram-sanjeevi) + an agenda naming "Oscar, Kenneth", "Dilipan Bose", and a Subash Chandira bio sits in `$TMP/bil-chennai-2017-the-smart-city-conference-speakers.txt`.

Sources checked:
- Wayback `bilconference.com/event/bil-chennai-2017-...` @2017 (`chennai2017-event.html`) — identical to repo content.
- **Wayback `bilconference.in/2017/06/05/bil-chennai-2017-the-smart-city-conference` @20180622082459 (`in-chennai17.html`) — richer than repo.** Its Speakers section carries 10 bios.

### Speakers on the event's own bilconference.in page but MISSING from repo front matter

| speaker | affiliation (verbatim) | evidence | confidence | notes |
|---|---|---|---|---|
| Subash Chandira | "Project Manager At Coimbatore Smart City Limited … Team Lead for Government Of Tamilnadu in Pedestrianization of Commercial hub a WB PROJECT" | in-chennai17 @20180622082459 (also archived on bilconference.com speakers block) | med-high (announced on event site; not in repo `speakers:`) | bio already in $TMP speakers.txt |
| **Oscar Victor V. Lizardo** | "External Relations Officer, Project NOAH, Philipinnes [sic] … promotes Project NOAH as a tool for disaster prevention and mitigation" | in-chennai17 @20180622082459 | med-high | **This resolves the repo agenda's bare "Oscar"** (10:30 AM "Oscar, Kenneth" slot) — identification comes from the same event's own speaker section, not outside guessing |
| Dilipan Bose | "CEO, Cityrene, India" | in-chennai17 @20180622082459 | med-high | named in repo agenda (2:50 PM) but absent from repo `speakers:` list |
| C K Kumaravel | "CEO & Co-founder, Naturals Salon & Spa" | in-chennai17 @20180622082459 | med (announced; **not in the repo agenda at all**) | possibly the unnamed "KeyNote Speaker"/"Key Speaker Note" slot — that is speculation, record only the roster fact |

Still unresolved: **"Kenneth"** (10:30 slot, paired with Oscar) — no matching bio on either site; possibly a second Project NOAH member. **Left unidentified per hard rules.** No talk titles exist anywhere; the Topics & Themes list (already in repo) is the closest artifact.

---

## 5. bil-fairhope — BIL:Fairhope (Oct 22, 2016, Windmill Market, Fairhope AL)

Sources checked:
- Repo `_events/bil-fairhope.md` — organizer Alodia D Arnold; sign-up-board format ("All talks are first come first serve … schedule is made the day of").
- Wayback `event/bil-fairhope` @2018 (`fairhope-event.html`) — identical to repo.
- Web searches (event + venue + organizer; Gulf Coast press incl. Lagniappe/Courier angles) — zero coverage of the BIL event; only venue history (Windmill Market closed Apr 2018, later "The Mill").

**Nothing recoverable.** Day-of speaker board was never published online. Remaining lead (not done): facebook.com/bilfairhope photo archive.

---

## 6. bil-guanajuato-2016 — BIL:GTO (Sep 3, 2016, La Inundación de 1905, Guanajuato)

Sources checked:
- Repo `_events/bil-guanajuato-2016.md` — facilitators Cody Marx Bailey, Michael Cummings; section "Speakers & Talks: We will be announcing speakers shortly as we're notified of who is speaking."
- Wayback `event/bil-guanajuato-2016` @2018 (`gto-event.html`) — identical; the speaker announcement **never happened** on any archived capture.
- Wayback `bilconference.com/bil-guanajuato-2` @2018 (`gto-2.html`) — empty stub post by Michael Cummings.
- Spanish-language web search ("BIL Guanajuato", "BIL:GTO", venue, charla/ponentes) — nothing.

**Nothing recoverable online.** Note for the archive owner: the user (Cody Marx Bailey) co-facilitated this event — personal records/photos and the twitter.com/bil_gto account are the only likely remaining sources.

---

## 7. bil-paris — BIL:Paris (Jun 7–8, 2014, La Paillasse)

Sources checked:
- Repo `_events/bil-paris.md` — venue + contact Clément Epié (tempopublic@gmail.com). Contact is an organizer-type datum, not a speaker.
- Wayback `event/bil-paris` @2018 (`paris-event.html`) — "Organizers not listed." No body content.
- French web search ("BIL" + Paillasse + juin 2014, non-conférence, programme/intervenants) — venue history only; no programme, no attendees named. facebook.com/bilconffrance exists (not crawlable here).

**Nothing recoverable.**

---

## 8. bil-philippines-2017 — BIL:Philippines 2017 (Feb 11, 2017, Cebu)

Sources checked:
- Repo `_events/bil-philippines-2017.md` — organizer Jefferson Ombe; body just "Talks began at 1pm local time (GMT+8)."
- Wayback `event/bil-philippines-2017` @2018 (`philippines-event.html`) — identical, plus placeholder text "Add info about how to submit speaker submissions" (the page was never finished).
- Web search (Cebu, Jefferson Ombe) — only a LinkedIn profile matching the organizer's name; no event coverage.

**Nothing recoverable.**

---

## 9. bil-pil-2009 — BIL:PIL (Oct 30–31, 2009, SDSU BioScience Center, San Diego) — MAJOR RECOVERY

The event had its own WordPress site, **bilpil.com** (later domain-squatted; 2009–2010 captures are clean). CDX sweep: `phase3-wb/bilpil-cdx.txt`. This supersedes the thin pbwiki planning page.

Sources checked:
- `$TMP/phase1-pbwiki.md` PIL section (2 pre-event "Confirmed": Jen McCabe Gorman / OrganizedWisdom, Michael Phillips / MenssanaResearch; 11-name wishlist = NOT evidence).
- Wayback bilconference.com: `/conferences/bil-pil-2009` @2010, `/news/bil-pil-starts-tomorrow` @2010, `/past(-conferences)/bilpil-in-san-diego-ca`, `/tag/bilpil2009` @20110228120640, `/upcoming*/bilpil-2010-*`, `/event/bilpil-2009` @2018 (files `pil-*.html`).
- Wayback bilpil.com: `/2009/10/bilpil-roundup/` @20091214215019, `/2009/11/thank-you-whats-next/` @20091207164909, **`/bil-pil-2009/` retrospective @20100821044645**, `/about/organizers/` @20100304215433, home @Oct-Nov 2009 (files `bilpil-*.html`).
- 8 talk-video pages on bilconference.com `/videos/...` tagged `bilpil2009` (files `vid-*.html`, snapshots below).
- Web search: fightaging.org preview (Oct 2009), ma.tt (Matt Mullenweg) announcement, x.com/bilpil profile ("Healthcare Innovation Unconference … Oct 30-31 … SDSU BioSciences Center").

### Event stats & context (verbatim, bilpil.com `/bil-pil-2009/` @20100821044645 — post-event retrospective)

> "The inaugural year for BIL:PIL was a huge success, thanks to a great group of attendees, organizers, and sponsors. We had over 35 speakers, 100 attendees, and 1000 livestream viewers."

Verbatim, bilconference.com news post "BIL PIL starts tomorrow!" (@2010 capture):
> "BIL PIL, the healthcare unconference occuring after TEDMED, starts tomorrow in San Diego. … show up at 9am to San Diego State University. … We're also announcing BIL PIL 2010 will be in San Diego AND Boston next year."

(BIL:PIL 2010 San Diego/Boston: announced Nov 3, 2009; no evidence it ever took place — the two `upcoming` posts are empty shells.)

Location note: repo front matter says "San Diego, California & Washington D.C." — every period source (site, twitter, roundup, videos) says San Diego / SDSU only. The D.C. tie is unexplained in period sources; worth a caveat in the event file rather than silent trust.

### Delivered talks with titles — published talk-video pages, tag `bilpil2009` (all HIGH confidence; each page states "We held BIL:PIL 2009 on October 30-31, 2009 in San Diego at the San Diego State University's BioScience Center")

| speaker | talk title (verbatim) | evidence (snapshot) | confidence | notes (About-the-Talk excerpts verbatim below) |
|---|---|---|---|---|
| Dr. Daniel Kraft | Stem Cells … Hype, Hope or Reality | vid-kraft @20110910144854 | high | corroborated by period tweet: "IAmBiotech: Daniel Kraft just blew my mind at #bilpil – showed video of re-growing a beating rat heart from stem cells." |
| Dr. Philip (Steven) Low | Can Sleep Shed Light on the Brain's Dark Matter? | vid-low @20110310225323 | high | "Founder, Chairman, and CEO, NeuroVigil, Inc." |
| Tyler Willis | Capitalism and Activism for Healthcare Reform | vid-willis @20110910144227 | high | "Director of Marketing of Involver" |
| Todd Huffman | Full Digital Reconstructions of Brains | vid-huffman @20110910144011 | high | KESM / 3Scan talk. Todd Huffman is ALSO listed as a BIL:PIL organizer — organizer who spoke |
| David Hale | Pillbox – Identify Unknown Drugs | vid-hale @20110310225318 | high | "works for the NIH as the Project Manager of Pillbox" |
| Chia Hwu | Communities in Healthcare | vid-hwu @20110819145326 | high | "Community Manager for 23andme" |
| Andrew Hessel | Personalized, Open Source Therapies for Breast Cancer | vid-hessel @20110919102844 | high | Pink Army Cooperative |
| Scott Johnson | Open Collaboration Reinventing the Healthcare Industry | vid-johnson @20110919095951 | high | "founder and president of the Myelin Repair Foundation (MRF)" |

### Full speaker roster — bilpil.com post-event retrospective, verbatim ("The speakers this year included:", `/bil-pil-2009/` @20100821044645; same list in sidebar "Speaking at BIL:PIL 2009" on roundup @20091214215019)

All med-high (period retrospective; delivery per-person not individually documented except the 8 above + tweet-corroborated de Grey/Kraft):

1. Joe Trippi, Founder and Principal, Joe Trippi & Associates (@joetrippi)
2. Dr. Jason Hwang, Executive Director of Healthcare, Innosight Institute, and co-author of The Innovator's Prescription
3. Dr. Philip Steven Low, Founder, Chairman & CEO, NeuroVigil. Adjunct Professor, Stanford School of Medicine. MIT, Salk affiliate.
4. Dr. Stephen H. Friend, President, Sage Bionetworks
5. Dr. Aubrey de Grey, Chief Science Officer, SENS Foundation. — tweet corroboration: "IAmBiotech: Day 2 of #bilpil kicking off with great talk from Aubrey de Grey (#tedmed favorite)"
6. Dr. Daniel Kraft, Physician, Stanford Institute for Stem Cell Biology & Regenerative Medicine (@daniel_kraft)
7. Dr. David Rosenman, Director of Curriculum, Mayo Clinic Center for Innovation. Assistant Professor of Medicine, Mayo Clinic College of Medicine. (@davidrosenman)
8. Ben Goertzel, CEO and Chief Scientist, Novamente LLC (@bengoertzel)
9. Dr. Val Jones, CEO, Better Health (@drval)
10. David Williams, Founding Executive, PatientsLikeMe (@DSWIII)
11. Alexandra Carmichael, Co-Founder, CureTogether (@accarmichael)
12. Jen S. McCabe, CEO, Contagion Health (@jensmccabe)
13. Scott Johnson, President and Founder, The Myelin Repair Foundation (@MyelinRepairFdn)
14. Jay Drayer, CEO, CareFlash (@JayDrayer)
15. Ash Damle, CEO, MEDgle (@AshDamle)
16. Michael Weiner, CEO, Technology Innovations, LLC
17. Chia Hwu, Community Manager at 23andMe Research Revolution (@chiah)
18. Robert Stern, CEO, MedPageToday
19. David Hale, Project Manager, Pillbox. National Library of Medicine/NIH (@lostonroute66)
20. Kristi Miller Durazo, Senior Strategy Adviser, American Heart Association (@krash63)
21. Dr. Marya Zilberberg, President and CEO, EviMed, Adjunct Professor, School of Public Health and Health Sciences at the University of Massachusetts, Amherst (@murzee)
22. Guido David Núñez-Mujica, Computational Biologist, Diagen (@OSGuido)
23. Tyler Willis, Director of Marketing, Involver
24. Kimberly Barr, UnitedHealthcare / Harvard Business School (@barr_k)
25. Brent Pottenger, Healthcare Epistemocrat (@epistemocrat)
26. Ryan Howard, CEO, Practice Fusion (@practicefusion)
27. Juhan Sonin, Creative Director, Involution Studios Boston (@jsonin)
28. Paul To, CEO & Founder, emota.net (@paulto)
29. Beth Anne Baber, Founder & CEO, The Nicholas Conor Institute
30. Greg Fong, Ozzie Gooen, Daniel Lubarov, Ben Jones, First Place, Student Innovation Contest, USIT, CS Department, Harvey Mudd (group entry)
31. Andrew Hessel, Founder and Managing Director, Pink Army Cooperative
32. Jonathan Sheffi, Amgen / Harvard Business School (@sheffi) — also lead organizer (organizer who spoke)
Plus Todd Huffman (video evidence above) — on the organizers list, and his talk page confirms delivery; he is NOT in the retrospective roster text, illustrating the roster is not exhaustive ("over 35 speakers" vs 32 rostered).

### Organizers (verbatim, bilpil.com `/about/organizers/` @20100304215433 — do NOT record as speakers except where independently evidenced)

> "BIL:PIL 2009 organizers included: Jonathan Sheffi, Harvard Business School (@sheffi) • Maren Connary, ZooMedia (@MarenConnary) • Meg Klimen, UCSD (@tinkmk) • Meg Strout, Idearc Media (@ATasteForTea) • Alex Kawas, UCSD (@emp) • Todd Huffman, Biodesign Institute at AZ State University (@toddhuffman) • Cody Marx Bailey, Texas A&M (@superphly) • Bill Erickson, Texas A&M (@billerickson)"

### Reconciliation with pbwiki (phase 1)

- **Jen McCabe Gorman (OrganizedWisdom.com, "Confirmed" Feb 2009)** vs roster's **"Jen S. McCabe, CEO, Contagion Health"** — near-certainly the same person mid-career-move (she publicly went by both forms in 2009); record under the roster form with a cross-reference note, do not silently merge.
- **Michael Phillips (MenssanaResearch.com, "Confirmed" Feb 2009)** — **absent from the final post-event roster.** Do NOT record as delivered; keep only as a phase-1 pre-event footnote.
- The 11-name pbwiki wishlist: Aubrey de Grey materialized (roster #5); the rest did not (Jamie Heywood, Linda Avey, Indu Subaiya etc. are NOT on the final roster — PatientsLikeMe sent David Williams instead of Heywood; do not conflate).

Period blog links named on the retrospective page (fetchable in a future pass): "The BIL:PIL unconference: Challenges and opportunities", "#BILPIL: Unraveling a thread while re-weaving the tapestry".

---

## 10. bil-san-francisco-2017 — BIL SF (Jun 10, 2017, Gray Area, SF)

Repo body already contains the full confirmed-speaker schedule (22 talks, 10:15am–5:45pm) — **the richest event file of the 14; no `speakers:` front matter though.**

Sources checked:
- Wayback `event/bil-san-francisco-2017` @2018 (`sf-event.html`) — **verified byte-level same lineup as repo** (spot checks: Boshuizen, Duettmann, Hidysmith, Klinger, Manney, Morgenstern all present; ambiguous names print exactly as in repo: "Sloane Joie", "Ikka", "Anselm", "Guido Nuñez").
- YouTube search for BILSF 2017 recordings (event page promised MeVo livestream) — nothing findable on BILtalks or elsewhere.

| finding | note |
|---|---|
| No new speakers/talks | Wayback confirms repo content is the complete archived record |
| Ambiguous names | "Ikka", "Anselm", "Sloane Joie", "Guido Nuñez" left exactly as printed — per hard rules, no identity expansion. (Coincidence noted, not asserted: a "Guido David Núñez-Mujica" spoke at BIL:PIL 2009; do not merge without proof.) |

---

## 11. bildelhi-2018 — BIL:Delhi 2018 (Mar 24, 2018, SGGSCC, Delhi)

Repo already has 13 speaker slugs + `_speakers/*.md` bios exist for all of them.

Sources checked:
- Wayback `event/bildelhi-2018` @2018 (`delhi-event.html`) — full speaker write-ups (Nikhil "The Tabla Guy", Hina Bisht, Shreya Mehta, Nitibha Kaul, Nishant Khaneja, Anjali Lama, Komal Narang, Abhishek Mishra, Simran Khosla, Rahul Kaushik, RJ Sukriti, Sadak Chhap [trio: "Ankur, Shubham and Ashish"], Ritvik Arora) — **identical in substance to repo front matter + bios; nothing new.**
- Web search (SGGSCC, allevents.in ticketing) — no talk titles anywhere; the event was a college-fest-style speaker showcase, talks untitled.

**Nothing new recoverable. No talk titles exist.**

---

## 12. bilsalem-2017 — BIL:Salem 2017 (Jun 25, 2017, Grand Estancia, Salem TN, India)

Repo already has 12 speaker slugs; ~30 AI-researched bios in `_speakers/` cover this event (12 files match "Salem"). Task focus: talk titles.

Sources checked:
- Wayback `event/bilsalem-2017` @2018 (`salem-event.html`) — same roster+roles as repo (`salem-sections.json`); **no talk titles**.
- Wayback `bilconference.in/2017/06/05/bilsalem-2017/` @20180623173713 (`in-salem17.html`) — same TIME ZONE essay + details; one delta: organizer Haree Prasaad's role is styled "**Event Head**" there (repo says "Founder & President, BIL India").
- Web search, English + Tamil (சேலம் மாநாடு etc.), YouTube — no press coverage, no videos, no souvenir/program PDF. Only hit: a Facebook promo post ("First ever BIL conference at Salem…", facebook.com/imakerobots) — promo only, no lineup, not crawlable.

**Talk titles NOT recoverable.** Speaker roster stands as already in repo (roles-as-titles is the only period framing available).

---

## 13. biluganda — BIL:Uganda (Aug 18, 2016, Kampala)

Sources checked:
- Repo `_events/biluganda.md` — organizer Ali Tebandeke; body is one photo.
- Wayback `event/biluganda` @2018 (`uganda-event.html`) — identical shell.
- Web search — only the Facebook page (facebook.com/bilconfuganda, 74 likes) which is not crawlable here; no press, no speakers anywhere.

**Nothing recoverable.** Lead for a Facebook-capable pass: the event photo (`13920794_347247352329762_...jpg`) is an FB CDN filename — the page's 2016 photo album may show a speaker board.

---

## 14. bilvancouver-2018 — BIL:Vancouver 2018 (Apr 13–14, 2018, Subculture/Creative Coworkers, Railtown)

Sources checked:
- Repo `_events/bilvancouver-2018.md` — 6 organizers; body states the format explicitly.
- Wayback `event/bilvancouver-2018` @~2018 (`vancouver-event.html`) — identical.
- Press: Vancouver Is Awesome, "BIL is the poor man's TED and their logo is excellent" (Apr 11, 2018) — article body 403s and is not in Wayback at either URL; search-result summary only (unverbatim): confirms no pre-set lineup, day-of topic selection, "Chief Executive Unorganizer" title, and that the 2018 logo riffed on the City of Vancouver's abandoned rebrand. Treat those details as unverified color until the article can be captured.
- CBC piece is about 2015, not 2018.

**By design, no recoverable lineup** — the repo's own verbatim text is the authority:
> "We will be returning to our true unconference roots with a crowd assembled at 10am *avec* coffee and organic doughnuts to determine the topics of the day."

Repo bug noted (do not fix in this task): front matter `country: AF` — should be Canada; no `location:` field either.

---

# Roll-up

| event | new speakers | new talk titles | verdict |
|---|---|---|---|
| bil-pil-2009 | 32-name post-event roster (+Todd Huffman via video) | **8 titles w/ descriptions** | major recovery (bilpil.com + video posts) |
| bil-chennai (2011) | 13 profiled (7 live-blogged as delivered) + venue/theme | 4 headline-titles usable | major recovery (bilconference.in) |
| bil-chennai-2017 | 4 not in repo (Subash Chandira, **Oscar Victor V. Lizardo**, Dilipan Bose, C K Kumaravel); "Kenneth" unresolved | 0 | solid delta |
| bil-san-francisco-2017 | 0 (repo already complete; Wayback-verified) | 0 | confirmed |
| bildelhi-2018 | 0 | 0 (none exist) | confirmed |
| bilsalem-2017 | 0 | 0 (not recoverable) | confirmed |
| bil-act | 0 — and it's Tunis, not Australia | 0 | empty |
| bil-afghanistan | 0 (city=Kabul lead) | 0 | empty |
| bil-fairhope | 0 | 0 | empty |
| bil-guanajuato-2016 | 0 | 0 | empty (organizer = repo owner; personal records only hope) |
| bil-paris | 0 | 0 | empty |
| bil-philippines-2017 | 0 | 0 | empty |
| biluganda | 0 | 0 | empty (FB album lead) |
| bilvancouver-2018 | 0 (lineup never existed by design) | 0 | empty by design; `country: AF` repo bug flagged |
