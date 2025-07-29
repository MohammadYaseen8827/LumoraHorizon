<template>
  <div>
    <!-- Header Section -->
    <section class="py-20 bg-lumora-beige/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-5xl font-bold text-gray-900 mb-6">Land Transport Services</h1>
            <p class="text-xl text-gray-600">
              Efficient ground transportation solutions for regional and cross-border shipping. 
              Connect inland destinations with reliable truck and rail freight services.
            </p>
          </div>
          <div class="flex justify-center">
            <img src="/src/assets/images/truck.svg" alt="Land Transport Services" class="w-full max-w-lg h-auto">
          </div>
        </div>
      </div>
    </section>

    <!-- Service Overview -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Why Choose Land Transport?</h2>
            <p class="text-gray-600 mb-6">
              Land transport offers the perfect solution for regional shipping, cross-border trade, and last-mile delivery. 
              Our ground transportation network provides flexible, cost-effective solutions for businesses requiring 
              reliable overland cargo movement.
            </p>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Port-to-destination delivery capabilities</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Flexible scheduling and routing</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Cost-effective for regional shipments</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">Suitable for all cargo types and sizes</span>
              </div>
            </div>
          </div>
          <div class="bg-lumora-beige/20 p-8 rounded-lg">
            <div class="text-center">
              <svg class="w-24 h-24 mx-auto mb-6 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Regional Network</h3>
              <p class="text-gray-600">
                Extensive land transport network covering major trade routes and inland destinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Types -->
    <section class="py-20 bg-lumora-beige/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Land Transport Solutions</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of ground transportation options for your cargo needs.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-white p-8 rounded-lg shadow-sm border">
            <div class="w-16 h-16 bg-lumora-red/10 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Full Truckload (FTL)</h3>
            <p class="text-gray-600 mb-6">
              Dedicated truck service for large shipments requiring exclusive use of the entire trailer. 
              Perfect for high-volume cargo with specific delivery requirements.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Exclusive use of entire truck</li>
              <li>• Direct delivery without stops</li>
              <li>• Various trailer types available</li>
              <li>• Enhanced cargo security</li>
              <li>• Faster transit times</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm border">
            <div class="w-16 h-16 bg-lumora-red/10 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Less than Truckload (LTL)</h3>
            <p class="text-gray-600 mb-6">
              Cost-effective solution for smaller shipments that don't require a full truck. 
              Share trailer space while maintaining competitive pricing.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Pay only for space used</li>
              <li>• Consolidation with other shipments</li>
              <li>• Regular scheduled services</li>
              <li>• Professional cargo handling</li>
              <li>• Competitive pricing</li>
            </ul>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-sm border">
            <div class="w-16 h-16 bg-lumora-red/10 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Rail Freight</h3>
            <p class="text-gray-600 mb-6">
              Environmentally-friendly rail transportation for bulk cargo and long-distance shipments. 
              Cost-effective solution for heavy and high-volume goods.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Eco-friendly transportation</li>
              <li>• Ideal for bulk commodities</li>
              <li>• Long-distance efficiency</li>
              <li>• Intermodal connectivity</li>
              <li>• Weather-independent service</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-sm border">
            <div class="w-16 h-16 bg-lumora-red/10 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Cross-Border Services</h3>
            <p class="text-gray-600 mb-6">
              Specialized cross-border transportation with customs clearance and regulatory compliance. 
              Seamless international land transport solutions.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Customs documentation handling</li>
              <li>• Border clearance expertise</li>
              <li>• Multi-country routing</li>
              <li>• Regulatory compliance</li>
              <li>• Trade facilitation services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialized Equipment -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Specialized Equipment</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-lumora-beige rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Refrigerated Trucks</h3>
            <p class="text-gray-600">
              Temperature-controlled transportation for perishable goods, pharmaceuticals, and temperature-sensitive cargo.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-lumora-beige rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v1H6V4a1 1 0 011-1V2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Flatbed Trailers</h3>
            <p class="text-gray-600">
              Open trailers for oversized cargo, construction materials, and machinery requiring specialized loading.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-lumora-beige rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-lumora-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Secure Transport</h3>
            <p class="text-gray-600">
              High-security transportation for valuable cargo, electronics, and goods requiring enhanced protection.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-lumora-red">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-white mb-6">
          Need Reliable Land Transport?
        </h2>
        <p class="text-lg text-lumora-beige mb-8">
          Get competitive ground transportation rates and flexible delivery solutions for your regional shipping needs.
        </p>
        <router-link 
          to="/contact" 
          class="inline-block bg-white text-lumora-red px-8 py-3 rounded-lg font-semibold hover:bg-lumora-beige transition-colors"
        >
          Get Land Transport Quote
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
// No reactive data needed for this static content page
</script>