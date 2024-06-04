import setupHome from 'pages/home.js';
import setupDemo from 'pages/demo.js';
import setupSearch from 'components/search.js';
import setupHovers from 'components/hover.js';
import setupPrefetch from 'components/prefetch.js';
import setupNavigation from 'components/navigation.js';

import AnchorJS from 'anchor-js';

import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import MathJax from 'reveal.js/plugin/math/math.esm.js';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';

const PAGE_ID = document.body.dataset.page;

setupNavigation();
setupHovers('.header-nav a, .header-cta, .footer a, .sidebar a:not(.selected)');
setupAnchors();
setupPage();

if (document.readyState === 'complete') {
  setupAd();
} else if (document.readyState === 'interactive') {
  document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
      setupAd();
    }
  };
}

function setupPage() {
  setupInlineDecks();
  setupPrefetch();

  if (PAGE_ID === 'home') {
    setupHome();
    setupSearch();
  } else if (PAGE_ID === 'demo') {
    setupDemo();
  } else {
    setupSearch();
  }
}

function setupAd() {
  const adUnit = document.querySelector('#_carbonads_js');
  if (adUnit && adUnit.hasAttribute('data-src')) {
    const adSource = adUnit.getAttribute('data-src');
    adUnit.removeAttribute('data-src');
    adUnit.setAttribute('src', adSource);
  }
}

function setupAnchors() {
  // Set up link anchors
  const anchors = new AnchorJS();
  anchors.options = { placement: 'left', icon: '#' };
  anchors.add('.article>h2, .article>h3, .article>h4');
}

function setupInlineDecks() {
  // Inline example decks in the docs
  Array.from(document.querySelectorAll('.reveal-example')).forEach(
    (deckElement) => {
      // If this deck is paired with an input code block,
      // wrap them both in a shared container
      let code = deckElement.previousSibling;
      if (code.matches('pre')) {
        let wrapper = document.createElement('div');
        wrapper.className = 'reveal-example-wrapper';
        code.parentNode.insertBefore(wrapper, code);
        wrapper.appendChild(code);
        wrapper.appendChild(deckElement);
      }

      let config = {};

      if (deckElement.hasAttribute('data-config')) {
        config = JSON.parse(deckElement.dataset.config);
      }

      let deck = new Reveal(deckElement, {
        width: 900,
        height: 500,
        hash: false,
        scrollActivationWidth: null,
        respondToHashChanges: false,
        embedded: true,
        progress: false,
        keyboardCondition: 'focused',
        controlsTutorial: false,
        math: {
          config: 'TeX-AMS_HTML-full',
        },
        plugins: [Markdown, Highlight, Zoom, MathJax],
        ...config,
      });
      deck.initialize();
    }
  );
}
