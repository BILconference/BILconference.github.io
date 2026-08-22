/* Client-side grid filtering. A page opts in with:
     <div class="filter-bar" data-filter-items=".person"
          data-filter-groups=".talk-list" data-filter-placeholder="…"></div>
   The input is created here so pages show nothing without JS.
   Matching is accent- and case-insensitive on each item's text. When a
   groups selector is given, groups with no visible items are hidden along
   with their preceding .year-head heading. */
(function () {
  "use strict";

  function norm(s) {
    return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  document.querySelectorAll(".filter-bar").forEach(function (bar) {
    var itemSel = bar.getAttribute("data-filter-items");
    var groupSel = bar.getAttribute("data-filter-groups");
    var items = Array.prototype.slice.call(document.querySelectorAll(itemSel));
    if (!items.length) return;

    var input = document.createElement("input");
    input.type = "search";
    input.placeholder = bar.getAttribute("data-filter-placeholder") || "Filter…";
    input.setAttribute("aria-label", input.placeholder);
    var count = document.createElement("span");
    count.className = "filter-count";
    count.setAttribute("aria-live", "polite");
    bar.appendChild(input);
    bar.appendChild(count);

    var texts = items.map(function (el) { return norm(el.textContent); });

    input.addEventListener("input", function () {
      var q = norm(input.value.trim());
      var shown = 0;
      items.forEach(function (el, i) {
        var hit = !q || texts[i].indexOf(q) !== -1;
        el.hidden = !hit;
        if (hit) shown++;
      });
      if (groupSel) {
        document.querySelectorAll(groupSel).forEach(function (g) {
          var empty = !g.querySelector(itemSel + ":not([hidden])");
          g.hidden = empty;
          var h = g.previousElementSibling;
          if (h && h.classList.contains("year-head")) h.hidden = empty;
        });
      }
      count.textContent = q ? shown + (shown === 1 ? " match" : " matches") : "";
    });
  });
})();
