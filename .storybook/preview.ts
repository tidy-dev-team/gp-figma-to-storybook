import type { Preview } from '@storybook/react-vite';
import '@progress/kendo-theme-default/dist/all.css';

const preview: Preview = {
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
