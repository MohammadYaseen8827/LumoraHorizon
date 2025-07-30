<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-cover bg-center py-20" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/modern-warehouse.webp')">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-6 text-white">
            Packing & Storage
          </h1>
          <p class="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Professional packing, secure warehousing, and comprehensive cargo insurance.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Service Overview -->
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Complete Protection, From Packing to Delivery
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Lumora Horizon, we go beyond shipping — we secure and support your cargo every step of the way 
            with professional packing services, secure storage solutions, and comprehensive insurance coverage.
          </p>
        </div>

        <!-- Three Service Sections -->
        <div class="space-y-16">
          
          <!-- Packing Services -->
          <div class="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Packing Services</h3>
              </div>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                We provide tailored packing solutions for all types of cargo, handled by trained staff to ensure 
                international compliance and maximum protection in transit.
              </p>

              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Cargo Types</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>  General cargo</li>
                    <li>  Dangerous goods (DG)</li>
                    <li>  Fragile items & high-value equipment</li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Packing Materials</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>  Certified DG boxes</li>
                    <li>  Custom-built wooden cases & crates</li>
                    <li>  Durable carton boxes with fragile cargo support</li>
                    <li>  Labels, documentation, and handling instructions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-indigo-50 rounded-lg p-8">
              <h4 class="font-semibold text-indigo-900 mb-4">Professional Packing Features</h4>
              <div class="space-y-3">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Foam, wrap, shock protection for fragile items</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm text-gray-600">International compliance standards</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Complete labeling and documentation</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Service Images -->
          <div class="mb-12">
            <div class="grid md:grid-cols-2 gap-8">
              <!-- Fragile Packaging Image -->
              <div>
                <img 
                  src="/images/fragile-packaging.webp" 
                  alt="Professional fragile packaging services"
                  class="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <p class="text-sm text-gray-500 mt-2 text-center">Professional packaging with proper fragile handling labels</p>
              </div>
              
              <!-- Warehouse Storage Image -->
              <div>
                <img 
                  src="/images/warehouse-storage.webp" 
                  alt="Secure warehouse storage facilities"
                  class="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <p class="text-sm text-gray-500 mt-2 text-center">Secure storage facilities with organized inventory management</p>
              </div>
            </div>
          </div>

          <!-- Storage Solutions -->
          <div class="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Storage Solutions</h3>
              </div>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                Need to hold your cargo safely before shipping or delivery? Our secure facilities offer flexible 
                storage options operated by experienced warehouse teams near major transport hubs.
              </p>

              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Storage Options</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>  Flexible storage from 1m² to 1,000m²</li>
                    <li>  Short-term or long-term warehousing</li>
                    <li>  Modern material handling equipment</li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Security Features</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>  Monitored access and surveillance systems</li>
                    <li>  Climate control for sensitive goods</li>
                    <li>  24/7 security and fire safety certified</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-yellow-50 rounded-lg p-8">
              <h4 class="font-semibold text-yellow-900 mb-4">Warehouse Capabilities</h4>
              <div class="space-y-3">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Strategic locations near airports and ports</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Temperature-controlled environments</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Professional inventory management</span>
                </div>
              </div>

              <div class="mt-6 pt-6 border-t border-yellow-200">
                <p class="text-sm text-yellow-800 font-medium">
                  📍 All storage facilities are operated by experienced warehouse teams and located near major transport hubs.
                </p>
              </div>
            </div>
          </div>

          <!-- Cargo Insurance -->
          <div class="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Cargo Insurance & Marine Coverage</h3>
              </div>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                We offer insurance for any kind of cargo, giving you peace of mind from pickup to final delivery. 
                All policies issued by trusted global insurance providers, ensuring complete risk protection.
              </p>

              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Coverage Includes</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>  General cargo insurance</li>
                    <li>  High-value & fragile goods</li>
                    <li>  Dangerous goods and sensitive shipments</li>
                    <li>  Marine insurance for sea freight (FCL/LCL)</li>
                    <li>  Full-value policies available for any amount</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-green-50 rounded-lg p-8">
              <h4 class="font-semibold text-green-900 mb-4">Insurance Benefits</h4>
              <div class="space-y-3">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Complete risk protection during transit</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Trusted global insurance providers</span>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Flexible coverage amounts</span>
                </div>
              </div>

              <div class="mt-6 pt-6 border-t border-green-200">
                <p class="text-sm text-green-800 font-medium">
                  ✅ All policies issued by trusted global insurance providers, ensuring complete risk protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-lumora-beige py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl font-bold text-lumora-red mb-4">
          Need Packing, Storage or Insurance?
        </h2>
        <p class="text-lg text-lumora-red mb-8 max-w-2xl mx-auto">
          Complete protection for your cargo with professional packing, secure storage, and comprehensive insurance coverage.
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lumora-red hover:bg-lumora-red/90 transition-colors"
        >
          Get Protection Quote
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PackingStorage',
  metaInfo: {
    title: 'Packing, Storage & Insurance - Lumora Horizon',
    meta: [
      {
        name: 'description',
        content: 'Professional packing, secure storage, and comprehensive cargo insurance. Complete protection from packing to delivery with trusted global providers.'
      }
    ]
  }
}
</script>
