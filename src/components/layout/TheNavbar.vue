<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useScrollHideNavbar } from '@/composables/useScrollHideNavbar'

const { isHidden } = useScrollHideNavbar(80)

const route = useRoute()

const mobileHomeFilled = computed(() => route.path === '/')
const mobileDoctorsFilled = computed(() => route.path.startsWith('/doctors'))
const mobileResultsFilled = computed(() => route.path.startsWith('/results'))
const mobileBlogFilled = computed(
  () => route.path === '/blog' || route.path.startsWith('/blog/'),
)

function mobileIconFill(filled: boolean) {
  return {
    fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
  }
}
</script>

<template>
  <div>
    <!-- TopNavBar Desktop / Mobile Logo -->
    <nav
      class="fixed top-0 w-full z-50 bg-[#366a66]/90 backdrop-blur-sm shadow-sm transition-transform duration-300 block"
      :class="{ '-translate-y-full': isHidden }"
    >
      <div class="flex items-center justify-center md:justify-between px-6 py-4 max-w-7xl mx-auto">
        <RouterLink
          to="/"
          class="inline-flex items-center rounded-lg px-3 py-2"
          aria-label="Ladco — Inicio"
        >
          <img
            src="https://laboratorioladco.com.mx/wp-content/uploads/2026/03/Ladco-Logotipo-blanco.png"
            alt="Ladco"
            class="h-8 w-auto md:h-9"
            width="160"
            height="40"
          />
        </RouterLink>
        <div
          class="hidden md:flex items-center gap-4 lg:gap-6 flex-wrap justify-center max-w-2xl border-transparent"
        >
          <RouterLink
            class="text-white font-semibold border-b-2 border-transparent hover:border-white transition-colors uppercase tracking-wider text-[11px] font-label"
            active-class="border-white"
            to="/"
            >Inicio</RouterLink
          >
          <RouterLink
            class="text-white/90 hover:text-white border-b-2 border-transparent transition-colors uppercase tracking-wider text-[11px] font-label"
            active-class="font-bold text-white border-white"
            to="/doctors"
            >Doctores</RouterLink
          >
          <RouterLink
            class="text-white/90 hover:text-white border-b-2 border-transparent transition-colors uppercase tracking-wider text-[11px] font-label"
            active-class="font-bold text-white border-white"
            to="/results"
            >Resultados</RouterLink
          >
          <RouterLink
            class="text-white/90 hover:text-white border-b-2 border-transparent transition-colors uppercase tracking-wider text-[11px] font-label"
            active-class="font-bold text-white border-white"
            to="/blog"
            >Blog</RouterLink
          >
        </div>
        <div class="hidden md:flex items-center gap-3 md:gap-4">
          <button
            type="button"
            class="hover:cursor-pointer border-2 border-white text-white bg-transparent px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/15 transition-all active:scale-95"
          >
            Agendar cita
          </button>
        </div>
      </div>
    </nav>

    <!-- BottomNavBar Mobile -->
    <div
      class="md:hidden fixed bottom-6 left-6 right-6 z-50 pointer-events-none opacity-100 scale-100 transition-all duration-300"
    >
      <div
        class="bg-white/90 backdrop-blur-xl border border-white shadow-2xl rounded-full px-6 py-2 flex justify-between items-center pointer-events-auto"
      >
        <RouterLink
          to="/"
          class="flex flex-col items-center gap-1 text-slate-400 focus:outline-none"
          active-class="text-[#51c3c1]"
          exact-active-class="text-[#51c3c1]"
        >
          <span
            class="material-symbols-outlined transition-[font-variation-settings]"
            :style="mobileIconFill(mobileHomeFilled)"
            >home</span
          >
          <span class="text-[10px] font-bold">Inicio</span>
        </RouterLink>
        <RouterLink
          to="/doctors"
          class="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors focus:outline-none"
          active-class="text-[#51c3c1]"
        >
          <span
            class="material-symbols-outlined transition-colors"
            :style="mobileIconFill(mobileDoctorsFilled)"
            >medical_services</span
          >
          <span class="text-[10px] font-bold">Doctores</span>
        </RouterLink>
        <a
          href="https://wa.me/529991916081"
          target="_blank"
          rel="noopener noreferrer"
          class="w-12 h-12 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center text-white -mt-10 shadow-lg ring-2 ring-white transition-colors"
          aria-label="WhatsApp"
        >
          <svg
            class="w-7 h-7"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.421 1.03 7.396 2.87 1.975 1.84 3.062 4.275 3.061 6.87-.001 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
            />
          </svg>
        </a>
        <RouterLink
          to="/results"
          class="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors focus:outline-none"
          active-class="text-[#51c3c1]"
        >
          <span
            class="material-symbols-outlined transition-colors"
            :style="mobileIconFill(mobileResultsFilled)"
            >assignment_turned_in</span
          >
          <span class="text-[10px] font-bold">Resultados</span>
        </RouterLink>
        <RouterLink
          to="/blog"
          class="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors focus:outline-none"
          active-class="text-[#51c3c1]"
        >
          <span
            class="material-symbols-outlined transition-colors"
            :style="mobileIconFill(mobileBlogFilled)"
            >article</span
          >
          <span class="text-[10px] font-bold">Blog</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
