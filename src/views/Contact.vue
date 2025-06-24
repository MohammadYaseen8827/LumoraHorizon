<template>
  <div>
    <!-- Enhanced Hero Section -->
    <section class="bg-gradient-to-br from-lumora-beige via-lumora-beige to-orange-100 py-20 relative overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute inset-0">
        <div class="absolute top-10 right-20 w-24 h-24 bg-lumora-red/10 rounded-full float-animation"></div>
        <div class="absolute bottom-10 left-20 w-32 h-32 bg-orange-200/30 rounded-full float-animation" style="animation-delay: 1s;"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="fade-in-up">
            <h1 class="text-5xl font-bold text-gray-900 mb-6">
              Contact <span class="gradient-text">Us</span>
            </h1>
            <p class="text-xl text-gray-700 leading-relaxed mb-8">
              Have questions or need assistance? Our team is ready to help you with any 
              inquiries about our global logistics services.
            </p>
            
            <!-- Quick contact buttons -->
            <div class="flex flex-col sm:flex-row gap-4 fade-in-up stagger-1">
              <a href="tel:+1-555-123-4567" class="inline-flex items-center justify-center bg-lumora-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-lumora-red/90 transition-all duration-300 transform hover:scale-105">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Call Now
              </a>
              <a href="mailto:info@lumorahorizon.com" class="inline-flex items-center justify-center border-2 border-lumora-red text-lumora-red px-6 py-3 rounded-lg font-semibold hover:bg-lumora-red hover:text-white transition-all duration-300">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Email Us
              </a>
            </div>
          </div>
          
          <div class="flex justify-center slide-in-right">
            <div class="relative">
              <div class="absolute inset-0 bg-lumora-red/10 rounded-full blur-3xl transform scale-110"></div>
              <img src="/src/assets/images/team-member-1.svg" alt="Our Team" class="relative w-full max-w-md h-auto">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Name Fields -->
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    v-model="form.firstName"
                    type="text"
                    id="firstName"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lumora-red focus:border-transparent"
                  >
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    v-model="form.lastName"
                    type="text"
                    id="lastName"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lumora-red focus:border-transparent"
                  >
                </div>
              </div>

              <!-- Contact Fields -->
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    v-model="form.email"
                    type="email"
                    id="email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lumora-red focus:border-transparent"
                  >
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    id="phone"
                    placeholder="(786) 456-7890"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lumora-red focus:border-transparent"
                  >
                </div>
              </div>

              <!-- Subject and Department -->
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    v-model="form.subject"
                    type="text"
                    id="subject"
                    placeholder="How can we help you?"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lumora-red focus:border-transparent"
                  >
                </div>
                <div>
                  <label for="department" class="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    v-model="form.department"
                    id="department"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lumora-red focus:border-transparent"
                  >
                    <option value="">Select Department</option>
                    <option value="sales">Sales & New Business</option>
                    <option value="operations">Operations</option>
                    <option value="customer-service">Customer Service</option>
                    <option value="finance">Finance & Billing</option>
                  </select>
                </div>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  v-model="form.message"
                  id="message"
                  rows="5"
                  placeholder="Please describe how we can help you..."
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lumora-red focus:border-transparent"
                ></textarea>
              </div>

              <!-- Privacy Notice -->
              <div class="text-sm text-gray-500">
                I consent to Lumora Horizon processing my personal data in accordance with the <a href="#" class="text-lumora-red hover:underline">Privacy Policy</a>.
              </div>

              <!-- Enhanced Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="relative bg-lumora-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-lumora-red/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg btn-interactive disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting" class="flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                  Submit Message
                </span>
                <span v-else class="flex items-center justify-center">
                  <div class="spinner mr-2"></div>
                  Sending...
                </span>
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Our Offices -->
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-6">Our Offices</h3>
              <div class="space-y-6">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Global Headquarters</h4>
                  <div class="text-gray-600 text-sm space-y-1">
                    <div>789 Logistics Drive</div>
                    <div>Miami, FL 33131</div>
                    <div>United States</div>
                  </div>
                </div>

                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">North America Office</h4>
                  <div class="text-gray-600 text-sm space-y-1">
                    <div>456 Freight Boulevard</div>
                    <div>Suite 200</div>
                    <div>New York, NY 10001</div>
                    <div>United States</div>
                  </div>
                </div>

                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Asia Pacific Office</h4>
                  <div class="text-gray-600 text-sm space-y-1">
                    <div>789 Shipping Street</div>
                    <div>Level 15</div>
                    <div>Singapore 189871</div>
                    <div>Singapore</div>
                  </div>
                </div>

                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Europe Office</h4>
                  <div class="text-gray-600 text-sm space-y-1">
                    <div>456 Cargo Lane</div>
                    <div>Amsterdam, 1012AB</div>
                    <div>Netherlands</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Department Contacts -->
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-6">Department Contacts</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-900">Customer Service</h4>
                  <div class="text-gray-600 text-sm">+971 4 123 4567</div>
                  <div class="text-gray-600 text-sm">service@lumorahorizon.com</div>
                </div>

                <div>
                  <h4 class="font-semibold text-gray-900">Sales & New Business</h4>
                  <div class="text-gray-600 text-sm">+971 4 123 4568</div>
                  <div class="text-gray-600 text-sm">sales@lumorahorizon.com</div>
                </div>

                <div>
                  <h4 class="font-semibold text-gray-900">Operations</h4>
                  <div class="text-gray-600 text-sm">+971 4 123 4569</div>
                  <div class="text-gray-600 text-sm">ops@lumorahorizon.com</div>
                </div>

                <div>
                  <h4 class="font-semibold text-gray-900">Finance & Billing</h4>
                  <div class="text-gray-600 text-sm">+971 4 123 4570</div>
                  <div class="text-gray-600 text-sm">billing@lumorahorizon.com</div>
                </div>

                <div>
                  <h4 class="font-semibold text-gray-900">Human Resources</h4>
                  <div class="text-gray-600 text-sm">+971 4 123 4571</div>
                  <div class="text-gray-600 text-sm">careers@lumorahorizon.com</div>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-6">Business Hours</h3>
              <div class="space-y-2">
                <div>
                  <h4 class="font-semibold text-gray-900">Dubai Headquarters</h4>
                  <div class="text-gray-600 text-sm">Sunday - Thursday: 9:00 AM - 6:00 PM</div>
                  <div class="text-gray-600 text-sm">Friday - Saturday: Closed</div>
                </div>

                <div class="mt-4">
                  <h4 class="font-semibold text-gray-900">24/7 Support</h4>
                  <div class="text-gray-600 text-sm">For urgent matters outside business hours:</div>
                  <div class="text-gray-600 text-sm">+971 50 123 4567</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Find Us Map Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Find Us</h2>
        
        <!-- World Map with Offices -->
        <div class="relative bg-white rounded-lg shadow-lg p-8">
          <img src="/src/assets/images/world-map.svg" alt="Global Office Locations" class="w-full h-auto">
          
          <!-- Office Markers -->
          <div class="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div class="w-4 h-4 bg-lumora-red rounded-full animate-pulse"></div>
            <div class="text-xs font-semibold text-gray-900 mt-1 whitespace-nowrap">New York</div>
          </div>
          
          <div class="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2">
            <div class="w-4 h-4 bg-lumora-red rounded-full animate-pulse"></div>
            <div class="text-xs font-semibold text-gray-900 mt-1 whitespace-nowrap">Dubai</div>
          </div>
          
          <div class="absolute top-2/3 right-1/5 transform translate-x-1/2 -translate-y-1/2">
            <div class="w-4 h-4 bg-lumora-red rounded-full animate-pulse"></div>
            <div class="text-xs font-semibold text-gray-900 mt-1 whitespace-nowrap">Singapore</div>
          </div>
        </div>

        <!-- Contact Actions -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button class="bg-lumora-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-lumora-red/90 transition-colors">
            Book to Phone
          </button>
          <button class="border-2 border-lumora-red text-lumora-red px-8 py-3 rounded-lg font-semibold hover:bg-lumora-red hover:text-white transition-colors">
            View FAQ
          </button>
          <button class="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
            Download Company Brochure
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      isSubmitting: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        department: '',
        message: ''
      }
    }
  },
  methods: {
    async submitForm() {
      // Start loading state
      this.isSubmitting = true
      
      try {
        // Simulate form submission delay
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Handle form submission
        console.log('Form submitted:', this.form)
        
        // Show success message with better UX
        this.showSuccessMessage()
        
        // Reset form
        this.resetForm()
      } catch (error) {
        console.error('Form submission error:', error)
        alert('Sorry, there was an error sending your message. Please try again.')
      } finally {
        this.isSubmitting = false
      }
    },
    
    showSuccessMessage() {
      // Create a more elegant success notification
      const notification = document.createElement('div')
      notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300'
      notification.innerHTML = `
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Thank you! Your message has been sent successfully.
        </div>
      `
      
      document.body.appendChild(notification)
      
      // Animate in
      setTimeout(() => {
        notification.classList.remove('translate-x-full')
      }, 100)
      
      // Remove after 5 seconds
      setTimeout(() => {
        notification.classList.add('translate-x-full')
        setTimeout(() => {
          document.body.removeChild(notification)
        }, 300)
      }, 5000)
    },
    
    resetForm() {
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        department: '',
        message: ''
      }
    }
  }
}
</script>