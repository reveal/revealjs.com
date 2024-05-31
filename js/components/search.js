import lunr from 'lunr';
import trim from 'lodash/trim';
import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';
import setupHovers from 'components/hover.js';

// Based on:
// https://www.raymondcamden.com/2019/10/20/adding-search-to-your-eleventy-static-site-with-lunr

export default async () => {
  const SEARCH_RESULT_LIMIT = 3;

  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results');
  const searchShortcutModifier = document.querySelector(
    '.search-shortcut-modifier'
  );

  let docs;
  let index;

  async function load() {
    setState('loading', 'Loading...');

    let result = await fetch('/api/search.json');
    docs = await result.json();

    index = lunr(function () {
      this.ref('id');
      this.field('title');
      this.field('content');

      docs.forEach((doc, index) => {
        doc.id = index;
        this.add(doc);
      });
    });
  }

  let search = debounce((searchTerm) => {
    // Make sure we're loaded
    if (docs) {
      let results = index
        .search(searchTerm)
        .map((r) => {
          return docs[r.ref];
        })
        .slice(0, SEARCH_RESULT_LIMIT);

      if (results.length) {
        searchResults.innerHTML = results
          .map(renderSearchResult.bind(this, searchTerm))
          .join('');
        setupHovers('.search-result');
        setState('has-results');
      } else {
        setState('no-results', `No results for "${searchTerm}"`);
      }
    }
  }, 250);

  function renderSearchResult(searchTerm, result) {
    let searchTermMatcher = new RegExp(searchTerm.split(' ').join('|'), 'i');

    let title = highlightWords(result.title, searchTermMatcher);

    let content = '';
    let contentMatch = result.content.match(searchTermMatcher);

    if (contentMatch) {
      let start = contentMatch.index;
      let end = start + contentMatch[0].length;

      // Include surrounding text
      start = Math.max(start - 30, 0);
      end = Math.max(end + 110, result.content.length);

      let value = result.content.slice(start, end).trim();

      if (value.length > 0) {
        value = value.replace(/\s*[\n]+\s*/g, '\n');
        value = value.replace(/^\s+|\s+$/g, '');
        content = [
          '<p class="excerpt mt-2">',
          start > 0 ? '...' : '',
          highlightWords(value, searchTermMatcher),
          end < result.content.length ? '...' : '',
          '</p>',
        ].join('');
      }
    }

    return `
			<a href="${result.url}" class="search-result block z-10 m-0 p-2 outline-none border-2 border-transparent rounded focus:border-blue-400">
				<p class="font-medium text-base">${title}</p>
				${content}
			</a>
			<div class="divider border-t border-gray-200 my-2"></div>
		`;
  }

  function highlightWords(string, wordExpression) {
    return string.replace(new RegExp(wordExpression, 'gi'), '<mark>$&</mark>');
  }

  function setState(state, description) {
    searchResults.dataset.state = state;

    if (typeof description === 'string') {
      searchResults.innerHTML = `<span class="text-gray-500">${description}</span>`;
    }
  }

  let updateFixedPosition = throttle(() => {
    let bounds = searchInput.getBoundingClientRect();
    searchResults.style.top = Math.round(bounds.bottom) + 'px';
  }, 33);

  function show() {
    if (!isVisible()) {
      document.documentElement.classList.add('search-visible');
      document.addEventListener('mousedown', onDocumentMouseDown);
      document.addEventListener('keydown', onDocumentKeyDown);

      // Our search results are position fixed on small screens,
      // but on the homepage the header is pushed down from the
      // top of the screen... et voilà:
      if (
        document.querySelector('.header').offsetTop > 0 &&
        getComputedStyle(searchResults).position === 'fixed'
      ) {
        document.addEventListener('scroll', updateFixedPosition, {
          passive: true,
        });
        updateFixedPosition();
      } else {
        searchResults.style.top = '';
      }

      // Lazy-load the first time the search field is shown
      if (!docs) {
        load().then(
          () => {
            let searchTerm = searchInput.value.trim();
            if (searchTerm && isVisible()) {
              search(searchTerm);
            }
          },
          () => {
            setState('loading-error', 'Failed to load search data 😭');
          }
        );
      }
    }
  }

  function hide() {
    if (isVisible()) {
      document.documentElement.classList.remove('search-visible');
      document.removeEventListener('mousedown', onDocumentMouseDown);
      document.removeEventListener('keydown', onDocumentKeyDown);
      document.removeEventListener('scroll', updateFixedPosition);
    }
  }

  function isVisible() {
    return document.documentElement.classList.contains('search-visible');
  }

  /**
   * Moves focus between the search input & results.
   */
  function moveFocus(offset = 1) {
    let focusables = [
      searchInput,
      ...document.querySelectorAll('.search-result'),
    ];
    let index = focusables.indexOf(document.activeElement);
    let target = index === -1 ? focusables[1] : focusables[index + offset];

    if (target) target.focus();
  }

  searchInput.addEventListener('focus', show);
  searchInput.addEventListener('input', (event) => {
    show();

    let searchTerm = searchInput.value.trim();
    if (searchTerm) {
      search(searchTerm);
    } else {
      setState('no-term', 'Enter a search term');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (
      event.key === '/' ||
      (event.key === 'k' && (event.metaKey || event.ctrlKey))
    ) {
      searchInput.focus();
      searchInput.select();
      event.preventDefault();
    }
  });

  // only bound while search is visible
  function onDocumentKeyDown(event) {
    if (event.key === 'Escape') {
      searchInput.blur();
      hide();
    } else if (event.key === 'Enter') {
      searchInput.blur();
      hide();

      // If there are results, but no result is focused, open the
      // first one
      let results = document.querySelectorAll('.search-result');
      if (
        results.length &&
        document.activeElement.matches('.search-result') === false
      ) {
        window.location = results[0].getAttribute('href');
      }
    } else if (
      event.key === 'ArrowUp' ||
      (event.key === 'Tab' && event.shiftKey)
    ) {
      moveFocus(-1);
      event.preventDefault();
    } else if (event.key === 'ArrowDown' || event.key === 'Tab') {
      moveFocus(1);
      event.preventDefault();
    }
  }

  function onDocumentMouseDown(event) {
    if (!event.target.closest('.search')) {
      hide();
    }
  }
};
