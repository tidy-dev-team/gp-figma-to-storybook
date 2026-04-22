---
name: genpact
version: alpha
description: Genpact enterprise design system with two visual themes — ThemeBlue (corporate navy/teal) and ThemeGray (neutral gray/orange accent)
colors:
  primary: "#00AECF"
  primaryHover: "#1190A8"
  surface: "#F9FAFB"
  onSurface: "#15223F"
  border: "#EAECF0"
  error: "#F9343F"
  warning: "#CC9600"
  success: "#16B364"
typography:
  body:
    fontFamily: "Rubik"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
  heading:
    fontFamily: "Rubik"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: "30px"
rounded:
  sm: "2px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "#00AECF"
    textColor: "#FFFFFF"
    rounded: "8px"
    padding: "8px 16px"
  button-secondary:
    backgroundColor: "#F2F6FF"
    textColor: "#475467"
    rounded: "8px"
    borderColor: "#EAECF0"
---

# DESIGN.md

> Extracted from: **Design system — Genpact** (`Ak8bNddcwozR84eZNnGdwQ`)
> Source: `https://www.figma.com/design/Ak8bNddcwozR84eZNnGdwQ/Design-system--Genpact?node-id=3007-13437`
> Extraction date: 2026-04-22
> Modes: ThemeBlue, ThemeGray
> Token count: 97 primitives + 82 semantic + 37 spacing + 9 radius + 16 typography styles

---

## Overview

Genpact uses two parallel visual themes. **ThemeBlue** is the corporate default: deep navy header (`#104683`), teal accent (`#00AECF`), and blue-tinted surfaces. **ThemeGray** is a neutral variant: dark gray header (`#333333`), orange accent (`#FE9D00`), and warm gray surfaces. Both themes share the same structural layout, spacing scale, and Rubik typeface — only the color palette changes. To identify which theme a Figma component uses, compare the accent/primary color against teal (`#00AECF` = ThemeBlue) or orange (`#FE9D00` = ThemeGray), then use **all token values from that theme's column**. Never copy hex values directly from a screenshot.

---

## Colors

### Primitives

```json
{
  "color": {
    "primaryBlue": {
      "25":  { "$type": "color", "$value": "#F7FAFF" },
      "50":  { "$type": "color", "$value": "#F2F6FF" },
      "200": { "$type": "color", "$value": "#D0E2F6" },
      "300": { "$type": "color", "$value": "#A8C7EB" },
      "400": { "$type": "color", "$value": "#5786BC" },
      "500": { "$type": "color", "$value": "#416EA3" },
      "600": { "$type": "color", "$value": "#28588F" },
      "700": { "$type": "color", "$value": "#104683", "$description": "Top header background ThemeBlue; checkbox fill checked ThemeBlue" },
      "800": { "$type": "color", "$value": "#073262" },
      "900": { "$type": "color", "$value": "#15223F", "$description": "Main text color ThemeBlue" }
    },
    "lightBlue": {
      "200": { "$type": "color", "$value": "#E3FBFE" },
      "300": { "$type": "color", "$value": "#CDEDF1" },
      "400": { "$type": "color", "$value": "#97DCEA", "$description": "Step-now background ThemeBlue" },
      "500": { "$type": "color", "$value": "#3BBCD4", "$description": "Focus color / button active ThemeBlue" },
      "600": { "$type": "color", "$value": "#00AECF", "$description": "Accent color ThemeBlue" },
      "700": { "$type": "color", "$value": "#1190A8", "$description": "Hover color ThemeBlue" },
      "800": { "$type": "color", "$value": "#017094", "$description": "Tooltip background ThemeBlue" }
    },
    "gray": {
      "50":  { "$type": "color", "$value": "#F9FAFB", "$description": "Main background ThemeBlue" },
      "100": { "$type": "color", "$value": "#F1F3F5" },
      "200": { "$type": "color", "$value": "#EAECF0", "$description": "Input border; table cell stroke ThemeBlue" },
      "300": { "$type": "color", "$value": "#D0D5DD", "$description": "Form border; checkbox stroke unchecked ThemeBlue" },
      "400": { "$type": "color", "$value": "#98A2B3", "$description": "Sub-title color ThemeBlue" },
      "500": { "$type": "color", "$value": "#667085", "$description": "Icon button color ThemeBlue" },
      "600": { "$type": "color", "$value": "#475467", "$description": "Title color ThemeBlue" },
      "700": { "$type": "color", "$value": "#344054" },
      "800": { "$type": "color", "$value": "#182230" }
    },
    "ap": {
      "12":  { "$type": "color", "$value": "#F7F7F7", "$description": "Main background ThemeGray" },
      "25":  { "$type": "color", "$value": "#F0F0F0" },
      "50":  { "$type": "color", "$value": "#E8E8E8", "$description": "Button secondary fill background ThemeGray; input border ThemeGray" },
      "100": { "$type": "color", "$value": "#DADADA", "$description": "Form border ThemeGray" },
      "200": { "$type": "color", "$value": "#B4B5B4", "$description": "Checkbox stroke unchecked ThemeGray" },
      "300": { "$type": "color", "$value": "#ADAEAD" },
      "400": { "$type": "color", "$value": "#A1A3A1", "$description": "Sub-title color ThemeGray" },
      "500": { "$type": "color", "$value": "#848484", "$description": "Icon button color ThemeGray" },
      "600": { "$type": "color", "$value": "#555555", "$description": "Title color ThemeGray" },
      "650": { "$type": "color", "$value": "#444744" },
      "700": { "$type": "color", "$value": "#333333", "$description": "Main text color ThemeGray; top header background ThemeGray" }
    },
    "apAccent": {
      "base":   { "$type": "color", "$value": "#FE9D00", "$description": "Accent color ThemeGray" },
      "prev":   { "$type": "color", "$value": "#FFAD28" },
      "light1": { "$type": "color", "$value": "#FFBD53" },
      "light2": { "$type": "color", "$value": "#FFCE7E", "$description": "Focus color ThemeGray; step-now background ThemeGray" },
      "light3": { "$type": "color", "$value": "#FFE6BF" },
      "light4": { "$type": "color", "$value": "#FFF7EA", "$description": "Hover background ThemeGray" },
      "dark1":  { "$type": "color", "$value": "#CC8A20", "$description": "Hover color ThemeGray; scroll color ThemeGray" },
      "dark2":  { "$type": "color", "$value": "#8F6116", "$description": "Checkbox fill checked ThemeGray; tooltip background ThemeGray" }
    },
    "error": {
      "100": { "$type": "color", "$value": "#FFEBEC", "$description": "Error background" },
      "200": { "$type": "color", "$value": "#FEBDC1" },
      "300": { "$type": "color", "$value": "#FE858C" },
      "400": { "$type": "color", "$value": "#FB4C57" },
      "500": { "$type": "color", "$value": "#F9343F", "$description": "Error color ThemeBlue" },
      "600": { "$type": "color", "$value": "#E02F39", "$description": "Error color ThemeGray" }
    },
    "green": {
      "50":  { "$type": "color", "$value": "#EDFCF2" },
      "200": { "$type": "color", "$value": "#AAF0C4" },
      "300": { "$type": "color", "$value": "#73E2A3" },
      "400": { "$type": "color", "$value": "#3CCB7F" },
      "500": { "$type": "color", "$value": "#16B364", "$description": "Success color (both themes)" },
      "600": { "$type": "color", "$value": "#099250" }
    },
    "orange": {
      "100": { "$type": "color", "$value": "#FFFAEB" },
      "200": { "$type": "color", "$value": "#FEDF89" },
      "400": { "$type": "color", "$value": "#FDB022" },
      "500": { "$type": "color", "$value": "#F79009" }
    },
    "teal": {
      "25":  { "$type": "color", "$value": "#F6FEFC" },
      "100": { "$type": "color", "$value": "#CCFBEF" },
      "200": { "$type": "color", "$value": "#99F6E0" },
      "300": { "$type": "color", "$value": "#5FE9D0" },
      "400": { "$type": "color", "$value": "#2ED3B7" },
      "500": { "$type": "color", "$value": "#15B79E" },
      "600": { "$type": "color", "$value": "#0E9384" },
      "700": { "$type": "color", "$value": "#107569" }
    },
    "purple": {
      "25":  { "$type": "color", "$value": "#FAFAFF" },
      "100": { "$type": "color", "$value": "#EBE9FE" },
      "200": { "$type": "color", "$value": "#D9D6FE" },
      "300": { "$type": "color", "$value": "#BDB4FE" },
      "400": { "$type": "color", "$value": "#9B8AFB", "$description": "Agentic/AI color (both themes)" },
      "500": { "$type": "color", "$value": "#7A5AF8" },
      "600": { "$type": "color", "$value": "#6938EF" },
      "700": { "$type": "color", "$value": "#5925DC" }
    },
    "pink": {
      "50":  { "$type": "color", "$value": "#FDF4FF" },
      "200": { "$type": "color", "$value": "#F6D0FE" },
      "400": { "$type": "color", "$value": "#E478FA" },
      "500": { "$type": "color", "$value": "#D444F1" }
    },
    "rose": {
      "200": { "$type": "color", "$value": "#FECDD6" },
      "300": { "$type": "color", "$value": "#FEA3B4" },
      "400": { "$type": "color", "$value": "#FD6F8E" },
      "500": { "$type": "color", "$value": "#F63D68" },
      "600": { "$type": "color", "$value": "#E31B54" },
      "700": { "$type": "color", "$value": "#C01048" },
      "800": { "$type": "color", "$value": "#A11043" }
    },
    "brand": {
      "white":   { "$type": "color", "$value": "#FFFFFF" },
      "logoRed": { "$type": "color", "$value": "#FF555F", "$description": "Genpact logo red; flag indicator; task number badge" }
    },
    "warning": {
      "base": { "$type": "color", "$value": "#CC9600", "$description": "Warning color (both themes)" }
    },
    "chart": {
      "A": { "$type": "color", "$value": "#FFC94E" },
      "B": { "$type": "color", "$value": "#FF9900" },
      "C": { "$type": "color", "$value": "#FF6F61" },
      "D": { "$type": "color", "$value": "#E45137" },
      "E": { "$type": "color", "$value": "#FFDAB9" },
      "F": { "$type": "color", "$value": "#E6A57E" },
      "G": { "$type": "color", "$value": "#E97451" },
      "H": { "$type": "color", "$value": "#555555" },
      "I": { "$type": "color", "$value": "#000000" }
    }
  }
}
```

### Semantic (ThemeBlue — default)

Semantic tokens live in the `Tokens` variable collection with two modes. Values below are ThemeBlue; see **Themes** section for ThemeGray overrides.

```json
{
  "token": {
    "accentColor":          { "$type": "color", "$value": "{color.lightBlue.600}" },
    "agenticColor":         { "$type": "color", "$value": "{color.purple.400}" },
    "mainColor":            { "$type": "color", "$value": "{color.primaryBlue.900}" },
    "titleColor":           { "$type": "color", "$value": "{color.gray.600}" },
    "subTitleColor":        { "$type": "color", "$value": "{color.gray.400}" },
    "iconButtonColor":      { "$type": "color", "$value": "{color.gray.500}" },
    "mainBackground":       { "$type": "color", "$value": "{color.gray.50}" },
    "containerBackground":  { "$type": "color", "$value": "{color.primaryBlue.25}" },
    "hoverBackground":      { "$type": "color", "$value": "{color.primaryBlue.50}" },
    "inputBorder":          { "$type": "color", "$value": "{color.gray.200}" },
    "formBorder":           { "$type": "color", "$value": "{color.gray.300}" },
    "focusColor":           { "$type": "color", "$value": "{color.lightBlue.500}" },
    "errorColor":           { "$type": "color", "$value": "{color.error.500}" },
    "errorBackground":      { "$type": "color", "$value": "{color.error.100}" },
    "successColor":         { "$type": "color", "$value": "{color.green.500}" },
    "warningColor":         { "$type": "color", "$value": "{color.warning.base}" },
    "flagColor":            { "$type": "color", "$value": "{color.brand.logoRed}" },
    "buttonPrimaryBackground":         { "$type": "color", "$value": "{color.lightBlue.600}" },
    "buttonPrimaryHoverBackground":    { "$type": "color", "$value": "{color.lightBlue.700}" },
    "buttonPrimaryActiveBackground":   { "$type": "color", "$value": "{color.lightBlue.500}" },
    "buttonPrimaryActiveBorder":       { "$type": "color", "$value": "{color.lightBlue.400}" },
    "buttonPrimaryBackgroundDisabled": { "$type": "color", "$value": "{color.gray.200}" },
    "buttonPrimaryColorDisabled":      { "$type": "color", "$value": "{color.gray.400}" },
    "buttonSecondaryFillBackground":   { "$type": "color", "$value": "{color.primaryBlue.50}" },
    "buttonSecondaryFillColor":        { "$type": "color", "$value": "{color.gray.600}" },
    "buttonSecondaryHoverColor":       { "$type": "color", "$value": "{color.lightBlue.700}" },
    "buttonSecondaryOutlineHoverStroke": { "$type": "color", "$value": "{color.lightBlue.200}" },
    "buttonSecondaryOutlineClickedBg": { "$type": "color", "$value": "{color.primaryBlue.200}" },
    "buttonSecondaryBlueOutlineColor": { "$type": "color", "$value": "{color.lightBlue.500}" },
    "buttonSecondaryBlueOutlineStroke":{ "$type": "color", "$value": "{color.gray.200}" },
    "checkboxFillChecked":    { "$type": "color", "$value": "{color.primaryBlue.700}" },
    "checkboxColorChecked":   { "$type": "color", "$value": "{color.brand.white}" },
    "checkboxColorUnchecked": { "$type": "color", "$value": "{color.gray.300}" },
    "checkboxStrokeUnchecked":{ "$type": "color", "$value": "{color.gray.300}" },
    "checkboxFillDisabled":   { "$type": "color", "$value": "{color.gray.50}" },
    "toggleGroupBackground":        { "$type": "color", "$value": "{color.primaryBlue.50}" },
    "toggleGroupColorChecked":      { "$type": "color", "$value": "{color.primaryBlue.900}" },
    "toggleGroupStrokeChecked":     { "$type": "color", "$value": "{color.brand.white}" },
    "toggleBackgroundUnchecked":    { "$type": "color", "$value": "{color.gray.300}" },
    "toggleThumbDisabled":          { "$type": "color", "$value": "{color.gray.50}" },
    "topHeaderBackground":      { "$type": "color", "$value": "{color.primaryBlue.700}" },
    "topHeaderColor":           { "$type": "color", "$value": "{color.brand.white}" },
    "topHeaderBorder":          { "$type": "color", "$value": "{color.primaryBlue.500}" },
    "topMenuBackground":        { "$type": "color", "$value": "{color.primaryBlue.600}" },
    "topMenuButtonBackground":  { "$type": "color", "$value": "{color.error.400}" },
    "topMenuSelectedBackground":{ "$type": "color", "$value": "{color.lightBlue.600}" },
    "topSubHeaderBackground":   { "$type": "color", "$value": "{color.primaryBlue.50}" },
    "topSubHeaderColor":        { "$type": "color", "$value": "{color.primaryBlue.700}" },
    "topSubHeaderCloseExitBg":  { "$type": "color", "$value": "{color.gray.50}" },
    "topBarSearchBackground":   { "$type": "color", "$value": "{color.primaryBlue.600}" },
    "topBarSearchColor":        { "$type": "color", "$value": "{color.primaryBlue.400}" },
    "topButtonColor":           { "$type": "color", "$value": "{color.gray.50}" },
    "topTabBackgroundSelected":   { "$type": "color", "$value": "{color.lightBlue.600}" },
    "topTabBackgroundUnselected": { "$type": "color", "$value": "{color.primaryBlue.600}" },
    "topTabColor":                { "$type": "color", "$value": "{color.brand.white}" },
    "topTabIconColor":            { "$type": "color", "$value": "{color.primaryBlue.300}" },
    "topTabSelectedIconColor":    { "$type": "color", "$value": "{color.lightBlue.400}" },
    "innerTabBottomBorder":       { "$type": "color", "$value": "{color.gray.200}" },
    "tableTitleCellBackground":   { "$type": "color", "$value": "{color.primaryBlue.50}" },
    "tableTitleCellIconColor":    { "$type": "color", "$value": "{color.gray.400}" },
    "tableTitleCellIconHoverColor":{ "$type": "color", "$value": "{color.gray.500}" },
    "tableCellStroke":            { "$type": "color", "$value": "{color.gray.200}" },
    "tableCellLightColor":        { "$type": "color", "$value": "{color.gray.500}" },
    "stepDoneBackground":  { "$type": "color", "$value": "{color.lightBlue.600}" },
    "stepDoneBorder":      { "$type": "color", "$value": "{color.lightBlue.600}" },
    "stepNowBackground":   { "$type": "color", "$value": "{color.lightBlue.400}" },
    "stepNowBorder":       { "$type": "color", "$value": "{color.lightBlue.600}" },
    "stepNextBackground":  { "$type": "color", "$value": "{color.gray.100}" },
    "stepNextBorder":      { "$type": "color", "$value": "{color.gray.300}" },
    "scrollBackground":    { "$type": "color", "$value": "{color.gray.50}" },
    "scrollColor":         { "$type": "color", "$value": "{color.primaryBlue.500}" },
    "scrollThumb":         { "$type": "color", "$value": "{color.primaryBlue.200}" },
    "paneExpanderBorder":           { "$type": "color", "$value": "{color.gray.300}" },
    "paneExpanderButtonBackground": { "$type": "color", "$value": "{color.gray.100}" },
    "paneExpanderButtonColor":      { "$type": "color", "$value": "{color.gray.500}" },
    "tooltipBackground":  { "$type": "color", "$value": "{color.lightBlue.800}" },
    "tooltipDetailsColor":{ "$type": "color", "$value": "{color.gray.300}" },
    "mainMenuLeftBackground": { "$type": "color", "$value": "#FF555F1A", "$description": "Logo red at 10% opacity" },
    "modalHideBackground":    { "$type": "color", "$value": "#15223F4D", "$description": "Navy at 30% opacity" },
    "popupBg":                { "$type": "color", "$value": "#15223F4D", "$description": "Navy at 30% opacity" },
    "notificationNumberBackground":  { "$type": "color", "$value": "{color.lightBlue.600}" },
    "notificationNumberBackground2": { "$type": "color", "$value": "{color.lightBlue.600}" },
    "taskNumberBackground": { "$type": "color", "$value": "{color.brand.logoRed}" },
    "caseyChatBubble": { "$type": "color", "$value": "{color.purple.100}" },
    "meChatBubble":    { "$type": "color", "$value": "{color.gray.200}" }
  }
}
```

---

## Typography

All text uses the **Rubik** typeface (Google Fonts). Three weights in use: Light (300), Regular (400), Medium/Bold (500). No italic. Sizes follow a compact scale optimised for dense data-heavy UIs.

```json
{
  "typography": {
    "caption": {
      "xs-light":   { "$type": "typography", "$value": { "fontFamily": "Rubik", "fontSize": "12px", "fontWeight": 300, "lineHeight": "18px", "letterSpacing": "0" } },
      "xs-regular": { "$type": "typography", "$value": { "fontFamily": "Rubik", "fontSize": "12px", "fontWeight": 400, "lineHeight": "18px", "letterSpacing": "0" } },
      "xs-bold":    { "$type": "typography", "$value": { "fontFamily": "Rubik", "fontSize": "12px", "fontWeight": 500, "lineHeight": "18px", "letterSpacing": "0" } }
    },
    "body2": {
      "sm-light":   { "$type": "typography", "$value": { "fontFamily": "Rubik", "fontSize": "14px", "fontWeight": 300, "lineHeight": "22px", "letterSpacing": "0" } },
      "sm-regular": { "$type": "typography", "$value": { "fontFamily": "Rubik", "fontSize": "14px", "fontWeight": 400, "lineHeight": "20px", "letterSpacing": "0" } },
      "sm-bold":    { "$type": "typography", "$value": { "fontFamily": "Rubik", "fontSize": "14px", "fontWeight": 500, "lineHeight": "20px", "letterSpacing": "0" } }
    },
    "body1": {
      "md-light":   { "$type": "typography", "$value": { "fontFamily": "Rubik", "fontSize": "16px", "fontWeight": 300, "lineHeight": "24px", "letterSpacing": "0" } },
      "md-regular": { "$type": "typography", "$value": { "fontFamily": "Rubik", "fontSize": "16px", "fontWeight": 400, "lineHeight": "24px", "letterSpacing": "0" } },
      "md-bold":    { "$type": "typography", "$value": { "fontFamily": "Rubik", "fontSize": "16px", "fontWeight": 500, "lineHeight": "24px", "letterSpacing": "0" } }
    },
    "heading3": {
      "lg-light":   { "$type": "typography", "$value": { "fontFamily": "Rubik", "fontSize": "18px", "fontWeight": 300, "lineHeight": "28px", "letterSpacing": "0" } },
      "lg-regular": { "$type": "typography", "$value": { "fontFamily": "Rubik", "fontSize": "18px", "fontWeight": 400, "lineHeight": "28px", "letterSpacing": "0" } },
      "lg-bold":    { "$type": "typography", "$value": { "fontFamily": "Rubik", "fontSize": "18px", "fontWeight": 500, "lineHeight": "28px", "letterSpacing": "0" } }
    },
    "heading2": {
      "xl-light":   { "$type": "typography", "$value": { "fontFamily": "Rubik", "fontSize": "20px", "fontWeight": 300, "lineHeight": "30px", "letterSpacing": "0" } },
      "xl-regular": { "$type": "typography", "$value": { "fontFamily": "Rubik", "fontSize": "20px", "fontWeight": 400, "lineHeight": "30px", "letterSpacing": "0" } },
      "xl-bold":    { "$type": "typography", "$value": { "fontFamily": "Rubik", "fontSize": "20px", "fontWeight": 500, "lineHeight": "30px", "letterSpacing": "0" } }
    },
    "tableTitle": {
      "capital": { "$type": "typography", "$value": { "fontFamily": "Rubik", "fontSize": "12px", "fontWeight": 500, "lineHeight": "20px", "letterSpacing": "0" } }
    }
  }
}
```

---

## Layout

Spacing uses a Tailwind-style 4px base scale defined in the `Spacing` variable collection.

```json
{
  "layout": {
    "spacing": {
      "px":   { "$type": "dimension", "$value": "1px" },
      "0":    { "$type": "dimension", "$value": "0px" },
      "0.5":  { "$type": "dimension", "$value": "2px" },
      "1":    { "$type": "dimension", "$value": "4px" },
      "1.5":  { "$type": "dimension", "$value": "6px" },
      "2":    { "$type": "dimension", "$value": "8px" },
      "2.5":  { "$type": "dimension", "$value": "10px" },
      "3":    { "$type": "dimension", "$value": "12px" },
      "3.5":  { "$type": "dimension", "$value": "14px" },
      "4":    { "$type": "dimension", "$value": "16px" },
      "4.5":  { "$type": "dimension", "$value": "18px" },
      "5":    { "$type": "dimension", "$value": "20px" },
      "6":    { "$type": "dimension", "$value": "24px" },
      "7":    { "$type": "dimension", "$value": "28px" },
      "8":    { "$type": "dimension", "$value": "32px" },
      "9":    { "$type": "dimension", "$value": "36px" },
      "10":   { "$type": "dimension", "$value": "40px" },
      "11":   { "$type": "dimension", "$value": "44px" },
      "12":   { "$type": "dimension", "$value": "48px" },
      "14":   { "$type": "dimension", "$value": "56px" },
      "16":   { "$type": "dimension", "$value": "64px" },
      "18":   { "$type": "dimension", "$value": "72px" },
      "20":   { "$type": "dimension", "$value": "80px" },
      "24":   { "$type": "dimension", "$value": "96px" },
      "28":   { "$type": "dimension", "$value": "112px" },
      "32":   { "$type": "dimension", "$value": "128px" },
      "36":   { "$type": "dimension", "$value": "144px" },
      "40":   { "$type": "dimension", "$value": "160px" },
      "44":   { "$type": "dimension", "$value": "176px" },
      "48":   { "$type": "dimension", "$value": "192px" },
      "52":   { "$type": "dimension", "$value": "208px" },
      "56":   { "$type": "dimension", "$value": "224px" },
      "60":   { "$type": "dimension", "$value": "240px" },
      "64":   { "$type": "dimension", "$value": "256px" },
      "72":   { "$type": "dimension", "$value": "320px" },
      "80":   { "$type": "dimension", "$value": "384px" }
    },
    "grid": {
      "1/3": { "$type": "number", "$value": 3, "$description": "1/3 column grid" },
      "1/7": { "$type": "number", "$value": 7, "$description": "1/7 column grid" }
    }
  }
}
```

---

## Elevation & Depth

No shadow variables are defined in the Figma variable collections. One effect style is documented:

```json
{
  "shadow": {
    "sideDrawer": {
      "$type": "shadow",
      "$value": { "color": "#000000", "offsetX": "-5px", "offsetY": "4px", "blur": "30px", "spread": "0" },
      "$description": "Side drawer overlay shadow (Figma effect style: 'side drawer')"
    }
  }
}
```

---

## Shapes

Border radius defined in the `Corner radius` variable collection.

```json
{
  "radius": {
    "sm":   { "$type": "dimension", "$value": "2px",    "$description": "rounded-sm" },
    "base": { "$type": "dimension", "$value": "4px",    "$description": "rounded" },
    "md":   { "$type": "dimension", "$value": "6px",    "$description": "rounded-md" },
    "lg":   { "$type": "dimension", "$value": "8px",    "$description": "rounded-lg" },
    "xl":   { "$type": "dimension", "$value": "12px",   "$description": "rounded-xl" },
    "2xl":  { "$type": "dimension", "$value": "16px",   "$description": "rounded-2xl" },
    "3xl":  { "$type": "dimension", "$value": "20px",   "$description": "rounded-3xl" },
    "4xl":  { "$type": "dimension", "$value": "24px",   "$description": "rounded-4xl" },
    "full": { "$type": "dimension", "$value": "9999px", "$description": "rounded-full — pill/circle" }
  }
}
```

---

## Components

Flat component token summary for key UI elements. Full slot mappings are in `KENDOREACT_COMPONENTS.md`.

```json
{
  "component": {
    "button-primary": {
      "backgroundColor": { "$type": "color", "$value": "{token.buttonPrimaryBackground}" },
      "hoverBackground": { "$type": "color", "$value": "{token.buttonPrimaryHoverBackground}" },
      "activeBackground":{ "$type": "color", "$value": "{token.buttonPrimaryActiveBackground}" },
      "textColor":       { "$type": "color", "$value": "{color.brand.white}" },
      "rounded":         { "$type": "dimension", "$value": "{radius.lg}" }
    },
    "button-secondary": {
      "backgroundColor": { "$type": "color", "$value": "{token.buttonSecondaryFillBackground}" },
      "textColor":       { "$type": "color", "$value": "{token.buttonSecondaryFillColor}" },
      "hoverColor":      { "$type": "color", "$value": "{token.buttonSecondaryHoverColor}" },
      "borderColor":     { "$type": "color", "$value": "{token.inputBorder}" },
      "rounded":         { "$type": "dimension", "$value": "{radius.lg}" }
    },
    "input": {
      "borderColor":     { "$type": "color", "$value": "{token.inputBorder}" },
      "focusBorderColor":{ "$type": "color", "$value": "{token.accentColor}" },
      "rounded":         { "$type": "dimension", "$value": "{radius.base}" }
    },
    "checkbox": {
      "fillChecked":     { "$type": "color", "$value": "{token.checkboxFillChecked}" },
      "colorChecked":    { "$type": "color", "$value": "{token.checkboxColorChecked}" },
      "strokeUnchecked": { "$type": "color", "$value": "{token.checkboxStrokeUnchecked}" }
    },
    "tag": {
      "subtleBackground": { "$type": "color", "$value": "{color.gray.50}" },
      "subtleBorder":     { "$type": "color", "$value": "{color.gray.200}" },
      "roundedSquare":    { "$type": "dimension", "$value": "{radius.lg}" },
      "roundedPill":      { "$type": "dimension", "$value": "{radius.4xl}" }
    },
    "tab": {
      "activeColor":       { "$type": "color", "$value": "{token.accentColor}" },
      "activeBorder":      { "$type": "color", "$value": "{token.accentColor}" },
      "inactiveColor":     { "$type": "color", "$value": "{token.mainColor}" },
      "inactiveBorder":    { "$type": "color", "$value": "{token.innerTabBottomBorder}" }
    }
  }
}
```

---

## Do's and Don'ts

- **Do:** Always identify the theme from the screenshot's accent color before using any token — teal (`#00AECF`) = ThemeBlue, orange (`#FE9D00`) = ThemeGray.
- **Do:** Use `token.*` semantic names in component code; never hard-code the resolved hex.
- **Do:** Use the `Rubik` font at the documented weights (300/400/500) only — no bold 700 is in the Figma type scale.
- **Don't:** Mix tokens from different themes in the same component — all tokens must come from the same mode column.
- **Don't:** Use `Primary Blue/700` (`#104683`) as the interactive accent — that is the `checkbox-fill-checked` / header background, not the accent. The accent is `Light B/600` (`#00AECF`) in ThemeBlue.
- **Don't:** Invent spacing values outside the 4px-base scale. Use the `Spacing` collection tokens.

---

## Themes

ThemeGray overrides — semantic tokens that differ from ThemeBlue defaults. Primitives are shared.

```json
{
  "theme": {
    "themeGray": {
      "token": {
        "accentColor":            { "$type": "color", "$value": "{color.apAccent.base}" },
        "mainColor":              { "$type": "color", "$value": "{color.ap.700}" },
        "titleColor":             { "$type": "color", "$value": "{color.ap.600}" },
        "subTitleColor":          { "$type": "color", "$value": "{color.ap.400}" },
        "iconButtonColor":        { "$type": "color", "$value": "{color.ap.500}" },
        "mainBackground":         { "$type": "color", "$value": "{color.ap.12}" },
        "containerBackground":    { "$type": "color", "$value": "{color.ap.12}" },
        "hoverBackground":        { "$type": "color", "$value": "{color.apAccent.light4}" },
        "inputBorder":            { "$type": "color", "$value": "{color.ap.50}" },
        "formBorder":             { "$type": "color", "$value": "{color.ap.100}" },
        "focusColor":             { "$type": "color", "$value": "{color.apAccent.light2}" },
        "errorColor":             { "$type": "color", "$value": "{color.error.600}" },
        "buttonPrimaryBackground":          { "$type": "color", "$value": "{color.apAccent.base}" },
        "buttonPrimaryHoverBackground":     { "$type": "color", "$value": "{color.apAccent.dark1}" },
        "buttonPrimaryActiveBackground":    { "$type": "color", "$value": "{color.apAccent.light1}" },
        "buttonPrimaryActiveBorder":        { "$type": "color", "$value": "{color.apAccent.light2}" },
        "buttonPrimaryBackgroundDisabled":  { "$type": "color", "$value": "{color.ap.50}" },
        "buttonPrimaryColorDisabled":       { "$type": "color", "$value": "{color.ap.400}" },
        "buttonSecondaryFillBackground":    { "$type": "color", "$value": "{color.ap.50}" },
        "buttonSecondaryFillColor":         { "$type": "color", "$value": "{color.ap.600}" },
        "buttonSecondaryHoverColor":        { "$type": "color", "$value": "{color.apAccent.dark1}" },
        "buttonSecondaryOutlineHoverStroke":{ "$type": "color", "$value": "{color.apAccent.light3}" },
        "buttonSecondaryOutlineClickedBg":  { "$type": "color", "$value": "{color.apAccent.light3}" },
        "buttonSecondaryBlueOutlineColor":  { "$type": "color", "$value": "{color.apAccent.light1}" },
        "buttonSecondaryBlueOutlineStroke": { "$type": "color", "$value": "{color.ap.50}" },
        "checkboxFillChecked":              { "$type": "color", "$value": "{color.apAccent.dark2}" },
        "checkboxColorUnchecked":           { "$type": "color", "$value": "{color.ap.200}" },
        "checkboxStrokeUnchecked":          { "$type": "color", "$value": "{color.ap.200}" },
        "checkboxFillDisabled":             { "$type": "color", "$value": "{color.ap.50}" },
        "toggleGroupBackground":            { "$type": "color", "$value": "{color.ap.25}" },
        "toggleGroupColorChecked":          { "$type": "color", "$value": "{color.apAccent.dark1}" },
        "toggleGroupStrokeChecked":         { "$type": "color", "$value": "{color.apAccent.light2}" },
        "toggleBackgroundUnchecked":        { "$type": "color", "$value": "{color.ap.100}" },
        "toggleThumbDisabled":              { "$type": "color", "$value": "{color.ap.50}" },
        "topHeaderBackground":              { "$type": "color", "$value": "{color.ap.700}" },
        "topHeaderColor":                   { "$type": "color", "$value": "{color.ap.50}" },
        "topHeaderBorder":                  { "$type": "color", "$value": "{color.ap.600}" },
        "topMenuBackground":                { "$type": "color", "$value": "{color.ap.100}" },
        "topMenuButtonBackground":          { "$type": "color", "$value": "{color.apAccent.base}" },
        "topMenuSelectedBackground":        { "$type": "color", "$value": "{color.apAccent.light2}" },
        "topSubHeaderBackground":           { "$type": "color", "$value": "{color.apAccent.light4}" },
        "topSubHeaderColor":                { "$type": "color", "$value": "{color.ap.700}" },
        "topBarSearchBackground":           { "$type": "color", "$value": "{color.ap.650}" },
        "topBarSearchColor":                { "$type": "color", "$value": "{color.ap.500}" },
        "topButtonColor":                   { "$type": "color", "$value": "{color.ap.300}" },
        "topTabBackgroundSelected":         { "$type": "color", "$value": "{color.apAccent.base}" },
        "topTabBackgroundUnselected":       { "$type": "color", "$value": "{color.ap.400}" },
        "topTabColor":                      { "$type": "color", "$value": "{color.ap.700}" },
        "topTabIconColor":                  { "$type": "color", "$value": "{color.ap.700}" },
        "topTabSelectedIconColor":          { "$type": "color", "$value": "{color.ap.700}" },
        "innerTabBottomBorder":             { "$type": "color", "$value": "{color.ap.50}" },
        "tableTitleCellBackground":         { "$type": "color", "$value": "{color.ap.50}" },
        "tableTitleCellIconColor":          { "$type": "color", "$value": "{color.ap.400}" },
        "tableTitleCellIconHoverColor":     { "$type": "color", "$value": "{color.ap.500}" },
        "tableCellStroke":                  { "$type": "color", "$value": "{color.ap.50}" },
        "tableCellLightColor":              { "$type": "color", "$value": "{color.ap.500}" },
        "stepDoneBackground":  { "$type": "color", "$value": "{color.apAccent.base}" },
        "stepDoneBorder":      { "$type": "color", "$value": "{color.apAccent.base}" },
        "stepNowBackground":   { "$type": "color", "$value": "{color.apAccent.light2}" },
        "stepNowBorder":       { "$type": "color", "$value": "{color.apAccent.base}" },
        "stepNextBackground":  { "$type": "color", "$value": "{color.ap.25}" },
        "stepNextBorder":      { "$type": "color", "$value": "{color.ap.100}" },
        "scrollColor":         { "$type": "color", "$value": "{color.apAccent.dark1}" },
        "scrollThumb":         { "$type": "color", "$value": "{color.apAccent.light3}" },
        "scrollBackground":    { "$type": "color", "$value": "{color.ap.12}" },
        "paneExpanderBorder":           { "$type": "color", "$value": "{color.ap.100}" },
        "paneExpanderButtonBackground": { "$type": "color", "$value": "{color.ap.25}" },
        "paneExpanderButtonColor":      { "$type": "color", "$value": "{color.ap.500}" },
        "tooltipBackground":  { "$type": "color", "$value": "{color.apAccent.dark2}" },
        "tooltipDetailsColor":{ "$type": "color", "$value": "{color.ap.100}" },
        "mainMenuLeftBackground":  { "$type": "color", "$value": "#FE9D001A", "$description": "Orange at 10% opacity" },
        "modalHideBackground":     { "$type": "color", "$value": "#4447444D", "$description": "Dark gray at 30% opacity" },
        "notificationNumberBackground":  { "$type": "color", "$value": "{color.pink.400}" },
        "notificationNumberBackground2": { "$type": "color", "$value": "{color.teal.200}" },
        "taskNumberBackground":          { "$type": "color", "$value": "{color.teal.200}" }
      }
    }
  }
}
```

---

## Gaps and Notes

- **No shadow variables**: Elevation is not tokenised in Figma variables. Only one Figma effect style (`side drawer`) is documented. If shadow tokens are added to the file in future, re-run extraction.
- **No font-size/weight variables**: Typography is handled via Figma text styles only — there are no corresponding variable tokens for font-size, font-weight, or line-height. The `font-family` variable (`Rubik`) is the only type-related variable.
- **`warning-color` is a raw hex**: `#CC9600` appears hardcoded in both theme modes without a primitive alias. It does not map cleanly to any palette scale step.
- **Semi-transparent tokens**: `mainMenuLeftBackground` and `modalHideBackground` / `popupBg` are raw RGBA values (`#FF555F1A`, `#15223F4D`, `#4447444D`) with no DTCG `color` equivalent that accepts alpha. Represented here as raw hex strings.
- **Chart colors**: 9 chart palette tokens (A–I) are primitives with no semantic aliases. Use directly when building chart components.
- **`title-color 2`** in Figma is an exact duplicate of `title-color` — merged into a single `titleColor` token here.
- **`notificationNumberBackground` vs `notificationNumberBackground 2`**: Both exist in Figma. ThemeBlue both resolve to teal; ThemeGray resolves to pink and teal respectively. Unusual; treat as separate slots.
- **`xs` size** (Border-radius/Typography): A 12px/18px caption size exists in text styles but no corresponding `xs` radius step. Radius scale starts at `sm` (2px).
