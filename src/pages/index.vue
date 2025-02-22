<template>
  <div class = "">

    <v-tabs
    >
      <v-tab
        v-for = "i in 6"
        :key = "i"
        :text = "'фев ' + i"
        :value = "'tab-' + i"
      ></v-tab>
    </v-tabs>
    <v-tabs
      bg-color = "teal-darken-3"
      slider-color = "teal-lighten-3"
    >
      <v-tab
        v-for = "(day, index) in ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']"
        :key = "index"
        :text = "day"
        :value = "'tab-' + index"
      ></v-tab>
    </v-tabs>
  </div>
</template>
<style>

</style>
<script setup>


</script>
