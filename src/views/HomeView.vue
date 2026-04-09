<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import HeroSection from '@/components/common/HeroSection.vue'
import PromotionalFlyers from '@/components/common/PromotionalFlyers.vue'
import BranchLocations from '@/components/common/BranchLocations.vue'

const studiesSectionRef = ref<HTMLElement | null>(null)
const studiesTitleRef = ref<HTMLElement | null>(null)

let studiesSectionObserver: IntersectionObserver | null = null

function hideStudiesTitleUntilViewport() {
  if (!studiesTitleRef.value) return
  gsap.set(studiesTitleRef.value, {
    autoAlpha: 0,
    filter: 'blur(15px)',
    scale: 0.9,
  })
}

function runStudiesTitleReveal() {
  if (!studiesTitleRef.value) return
  gsap.fromTo(
    studiesTitleRef.value,
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
  hideStudiesTitleUntilViewport()

  const section = studiesSectionRef.value
  if (!section) return

  studiesSectionObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (!entry?.isIntersecting) return
      runStudiesTitleReveal()
      studiesSectionObserver?.unobserve(section)
    },
    {
      root: null,
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px',
    },
  )
  studiesSectionObserver.observe(section)
})

onUnmounted(() => {
  studiesSectionObserver?.disconnect()
  studiesSectionObserver = null
})
</script>

<template>
  <div class="home-view">
    <HeroSection />
    <PromotionalFlyers />
    <BranchLocations />

    <!-- Promotions Section (Bento Grid / Flyer Style) -->
    <section ref="studiesSectionRef" class="relative overflow-hidden py-24 bg-surface-container-low px-6">
      <div
        class="pointer-events-none absolute inset-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        <img
          src="/assets/barefoot_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
          alt=""
          class="absolute -top-[-7rem] -right-2 md:top-auto md:-bottom-1 md:-right-[-10rem] w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[28rem] lg:h-[28rem] origin-top-right -rotate-[-30deg] object-contain object-right object-top md:origin-bottom-right md:object-bottom opacity-[0.70]"
          width="448"
          height="448"
        />
      </div>
      <header class="relative z-10 max-w-6xl mx-auto mb-16">
        <span
          class="text-sm font-semibold text-on-surface-variant tracking-[0.1em] uppercase block mb-2 font-label"
          >Diagnostic Excellence</span
        >
        <h1
          ref="studiesTitleRef"
          class="invisible md:text-5xl text-4xl font-extrabold text-[#51c3c1] font-headline tracking-tight mb-4"
        >
          Realizamos más de 80 estudios clínicos
        </h1>
        <p class="text-lg text-on-surface-variant max-w-2xl font-body leading-relaxed">
          Utilizamos tecnología de vanguardia y contamos con personal altamente calificado para
          brindarte resultados precisos y confiables en el menor tiempo posible.
        </p>
      </header>
      <!-- Grid of Studies -->
      <div
        class="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <!-- Card: Perfil Bioquímico -->
        <div
          class="bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_40px_rgba(25,28,30,0.06)] hover:shadow-lg transition-all border-none group cursor-pointer relative overflow-hidden"
        >
          <div class="flex flex-col gap-6">
            <div
              class="w-14 h-14 rounded-lg bg-[#eff7f9] flex items-center justify-center text-primary"
            >
              <span class="material-symbols-outlined text-3xl text-[#51c3c1]">biotech</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-on-surface mb-2 font-headline">
                Perfil Bioquímico
              </h3>
              <p class="text-sm text-on-surface-variant leading-relaxed">
                Análisis integral de funciones metabólicas y niveles de glucosa, colesterol y
                triglicéridos.
              </p>
            </div>
          </div>
        </div>
        <!-- Card: Prueba Prostática -->
        <div
          class="bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_40px_rgba(25,28,30,0.06)] hover:shadow-lg transition-all border-none group cursor-pointer relative overflow-hidden"
        >
          <div class="flex flex-col gap-6">
            <div
              class="w-14 h-14 rounded-lg bg-[#eff7f9] flex items-center justify-center text-primary"
            >
              <span class="material-symbols-outlined text-3xl text-[#51c3c1]">male</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-on-surface mb-2 font-headline">
                Prueba Prostática
              </h3>
              <p class="text-sm text-on-surface-variant leading-relaxed">
                Detección oportuna de antígeno prostático específico para el cuidado de la salud
                masculina.
              </p>
            </div>
          </div>
        </div>
        <!-- Card: Perfil Preoperatorio -->
        <div
          class="bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_40px_rgba(25,28,30,0.06)] hover:shadow-lg transition-all border-none group cursor-pointer relative overflow-hidden"
        >
          <div class="flex flex-col gap-6">
            <div
              class="w-14 h-14 rounded-lg bg-[#eff7f9] flex items-center justify-center text-primary"
            >
              <span class="material-symbols-outlined text-3xl text-[#51c3c1]">monitor_heart</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-on-surface mb-2 font-headline">
                Perfil Preoperatorio
              </h3>
              <p class="text-sm text-on-surface-variant leading-relaxed">
                Evaluación clínica completa para garantizar la seguridad del paciente antes de
                cualquier intervención.
              </p>
            </div>
          </div>
        </div>
        <!-- Card: Detección de Dengue -->
        <div
          class="bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_40px_rgba(25,28,30,0.06)] hover:shadow-lg transition-all border-none group cursor-pointer relative overflow-hidden"
        >
          <div class="flex flex-col gap-6">
            <div
              class="w-14 h-14 rounded-lg bg-[#eff7f9] flex items-center justify-center text-primary"
            >
              <span class="material-symbols-outlined text-3xl text-[#51c3c1]"
                >magnification_small</span
              >
            </div>
            <div>
              <h3 class="text-xl font-bold text-on-surface mb-2 font-headline">
                Detección de Dengue
              </h3>
              <p class="text-sm text-on-surface-variant leading-relaxed">
                Pruebas rápidas y moleculares para el diagnóstico preciso de infecciones por virus
                del Dengue.
              </p>
            </div>
          </div>
        </div>
        <!-- Card: Tamiz Gold -->
        <div
          class="bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_40px_rgba(25,28,30,0.06)] hover:shadow-lg transition-all border-none group cursor-pointer relative overflow-hidden"
        >
          <div class="flex flex-col gap-6">
            <div
              class="w-14 h-14 rounded-lg bg-[#eff7f9] flex items-center justify-center text-primary"
            >
              <span class="material-symbols-outlined text-3xl text-[#51c3c1]"
                >workspace_premium</span
              >
            </div>
            <div>
              <h3 class="text-xl font-bold text-on-surface mb-2 font-headline">Tamiz Gold</h3>
              <p class="text-sm text-on-surface-variant leading-relaxed">
                Nuestra evaluación más completa de biomarcadores para un monitoreo de salud
                excepcional.
              </p>
            </div>
          </div>
        </div>
        <!-- Card: Perfil Prenatal -->
        <div
          class="bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_40px_rgba(25,28,30,0.06)] hover:shadow-lg transition-all border-none group cursor-pointer relative overflow-hidden"
        >
          <div class="flex flex-col gap-6">
            <div
              class="w-14 h-14 rounded-lg bg-[#eff7f9] flex items-center justify-center text-primary"
            >
              <span class="material-symbols-outlined text-3xl text-[#51c3c1]">pregnant_woman</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-on-surface mb-2 font-headline">Perfil Prenatal</h3>
              <p class="text-sm text-on-surface-variant leading-relaxed">
                Seguimiento clínico especializado para el bienestar de la madre y el desarrollo del
                bebé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Datos secction -->
    <section  class="py-24 bg-[#eff7f9]">
      <div class="max-w-7xl mx-auto px-8">
        <div class="grid md:grid-cols-1 gap-6">
          <div
            class="relative overflow-hidden md:col-span-8 bg-surface-container-lowest p-5 md:p-10 rounded-xl flex flex-col justify-between group hover:shadow-lg transition-all border border-outline-variant/10"
          >
            <div class="relative z-10">
              <div
                class="mb-6 inline-flex items-center rounded-xl bg-[#51c3c1] px-4 py-2 shadow-sm"
              >
                <img
                  src="https://laboratorioladco.com.mx/wp-content/uploads/2026/03/Ladco-Logotipo-blanco.png"
                  alt="Ladco"
                  class="h-10 w-auto"
                  width="160"
                  height="40"
                />
              </div>
              <h3 class="font-headline text-3xl font-bold mb-4">Ladco Diagnóstico Clínico</h3>
              <p class="text-on-surface-variant text-lg leading-relaxed max-w-6xl">
                Somos un laboratorio clínico comprometido con tu salud y bienestar. Brindamos un
                servicio confiable, profesional y humano, enfocado en ofrecer resultados precisos
                para ayudarte a tomar decisiones informadas sobre tu salud.
              </p>
              <p class="text-on-surface font-semibold text-lg leading-snug mt-8 mb-3 max-w-6xl">
                Cuidamos tu salud para que también sea accesible.
              </p>
              <p class="text-on-surface-variant text-base leading-relaxed mb-4 max-w-6xl">
                Consulta nuestras promociones mensuales en estudios de laboratorio:
              </p>
              <ul class="space-y-2.5 text-on-surface-variant text-base max-w-6xl" role="list">
                <li class="flex gap-2.5 items-start">
                  <span
                    class="material-symbols-outlined shrink-0 text-[#51c3c1] text-xl leading-none mt-0.5"
                    style="font-variation-settings: 'FILL' 1"
                    aria-hidden="true"
                    >check_circle</span
                  >
                  <span>Paquetes de chequeo general</span>
                </li>
                <li class="flex gap-2.5 items-start">
                  <span
                    class="material-symbols-outlined shrink-0 text-[#51c3c1] text-xl leading-none mt-0.5"
                    style="font-variation-settings: 'FILL' 1"
                    aria-hidden="true"
                    >check_circle</span
                  >
                  <span>Descuentos por temporada</span>
                </li>
                <li class="flex gap-2.5 items-start">
                  <span
                    class="material-symbols-outlined shrink-0 text-[#51c3c1] text-xl leading-none mt-0.5"
                    style="font-variation-settings: 'FILL' 1"
                    aria-hidden="true"
                    >check_circle</span
                  >
                  <span>Promociones para empresas y convenios</span>
                </li>
              </ul>
            </div>
            <span
              class="material-symbols-outlined pointer-events-none absolute -bottom-10 -right-10 z-0 text-[200px] leading-none text-primary/15 select-none"
              data-icon="visibility"
              aria-hidden="true"
              >visibility</span
            >
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-8 pt-16">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          <div class="col-span-2 row-span-2 rounded-xl overflow-hidden group relative">
            <img
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-alt="wide shot of a clean modern laboratory interior with rows of scientific analyzers and digital displays"
              src="https://laboratorioladco.com.mx/wp-content/uploads/2026/03/hero-img-Ladco-2.jpg"
            />
            <div
              class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"
            ></div>
            <div class="absolute bottom-6 left-6 text-white">
              <p class="font-bold text-xl font-headline">Unidad de Análisis Automatizado</p>
              <p class="text-sm opacity-90">Eficiencia y precisión sin error humano.</p>
            </div>
          </div>
          <div class="col-span-1 rounded-xl overflow-hidden group">
            <img
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-alt="close-up of advanced optical microscope in a bright laboratory setting"
              src="https://laboratorioladco.com.mx/wp-content/uploads/2026/03/banner-ladco.jpg"
            />
          </div>
          <div class="col-span-1 rounded-xl overflow-hidden group">
            <img
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-alt="clean patient waiting room in a modern medical clinic with soft lighting and comfortable seating"
              src="https://laboratorioladco.com.mx/wp-content/uploads/2026/03/banner-ladco-d.jpg"
            />
          </div>
          <div class="col-span-2 rounded-xl overflow-hidden group relative">
            <img
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-alt="medical professional handling specialized laboratory samples with precision"
              src="https://laboratorioladco.com.mx/wp-content/uploads/2026/03/banner-ladco-c.jpg"
            />
            <div class="absolute inset-0 bg-primary/10"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-6">
      <div
        class="max-w-5xl mx-auto bg-[#51c3c1] rounded-3xl p-12 text-center text-white relative overflow-hidden"
      >
        <div
          class="pointer-events-none absolute inset-0 z-0 rounded-3xl bg-[url(https://laboratorioladco.com.mx/wp-content/uploads/2026/03/pie.png)] bg-bottom bg-cover bg-no-repeat opacity-[0.35] sm:opacity-40"
          aria-hidden="true"
        ></div>
        <div
          class="absolute top-0 right-0 z-[1] w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
        ></div>
        <div class="relative z-10">
          <h2 class="text-4xl font-headline font-extrabold mb-6">
            ¿No encuentras el estudio que necesitas?
          </h2>
          <p class="text-white text-lg mb-10 max-w-2xl mx-auto">
            Contacta con nuestro equipo concierge para solicitar información sobre estudios
            especializados o personalizados.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="hover:cursor-pointer bg-white text-[#000000] px-8 py-4 rounded-lg font-bold shadow-lg active:scale-95 transition-all"
            >
              Hablar con un asesor
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
