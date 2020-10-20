/*
 * Constant values
 */

const CSS_VARIABLES = [
    'background',
    'highlight',
    'highlight-inverse',
    'base',
    'base-accent',
    'primary',
    'primary-accent',
    'secondary',
    'secondary-accent',
    'tertiary',
    'tertiary-accent',
];

const THEMES = {
  Monokai: {
    background: '#282a36',
    highlight: 'white',
    'highlight-inverse': '#1e1f23',
    base: '#ccc',
    'base-accent': '#f8f8f220',
    primary: '#8be9fd',
    'primary-accent': '#8be9fd20',
    secondary: '#50fa7b',
    'secondary-accent': '#8be9fd20',
    tertiary: '#ff79c6',
    'tertiary-accent': '#8be9fd20',
  },
  Eclipse: {
    background: '#ffffff',
    highlight: '#0000c0',
    'highlight-inverse': '#efefef',
    base: '#3f55bf',
    'base-accent': '#7f9fbf',
    primary: '#552200',
    'primary-accent': '#55220020',
    secondary: '#006600',
    'secondary-accent': '#00660020',
    tertiary: '#7f0055',
    'tertiary-accent': '#7f005520',
  },
  'Vim Dark': {
    background: '#000000',
    highlight: '#55ff55',
    'highlight-inverse': '#000000',
    base: '#bbbbbb',
    'base-accent': '#bbbbbb20',
    primary: '#ffff55',
    'primary-accent': '#ffff5520',
    secondary: '#ff55ff',
    'secondary-accent': '#ff55ff20',
    tertiary: '#55ffff',
    'tertiary-accent': '#55ffff20',
  },
  Cobalt: {
    background: '#002240',
    highlight: '#ff9d00',
    'highlight-inverse': '#00000040',
    base: '#efc090',
    'base-accent': '#efc09020',
    primary: '#0088ff',
    'primary-accent': '#0088ff20',
    secondary: '#3ad900',
    'secondary-accent': '#3ad90020',
    tertiary: '#ff80e1',
    'tertiary-accent': '#ff80e120',
  },
  Solarized: {
    background: '#fdf6e3',
    highlight: 'black',
    'highlight-inverse': '#fffaee',
    base: '#657a81',
    'base-accent': '#657a8120',
    primary: '#2aa198',
    'primary-accent': '#2aa19820',
    secondary: '#b58900',
    'secondary-accent': '#b5890020',
    tertiary: '#d30102',
    'tertiary-accent': '#d3010220',
  },
}

var ROOT = document.documentElement;
var THEME_SWITCHER = document.querySelector('[data-interactivity="theme-switcher"]');

/*
 * Helper functions
 */

const updateTheme = (event) => {
  var value = event.target.value;
  
  CSS_VARIABLES.forEach(function (cssVariable) {
    ROOT.style.setProperty('--' + cssVariable, THEMES[value][cssVariable]);
  })
}

/*
 * Side-effects
 */

THEME_SWITCHER.addEventListener('change', updateTheme);

const details = document.querySelectorAll("details");

document.querySelectorAll("details").forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});