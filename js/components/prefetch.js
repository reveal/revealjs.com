import debounce from 'lodash/debounce';

export default () => {
  let loader = document.createElement('link');
  loader.setAttribute('rel', 'prefetch prerender');

  let prefetch = debounce((href) => {
    loader.setAttribute('href', href);
    document.head.appendChild(loader);
  }, 300);

  Array.from(document.querySelectorAll('a[href^="/"]')).forEach((link) => {
    link.addEventListener('mouseover', () => {
      prefetch(link.getAttribute('href'));
    });
  });
};
