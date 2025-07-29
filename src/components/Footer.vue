<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="py-16 grid md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="md:col-span-1">
          <div class="mb-6">
            <img 
              src="/src/assets/images/lumora-logo-final.webp" 
              alt="Lumora Horizon" 
              class="h-16 w-auto object-contain max-w-[200px]"
            />
          </div>
          <p class="text-gray-400 mb-6">
            A new-generation logistics company powered by young energy, over a decade of industry experience, 
            and a deep understanding of global trade.
          </p>

        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <router-link to="/" class="text-gray-400 hover:text-lumora-beige transition-colors">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-400 hover:text-lumora-beige transition-colors">
                About Us
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="text-gray-400 hover:text-lumora-beige transition-colors">
                Our Services
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-gray-400 hover:text-lumora-beige transition-colors">
                Contact
              </router-link>
            </li>

          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Services</h3>
          <ul class="space-y-3">
            <li>
              <router-link to="/air-freight" class="text-gray-400 hover:text-lumora-beige transition-colors">
                Air Freight Services
              </router-link>
            </li>
            <li>
              <router-link to="/sea-freight" class="text-gray-400 hover:text-lumora-beige transition-colors">
                Sea Freight Services
              </router-link>
            </li>
            <li>
              <router-link to="/land-freight" class="text-gray-400 hover:text-lumora-beige transition-colors">
                Land Freight Services
              </router-link>
            </li>
            <li>
              <router-link to="/customs-clearance" class="text-gray-400 hover:text-lumora-beige transition-colors">
                Customs Clearance
              </router-link>
            </li>
            <li>
              <router-link to="/domestic-transport" class="text-gray-400 hover:text-lumora-beige transition-colors">
                Domestic Transportation
              </router-link>
            </li>
            <li>
              <router-link to="/packing-storage" class="text-gray-400 hover:text-lumora-beige transition-colors">
                Packing, Storage & Cargo Insurance
              </router-link>
            </li>
            <li>
              <router-link to="/global-network" class="text-gray-400 hover:text-lumora-beige transition-colors">
                Global Shipping Network
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Contact Info</h3>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-lumora-beige mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <div class="text-gray-400">
                <p>West Park Complex, 40 Meter</p>
                <p>Next to Italian Village 1</p>
                <p>Second Floor, Office 17</p>
                <p>Erbil, Iraq</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-lumora-beige flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span class="text-gray-400">+964 771 754 7000</span>
            </div>
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-lumora-beige flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span class="text-gray-400">info@lumorahorizon.com</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="border-t border-gray-800 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0">
            <p class="text-gray-400 text-sm">
              © 2025 Lumora Horizon. All rights reserved.
            </p>
          </div>
          <div class="mt-4 md:mt-0">
            <p class="text-gray-400 text-sm">
              Certified by ISO 9001:2015 | IATA Certified
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No reactive data needed for this component
</script>
