<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300" :class="{ 'navbar-scroll': isScrolled }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <img 
              src="/src/assets/images/lumora-logo-final.webp" 
              alt="Lumora Horizon Logo" 
              class="h-12 w-auto object-contain max-w-[220px]"
            />
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="flex items-center space-x-8">
            <router-link
              to="/"
              class="text-gray-700 hover:text-lumora-red px-3 py-2 text-sm font-medium transition-colors"
              :class="{ 'text-lumora-red': route.name === 'Home' }"
            >
              Home
            </router-link>
            <router-link
              to="/about"
              class="text-gray-700 hover:text-lumora-red px-3 py-2 text-sm font-medium transition-colors"
              :class="{ 'text-lumora-red': route.name === 'About' }"
            >
              About
            </router-link>
            
            <!-- Services Dropdown -->
            <div class="relative" @mouseenter="showServicesDropdown = true" @mouseleave="showServicesDropdown = false">
              <router-link
                to="/services"
                class="text-gray-700 hover:text-lumora-red px-3 py-2 text-sm font-medium transition-colors flex items-center"
                :class="{ 'text-lumora-red': isServicesActive }"
              >
                Services
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </router-link>
              
              <!-- Dropdown Menu -->
              <div v-show="showServicesDropdown" class="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <router-link
                  to="/services"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-lumora-beige/20 hover:text-lumora-red transition-colors font-semibold"
                >
                  All Services
                </router-link>
                <div class="border-t border-gray-100 my-1"></div>
                <router-link
                  to="/air-freight"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-lumora-beige/20 hover:text-lumora-red transition-colors"
                >
                  Air Freight Services
                </router-link>
                <router-link
                  to="/sea-freight"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-lumora-beige/20 hover:text-lumora-red transition-colors"
                >
                  Sea Freight Services
                </router-link>
                <router-link
                  to="/land-freight"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-lumora-beige/20 hover:text-lumora-red transition-colors"
                >
                  Land Freight Services
                </router-link>
                <router-link
                  to="/customs-clearance"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-lumora-beige/20 hover:text-lumora-red transition-colors"
                >
                  Customs Clearance
                </router-link>
                <router-link
                  to="/domestic-transport"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-lumora-beige/20 hover:text-lumora-red transition-colors"
                >
                  Domestic Transportation
                </router-link>
                <router-link
                  to="/packing-storage"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-lumora-beige/20 hover:text-lumora-red transition-colors"
                >
                  Packing, Storage & Cargo Insurance
                </router-link>
                <router-link
                  to="/global-network"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-lumora-beige/20 hover:text-lumora-red transition-colors"
                >
                  Global Shipping Network
                </router-link>
              </div>
            </div>


            <router-link
              to="/information-center"
              class="text-gray-700 hover:text-lumora-red px-3 py-2 text-sm font-medium transition-colors"
              :class="{ 'text-lumora-red': route.name === 'InformationCenter' }"
            >
              Information Center
            </router-link>
            <router-link
              to="/faq"
              class="text-gray-700 hover:text-lumora-red px-3 py-2 text-sm font-medium transition-colors"
              :class="{ 'text-lumora-red': route.name === 'FAQ' }"
            >
              FAQ
            </router-link>
            <router-link
              to="/contact"
              class="bg-lumora-red text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-lumora-red/90 transition-colors"
            >
              Contact
            </router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="text-gray-700 hover:text-lumora-red focus:outline-none focus:text-lumora-red"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-show="isOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
        <router-link
          to="/"
          @click="isOpen = false"
          class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lumora-red hover:bg-gray-50 rounded-md transition-colors"
          :class="{ 'text-lumora-red bg-lumora-beige/20': route.name === 'Home' }"
        >
          Home
        </router-link>
        <router-link
          to="/about"
          @click="isOpen = false"
          class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lumora-red hover:bg-gray-50 rounded-md transition-colors"
          :class="{ 'text-lumora-red bg-lumora-beige/20': route.name === 'About' }"
        >
          About
        </router-link>
        
        <!-- Services Section -->
        <div class="border-t border-gray-100 pt-2 mt-2">
          <p class="px-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">Services</p>
          <router-link
            to="/services"
            @click="isOpen = false"
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lumora-red hover:bg-gray-50 rounded-md transition-colors"
            :class="{ 'text-lumora-red bg-lumora-beige/20': route.name === 'Services' }"
          >
            All Services
          </router-link>
          <router-link
            to="/air-freight"
            @click="isOpen = false"
            class="block px-3 py-2 text-sm text-gray-600 hover:text-lumora-red hover:bg-gray-50 rounded-md transition-colors"
            :class="{ 'text-lumora-red bg-lumora-beige/20': route.name === 'AirFreight' }"
          >
            Air Freight Services
          </router-link>
          <router-link
            to="/sea-freight"
            @click="isOpen = false"
            class="block px-3 py-2 text-sm text-gray-600 hover:text-lumora-red hover:bg-gray-50 rounded-md transition-colors"
            :class="{ 'text-lumora-red bg-lumora-beige/20': route.name === 'SeaFreight' }"
          >
            Sea Freight Services
          </router-link>
          <router-link
            to="/land-freight"
            @click="isOpen = false"
            class="block px-3 py-2 text-sm text-gray-600 hover:text-lumora-red hover:bg-gray-50 rounded-md transition-colors"
            :class="{ 'text-lumora-red bg-lumora-beige/20': route.name === 'LandFreight' }"
          >
            Land Freight Services
          </router-link>
          <router-link
            to="/customs-clearance"
            @click="isOpen = false"
            class="block px-3 py-2 text-sm text-gray-600 hover:text-lumora-red hover:bg-gray-50 rounded-md transition-colors"
            :class="{ 'text-lumora-red bg-lumora-beige/20': route.name === 'CustomsClearance' }"
          >
            Customs Clearance
          </router-link>
          <router-link
            to="/domestic-transport"
            @click="isOpen = false"
            class="block px-3 py-2 text-sm text-gray-600 hover:text-lumora-red hover:bg-gray-50 rounded-md transition-colors"
            :class="{ 'text-lumora-red bg-lumora-beige/20': route.name === 'DomesticTransport' }"
          >
            Domestic Transportation
          </router-link>
          <router-link
            to="/packing-storage"
            @click="isOpen = false"
            class="block px-3 py-2 text-sm text-gray-600 hover:text-lumora-red hover:bg-gray-50 rounded-md transition-colors"
            :class="{ 'text-lumora-red bg-lumora-beige/20': route.name === 'PackingStorage' }"
          >
            Packing, Storage & Cargo Insurance
          </router-link>
          <router-link
            to="/global-network"
            @click="isOpen = false"
            class="block px-3 py-2 text-sm text-gray-600 hover:text-lumora-red hover:bg-gray-50 rounded-md transition-colors"
            :class="{ 'text-lumora-red bg-lumora-beige/20': route.name === 'GlobalNetwork' }"
          >
            Global Shipping Network
          </router-link>
        </div>


        <router-link
          to="/information-center"
          @click="isOpen = false"
          class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lumora-red hover:bg-gray-50 rounded-md transition-colors"
          :class="{ 'text-lumora-red bg-lumora-beige/20': route.name === 'InformationCenter' }"
        >
          Information Center
        </router-link>
        <router-link
          to="/faq"
          @click="isOpen = false"
          class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lumora-red hover:bg-gray-50 rounded-md transition-colors"
          :class="{ 'text-lumora-red bg-lumora-beige/20': route.name === 'FAQ' }"
        >
          FAQ
        </router-link>
        <router-link
          to="/contact"
          @click="isOpen = false"
          class="block px-3 py-2 text-base font-medium bg-lumora-red text-white rounded-md hover:bg-lumora-red/90 transition-colors"
        >
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)
const showServicesDropdown = ref(false)
const isScrolled = ref(false)

// Computed property to check if any services page is active
const isServicesActive = computed(() => {
  const serviceRoutes = ['Services', 'AirFreight', 'SeaFreight', 'LandFreight', 'CustomsClearance', 'DomesticTransport', 'PackingStorage', 'GlobalNetwork']
  return serviceRoutes.includes(route.name)
})

// Handle scroll events for navbar styling
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
