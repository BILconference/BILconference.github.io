# Phase 5 — Photo-sharing site sweep (BIL unconference)

Date: 2026-08-23. Method: live Flickr search/tag/user pages fetched via curl (search HTML embeds
`modelExport` JSON with per-photo license codes; parsed with `parse_flickr_search.py` in this dir),
plus WebSearch and Wayback probes for dead hosts. No images downloaded.

License codes verified per photo from Flickr's own data (0=ARR, 1=CC BY-NC-SA 2.0, 2=CC BY-NC 2.0,
3=CC BY-NC-ND 2.0, 4=CC BY 2.0, 5=CC BY-SA 2.0). Counts are Flickr's `totalItems` for the given
user+tag page — exact as of fetch date.

Event-date cross-check used `_events/` front matter: 2008 Mar 1-2 Monterey; 2009 Feb 7-8 CSULB;
2010 Feb 13-14 MOLAA; 2011 Mar 5-6 Queen Mary; 2012 Mar 2-4 Queen Mary; 2013 Mar 1-3 Long Beach;
2014 Mar 22-23 Five-Sixty Vancouver; 2015 Mar 20-22 Imperial Vancouver; BIL:LA 2015 Mar 7-8.

Tag-search totals (all users, live Flickr): bil2008=570, bilconf=323, bilconference=573 (multi-year),
bil2009=91, bil10=82, bil2010=18, bil2011=1, bil2012=12, bil2014=97 (incl. false positives),
bil2015=1, "BIL unconference" text=74, "BIL conference" text=173.
Zero results: bil2013, bil2016, bil2017, bil2018, bilconference2011, bilunconference, bilvancouver.

---

## BIL 2008 — Monterey (Mar 1-2, 2008) — RICHEST EVENT, ~470+ photos

| Photographer | Stream/tag URL | Count | License | Notes |
|---|---|---|---|---|
| mengwong (Meng Weng Wong) | https://www.flickr.com/photos/mengwong/tags/bilconf/ | 167 | **CC BY 2.0** | DSC_4xxx-5xxx series shot at the event (upload ids = Mar 2008). Biggest usable set. |
| michaelcummings (Michael Cummings — BIL organizer) | https://www.flickr.com/photos/michaelcummings/tags/bil2008/ | 111 | All Rights Reserved | Organizer's own set ("BIL 2008 Trip"). ARR by Flickr default — ask him directly; he later organized BIL Vancouver. |
| Elliottng (Elliott Ng) | https://www.flickr.com/photos/elliottng/tags/bil2008/ | 86 | **CC BY-NC-SA 2.0** | IMG_76xx-77xx series. |
| chrisheuer (Chris Heuer) | https://www.flickr.com/photos/chrisheuer/tags/bil2008/ | 63 | **CC BY-NC-SA 2.0** | Titled "BIL Unconference - NNN". No dedicated album; reachable via tag. |
| quinn (Quinn Norton) | https://www.flickr.com/photos/quinn/tags/bilconference/ | 43 | **CC BY-NC 2.0** | Titles "The BIL conference"/"BIL", Mar 2008 ids. |
| oddwick (Todd Huffman — co-founder) | https://www.flickr.com/photos/oddwick/tags/bilconference/ | 20 | **CC BY 2.0** | Spans 2008-2010 (promo "BIL - You're invited", shirts, 2010 venue shots). |
| gdruckman | https://www.flickr.com/photos/gdruckman/2332833862 | 1 | CC BY-NC 2.0 | "Loic Le Meur and me". |
| hahatango | https://www.flickr.com/photos/hahatango/3172178073 | 1 | CC BY 2.0 | Titled "BIL.conference", taken 2008-02-27 (2 days pre-event — signage/promo; verify before use). |
| icariancypher (rfitzpatrick), schersteve | via tags=bil2008 pages 2-3 | ~3 | All Rights Reserved | Minor. |

## BIL 2009 — CSU Long Beach (Feb 7-8, 2009) — ~90 photos

| Photographer | URL | Count | License | Notes |
|---|---|---|---|---|
| mikehedge (Mike Hedge) | https://www.flickr.com/photos/mikehedge/tags/bil2009/ | 49 | All Rights Reserved | IMG_8xxx series. Largest 2009 set but ARR. |
| martinboz | https://www.flickr.com/photos/martinboz/tags/bilconference/ | 22 | **CC BY-NC-SA 2.0** | 100_01xx.jpg series, Feb 2009 ids. |
| Chris the Omnologist | https://www.flickr.com/photos/35297037@N06/ (find via text search "BIL conference") | 8 | All Rights Reserved | Captions confirm BIL: "the schedule board.", "Todd tasking", "Cory & Reichart being interviewed". Camera date 2009-02-10 (clock offset). |
| marcusnelson (Marcus Nelson) | https://www.flickr.com/photos/marcusnelson/tags/bil2009/ | 4 (7 visible in global search) | All Rights Reserved | Titled "BIL Conference, Feb 7, 2009". |
| amoration (Evo/Realitycraft) | https://www.flickr.com/photos/amoration/tags/bil2009/ | 2 | CC BY-NC 2.0 | "Cyborg Panel @bil". |
| maltman23 (Mitch Altman) | https://www.flickr.com/photos/maltman23/3268343190 | 1 | **CC BY-SA 2.0** | IMG_4246, Feb 2009. |
| valdelane | https://www.flickr.com/photos/21015949@N02/3268076575 | 1 | CC BY-SA 2.0 | |
| revision3 | https://www.flickr.com/photos/revision3/3260430547 | 1 | All Rights Reserved | "Watch the BIL Conference LIVE on Revision3" promo card. |
| lucernea | https://www.flickr.com/photos/lucernea/3293336707 | 1 | All Rights Reserved | "the singularity is coming out their ears..." |

## BIL 2010 — MOLAA Long Beach (Feb 13-14, 2010) — ~85 photos

| Photographer | URL | Count | License | Notes |
|---|---|---|---|---|
| mikehedge | https://www.flickr.com/photos/mikehedge/tags/bil10/ | 53 | All Rights Reserved | IMG_0xxx-1xxx series (tag bil10, not bil2010). |
| oddwick (Todd Huffman) | https://www.flickr.com/photos/oddwick/ tags bil2010/bil10 | ~14 | **CC BY 2.0** | "BIL Venue" series (9) + event day shots ("Ravers", "$3 K", etc.). |
| toddography (neurmadic aesthetic) | https://www.flickr.com/photos/toddography/tags/bil2010/ | 8 | **CC BY-SA 2.0** | Titled "BIL2010". |
| jurvetson (Steve Jurvetson) | https://www.flickr.com/photos/jurvetson/4426526742 | 1 | **CC BY 2.0** | "BIL Conference 2010" — notable name, good pull-quote photo. |

## BIL 2011 — Queen Mary (Mar 5-6, 2011) — nearly nothing

- Lifeofreilly, https://www.flickr.com/photos/55598292@N00/5520618851 — "BIL 2011-15.jpg",
  taken 2011-03-05 (day 1, exact match), All Rights Reserved. Filename "-15" implies a larger
  series that was never posted/tagged. Only tagged photo on all of Flickr for bil2011;
  the organizers' `#bil2011` Flickr CC request (noted in phase1-2011.md) evidently went unanswered.

## BIL 2012 — Queen Mary (Mar 2-4, 2012) — ~25 photos

| Photographer | URL | Count | License | Notes |
|---|---|---|---|---|
| Henrico (Henri Laupmaa) | https://www.flickr.com/photos/henrico/tags/bil/ | 14 | **CC BY-NC 2.0** | IMG_64xx, taken 2012-03-04 (day 3, verified on photo page). |
| mattkim99 (Matt Bell) | https://www.flickr.com/photos/9055206@N06/tags/bil2012/ | 11 | All Rights Reserved | Titled "BIL conference 2012", taken 2012-03-02 (verified). |
| stareye2001 | https://www.flickr.com/photos/91952228@N00/8744106091 | 1 | All Rights Reserved | Tagged bil2012, uploaded May 2013 — verify content before citing. |

## BIL 2013 — Long Beach (Mar 1-3, 2013) — ZERO on Flickr

- No photos under any tag or text search. Only known period photography is press:
  Long Beach Post article "In The Spirit of TED, BIL Conference Takes Downtown Long Beach"
  (https://lbpost.com/esd/hi-lo/in-the-spirit-of-ted-bil-conference-takes-downtown-long-beach-2/)
  with photos credited "Photo by Dennis Dean" — press/ARR, link-only.

## BIL 2014 — Vancouver Five-Sixty (Mar 22-23, 2014)

| Photographer | URL | Count | License | Notes |
|---|---|---|---|---|
| plesko (Ryan Plesko) | https://www.flickr.com/photos/plesko/tags/bil2014/ (album "Amanda Palmer Ninja Vancouver Concert") | 73 | **CC BY-NC-SA 2.0** | CAUTION: all 73 are the Amanda Palmer #NinjaVan gig, Mar 19-20 at the Vogue — a BIL-week lead-in (BIL organizer Michael Cummings appeared on stage, per Georgia Straight), NOT the conference floor. Photographer tagged them bil2014. Use as "BIL week 2014" context only, clearly captioned. |
| John Biehler (retrocactus) | https://www.flickr.com/photos/retrocactus/13333869433 | 2 | **CC BY-NC-SA 2.0** | One IS from the BIL floor: "Hearing about non-invasive brain computer interfaces @bilcon…" — genuine BIL 2014 session photo. |
| luke.me.up | https://www.flickr.com/photos/lukemeup/ | 2 | All Rights Reserved | "Amanda Palmer & Jason Webley" (ninja gig, not BIL floor). |

## BIL 2015 — Vancouver Imperial (Mar 20-22, 2015)

- keepitsurreal, https://www.flickr.com/photos/keepitsurreal/16930145588 — "BIL Conference
  Vancouver #BIL2015", taken 2015-03-21 (day 2), caption "I learned a lot again this year at the
  BIL Conference." — **CC BY-SA 2.0**. Single photo, but licensed and self-confirming.

## BIL:LA 2015 (Mar 7-8, 2015) — probable single photo

- tatzelbrumm, https://www.flickr.com/photos/89067995@N00/16757764271 — IMG_20150307_135603,
  taken 2015-03-07 13:56 (day 1 exact date match), tagged bilconf, All Rights Reserved.
  No caption; probable but unconfirmed BIL:LA. Link-only at best.

## BIL Tunisia events

- biltunisia photostream https://www.flickr.com/photos/biltunisia — 200 photos,
  **CC BY-NC-SA 2.0** (license code 1 verified across the stream this sweep; the earlier
  phase3-tunisia-a.md noted the stream but not the license). Covers Tunisian community events.
- Sayada banner photo (already in phase3-tunisia-b.md):
  https://www.flickr.com/photos/92082113@N05/8650816099 (16 Nov 2012).

## 2016-2018 (Vancouver, LA, SF 2017, Delhi, Salem, etc.) — ZERO

No tagged Flickr photos for bil2016/bil2017/bil2018/bilvancouver or any text-search hits.
By these years event photography had moved to Facebook/Instagram (out of scope this sweep).

---

## Other platforms — all negative

- **Flickr groups**: no BIL group pool exists (group search "BIL conference" → 0 groups).
- **Official BIL account**: none. The 2013 bilconference.com theme shipped icons_flickr.png /
  icons_picasa.png but the homepage social block only linked YouTube/G+/Twitter/Facebook —
  the photo icons were unused theme assets.
- **Picasa / Google+**: services dead (2016/2019). BIL's G+ page (plus.google.com id
  117460888319236134702, linked from 2013 site) is gone; no Picasa BIL albums recoverable via
  Wayback CDX probes.
- **SmugMug / 500px / Photobucket**: site-restricted searches → nothing BIL-related.
- **Blogs**: hostilefork.com BIL-2010 post has no event photos (one product shot of a glass);
  Kevin Kelly's kk.org "BIL, the Unconference" (2008) uses FooCamp photos, not BIL.
- **False positives excluded**: "Beelden in Leiden (BiL)" sculpture fair (FaceMePLS, tag bil2014);
  "BIL Photography" @bilphotograph (145012089@N08 — 2016 portrait brand, no public photos);
  all "billa"/"billabong" noise.

---

## Integration options

**Directly usable (CC BY / BY-SA — attribution, share-alike where noted):** ~200 photos.
Best-in-class: mengwong's 167 CC BY photos of BIL 2008 (could illustrate the 2008 event page
richly), oddwick/Todd Huffman ~20 CC BY (2008-2010, and he's a co-founder), toddography 8 CC BY-SA
(2010), jurvetson 1 CC BY (2010), maltman23 + valdelane (2009), keepitsurreal 1 CC BY-SA (2015),
hahatango 1 CC BY (2008, verify subject). If the site embeds these, credit
"Photo: {name} (Flickr), {license}" with a link to the photo page, per CC terms.

**Usable if the archive is treated as non-commercial (CC BY-NC / BY-NC-SA):** ~500 more photos —
Elliottng 86 + chrisheuer 63 + quinn 43 (2008), martinboz 22 + amoration 2 (2009), Henrico 14
(2012), Biehler 2 + plesko 73 ninja-gig (2014), biltunisia 200. bilconference.com is a
non-commercial archive, so NC terms are satisfiable; SA variants require the page not to impose
extra restrictions on the images. Decision for the maintainer.

**Link-only (All Rights Reserved):** mikehedge 102 (2009+2010 — the largest 2009/2010 coverage),
michaelcummings 111 (2008 — but he is a BIL organizer: a permission ask could unlock the
second-biggest 2008 set), mattkim99 11 (2012), Omnologist 8 + marcusnelson 4 (2009),
luke.me.up 2 (2014), Lifeofreilly 1 (2011 — only 2011 photo anywhere; worth a contact ask since
the filename implies ~15+ unposted shots), tatzelbrumm 1 (LA 2015). Event pages can link
"Photos by X on Flickr" without embedding.

**Caption warnings:** plesko's 73 "bil2014" photos are the Mar 19-20 Amanda Palmer ninja gig,
not the conference — never present as BIL floor shots. hahatango and tatzelbrumm need visual
verification before any use beyond a link.

Raw fetched pages and the parser live in this directory (f-tag-*.html, u-*.html, p-*.html,
t-*.html, parse_flickr_search.py) for re-verification.
