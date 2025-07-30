<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-lumora-beige py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-6 text-lumora-red">
            Complete Logistics Services to Iraq
          </h1>
          <p class="text-lg text-white max-w-4xl mx-auto leading-relaxed">
            Lumora Horizon specializes in comprehensive shipping and logistics services to Iraq from any global origin. 
            Through our network of trusted partnerships with GLA, WCA, and JCtrans, we deliver air, sea, and land freight 
            solutions with expert customs clearance, domestic transportation, and secure storage options.
          </p>
        </div>
      </div>
    </section>

    <!-- Air Freight -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Air Freight</h2>
            <p class="text-gray-600 mb-6">
              Fast and reliable air cargo services for time-sensitive shipments to Iraq. 
              Our air freight solutions ensure your urgent cargo reaches Iraq quickly and safely from any global origin.
            </p>
            
            <div class="mb-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Key Benefits:</h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Fastest transit times
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Global network coverage
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Real-time tracking
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Temperature-controlled options
                </li>
              </ul>
            </div>

            <router-link 
              to="/air-freight" 
              class="inline-block bg-lumora-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-lumora-red/90 transition-colors"
            >
              Learn More
            </router-link>
          </div>
          <div>
            <img src="/images/emirates-aircraft.webp" alt="Air Freight Services" class="w-full h-auto rounded-lg">
          </div>
        </div>
      </div>
    </section>

    <!-- Sea Freight -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <img src="/images/hapag-lloyd-ship.webp" alt="Sea Freight Services" class="w-full h-auto rounded-lg">
          </div>
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Sea Freight</h2>
            <p class="text-gray-600 mb-6">
              Cost-effective ocean shipping solutions for large volumes to Iraq with comprehensive FCL and LCL container services. 
              Perfect for bulk cargo imports to Iraq with flexible scheduling and competitive rates.
            </p>

            <div class="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">FCL Services</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• 20ft containers</li>
                  <li>• 40ft containers</li>
                  <li>• High cube containers</li>
                  <li>• Refrigerated containers</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">LCL Services</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Consolidated shipments</li>
                  <li>• Weekly departures</li>
                  <li>• Port-to-destination service</li>
                  <li>• Competitive rates</li>
                </ul>
              </div>
            </div>

            <router-link 
              to="/sea-freight" 
              class="inline-block bg-lumora-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-lumora-red/90 transition-colors"
            >
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Land Freight -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Land Freight</h2>
            <p class="text-gray-600 mb-6">
              Reliable overland transportation services for cross-border shipping to Iraq. 
              Our extensive land freight network ensures efficient delivery to Iraqi destinations through established border crossings and secure transit corridors.
            </p>
            
            <div class="mb-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Land Freight Services:</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-lumora-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3"/>
                    </svg>
                    Full Truckload (FTL)
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-lumora-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3"/>
                    </svg>
                    Less than Truckload (LTL)
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-lumora-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3"/>
                    </svg>
                    Cross-border transport
                  </li>
                </ul>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-lumora-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3"/>
                    </svg>
                    Temperature controlled
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-lumora-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3"/>
                    </svg>
                    Expedited delivery
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-lumora-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3"/>
                    </svg>
                    Secure transit
                  </li>
                </ul>
              </div>
            </div>

            <router-link 
              to="/land-freight" 
              class="inline-block bg-lumora-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-lumora-red/90 transition-colors"
            >
              Learn More
            </router-link>
          </div>
          <div>
            <img src="/images/red-truck.webp" alt="Land Freight Services" class="w-full h-auto rounded-lg">
          </div>
        </div>
      </div>
    </section>

    <!-- Domestic Transportation -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <img src="/images/truck-queue-customs.webp" alt="Domestic Transportation Services" class="w-full h-auto rounded-lg">
          </div>
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Domestic Transportation</h2>
            <p class="text-gray-600 mb-6">
              Comprehensive last-mile delivery services within Iraq. Once your cargo arrives at Iraqi ports or borders, 
              our domestic transportation network ensures safe delivery to final destinations across all Iraqi governorates.
            </p>

            <div class="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Delivery Options</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Port-to-destination service</li>
                  <li>• Scheduled deliveries</li>
                  <li>• Express delivery</li>
                  <li>• Same-day delivery (within cities)</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Coverage Areas</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Baghdad and surrounding areas</li>
                  <li>• Basra and oil sites</li>
                  <li>• Kurdistan and Karkuk</li>
                  <li>• All major Iraqi cities</li>
                </ul>
              </div>
            </div>

            <router-link 
              to="/domestic-transport" 
              class="inline-block bg-lumora-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-lumora-red/90 transition-colors"
            >
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Customs Clearance -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Customs Clearance</h2>
            <p class="text-gray-600 mb-6">
              Expert customs clearance services specializing in Iraq import regulations and procedures. 
              Our licensed customs specialists ensure smooth clearance through Iraqi customs with full compliance to local regulations.
            </p>
            
            <div class="mb-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Clearance Services:</h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Iraqi import documentation
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Duty and tax calculations
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Regulatory compliance
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Government import and export approval
                </li>
              </ul>
            </div>

            <router-link 
              to="/customs-clearance" 
              class="inline-block bg-lumora-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-lumora-red/90 transition-colors"
            >
              Learn More
            </router-link>
          </div>
          <div>
            <img src="/images/customs-clearance-main.webp" alt="Customs Clearance Services" class="w-full h-auto rounded-lg">
          </div>
        </div>
      </div>
    </section>

    <!-- Packing, Storage & Insurance -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Packing & Storage</h2>
            <p class="text-gray-600 mb-6">
              Professional packing, secure warehousing, and comprehensive cargo insurance.
            </p>
            
            <div class="mb-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Protection Services:</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-lumora-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3"/>
                    </svg>
                    Professional packing
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-lumora-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3"/>
                    </svg>
                    Secure warehousing
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-lumora-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3"/>
                    </svg>
                    Climate-controlled storage
                  </li>
                </ul>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-lumora-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3"/>
                    </svg>
                    Cargo insurance
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-lumora-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3"/>
                    </svg>
                    Risk assessment
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-lumora-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3"/>
                    </svg>
                    Inventory management
                  </li>
                </ul>
              </div>
            </div>

            <router-link 
              to="/packing-storage" 
              class="inline-block bg-lumora-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-lumora-red/90 transition-colors"
            >
              Learn More
            </router-link>
          </div>
          <div>
            <img src="/images/modern-warehouse.webp" alt="Packing & Storage Services" class="w-full h-auto rounded-lg">
          </div>
        </div>
      </div>
    </section>

    <!-- Global Network -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <img src="/images/global-network-map.webp" alt="Global Network Services" class="w-full h-auto rounded-lg">
          </div>
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Global Network</h2>
            <p class="text-gray-600 mb-6">
              Extensive worldwide network of trusted partners and agents enabling seamless shipping to Iraq from any global origin. 
              Through our partnerships with GLA, WCA, and JCtrans, we provide reliable logistics solutions worldwide.
            </p>

            <div class="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Partnership Network</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• GLA member network</li>
                  <li>• WCA worldwide agents</li>
                  <li>• JCtrans partnerships</li>
                  <li>• Local expertise globally</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Global Coverage</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Europe to Iraq</li>
                  <li>• Asia to Iraq</li>
                  <li>• Americas to Iraq</li>
                  <li>• Worldwide origins</li>
                </ul>
              </div>
            </div>

            <router-link 
              to="/global-network" 
              class="inline-block bg-lumora-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-lumora-red/90 transition-colors"
            >
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Lumora Horizon for Iraq Logistics
          </h2>
          <p class="text-gray-600 max-w-3xl mx-auto">
            With specialized expertise in Iraq logistics and a decade of experience, we deliver reliable shipping solutions through our extensive global partnerships.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-lumora-red rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Iraq Expertise</h3>
            <p class="text-gray-600">Specialized knowledge of Iraqi regulations and customs procedures</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-lumora-red rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Decade of Experience</h3>
            <p class="text-gray-600">Ten years of proven track record in Middle East logistics</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-lumora-red rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Global Partnerships</h3>
            <p class="text-gray-600">Trusted network through GLA, WCA, and JCtrans memberships</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ready to Optimize CTA -->
    <section class="py-16 bg-lumora-beige">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-lumora-red mb-6">
          Ready to Optimize Your Supply Chain?
        </h2>
        <p class="text-lg text-lumora-red mb-8">
          Contact our team today for a customized logistics solution that meets your specific business requirements.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/contact" 
            class="inline-block bg-lumora-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-lumora-red/90 transition-colors"
          >
            Get Quote
          </router-link>
          <router-link 
            to="/contact" 
            class="inline-block border-2 border-lumora-red text-lumora-red px-8 py-3 rounded-lg font-semibold hover:bg-lumora-red hover:text-white transition-colors"
          >
            Schedule Consultation
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>
