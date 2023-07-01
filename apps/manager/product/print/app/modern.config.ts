import { appTools, defineConfig } from '@modern-js/app-tools';

import { garfishPlugin } from '@modern-js/plugin-garfish';
// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  server: { port: 8083 },
  deploy: {
    microFrontend: true,
  },
  runtime: {
    router: true,
  },
  plugins: [appTools(),garfishPlugin()],
});
