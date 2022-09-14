<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/task.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">CRUD Vuetify</h1>

        <p class="subheading font-weight-regular">
          Lista de tarefas usando VueJS + Vuetify + API Mock
        </p>
        <p>
          <v-btn x-large rounded class="orange" :to="{ name: 'login' }">
            Iniciar
          </v-btn>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>
