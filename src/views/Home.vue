<template>
  <div>
    <!-- Image Slider Hero Section -->
    <section class="relative h-screen min-h-[500px] bg-gray-900 overflow-hidden">
      <!-- Loading Indicator -->
      <div v-if="!isPageLoaded" class="absolute inset-0 z-50 flex items-center justify-center bg-gray-900">
        <div class="text-center">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lumora-beige mb-4"></div>
          <p class="text-white text-lg">Loading...</p>
        </div>
      </div>
      
      <!-- Image Slider Container -->
      <div class="relative h-full">
        <!-- Slider Images -->
        <!-- Slide 1: Logo -->
        <div class="absolute inset-0 transition-opacity duration-1000" :class="{ 'opacity-100': currentSlide === 0, 'opacity-0': currentSlide !== 0 }">
          <div class="relative w-full h-full bg-gradient-to-br from-lumora-beige via-yellow-50 to-white">
            <img 
              src="/images/lumora-logo-final.webp" 
              alt="Lumora Horizon Logo" 
              class="w-full h-full object-cover" 
              loading="eager"
              fetchpriority="high"
            >
          </div>
        </div>
        
        <!-- Slide 2: Air Freight Services -->
        <div class="absolute inset-0 transition-opacity duration-1000 slide-1" :class="{ 'opacity-100': currentSlide === 1, 'opacity-0': currentSlide !== 1 }">
          <div class="relative w-full h-full">
            <video 
              v-show="currentSlide === 1"
              src="/images/airfreight-service.mp4" 
              autoplay 
              muted 
              loop 
              playsinline
              preload="none"
              class="w-full h-full object-cover"
              alt="Air Freight Services"
              data-slide="1"
            ></video>
            <div class="absolute inset-0 bg-red-900/60 flex items-center justify-center">
              <div class="text-center text-white px-4">
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
        </div>
        
        <!-- Slide 3: Sea Freight Services -->
        <div class="absolute inset-0 transition-opacity duration-1000 slide-2" :class="{ 'opacity-100': currentSlide === 2, 'opacity-0': currentSlide !== 2 }">
          <div class="relative w-full h-full">
            <video 
              v-show="currentSlide === 2"
              src="/images/seafreight-service.mp4" 
              autoplay 
              muted 
              loop 
              playsinline
              preload="none"
              class="w-full h-full object-cover"
              alt="Sea Freight Services"
              data-slide="2"
            ></video>
            <div class="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
              <div class="text-center text-white px-4">
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
        </div>
        
        <!-- Slide 4: Land Freight Services -->
        <div class="absolute inset-0 transition-opacity duration-1000 slide-3" :class="{ 'opacity-100': currentSlide === 3, 'opacity-0': currentSlide !== 3 }">
          <div class="relative w-full h-full">
            <video 
              v-show="currentSlide === 3"
              src="/images/landfreight-service.mp4" 
              autoplay 
              muted 
              loop 
              playsinline
              preload="none"
              class="w-full h-full object-cover"
              alt="Land Freight Services"
              data-slide="3"
            ></video>
            <div class="absolute inset-0 bg-green-900/60 flex items-center justify-center">
              <div class="text-center text-white px-4">
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
        </div>
        
        <!-- Slide 5: Customs Clearance -->
        <div class="absolute inset-0 transition-opacity duration-1000 slide-4" :class="{ 'opacity-100': currentSlide === 4, 'opacity-0': currentSlide !== 4 }">
          <div class="relative w-full h-full">
            <video 
              v-show="currentSlide === 4"
              src="/images/customs-clearance.mp4" 
              autoplay 
              muted 
              loop 
              playsinline
              preload="none"
              class="w-full h-full object-cover"
              alt="Customs Clearance Services"
              data-slide="4"
            ></video>
            <div class="absolute inset-0 bg-purple-900/60 flex items-center justify-center">
              <div class="text-center text-white px-4">
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
        </div>
        
        <!-- Slide 6: Domestic Transportation -->
        <div class="absolute inset-0 transition-opacity duration-1000 slide-5" :class="{ 'opacity-100': currentSlide === 5, 'opacity-0': currentSlide !== 5 }">
          <div class="relative w-full h-full">
            <video 
              v-show="currentSlide === 5"
              src="/images/domestic-transport.mp4" 
              autoplay 
              muted 
              loop 
              playsinline
              preload="none"
              class="w-full h-full object-cover"
              alt="Domestic Transportation Services"
              data-slide="5"
            ></video>
            <div class="absolute inset-0 bg-yellow-900/60 flex items-center justify-center">
              <div class="text-center text-white px-4">
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
        </div>
        
        <!-- Slide 7: Packing, Storage & Cargo Insurance -->
        <div class="absolute inset-0 transition-opacity duration-1000 slide-6" :class="{ 'opacity-100': currentSlide === 6, 'opacity-0': currentSlide !== 6 }">
          <div class="relative w-full h-full">
            <video 
              v-show="currentSlide === 6"
              src="/images/storage-service.mp4" 
              autoplay 
              muted 
              loop 
              playsinline
              preload="none"
              class="w-full h-full object-cover"
              alt="Packing, Storage & Cargo Insurance"
              data-slide="6"
            ></video>
            <div class="absolute inset-0 bg-indigo-900/60 flex items-center justify-center">
              <div class="text-center text-white px-4">
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
        </div>
        
        <!-- Slide 8: Global Shipping Network -->
        <div class="absolute inset-0 transition-opacity duration-1000 slide-7" :class="{ 'opacity-100': currentSlide === 7, 'opacity-0': currentSlide !== 7 }">
          <div class="relative w-full h-full">
            <video 
              v-show="currentSlide === 7"
              src="/images/global-networking-video.mp4" 
              autoplay 
              muted 
              loop 
              playsinline
              preload="none"
              class="w-full h-full object-cover"
              alt="Global Shipping Network"
              data-slide="7"
            ></video>
            <div class="absolute inset-0 bg-teal-900/60 flex items-center justify-center">
              <div class="text-center text-white px-4">
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
    
    <!-- Streamlined Operations Section -->
    <section class="py-12 bg-white hidden">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Professional Logistics Operations</h2>
          <p class="text-gray-600">Air, sea, and land transportation solutions</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Air Operations -->
          <div class="text-center">
            <div class="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
              <span class="text-gray-500 text-sm">Air Freight Operations</span>
            </div>
            <h3 class="text-base font-semibold text-gray-900 mb-1">Air Freight</h3>
            <p class="text-xs text-gray-600">Fast cargo to Iraqi airports</p>
          </div>
          
          <!-- Sea Operations -->
          <div class="text-center">
            <div class="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
              <span class="text-gray-500 text-sm">Sea Freight Operations</span>
            </div>
            <h3 class="text-base font-semibold text-gray-900 mb-1">Sea Freight</h3>
            <p class="text-xs text-gray-600">Container shipping to Um Qasr</p>
          </div>
          
          <!-- Warehouse Operations -->
          <div class="text-center">
            <div class="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
              <span class="text-gray-500 text-sm">Warehousing</span>
            </div>
            <h3 class="text-base font-semibold text-gray-900 mb-1">Warehousing</h3>
            <p class="text-xs text-gray-600">Professional storage services</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Services Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Specialized Shipping Services to Iraq
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Comprehensive logistics services for cargo movement to Iraq from any global origin.
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          <!-- Air Freight Services -->
          <div class="relative overflow-hidden text-center p-6 rounded-xl border border-gray-100 bg-cover bg-center" style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/emirates-aircraft.webp')">
            <h3 class="text-lg font-semibold text-white mb-2">Air Freight</h3>
            <p class="text-sm text-white/90 mb-4 leading-relaxed">
              Fast air cargo worldwide to Iraq serving Erbil, Baghdad, Sulaymaniyah, and Basra airports.
            </p>
            <router-link to="/air-freight" class="inline-block bg-white text-lumora-red px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
              Learn More →
            </router-link>
          </div>
          
          <!-- Sea Freight Services -->
          <div class="relative overflow-hidden text-center p-6 rounded-xl border border-gray-100 bg-cover bg-center" style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/hapag-lloyd-ship.webp')">
            <h3 class="text-lg font-semibold text-white mb-2">Sea Freight</h3>
            <p class="text-sm text-white/90 mb-4 leading-relaxed">
              FCL/LCL ocean freight from China, UAE, India, Korea to Iraq via Um Qasr Port.
            </p>
            <router-link to="/sea-freight" class="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
              Learn More →
            </router-link>
          </div>
          
          <!-- Land Freight Services -->
          <div class="relative overflow-hidden text-center p-6 rounded-xl border border-gray-100 bg-cover bg-center" style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/red-truck.webp')">
            <h3 class="text-lg font-semibold text-white mb-2">Land Freight</h3>
            <p class="text-sm text-white/90 mb-4 leading-relaxed">
              Trucking from Europe & Turkey to Iraq via Ibrahim Khalil border crossing.
            </p>
            <router-link to="/land-freight" class="inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
              Learn More →
            </router-link>
          </div>
          
          <!-- Customs Clearance -->
          <div class="relative overflow-hidden text-center p-6 rounded-xl border border-gray-100 bg-cover bg-center" style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/customs-clearance-main.webp')">
            <h3 class="text-lg font-semibold text-white mb-2">Customs Clearance</h3>
            <p class="text-sm text-white/90 mb-4 leading-relaxed">
              Expert clearance at all Iraqi airports, ports, and border crossings.
            </p>
            <router-link to="/customs-clearance" class="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
              Learn More →
            </router-link>
          </div>
        </div>

        <!-- Second Row of Services -->
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <!-- Domestic Transportation -->
          <div class="relative overflow-hidden text-center p-6 rounded-xl border border-gray-100 bg-cover bg-center" style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/truck-queue-customs.webp')">
            <h3 class="text-lg font-semibold text-white mb-2">Domestic Transport</h3>
            <p class="text-sm text-white/90 mb-4 leading-relaxed">
              Nationwide delivery across Iraq from Kurdistan to Basra with refrigerated options.
            </p>
            <router-link to="/domestic-transport" class="inline-block bg-white text-yellow-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
              Learn More →
            </router-link>
          </div>
          
          <!-- Packing & Storage -->
          <div class="relative overflow-hidden text-center p-6 rounded-xl border border-gray-100 bg-cover bg-center" style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/modern-warehouse.webp')">
            <h3 class="text-lg font-semibold text-white mb-2">Packing & Storage</h3>
            <p class="text-sm text-white/90 mb-4 leading-relaxed">
              Professional packing, secure warehousing, and comprehensive cargo insurance.
            </p>
            <router-link to="/packing-storage" class="inline-block bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
              Learn More →
            </router-link>
          </div>
          
          <!-- Global Network -->
          <div class="relative overflow-hidden text-center p-6 rounded-xl border border-gray-100 bg-cover bg-center" style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/global-network-map.webp')">
            <h3 class="text-lg font-semibold text-white mb-2">Global Network</h3>
            <p class="text-sm text-white/90 mb-4 leading-relaxed">
              Worldwide reach through GLA, WCA, and JCtrans logistics partnerships.
            </p>
            <router-link to="/global-network" class="inline-block bg-white text-lumora-red px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
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
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">
          Iraq Import Expertise That Delivers
        </h2>
        <p class="text-gray-600 mb-8 text-lg max-w-3xl mx-auto">
          With over a decade of specialized experience in Iraqi trade routes, our team understands the complexities 
          of importing to Iraq and local customs requirements.
        </p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto">
          <div class="flex items-center space-x-3 justify-center md:justify-start">
            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-gray-700">Iraqi Customs Clearance Expertise</span>
          </div>
          <div class="flex items-center space-x-3 justify-center md:justify-start">
            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-gray-700">Direct Routes to Iraqi Ports & Airports</span>
          </div>
          <div class="flex items-center space-x-3 justify-center md:justify-start">
            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-gray-700">FCL/LCL Shipping to Iraq</span>
          </div>
          <div class="flex items-center space-x-3 justify-center md:justify-start">
            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-gray-700">Full-Value Insurance for Iraqi Imports</span>
          </div>
        </div>
        
        <router-link 
          to="/about" 
          class="inline-block bg-lumora-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-lumora-red/90 transition-colors"
        >
          Learn About Us
        </router-link>
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
              <img src="/images/sarah.webp" alt="Sarah Johnson" class="w-12 h-12 rounded-full mr-4 object-cover" loading="lazy">
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
              <img src="/images/michel.webp" alt="Michael Chen" class="w-12 h-12 rounded-full mr-4 object-cover" loading="lazy">
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
            </div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm">
            <div class="flex items-center mb-4">
              <img src="/images/emily.webp" alt="Emily Rodriguez" class="w-12 h-12 rounded-full mr-4 object-cover" loading="lazy">
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
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Valued Clients -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Our Valued Clients
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading companies worldwide for their logistics and shipping needs
          </p>
        </div>

        <!-- Simplified client logos -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          <!-- Global Tech Corp -->
          <div class="flex justify-center p-4 bg-white rounded-lg shadow-sm">
            <div class="text-center">
              <div class="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-lg flex items-center justify-center">
                <div class="text-xs font-bold text-blue-600">GT</div>
              </div>
              <div class="text-xs font-semibold text-gray-700">Global Tech</div>
            </div>
          </div>

          <!-- Maritime Solutions -->
          <div class="flex justify-center p-4 bg-white rounded-lg shadow-sm">
            <div class="text-center">
              <div class="w-12 h-12 mx-auto mb-2 bg-green-100 rounded-lg flex items-center justify-center">
                <div class="text-xs font-bold text-green-600">MP</div>
              </div>
              <div class="text-xs font-semibold text-gray-700">Maritime Pro</div>
            </div>
          </div>

          <!-- Automotive Industries -->
          <div class="flex justify-center p-4 bg-white rounded-lg shadow-sm">
            <div class="text-center">
              <div class="w-12 h-12 mx-auto mb-2 bg-red-100 rounded-lg flex items-center justify-center">
                <div class="text-xs font-bold text-red-600">AM</div>
              </div>
              <div class="text-xs font-semibold text-gray-700">AutoMax</div>
            </div>
          </div>

          <!-- Energy Solutions -->
          <div class="flex justify-center p-4 bg-white rounded-lg shadow-sm">
            <div class="text-center">
              <div class="w-12 h-12 mx-auto mb-2 bg-yellow-100 rounded-lg flex items-center justify-center">
                <div class="text-xs font-bold text-yellow-600">EF</div>
              </div>
              <div class="text-xs font-semibold text-gray-700">EnergyFlow</div>
            </div>
          </div>

          <!-- Manufacturing Corp -->
          <div class="flex justify-center p-4 bg-white rounded-lg shadow-sm">
            <div class="text-center">
              <div class="w-12 h-12 mx-auto mb-2 bg-purple-100 rounded-lg flex items-center justify-center">
                <div class="text-xs font-bold text-purple-600">MC</div>
              </div>
              <div class="text-xs font-semibold text-gray-700">ManufacCorp</div>
            </div>
          </div>
        </div>

        <!-- Client stats -->
        <div class="text-center mt-12">
          <div class="grid grid-cols-3 gap-4">
            <div class="text-center">
              <div class="text-2xl font-bold text-lumora-red mb-1">500+</div>
              <div class="text-sm text-gray-600">Active Clients</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-lumora-red mb-1">98%</div>
              <div class="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-lumora-red mb-1">15+</div>
              <div class="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ready to Optimize Your Supply Chain -->
    <section class="py-20 bg-lumora-beige">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-lumora-red mb-6">
          Ready to Optimize Your Supply Chain?
        </h2>
        <p class="text-lg text-lumora-red mb-8">
          Contact our team today for a personalized logistics solution tailored to your business needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/contact" 
            class="inline-block bg-lumora-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-lumora-red/90 transition-colors"
          >
            Request Quote
          </router-link>
          <router-link 
            to="/services" 
            class="inline-block border-2 border-lumora-red text-lumora-red px-8 py-3 rounded-lg font-semibold hover:bg-lumora-red hover:text-white transition-colors"
          >
            Explore Services
          </router-link>
        </div>
      </div>
    </section>



    <!-- Contact Float Buttons -->
    <div class="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <!-- WhatsApp Button -->
      <a 
        href="https://wa.me/9647810337004?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20logistics%20services%20to%20Iraq"
        target="_blank"
        class="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
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
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

// Content loading state
const contentLoaded = ref(false)
const sectionsObserver = ref(null)

// Slider functionality
const currentSlide = ref(0)
let slideInterval = null
const videosLoaded = ref(new Set())
const videoElements = ref(new Map())
const isPageLoaded = ref(false)
const isSliderActive = ref(true)

// Optimized video loading with error handling
const loadVideoOnDemand = (slideIndex) => {
  if (videosLoaded.value.has(slideIndex)) return Promise.resolve()
  
  return new Promise((resolve) => {
    const videoSelector = `.slide-${slideIndex} video`
    const video = document.querySelector(videoSelector)
    
    if (!video) {
      resolve()
      return
    }
    
    // Store video element reference
    videoElements.value.set(slideIndex, video)
    
    // Set playback speed for global networking video (slide 7)
    if (slideIndex === 7) {
      video.playbackRate = 3
    }
    
    // Add error handling for video loading
    video.addEventListener('error', () => {
      console.warn(`Failed to load video for slide ${slideIndex}`)
      // Mark as loaded to prevent retry attempts
      videosLoaded.value.add(slideIndex)
      resolve()
    })
    
    // Add load event listener
    video.addEventListener('loadeddata', () => {
      videosLoaded.value.add(slideIndex)
      resolve()
    })
    
    // Set a timeout to prevent hanging
    setTimeout(() => {
      if (!videosLoaded.value.has(slideIndex)) {
        videosLoaded.value.add(slideIndex)
        resolve()
      }
    }, 5000) // 5 second timeout
  })
}

// Optimize video elements when they're not visible
const optimizeHiddenVideos = () => {
  videoElements.value.forEach((video, index) => {
    if (index !== currentSlide.value && video) {
      // Pause videos that aren't currently shown
      if (!video.paused) {
        video.pause()
      }
    }
  })
}

const nextSlide = async () => {
  if (!isSliderActive.value) return
  
  const nextSlideIndex = (currentSlide.value + 1) % 8

  // Ensure video is loaded before showing the slide
  if (isPageLoaded.value && nextSlideIndex !== 0) { // Skip logo slide
    if (!videosLoaded.value.has(nextSlideIndex)) {
      await loadVideoOnDemand(nextSlideIndex)
    }
    // Ensure video restarts from beginning for consistent experience
    nextTick(() => {
      const video = videoElements.value.get(nextSlideIndex)
      if (video && video.readyState >= 2) {
        video.currentTime = 0
        video.play().catch(() => {
          // Silent catch - this is expected in some browsers
        })
      }
    })
  }

  currentSlide.value = nextSlideIndex

  // Preload the next video for smooth transitions
  if (isPageLoaded.value) {
    const preloadIndex = (nextSlideIndex + 1) % 8
    if (preloadIndex !== 0 && !videosLoaded.value.has(preloadIndex)) { // Don't preload logo slide, and only if not loaded
      loadVideoOnDemand(preloadIndex)
    }
  }
}

const startAutoSlide = () => {
  if (slideInterval) return
  
  slideInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoSlide = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
    slideInterval = null
  }
}

// Pause slider when page is not visible to save resources
const handleVisibilityChange = () => {
  if (document.hidden) {
    isSliderActive.value = false
    stopAutoSlide()
    // Pause all videos when tab is not visible
    videoElements.value.forEach(video => {
      if (video && !video.paused) {
        video.pause()
      }
    })
  } else {
    isSliderActive.value = true
    startAutoSlide()
    // Resume playing current slide video
    const currentVideo = videoElements.value.get(currentSlide.value)
    if (currentVideo && currentVideo.paused && currentSlide.value !== 0) {
      currentVideo.play().catch(() => {})
    }
  }
}

// Optimized loading strategy for better performance
onMounted(async () => {
  // Performance monitoring
  const startTime = performance.now()
  
  // Log performance metrics
  const logPerformance = () => {
    const loadTime = performance.now() - startTime
    console.log(`Home page loaded in ${loadTime.toFixed(2)}ms`)
  }
  // Add visibility change listener to save resources when tab is not active
  document.addEventListener('visibilitychange', handleVisibilityChange)
  
  // Start with logo slide (no video) to show content immediately
  isPageLoaded.value = true
  
  // Start auto-slide immediately with the logo
  startAutoSlide()
  
  // Detect mobile device for optimized loading
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  
  if (isMobile) {
    // On mobile, load only the first video initially
    await loadVideoOnDemand(1)
    
    // Set up intersection observer for content sections with mobile optimizations
    sectionsObserver.value = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!contentLoaded.value) {
            contentLoaded.value = true
          }
          entry.target.classList.add('fade-in')
          
          // Load videos progressively on mobile when content becomes visible
          if (entry.target.classList.contains('py-16') || entry.target.classList.contains('py-20')) {
            // Load next video when user scrolls to content
            const nextVideoIndex = Math.min(currentSlide.value + 2, 7)
            if (nextVideoIndex > 1) {
              loadVideoOnDemand(nextVideoIndex)
            }
          }
        }
      })
    }, { 
      threshold: 0.05,
      rootMargin: '100px'
    })
  } else {
    // On desktop, load videos progressively - only load the next 2 videos initially
    await loadVideoOnDemand(1) // Load first video immediately
    loadVideoOnDemand(2) // Preload second video
    
    // Set up intersection observer for content sections
    sectionsObserver.value = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!contentLoaded.value) {
            contentLoaded.value = true
          }
          entry.target.classList.add('fade-in')
        }
      })
    }, { 
      threshold: 0.1,
      rootMargin: '50px'
    })
  }
  
  // Use Intersection Observer to detect when slider is visible
  const sliderObserver = new IntersectionObserver((entries) => {
    const isVisible = entries[0].isIntersecting
    isSliderActive.value = isVisible
    
    if (isVisible) {
      // When slider becomes visible, ensure current slide video is playing
      const currentVideo = videoElements.value.get(currentSlide.value)
      if (currentVideo && currentVideo.paused && currentSlide.value !== 0) {
        currentVideo.play().catch(() => {})
      }
      startAutoSlide()
      
      // Load remaining videos when slider becomes visible (desktop only)
      if (!isMobile) {
        for (let i = 3; i <= 7; i++) {
          loadVideoOnDemand(i)
        }
      }
    } else {
      // When slider is not visible, pause all videos and stop auto-slide
      stopAutoSlide()
      videoElements.value.forEach(video => {
        if (video && !video.paused) {
          video.pause()
        }
      })
    }
  }, { threshold: 0.1 })
  
  // Observe the slider section
  const sliderSection = document.querySelector('section.relative.h-screen')
  if (sliderSection) {
    sliderObserver.observe(sliderSection)
  }
  
  // Observe all content sections
  const contentSections = document.querySelectorAll('section:not(.relative.h-screen)')
  contentSections.forEach(section => {
    sectionsObserver.value.observe(section)
  })
  
  // Log performance after initial setup
  setTimeout(logPerformance, 100)
})

onUnmounted(() => {
  stopAutoSlide()
  document.removeEventListener('visibilitychange', handleVisibilityChange)
  
  // Clean up video elements
  videoElements.value.forEach(video => {
    if (video) {
      video.pause()
      video.src = ''
      video.load()
    }
  })
  videoElements.value.clear()
  videosLoaded.value.clear()
  
  // Clean up intersection observers
  if (sectionsObserver.value) {
    sectionsObserver.value.disconnect()
  }
})
</script>
