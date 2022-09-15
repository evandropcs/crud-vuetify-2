<template>
  <div>
    <v-text-field v-model="newTask.title" label="Title"></v-text-field>
    <v-text-field v-model="newTask.project" label="Project"></v-text-field>
    <v-text-field v-model="newTask.dueTo" label="Dueto"></v-text-field>
    <v-btn x-large rounded color="primary" dark @click="editTask">
      Salvar
    </v-btn>
  </div>
</template>

<script>
import TasksApi from '@/tasksapi.js'

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
    editTask() {
      TasksApi.editTask(this.$route.params.id, this.newTask).then(() => {
        this.$router.push({ name: 'taskList' })
      })
    },
  },
  created() {
    this.newTask = this.$route.params.task || ''
  },
}
</script>
