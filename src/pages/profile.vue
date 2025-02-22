<script setup>
import {useTelegram} from "@/store/useTelegram.js";

const store = useTelegram();
</script>

<template>
  <v-container>
    <v-sheet rounded
             elevation = "2"
             class = "px-6 py-8 d-flex flex-column justify-center align-center"
    >
      <div class = "text-h4 my-2">Профиль</div>

      <v-img
        :width = "150"
        aspect-ratio = "1/1"
        :src = store.devUser.photo_url
        class = "rounded-circle"
      ></v-img>
      <div class = "py-2">
        {{ store.devUser.first_name }}
        {{ store.devUser.last_name }}
      </div>

    </v-sheet>

    <v-btn class = "btn">
      Привет
    </v-btn>
  </v-container>
</template>

<style scoped

>
</style>
