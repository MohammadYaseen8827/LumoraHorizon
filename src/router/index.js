import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import OceanFreight from '../views/OceanFreight.vue'
import AirFreight from '../views/AirFreight.vue'
import LandTransport from '../views/LandTransport.vue'
import Warehousing from '../views/Warehousing.vue'
import CustomClearance from '../views/CustomClearance.vue'

import FAQ from '../views/FAQ.vue'
import InformationCenter from '../views/InformationCenter.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/air-freight',
    name: 'AirFreight',
    component: AirFreight
  },
  {
    path: '/sea-freight',
    name: 'SeaFreight',
    component: () => import('../views/SeaFreight.vue')
  },
  {
    path: '/ocean-freight',
    name: 'OceanFreight',
    component: OceanFreight
  },
  {
    path: '/land-freight',
    name: 'LandFreight',
    component: () => import('../views/LandFreight.vue')
  },
  {
    path: '/land-transport',
    name: 'LandTransport',
    component: LandTransport
  },
  {
    path: '/customs-clearance',
    name: 'CustomsClearance',
    component: () => import('../views/CustomsClearance.vue')
  },
  {
    path: '/domestic-transport',
    name: 'DomesticTransport',
    component: () => import('../views/DomesticTransport.vue')
  },
  {
    path: '/packing-storage',
    name: 'PackingStorage',
    component: () => import('../views/PackingStorage.vue')
  },
  {
    path: '/warehousing',
    name: 'Warehousing',
    component: Warehousing
  },
  {
    path: '/global-network',
    name: 'GlobalNetwork',
    component: () => import('../views/GlobalNetwork.vue')
  },

  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/information-center',
    name: 'InformationCenter',
    component: InformationCenter
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
