/* Site search: loads /search.json (~750 records) and matches every
   query token against title + context + body, grouped by type. */
(function () {
  "use strict";
  var input = document.getElementById("site-search");
  var out = document.getElementById("search-results");
  var count = document.getElementById("search-count");
  if (!input || !out) return;

  var docs = null;

  function norm(s) {
    return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function render(q) {
    if (!docs) return;
    out.textContent = "";
    count.textContent = "";
    var terms = norm(q.trim()).split(/\s+/).filter(Boolean);
    if (!terms.length) return;
    var groups = {};
    var total = 0;
    docs.forEach(function (d) {
      var hit = terms.every(function (t) { return d._n.indexOf(t) !== -1; });
      if (!hit) return;
      (groups[d.g] = groups[d.g] || []).push(d);
      total++;
    });
    ["Speakers", "Talks", "Events"].forEach(function (g) {
      var items = groups[g];
      if (!items) return;
      var h = document.createElement("h2");
      h.className = "year-head";
      h.textContent = g;
      out.appendChild(h);
      var ul = document.createElement("ul");
      ul.className = "talk-list";
      items.slice(0, 50).forEach(function (d) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = d.url;
        a.textContent = d.title;
        li.appendChild(a);
        if (d.x) {
          var sp = document.createElement("span");
          sp.className = "talk-speaker";
          sp.textContent = " — " + d.x;
          li.appendChild(sp);
        }
        if (d.v) {
          var b = document.createElement("span");
          b.className = "badge";
          b.textContent = "▶ video";
          li.appendChild(document.createTextNode(" "));
          li.appendChild(b);
        }
        ul.appendChild(li);
      });
      out.appendChild(ul);
    });
    count.textContent = total ? total + (total === 1 ? " result" : " results") : "no matches";
  }

  function load() {
    if (docs) return Promise.resolve();
    return fetch("/search.json").then(function (r) { return r.json(); }).then(function (j) {
      docs = j.map(function (d) {
        d._n = norm(d.title + " " + (d.x || "") + " " + (d.b || ""));
        return d;
      });
    });
  }

  input.addEventListener("input", function () {
    load().then(function () { render(input.value); });
  });

  var q = new URLSearchParams(location.search).get("q");
  if (q) {
    input.value = q;
    load().then(function () { render(q); });
  } else {
    load();
  }
})();
