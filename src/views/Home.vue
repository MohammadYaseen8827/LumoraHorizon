<template>
  <div>
    <!-- Image Slider Hero Section -->
    <section class="relative h-screen min-h-[500px] bg-gray-900 overflow-hidden">
      <!-- Image Slider Container -->
      <div class="relative h-full">
        <!-- Slider Images -->
        <!-- Slide 1: Logo -->
        <div class="absolute inset-0 transition-opacity duration-1000" :class="{ 'opacity-100': currentSlide === 0, 'opacity-0': currentSlide !== 0 }">
          <div class="w-full h-full bg-gradient-to-r from-lumora-beige to-yellow-100 flex items-center justify-center">
            <div class="w-full h-full flex items-center justify-center p-8">
              <img src="/attached_assets/IMG_20250621_220128_1750535369720.jpg" alt="Lumora Horizon Logo" class="max-w-full max-h-full object-contain">
            </div>
          </div>
        </div>
        
        <!-- Slide 2: Air Freight Services -->
        <div class="absolute inset-0 transition-opacity duration-1000" :class="{ 'opacity-100': currentSlide === 1, 'opacity-0': currentSlide !== 1 }">
          <div class="w-full h-full bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center">
            <div class="text-center text-white px-4">
              <svg class="w-24 h-24 mx-auto mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path>
              </svg>
              <h3 class="text-3xl font-bold mb-4">Air Freight Services</h3>
              <p class="text-xl mb-6 max-w-2xl">Fast and Time Critical Air cargo shipping worldwide to Iraq and Vice versa</p>
              <router-link
                to="/air-freight"
                class="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                Learn More
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- Slide 3: Sea Freight Services -->
        <div class="absolute inset-0 transition-opacity duration-1000" :class="{ 'opacity-100': currentSlide === 2, 'opacity-0': currentSlide !== 2 }">
          <div class="w-full h-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center">
            <div class="text-center text-white px-4">
              <svg class="w-24 h-24 mx-auto mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <h3 class="text-3xl font-bold mb-4">Sea Freight Services</h3>
              <p class="text-xl mb-6 max-w-2xl">FCL / LCL and Consolidation Box service by Sea Cargo shipping to Um Qasr Port</p>
              <router-link
                to="/sea-freight"
                class="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Learn More
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- Slide 4: Land Freight Services -->
        <div class="absolute inset-0 transition-opacity duration-1000" :class="{ 'opacity-100': currentSlide === 3, 'opacity-0': currentSlide !== 3 }">
          <div class="w-full h-full bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center">
            <div class="text-center text-white px-4">
              <svg class="w-24 h-24 mx-auto mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m9 4.5H7.5A1.5 1.5 0 016 16.5v-2.25M15 12.75V9a3 3 0 00-6 0v3.75m6 0v2.25a1.5 1.5 0 01-1.5 1.5H9.75a1.5 1.5 0 01-1.5-1.5v-2.25m6 0V9a3 3 0 00-6 0v3.75"></path>
              </svg>
              <h3 class="text-3xl font-bold mb-4">Land Freight Services</h3>
              <p class="text-xl mb-6 max-w-2xl">Trucking Service as FTL / LTL from Europe and Turkey via Ibrahim Khalil border</p>
              <router-link
                to="/land-freight"
                class="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Learn More
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- Slide 5: Customs Clearance -->
        <div class="absolute inset-0 transition-opacity duration-1000" :class="{ 'opacity-100': currentSlide === 4, 'opacity-0': currentSlide !== 4 }">
          <div class="w-full h-full bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center">
            <div class="text-center text-white px-4">
              <svg class="w-24 h-24 mx-auto mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <h3 class="text-3xl font-bold mb-4">Customs Clearance</h3>
              <p class="text-xl mb-6 max-w-2xl">Export and Import Clearance at all Iraqi borders and ports</p>
              <router-link
                to="/customs-clearance"
                class="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Learn More
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- Slide 6: Domestic Transportation -->
        <div class="absolute inset-0 transition-opacity duration-1000" :class="{ 'opacity-100': currentSlide === 5, 'opacity-0': currentSlide !== 5 }">
          <div class="w-full h-full bg-gradient-to-r from-yellow-600 to-yellow-700 flex items-center justify-center">
            <div class="text-center text-white px-4">
              <svg class="w-24 h-24 mx-auto mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <h3 class="text-3xl font-bold mb-4">Domestic Transportation</h3>
              <p class="text-xl mb-6 max-w-2xl">Whether it's Kurdistan to Basra or anywhere in between — we move it safely, efficiently, and on schedule</p>
              <router-link
                to="/domestic-transport"
                class="inline-flex items-center bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
              >
                Learn More
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- Slide 7: Packing, Storage & Cargo Insurance -->
        <div class="absolute inset-0 transition-opacity duration-1000" :class="{ 'opacity-100': currentSlide === 6, 'opacity-0': currentSlide !== 6 }">
          <div class="w-full h-full bg-gradient-to-r from-indigo-600 to-indigo-700 flex items-center justify-center">
            <div class="text-center text-white px-4">
              <svg class="w-24 h-24 mx-auto mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
              <h3 class="text-3xl font-bold mb-4">Packing, Storage & Cargo Insurance</h3>
              <p class="text-xl mb-6 max-w-2xl">Complete protection with insurance coverage</p>
              <router-link
                to="/packing-storage"
                class="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Learn More
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- Slide 8: Global Shipping Network -->
        <div class="absolute inset-0 transition-opacity duration-1000" :class="{ 'opacity-100': currentSlide === 7, 'opacity-0': currentSlide !== 7 }">
          <div class="w-full h-full bg-gradient-to-r from-teal-600 to-teal-700 flex items-center justify-center">
            <div class="text-center text-white px-4">
              <svg class="w-24 h-24 mx-auto mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
              </svg>
              <h3 class="text-3xl font-bold mb-4">Global Shipping Network</h3>
              <p class="text-xl mb-6 max-w-2xl">Worldwide reach through trusted partnerships</p>
              <router-link
                to="/global-network"
                class="inline-flex items-center bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
              >
                Learn More
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>





        <!-- Dots Navigation -->
        <div class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
          <button 
            v-for="(slide, index) in 8" 
            :key="index" 
            @click="currentSlide = index"
            class="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125"
            :class="{ 'bg-white': currentSlide === index, 'bg-white/50': currentSlide !== index }"
          ></button>
        </div>
      </div>
    </section>

    <!-- Content Section (moved from above slider) -->
    <section class="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8 fade-in-up">
          Shipping Solutions to <span class="text-lumora-beige">Iraq</span> and 
          <span class="text-lumora-beige">Beyond</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8 md:mb-12 fade-in-up stagger-1 max-w-4xl mx-auto">
          Lumora Horizon specializes in cargo movement to Iraq from anywhere in the world. As a new-generation logistics 
          company powered by young energy, over a decade of industry experience, and deep understanding of Iraqi trade routes, 
          we offer end-to-end shipping, clearance, packing, storage, and insurance services for businesses importing to Iraq.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center fade-in-up stagger-2 mb-12">
          <router-link 
            to="/contact" 
            class="inline-block bg-lumora-red text-white px-6 sm:px-8 lg:px-10 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-lumora-red/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl btn-interactive"
          >
            Request Quote
          </router-link>
          <router-link 
            to="/services" 
            class="inline-block border-2 border-white text-white px-6 sm:px-8 lg:px-10 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            View Our Services
          </router-link>
        </div>

        <!-- Global Network Info -->
        <div class="mb-12">
          <p class="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Through strong international partnerships and networks like <span class="text-lumora-beige font-semibold">WCA, GLA, and JCTrans</span>, 
            we've built trusted worldwide relationships that allow us to move cargo from any country to Iraq — and beyond.
          </p>
        </div>

        <!-- Responsive stats -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 fade-in-up stagger-3">
          <div class="text-center">
            <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-lumora-beige mb-1 md:mb-2 scale-in">150+</div>
            <div class="text-sm sm:text-base text-gray-300">Global Destinations</div>
          </div>
          <div class="text-center">
            <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-lumora-beige mb-1 md:mb-2 scale-in stagger-1">99.8%</div>
            <div class="text-sm sm:text-base text-gray-300">On-Time Delivery</div>
          </div>
          <div class="text-center">
            <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-lumora-beige mb-1 md:mb-2 scale-in stagger-2">24/7</div>
            <div class="text-sm sm:text-base text-gray-300">Customer Support</div>
          </div>
        </div>

        <!-- Tagline -->
        <div class="mt-12">
          <p class="text-xl font-semibold text-lumora-beige">
            Local commitment. Global knowledge. Built for today.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Enhanced Services Section -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 fade-in-up">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Specialized Shipping Services to Iraq
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our comprehensive range of logistics services specifically designed for cargo movement to Iraq from 
            any global origin - air, sea, and overland transportation solutions.
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          <!-- Air Freight Services -->
          <div class="bg-white text-center p-6 rounded-xl card-hover-subtle fade-in-up border border-gray-100">
            <div class="mb-4">
              <div class="w-16 h-16 mx-auto bg-gradient-to-br from-red-100 to-red-50 rounded-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Air Freight</h3>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              Fast air cargo worldwide to Iraq serving Erbil, Baghdad, Sulaymaniyah, and Basra airports.
            </p>
            <router-link to="/air-freight" class="text-lumora-red hover:text-lumora-red/80 font-medium text-sm">
              Learn More →
            </router-link>
          </div>
          
          <!-- Sea Freight Services -->
          <div class="bg-white text-center p-6 rounded-xl card-hover-subtle fade-in-up stagger-1 border border-gray-100">
            <div class="mb-4">
              <div class="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Sea Freight</h3>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              FCL/LCL ocean freight from China, UAE, India, Korea to Iraq via Um Qasr Port.
            </p>
            <router-link to="/sea-freight" class="text-lumora-red hover:text-lumora-red/80 font-medium text-sm">
              Learn More →
            </router-link>
          </div>
          
          <!-- Land Freight Services -->
          <div class="bg-white text-center p-6 rounded-xl card-hover-subtle fade-in-up stagger-2 border border-gray-100">
            <div class="mb-4">
              <div class="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Land Freight</h3>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              Trucking from Europe & Turkey to Iraq via Ibrahim Khalil border crossing.
            </p>
            <router-link to="/land-freight" class="text-lumora-red hover:text-lumora-red/80 font-medium text-sm">
              Learn More →
            </router-link>
          </div>
          
          <!-- Customs Clearance -->
          <div class="bg-white text-center p-6 rounded-xl card-hover-subtle fade-in-up stagger-3 border border-gray-100">
            <div class="mb-4">
              <div class="w-16 h-16 mx-auto bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Customs Clearance</h3>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              Expert clearance at all Iraqi airports, ports, and border crossings.
            </p>
            <router-link to="/customs-clearance" class="text-lumora-red hover:text-lumora-red/80 font-medium text-sm">
              Learn More →
            </router-link>
          </div>
        </div>

        <!-- Second Row of Services -->
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <!-- Domestic Transportation -->
          <div class="bg-white text-center p-6 rounded-xl card-hover-subtle fade-in-up border border-gray-100">
            <div class="mb-4">
              <div class="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Domestic Transport</h3>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              Nationwide delivery across Iraq from Kurdistan to Basra with refrigerated options.
            </p>
            <router-link to="/domestic-transport" class="text-lumora-red hover:text-lumora-red/80 font-medium text-sm">
              Learn More →
            </router-link>
          </div>
          
          <!-- Packing & Storage -->
          <div class="bg-white text-center p-6 rounded-xl card-hover-subtle fade-in-up stagger-1 border border-gray-100">
            <div class="mb-4">
              <div class="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Packing & Storage</h3>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              Professional packing, secure warehousing, and comprehensive cargo insurance.
            </p>
            <router-link to="/packing-storage" class="text-lumora-red hover:text-lumora-red/80 font-medium text-sm">
              Learn More →
            </router-link>
          </div>
          
          <!-- Global Network -->
          <div class="bg-white text-center p-6 rounded-xl card-hover-subtle fade-in-up stagger-2 border border-gray-100">
            <div class="mb-4">
              <div class="w-16 h-16 mx-auto bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Global Network</h3>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              Worldwide reach through GLA, WCA, and JCtrans logistics partnerships.
            </p>
            <router-link to="/global-network" class="text-lumora-red hover:text-lumora-red/80 font-medium text-sm">
              Learn More →
            </router-link>
          </div>
        </div>

        <div class="text-center">
          <router-link 
            to="/services" 
            class="inline-block bg-lumora-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-lumora-red/90 transition-colors"
          >
            View All Services
          </router-link>
        </div>
      </div>
    </section>



    <!-- Why Choose A-JWX -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Lumora Horizon for Iraq Shipping
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            With over a decade of specialized experience in Iraqi logistics, we provide 
            reliable import solutions through our comprehensive global network.
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Iraq-Focused Network</h3>
            <p class="text-gray-600 text-sm">
              Specialized shipping network to Iraq with WCA, GLA, and JCTrans partnerships
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p class="text-gray-600 text-sm">
              Round-the-clock customer service and shipment assistance
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Iraq Import Security</h3>
            <p class="text-gray-600 text-sm">
              Advanced security measures for safe cargo delivery to Iraqi destinations
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Iraq Custom Solutions</h3>
            <p class="text-gray-600 text-sm">
              Tailored logistics solutions for importing to Iraq from any origin
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Expertise -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/src/assets/images/warehouse.svg" alt="Industry Expertise" class="w-full h-auto">
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">
              Iraq Import Expertise That Delivers
            </h2>
            <p class="text-gray-600 mb-6">
              With over a decade of specialized experience in Iraqi trade routes, our team understands the complexities 
              of importing to Iraq and local customs requirements.
            </p>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Iraqi Customs Clearance Expertise</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Direct Routes to Iraqi Ports & Airports</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">FCL/LCL Shipping to Iraq</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Full-Value Insurance for Iraqi Imports</span>
              </li>
            </ul>
            <router-link 
              to="/about" 
              class="inline-block bg-lumora-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-lumora-red/90 transition-colors"
            >
              Learn About Us
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-lumora-beige/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven record speaks for itself with top companies and comprehensive solutions
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-sm">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 class="font-semibold text-gray-900">Sarah Johnson</h4>
                <p class="text-sm text-gray-600">Supply Chain Director, TechCorp</p>
              </div>
            </div>
            <p class="text-gray-600 mb-4">
              "Lumora Horizon has transformed our global logistics operations. Their reliability and 
              expertise have been instrumental in our growth."
            </p>
            <div class="flex text-yellow-400">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 class="font-semibold text-gray-900">Michael Chen</h4>
                <p class="text-sm text-gray-600">Logistics Manager, GlobalTrade Inc</p>
              </div>
            </div>
            <p class="text-gray-600 mb-4">
              "Outstanding service and attention to detail. Their logistics management is excellent and 
              communication is always clear and timely."
            </p>
            <div class="flex text-yellow-400">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 class="font-semibold text-gray-900">Emily Rodriguez</h4>
                <p class="text-sm text-gray-600">Operations Director, ManuCorp</p>
              </div>
            </div>
            <p class="text-gray-600 mb-4">
              "Professional, efficient, and cost-effective. Their global network has enabled us to 
              expand our business internationally with confidence."
            </p>
            <div class="flex text-yellow-400">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Valued Clients -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 fade-in-up">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Our Valued Clients
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading companies worldwide for their logistics and shipping needs
          </p>
        </div>

        <!-- Responsive client logos grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          <!-- Global Tech Corp -->
          <div class="flex justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 card-hover-subtle">
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div class="text-sm font-semibold text-gray-700">Global Tech</div>
            </div>
          </div>

          <!-- Maritime Solutions -->
          <div class="flex justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 card-hover-subtle">
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              </div>
              <div class="text-sm font-semibold text-gray-700">Maritime Pro</div>
            </div>
          </div>

          <!-- Automotive Industries -->
          <div class="flex justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 card-hover-subtle">
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center">
                <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div class="text-sm font-semibold text-gray-700">AutoMax</div>
            </div>
          </div>

          <!-- Energy Solutions -->
          <div class="flex justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 card-hover-subtle">
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl flex items-center justify-center">
                <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div class="text-sm font-semibold text-gray-700">EnergyFlow</div>
            </div>
          </div>

          <!-- Manufacturing Corp -->
          <div class="flex justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 card-hover-subtle">
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center">
                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div class="text-sm font-semibold text-gray-700">ManufacCorp</div>
            </div>
          </div>
        </div>

        <!-- Client testimonial or stats -->
        <div class="text-center mt-16 fade-in-up">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-lumora-red mb-2">500+</div>
              <div class="text-gray-600">Active Clients</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-lumora-red mb-2">98%</div>
              <div class="text-gray-600">Client Satisfaction</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-lumora-red mb-2">15+</div>
              <div class="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ready to Optimize Your Supply Chain -->
    <section class="py-20 bg-lumora-red">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-white mb-6">
          Ready to Optimize Your Supply Chain?
        </h2>
        <p class="text-lg text-lumora-beige mb-8">
          Contact our team today for a personalized logistics solution tailored to your business needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/contact" 
            class="inline-block bg-white text-lumora-red px-8 py-3 rounded-lg font-semibold hover:bg-lumora-beige transition-colors"
          >
            Request Quote
          </router-link>
          <router-link 
            to="/services" 
            class="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-lumora-red transition-colors"
          >
            Explore Services
          </router-link>
        </div>
      </div>
    </section>

    <!-- Latest News & Updates -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Latest News & Updates
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed about industry trends and our latest service developments
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <article class="bg-white rounded-lg shadow-sm overflow-hidden">
            <img src="/src/assets/images/container-ship.svg" alt="News Article" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="text-sm text-gray-500 mb-2">June 10, 2025</div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Enhancing Ocean Freight Solutions for E-commerce
              </h3>
              <p class="text-gray-600 mb-4">
                Our new ocean freight solutions are designed to meet the growing demands of e-commerce businesses...
              </p>
              <a href="#" class="text-lumora-red hover:text-lumora-red/80 font-medium">
                Read More →
              </a>
            </div>
          </article>

          <article class="bg-white rounded-lg shadow-sm overflow-hidden">
            <img src="/src/assets/images/airplane.svg" alt="News Article" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="text-sm text-gray-500 mb-2">June 8, 2025</div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Sustainable Sustainability Initiative
              </h3>
              <p class="text-gray-600 mb-4">
                We're proud to announce our commitment to reducing carbon emissions across all our operations...
              </p>
              <a href="#" class="text-lumora-red hover:text-lumora-red/80 font-medium">
                Read More →
              </a>
            </div>
          </article>

          <article class="bg-white rounded-lg shadow-sm overflow-hidden">
            <img src="/src/assets/images/warehouse.svg" alt="News Article" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="text-sm text-gray-500 mb-2">June 5, 2025</div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                New Digital Tracking Platform
              </h3>
              <p class="text-gray-600 mb-4">
                Experience enhanced visibility with our upgraded tracking system offering real-time updates...
              </p>
              <a href="#" class="text-lumora-red hover:text-lumora-red/80 font-medium">
                Read More →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- WhatsApp Float Button -->
    <div class="fixed bottom-6 right-6 z-50">
      <a 
        href="https://wa.me/9647717547000?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20logistics%20services%20to%20Iraq"
        target="_blank"
        class="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
        title="Chat with us on WhatsApp"
      >
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.486"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Slider functionality
const currentSlide = ref(0)
let slideInterval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 8
}

const startAutoSlide = () => {
  slideInterval = setInterval(() => {
    nextSlide()
  }, 5000) // Change slide every 5 seconds
}

const stopAutoSlide = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
    slideInterval = null
  }
}

// Auto-play slider when component mounts
onMounted(() => {
  startAutoSlide()
})

// Clean up interval when component unmounts
onUnmounted(() => {
  stopAutoSlide()
})
</script>
