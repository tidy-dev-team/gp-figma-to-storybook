/**
 * Genpact Design System tokens — extracted from DESIGN.md (DTCG format).
 * Single source of truth for all component styling.
 *
 * Usage:
 *   import { themeBlue, themeGray, shared } from '../theme/tokens';
 *
 * Pick the theme that matches the Figma component's theme mode:
 *   teal accent (#00aecf) → themeBlue
 *   orange accent (#fe9d00) → themeGray
 */

// ---------------------------------------------------------------------------
// ThemeBlue
// ---------------------------------------------------------------------------
export const themeBlue = {
  // Core brand
  mainColor:                    '#15223f',  // primary text / dark navy
  accentColor:                  '#00aecf',  // CTA / active indicators / step bullets
  focusColor:                   '#3bbcd4',  // focus ring

  // Header / navigation
  topHeaderBackground:          '#104683',
  topHeaderColor:               '#ffffff',
  topMenuBackground:            '#28588f',
  topSubHeaderBackground:       '#f2f6ff',
  topSubHeaderColor:            '#104683',
  hoverBackground:              '#f2f6ff',

  // Buttons
  buttonPrimaryBackground:      '#00aecf',
  buttonPrimaryHoverBackground: '#1190a8',
  buttonPrimaryActiveBackground:'#3bbcd4',
  buttonPrimaryDisabledBg:      '#eaecf0',
  buttonPrimaryDisabledColor:   '#98a2b3',
  buttonSecondaryFillBackground:'#f2f6ff',

  // Checkboxes / radios
  checkboxFillChecked:          '#104683',  // selected fill for radio & checkbox
  checkboxColorChecked:         '#ffffff',  // icon/mark color when checked
  checkboxStrokeUnchecked:      '#d0d5dd',  // border when unchecked

  // Form / inputs
  inputBorder:                  '#eaecf0',
  formBorder:                   '#d0d5dd',

  // Table
  tableCellStroke:              '#eaecf0',
  tableTitleCellBackground:     '#f2f6ff',
  tableTitleCellIconColor:      '#98a2b3',

  // Text hierarchy
  titleColor:                   '#475467',
  subTitleColor:                '#98a2b3',
  iconButtonColor:              '#667085',

  // Semantic states
  errorBackground:              '#ffebec',
  errorColor:                   '#f9343f',
  warningColor:                 '#cc9600',
  successColor:                 '#16b364',

  // Surfaces
  tooltipBackground:            '#017094',
  containerBackground:          '#f7faff',
  mainBackground:               '#f9fafb',

  // Misc
  agenticColor:                 '#9b8afb',
} as const;

// ---------------------------------------------------------------------------
// ThemeGray
// ---------------------------------------------------------------------------
export const themeGray = {
  mainColor:                    '#333333',
  accentColor:                  '#fe9d00',
  focusColor:                   '#ffce7e',

  topHeaderBackground:          '#333333',
  topHeaderColor:               '#e8e8e8',
  topMenuBackground:            '#dadada',
  topSubHeaderBackground:       '#fff7ea',
  topSubHeaderColor:            '#333333',
  hoverBackground:              '#fff7ea',

  buttonPrimaryBackground:      '#fe9d00',
  buttonPrimaryHoverBackground: '#cc8a20',
  buttonPrimaryActiveBackground:'#ffbd53',
  buttonPrimaryDisabledBg:      '#e8e8e8',
  buttonPrimaryDisabledColor:   '#a1a3a1',
  buttonSecondaryFillBackground:'#e8e8e8',

  checkboxFillChecked:          '#8f6116',
  checkboxColorChecked:         '#ffffff',
  checkboxStrokeUnchecked:      '#b4b5b4',

  inputBorder:                  '#e8e8e8',
  formBorder:                   '#dadada',

  tableCellStroke:              '#e8e8e8',
  tableTitleCellBackground:     '#e8e8e8',
  tableTitleCellIconColor:      '#a1a3a1',

  titleColor:                   '#555555',
  subTitleColor:                '#a1a3a1',
  iconButtonColor:              '#848484',

  errorBackground:              '#ffebec',
  errorColor:                   '#e02f39',
  warningColor:                 '#cc9600',
  successColor:                 '#16b364',

  tooltipBackground:            '#8f6116',
  containerBackground:          '#f7f7f7',
  mainBackground:               '#f7f7f7',

  agenticColor:                 '#9b8afb',
} as const;

// ---------------------------------------------------------------------------
// Primitives — not theme-dependent
// ---------------------------------------------------------------------------
export const primitives = {
  // Light blue scale (used for step indicators etc.)
  lightBlue200: '#e3fbfe',
  lightBlue300: '#cdedf1',
  lightBlue400: '#97dcea',  // step-now-background
  lightBlue500: '#3bbcd4',
  lightBlue600: '#00aecf',  // same as themeBlue.accentColor

  // Gray scale
  gray50:  '#f9fafb',
  gray100: '#f2f4f7',
  gray200: '#eaecf0',
  gray300: '#d0d5dd',
  gray400: '#98a2b3',
  gray500: '#667085',
  gray600: '#475467',
  gray700: '#344054',
  gray900: '#15223f',

  // White
  white: '#ffffff',
} as const;

// ---------------------------------------------------------------------------
// Shared (same across themes)
// ---------------------------------------------------------------------------
export const shared = {
  fontFamily: 'Rubik, sans-serif',

  // Font sizes
  fontSizeXs:  12,
  fontSizeSm:  14,
  fontSizeMd:  16,
  fontSizeLg:  18,
  fontSizeXl:  20,

  // Line heights
  lineHeight: '20px',

  // Font weights
  fontWeightLight:   300,
  fontWeightRegular: 400,
  fontWeightBold:    700,

  // Border radius
  radiusSm:   2,
  radiusBase: 4,
  radiusMd:   6,
  radiusLg:   8,
  radiusXl:   12,
  radius2xl:  16,
  radiusFull: 9999,

  // Shadows
  shadowSm:   '0px 1px 4px 0px rgba(0,0,0,0.1)',
  shadowMd:   '0px 4px 16px 0px rgba(0,0,0,0.12)',
} as const;
