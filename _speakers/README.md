# Speakers

One markdown file per speaker, rendered at `/speakers/<slug>/` and listed
on the speakers grid.

```yaml
title: "Johann Gevers"
photo: "/media/2015/03/..."   # omit to show the placeholder silhouette
association: "..."            # role/affiliation line
excerpt: "Speaker BIL LA 2015"
```

The body is the bio. A speaker's talks appear on their page automatically
via each talk's `speaker:` slug.

Speakers from the BIL 2015 Vancouver sub-site carry extra fields:

```yaml
bil_2015: true                # lists them on /2015/speakers/ with a hero note
talk_title: "..."             # 2015 talk, kept inline rather than in _talks
talk_description: "..."       # rendered as "The talk" on the speaker page
redirect_from: /2015/speakers/<slug>/   # preserves the old URL
```
