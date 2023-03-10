import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    server: {
        host: '0.0.0.0',
        hmr: {
            host: 'localhost'
        }
    },
    plugins: [
        laravel({
            input: [
                'resources/css/front.css',
                'resources/css/admin.css',
                'resources/js/admin.js',
                'resources/js/app.js'
            ],
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue(),
        viteStaticCopy({
            targets: [
                {
                    src: 'resources/css/img',
                    dest: ''
                }
            ]
        })
    ],
})
