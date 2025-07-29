<template>
  <section class="relative bg-gradient-to-br from-lumora-red to-lumora-red/90 text-white overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-8">
          <div>
            <h1 class="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Connecting 
              <span class="text-lumora-beige">Global Commerce</span> 
              with Excellence
            </h1>
            <p class="text-xl lg:text-2xl text-lumora-beige/90 leading-relaxed">
              Your trusted partner for comprehensive shipping solutions across oceans, 
              skies, and continents. Experience reliability redefined.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <router-link 
              to="/contact" 
              class="inline-block bg-white text-lumora-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-lumora-beige transition-colors text-center"
            >
              Get Free Quote
            </router-link>
            <router-link 
              to="/services" 
              class="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-lumora-red transition-colors text-center"
            >
              Explore Services
            </router-link>
          </div>

          <!-- Key Features -->
          <div class="grid grid-cols-3 gap-6 pt-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-lumora-beige">150+</div>
              <div class="text-sm text-lumora-beige/80">Global Destinations</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-lumora-beige">99.8%</div>
              <div class="text-sm text-lumora-beige/80">On-Time Delivery</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-lumora-beige">24/7</div>
              <div class="text-sm text-lumora-beige/80">Support</div>
            </div>
          </div>
        </div>

        <!-- Visual Element -->
        <div class="relative">
          <div class="bg-lumora-beige/20 rounded-2xl p-8 backdrop-blur-sm">
            <!-- Container Ship Illustration -->
            <div class="relative">
              <img src="/src/assets/images/container-ship.svg" alt="Container Ship" class="w-full h-64">
              
              <!-- Floating Elements -->
              <div class="absolute top-8 right-8 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </div>
              
              <div class="absolute bottom-8 left-8 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Wave -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg class="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,96L40,85.3C80,75,160,53,240,58.7C320,64,400,96,480,101.3C560,107,640,85,720,74.7C800,64,880,64,960,58.7C1040,53,1120,43,1160,37.3L1200,32L1200,120L1160,120C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120L0,120Z" fill="currentColor"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
// No reactive data needed for this component
</script>
