<template>
  <div>
    <v-main class="overflow-hidden mt-2">
      <v-container>
        <v-row>
          <v-col class="pa-1" cols="12">
            <v-card>
              <v-card-text>
                <v-text-field
                  v-model="newTask.title"
                  label="Title"
                ></v-text-field>
                <v-text-field
                  v-model="newTask.project"
                  label="Project"
                ></v-text-field>
                <!-- <v-text-field
                  v-model="newTask.dueTo"
                  label="Dueto"
                ></v-text-field> -->
                <v-btn x-large rounded color="primary" dark @click="editTask">
                  Salvar
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import TasksApi from '@/api/tasks.api.js'

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
