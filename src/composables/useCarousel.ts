import { ref, onMounted, onUnmounted, computed, type Ref } from 'vue';

export interface UseCarouselOptions {
  totalItems: Ref<number> | number;
  itemsPerGroup: Ref<number> | number; // Number of items that advance per click/swipe
  autoplayDelay?: number; // 0 to disable
}

export function useCarousel(options: UseCarouselOptions) {
  const currentIndex = ref(0);
  let autoplayTimer: ReturnType<typeof setInterval> | null = null;
  
  const total = computed(() => 
    typeof options.totalItems === 'number' ? options.totalItems : options.totalItems.value
  );

  const stepSize = computed(() => 
    typeof options.itemsPerGroup === 'number' ? options.itemsPerGroup : options.itemsPerGroup.value
  );

  const totalGroups = computed(() => {
    if (total.value === 0 || stepSize.value === 0) return 0;
    return Math.ceil(total.value / stepSize.value);
  });
  
  const activeGroup = computed(() => {
    if (stepSize.value === 0) return 0;
    return Math.floor(currentIndex.value / stepSize.value);
  });

  const next = () => {
    if (total.value <= 0) return;
    currentIndex.value = (currentIndex.value + stepSize.value) % total.value;
  };

  const prev = () => {
    if (total.value <= 0) return;
    currentIndex.value = (currentIndex.value - stepSize.value + total.value) % total.value;
  };

  const goToGroup = (groupIndex: number) => {
    if (total.value <= 0) return;
    currentIndex.value = (groupIndex * stepSize.value) % total.value;
  };

  const startAutoplay = () => {
    if (!options.autoplayDelay || options.autoplayDelay <= 0 || total.value <= 1) return;
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      next();
    }, options.autoplayDelay);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  const restartAutoplay = () => {
    stopAutoplay();
    startAutoplay();
  };

  // Touch handling
  let startX = 0;
  let endX = 0;

  const onTouchStart = (e: TouchEvent) => {
    startX = e.touches?.[0]?.clientX || 0;
    endX = startX;
  };

  const onTouchMove = (e: TouchEvent) => {
    endX = e.touches?.[0]?.clientX || 0;
  };

  const onTouchEnd = () => {
    const diff = startX - endX;
    if (diff > 50) {
      next();
      restartAutoplay();
    } else if (diff < -50) {
      prev();
      restartAutoplay();
    }
  };

  onMounted(() => {
    startAutoplay();
  });

  onUnmounted(() => {
    stopAutoplay();
  });

  return {
    currentIndex,
    totalGroups,
    activeGroup,
    next,
    prev,
    goToGroup,
    restartAutoplay,
    touchEvents: {
      touchstart: onTouchStart,
      touchmove: onTouchMove,
      touchend: onTouchEnd,
    }
  };
}
