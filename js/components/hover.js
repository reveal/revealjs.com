/**
 * Directional hover effect copied from https://hakim.se.
 */

let lastMouseX = 0,
  lastMouseY = 0;

let pointerDirectionX = 0,
  pointerDirectionY = 0;

let lastMouseLeave;

let transform = (element, x, y, scale) => {
  element.style.transform =
    'scale(' + scale + ') translate(' + x + 'px,' + y + 'px)';
};

let transformOrigin = (element, x, y) => {
  let tx = (x / element.offsetWidth) * 100;
  let ty = (y / element.offsetHeight) * 100;
  tx = Math.min(Math.max(tx, 0), 100);
  ty = Math.min(Math.max(ty, 0), 100);
  element.style.transformOrigin = Math.round(tx) + '% ' + Math.round(ty) + '%';
};

let getAnchorTransitionDirection = (fromAnchor, toAnchor) => {
  const fromRect = fromAnchor.getBoundingClientRect();
  const toRect = toAnchor.getBoundingClientRect();

  // Direction from edge-to-edge distance between boxes.
  // If boxes overlap on an axis, that axis contributes 0.
  let dx = 0;
  let dy = 0;

  if (fromRect.right <= toRect.left) dx = toRect.left - fromRect.right;
  else if (fromRect.left >= toRect.right) dx = toRect.right - fromRect.left;

  if (fromRect.bottom <= toRect.top) dy = toRect.top - fromRect.bottom;
  else if (fromRect.top >= toRect.bottom) dy = toRect.bottom - fromRect.top;

  // Fallback: overlapping/abutting boxes can yield a 0 vector.
  if (dx === 0 && dy === 0) {
    const fromCx = fromRect.left + fromRect.width / 2;
    const fromCy = fromRect.top + fromRect.height / 2;
    const toCx = toRect.left + toRect.width / 2;
    const toCy = toRect.top + toRect.height / 2;

    dx = toCx - fromCx;
    dy = toCy - fromCy;
  }

  const longest = Math.max(Math.abs(dx), Math.abs(dy)) || 1;
  return {
    x: (dx / longest) * 2,
    y: (dy / longest) * 2,
  };
};

let bindDirectionalHovers = (element, childSelector) => {
  let children = Array.from(element.querySelectorAll(childSelector));
  let hoverTimeout;

  element.addEventListener(
    'mouseenter',
    function (event) {
      clearTimeout(hoverTimeout);

      let localDirectionX = pointerDirectionX;
      let localDirectionY = pointerDirectionY;

      const fromAnchor = event.relatedTarget
        ? event.relatedTarget.closest('.r-anchor')
        : null;

      if (fromAnchor && fromAnchor !== element) {
        const direction = getAnchorTransitionDirection(fromAnchor, element);
        localDirectionX = direction.x;
        localDirectionY = direction.y;
      }

      // Move the children into their start positions
      children.forEach((childElement) => {
        transformOrigin(childElement, event.offsetX, event.offsetY);

        let scale = Date.now() - lastMouseLeave < 750 ? 1 : 0.7;

        childElement.classList.add('no-transition');
        transform(
          childElement,
          -16 * localDirectionX,
          -16 * localDirectionY,
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

      let localDirectionX = pointerDirectionX;
      let localDirectionY = pointerDirectionY;
      let localScale = 0.7;

      const toAnchor = event.relatedTarget
        ? event.relatedTarget.closest('.r-anchor')
        : null;

      if (toAnchor && toAnchor !== element) {
        const direction = getAnchorTransitionDirection(element, toAnchor);
        localDirectionX = direction.x;
        localDirectionY = direction.y;
        localScale = 1;
      }

      // Remove the hover effect and move the child in the
      // direction of the mouse
      element.classList.remove('hover');
      children.forEach((childElement) => {
        transformOrigin(childElement, event.offsetX, event.offsetY);
        transform(
          childElement,
          16 * localDirectionX,
          16 * localDirectionY,
          localScale
        );
      });
    },
    false
  );
};

document.addEventListener('mousemove', (event) => {
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
