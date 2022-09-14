import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

export default {
  // Retorna lista de tarefas
  getTasks: (cb) => {
    axios
      .get('/tasks')
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
}
// // GET de uma task específica
// function getTask(taskId, cb) {
//   axios
//     .get(`/tasks/${taskId}`)
//     .then((response) => {
//       cb(response.data)
//     })x'
//     .catch((error) => {
//       console.log('error:', error)
//     })
// }

// POST para criar uma nova tarefa
// createTask(title, project, date, cb)=> {
//   console.log(`${title}, ${project}, ${date}`)
//   const taskData = {
//     title: title,
//     project: project,
//     dueTo: date,
//   }
//   axios
//     .post(`/tasks`, taskData)
//     .then((response) => {
//       cb(response.data)
//     })
//     .catch((error) => {
//       console.log('erro:', error)
//     })
// }

// PUT para atutalizar todos dados da tarefa
// function updateTask(taskId, title, project, date, cb) {
//   const taskData = {
//     title: title,
//     project: project,
//     dueTo: date,
//   }
//   axios
//     .put(`/tasks/${taskId}`, taskData)
//     .then((response) => {
//       cb(response.data)
//     })
//     .catch((error) => {
//       console.log('erro:', error)
//     })
// }

// PATCH para atutalizar um dado da tarefa
// function updateTaskDate(taskId, date) {
//   const taskData = {
//     dueTo: date,
//   }
//   axios
//     .patch(`/tasks/${taskId}`, taskData)
//     .then((response) => {
//       console.log('Tarefa salva', response.data)
//     })
//     .catch((error) => {
//       console.log('erro:', error)
//     })
// }

// DELETE para apagar uma tarefa
// function deleteTask(taskId, cb) {
//   axios
//     .delete(`/tasks/${taskId}`)
//     .then((response) => {
//       cb(response.data)
//     })
//     .catch((error) => {
//       console.log('erro:', error)
//     })
// }
