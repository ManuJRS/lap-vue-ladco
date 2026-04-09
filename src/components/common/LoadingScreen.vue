<script setup lang="ts">
import { useLoading } from '@/composables/useLoading'

const { isLoading } = useLoading()
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-gradient-to-br from-[#366a66] to-[#51c3c1]"
      role="dialog"
      aria-modal="true"
      aria-label="Cargando plataforma"
    >
      <!-- Logo Contenedor con animación Pulse -->
      <div class="relative w-64 md:w-80 h-auto animate-pulse">
        <img
          src="/assets/Ladco-Logotipo-blanco-768x307.png"
          alt="Laboratorio Ladco"
          class="w-full h-auto object-contain drop-shadow-md"
          width="768"
          height="307"
        />
        
        <!-- Indicador visual de carga secundario (línea) -->
        <div class="absolute -bottom-8 left-[10%] right-[10%] h-1 bg-white/20 rounded-full overflow-hidden">
          <div class="h-full bg-white rounded-full animate-progress"></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes progress {
  0% {
    width: 0%;
    transform: translateX(0);
  }
  50% {
    width: 50%;
    transform: translateX(100%);
  }
  100% {
    width: 0%;
    transform: translateX(200%);
  }
}

.animate-progress {
  animation: progress 1.5s infinite ease-in-out;
}
</style>
