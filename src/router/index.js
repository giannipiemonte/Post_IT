import Vue from 'vue'
import VueRouter from 'vue-router'
import Notes from '../views/Notes.vue'
//import Note from '../components/Notes.vue'
import NoteShow from '../views/NoteShow.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Notes',
    component: Notes
  },
  {
    path: '/NoteShow/:_id',
    name: 'NoteShow',
    component: NoteShow,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
