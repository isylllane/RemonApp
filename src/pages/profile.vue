<script setup>
const user = window.Telegram.WebApp.initDataUnsafe?.user;
</script>

<template>
  <v-container>
    <v-sheet rounded
             height = '200px'
             elevation = '2'
             class = 'mx-auto px-6 py-8'
    >
      <div class = 'text-h4 mx-auto d-flex justify-center'>Профиль</div>
      {{ user }}
    </v-sheet>
  </v-container>
</template>

<style scoped
       lang = 'sass'
>

</style>
