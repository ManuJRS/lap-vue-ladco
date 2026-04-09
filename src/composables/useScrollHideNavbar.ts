import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollHideNavbar(threshold = 80) {
  const isHidden = ref(false);
  const isScrolled = ref(false);
  let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

  const handleScroll = () => {
    if (typeof window === 'undefined') return;
    const currentScrollY = window.scrollY;
    
    isScrolled.value = currentScrollY > 0;
    
    // Hide navbar smoothly on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > threshold) {
      isHidden.value = true;
    } else {
      isHidden.value = false;
    }
    
    lastScrollY = currentScrollY;
  };

  onMounted(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
  });

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  return { isHidden, isScrolled };
}
