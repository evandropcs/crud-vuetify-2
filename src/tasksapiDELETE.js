import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001'

export default {
  // Retorna lista de tarefas
  getTasks: (cb) => {
    axios
      .get('api/tasks')
      .then((response) => {
        cb(response.data)
      })
      .catch((error) => {
        console.log('error:', error)
      })
  },
  // Salva nova tarefa
  postTask: (task) => {
    return new Promise((resolve, reject) => {
      axios
        .post('/tasks', task)
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
  // Deleta tarefa
  deleteTasks: (taskId) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/tasks/${taskId}`)
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
  // Editar tarefa
  editTask: (taskid, task) => {
    return new Promise((resolve, reject) => {
      axios
        .put(`/tasks/${taskid}`, task)
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
}
