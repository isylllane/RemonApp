<script setup>


import {ref} from "vue";

const tabs = ref(null);
</script>

<template>
  <v-card>

    <v-tabs
      class = "tab-bar"
      v-model = "tab"

      align-tabs = "center"
      bg-color = "deep-purple-accent-4"
      stacked
    >
      <router-link to = "/">

        <v-tab value = "tab-1"
               active
        >
          <v-icon icon = "mdi-phone"></v-icon>

          Главная
        </v-tab>
      </router-link>
      <router-link to = "/profile">

        <v-tab value = "tab-2">
          <v-icon icon = "mdi-heart"></v-icon>

          Профиль
        </v-tab>
      </router-link>

      <v-tab value = "tab-3">
        <v-icon icon = "mdi-account-box"></v-icon>

        Nearby
      </v-tab>
    </v-tabs>

  </v-card>
</template>

<style scoped>
.tab-bar {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
