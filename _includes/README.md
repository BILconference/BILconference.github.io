# Includes

`head-seo.html` — canonical URL, OpenGraph/Twitter cards (event logo,
speaker photo, or video thumbnail as the share image, falling back to the
BIL share card), and schema.org JSON-LD (`Event` on event pages,
`VideoObject` on talks with video).

`event-card.html` — grid card for an event (`event=`, optional
`show_date=true`), used by the home page and /events/.

`video-card.html` — thumbnail card for a talk with video (`talk=`), used
by /videos/.

`youtube-id.html` — parses `include.url` and sets `vid` in the caller's
scope; shared by video-card.html and the talk layout's embed. (The
client-side equivalent for body links lives in assets/js/yt-embed.js.)
