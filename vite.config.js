import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'robots.txt', 'icons/icon-192x192.png', 'icons/icon-512x512.png'],
    manifest: {
      name: 'Your App Name',
      short_name: 'App Name',
      description: 'Your PWA description here',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/icons/web-app-manifest-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icons/web-app-manifest-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  })
],
  server: {
    proxy:process.env.NODE_ENV === 'production' ? {} :  {
      '/api': {
        target: 'https://exclusive-4.onrender.com', // Proxy for backend
        changeOrigin: true,
        secure: false,
      },
    },
    host: true, // Allows access from other devices like your mobile
    port: 5173, // Default Vite port
    watch: {
      usePolling: true, // This ensures better file watching, useful when using Docker or VMs
    }
  },
  build: {
    outDir: 'dist', // Make sure the output directory matches where you want to publish the site
  }
});
