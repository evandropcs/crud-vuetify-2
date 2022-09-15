<template>
  <v-toolbar dense>
    <v-col class="pt- text-center --text" cols="5"></v-col>
    <h1 class="center orange--text font-weight-black">To Do List</h1>
    <v-spacer></v-spacer>

    <v-btn icon :to="{ name: 'home' }">
      <v-icon>fa-solid fa-house</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import settings from '@/settings'

export default {
  data: () => ({
    version: settings.version,
    nodeEnv: settings.nodeEnv,
  }),
}
</script>
