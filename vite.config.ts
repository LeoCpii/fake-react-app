import dns from 'dns';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.BASE_URL,
    plugins: [
        svgr(),
        react()
    ],
    build: {
        target: 'esnext' //browsers can handle the latest ES features
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
});
