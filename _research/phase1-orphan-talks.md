# Phase 1 — Orphan Talk Recovery (20 candidate slugs)

Source: Wayback Machine snapshots of `http://bilconference.com/talk/SLUG/`. All 20 candidate slugs
loaded successfully from genuine 200 snapshots (see `html/index.txt`, raw HTML preserved in `html/`).

**Headline finding: 16 of the 20 "missing" slugs are NOT missing talks.** The repo's talk files
truncate long slugs at ~80 characters (e.g. `...start-design-thinkin.md`), so `comm` against the
full-length archived slugs produced false positives. Each of the 16 was verified by reading the repo
file: title, speaker, and event all match the archived page. **4 talks are genuinely absent from the
repo** — all four from BIL:Vancouver 2016, all four with clear speaker + event on the archived page,
and all four speakers already have `_speakers/` files.

Descriptions below are VERBATIM from the archived pages (HTML entities decoded to plain characters:
`&#8217;` → ', `&#8211;` → –, etc.; no wording changes). Where a page had no description paragraph,
that is stated. On 2016-era snapshots the youtube embed iframe was empty (`/embed/` with no ID);
2026-era snapshots carry the video ID where one exists.

---

## A. Genuinely new talks (not in repo under any slug)

### 1. im-ok-but-you-need-professional-help-using-comedy-to-bust-stigma

- **Title:** I'm OK But YOU Need Professional Help: Using Comedy To Bust Stigma!
- **Speaker:** David Granirer → `/speaker/david-granirer/`
- **Event:** BIL:Vancouver 2016 → `/event/bil-vancouver-2016/`
- **YouTube:** none (embed iframe empty)
- **WordPress post ID:** 1196
- **Verbatim description:**
  > You have to be nuts to take counselor and stand-up comic David Granirer's Stand Up For Mental Health program, where he teaches stand-up comedy to people with mental health issues but the results can be life-changing! This hilarious presentation is part comedy and part education. David, who himself has depression, looks at how humor can build confidence and help fight the stigma around mental illness. Through video clips, you'll also get to see examples of his comics breaking down barriers by finding the lighter side of their mental health journeys.
- **Snapshot:** https://web.archive.org/web/20160216025701id_/http://bilconference.com/talk/im-ok-but-you-need-professional-help-using-comedy-to-bust-stigma/
- **Speaker in repo:** YES — `_speakers/david-granirer.md`. **Event in repo:** YES — `_events/bil-vancouver-2016.md`
- **Duplicate verdict:** NEW. No repo talk mentions Granirer, "Stand Up For Mental Health", or "bust stigma" (grep confirmed).

### 2. let-your-emotions-and-intuition-affect-your-financial-decisions

- **Title:** Let Your Emotions (and Intuition) Affect Your Financial Decisions.
- **Speaker:** Bonnie Foley-Wong → `/speaker/bonnie-foley-wong/`
- **Event:** BIL:Vancouver 2016 → `/event/bil-vancouver-2016/`
- **YouTube:** none (embed iframe empty)
- **WordPress post ID:** 1232
- **Verbatim description:**
  > How do we relieve the financial and economic stress that the world is under? It starts at the beginning – in the way we make financial decisions. Motivations, mindsets, emotion and intuition, and how we evaluate situations affect our decisions. The path to feeling happier and more satisfied with our financial decisions isn't about being more rational, but instead lies in the combination of analysis, emotion, body, and intuition.
- **Snapshot:** https://web.archive.org/web/20160216025706id_/http://bilconference.com/talk/let-your-emotions-and-intuition-affect-your-financial-decisions/
- **Speaker in repo:** YES — `_speakers/bonnie-foley-wong.md`. **Event in repo:** YES
- **Duplicate verdict:** NEW. No repo talk mentions Foley-Wong or "financial decisions" (grep confirmed).

### 3. living-process-change-from-within

- **Title:** Living Process: Change From Within
- **Speaker:** Caroline Smalley → `/speaker/caroline-smalley/`
- **Event:** BIL:Vancouver 2016 → `/event/bil-vancouver-2016/`
- **YouTube:** none (embed iframe empty)
- **WordPress post ID:** 1199
- **Verbatim description (4 paragraphs):**
  > I want to share an opportunity to be part of a story.
  >
  > It's a story based in Bergnek – Limpopo, South Africa – about using the needs and challenges of some of the worlds most underprivileged people, in manifesting opportunity, that's independent from the centralized institutions holding us back.
  >
  > Discover a boundless economy – birthed for the people; by the people – that will realize ways of working which can be replicated in communities throughout the world.
  >
  > What we can achieve has been cocooned for too long. Together we can change it. Together we will.
- **Snapshot:** https://web.archive.org/web/20160216030639id_/http://bilconference.com/talk/living-process-change-from-within/
- **Speaker in repo:** YES — `_speakers/caroline-smalley.md`. **Event in repo:** YES
- **Duplicate verdict:** NEW. No repo talk mentions Smalley, "change from within", or "Bergnek" (grep confirmed).

### 4. the-multi-billion-dollar-scam

- **Title:** The Multi-Billion Dollar Scam
- **Speaker:** Neale Bacon → `/speaker/neale-bacon/`
- **Event:** BIL:Vancouver 2016 → `/event/bil-vancouver-2016/`
- **YouTube:** none (embed iframe empty)
- **WordPress post ID:** 1192
- **Verbatim description:**
  > I have lost over 190 pounds with no pills, potions, shakes, surgery or shortcuts. I would like to share a bit of my story but also to let people know about the multi-billion dollar scam known as the diet industry.
- **Snapshot:** https://web.archive.org/web/20160216030655id_/http://bilconference.com/talk/the-multi-billion-dollar-scam/
- **Speaker in repo:** YES — `_speakers/neale-bacon.md`. **Event in repo:** YES
- **Duplicate verdict:** POSSIBLE DUPLICATE — unresolved, needs human review before a new talk file is created.
- **Note:** Repo has `_talks/results-not-typical.md` — also Neale Bacon, also BIL Vancouver 2016, but with no description, no youtube, no `wordpress_id`, no `original_url` (a sparse lineup-derived file). "Results Not Typical" is a diet-industry disclaimer phrase, so this is plausibly the same talk under another title — or a second Bacon talk at the same event. Attempted to settle it by comparing WordPress post IDs, but `bilconference.com/talk/results-not-typical` has ZERO Wayback captures (checked with/without trailing slash and with matchType=prefix), so no comparison is possible from the archive. The verbatim description and title above are solid period data for post ID 1192 either way; recommendation: either attach this description/title to `results-not-typical.md` if a human confirms they're the same talk, or add it as a new talk if a second source shows Bacon gave two talks. (`_talks/a-weighty-matter.md` also matched "diet industry" in grep but is a different talk: William Volk, BIL 2018 Los Angeles.)

---

## B. Already in repo under 80-char-truncated slugs (16 — false positives from slug comparison)

For each: archived data, then the repo file it matches. "Repo matches" = title, speaker, and event
in the repo file agree with the archived page.

### 5. become-more-creative-tap-into-your-childhood-creativity-and-start-design-thinking

- **Title:** Become More Creative: Tap Into Your Childhood Creativity and Start Design Thinking.
- **Speaker:** Meena Sandhu | **Event:** BIL:Vancouver 2016
- **YouTube:** https://www.youtube.com/watch?v=EJl8SIZmXZs
- **Verbatim description:**
  > Creativity and Innovation is a theme we consistently hear about in business and at an individual level. We all want to be more innovative and creative, but what's the psychology behind it all? How do we actually get ourselves thinking more creatively? How do we break down the perceptions of left and right brain? How do we find the creativity our childhood selves naturally possessed? Everyone has the potential for creativity. Tap into your creativity and learn to apply design thinking principles to your life.
- **Snapshot:** https://web.archive.org/web/20260416071601id_/http://bilconference.com/talk/become-more-creative-tap-into-your-childhood-creativity-and-start-design-thinking/
- **Duplicate verdict:** DUPLICATE of `_talks/become-more-creative-tap-into-your-childhood-creativity-and-start-design-thinkin.md` (title/speaker/event/youtube/description all match — description in repo is identical, period text).

### 6. ceremonial-activism-and-future-ancestors-building-community-through-storytelling-as-a-means-of-creating-stronger-legacies

- **Title:** Ceremonial Activism and Future Ancestors: Building Community Through Storytelling as A Means of Creating Stronger Legacies
- **Speaker (per archived page):** **Cecilia Wyss** → `/speaker/cecilia-wyss/`
- **Event:** BIL:Vancouver 2016
- **YouTube:** none | **Description:** none on page
- **Snapshot:** https://web.archive.org/web/20160216030609id_/http://bilconference.com/talk/ceremonial-activism-and-future-ancestors-building-community-through-storytelling-as-a-means-of-creating-stronger-legacies/
- **Duplicate verdict:** DUPLICATE of `_talks/ceremonial-activism-and-future-ancestors-building-community-through-st.md` (identical title + event).
- **⚠ SPEAKER DISCREPANCY (flag for human review, do not auto-fix):** the repo talk file credits `cease-wyss` / "Cease Wyss", but the archived period page credits "Cecilia Wyss" linking to `/speaker/cecilia-wyss/`. The repo contains BOTH `_speakers/cease-wyss.md` AND `_speakers/cecilia-wyss.md`. These may be the same person under two names or two different people — not adjudicated here per the misidentification rule.

### 7. cross-conflict-communication-how-to-eliminate-communication-breakdowns-before-they-eliminate-your-relationships

- **Title:** Cross Conflict Communication: How To Eliminate Communication Breakdowns Before They Eliminate Your Relationships
- **Speaker:** Den Bradshaw | **Event:** BIL:Los Angeles 2015
- **YouTube:** https://www.youtube.com/watch?v=xusU4P_HT5k | **Description:** none on page
- **Snapshot:** https://web.archive.org/web/20251116182052id_/http://bilconference.com/talk/cross-conflict-communication-how-to-eliminate-communication-breakdowns-before-they-eliminate-your-relationships/
- **Duplicate verdict:** DUPLICATE of `_talks/cross-conflict-communication-how-to-eliminate-communication-breakdowns-before-th.md` (matches; repo body is an AI summary, `summary_ai: true`).

### 8. finding-love-a-life-partner-using-science-technology-humans-have-been-pairing-off-for-millennia-you-can-do-this

- **Title:** Finding Love & a Life Partner using Science & Technology: "Humans have been pairing off for millennia — You can do this!"
- **Speaker:** Christine Peterson | **Event:** BIL:SF 2014
- **YouTube:** https://www.youtube.com/watch?v=-fn1PzTrb38 | **Description:** none on page
- **Snapshot:** https://web.archive.org/web/20260315072952id_/http://bilconference.com/talk/finding-love-a-life-partner-using-science-technology-humans-have-been-pairing-off-for-millennia-you-can-do-this/
- **Duplicate verdict:** DUPLICATE of `_talks/finding-love-a-life-partner-using-science-technology-humans-have-been-pairing-of.md` (matches; repo body is an AI summary).

### 9. how-to-kill-your-3d-printing-startup-a-cautionary-tale-of-hubris-sex-and-schadenfreude

- **Title:** How to Kill your 3d Printing Startup: a cautionary tale of hubris, sex and schadenfreude.
- **Speaker:** Bartosz Bos | **Event:** BIL:Vancouver 2016
- **YouTube:** https://www.youtube.com/watch?v=z1t72boDgQ4 | **Description:** none on page
- **Snapshot:** https://web.archive.org/web/20260315085451id_/http://bilconference.com/talk/how-to-kill-your-3d-printing-startup-a-cautionary-tale-of-hubris-sex-and-schadenfreude/
- **Duplicate verdict:** DUPLICATE of `_talks/how-to-kill-your-3d-printing-startup-a-cautionary-tale-of-hubris-sex-and-schaden.md` (matches).

### 10. how-to-rescue-your-old-computer-using-linux-and-change-the-world-more-powerfully-than-steve-jobs-ever-could

- **Title:** How to Rescue Your Old Computer Using Linux and Change the World More Powerfully Than Steve Jobs Ever Could
- **Speaker:** Michael Persimmon | **Event:** BIL:Vancouver 2016
- **YouTube:** https://www.youtube.com/watch?v=ePPSmok50hc | **Description:** none on page
- **Snapshot:** https://web.archive.org/web/20260315081607id_/http://bilconference.com/talk/how-to-rescue-your-old-computer-using-linux-and-change-the-world-more-powerfully-than-steve-jobs-ever-could/
- **Duplicate verdict:** DUPLICATE of `_talks/how-to-rescue-your-old-computer-using-linux-and-change-the-world-more-powerfully.md` (matches).

### 11. nuts-and-bolts-of-whole-brain-emulation-and-the-projects-that-are-putting-it-together

- **Title:** Nuts and Bolts of Whole Brain Emulation and the Projects that are Putting It Together.
- **Speaker:** Randal A. Koene | **Event:** BIL 2012
- **YouTube:** none (embed empty) | **Description:** none on page
- **Snapshot:** https://web.archive.org/web/20260515081103id_/http://bilconference.com/talk/nuts-and-bolts-of-whole-brain-emulation-and-the-projects-that-are-putting-it-together/
- **Duplicate verdict:** DUPLICATE of `_talks/nuts-and-bolts-of-whole-brain-emulation-and-the-projects-that-are-putting-it-tog.md` (matches). (Page's `itemprop="author" Ryan Bailey` is the WP post author, not the speaker.)

### 12. seeing-in-5-dimensions-a-fuzzy-perspective-from-the-world-of-artificial-intelligence

- **Title:** Seeing in 5 dimensions: A fuzzy perspective from the world of artificial intelligence
- **Speaker:** Lauren Barghout Ph.D. | **Event:** BIL:Los Angeles 2015
- **YouTube:** https://www.youtube.com/watch?v=TlOouD5FXJc | **Description:** none on page
- **Snapshot:** https://web.archive.org/web/20260310091117id_/http://bilconference.com/talk/seeing-in-5-dimensions-a-fuzzy-perspective-from-the-world-of-artificial-intelligence/
- **Duplicate verdict:** DUPLICATE of `_talks/seeing-in-5-dimensions-a-fuzzy-perspective-from-the-world-of-artificial-intellig.md` (matches).

### 13. talk-breaking-the-silence-using-books-how-art-writing-can-be-used-as-weapons-against-rape-culture

- **Title:** TALK: BREAKING THE SILENCE USING BOOKS: How Art & Writing Can Be Used as Weapons Against Rape Culture
- **Speaker:** Mirabelle Jones | **Event:** BIL:Los Angeles 2015
- **YouTube:** https://www.youtube.com/watch?v=HMYwTyn27ss | **Description:** none on page
- **Snapshot:** https://web.archive.org/web/20260514095930id_/http://bilconference.com/talk/talk-breaking-the-silence-using-books-how-art-writing-can-be-used-as-weapons-against-rape-culture/
- **Duplicate verdict:** DUPLICATE of `_talks/talk-breaking-the-silence-using-books-how-art-writing-can-be-used-as-weapons-aga.md` (matches).

### 14. the-1-lie-about-3d-printing-bullshit-and-you-wont-believe-what-happens-next-with-this-one-weird-trick

- **Title:** The #1 Lie About 3D Printing Bullshit and You Won't Believe What Happens Next with this One Weird Trick!
- **Speaker:** Pablos Holman | **Event:** BIL:Vancouver 2016
- **YouTube:** https://www.youtube.com/watch?v=5MyfgYhj788 | **Description:** none on page
- **Snapshot:** https://web.archive.org/web/20260310100243id_/http://bilconference.com/talk/the-1-lie-about-3d-printing-bullshit-and-you-wont-believe-what-happens-next-with-this-one-weird-trick/
- **Duplicate verdict:** DUPLICATE of `_talks/the-1-lie-about-3d-printing-bullshit-and-you-wont-believe-what-happens-next-with.md` (matches).

### 15. the-internet-of-useless-things-or-why-500-billion-things-dont-need-to-be-connected

- **Title:** The Internet of Useless Things (or why 500 billion things don't need to be connected)
- **Speaker:** Nikolas Badminton | **Event:** BIL:Vancouver 2016
- **YouTube:** https://www.youtube.com/watch?v=25KGcLi7dSQ | **Description:** none on page
- **Snapshot:** https://web.archive.org/web/20260515084721id_/http://bilconference.com/talk/the-internet-of-useless-things-or-why-500-billion-things-dont-need-to-be-connected/
- **Duplicate verdict:** DUPLICATE of `_talks/the-internet-of-useless-things-or-why-500-billion-things-dont-need-to-be-connect.md` (matches).

### 16. the-research-on-meditation-and-transcending-changing-the-world-though-changing-individual-and-collective-consciousness

- **Title:** The Research on Meditation and Transcending – Changing the World Though Changing Individual and Collective Consciousness. ("Though" [sic] is on the original page)
- **Speaker:** William R. Ayling | **Event:** BIL:Vancouver 2016
- **YouTube:** none | **Description:** none on page
- **Snapshot:** https://web.archive.org/web/20160216025722id_/http://bilconference.com/talk/the-research-on-meditation-and-transcending-changing-the-world-though-changing-individual-and-collective-consciousness/
- **Duplicate verdict:** DUPLICATE of `_talks/the-research-on-meditation-and-transcending-changing-the-world-though-.md` (matches).

### 17. transcending-trauma-moving-from-reactivity-anxiety-and-aggressivity-to-enlightened-daily-living

- **Title:** Transcending Trauma: Moving From Reactivity, Anxiety And Aggressivity To Enlightened Daily Living
- **Speaker:** MIchael A. Gordon [sic — capitalization as on page] | **Event:** BIL:Vancouver 2016
- **YouTube:** https://www.youtube.com/watch?v=XrDs_YL2TP8 | **Description:** none on page
- **Snapshot:** https://web.archive.org/web/20260420150519id_/http://bilconference.com/talk/transcending-trauma-moving-from-reactivity-anxiety-and-aggressivity-to-enlightened-daily-living/
- **Duplicate verdict:** DUPLICATE of `_talks/transcending-trauma-moving-from-reactivity-anxiety-and-aggressivity-to-enlighten.md` (matches, including the "MIchael" typo).

### 18. understanding-the-purpose-of-jury-nullification-and-introducing-a-plan-to-spread-that-knowledge

- **Title:** Understanding the Purpose of Jury Nullification and Introducing a Plan to Spread that Knowledge
- **Speaker:** Kai Chang | **Event:** BIL 2012
- **YouTube:** none (embed empty) | **Description:** none on page
- **Snapshot:** https://web.archive.org/web/20260310100221id_/http://bilconference.com/talk/understanding-the-purpose-of-jury-nullification-and-introducing-a-plan-to-spread-that-knowledge/
- **Duplicate verdict:** DUPLICATE of `_talks/understanding-the-purpose-of-jury-nullification-and-introducing-a-plan-to-spread.md` (matches).

### 19. were-all-gonna-be-rich-or-dead-asteroids-are-coming-and-heres-what-you-can-do-about-them

- **Title:** We're All Gonna Be Rich (or Dead): Asteroids Are Coming and Here's What You Can Do About Them
- **Speaker:** Alex Cureton-Griffiths | **Event:** BIL:SF 2014
- **YouTube:** none (embed empty) | **Description:** none on page
- **Snapshot:** https://web.archive.org/web/20260315083607id_/http://bilconference.com/talk/were-all-gonna-be-rich-or-dead-asteroids-are-coming-and-heres-what-you-can-do-about-them/
- **Duplicate verdict:** DUPLICATE of `_talks/were-all-gonna-be-rich-or-dead-asteroids-are-coming-and-heres-what-you-can-do-ab.md` (matches).

### 20. with-great-responsibility-comes-great-power-dancing-with-the-magic-of-synchronicity

- **Title:** With Great Responsibility Comes Great Power – Dancing With the Magic of Synchronicity
- **Speaker:** Byron Go | **Event:** BIL:Los Angeles 2015
- **YouTube:** https://www.youtube.com/watch?v=o1WY2Vo0BG0 | **Description:** none on page
- **Snapshot:** https://web.archive.org/web/20260315084619id_/http://bilconference.com/talk/with-great-responsibility-comes-great-power-dancing-with-the-magic-of-synchronicity/
- **Duplicate verdict:** DUPLICATE of `_talks/with-great-responsibility-comes-great-power-dancing-with-the-magic-of-synchronic.md` (matches).

---

## Process notes

- Snapshot picks and CDX logs: `html/index.txt`, `html/cdx-log.txt` in this directory; raw HTML kept as `html/SLUG.html`.
- Speaker existence checked against `_speakers/` listing (`repo-speakers-full.txt`); every speaker named above has a repo file under the exact slug the archived page links to (except the Cease/Cecilia Wyss ambiguity flagged in §6, where both exist).
- Events referenced: `bil-vancouver-2016`, `bil-los-angeles-2015`, `bil-sf-2014`, `bil-2012` — all present as repo events.
- The slug-truncation false-positive mechanism means the remaining events/talks comparison lists built the same way should be re-checked with truncation-aware matching (compare on an 80-char prefix).
