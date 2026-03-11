const STORAGE_KEY = 'revealjs.com-theme';
const LIGHT_THEME_COLOR = '#f7fafc';
const DARK_THEME_COLOR = '#121214';
const THEME_QUERY = '(prefers-color-scheme: light)';

const root = document.documentElement;

function getStoredTheme() {
  try {
    const theme = window.localStorage.getItem(STORAGE_KEY);
    return theme === 'light' || theme === 'dark' ? theme : null;
  } catch (error) {
    return null;
  }
}

function getSystemTheme() {
  return window.matchMedia?.(THEME_QUERY).matches ? 'light' : 'dark';
}

function getResolvedTheme() {
  return getStoredTheme() || getSystemTheme();
}

function getThemeColor(theme) {
  return theme === 'light' ? LIGHT_THEME_COLOR : DARK_THEME_COLOR;
}

function updateThemeColor(theme) {
  const themeColorMeta = document.querySelector(
    'meta[name="theme-color"]:not([media])'
  );

  if (themeColorMeta) {
    themeColorMeta.setAttribute('content', getThemeColor(theme));
  }
}

function updateThemeToggleButtons(theme) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.dataset.theme = theme;
    button.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
    button.setAttribute('title', `Switch to ${nextTheme} theme`);
    button.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  });
}

function applyTheme(theme) {
  if (theme) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
  } else {
    root.removeAttribute('data-theme');
    root.style.removeProperty('color-scheme');
  }

  const resolvedTheme = theme || getSystemTheme();
  updateThemeColor(resolvedTheme);
  updateThemeToggleButtons(resolvedTheme);
}

export default function setupTheme() {
  const storedTheme = getStoredTheme();
  const mediaQuery = window.matchMedia?.(THEME_QUERY);

  applyTheme(storedTheme);

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const nextTheme = getResolvedTheme() === 'dark' ? 'light' : 'dark';

      try {
        window.localStorage.setItem(STORAGE_KEY, nextTheme);
      } catch (error) {}

      applyTheme(nextTheme);
    });
  });

  if (mediaQuery) {
    const onSystemThemeChange = () => {
      if (!getStoredTheme()) {
        applyTheme(null);
      } else {
        updateThemeToggleButtons(getResolvedTheme());
      }
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', onSystemThemeChange);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(onSystemThemeChange);
    }
  }
}
