---
title: Advanced Settings
slug: advanced-settings
date: '2017-01-14 18:18:43'
wordpress_id: 1581
original_url: http://bilconference.com/advanced-settings/
permalink: /advanced-settings/
---

### Software

If you just want to use your webcam on your computer to talk to your audience, you do not need any special software. You only need to give the browser permission to use your webcam and microphone when starting your livestream. If however you want to have some sort of a presentation and be able to switch back and forth between a presentation and yourself, you will need some third party software.

OUR RECOMMENDATION

[OBS Project. Open Source Livestreaming](https://obsproject.com/)

For a full list of software options, check out the [complete software list from Google](https://support.google.com/youtube/answer/2907883?hl=en).

### Setting up Open Broadcast Software (OBS)

1. Copy the YouTube entry points from Ingestion Settings to your encoder.

  - Stream Name - This identifies your stream on YouTube's servers.
   - Primary Server URL - This is the main server where your stream will be ingested by YouTube.
   - Backup Server URL - This is the backup server where your stream will be ingested by YouTube.

2. Choosing to stream to the backup is recommended but requires double the outbound bandwidth (you are outputting a simultaneous redundant stream). So make sure that you have the internet bandwidth capacity.

  - Ideally, your backup stream should be on an entirely redundant physical encoder.

3. Configure your encoder using YouTube's recommended encoding settings.
 4. Configure your audio and video sources.

  - Start encoding.
   - If you're using a scheduled event, you'll need to start the event on YouTube too!

![](/media/2017/01/YOUTUBE-streams.jpg)

Notice that you only have to copy the "Stream Name" from YouTube to the "Stream Key" on OBS. Selecting YouTube and Gaming streaming from the drop down will auto populate the Primary and Backup streams for you.

![](/media/2017/01/Settings.jpg)
