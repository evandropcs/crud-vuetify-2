<template>
  <v-footer padless fixed class="tam">
    <v-row justify="center" no-gutters>
      <v-col class="secondary pt-5 text-center grey--text" cols="12">
        Copyright® {{ new Date().getFullYear() }}
      </v-col>
      <v-col
        class="secondary pb-5 text-center grey--text text-caption"
        cols="12"
      >
        <p>
          <v-btn
            icon
            color="white"
            href="https://github.com/evandropcs/crud-vuetify"
            target="blank"
          >
            <v-icon>fa-brands fa-github</v-icon>
          </v-btn>
        </p>
      </v-col>
    </v-row>
  </v-footer>
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

<style scoped>
.tam {
  height: 80px;
}
</style>
