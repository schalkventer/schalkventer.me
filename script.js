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
  Dracula: {
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