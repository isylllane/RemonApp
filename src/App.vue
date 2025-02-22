<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <TabBar/>
  </v-app>
</template>

<style>

</style>
<script setup
>
import TabBar from "@/components/TabBar.vue";
</script>
