document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("pub-search-input");
  var list = document.getElementById("pub-list");
  var emptyState = document.getElementById("pub-empty");
  var count = document.getElementById("pub-count");

  if (!input || !list || !emptyState) return;

  var cards = Array.prototype.slice.call(list.querySelectorAll(".pub-card"));

  function normalize(text) {
    return text.toLowerCase().replace(/\s+/g, " ").trim();
  }

  function filterPublications() {
    var query = normalize(input.value);
    var visibleCount = 0;

    cards.forEach(function (card) {
      var matches = !query || normalize(card.textContent).indexOf(query) !== -1;
      card.hidden = !matches;

      if (matches) {
        visibleCount += 1;
      }
    });

    emptyState.hidden = visibleCount !== 0;

    if (count) {
      count.textContent = visibleCount + (visibleCount === 1 ? " entry" : " entries");
    }
  }

  input.addEventListener("input", filterPublications);
  filterPublications();
});
