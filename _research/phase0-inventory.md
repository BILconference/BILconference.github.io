# Phase 0 — Source Inventory (2026-08-23)

## Sources gathered (all in this tmp dir)

1. **former_speakers.md** — 17-line table from BILconference/BIL docs repo.
   ~11 speaker–year pairs: Amanda Palmer (2013), James Lyne (2013), Aubrey de Grey
   (2008, 2009, 2012), Jaan Tallinn (2012), Garrett Lisi (2008), Nina Hartley (2012),
   Brad Templeton (n.d.), George Whitesides (2012), Blake Mycoskie (2009),
   Cameron Sinclair (n.d.). Useful for corroboration, not primary.

2. **YouTube** — biltalks-channel.json (259 uploads + 5 live),
   biltalks-playlists.json + playlists/*.json (23 playlists, 319 entries):
   - BIL: The Early Years (2008-2011) — 16 videos ← key for flagship years
   - BIL2012: Main Stage (15), Space Stage (1), Masque Boiler Room (3)
   - BIL2013 Talks (13) + attendee videos (13)
   - BIL2014 Vancouver (11), BIL2014SF Mainstage (10) + Odd Jobs (11)
   - BIL2015 LA: Mainstage (22), Emerging Tech/Design (17), First Flash (7), Youth (7), Your Videos (3), Live (2)
   - BIL2016 LA: Talks (55), Main (21), Mobius (17), Meliorist (17); BIL2016 Vancouver (33)
   - BIL2018 LA: Day 1 (13), Day 2 (12)

3. **Wayback CDX** — cdx.txt / cdx-urls.txt (7,217 rows, 4,819 unique URLs).
   Hosts: bilconference.com (4361), 2015. (260), 2010. (75), 2014. (39), 2009. (27),
   2013. (19), beta. (15), uk. (12), m./2016. (3), tn./santacruz. (2), bilfst. (1).
   Key targets:
   - 2013.bilconference.com/speakers + /schedule ← flagship 2013
   - 2010.bilconference.com: ~16 per-talk posts "/2010/02/{speaker}-{title}" + /category/speakers
   - 2009.bilconference.com: 27 URLs (blog posts; talk-format, video-of-talks)
   - bilconference.com/2008/… 42 blog-post URLs (2008 era) + /2009/ 25
   - /event/: all 56 current event slugs + variants (bil-tn, biltn-tunisia, bil-la-2015…)
   - /speaker/ 271 & /talk/ 169 modern-site pages: mostly already harvested;
     20 archived talk slugs NOT in repo (see below), 10 speaker slugs all “-2” dupes/feed.
   - 2014.bilconference.com (Vancouver): assets only, no content pages archived.

4. **pbworks** — pbworks/*.html. Welcome page spam-vandalized (confirms BIL 2018 LA
   June 22–24 dates only). Organizers/Volunteer/What-We-Need are 1626-byte login stubs.
   Interactive-Experiences small (6.4KB), unexamined.

## 20 archived /talk/ slugs not in repo (candidate recoveries, event unknown yet)
become-more-creative…, ceremonial-activism…, cross-conflict-communication…,
finding-love-a-life-partner…, how-to-kill-your-3d-printing-startup…,
how-to-rescue-your-old-computer-using-linux…, im-ok-but-you-need-professional-help…,
let-your-emotions-and-intuition…, living-process-change-from-within,
nuts-and-bolts-of-whole-brain-emulation…, seeing-in-5-dimensions…,
talk-breaking-the-silence-using-books…, the-1-lie-about-3d-printing…,
the-internet-of-useless-things…, the-multi-billion-dollar-scam,
the-research-on-meditation-and-transcending…, transcending-trauma…,
understanding-the-purpose-of-jury-nullification…, were-all-gonna-be-rich-or-dead-asteroids…,
with-great-responsibility-comes-great-power… (full list: comm -13 repo-talks.txt archived-talks.txt)

## Current repo baseline
296 talks across 11 events (LA2016 60, 2012 52, Van2016 38, LA2015 37, Van2017 33,
LA2018 24, SF2014 17, Davos 14, Oakland 13, Flash LA 6). 402 speaker pages.

## Phase-1 targets (flagship, no talks today): bil-2008, bil-2009, bil-2010,
bil-2011, bil-2013, bil-2014 (Vancouver). Note: bil-2012 documented but YouTube
playlists may add videos; bil-sf-2014 has 17 talks but 21 playlist videos.
