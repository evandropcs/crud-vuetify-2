import Vue from 'vue'
import VueRouter from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue'
import PrivateLayout from '@/layouts/PrivateLayout.vue'
import HomeView from '@/views/HomeView.vue'
import TasksListView from '@/views/TasksListView.vue'
import LoginView from '@/views/LoginView.vue'
import PainelResumo from '@/views/PainelResumo.vue'
import CadastrarView from '@/views/CadastrarView.vue'
import NewTaskView from '@/views/NewTaskView.vue'
import EditTaskView from '@/views/EditTaskView .vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
    ],
  },
  {
    path: '/tasks',
    component: PrivateLayout,
    children: [
      {
        path: '',
        name: 'taskList',
        component: TasksListView,
      },
    ],
  },
  {
    path: '/login',
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'login',
        component: LoginView,
      },
    ],
  },
  {
    path: '/cadastrar',
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'cadastrar',
        component: CadastrarView,
      },
    ],
  },
  {
    path: '/painel',
    component: PrivateLayout,
    children: [
      {
        path: '',
        name: 'painel',
        component: PainelResumo,
      },
    ],
  },
  {
    path: '/newTask',
    component: PrivateLayout,
    children: [
      {
        path: '',
        name: 'newTask',
        component: NewTaskView,
      },
    ],
  },
  {
    path: '/editTask/:id',
    component: PrivateLayout,
    children: [
      {
        path: '',
        name: 'editTask',
        component: EditTaskView,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
