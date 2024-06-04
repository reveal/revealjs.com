/**
 * Directional hover effect copied from https://hakim.se.
 */

let lastMouseX = 0,
  lastMouseY = 0;

let pointerDirectionX = 0,
  pointerDirectionY = 0;

let hoverTimeout;
let lastMouseLeave;

let transform = (element, x, y, scale) => {
  element.style.transform =
    'scale(' + scale + ') translate(' + x + 'px,' + y + 'px)';
};

let transformOrigin = (element, x, y) => {
  let tx = (event.offsetX / element.offsetWidth) * 100;
  let ty = (event.offsetY / element.offsetHeight) * 100;
  tx = Math.min(Math.max(tx, 0), 100);
  ty = Math.min(Math.max(ty, 0), 100);
  element.style.transformOrigin = Math.round(tx) + '% ' + Math.round(ty) + '%';
};

let bindDirectionalHovers = (element, childSelector) => {
  let children = Array.from(element.querySelectorAll(childSelector));

  element.addEventListener(
    'mouseenter',
    function (event) {
      clearTimeout(hoverTimeout);

      // Move the children into their start positions
      children.forEach((childElement) => {
        transformOrigin(childElement, event.offsetX, event.offsetY);

        let scale = Date.now() - lastMouseLeave < 200 ? 1 : 0.7;

        childElement.classList.add('no-transition');
        transform(
          childElement,
          -16 * pointerDirectionX,
          -16 * pointerDirectionY,
          scale
        );
        childElement.offsetHeight;
        childElement.classList.remove('no-transition');
      });

      // Wait until the next cycle and trigger the hover effect
      hoverTimeout = setTimeout(() => {
        element.classList.add('hover');
      }, 1);
    },
    false
  );

  element.addEventListener(
    'mouseleave',
    function (event) {
      lastMouseLeave = Date.now();

      clearTimeout(hoverTimeout);

      // Remove the hover effect and move the child in the
      // direction of the mouse
      element.classList.remove('hover');
      children.forEach((childElement) => {
        transformOrigin(childElement, event.offsetX, event.offsetY);
        transform(
          childElement,
          16 * pointerDirectionX,
          16 * pointerDirectionY,
          0.7
        );
      });
    },
    false
  );
};

document.addEventListener('mousemove', () => {
  if (lastMouseX && lastMouseY) {
    let ox = event.pageX - lastMouseX;
    let oy = event.pageY - lastMouseY;

    // let longestMovement = Math.max( Math.abs( ox ), Math.abs( oy ) );

    // let sx = ox/longestMovement;
    // let sy = oy/longestMovement;

    pointerDirectionX = ox / 6;
    pointerDirectionY = oy / 6;

    pointerDirectionX = Math.max(Math.min(pointerDirectionX, 2), -2);
    pointerDirectionY = Math.max(Math.min(pointerDirectionY, 2), -2);
  }

  lastMouseX = event.pageX;
  lastMouseY = event.pageY;
});

document.addEventListener(
  'scroll',
  (event) => {
    lastMouseX = null;
    lastMouseY = null;

    pointerDirectionX = 0;
    pointerDirectionY = 0;
  },
  { passive: true }
);

export default (selector) => {
  if (!/ipad|iphone|ipod|android|windows\sphone/gi.test(navigator.userAgent)) {
    // Wrap anchors in the markup we need for hover effects
    Array.from(document.querySelectorAll(selector)).forEach((element) => {
      element.classList.add('r-anchor');
      element.innerHTML =
        '<span class="r-anchor-label">' +
        element.innerHTML +
        '</span><span class="r-anchor-background"></span>';
    });

    Array.from(document.querySelectorAll('.r-anchor')).forEach((element) => {
      bindDirectionalHovers(element, '.r-anchor-background');
    });
  }
};
