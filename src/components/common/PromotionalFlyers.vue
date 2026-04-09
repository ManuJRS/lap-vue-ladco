<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useCarousel } from '@/composables/useCarousel'
import gsap from 'gsap'

const textRef = ref(null)

onMounted(() => {
  gsap.from(textRef.value, {
    filter: "blur(15px)", // Desenfoque inicial
    opacity: 0,           // Empieza invisible
    scale: 0.9,           // Un poco más pequeño
    duration: 2,          // Duración larga para que se aprecie el "enfoque"
    ease: "power2.out",   // Suavizado de salida
  })
})

const flyers = ref([
  { id: 1, src: 'https://laboratorioladco.com.mx/wp-content/uploads/2026/03/Check-up-Ginecologico-2.png', alt: 'Slide 1' },
  { id: 2, src: 'https://laboratorioladco.com.mx/wp-content/uploads/2026/03/Perfil-Duo.png', alt: 'Slide 2' },
  { id: 3, src: 'https://laboratorioladco.com.mx/wp-content/uploads/2026/03/Paquetes-Prenatales-1.png', alt: 'Slide 3' },
  { id: 4, src: 'https://laboratorioladco.com.mx/wp-content/uploads/2026/03/Paquetes-Prenatales-2.png', alt: 'Slide 4' },
  { id: 5, src: 'https://laboratorioladco.com.mx/wp-content/uploads/2026/03/Paquetes-Prenatales-3.png', alt: 'Slide 5' },
  { id: 6, src: 'https://laboratorioladco.com.mx/wp-content/uploads/2026/03/Paquetes-Prenatales-4.png', alt: 'Slide 6' },
])

const isMd = ref(false)
const itemsPerGroup = computed(() => isMd.value ? 3 : 1)

onMounted(() => {
  if (typeof window !== 'undefined') {
    const mq = window.matchMedia('(min-width: 768px)')
    isMd.value = mq.matches
    mq.addEventListener('change', (e) => {
      isMd.value = e.matches
    })
  }
})

const { currentIndex, activeGroup, totalGroups, next, prev, goToGroup, touchEvents } = useCarousel({
  totalItems: computed(() => flyers.value.length),
  itemsPerGroup,
  autoplayDelay: 5000
})
</script>

<template>
  <section class="relative w-full overflow-hidden py-10 md:py-16">
    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-8 sm:mb-10 md:mb-12">
        <h2 ref="textRef" class="mb-3 font-headline text-4xl font-extrabold text-[#51c3c1] tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">
          Promociones especiales
        </h2>
        <p class="text-base text-on-surface-variant sm:text-lg">
          Cuidamos tu salud y tu economía con nuestros paquetes de temporada.
        </p>
      </div>
      
      <div 
        class="relative overflow-hidden rounded-2xl shadow-sm"
        @touchstart="touchEvents.touchstart"
        @touchmove="touchEvents.touchmove"
        @touchend="touchEvents.touchend"
      >
        <div
          class="relative z-0 flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerGroup)}%)` }"
        >
          <div 
            v-for="slide in flyers" 
            :key="slide.id"
            class="flex-none flex items-center justify-center transition-all"
            :style="{ width: `${100 / itemsPerGroup}%` }"
          >
            <div
              class="w-full max-w-full md:max-w-[520px] lg:max-w-[620px]"
            >
              <div class="aspect-[1080/1350] overflow-hidden">
                <img
                  :src="slide.src"
                  :alt="slide.alt"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Flechas -->
        <button
          @click="prev"
          type="button"
          class="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-slate-700 shadow-md backdrop-blur transition hover:bg-white md:left-5 md:h-12 md:w-12"
          aria-label="Anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          @click="next"
          type="button"
          class="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-slate-700 shadow-md backdrop-blur transition hover:bg-white md:right-5 md:h-12 md:w-12"
          aria-label="Siguiente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Dots -->
        <div class="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          <button
            v-for="groupIndex in totalGroups"
            :key="groupIndex"
            @click="goToGroup(groupIndex - 1)"
            class="h-2.5 w-2.5 rounded-full transition"
            :class="(groupIndex - 1) === activeGroup ? 'bg-black' : 'bg-black/20'"
            :aria-label="`Ir al conjunto ${groupIndex}`"
          ></button>
        </div>
      </div>
      
      <div class="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
        <a
          href="https://wa.me/529991916081?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20las%20promociones%20especiales"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-[#51c3c1] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#51c3c1] transition hover:bg-[#51c3c1]/10 active:scale-[0.98] sm:px-6 sm:text-base"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>
