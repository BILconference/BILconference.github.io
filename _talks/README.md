# Talks

One markdown file per talk, rendered at `/talks/<slug>/`.

```yaml
title: "The Age of CryptoFinance"
event: bil-davos-2017        # slug in _events/ — links both ways
event_name: "BIL:Davos 2017" # display text (kept even if event is gone)
speaker: johann-gevers       # slug in _speakers/
speaker_name: "Johann Gevers"
video: "https://www.youtube.com/watch?v=..."   # YouTube or Vimeo URL
slides: "https://.../deck.pdf"   # optional slide deck URL
audio: "https://.../talk.mp3"    # optional audio recording URL
subjects: [money-and-crypto]     # keys from _data/topics.yml
session: "Saturday 14:00, Room A"  # optional schedule slot, display only
```

A `video:` URL renders an embedded player on the talk page (YouTube and
Vimeo both embed; other URLs render as a watch link), a thumbnail card on
`/videos/`, and a video badge in talk lists. `slides:` and `audio:` render
as resource links under the player. The body is the talk description.
