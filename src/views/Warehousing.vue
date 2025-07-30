<template>
  <div>
    <!-- Header Section -->
    <section class="relative bg-cover bg-center py-20" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/modern-warehouse.webp')">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-6 text-white">Warehousing Services</h1>
          <p class="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Secure storage and distribution solutions with state-of-the-art facilities. 
            Optimize your supply chain with our comprehensive warehousing and fulfillment services.
          </p>
        </div>
      </div>
    </section>

    <!-- Service Overview -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Warehousing?</h2>
            <p class="text-gray-600 mb-6">
              Our strategically located warehouses provide secure storage, efficient inventory management, 
              and flexible distribution services. With advanced technology and experienced staff, we ensure 
              your goods are stored safely and moved efficiently through your supply chain.
            </p>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Strategic locations near major ports and transport hubs</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">24/7 security and monitoring systems</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Advanced inventory management systems</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Flexible short-term and long-term storage options</span>
              </div>
            </div>
          </div>
          <div class="bg-lumora-beige/20 p-8 rounded-lg">
            <div class="text-center">
              <svg class="w-24 h-24 mx-auto mb-6 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Modern Facilities</h3>
              <p class="text-gray-600">
                State-of-the-art warehouses equipped with the latest technology for optimal storage and handling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Warehouse Images Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <!-- Modern Warehouse Image -->
          <div>
            <img 
              src="/images/modern-warehouse.webp" 
              alt="Modern warehouse facility - Professional storage solutions"
              class="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <p class="text-sm text-gray-500 mt-2 text-center">State-of-the-art warehouse facilities with organized storage systems</p>
          </div>
          
          <!-- Warehouse Storage Image -->
          <div>
            <img 
              src="/images/warehouse-storage.webp" 
              alt="Warehouse storage with proper packaging - Secure storage solutions"
              class="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <p class="text-sm text-gray-500 mt-2 text-center">Professional packaging and secure storage for all cargo types</p>
          </div>
        </div>
        
        <!-- Fragile Packaging Image -->
        <div class="max-w-4xl mx-auto">
          <img 
            src="/images/fragile-packaging.webp" 
            alt="Fragile packaging and handling services - Specialized cargo care"
            class="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <p class="text-sm text-gray-500 mt-2 text-center">Specialized handling for fragile and sensitive cargo with proper labeling</p>
        </div>
      </div>
    </section>

    <!-- Storage Solutions -->
    <section class="py-20 bg-lumora-beige/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Storage Solutions</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive warehousing options designed to meet diverse storage and distribution requirements.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-white p-8 rounded-lg shadow-sm border">
            <div class="w-16 h-16 bg-lumora-red/10 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Climate-Controlled Storage</h3>
            <p class="text-gray-600 mb-6">
              Temperature and humidity-controlled environments for sensitive goods, pharmaceuticals, 
              electronics, and perishable items requiring specific storage conditions.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Temperature range: -20°C to +25°C</li>
              <li>• Humidity control 45-65% RH</li>
              <li>• 24/7 environmental monitoring</li>
              <li>• Alarm systems for temperature deviations</li>
              <li>• GDP compliance for pharmaceuticals</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm border">
            <div class="w-16 h-16 bg-lumora-red/10 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 10h14m-7 4h7m-7 2h7"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">General Storage</h3>
            <p class="text-gray-600 mb-6">
              Standard warehouse storage for general merchandise, manufactured goods, and non-sensitive 
              cargo requiring secure, dry storage conditions.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• High-ceiling storage areas</li>
              <li>• Flexible rack configurations</li>
              <li>• Floor storage options</li>
              <li>• Easy loading dock access</li>
              <li>• Cost-effective storage rates</li>
            </ul>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-sm border">
            <div class="w-16 h-16 bg-lumora-red/10 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Bonded Warehousing</h3>
            <p class="text-gray-600 mb-6">
              Customs-bonded facilities for imported goods awaiting clearance, enabling deferred 
              duty payments and value-added services before customs release.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Duty deferment capabilities</li>
              <li>• Customs inspection facilities</li>
              <li>• Re-export without duty payment</li>
              <li>• Value-added services</li>
              <li>• Compliance with customs regulations</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm border">
            <div class="w-16 h-16 bg-lumora-red/10 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Hazardous Goods Storage</h3>
            <p class="text-gray-600 mb-6">
              Specialized storage facilities for dangerous goods with proper segregation, ventilation, 
              and safety measures complying with international regulations.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• IMDG code compliance</li>
              <li>• Proper segregation systems</li>
              <li>• Fire suppression systems</li>
              <li>• Specialized handling equipment</li>
              <li>• Emergency response procedures</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Value-Added Services -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Value-Added Services</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Beyond storage, we offer comprehensive services to optimize your supply chain operations.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-lumora-beige rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2zm8 0h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2V7a2 2 0 012-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Pick & Pack Services</h3>
            <p class="text-gray-600">
              Professional order fulfillment with accurate picking, quality control, and custom packaging solutions.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-lumora-beige rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Inventory Management</h3>
            <p class="text-gray-600">
              Real-time inventory tracking with WMS integration, cycle counting, and automated reporting systems.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-lumora-beige rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Cross-Docking</h3>
            <p class="text-gray-600">
              Efficient transfer of goods directly from inbound to outbound transportation with minimal storage time.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-lumora-beige rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Labeling & Marking</h3>
            <p class="text-gray-600">
              Custom labeling, marking, and re-packaging services to meet specific customer and regulatory requirements.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-lumora-beige rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Quality Control</h3>
            <p class="text-gray-600">
              Comprehensive inspection services, damage assessment, and quality assurance protocols.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-lumora-beige rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Distribution Services</h3>
            <p class="text-gray-600">
              Last-mile delivery coordination and regional distribution network management for seamless fulfillment.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-lumora-beige">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-lumora-red mb-6">
          Need Warehousing Solutions?
        </h2>
        <p class="text-lg text-lumora-red mb-8">
          Optimize your supply chain with our secure storage facilities and comprehensive warehousing services.
        </p>
        <router-link 
          to="/contact" 
          class="inline-block bg-lumora-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-lumora-red/90 transition-colors"
        >
          Get Warehousing Quote
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
// No reactive data needed for this static content page
</script>
