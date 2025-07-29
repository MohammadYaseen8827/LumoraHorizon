<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-lumora-red text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-6">
            Information Center
          </h1>
          <p class="text-lg text-lumora-beige max-w-4xl mx-auto leading-relaxed">
            Access essential logistics resources, tools, and guides to optimize your shipping operations
          </p>
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
            
            <div class="space-y-4">
              <div class="text-sm">
                <div class="font-semibold text-gray-900 mb-2">Sea Freight Containers:</div>
                <div class="text-gray-600 space-y-1">
                  <div>• 20' Container: 20' x 8' x 8'6" (Max: 28,330 kg)</div>
                  <div>• 40' Container: 40' x 8' x 8'6" (Max: 30,480 kg)</div>
                  <div>• 40' HC: 40' x 8' x 9'6" (Max: 30,480 kg)</div>
                  <div>• 45' HC: 45' x 8' x 9'6" (Max: 29,500 kg)</div>
                </div>
              </div>
              <div class="text-sm">
                <div class="font-semibold text-gray-900 mb-2">Land Transport:</div>
                <div class="text-gray-600 space-y-1">
                  <div>• Standard Truck: 13.6m x 2.45m x 2.7m</div>
                  <div>• Maximum Weight: 38,000 kg</div>
                  <div>• Payload Capacity: 24,000 kg</div>
                </div>
              </div>
              <div class="text-sm">
                <div class="font-semibold text-gray-900 mb-2">Air Freight:</div>
                <div class="text-gray-600 space-y-1">
                  <div>• ULD LD3: 153 x 156 x 163 cm</div>
                  <div>• ULD LD7: 317 x 224 x 163 cm</div>
                  <div>• Max Single Piece: 300 x 200 x 160 cm</div>
                </div>
              </div>
            </div>
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
            
            <div class="space-y-4">
              <div class="text-sm">
                <div class="font-semibold text-gray-900 mb-2">Key INCOTERMS 2020:</div>
                <div class="text-gray-600 space-y-2">
                  <div><strong>EXW:</strong> Seller provides goods at their premises</div>
                  <div><strong>FOB:</strong> Seller delivers goods on board vessel</div>
                  <div><strong>CIF:</strong> Seller pays cost, insurance, freight to destination</div>
                  <div><strong>DDP:</strong> Seller responsible for all costs to delivery</div>
                  <div><strong>FCA:</strong> Seller delivers to carrier nominated by buyer</div>
                  <div><strong>CPT:</strong> Seller pays transport to destination terminal</div>
                </div>
              </div>
              <div class="text-sm mt-4 p-3 bg-gray-50 rounded">
                <div class="font-semibold text-gray-900 mb-1">Risk Transfer Point:</div>
                <div class="text-gray-600">Determines when responsibility shifts from seller to buyer</div>
              </div>
            </div>
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
              Calculate volume, weight, and dimensional weight for air and ocean shipments based on international standards.
            </p>
            
            <div class="space-y-4 mb-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Length (cm)</label>
                <input v-model.number="dimensions.length" type="number" min="0" step="0.1" 
                       class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-lumora-red focus:border-transparent"
                       placeholder="Enter length in cm">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Width (cm)</label>
                <input v-model.number="dimensions.width" type="number" min="0" step="0.1"
                       class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-lumora-red focus:border-transparent"
                       placeholder="Enter width in cm">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
                <input v-model.number="dimensions.height" type="number" min="0" step="0.1"
                       class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-lumora-red focus:border-transparent"
                       placeholder="Enter height in cm">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Actual Weight (kg)</label>
                <input v-model.number="actualWeight" type="number" min="0" step="0.1"
                       class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-lumora-red focus:border-transparent"
                       placeholder="Enter actual weight in kg">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Transportation Mode</label>
                <select v-model="transportMode" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-lumora-red focus:border-transparent">
                  <option value="air">Air Freight (Divisor: 6000)</option>
                  <option value="sea">Sea Freight (Divisor: 1000)</option>
                  <option value="express">Express Air (Divisor: 5000)</option>
                </select>
              </div>
            </div>

            <button @click="calculateVolume" class="w-full bg-lumora-red text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-lumora-red/90 transition-colors mb-4">
              Calculate Volume Weight
            </button>

            <!-- Results Display -->
            <div v-if="results.calculated" class="bg-gray-50 rounded-lg p-4 space-y-3">
              <div class="text-xs font-medium text-gray-700 mb-2">Calculation Results:</div>
              
              <div class="grid grid-cols-2 gap-3 text-xs">
                <div class="bg-white p-2 rounded">
                  <div class="font-medium text-gray-700">Volume (m³)</div>
                  <div class="text-lumora-red font-bold">{{ results.volumeM3 }}</div>
                </div>
                <div class="bg-white p-2 rounded">
                  <div class="font-medium text-gray-700">Volume Weight (kg)</div>
                  <div class="text-lumora-red font-bold">{{ results.volumeWeight }}</div>
                </div>
                <div class="bg-white p-2 rounded">
                  <div class="font-medium text-gray-700">Actual Weight (kg)</div>
                  <div class="text-gray-600 font-bold">{{ results.actualWeight }}</div>
                </div>
                <div class="bg-white p-2 rounded">
                  <div class="font-medium text-gray-700">Chargeable Weight</div>
                  <div class="text-green-600 font-bold">{{ results.chargeableWeight }} kg</div>
                </div>
              </div>
              
              <div class="text-xs text-gray-600 mt-2 p-2 bg-blue-50 rounded">
                <strong>Formula:</strong> Volume Weight = (L × W × H) ÷ {{ getDivisor() }}
                <br>
                <strong>Chargeable Weight:</strong> Greater of volume weight or actual weight
              </div>
            </div>
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
              <span class="text-white font-bold text-sm">4</span>
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


  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'InformationCenter',
  setup() {
    // Reactive data for the volume calculator
    const dimensions = reactive({
      length: null,
      width: null,
      height: null
    })
    
    const actualWeight = ref(null)
    const transportMode = ref('air')
    
    const results = reactive({
      calculated: false,
      volumeM3: '',
      volumeWeight: '',
      actualWeight: '',
      chargeableWeight: ''
    })
    
    // International standard divisors for volumetric weight calculation
    const getDivisor = () => {
      const divisors = {
        air: 6000,        // IATA standard for air freight
        sea: 1000,        // Standard for sea freight
        express: 5000     // Standard for express air services
      }
      return divisors[transportMode.value]
    }
    
    // Calculate volume and volumetric weight based on international standards
    const calculateVolume = () => {
      // Validate inputs
      if (!dimensions.length || !dimensions.width || !dimensions.height) {
        alert('Please enter all dimensions (Length, Width, Height)')
        return
      }
      
      if (dimensions.length <= 0 || dimensions.width <= 0 || dimensions.height <= 0) {
        alert('All dimensions must be greater than 0')
        return
      }
      
      // Convert cm to m³
      const volumeM3 = (dimensions.length * dimensions.width * dimensions.height) / 1000000
      
      // Calculate volumetric weight using international standards
      // Formula: (Length × Width × Height in cm) ÷ Divisor = Volumetric Weight in kg
      const volumeWeight = (dimensions.length * dimensions.width * dimensions.height) / getDivisor()
      
      // Determine chargeable weight (greater of actual weight or volume weight)
      const actualWt = actualWeight.value || 0
      const chargeableWeight = Math.max(volumeWeight, actualWt)
      
      // Update results
      results.calculated = true
      results.volumeM3 = volumeM3.toFixed(4)
      results.volumeWeight = volumeWeight.toFixed(2)
      results.actualWeight = actualWt.toFixed(2)
      results.chargeableWeight = chargeableWeight.toFixed(2)
    }
    
    return {
      dimensions,
      actualWeight,
      transportMode,
      results,
      getDivisor,
      calculateVolume
    }
  }
}
</script>