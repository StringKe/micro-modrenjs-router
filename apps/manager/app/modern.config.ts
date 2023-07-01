import { appTools, defineConfig } from '@modern-js/app-tools';
import { garfishPlugin } from '@modern-js/plugin-garfish';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
    masterApp: {
      apps: [
        {
          name: 'Admin',
          entry: 'http://localhost:8081',
        },
        {
          name: 'Product',
          entry: 'http://localhost:8082',
        },
        {
          name: 'PrintProduct',
          entry: 'http://localhost:8083',
        },
        {
          name: 'PrintProductFormDesign',
          entry: 'http://localhost:8084',
        },
      ],
    },
  },
  plugins: [appTools(), garfishPlugin()],
});
