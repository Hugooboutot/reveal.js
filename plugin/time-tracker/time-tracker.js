(function() {
  var config = {
    renderToConsole: true
  };

  function initialize() {
    setupStatus();
    Reveal.addEventListener('slidechanged', recomputeStatus);
  }

  var totalTime, startStamp, expectedElapseds = {};

  function recomputeStatus(e) {
    var id = e.currentSlide.getAttribute('id');
    var expectedElapsed = expectedElapseds[id],
        actualElapsed = Math.round((Date.now() - startStamp) / 1000);
    renderStatus(expectedElapsed, actualElapsed, totalTime, e.currentSlide, id);
  }

  function renderStatus(expectedElapsed, actualElapsed, totalTime, _, id) {
    var overshot = expectedElapsed && actualElapsed > expectedElapsed ?
      (actualElapsed - expectedElapsed) * 100 / expectedElapsed : 0;

    if (config.renderToConsole) {
      console.group(id);
      if (expectedElapsed) {
        console.log('%cExpected elapsed: %c', 'color: green', 'color: black', formatDuration(expectedElapsed));
      }
      console.log('%cActual elapsed:   %c', 'color: green', 'color: black', formatDuration(actualElapsed));
      console.log('%cOverall:          %c', 'color: green', 'color: black', (actualElapsed * 100 / totalTime).toFixed(2), '% of', formatDuration(totalTime));
      if (overshot > 0) {
        var color = overshot > 15 ? 'red' : (overshot > 10 ? 'orange' : 'blue');
        console.warn('%cOvershot:         ', 'color: ' + color, overshot.toFixed(2), '% (', formatDuration(actualElapsed - expectedElapsed), ')');
      }
      console.groupEnd(id);
    }
  }

  function setupStatus() {
    totalTime = 0;
    startStamp = Date.now();
    expectedElapseds = {};
    Array.prototype.forEach.call(document.querySelectorAll('section[data-duration]'), function(sec) {
      var id = sec.getAttribute('id');
      if (!id) {
        id = uniqueSectionId();
        sec.setAttribute('id', id);
      }
      expectedElapseds[id] = totalTime;
      totalTime += parseDuration(sec.getAttribute('data-duration'));
    });
    console.log('Total time:', formatDuration(totalTime));
  }

  // Support functions

  var REGEX_DURATION = /^(?:(\d+)m)?(?:(\d+)s?)?$/;

  function formatDuration(seconds) {
    var mins = Math.floor(seconds / 60), secs = seconds % 60;
    return mins > 0 ? (mins + 'm' + (secs > 0 ? secs + 's' : '')) : (secs + 's');
  }

  function parseDuration(text) {
    if (!text) {
      return 0;
    }

    return (text.match(REGEX_DURATION) || []).slice(1).reverse().reduce(function(acc, s, index) {
      return acc + (Number(s) || 0) * (index > 0 ? index * 60 : 1);
    }, 0);
  }

  var uniqueId = 0;

  function uniqueSectionId() {
    return "__section" + (++uniqueId);
  }

  initialize();
})();
