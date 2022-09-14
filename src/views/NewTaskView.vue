<template>
  <div>
    <v-text-field v-model="newTask.title" label="Title"></v-text-field>
    <v-text-field v-model="newTask.project" label="Project"></v-text-field>
    <v-text-field v-model="newTask.dueTo" label="Dueto"></v-text-field>
    <button @click="createTask">Criar</button>
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
