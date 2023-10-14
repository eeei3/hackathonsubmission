import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env.VITE_FIRE_API_KEY':  JSON.stringify(process.env.VITE_FIRE_API_KEY),
    'process.env.VITE_FIRE_PRJ_ID': JSON.stringify(process.env.VITE_FIRE_PRJ_ID),
    'process.env.VITE_FIRE_STG_BKT': JSON.stringify(process.env.VITE_FIRE_STG_BKT),
    'process.env.VITE_FIRE_MSG_ID': JSON.stringify(process.env.VITE_FIRE_MSG_ID),
    'process.env.VITE_FIRE_ID': JSON.stringify(process.env.VITE_FIRE_ID),
    'process.env.VITE_FIRE_MESG_ID': JSON.stringify(process.env.VITE_FIRE_MESG_ID)
  }
})
