# bilconference.com

BIL Conference — the ad-hoc, participant-powered unconference. Static Jekyll
site for GitHub Pages, restored from the WordPress multisite that ran
bilconference.com from 2008 to 2018.

## Provenance

Content was exported from the WordPress MySQL database during the 2026-08
decommission of the old server (droplet salvage archive,
`1-site-content/bilconference/`). The 4,557 casino-spam posts injected by the
attacker were excluded during that export; the 19 spam blocks injected into
real pages were stripped and logged. No PHP or executable code from the
compromised server is present — templates are written fresh, and every media
file was verified by magic bytes to be a genuine image.

Featured images (speaker photos, event logos) were recovered by resolving
`_thumbnail_id` references from the database dump. Each content file keeps its
`wordpress_id` and `original_url` in frontmatter for traceability.

## Structure

| Path | What |
| --- | --- |
| `_events/` | 56 events, 2008–2018, with dates, venue, organizers, sponsor/press refs |
| `_speakers/` | 269 speakers |
| `_talks/` | 160 talks, linked to event + speaker, many with YouTube video |
| `_organizers/` | 75 organizers (rendered inline on event pages) |
| `_sponsors/` | 32 sponsors (rendered inline on event pages) |
| `_press/` | 15 press mentions |
| `_speakers_2015/` | BIL 2015 Vancouver's own speaker roster (66) |
| `2014/`, `2015/` | Archived per-event sub-sites (2014/2015.bilconference.com) |
| `media/` | Original WordPress uploads (originals only; resize variants culled) |

## Adding content

Drop a markdown file in the right collection folder and push. A talk needs
`event:` and `speaker:` slugs in frontmatter to link up; a `youtube:` URL gets
an embedded player. See any existing file for the pattern.

## Local preview

```sh
bundle install
bundle exec jekyll serve
```

## Deploy

Push to `main`; GitHub Pages builds automatically. `CNAME` points at
bilconference.com.
