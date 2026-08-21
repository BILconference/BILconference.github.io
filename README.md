# bilconference.com

BIL Conference — the ad-hoc, participant-powered unconference. Static
Jekyll site for GitHub Pages, preserving 56 events across five continents
(2008–2018), 261 speakers, and 160 talks, 99 of them with video.

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
| `_speakers/` | 261 speakers |
| `_talks/` | 160 talks linked to event + speaker, many with YouTube video |
| `_organizers/` | 75 organizers (rendered inline on event pages) |
| `_sponsors/` | 32 sponsors (rendered inline on event pages) |
| `_press/` | 15 press mentions |
| `_speakers_2015/` | BIL 2015 Vancouver's own speaker roster (66) |
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
bundle exec jekyll serve
```

## Deploy

Push to `main`; GitHub Pages builds automatically. The site currently
serves at bilconference.github.io; restore the `CNAME` file (containing
`bilconference.com`) and switch `url:` in `_config.yml` when the domain's
DNS points at GitHub Pages.
