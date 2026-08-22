# bilconference.com

BIL Conference — the ad-hoc, participant-powered unconference. Static
Jekyll site for GitHub Pages, preserving 56 events across five continents
(2008–2018), 318 speakers, and 160 talks, 99 of them with video.

## Provenance

Content was exported from the site's WordPress multisite database when it
moved to static hosting in August 2026. Relationships (talk to event and
speaker, event to organizers, sponsors, and press) are resolved into
frontmatter slugs; featured images were recovered from the database's
attachment records. Each content file keeps its `wordpress_id` and
`original_url` for traceability. The design is the original bil-theme
(BILconference/bil-theme): sky blue `#2ea3f2` on white, Hind and Open Sans,
the neuron hero banner, and the dotted world map.

## Structure

| Path | What |
| --- | --- |
| `_events/` | 56 events with dates, venue, organizers, sponsor/press refs |
| `_speakers/` | 318 speakers (the BIL 2015 Vancouver roster is folded in, marked `bil_2015: true`) |
| `_talks/` | 160 talks linked to event + speaker, many with YouTube video |
| `_organizers/` | 75 organizers (rendered inline on event pages) |
| `_sponsors/` | 32 sponsors (rendered inline on event pages) |
| `_press/` | 15 press mentions |
| `2014/`, `2015/` | Archived per-event sub-sites (2014/2015.bilconference.com) |
| `assets/` | Stylesheet, flags, scripts, theme graphics |
| `media/` | Original WordPress uploads, referenced as `/media/...` |

## Adding content

Drop a markdown file in the right collection folder and push. A talk needs
`event:` and `speaker:` slugs in frontmatter to link up; a `youtube:` URL
gets an embedded player. See each folder's README for the fields.

## Local preview

```sh
bundle install
RUBYOPT="-r./scripts/ruby34-compat.rb" bundle exec jekyll serve
```

The `RUBYOPT` shim is only needed on Ruby >= 3.2 (see
`scripts/ruby34-compat.rb`); GitHub Pages builds without it.

After adding or changing images, run `scripts/optimize-media.sh` — it caps
originals at 1600px and generates the `media/thumbs/` variants the
templates use for grids (see `media/README.md`).

## Deploy

Push to `main`; GitHub Pages builds automatically. The site serves at
https://bilconference.com via the `CNAME` file, with `url:` in
`_config.yml` matching.
