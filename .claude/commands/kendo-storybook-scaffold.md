Scaffold a raw KendoReact primitive + CSF3 story into this repo's Storybook — the step-1 starting point of the code→Figma→code round-trip.

Arguments: $ARGUMENTS

Parse arguments as follows:
- First argument: `ComponentName` (required) — the KendoReact component to scaffold (e.g. `Button`, `Checkbox`, `DropDownList`).
- Second argument: `kendo-package` (optional) — the `@progress/kendo-react-*` package. If omitted, discover it.

---

## What to do

Follow the skill definition at `skills/kendo-storybook-scaffold.md` exactly. Summary:

1. **Discover** the package and real prop axes from Kendo's own type defs in `node_modules/@progress/kendo-react-*/index.d.ts` — never guess option lists.
2. **Write the wrapper** `src/components/<ComponentName>/<ComponentName>.tsx` as a thin pass-through that forwards every prop to the Kendo component and re-exports Kendo's own props type. No branding, no styling, no `useState`/`useEffect`, no Storybook imports.
3. **Write the story** `src/stories/<ComponentName>.stories.tsx`: CSF3, title `Raw Kendo/<ComponentName>`, an `argTypes` entry for every meaningful prop axis (options matching Kendo exactly), event props as `{ action }`, variant stories per axis + an `AllVariants`.
4. **Verify**: `npx tsc --noEmit` clean, `npm run build-storybook` exits 0, story appears in `storybook-static/index.json`.
5. **Report** the two file paths, exposed controls, story names, and that live-controls / no-console-errors is a visual sign-off in the running Storybook.

Do NOT modify `.storybook/`, `package.json`, `DESIGN.md`, or `src/theme/kendo-overrides.css` (branding is a different skill's job).
