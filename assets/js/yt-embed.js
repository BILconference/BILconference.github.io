/* Progressive enhancement: turn standalone YouTube links in page bodies into
   click-to-play players. Links keep working without JS. Only links that are
   the sole content of a <p> or <li> are converted, so prose links are left alone. */
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll(
    '.page-body a[href*="youtube.com/watch"], .page-body a[href*="youtu.be/"]');
  links.forEach(function (a) {
    var parent = a.parentElement;
    if (!parent || (parent.tagName !== 'LI' && parent.tagName !== 'P')) return;
    if (parent.querySelectorAll('a').length !== 1) return;
    // allow a short non-link prefix like a "10:55" timestamp, nothing longer
    var extra = parent.textContent.replace(a.textContent, '').trim();
    if (extra.length > 12) return;
    var m = a.href.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{6,})/);
    if (!m) return;
    var id = m[1];
    var label = (extra ? extra + ' — ' : '') + a.textContent.trim();

    var box = document.createElement('div');
    box.className = 'yt-lite';
    box.setAttribute('role', 'button');
    box.setAttribute('tabindex', '0');
    box.setAttribute('aria-label', 'Play: ' + label);
    var img = document.createElement('img');
    img.loading = 'lazy';
    img.src = 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg';
    img.alt = '';
    var title = document.createElement('span');
    title.className = 'yt-lite-title';
    title.textContent = label;
    var play = document.createElement('span');
    play.className = 'yt-lite-play';
    box.append(img, title, play);

    function activate() {
      var wrap = document.createElement('div');
      wrap.className = 'video-embed';
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1';
      f.title = label;
      f.allow = 'autoplay; fullscreen';
      f.allowFullscreen = true;
      wrap.appendChild(f);
      box.replaceWith(wrap);
    }
    box.addEventListener('click', activate);
    box.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });
    a.replaceWith(box);
    // the prefix now lives in the title bar; drop the leftover text node
    Array.prototype.forEach.call(parent.childNodes, function (n) {
      if (n.nodeType === 3 && n.textContent.trim()) n.textContent = '';
    });
  });
});
