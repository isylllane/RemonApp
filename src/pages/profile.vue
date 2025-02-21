<script setup>
// const user = {
//   "id": 1702859584,
//   "first_name": "keyframes",
//   "last_name": "box",
//   "username": "keyframes_box",
//   "language_code": "ru",
//   "allows_write_to_pm": true,
//   "photo_url": "https://t.me/i/userpic/320/R2eVpsPAiG_R8zsVJmI7p--Clb09aotTTBEVAaBPZH0.svg"
// };

const user = window.Telegram.WebApp.initDataUnsafe?.user;
const photo = user.photo_url;
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
        :src = photo
        class = "rounded-circle"
      ></v-img>
      <div class = "py-2">
        {{ user.first_name }}
        {{ user.last_name }}

      </div>

    </v-sheet>
  </v-container>
</template>

<style scoped
       lang = "sass"
>

</style>
