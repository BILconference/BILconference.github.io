# Phase 5 — Video Discovery Sweep (beyond BILtalks)

Date: 2026-08-23. Method: Wayback CDX + page fetches (curl), yt-dlp flat-playlist enumeration, Vimeo simple API v2, DailyMotion API, archive.org advancedsearch, YouTube search.
"Linked?" = id appears in a `youtube:`/vimeo link in `_talks`/`_events`/`_speakers`/`_data` (284 ids extracted), cross-checked against `_research/videos-master.csv` and phase2/phase3 notes.

---

## Lead 1 — revision3.com/bil (BIL 2009)

**Finding: Revision3 streamed and posted RECORDINGS of 7 BIL 2009 talks; page + titles recovered, media not archived.**

- Press release (archived): revision3.com/blog/2009/02/03/revision3-to-stream-bil-live/ — "Revision3 … will stream the BIL 2009 conference live at www.revision3.com/bil … through a partnership with Revision3 and its hosting partner BitGravity … February 7-8, 2009 – in Long Beach, Calif." (Wayback 20091014232145).
- revision3.com/bil → 301 → revision3.com/content/bil/ (Wayback 20090313113629 and 20090414170308, identical) — a page of 7 embedded BitGravity players, each preceded by speaker/title text:

| # | player videoId | Speaker | Title on page | In repo? |
|---|---|---|---|---|
| 1 | 2720 | Alex Lightman | A Lever and A Place to Stand: How to Do Cool Things Around the World | talk exists (`a-lever-and-a-place-to-stand-…`), NO video |
| 2 | 2721 | Ben Huh | What's Funny about the Interwebs | talk exists (`whats-funny-about-the-interwebs`), NO video |
| 3 | 2722 | Blake Mycoski [sic; Mycoskie] | (no title printed) | speaker exists, no 2009 video |
| 4 | 2723 | Cameron Sinclair | Open Source Architecture: From TED Prize to reality | talk exists (`open-source-architecture-…`), NO video |
| 5 | 2724 | Eric Gradman | (no title printed) | speaker exists |
| 6 | 2725 | Joel Grus | Your Religion is False | video already linked (Vimeo 3575931) |
| 7 | 2737 | John Schloendorn | (no title printed) | speaker exists |

- Media: players loaded from bitcast-a.bitgravity.com via SWF + numeric videoId; CDX search of bitgravity.com shows **no archived BIL media files**. A 2014 recrawl of blip-style URLs redirects to unrelated files. **Recordings themselves: lost** (unless Revision3/Discovery archives resurface).
- YouTube searches for mirrors (Ben Huh BIL, Cameron Sinclair BIL 2009, Eric Gradman BIL, Garrett Lisi BIL…) found none.
- Value even without media: period-primary confirmation that these 7 talks were filmed — usable as sourcing for the 2009 line-up (esp. Blake Mycoskie, John Schloendorn, whose 2009 talks are thinly documented).

## Lead 2 — YouTube playlist PL69B83E8AEC486A42 (user mg315)

**SOLVED. Playlist is deleted from YouTube ("does not exist"), but the archived mg315 user page (Wayback 20140408174425) identifies it: playlist "BIL10" by Bill Erickson (mg315 = BIL co-founder Bill Erickson, channel UCgXGcxol5GOEOtCj1zUjnJg), containing exactly 4 videos** — all 62MileClub uploads:

| id | Title | Linked? |
|---|---|---|
| GyX2t2HxwPE | Space Colllison Avoidance, Will Marshall + Creon Levit talk @ BIL 2010 | yes |
| H78QmGSTYPw | BIL 2010 - Matt Bell - Hacking Your Sleep | yes |
| sDvRL2q_D64 | BIL 2010 Unconference - Eric Boyd, Wearable Electronics | yes |
| UDoou9xm3z8 | Eric Gradman  The Cloud Mirror: Uncomfortably Augmented Reality (0:44) | **NO — attachable to `_talks/the-cloud-mirror-uncomfortably-augmented-reality.md` (currently video-less)** |

No further 2010 footage behind this lead. 62MileClub's full channel was enumerated; no other BIL items beyond the above + an interview with Cody Bailey (9iWNtTVm9nY, already in videos-master).

## Lead 3 — Vimeo

**All 13 known 2009 Vimeo clips are STILL LIVE** (album 70246 deleted, clips survive). Uploaders identified via Vimeo API v2:

- 9 talk clips by **Jeriaska** (vimeo.com/jeriaska): 3461663, 3610985, 3946928, 3952342, 3565446, 3455516, 3942584, 3575931, 3592507.
- 2 by **Alex Peake** (vimeo.com/primer): 3710245, 3575136.
- 1 by **Ori Neidich** (vimeo.com/ori): 3203091 (crowd footage).
- 1 by **eric gradman** (vimeo.com/user1129850): 3157584 "I am not mostly a geek." (BESMOKE demo).

Full enumeration of all four accounts (274 + 8 + 113 + 6 videos):
- Jeriaska: no additional BIL clips — neighboring 2009 uploads are AGI-09, AGI-08 and Convergence08 talks (verified via descriptions). The 9 BIL clips are the complete set.
- Alex Peake: nothing further BIL.
- Ori Neidich: **one new clip — vimeo 3203164 "Wheeled mobile technology stand @ BIL"** (BIL 2009 crowd/scene footage, not a talk; not in repo).
- Gradman: 4370631 "The Cloud Mirror" is an installation demo (Apr 2009), not a BIL talk.
- Vimeo full-text search not scrapeable (bot-walled); WebSearch for site:vimeo.com BIL 2009/2010/2011 and BILPIL surfaced nothing further. **No BIL:PIL 2009 video found anywhere.**

## Lead 4 — oneclickwebcasting.com & qik.com/scobleizer (BIL 2008)

**Both confirmed dead ends for recoverable video.**

- oneclickwebcasting.com/webcasts.php (Wayback 20080309174508, one week after BIL 2008): page confirms "1-2 March 2008 — The BIL Conference. This is an alpha test of the new One Click Webcasting™ system…" — live webcast player only, no schedule, no archive links, no stream URL captured. Later captures of the site contain no BIL recordings.
- qik.com/scobleizer: index/listing pages captured (Dec 2007, Mar 2008, 2008-2011 history pages) but the Mar 14 2008 latest-videos capture contains no BIL items and qik per-video pages/media for the BIL window are not archived. Qik shut down 2014; content lost.
- Bonus find while checking Ustream: **ustream.tv/channel/bil-conference** (Wayback 20100411121043) — "Live-streaming content from the BIL Conference, Feb 7-8, 2009 … Total views: 402 … **This show hasn't recorded any videos yet**." Ustream = 2009 (not 2008 as assumed), live-only, nothing recorded. Dead end, definitively.

## Lead 5 — BIL Tunisia channel (@BILTunisia) full enumeration

295 videos enumerated (fresh listing saved to tmp/biltunisia-all.txt). **Only 22 of 295 are linked in the repo.** Attribution keyed by title hashtags + upload dates.

### New talk-level, named-speaker videos (unlinked; none in any _research doc unless noted)

**Events with NO `_events` entry and NO prior research mention — new event coverage:**

| Event (evidence) | id | Speaker / title | dur |
|---|---|---|---|
| **#BILAPBS** (~Jun 2015; APBS = private business school, Tunis) | rqqapdLp6q4 | Ahmed Ferchichi | 14:11 |
| | 2jyST2C7Euo | Faten Belguith | 18:20 |
| | -UYPMxNsYv0 | Mariam Touré | 15:48 |
| | fbW6PzNN2rs | Imene Thaghri | 8:15 |
| | fbDUVu3j-DA | Shaun de Klerk | 11:21 |
| | FvvuZsPnsB8 | Marwen Faidi | 10:23 |
| | -yo0dKDSWHQ | Hichem Hleli | 11:42 |
| | 1Cvy-YsphjA | Asma Ahmadi | 10:20 |
| | fgn9_YRUDnY | Fares Zéghidi | 2:41 |
| **#BILBoumhel** (~Jun 2015, "Small action, BIG difference") | 6Oaa2TpTSOk | Amine Draoui | 10:21 |
| | PIf110TaDjk | Helmi | 14:42 |
| | 6rz6-S0mlq4 | Ameni Riahi | 10:03 |
| | QgyU97HHNN4/eeW2Bh3MIFo/eNYPGzbXryw | Yasser Jradi #1-3 (music) | ~24 min |
| **#BILYouth** (Mar-Apr 2015) | GN9Mc-bJHFA | Oussama (session) | 2:01:39 |
| | F26jvZhV73I | Hedia Bhiri (auteur, JUGHURTA/SAWTOUNA) | 11:44 |
| | lwNIDH3ybdA | Mohamed Rached El Jomni (MedSirat) | 10:26 |
| | JMC3qQfeDaU | Haithem Elmir (infosec expert) | 21:18 |
| | sV5MjdFyPB0 | Emna Bedhiafi (JCI Hammamchatt) | 7:59 |
| **BIL Soliman** (Dec 2015; channel also shows a 5ème édition later) | z6Kkym-vD5c | Mohamed Aymen Romadhani | 6:49 |
| | _AviOaQEc8I, _2P4ZqEoBbg, 9gDDzj5TfC8, nAvRG72wZmk, 4guyYV3MVSU, IPVkdD_oCUw | 6 unnamed talks | 2:26-17:14 |
| **#BILAnime** 1st ed. (~Jul 2017) | NV_zHBWFJ1M | Opening | 14:09 |
| | A-_X111b2EM | Panel #1 — Waad Jouini | 28:38 |
| | Fc0_YjlfpvM | Panel #2 — Ahmed Touji | 35:02 |
| | eAEiWlDlDLc | Panel #3 — RaedD Luffy | 44:22 |
| | qwOgMxzmXEU | Panel #4 — Emna (CCDA Tunisia) | 54:21 |
| **#BILSoukra** | oMa5hqjJkJw | Nizar Chaari (TV host) au BILSoukra | 14:41 |
| **#BILWonder** (FSEG Sfax, Dec 2015) | nSooWGHKOfs | (organized by Wonder club) | 4:52 |

**Events already in `_events` — new attachable videos:**

| Event | id | Speaker / title | dur | note |
|---|---|---|---|---|
| bil-women (Nov 2014) | dO-OAWa3YmU | Mme Bhiri | 15:22 | none of the 2014 BILWomen videos are linked |
| | kqwSSwvJSFc | Mme Zaarfran | 15:34 | |
| | 5AxmnX4DL6A | Mme Chechia | 13:08 | |
| | fX2SjAF21MM | Dalila Yaakoubi | 6:55 | |
| | 043R7bPgZ0w | Ghada | 7:05 | |
| bilwomen-tunisia-2015 (probable) | Z3T1YGsp6qA | "07 - Sihem Ben Sedrine.mp4" | 19:34 | **matches the research-attested Sihem Bensedrine talk (UN Women article)**; uploads Sep/Dec 2016; medium-high confidence |
| | Tq72zuMNqNw | "05 - Mariem Mzoughi.mp4" | 14:06 | new speaker name if attribution holds |
| | g2o5EP1HQzc | "01  Mouna Messai" | 8:58 | new speaker name if attribution holds; numbering implies ≥7 filmed talks, only 3 uploaded |
| bil-ezzouhour | S5Jiq2pddhM | Med Amine | 6:20 | Argoubi talk already linked; this one is not |
| bil-lpbt (2014 ed.) | YkmJG8nN6_0 | Olfa Ben Mohamed: Which life will you live? | 9:30 | 2 of 5 LPBT-2014 talk videos are linked; these 3 are not |
| | 7PF7BsDWm1g | Rym El Guid: Just Do It | 20:41 | |
| | QcVp1oTiFSE | Open-Mic: Sadok Ben Amor | 3:48 | |
| bil-lpbt (2015 ed.) | XqBE5l7mpeM | Ahmed Ferchichi | 26:03 | 2015 edition has no event entry distinct from bil-lpbt |
| | 3Cq3dgJCqso | Aly Bouzwida: مقريتش عند مدب | 19:54 | |
| | 5JDXEmq0LJA | Vili Gosnack | 7:43 | |
| bil-mahdia | sQX1k5dR5Cs | "Les Speakers de BIL Mahdia" | 33:39 | compilation of the speakers; unlinked |
| bil-fo (Freedom Online, Jun 2013) | oeFZ3WfT2Xk | full 100-min event video | 1:40:12 | known in phase3 notes, still unlinked |
| bil-tn-2012/2013-era, event TBD | POvK8W-jla4 | Sonia Barbaria (Souk Ettanmia, BAD) | 27:16 | uploaded 2013-10-16, desc confirms real talk; event attribution open (Social-Forum-2013 window?) |
| bil-sayada | biAqNY9Z5a8, OLyqXixi_-s, UHqLoO8WLcE | 3 Arabic-titled #BILSayada talks | 14-22 min | probable mirrors of the already-linked "Sayada Tunisie" channel videos (QRPedia, transparence ANC, démocratie représentative) — dedupe before linking |

### Unnamed-footage clusters (event coverage, no speaker names)

| Cluster | ids/count | Attribution (evidence) |
|---|---|---|
| #BILManouba - 01…05 | TluN813TVGc, eBSZQyCgcTQ, qXq8SbAwxO0, A71Os_zaDcU, WOfubJnN90I (+2 performances) | BIL Manouba, uploads 2015-04-27 — **no event entry, no research mention** |
| BIL:LES "1st step" / "BIL Ecoles les Elites Sousse" | 13 videos (50Qws9ViNbU …) | BIL:LES Sousse — new event, unnamed sessions 1-11 min |
| BILEtathamen | 8 videos (UgZAH-AeggU …) + after-movie vnp5vNM9u8E | "Premier #BILTunisia sur la zone Etathman" — new event |
| Blackmagic "20000116" C0000-C0007 series | 12 files, ~110 min total (3raXzo5Fal0 …) | uploaded 2017-12-22; adjacent to "#BILGeek le jeudi 21 décembre" → **near-certain full recording of BILGeek (21 Dec 2017)** |
| BIL:LPBT 4th Edition 2018 | SCOWngC4yeQ (58:19) + Blackmagic "20000101" x5 + WP_20180624 x3 + BILIftar2018 | June 2018 cluster |
| WP_20180609 x4 + BILSieyssa a7XamNWGlhs | 5 files | 9 June 2018 event (BIL Sieyssa?) |
| MAQ00351-367 + MAQ00067/82-84 | 17+4 files | already documented in phase3 (BIL:ENIT + #BILKef raw footage) — not new |
| fkD9N0Wkw38 | orientation session, 67 min, uploaded Jul 2025 | modern BIL Tunisia educational session (post-archive era) |

## Lead 6 — the 38 unnamed bil-opengov videos

**Partial yes.** Rechecked live titles/descriptions on the channel:
- **QWIWMorj_Ms — "BIL:OpenGov : Hichem Ouertani - Participation Citoyenne" (13:13)** — sits in the numeric sequence where 00015 would be, i.e. one video HAS been retitled with a speaker name. First named civil-society speaker for bil-opengov. Unlinked.
- The series extends beyond phase3's 00000-00037: **BBbVNt7CxSs = 00038 (0:15), FOKn17KNmYM = 00039 (13:33), HjOTHJIUYZo = 00040 (5:06)** — 00039 is talk-length. All descriptions remain the generic "BIL:OpenGov - Cité des Sciences, Tunis le 21 Juin 2014"; no other speaker names surfaced. Numbers 00010, 00017-00019 absent from the channel.

## Lead 7 — general sweeps

### blip.tv (via Wayback) — **best 2008 metadata find of the sweep**

**blip.tv/bil-conference — an official "BIL Conference" show account — held 4 full BIL 2008 talk recordings** (posted 2008-09-13, CC BY-NC-SA, JSON metadata captured 2014-01-17):

| Title (verbatim) | dur | Media file (blip) | Status |
|---|---|---|---|
| Exceptionally Simple Theory of Everything - Garrett Lisi (BIL Conference, 2008) | 25:37 | Bilconference-ExceptionallySimpleTheoryOfEverythingGarrettLisiBILConf345.mov/.flv | **media LOST** — 2014 Wayback recrawl redirects to an unrelated file; not in Archive Team blip grab; no YouTube mirror found |
| Open source-style security for the physical world - Christine Peterson (BIL Conference, 2008) | 18:14 | Bilconference-OpenSourcestyleSecurityForThePhysicalWorldChristinePete401 | media LOST (same) |
| Social Bonding - Jonathan Sheffi and Lexi Bright (BIL Conference, 2008) | 17:49 | Bilconference-SocialBondingJonathanSheffiAndLexiBright727 | survives on YouTube as SophistRelation's 2-parter; **part 1 (OVYJacPmNEg) linked, part 2 (ORW2kDs7C3U) known in research but unlinked**. Bonus: gives Lexi's full name — **Lexi Bright** — and full talk description |
| What triggered the Cambrian Explosion - Chris Phoenix (BIL Conference, 2008) | 18:31 | Bilconference-WhatTriggeredTheCambrianExplosionChrisPhoenixBILConfere683 | media LOST (same) |

Repo impact: `_talks/an-exceptionally-simple-theory-of-everything.md`, `open-source-style-security-for-the-physical-world.md`, `the-cause-of-the-cambrian-explosion.md` currently have no video and provably WERE filmed (runtime + description recovered); `social-bonding.md` can gain part 2 + speaker full name.

### YouTube attendee-upload searches

New (absent from repo AND videos-master.csv AND research):

| id | uploader | dur | title | attribution |
|---|---|---|---|---|
| t_bdZUJT96M | Ed Wode | 22:01 | 2011 BIL Conference speech Parity Democracy | desc: "Speech **prepared** by Ed Wode for the 2011 BIL Conference … Queen Mary" — medium confidence it's the on-site delivery; DailyMotion mirrors exist (xjwjnh, xjwnm8) |
| Y4sXN9SXK7k | Windows to Sky | 5:51 | Mercy Street live at BIL | BIL 2013 Long Beach — "Windows to Sky Lounge at the BIL Conference"; performance footage |
| p6oSq_CGbr0 | Meg Strout | 2:15 | BIL : Los Angeles 2015 Conference Highlights | bil-los-angeles-2015 highlight reel |

Already accounted for in videos-master (no action): bu-37FEgDj4 (Ed Wode 2009 piece), ORW2kDs7C3U (see blip above — flagged unlinked), 9iWNtTVm9nY, _i2JgQLQR7Q, xW4Q4LHAZUI, KC0NQPJ50hQ, YfS37XreAa4, 9ER21VijVGE.

### Other platforms — zero-result leads (legitimate findings)

- **archive.org video search**: "BIL conference"/"BIL unconference"/bilconference/biltalks → 0 relevant items (218 false positives, Swedish "bil"=car etc.). No Archive Team blip capture of the BIL show media.
- **DailyMotion API**: only Ed Wode's own mirrors (x8tjke, xjwjnh, xjwnm8). Nothing else.
- **Ustream**: live-only channel, "hasn't recorded any videos" (see Lead 4).
- **Google Video**: platform defunct; general web search surfaced nothing not already covered.
- **BIL:PIL 2009**: no video found on any platform.

---

## Bottom line

- **New attachable talk-level videos with named speakers: ~45** — the big block is BIL Tunisia (only 22/295 channel videos linked): BILAPBS (9), BILYouth (5), BILBoumhel (3+3), BILAnime (5), BILSoliman (1 named + 6), BILWomen 2014 (5), BILWomen 2015 (3, incl. Sihem Ben Sedrine), BIL:LPBT 2014 (3) & 2015 (3), BILEzzouhour (1), BILSoukra (1), OpenGov Hichem Ouertani (1) + 00039/00040, Sonia Barbaria (1), Mahdia speakers reel, Freedom Online full video; plus Gradman Cloud Mirror clip (UDoou9xm3z8) for an existing video-less 2010 talk, Social Bonding part 2, Ed Wode 2011, Mercy Street @ BIL 2013, BIL:LA 2015 highlights, Vimeo 3203164 scene footage.
- **New event coverage (no `_events` entry, no research mention): 8+ Tunisia events with footage** — BILAPBS, BILBoumhel, BILYouth, BILManouba, BILSoliman (multi-edition), BILAnime, BILWonder, BILSoukra; plus unnamed-footage-only BIL:LES (Sousse), BILEtathamen, BILGeek (Dec 2017, ~110 min raw), BIL:LPBT 2018 / Sieyssa 2018 clusters, BIL:Tozeur/BILGrombalia/#BILLE after-movies.
- **BIL 2008/2009 filmed-talk records recovered (media lost): 11** — 4 blip.tv 2008 recordings (Garrett Lisi, Christine Peterson, Sheffi+Bright, Chris Phoenix; Social Bonding survives via YouTube) and 7 Revision3 2009 recordings (Lightman, Huh, Mycoskie, Sinclair, Gradman, Grus, Schloendorn; Grus survives via Vimeo).
- **Dead ends closed**: PL69B83E8AEC486A42 = Bill Erickson's 4-video "BIL10" playlist (all known); oneclickwebcasting (2008) and qik/scobleizer live-only, unarchived; Ustream 2009 never recorded; BitGravity media unarchived; archive.org/DailyMotion/BIL:PIL nil; all 13 2009 Vimeo clips still live (no re-hosting urgency, but album context gone).
