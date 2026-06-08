import type { Preview } from '@storybook/react-vite';
import '@progress/kendo-theme-default/dist/all.css';
// Imported as a string (not a global stylesheet) so the override can be
// layered on/off per the `branding` toolbar global below.
import overridesCss from '../src/theme/kendo-overrides.css?inline';

const OVERRIDE_STYLE_ID = 'kendo-overrides';

/**
 * Inject or remove the Genpact brand override (`kendo-overrides.css`) as a
 * <style> tag, driven by the `branding` toolbar global.
 *
 * The KendoReact Default theme is always loaded. The brand override is the
 * *output* of the round-trip's step 4, so it is layered on only when branding
 * is "on". This keeps `Raw Kendo/*` stories on default Kendo — the contract
 * stages 1–2 mirror against — while branded `Genpact/*` stories opt in via
 * meta-level `globals: { branding: 'on' }`.
 */
const applyBranding = (on: boolean) => {
  const existing = document.getElementById(OVERRIDE_STYLE_ID);
  if (on) {
    const el = (existing as HTMLStyleElement | null) ?? document.createElement('style');
    el.id = OVERRIDE_STYLE_ID;
    el.textContent = overridesCss;
    if (!existing) document.head.appendChild(el);
  } else {
    existing?.remove();
  }
};

const preview: Preview = {
  initialGlobals: {
    branding: 'off',
  },
  globalTypes: {
    branding: {
      description: 'Genpact brand override (kendo-overrides.css)',
      toolbar: {
        title: 'Branding',
        icon: 'paintbrush',
        items: [
          { value: 'off', title: 'Default Kendo' },
          { value: 'on', title: 'Genpact branded' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      applyBranding(context.globals.branding === 'on');
      return Story();
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'padded',
  },
};

export default preview;
