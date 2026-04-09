<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useMapBranches, type Branch } from '@/composables/useMapBranches'
import gsap from 'gsap'

const sectionRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)

let sectionObserver: IntersectionObserver | null = null

function hideTitleUntilViewport() {
  if (!textRef.value) return
  gsap.set(textRef.value, {
    autoAlpha: 0,
    filter: 'blur(15px)',
    scale: 0.9,
  })
}

function runTitleReveal() {
  if (!textRef.value) return
  gsap.fromTo(
    textRef.value,
    {
      autoAlpha: 0,
      filter: 'blur(15px)',
      scale: 0.9,
    },
    {
      autoAlpha: 1,
      filter: 'blur(0px)',
      scale: 1,
      duration: 2,
      ease: 'power2.out',
    },
  )
}

onMounted(async () => {
  await nextTick()
  hideTitleUntilViewport()

  const section = sectionRef.value
  if (!section) return

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (!entry?.isIntersecting) return
      runTitleReveal()
      sectionObserver?.unobserve(section)
    },
    {
      root: null,
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px',
    },
  )
  sectionObserver.observe(section)
})

onUnmounted(() => {
  sectionObserver?.disconnect()
  sectionObserver = null
})
const branchData: Branch[] = [
  {
    id: '1',
    name: 'Sucursal Santa Rosa',
    address: 'Calle 42 sur, x 103 y 103-A, Colonia Santa Rosa, número 679 y 681., Mérida, Mexico',
    hours: ['Lunes a viernes: 7:00 a.m. – 6:00 p.m.', 'Sábado: 7:00 a.m. – 2:00 p.m.'],
    mapUrl:
      'https://www.google.com/maps?q=Calle+42+sur%2C+x+103+y+103-A%2C+Colonia+Santa+Rosa%2C+679+y+681%2C+M%C3%A9rida%2C+Yucat%C3%A1n%2C+Mexico&hl=es&z=16&output=embed',
  },
  {
    id: '2',
    name: 'Segunda sucursal',
    address:
      'Indica aquí la dirección completa de tu segunda sucursal (calle, número, colonia, ciudad).',
    hours: ['Lunes a viernes: 7:00 a.m. – 6:00 p.m.', 'Sábado: 7:00 a.m. – 2:00 p.m.'],
    mapUrl:
      'https://www.google.com/maps?q=M%C3%A9rida%2C+Yucat%C3%A1n%2C+Mexico&hl=es&z=12&output=embed',
  },
]

const { branches, activeBranchId, activeBranch, selectBranch } = useMapBranches(branchData)
</script>

<template>
  <section ref="sectionRef" class="relative overflow-hidden py-24 px-6 bg-[#eff7f9]">
    <div
      class="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <!-- SVGs must be correctly copied or we can drop the SVG source for a placeholder or valid URL -->
      <img
        src="/assets/ecg_heart_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
        alt=""
        class="absolute -right-2 -top-2 sm:-right-3 sm:-top-3 md:-right-[10rem] md:-top-4 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:h-[30rem] lg:w-[30rem] object-contain object-right object-top opacity-[0.70]"
        width="900"
        height="900"
      />
    </div>
    <div class="relative z-10 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div class="lg:col-span-5">
          <span
            class="text-on-surface-variant font-label text-xs uppercase tracking-[0.2em] mb-2 block"
          >
            Abierto
          </span>
          <div
            class="accent-line-blink bg-green-500 from-primary to-secondary w-10 h-1 rounded-full mb-2"
            aria-hidden="true"
          ></div>
          <h2
            ref="textRef"
            class="invisible font-headline text-4xl font-bold text-on-surface mb-2"
          >
            Laboratorio Ladco
          </h2>
          <p class="text-on-surface-variant font-label text-sm tracking-wide mb-8">
            Sucursales en Mérida
          </p>
          <div class="space-y-6" role="group" aria-label="Seleccionar sucursal para ver el mapa">
            <article
              v-for="branch in branches"
              :key="branch.id"
              @click="selectBranch(branch.id)"
              @keydown.enter.space.prevent="selectBranch(branch.id)"
              class="branch-location-card p-6 rounded-xl border-2 cursor-pointer transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#51c3c1]"
              :class="
                branch.id === activeBranchId
                  ? 'bg-surface-container-low ring-2 ring-[#51c3c1] border-[#51c3c1] shadow-md'
                  : 'bg-surface-container-lowest border-outline-variant/10 hover:shadow-sm'
              "
              tabindex="0"
              role="button"
              :aria-pressed="branch.id === activeBranchId"
            >
              <h3 class="font-headline text-lg font-bold text-on-surface mb-3">
                {{ branch.name }}
              </h3>
              <p class="text-on-surface-variant text-sm flex items-start gap-2 mb-4">
                <span
                  class="material-symbols-outlined text-primary text-base shrink-0 mt-0.5"
                  aria-hidden="true"
                  >location_on</span
                >
                <span>{{ branch.address }}</span>
              </p>
              <div class="flex items-start gap-2 text-sm text-on-surface-variant">
                <span
                  class="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5"
                  aria-hidden="true"
                  >calendar_month</span
                >
                <div>
                  <p class="font-headline font-bold text-on-surface text-sm mb-1">
                    Horarios de atención
                  </p>
                  <p v-for="(hour, i) in branch.hours" :key="i">{{ hour }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="lg:col-span-7">
          <p class="font-label text-xs uppercase tracking-[0.15em] text-on-surface-variant mb-2">
            Mapa — <span>{{ activeBranch?.name || '' }}</span>
          </p>
          <div
            class="min-h-[320px] lg:min-h-[500px] w-full rounded-2xl overflow-hidden relative shadow-inner bg-surface-container-high"
          >
            <iframe
              class="absolute inset-0 h-full w-full border-0"
              :title="`Mapa de ${activeBranch?.name}`"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
              :src="activeBranch?.mapUrl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
