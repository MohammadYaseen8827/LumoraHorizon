<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-lumora-beige py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Information Center
          </h1>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Access essential logistics resources, tools, and guides to optimize your shipping operations
          </p>
          <div class="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div class="flex items-center">
              <svg class="w-4 h-4 text-lumora-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="3"/>
              </svg>
              Find everything you need to know about shipping terminology, tracking methods, and industry standards
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Information Grid -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          
          <!-- Equipment Size -->
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-bold text-sm">1</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900">Equipment Size</h3>
            </div>
            <p class="text-gray-600 mb-6 text-sm">
              Comprehensive size dimensions for various shipping containers and trucking equipment dimensions.
            </p>
            
            <div class="space-y-3 mb-6">
              <div class="text-sm">
                <div class="font-semibold text-gray-900">Container Capacity:</div>
                <div class="text-gray-600">
                  <div>✓ 20' Standard Container (20' x 8' x 8'6")</div>
                  <div>✓ 40' High Cube Container (40' x 8' x 9'6")</div>
                  <div>✓ 45' High Cube Container (45' x 8' x 9'6")</div>
                </div>
              </div>
              <div class="text-sm">
                <div class="font-semibold text-gray-900">Truck Full Specifications:</div>
                <div class="text-gray-600">Maximum dimensions and weight limits</div>
              </div>
            </div>

            <button class="w-full bg-lumora-red text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-lumora-red/90 transition-colors">
              View Complete Guide
            </button>
          </div>

          <!-- INCOTERMS -->
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-bold text-sm">2</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900">INCOTERMS</h3>
            </div>
            <p class="text-gray-600 mb-6 text-sm">
              Complete explanation of International Commercial Terms that define responsibilities in international shipping transactions.
            </p>
            
            <div class="space-y-3 mb-6">
              <div class="text-sm">
                <div class="font-semibold text-gray-900">Popular INCOTERMS:</div>
                <div class="text-gray-600">
                  <div>✓ EXW (Ex Works)</div>
                  <div>✓ FOB (Free on Board)</div>
                  <div>✓ CIF (Cost, Insurance and Freight)</div>
                  <div>✓ DDP (Delivered Duty Paid)</div>
                </div>
              </div>
            </div>

            <button class="w-full bg-lumora-red text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-lumora-red/90 transition-colors">
              Explore INCOTERMS Guide
            </button>
          </div>

          <!-- Volume Calculator -->
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-bold text-sm">3</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900">Volume Calculator</h3>
            </div>
            <p class="text-gray-600 mb-6 text-sm">
              Calculate volume, weight, and dimensional weight for ocean shipments.
            </p>
            
            <div class="space-y-4 mb-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Length (cm)</label>
                <input type="number" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Width (cm)</label>
                <input type="number" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
                <input type="number" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
              </div>
            </div>

            <button class="w-full bg-lumora-red text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-lumora-red/90 transition-colors">
              Calculate Volume Weight
            </button>
          </div>

          <!-- Shipping Terms -->
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-bold text-sm">4</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900">Shipping Terms</h3>
            </div>
            <p class="text-gray-600 mb-6 text-sm">
              Comprehensive glossary of shipping and logistics terminology to help you understand industry jargon.
            </p>
            
            <div class="space-y-3 mb-6">
              <div class="text-sm">
                <div class="font-semibold text-gray-900">B/L (Bill of Lading)</div>
                <div class="text-gray-600">A document issued by a carrier to acknowledge receipt of cargo for shipment.</div>
              </div>
              <div class="text-sm">
                <div class="font-semibold text-gray-900">FCL (Full Container Load)</div>
                <div class="text-gray-600">A shipment whereby the shipper contracts and is charged for a complete container.</div>
              </div>
              <div class="text-sm">
                <div class="font-semibold text-gray-900">Demurrage</div>
                <div class="text-gray-600">Charge assessed when cargo hold at port beyond the allowed free time.</div>
              </div>
            </div>

            <button class="w-full bg-lumora-red text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-lumora-red/90 transition-colors">
              View Complete Glossary
            </button>
          </div>

          <!-- Air Tracking -->
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-bold text-sm">5</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900">Air Tracking</h3>
            </div>
            <p class="text-gray-600 mb-6 text-sm">
              Learn how to track your air freight shipments using our advanced tracking system and Lumora Horizon tracking portal.
            </p>
            
            <div class="mb-6">
              <div class="text-sm font-semibold text-gray-900 mb-2">Major Air Carriers:</div>
              <div class="grid grid-cols-2 gap-2">
                <div class="bg-gray-100 p-2 rounded text-center text-xs">
                  <img src="/src/assets/images/airplane.svg" alt="Airline Logo" class="w-8 h-6 mx-auto mb-1">
                  Lufthansa
                </div>
                <div class="bg-gray-100 p-2 rounded text-center text-xs">
                  <img src="/src/assets/images/airplane.svg" alt="Airline Logo" class="w-8 h-6 mx-auto mb-1">
                  Emirates
                </div>
              </div>
            </div>

            <button class="w-full bg-lumora-red text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-lumora-red/90 transition-colors">
              Air Tracking Guide
            </button>
          </div>

          <!-- Ocean Tracking -->
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-bold text-sm">6</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900">Ocean Tracking</h3>
            </div>
            <p class="text-gray-600 mb-6 text-sm">
              Comprehensive guide to tracking ocean freight shipments, container status and vessel schedules.
            </p>
            
            <div class="mb-6">
              <div class="text-sm font-semibold text-gray-900 mb-2">Major Ocean Carriers:</div>
              <div class="grid grid-cols-2 gap-2">
                <div class="bg-gray-100 p-2 rounded text-center text-xs">
                  <img src="/src/assets/images/container-ship.svg" alt="Carrier Logo" class="w-8 h-6 mx-auto mb-1">
                  Maersk
                </div>
                <div class="bg-gray-100 p-2 rounded text-center text-xs">
                  <img src="/src/assets/images/container-ship.svg" alt="Carrier Logo" class="w-8 h-6 mx-auto mb-1">
                  MSC
                </div>
              </div>
            </div>

            <button class="w-full bg-lumora-red text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-lumora-red/90 transition-colors">
              Ocean Tracking Guide
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <div class="flex items-center">
            <div class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
              <span class="text-white font-bold text-sm">7</span>
            </div>
            <h2 class="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <router-link 
            to="/faq" 
            class="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors"
          >
            View All FAQs
          </router-link>
        </div>

        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              What's the difference between volumetric weight and actual weight?
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Volumetric weight is calculated based on the dimensions of a package, while actual weight is the physical weight measured on a scale. Carriers charge based on whichever is 
              greater to ensure optimal space usage. Volumetric weight is calculated by multiplying length x width x height and dividing by a dimensional factor.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              How do I determine which INCOTERM to use for my shipment?
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              The choice of INCOTERM depends on several factors including your relationship with the buyer/seller, your experience with international shipping, and your risk tolerance. Contact 
              our experts for personalized recommendations based on your specific requirements and destination shipping and your risk tolerance.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              What documents are required for international shipping?
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Required documents vary by destination, but typically include the Bill of Lading, Commercial Invoice, Packing List, and Certificate of Origin and customs declaration forms. Specific requirements may vary by country 
              and commodity.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources & Downloads -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Resources & Downloads</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Container Specifications</h3>
            <p class="text-sm text-gray-600 mb-4">
              Detailed specifications and load capacity information for all container types.
            </p>
            <button class="bg-lumora-red text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-lumora-red/90 transition-colors">
              Download PDF
            </button>
          </div>

          <div class="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">INCOTERMS Chart</h3>
            <p class="text-sm text-gray-600 mb-4">
              Comprehensive chart showing all INCOTERMS and their responsibilities breakdown.
            </p>
            <button class="bg-lumora-red text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-lumora-red/90 transition-colors">
              Download Excel
            </button>
          </div>

          <div class="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Shipping Glossary</h3>
            <p class="text-sm text-gray-600 mb-4">
              Complete glossary of international shipping and logistics terminology.
            </p>
            <button class="bg-lumora-red text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-lumora-red/90 transition-colors">
              Download PDF
            </button>
          </div>

          <div class="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Tracking Guide</h3>
            <p class="text-sm text-gray-600 mb-4">
              Step-by-step guide to tracking your air and ocean freight shipments.
            </p>
            <button class="bg-lumora-red text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-lumora-red/90 transition-colors">
              Download Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'InformationCenter'
}
</script>