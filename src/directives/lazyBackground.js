// Vue 3 custom directive for lazy loading background images
export default {
  mounted(el, binding) {
    function loadBg() {
      if (el.dataset.bgLoaded) return;
      el.style.backgroundImage = binding.value;
      el.dataset.bgLoaded = 'true';
      observer.disconnect();
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadBg();
      }
    });
    observer.observe(el);
  }
}; 