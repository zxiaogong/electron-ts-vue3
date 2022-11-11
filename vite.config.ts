import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "vite-plugin-electron";
export default defineConfig({
  plugins: [
    vue(),
    electron(
      {
        entry: "electron/electron-main/index.ts", // 主进程文件
      },
    ),
  ],
});