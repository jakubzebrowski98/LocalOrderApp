import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/WelcomePage/Welcome.vue'
import Menu from '../views/Menu/MenuPage.vue'
import SummaryOrder from '../views/SummaryOrder/SummaryPage'
import successPage from '../views/EndPage/SuccessPage'
import errorPage from '../views/EndPage/FailPage'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/zamowienie/:type/menu/:category',
    name: 'menu',
    component: Menu,
    props: true,
  },
  {
    path: '/zamowienie/:type/zakończ',
    name: 'SummaryOrder',
    component: SummaryOrder,
    props: true,
  },
  {
    path: '/zamowienie/zakonczono/:OrderNo',
    name: 'success',
    component: successPage,
    props: true,
  },
  {
    path: '/zamowienie/blad',
    name: 'error',
    component: errorPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
