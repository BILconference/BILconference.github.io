# Events

One markdown file per event, 56 in all, rendered at `/events/<slug>/`.

Frontmatter that matters:

```yaml
title: "BIL 2014"
logo: "/media/2016/02/bil-davos.png"
start_date: "2014-03-22"
end_date: "2014-03-23"
year: 2014                # used for grouping on the events index
country: CA               # two-letter code, drives the hero flag
location: "Vancouver, Canada"
venue: "Five-Sixty 560 Seymour Street"
facebook: ...             # social links
twitter: ...
organizers:               # rendered with photos where available
  - name: Michael Cummings
    slug: michael-cummings
    duties: Co-organizer
sponsors: [slug, ...]     # looked up in _sponsors/
press: [slug, ...]        # looked up in _press/
sections:                 # extra titled content blocks
  - subject: "Speaker Sign Up"
    info: "markdown text"
archive_url: /2015/       # link to an archived sub-site, if one exists
```

The body is the event description. Talks list themselves on the event page
by matching their `event:` slug.
