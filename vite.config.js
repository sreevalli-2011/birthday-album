import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add this 'base' property:
  base: '/birthday-album/', // This is your repository name enclosed in slashes
});