<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-lumora-red text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-6">
            Contact Us
          </h1>
          <p class="text-lg text-lumora-beige max-w-4xl mx-auto leading-relaxed">
            Have questions or need assistance? Our team is ready to help you with any 
            inquiries about our global logistics services.
          </p>
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

              <!-- Subject -->
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
                  <h4 class="font-semibold text-gray-900 mb-2">Iraq Headquarters</h4>
                  <div class="text-gray-600 text-sm space-y-1">
                    <div>West Park Complex</div>
                    <div>40 Meter, Next to Italian Village 1</div>
                    <div>Second Floor, Office 17</div>
                    <div>Erbil, Iraq</div>
                  </div>
                </div>
              </div>
            </div>



            <!-- Quick Contact Actions -->
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div class="space-y-4">
                <!-- Call Button -->
                <a 
                  href="tel:+9647717547000" 
                  class="flex items-center justify-center w-full bg-lumora-red text-white py-3 px-6 rounded-lg hover:bg-lumora-red/90 transition-colors"
                >
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Call Now: +964 771 754 7000
                </a>

                <!-- Email Button -->
                <a 
                  href="mailto:info@lumorahorizon.com" 
                  class="flex items-center justify-center w-full bg-lumora-beige text-lumora-red py-3 px-6 rounded-lg hover:bg-lumora-beige/90 transition-colors border-2 border-lumora-red"
                >
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Email Us
                </a>
              </div>
            </div>

            <!-- Business Hours -->
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-6">Business Hours</h3>
              <div class="space-y-2">
                <div>
                  <h4 class="font-semibold text-gray-900">Erbil Office</h4>
                  <div class="text-gray-600 text-sm">Sunday - Thursday: 9:00 AM - 5:00 PM</div>
                  <div class="text-gray-600 text-sm">Friday - Saturday: Closed</div>
                </div>

                <div class="mt-4">
                  <h4 class="font-semibold text-gray-900">Contact</h4>
                  <div class="text-gray-600 text-sm">For all inquiries:</div>
                  <div class="text-gray-600 text-sm">+964 771 754 7000</div>
                </div>
              </div>
            </div>
          </div>
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
