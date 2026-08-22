#!/bin/bash
# Idempotent media pipeline (macOS sips, no external dependencies):
#   1. Downscale any media image whose longest side exceeds 1600px.
#   2. Generate a 400px thumbnail under media/thumbs/ for every
#      photo:/logo: path referenced in collection front matter.
# Templates point grid/profile imagery at media/thumbs/ via
# `replace: '/media/', '/media/thumbs/'`; originals stay for
# OpenGraph images and content bodies. Run after adding images.
set -euo pipefail
cd "$(dirname "$0")/.."

MAX_DIM=1600
THUMB_DIM=400

while IFS= read -r f; do
  dim=$(sips -g pixelWidth -g pixelHeight "$f" | awk '/pixel/ {print $2}' | sort -n | tail -1)
  if [ "$dim" -gt "$MAX_DIM" ]; then
    sips -Z "$MAX_DIM" "$f" >/dev/null
    echo "downscaled: $f (was ${dim}px)"
  fi
done < <(fd -t f -e jpg -e jpeg -e png . media --exclude thumbs)

while IFS= read -r p; do
  src=".${p}"
  if [ ! -f "$src" ]; then
    echo "WARN: front matter references missing file $p" >&2
    continue
  fi
  thumb="media/thumbs${p#/media}"
  [ -f "$thumb" ] && continue
  mkdir -p "$(dirname "$thumb")"
  cp "$src" "$thumb"
  dim=$(sips -g pixelWidth -g pixelHeight "$thumb" | awk '/pixel/ {print $2}' | sort -n | tail -1)
  if [ "$dim" -gt "$THUMB_DIM" ]; then
    sips -Z "$THUMB_DIM" "$thumb" >/dev/null
    # re-encoding can inflate an already-small file; keep the smaller of the two
    if [ "$(stat -f%z "$thumb")" -ge "$(stat -f%z "$src")" ]; then
      cp "$src" "$thumb"
    fi
  fi
  echo "thumb: $thumb"
done < <(rg --no-filename '^(photo|logo): */media/' \
           _speakers _speakers_2015 _events _organizers _sponsors _press \
         | awk '{print $2}' | sort -u)
