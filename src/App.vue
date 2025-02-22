<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <TabBar/>
  </v-app>
</template>

<style>
.v-application {
  height: var(--tg-viewport-height);
  background-color: var(--tg-theme-bg-color) !important;
  color: var(--tg-theme-text-color) !important;
}

.v-sheet {
  background-color: var(--tg-theme-secondary-bg-color) !important;
}

.v-btn {
  color: var(--tg-theme-button-text-color) !important;
  background-color: var(--tg-theme-button-color) !important;
}
</style>
<script setup
>
import TabBar from "@/components/TabBar.vue";
</script>
