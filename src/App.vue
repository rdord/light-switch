<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #2d2d2d;
}

.light {
  background-color: #413f4285;
  transition: background-color 0.3s ease;
}

.dark {
  transition: background-color 1.2s ease;
}
</style>
