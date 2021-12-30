import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/v2": {
                target: "https://192.168.12.51:5000/",
                secure: false,
                changeOrigin: true,
            }
        }
    }
})
