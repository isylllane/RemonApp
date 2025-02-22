<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <TabBar/>
  </v-app>
</template>

<style>
body {
  height: var(--tg-viewport-height);
  background-color: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
}

v-sheet {
  background-color: var(--tg-theme-secondary-bg-color);
}

v-btn {
  color: var(--tg-theme-button-text-color);
  background-color: var(--tg-theme-button-color);
}
</style>
<script setup
>
import TabBar from "@/components/TabBar.vue";
</script>
