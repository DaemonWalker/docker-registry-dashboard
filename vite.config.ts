import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/v2": {
                target: "http://49.232.131.156:5000/",
                secure: false,
                changeOrigin: true,
            }
        }
    }
})
