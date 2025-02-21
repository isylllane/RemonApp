<template>
  <v-btn @click = "getData"
         to = "/profile"
  > Получить данные
  </v-btn>

</template>
<style>

</style>
<script setup>
import {onMounted} from "vue";

onMounted(() => {
  if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.ready();
    console.log("Telegram Web App API доступен");
  } else {
    console.log("Telegram Web App API недоступен");
  }
});

console.log("Данные инициализации:", window.Telegram);

const getData = () => {
  // Пример получения данных из Telegram
  if (window.Telegram && window.Telegram.WebApp) {
    const user = window.Telegram.WebApp.initDataUnsafe?.user;
    console.log("Пользователь:", user);
  } else {
    console.log("Telegram Web App API не доступен.");
  }
};
</script>
