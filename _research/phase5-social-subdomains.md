# Phase 5 — Social media, wikis, community threads, unexamined subdomains

Researched 2026-08-23. Scope: the six never-opened `*.bilconference.com` subdomains from the CDX
inventory; Wayback captures of twitter.com/bilconf and facebook.com/BILConference; Wikipedia and
other wikis; Hacker News (Algolia API), Reddit, Quora, MetaFilter; Upcoming/Lanyrd/Plancast.
All fetched pages are saved under `$TMP/phase5/` (pages/, mobil/, cdx-*.txt);
moBIL abstracts/bios extracted to `$TMP/phase5/mobil-details-text.txt`.

Verdicts up front:

| lead | verdict |
|---|---|
| m.bilconference.com | **FLAGSHIP FIND** — "moBIL @ BIL2010" mobile schedule app: full 2-day BIL 2010 room/time grid + 35 session-detail pages with abstracts & speaker bios. ~20 talks/speakers NOT in phase1-2010 research. Repo currently has **zero** bil-2010 talks. |
| santacruz.bilconference.com | **NEW EVENT DISCOVERY** — BIL:SC 2010 ("BIL Santa Cruz"), May 1 2010, Baskin Engineering, UCSC. Not in `_events/`. Named schedule sketch (7 talks). Delivery unconfirmed. |
| uk.bilconference.com | **NEW (non-)EVENT** — BIL:UK 2010, planned for Oxford July 16-17 2010 after TEDGlobal. Strong evidence it **never took place**. Not in `_events/` (correctly, but worth a historical note). |
| beta.bilconference.com | Early-2009 WordPress build of the main site. Color only (Singularity Institute was fiscal sponsor of BIL 2009; naming credited to Huffman + Reichart von Wolfsheild). |
| bilfst.bilconference.com | Single 2014 capture of the generic BIL landing page — corroborates the 2014 event calendar incl. BIL:CASL (= "BIL Algeria", Batna, June 10-11 2014, already in repo). |
| tn.bilconference.com | 2016 deployment of the modern site shell ("Registration has been disabled"). No content. |
| twitter.com/bilconf (Wayback) | 6 usable captures 2008-2022. Color + corroboration; one possible **new event lead: "BIL:APBS"** (Tunisia, 2015) found nowhere else. |
| Wikipedia | Dedicated `BIL Conference` article + BIL sections in Todd Huffman, Megan Klimen, Curtis Yarvin, Charlie Glickman, Michael Hartl articles. Cites 4 press pieces the repo's `_press/` lacks. |
| Hacker News | 10 threads; one useful: Jayson Elliot self-confirming his 2009 talk video page. |
| Reddit / Quora / MetaFilter | Zero BIL content found. Legitimate dead end. |
| Lanyrd (Wayback) | 3 BIL pages (2009, BIL:PIL 2009, 2013). Corroboration only (Michael J. Laine listed for 2013 — already high-confidence). |
| Upcoming.org / Plancast | Nothing (upcoming.yahoo.com domain CDX scans time out / only "Billy Hill" noise; plancast filter empty). Dead end. |
| facebook.com/BILConference (Wayback) | ~2012 timeline capture, 710 likes; community posts only, no line-up data. |

---

## 1a. m.bilconference.com — "moBIL @ BIL2010" (FLAGSHIP)

A mobile web app ("moBIL") built by **BIL organizer Alex Kawas** ("© 2010 Alex Kawas"; "based on
the schedule created by you at #BIL10") serving the live BIL 2010 schedule. Captured mid-event/
just after (event was Feb 12-14, 2010, MOLAA Long Beach; captures 2010-02-15/17).

Key snapshots (all fetched, saved in `phase5/pages/` and `phase5/mobil/`):
- Grid (both days in one page): https://web.archive.org/web/20100215194143/http://m.bilconference.com/ (id_ raw fetched)
- Simple-phone version `/m`: 20100217062050 (identical content)
- 34 session detail pages `details?c=<code>` (codes C5-E48), each with **Talk Title / Speaker / Room / Day & Time / Abstract / Bio** — e.g. https://web.archive.org/web/20100217061753/http://m.bilconference.com/details?c=C10 (Brad Templeton). Full text: `phase5/mobil-details-text.txt`.

Structure: 3 rooms per day — **Fire Hose** (main), **Open Culture**, **JIL Conference** (the
women-focused track). Friday has 45 filled slots, Saturday ~35. Grid rows give exact 20-minute
time slots.

Names in the moBIL grid **absent from phase1-2010.md** (i.e., new BIL 2010 line-up evidence;
spot-check for accent/spelling variants before writing):

| talk | speaker | day/room |
|---|---|---|
| LavaAmp: Pocket PCR for Pennies | Guido Nunez-Mujica | Fri Fire Hose 10:20 |
| Building a Better IO | Anselm Levskaya | Fri Fire Hose 11:20 |
| Quantum Theory is Incomplete / The Power of Love | Richard Gordon (QuantumTouch.com) | Fri 12:00 FH / Fri 11:40 JIL |
| Financial Alchemy: Proven Steps to Be a Money Magnet | Morgana Rae | Fri FH 15:40 + JIL 14:00 |
| Take the Web to the Rest of the World | Ann Bassetti, WebFoundation.org | Fri Open Culture 12:20 & 13:20 |
| Pennies for Payloads (to space) | Robert Jacobson, 62 Mile Club | Fri Open Culture 14:00 |
| You are The Message People Need / Getting Your Message Out | Delores Williams | Sat FH 9:00 / Fri JIL |
| Shifting World Events With Inner Peace | Michael Stephens | Sat FH 9:20 |
| Space Colllison Avoidance [sic] | Will Marshall and Creon Levitt, NASA | Sat FH 12:00 |
| The Age of Garage Biotech | Luke Nosek | Sat FH 12:40 |
| Notesharing: Collective Intelligence | Chris Boshuizen & Will Marshall, 4D Network | Sat OC 12:00 |
| Spacecraft Rapid Prototyping | Chris Boshuizen & Will Marshall, NASA | Sat OC 12:20 |
| The Open Primer | Alex Peake | Sat OC 13:00 |
| Defining the Modern Man | Rono Smith | Sat JIL 10:40 |
| 2012 - "The world is not going to end" | Brian David Hardin, knewways.com | Sat JIL 11:20 & 12:00 |
| From Aging to Amazing | Dr. Kat Cotter D.C. | Fri JIL 10:20 |
| Birth of the New World | Davin Infinity | Fri JIL 11:00 |
| 5000 Butterflies Project | Karla Kay | Fri JIL 13:00 |
| BLISS Within, via Guided-Imagery | Pam Michell | Fri JIL 15:40 |
| The Superwomen's Guide... Unleash YOUR Sensual Diva! | Amy Cheryl | Fri JIL 16:00 |
| Sacred Sound-Sacred Union (+ closing circle) | Jaqueline Marie | Fri JIL 16:40/17:00 |
| Hacking Your Sleep | Matt Bell | Fri FH 16:20 (listed "Anonymous", title names Bell) |

Also corroborates (already in phase1-2010): Jurvetson Rockets!, Templeton, Voss, Boyd, Pandya,
Gradman, Cockcroft, Lightman, Beibin/Cole, Bhakdi, Bushnell, Efti, Gomadam, Schellenberger,
Anderson, Webb, Bochnek, Ramparte, Fields, Kirkwood, Sierra Sullivan / Soraya Deen (JIL "Circle
and Movement" appears under both names, Fri=Soraya Deen, Sat=Sierra Sullivan), Tricia Greaves,
Monique Evans, Natalie Villalobos, Daniel Miller, Adrien Lamothe, Morgan Barnard, Michael
Heartsong, Amanda Abelove, Giovanni Re. MC/intro: Todd Huffman.

The 34 detail pages carry **abstracts and speaker bios** for many talks whose "post body not
archived" in phase1-2010 — direct fill-in material.

## 1b. santacruz.bilconference.com — BIL:SC 2010 (NEW EVENT, not in _events/)

WordPress site "BIL Conference - Santa Cruz / Minds Set Free", posts by **nick** (= Nick Ernst,
per wiki page attribution).

Timeline of the plan (all snapshots fetched):
- 2009-09-25 home (20090925203500): "tentatively ... December [2009] on the UC Santa Cruz campus"; theme "Technology and Society, Today and Tomorrow".
- 2010-01-30 /about (20100130204731): "will be held ... on **April 24th**"; theme now "**Innovative Solutions to Global Inequality**".
- 2010-04-07 home (20100407091756): "**BIL Santa Cruz 2010 will be May 1st** in Santa Cruz, CA. Register Now at EventBrite!" (bilsc2010.eventbrite.com); wiki-driven; hashtag #BILSC (twubs.com/bilsc capture 20100611: "Discuss, Brainstorm, Make Change on May 1st"); 3 rooms; World Café lunch.

pbworks wiki cluster (bilconference.pbworks.com — NOT covered by phase1-pbwiki.md, which has no
Santa Cruz content):
- Main page BIL:SC-2010 (capture 20101113194621): "Date: May 1st, 2010, 9am to 5pm. **Location: Baskin Engineering, UCSC Campus**". Last edited by **Nick Ernst**.
- **Schedule Sketch** (20100603192146, last edited by **Melanie Swan** ~early May 2010) — named talks:

| time | speaker | talk |
|---|---|---|
| 10:15 | James Davis | The HPU: How lazy coders will crack poverty |
| 10:45 | K. C. Wang | Localizing Social Enterprises Internationally |
| 11:30 | Dino Karabeg | How to avoid trying to dry the floor with a towel, in a cabin of a sinking ship |
| 12:00 | Nick Ernst | Roadmapping the Fab Revolution |
| 2:00 | Ryan Kabir | Converting interest into action |
| 2:30 | Miguel Aznar | Technology: Who benefits? Who pays? |
| 3:00 | Melanie Swan, Raymond McCauley | Democratizing the Genome |
| unconfirmed | Kartik Gada; John Brennan | — |

- Delivery: **unconfirmed**. Video page ("link footage here... official page when all of our
  official recording is processed") and post-event Projects table were never filled; twubs
  archived capture has no tweet feed; web searches found no attendee account. Schedule edits by
  Melanie Swan dated ~1 month before the 2010-06-03 capture (≈ event week) suggest planning ran
  to the date. Recommend recording as an event with `delivery: unverified` or researching
  Nick Ernst / Melanie Swan (futurememes.blogspot.com has no May-2010 BIL:SC post surfaced).

## 1c. uk.bilconference.com — BIL:UK 2010 (planned, did NOT happen)

Tumblr ("UK BIL 2010"), 10 posts Sep 2009 - Feb 17 2010, captures 20100409084116 (home) +
20100411002355 (page 2 of 2 — complete). Pitch: "a community-organised TED fringe festival ...
under the BIL banner for the weekend following TED Global in Oxford on the **16th and 17th of
July 2010**". Origin: pitched at Russell Davies' Interesting 2009 (Sep 2009) by "Leo" (Leo Ryan)
and Henry [Cooke]; Twitter @ukbil2010; Google Groups bil-uk-organisers / biluk-announcements;
wiki bilconference.pbworks.com/BIL-UK-2010. Bill Erickson talked to the BBC about "#bil-uk"
(Feb 4 2010 post). Names in planning: Henry Cooke, Dave Stone, Leo Ryan, DJ Harris, Nick Burch,
Lloyd Davis, Mike Butcher (TechCrunch UK), David Rowan (WIRED UK) — all as helpers/suggestions.

Evidence it never happened:
- Wiki main page captures 20100603192144 and **20100719120305 (two days after the planned dates)** are identical planning text, "last edited 3-4 mos ago" (≈ Feb-Mar 2010).
- Schedule page (20100214131452) is an **empty grid** — no talk was ever scheduled; Speaker-suggestions page is entirely "Possible / Hypothetical" (Tom Watson MP, Aubrey de Grey, Ben Goldacre, Susan Blackmore etc. — suggestions only, never book as line-up).
- Final wiki state (capture 20200919072509): "last edited by **Henry Cooke** 10 years, 7 months ago" (≈ Feb 2010) — never touched again.
- Web searches: no account of a BIL:UK event occurring.

## 1d. beta.bilconference.com — 2009 site staging (color only)

WordPress build captured 2009-02-14/16 = the then-new bilconference.com (identical nav; posts
mirror the 2009 pre-event posts: talk-format, volunteer, wait-list, room-map). Nuggets:
- Sponsors page: "Donations go to the **Singularity Institute**, a 501(c)(3) ... co-sponsoring BIL" (checks payable "Singularity Institute" for "BIL Conference 2009"); sponsor contact HuffmanTM@gmail.com; "no alcohol is allowed at CSULB".
- About page names **Reichart von Wolfsheild** (with Todd Huffman) as proposer of the name BIL — a detail Wikipedia lacks.
- Conferences page: BIL 2009 "currently full" wait-list mechanics; rotating backronyms in the masthead ("Brilliance. Impromptu. Level.", "Beauty. Impromptu. Level.", "Brilliance. Illuminating. Life.").

## 1e. bilfst.bilconference.com (2014) and tn.bilconference.com (2016)

- bilfst (capture 20140703195304): the generic "BIL / Minds Set Free" landing page (presumably parked for the BIL:FST Tunisia event) whose Upcoming list corroborates 2014 dates: BIL PIL 2014 Sep 13 SF; BIL:TN 2014 Sep 7 Tunisia; **BIL Women - August 13**; **BIL Algeria - June 10th & 11th - Batna** (= repo's bil-casl, per phase3-tunisia-a — date corroborated); BIL Paris June 7; BIL LPBT June 1 Science City Tunis; BIL 2014 Mar 22-23 Vancouver; BIL SF 2014 Mar 1.
- tn (capture 20160429013628 → 302 to site shell; page saved): modern BIL site nav only, "Registration has been disabled." Footer "2007-2016 BIL Conference". No event content.

## 2. Twitter via Wayback (twitter.com/bilconf)

CDX: captures 20080303, 20090223, 20150816, 20160610, 20200511, 20220213 (fetched; 2020=2022
content, account dormant after 2018). @ukbil2010 never archived. Hashtag search pages: none
archived (search.twitter.com/#BIL10 CDX empty).

- 2008-03-03 capture: 6 tweets, all "New blog post" pointers (capping attendance, musicians, sponsors, 100+ attendees). 27 followers.
- 2009-02-23 capture: BIL 2009 ops tweets — "BIL Conferene begins in 30 minutes" (Feb 7), wiki pbwiki links, **companion accounts @bilorg (event info) and @bilvol (volunteers)**, bil.uservoice.com feedback site, "nearing 100 pre-planned talks" (Feb 4).
- 2015 capture (BIL2015 Vancouver era): emcee @artofthegroup; @shmalkan's brass band wake-up; Abdelkarim Benabdallah spoke about BIL Tunisia at BIL2015 Vancouver; retweet of Fred Navarro "Patterns of Adapting to Health" #bil2015LA (already in repo); **"BIL:APBS will be the first BIL Conference Tunisia session 100% English!"** — APBS appears in NO repo file and NO phase1-3 research file → open lead (possible unrecorded Tunisian event or renamed/never-held session; single source).
- 2016 capture (BIL:LA 2016): Tom Bell "Ulex: An Open Source Legal System" (with ow.ly livestream timestamp 3:59:00); Liam Kennedy ISS gadget talk (in repo); final Main Stage speaker "D. Cotter — B2H: Brands' Path To Success In Social Media" (check repo talk list); Phil Steele Photography album; "#BILLM9 organized completely and independently by young..." (= BIL:La Medina, repo has it); fundraiser: Bill and Ted's Excellent Adventure screening for BIL Vancouver.
- 2020/2022 captures (frozen at mid-2018): BIL LA 2018 detail — venue Chicken Coup Studios (in repo), livestream youtube KJCcq6C6bJw, Marie Curie film screening, speakers Keri Kukral + Kenneth Hughes (both in repo), **host Tomas Verde died summer 2018 (memorial Aug 18, 2018)**; BIL LPBT "1,500 participants in one day ... organized by high schoolers" (Teenergy, June 24 2018 weekend, same weekend as BIL LA 2018).

## 3. Wikipedia + wikis

- **en.wikipedia.org/wiki/BIL_Conference** exists (wikitext saved `phase5/wp-bil.txt`). Facts consistent with repo. Citations the repo `_press/` LACKS: (1) Ramie Becker, "Here's a concept: populism...", LA Times 2012-03-03 (ProQuest 925832126 — paywalled, no URL); (2) Chris O'Brien, "TED confab is speaking to the masses...", LA Times 2013-02-26; (3) Stephen Hui, "BIL and TED bring wildly different conferences to Vancouver", Georgia Straight 2014-03-11 (live: straight.com/life/73386/...); (4) Daniela Papi-Thornton HuffPost 2012-08-16 (listicle mention). Already held: HuffPost Gagnier 2010, NPR 2008, WSJ 2011, LB Post 2013, Fast Company 2015.
- Bio articles with BIL sections/mentions: **Todd Huffman** (BIL section, calls him 2008 co-founder), **Megan Klimen** (co-founder), **Curtis Yarvin** ("rebooting" talk at 2012 BIL — repo already has mencius-moldbug), **Charlie Glickman** (cites a bilconference.com speaker page), **Michael Hartl** (photo captioned "speaking about tau at the BIL Conference" — repo has the tau talk).
- Wikipedia "Unconference" article: does NOT mention BIL.
- P2P Foundation wiki: **no BIL page** (empty page-not-created). AdCiv/other wikis: nothing found. Kevin Kelly's kk.org "BIL, the Unconference" surfaced again — already used in phase1-2008.

## 4. Hacker News / Reddit / Quora / MetaFilter

HN (Algolia API, queries "BIL conference", "bilconference", "BIL unconference"):
- 10 + 9 hits, mostly recommendations. Useful: **jaysonelliot** (2012-02-20, item 3613016 + story 2150850 "Rethinking the 'modern' GUI"): "here's a talk I give ... http://www.bilconference.com/videos/rethinking-modern-gui-jayson-elliot/ That talk is from 2009" — self-confirmation that Jayson Elliot's 2009 talk (phase1-2009: "Lightful...", SCHED A Sat) had an official video page titled "Rethinking the modern GUI" on bilconference.com/videos/.
- 2008 story 124030 "BIL Conference - Minds Set Free" (2008-02-26, 1 pt) and comment 127444 (2008-03-02, "being held in Monterey after TED as a free alternative") — period corroboration of Monterey 2008.
- 2012 comments 3615799/3615954 recommend BIL 2012 (March 3-4) — date corroboration.

Reddit: old.reddit search API blocked; web search surfaced no BIL threads. Quora: none.
MetaFilter: two candidate threads fetched and grepped — zero BIL mentions. **Dead ends.**

## 5. Facebook (Wayback only)

facebook.com/BILConference capture (~July 2012, saved `fb-bil.html`): 710 likes, timeline
back to 2008-Founded; visible content is "Recent Posts by Others" (community chatter, July 2012)
— no line-up data. Deeper timeline requires JS; not recoverable from this capture. Dead end
beyond confirming the page's existence and age.

## 6. Upcoming / Lanyrd / Plancast (Wayback)

- Lanyrd: `lanyrd.com/2009/bil/` (BIL 2009, Feb 7-8, Long Beach, 2009.bilconference.com, backronym "Brilliance. Inspiration. Levity."), `lanyrd.com/2009/bilpil/` (BIL:PIL 2009, **30 October 2009, San Diego**, www.bilpil.com/bil-pil-2009/, "Breeding. Ingenious. Logic. Healthcare set free" — repo has Oct 30 San Diego ✓), `lanyrd.com/2013/bilconf/` (BIL 2013, 1-3 March, Long Beach; **1 listed speaker: Michael J. Laine @mlaine** — already high-confidence in phase1-2013; 2 attendees). Corroboration only.
- Upcoming.org: domain-wide CDX filters returned only "Billy Hill and the Hillbillies" noise; targeted queries timed out (504). Nothing found.
- Plancast: CDX filter for bil* returned nothing. Dead end.

## Open follow-ups

1. Write BIL 2010 talks from moBIL grid + detail abstracts/bios (reconcile with phase1-2010's 44-talk CAT list; watch spelling variants e.g. Nunez-Mujica, Levitt/Levit).
2. Decide whether to add `_events/bil-santa-cruz-2010.md` (planned May 1 2010, Baskin Engineering UCSC, organizer Nick Ernst, theme "Innovative Solutions to Global Inequality", schedule sketch of 7 talks; delivery unverified) and a BIL:UK 2010 historical note (planned Oxford July 16-17 2010, never held).
3. Chase "BIL:APBS" (Tunisia, 2015, "first 100% English session") — single tweet-era source; check Facebook fb.me/7vmsl2qn6 via Wayback or Tunisian phase-3 contacts.
4. Add missing press stubs: LA Times 2012-03-03 (Becker), LA Times 2013-02-26 (O'Brien), Georgia Straight 2014-03-11 (Hui).

(Checked: D. Cotter's "B2H: Brands' Path To Success..." from the 2016 tweets is already in
`_talks/b2h-brands-path-to-success-in-social-media-finding-and-becoming-one-wi.md`.)
