import { appTools, defineConfig } from '@modern-js/app-tools';
import { garfishPlugin } from '@modern-js/plugin-garfish';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
    masterApp: {
      apps: [
        {
          name: 'Product',
          entry: 'http://localhost:8082',
        },
      ],
    },
  },
  plugins: [appTools(), garfishPlugin()],
});
