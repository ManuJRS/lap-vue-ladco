<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { useLoading } from '@/composables/useLoading'

const titleRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const labelLineRef = ref<HTMLElement | null>(null)
const heroVideoRef = ref<HTMLVideoElement | null>(null)

const { isLoading } = useLoading()

const HERO_VIDEO_SRC =
  'https://res.cloudinary.com/dronteu5m/video/upload/q_auto/f_auto/v1775771763/download_nupikz.mp4'

function runHeroAnimations() {
  if (labelLineRef.value) {
    gsap.from(labelLineRef.value, {
      yPercent: 100,
      duration: 1.15,
      ease: 'expo.out',
    })
  }
  if (containerRef.value) {
    const words = containerRef.value.querySelectorAll('.word')
    gsap.from(words, {
      y: 40,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
      ease: 'back.out(4.7)',
    })
  }
  if (titleRef.value) {
    gsap.from(titleRef.value, {
      y: 30,
      opacity: 0,
      duration: 1.9,
      ease: 'expo.out',
    })
  }
}

async function scheduleHeroAnimations() {
  await nextTick()
  requestAnimationFrame(() => {
    runHeroAnimations()
  })
}

watch(isLoading, (loading) => {
  if (!loading) {
    scheduleHeroAnimations()
  }
})

onMounted(() => {
  heroVideoRef.value?.play().catch(() => {
    /* Autoplay bloqueado hasta interacción del usuario en algunos navegadores */
  })
  if (!isLoading.value) {
    scheduleHeroAnimations()
  }
})
</script>
<template>
  <section class="relative min-h-[600px] flex items-center justify-center px-6 overflow-hidden">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <video
        ref="heroVideoRef"
        class="absolute inset-0 z-0 h-full w-full min-h-full min-w-full scale-[1.01] object-cover object-center"
        :src="HERO_VIDEO_SRC"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        disable-picture-in-picture
        disable-remote-playback
        aria-hidden="true"
        tabindex="-1"
      ></video>
    </div>
    <div
      class="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-black/55 via-black/45 to-black/65"
    ></div>
    <div class="max-w-4xl mx-auto w-full text-center z-10 px-2 mt-20">
      <div class="overflow-hidden mb-4">
        <span
          ref="labelLineRef"
          class="block text-white/80 font-label text-xs uppercase tracking-[0.2em] drop-shadow-sm will-change-transform"
        >
          Laboratorio de Diagnóstico Clínico
        </span>
      </div>
      <h1
        ref="titleRef"
        class="font-headline text-5xl md:text-7xl font-extrabold text-[#51c3c1] leading-tight mb-6 drop-shadow-md"
      >
        Cuida tu salud<br />
        <span class="text-white">Eres importante</span>
      </h1>
      <p
        ref="containerRef"
        class="text-white/85 font-label text-sm tracking-[0.12em] mb-4 flex items-center justify-center gap-1.5 drop-shadow-sm"
      >
        <span  class="word inline-block material-symbols-outlined text-base" aria-hidden="true">location_on</span>
        <span class="word inline-block">Mérida, Yucatán, México</span>
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="https://wa.me/529991916081"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 border-2 border-white/20 text-white bg-[#25D366] px-6 py-2.5 rounded-lg font-semibold text-sm shadow-lg hover:bg-[#20bd5a] transition-all active:scale-95"
        >
          <span
            class="material-symbols-outlined text-[20px]"
            style="font-variation-settings: 'FILL' 1"
            aria-hidden="true"
            >chat</span
          >
          WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

