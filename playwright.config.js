import {defineConfig} from '@playwright/test'

export default defineConfig({
    use:{
        baseURL:'http://localhost:5173/',
        headless:true
    },
     webServer: [
    {
      command: 'npm run dev --prefix api',
      port: 5000,
      timeout: 120000,
      reuseExistingServer: !process.env.CI
    },
    {
      command: 'npm run dev --prefix frontend',
      port: 5173,
      timeout: 120000,
      reuseExistingServer: !process.env.CI
    }
  ]
})