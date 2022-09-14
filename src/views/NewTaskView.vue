<template>
  <div>
    <v-text-field v-model="newTask.title" label="Title"></v-text-field>
    <v-text-field v-model="newTask.project" label="Project"></v-text-field>
    <v-text-field v-model="newTask.dueTo" label="Dueto"></v-text-field>
    <v-btn x-large rounded color="primary" dark @click="createTask">
      Criar
    </v-btn>
    <v-btn x-large rounded color="primary" dark :to="{ name: 'taskList' }">
      Listar tarefas
    </v-btn>
  </div>
</template>

<script>
import taskapi from '@/tasksapi.js'
export default {
  data: () => {
    return {
      newTask: {
        title: '',
        project: '',
        dueTo: '',
      },
    }
  },
  methods: {
    createTask() {
      taskapi.postTask(this.newTask)
    },
  },
}
</script>
