import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  define: {
    global: 'globalThis',
    'process.env': {},
    'process.env.TEST_NATIVE_PLATFORM': JSON.stringify('web'),
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
        'process.env': '{}',
        'process.env.TEST_NATIVE_PLATFORM': '"web"',
      },
    },
  },
});
