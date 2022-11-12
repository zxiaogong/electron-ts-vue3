<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "../components/HelloWorld.vue";
import { useIpcRenderer } from "@vueuse/electron";
const ipcRenderer = useIpcRenderer();
const closeWin = (): void => {
  ipcRenderer.send("window-close", "关闭窗口"); // 向主进程通信
};
</script>

<template>
  <div class="root">
    <div class="nav">
      <div class="close" @click="closeWin">X</div>
    </div>
    <div class="content">
      <a href="https://vitejs.dev" target="_blank">
        <img src="../assets/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
      <HelloWorld msg="Vite + Vue" />
    </div>
  </div>
</template>

<style scoped>
.root {
  min-width: 100%;
  height: 100%;
}
.nav {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: end;
}
.close {
  line-height: 40px;
  height: 40px;
  width: 60px;
  text-align: center;
  border: 1px solid #fff;
  cursor: pointer;
  z-index: 1;
  position: fixed;
}
.content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
