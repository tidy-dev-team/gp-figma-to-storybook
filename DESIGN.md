# DESIGN.md — Genpact Design System

Extracted from Figma file: `Ak8bNddcwozR84eZNnGdwQ` (Design system / Genpact)  
Extracted: 2026-04-19 | Two themes: **ThemeBlue** (default) · **ThemeGray**

---

## Colors — Primitives

```json
{
  "color": {
    "gray": {
      "50":  { "$value": "#f9fafb", "$type": "color" },
      "100": { "$value": "#f2f4f7", "$type": "color" },
      "200": { "$value": "#eaecf0", "$type": "color" },
      "300": { "$value": "#d0d5dd", "$type": "color" },
      "400": { "$value": "#98a2b3", "$type": "color" },
      "500": { "$value": "#667085", "$type": "color" },
      "600": { "$value": "#475467", "$type": "color" },
      "700": { "$value": "#344054", "$type": "color" },
      "800": { "$value": "#182230", "$type": "color" }
    },
    "primary-blue": {
      "25":  { "$value": "#f7faff", "$type": "color" },
      "50":  { "$value": "#f2f6ff", "$type": "color" },
      "200": { "$value": "#d0e2f6", "$type": "color" },
      "300": { "$value": "#a8c7eb", "$type": "color" },
      "400": { "$value": "#5786bc", "$type": "color" },
      "500": { "$value": "#416ea3", "$type": "color" },
      "600": { "$value": "#28588f", "$type": "color" },
      "700": { "$value": "#104683", "$type": "color" },
      "800": { "$value": "#073262", "$type": "color" },
      "900": { "$value": "#15223f", "$type": "color" }
    },
    "light-blue": {
      "200": { "$value": "#e3fbfe", "$type": "color" },
      "300": { "$value": "#cdedf1", "$type": "color" },
      "400": { "$value": "#97dcea", "$type": "color" },
      "500": { "$value": "#3bbcd4", "$type": "color" },
      "600": { "$value": "#00aecf", "$type": "color" },
      "700": { "$value": "#1190a8", "$type": "color" },
      "800": { "$value": "#017094", "$type": "color" }
    },
    "purple": {
      "25":  { "$value": "#fafaff", "$type": "color" },
      "100": { "$value": "#ebe9fe", "$type": "color" },
      "200": { "$value": "#d9d6fe", "$type": "color" },
      "300": { "$value": "#bdb4fe", "$type": "color" },
      "400": { "$value": "#9b8afb", "$type": "color" },
      "500": { "$value": "#7a5af8", "$type": "color" },
      "600": { "$value": "#6938ef", "$type": "color" },
      "700": { "$value": "#5925dc", "$type": "color" }
    },
    "pink": {
      "50":  { "$value": "#fef3ff", "$type": "color" },
      "200": { "$value": "#f6d0fe", "$type": "color" },
      "400": { "$value": "#e578fb", "$type": "color" },
      "500": { "$value": "#d444f1", "$type": "color" }
    },
    "orange": {
      "100": { "$value": "#fff9eb", "$type": "color" },
      "200": { "$value": "#ffdfa0", "$type": "color" },
      "400": { "$value": "#fdb022", "$type": "color" },
      "500": { "$value": "#f79009", "$type": "color" }
    },
    "error": {
      "100": { "$value": "#ffebec", "$type": "color" },
      "200": { "$value": "#ffbdc1", "$type": "color" },
      "300": { "$value": "#ff858c", "$type": "color" },
      "400": { "$value": "#fb4c57", "$type": "color" },
      "500": { "$value": "#f9343f", "$type": "color" },
      "600": { "$value": "#e02f39", "$type": "color" }
    },
    "green": {
      "50":  { "$value": "#ecfdf3", "$type": "color" },
      "200": { "$value": "#abefc6", "$type": "color" },
      "300": { "$value": "#73e2a3", "$type": "color" },
      "400": { "$value": "#3ccb7f", "$type": "color" },
      "500": { "$value": "#16b364", "$type": "color" },
      "600": { "$value": "#099250", "$type": "color" }
    },
    "teal": {
      "25":  { "$value": "#f6fffe", "$type": "color" },
      "100": { "$value": "#ccfbf1", "$type": "color" },
      "200": { "$value": "#99f6e0", "$type": "color" },
      "300": { "$value": "#5fe9d0", "$type": "color" },
      "400": { "$value": "#2ed3b7", "$type": "color" },
      "500": { "$value": "#15b79e", "$type": "color" },
      "600": { "$value": "#0e9384", "$type": "color" },
      "700": { "$value": "#107569", "$type": "color" }
    },
    "rose": {
      "200": { "$value": "#fecdd3", "$type": "color" },
      "300": { "$value": "#fda4af", "$type": "color" },
      "400": { "$value": "#fb7185", "$type": "color" },
      "500": { "$value": "#f43f5e", "$type": "color" },
      "600": { "$value": "#e41a4d", "$type": "color" },
      "700": { "$value": "#c01040", "$type": "color" },
      "800": { "$value": "#a11043", "$type": "color" }
    },
    "basic": {
      "white": { "$value": "#ffffff", "$type": "color" }
    },
    "genpact": {
      "logo-red": { "$value": "#ff5560", "$type": "color" }
    },
    "chart": {
      "a": { "$value": "#ffc94e", "$type": "color" },
      "b": { "$value": "#ff9900", "$type": "color" },
      "c": { "$value": "#ff6f61", "$type": "color" },
      "d": { "$value": "#e45137", "$type": "color" },
      "e": { "$value": "#ffdab9", "$type": "color" },
      "f": { "$value": "#e6a57e", "$type": "color" },
      "g": { "$value": "#e97451", "$type": "color" }
    }
  }
}
```

---

## Colors — Semantic Tokens

Two themes: **ThemeBlue** (primary) · **ThemeGray** (alternate)

```json
{
  "token": {
    "main-color":                        { "$value": { "ThemeBlue": "#15223f",  "ThemeGray": "#333333"  }, "$type": "color", "$description": "Primary brand/navigation color" },
    "accent-color":                      { "$value": { "ThemeBlue": "#00aecf",  "ThemeGray": "#fe9d00"  }, "$type": "color", "$description": "Accent / CTA highlight" },
    "focus-color":                       { "$value": { "ThemeBlue": "#3bbcd4",  "ThemeGray": "#ffce7e"  }, "$type": "color" },

    "top-header-background":             { "$value": { "ThemeBlue": "#104683",  "ThemeGray": "#333333"  }, "$type": "color" },
    "top-header-border":                 { "$value": { "ThemeBlue": "#416ea3",  "ThemeGray": "#555555"  }, "$type": "color" },
    "top-header-color":                  { "$value": { "ThemeBlue": "#ffffff",  "ThemeGray": "#e8e8e8"  }, "$type": "color" },
    "top-menu-background":               { "$value": { "ThemeBlue": "#28588f",  "ThemeGray": "#dadada"  }, "$type": "color" },
    "top-sub-header-background":         { "$value": { "ThemeBlue": "#f2f6ff",  "ThemeGray": "#fff7ea"  }, "$type": "color" },
    "top-sub-header-color":              { "$value": { "ThemeBlue": "#104683",  "ThemeGray": "#333333"  }, "$type": "color" },
    "hover-background":                  { "$value": { "ThemeBlue": "#f2f6ff",  "ThemeGray": "#fff7ea"  }, "$type": "color" },

    "button-primary-background":         { "$value": { "ThemeBlue": "#00aecf",  "ThemeGray": "#fe9d00"  }, "$type": "color" },
    "button-primary-hover-background":   { "$value": { "ThemeBlue": "#1190a8",  "ThemeGray": "#cc8a20"  }, "$type": "color" },
    "button-primary-active-background":  { "$value": { "ThemeBlue": "#3bbcd4",  "ThemeGray": "#ffbd53"  }, "$type": "color" },
    "button-primary-background-disabled":{ "$value": { "ThemeBlue": "#eaecf0",  "ThemeGray": "#e8e8e8"  }, "$type": "color" },
    "button-primary-color-disabled":     { "$value": { "ThemeBlue": "#98a2b3",  "ThemeGray": "#a1a3a1"  }, "$type": "color" },
    "button-secondary-fill-background":  { "$value": { "ThemeBlue": "#f2f6ff",  "ThemeGray": "#e8e8e8"  }, "$type": "color" },

    "table-cell-stroke":                 { "$value": { "ThemeBlue": "#eaecf0",  "ThemeGray": "#e8e8e8"  }, "$type": "color" },
    "table-title-cell-background":       { "$value": { "ThemeBlue": "#f2f6ff",  "ThemeGray": "#e8e8e8"  }, "$type": "color" },
    "table-title-cell-icon-color":       { "$value": { "ThemeBlue": "#98a2b3",  "ThemeGray": "#a1a3a1"  }, "$type": "color" },

    "checkbox-fill-checked":             { "$value": { "ThemeBlue": "#104683",  "ThemeGray": "#8f6116"  }, "$type": "color" },
    "checkbox-color-checked":            { "$value": { "ThemeBlue": "#ffffff",  "ThemeGray": "#ffffff"  }, "$type": "color" },
    "checkbox-stroke-unchecked":         { "$value": { "ThemeBlue": "#d0d5dd",  "ThemeGray": "#b4b5b4"  }, "$type": "color" },

    "input-border":                      { "$value": { "ThemeBlue": "#eaecf0",  "ThemeGray": "#e8e8e8"  }, "$type": "color" },
    "form-border":                       { "$value": { "ThemeBlue": "#d0d5dd",  "ThemeGray": "#dadada"  }, "$type": "color" },

    "title-color":                       { "$value": { "ThemeBlue": "#475467",  "ThemeGray": "#555555"  }, "$type": "color" },
    "sub-title-color":                   { "$value": { "ThemeBlue": "#98a2b3",  "ThemeGray": "#a1a3a1"  }, "$type": "color" },
    "icon-button-color":                 { "$value": { "ThemeBlue": "#667085",  "ThemeGray": "#848484"  }, "$type": "color" },

    "error-background":                  { "$value": { "ThemeBlue": "#ffebec",  "ThemeGray": "#ffebec"  }, "$type": "color" },
    "error-color":                       { "$value": { "ThemeBlue": "#f9343f",  "ThemeGray": "#e02f39"  }, "$type": "color" },
    "warning-color":                     { "$value": { "ThemeBlue": "#cc9600",  "ThemeGray": "#cc9600"  }, "$type": "color" },
    "success-color":                     { "$value": { "ThemeBlue": "#16b364",  "ThemeGray": "#16b364"  }, "$type": "color" },

    "tooltip-background":                { "$value": { "ThemeBlue": "#017094",  "ThemeGray": "#8f6116"  }, "$type": "color" },
    "container-background":              { "$value": { "ThemeBlue": "#f7faff",  "ThemeGray": "#f7f7f7"  }, "$type": "color" },
    "main-background":                   { "$value": { "ThemeBlue": "#f9fafb",  "ThemeGray": "#f7f7f7"  }, "$type": "color" },
    "modal-hide-background":             { "$value": { "ThemeBlue": "#15223f4d","ThemeGray": "#4447444d" }, "$type": "color" },

    "agentic-color":                     { "$value": { "ThemeBlue": "#9b8afb",  "ThemeGray": "#9b8afb"  }, "$type": "color" },
    "font-family":                       { "$value": { "ThemeBlue": "Rubik",    "ThemeGray": "Rubik"    }, "$type": "fontFamily" }
  }
}
```

---

## Typography

Font family: **Rubik** (all weights). No letter-spacing.

```json
{
  "typography": {
    "caption": {
      "xs-light":   { "$value": { "fontFamily": "Rubik", "fontWeight": 300, "fontSize": "12px", "lineHeight": "18px" }, "$type": "typography" },
      "xs-regular": { "$value": { "fontFamily": "Rubik", "fontWeight": 400, "fontSize": "12px", "lineHeight": "18px" }, "$type": "typography" },
      "xs-bold":    { "$value": { "fontFamily": "Rubik", "fontWeight": 500, "fontSize": "12px", "lineHeight": "18px" }, "$type": "typography" }
    },
    "body-sm": {
      "light":   { "$value": { "fontFamily": "Rubik", "fontWeight": 300, "fontSize": "14px", "lineHeight": "22px" }, "$type": "typography" },
      "regular": { "$value": { "fontFamily": "Rubik", "fontWeight": 400, "fontSize": "14px", "lineHeight": "20px" }, "$type": "typography" },
      "bold":    { "$value": { "fontFamily": "Rubik", "fontWeight": 500, "fontSize": "14px", "lineHeight": "20px" }, "$type": "typography" }
    },
    "body-md": {
      "light":   { "$value": { "fontFamily": "Rubik", "fontWeight": 300, "fontSize": "16px", "lineHeight": "24px" }, "$type": "typography" },
      "regular": { "$value": { "fontFamily": "Rubik", "fontWeight": 400, "fontSize": "16px", "lineHeight": "24px" }, "$type": "typography" },
      "bold":    { "$value": { "fontFamily": "Rubik", "fontWeight": 500, "fontSize": "16px", "lineHeight": "24px" }, "$type": "typography" }
    },
    "heading-lg": {
      "light":   { "$value": { "fontFamily": "Rubik", "fontWeight": 300, "fontSize": "18px", "lineHeight": "28px" }, "$type": "typography" },
      "regular": { "$value": { "fontFamily": "Rubik", "fontWeight": 400, "fontSize": "18px", "lineHeight": "28px" }, "$type": "typography" },
      "bold":    { "$value": { "fontFamily": "Rubik", "fontWeight": 500, "fontSize": "18px", "lineHeight": "28px" }, "$type": "typography" }
    },
    "heading-xl": {
      "light":   { "$value": { "fontFamily": "Rubik", "fontWeight": 300, "fontSize": "20px", "lineHeight": "30px" }, "$type": "typography" },
      "regular": { "$value": { "fontFamily": "Rubik", "fontWeight": 400, "fontSize": "20px", "lineHeight": "30px" }, "$type": "typography" },
      "bold":    { "$value": { "fontFamily": "Rubik", "fontWeight": 500, "fontSize": "20px", "lineHeight": "30px" }, "$type": "typography" }
    },
    "table-title": {
      "capital": { "$value": { "fontFamily": "Rubik", "fontWeight": 500, "fontSize": "12px", "lineHeight": "20px" }, "$type": "typography" }
    }
  }
}
```

---

## Spacing

Tailwind-like scale. Token name = Tailwind unit, value = px.

```json
{
  "spacing": {
    "0":    { "$value": "0px",   "$type": "dimension" },
    "px":   { "$value": "1px",   "$type": "dimension" },
    "0.5":  { "$value": "2px",   "$type": "dimension" },
    "1":    { "$value": "4px",   "$type": "dimension" },
    "1.5":  { "$value": "6px",   "$type": "dimension" },
    "2":    { "$value": "8px",   "$type": "dimension" },
    "2.5":  { "$value": "10px",  "$type": "dimension" },
    "3":    { "$value": "12px",  "$type": "dimension" },
    "3.5":  { "$value": "14px",  "$type": "dimension" },
    "4":    { "$value": "16px",  "$type": "dimension" },
    "4.5":  { "$value": "18px",  "$type": "dimension" },
    "5":    { "$value": "20px",  "$type": "dimension" },
    "6":    { "$value": "24px",  "$type": "dimension" },
    "7":    { "$value": "28px",  "$type": "dimension" },
    "8":    { "$value": "32px",  "$type": "dimension" },
    "9":    { "$value": "36px",  "$type": "dimension" },
    "10":   { "$value": "40px",  "$type": "dimension" },
    "12":   { "$value": "48px",  "$type": "dimension" },
    "14":   { "$value": "56px",  "$type": "dimension" },
    "16":   { "$value": "64px",  "$type": "dimension" },
    "20":   { "$value": "80px",  "$type": "dimension" },
    "24":   { "$value": "96px",  "$type": "dimension" },
    "32":   { "$value": "128px", "$type": "dimension" }
  }
}
```

---

## Border Radius

```json
{
  "radius": {
    "sm":   { "$value": "2px",     "$type": "dimension" },
    "base": { "$value": "4px",     "$type": "dimension" },
    "md":   { "$value": "6px",     "$type": "dimension" },
    "lg":   { "$value": "8px",     "$type": "dimension" },
    "xl":   { "$value": "12px",    "$type": "dimension" },
    "2xl":  { "$value": "16px",    "$type": "dimension" },
    "3xl":  { "$value": "20px",    "$type": "dimension" },
    "4xl":  { "$value": "24px",    "$type": "dimension" },
    "full": { "$value": "9999px",  "$type": "dimension" }
  }
}
```

---

## Shadows

```json
{
  "shadow": {
    "side-drawer": {
      "$value": "-5px 4px 30px 0px #00000040",
      "$type": "shadow",
      "$description": "Used on the side navigation drawer"
    }
  }
}
```

---

## Themes Quick Reference

| Token | ThemeBlue | ThemeGray |
|---|---|---|
| `main-color` | `#15223f` (dark navy) | `#333333` (dark gray) |
| `accent-color` | `#00aecf` (teal) | `#fe9d00` (orange) |
| `top-header-background` | `#104683` (blue) | `#333333` (gray) |
| `button-primary-background` | `#00aecf` | `#fe9d00` |
| `checkbox-fill-checked` | `#104683` | `#8f6116` |
| `container-background` | `#f7faff` | `#f7f7f7` |
| `error-color` | `#f9343f` | `#e02f39` |
| `success-color` | `#16b364` | `#16b364` |
