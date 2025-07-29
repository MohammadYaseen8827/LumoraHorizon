<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-lumora-red text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p class="text-lg text-lumora-beige max-w-4xl mx-auto leading-relaxed">
            Find answers to common questions about our logistics services and processes.
          </p>
        </div>
      </div>
    </section>

    <!-- Search Section -->
    <section class="py-8 bg-white border-b">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Search Bar -->
        <div class="max-w-md mx-auto flex">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search FAQs..."
            class="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-lumora-red focus:border-transparent"
          >
          <button class="bg-white text-lumora-beige border-2 border-lumora-beige px-6 py-3 rounded-r-lg hover:bg-lumora-beige hover:text-white transition-colors">
            Search
          </button>
        </div>
      </div>
    </section>

    <!-- FAQ Categories -->
    <section class="py-8 bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-4 justify-center">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            :class="[
              'px-6 py-2 rounded-lg font-medium transition-colors',
              activeCategory === category
                ? 'bg-lumora-red text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- FAQ Content -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-6">
          <div
            v-for="(faq, index) in filteredFAQs"
            :key="index"
            class="bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <button
              @click="toggleFAQ(index)"
              class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold text-gray-900">{{ faq.question }}</span>
              <svg
                :class="[
                  'w-5 h-5 text-gray-500 transition-transform',
                  openFAQs.includes(index) ? 'rotate-180' : ''
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div
              v-if="openFAQs.includes(index)"
              class="px-6 pb-4 text-gray-600"
              v-html="faq.answer"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Shipping Rates Information -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            How are shipping rates calculated?
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Shipping rates are calculated based on several factors:
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Weight & Volume -->
          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Weight & Volume</h3>
            <p class="text-gray-600 text-sm">
              Shipping cost is determined by the greater of actual weight or volumetric weight (length × width × height ÷ 5000).
            </p>
          </div>

          <!-- Distance & Route -->
          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Distance & Route</h3>
            <p class="text-gray-600 text-sm">
              Geographic distance and shipping route complexity. Some locations may have zone surcharges.
            </p>
          </div>

          <!-- Service Type -->
          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Service Type</h3>
            <p class="text-gray-600 text-sm">
              Express services cost more than standard delivery. Special handling may apply for certain items.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mt-8">
          <!-- Cargo Type -->
          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-lg flex items-center justify-center">
              <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Cargo Type</h3>
            <p class="text-gray-600 text-sm">
              General cargo has standard rates. Hazardous, fragile, or oversized items may have additional fees.
            </p>
          </div>

          <!-- Additional Services -->
          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Additional Services</h3>
            <p class="text-gray-600 text-sm">
              Insurance, customs clearance, packaging, and delivery confirmation add to base shipping cost.
            </p>
          </div>

          <!-- Transit Time -->
          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-lg flex items-center justify-center">
              <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Transit Time</h3>
            <p class="text-gray-600 text-sm">
              Faster delivery options typically cost more. Economy services offer lower rates with longer transit times.
            </p>
          </div>
        </div>

        <div class="text-center mt-12">
          <p class="text-gray-600 mb-6">
            For an accurate quote tailored to your specific shipment, please use our online quote tool or contact our sales team.
          </p>
          <router-link
            to="/contact"
            class="inline-block bg-lumora-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-lumora-red/90 transition-colors"
          >
            Load More Questions
          </router-link>
        </div>
      </div>
    </section>

    <!-- Still Have Questions CTA -->
    <section class="py-16 bg-lumora-red">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">
          Still have questions?
        </h2>
        <p class="text-lg text-lumora-beige mb-8">
          Our customer service team is here to help you with any questions or concerns you may have.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/contact"
            class="inline-block bg-white text-lumora-red px-8 py-3 rounded-lg font-semibold hover:bg-lumora-beige transition-colors"
          >
            Contact Us
          </router-link>
          <a
            href="tel:+9647717547000"
            class="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-lumora-red transition-colors"
          >
            Call Information Center
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      searchQuery: '',
      activeCategory: 'General',
      openFAQs: [],
      categories: ['General', 'Shipping', 'Documentation', 'Customs'],
      faqs: [
        {
          category: 'General',
          question: 'Does Lumora Horizon handle Dangerous Goods?',
          answer: `
            <p class="mb-4">Yes, Lumora Horizon is qualified to handle various classes of dangerous goods. We can both air and sea freight for most classes (contact us for specific requirements and restrictions).</p>
            <p class="mb-4">We can assist with:</p>
            <ul class="list-disc ml-6 space-y-2">
              <li>DG classification and documentation</li>
              <li>Regulatory compliance</li>
              <li>Specialized transportation</li>
              <li>Expert handling procedures</li>
              <li>Training and consultation services</li>
              <li>Documentation assistance and DG declarations based on the class of dangerous goods.</li>
              <li>Initial assessment of your specific requirements</li>
            </ul>
            <p class="mt-4 text-sm">
              <strong>Contact our specialists:</strong> Risk<br>
              <strong>More information about:</strong> IMDG and air regulations
            </p>
          `
        },
        {
          category: 'General',
          question: 'What are INCOTERMS?',
          answer: `
            <p class="mb-4">INCOTERMS (International Commercial Terms) are standardized trade terms published by the International Chamber of Commerce (ICC) that define the responsibilities of sellers and buyers for the delivery of goods under sales contracts.</p>
            <p class="mb-4">Common INCOTERMS include:</p>
            <ul class="list-disc ml-6 space-y-2">
              <li><strong>FOB (Free On Board)</strong> - Seller delivers when goods pass ship's rail at named port</li>
              <li><strong>CIF (Cost, Insurance, Freight)</strong> - Seller pays costs and freight to destination</li>
              <li><strong>DDP (Delivered Duty Paid)</strong> - Seller assumes all responsibility until delivery</li>
              <li><strong>EXW (Ex Works)</strong> - Buyer assumes all risks from seller's premises</li>
            </ul>
          `
        },
        {
          category: 'Shipping',
          question: 'LCL and Groupage Freight',
          answer: `
            <p class="mb-4">LCL (Less than Container Load) and groupage freight services allow you to ship smaller quantities without needing to fill an entire container.</p>
            <ul class="list-disc ml-6 space-y-2">
              <li>Cost-effective for smaller shipments</li>
              <li>Weekly consolidated departures to major destinations</li>
              <li>Professional packaging and handling</li>
              <li>Full documentation and reporting</li>
            </ul>
          `
        },

        {
          category: 'Documentation',
          question: 'What documents are required for international shipping?',
          answer: `
            <p class="mb-4">The required documentation for international shipping depends on the destination, commodity, and shipping method. Generally required documents include:</p>
            <ul class="list-disc ml-6 space-y-2">
              <li>Commercial Invoice</li>
              <li>Packing List</li>
              <li>Bill of Lading or Air Waybill</li>
              <li>Certificate of Origin</li>
              <li>Export/Import Licenses (when required)</li>
              <li>Insurance Certificate</li>
              <li>Customs Declaration forms</li>
            </ul>
            <p class="mt-4">Our documentation specialists can guide you through the specific requirements for your shipment.</p>
          `
        },
        {
          category: 'Customs',
          question: 'How do customs clearance fees work?',
          answer: `
            <p class="mb-4">Customs clearance involves several potential fees and charges:</p>
            <ul class="list-disc ml-6 space-y-2">
              <li><strong>Customs Duties:</strong> Based on commodity classification and country of origin</li>
              <li><strong>Taxes:</strong> VAT, GST or other applicable taxes</li>
              <li><strong>Brokerage Fees:</strong> For professional customs clearance services</li>
              <li><strong>Examination Fees:</strong> If customs requires physical inspection</li>
              <li><strong>Storage Fees:</strong> For goods held in customs warehouses</li>
            </ul>
            <p class="mt-4">We provide transparent fee structures and can estimate costs before shipping.</p>
          `
        }
      ]
    }
  },
  computed: {
    filteredFAQs() {
      let filtered = this.faqs;
      
      if (this.activeCategory !== 'General' && this.activeCategory !== 'All') {
        filtered = filtered.filter(faq => faq.category === this.activeCategory);
      }
      
      if (this.searchQuery) {
        filtered = filtered.filter(faq => 
          faq.question.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      
      return filtered;
    }
  },
  methods: {
    toggleFAQ(index) {
      const faqIndex = this.openFAQs.indexOf(index);
      if (faqIndex > -1) {
        this.openFAQs.splice(faqIndex, 1);
      } else {
        this.openFAQs.push(index);
      }
    }
  }
}
</script>
