import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Folio from './components/Folio.vue'
import Contact from './components/Contact.vue'

const routes = [
  { path: '/', component: Home},
  { path: '/about', component: About},
  { path: '/folio', component: Folio},
  { path: '/contact', component: Contact},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;