# Media

The site's WordPress uploads at their original `YYYY/MM/` paths, referenced
in content as `/media/...`. `sites/6/` holds the uploads of the
2015.bilconference.com sub-site.

Images are size-managed by `scripts/optimize-media.sh` (run it after adding
any image):

- Originals are capped at 1600px on the longest side. Large photographic
  PNGs with no real transparency have been converted to JPEG.
- `thumbs/` mirrors the tree with 400px variants of every `photo:`/`logo:`
  referenced in front matter. Templates render grids and profile imagery
  from `thumbs/` (via `replace: '/media/', '/media/thumbs/'`); originals
  serve OpenGraph images and content bodies.
- Only referenced files are kept; unreferenced WordPress leftovers were
  removed. Keep filenames ASCII-only — accented names break reference
  scanning and URL encoding across Unicode normalization forms.
