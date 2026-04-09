<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-slate-50 border-t-0 py-12 px-6">
    <div class="w-full max-w-[96rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div class="space-y-6">
        <div class="inline-flex rounded-lg bg-[#51c3c1] px-3 py-2">
          <img
            src="https://laboratorioladco.com.mx/wp-content/uploads/2026/03/Ladco-Logotipo-blanco.png"
            alt="Ladco"
            class="h-8 w-auto"
            width="160"
            height="40"
          />
        </div>
        <h2 class="font-headline text-xl font-bold text-slate-900">
          ¿Tienes dudas o deseas agendar tu estudio?
        </h2>
        <div class="flex flex-col gap-4 text-sm">
          <a
            href="tel:+529991916081"
            class="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <span class="material-symbols-outlined text-xl" aria-hidden="true">call</span>
            9991 916 081
          </a>
          <a
            href="mailto:atenci%C3%B3n@laboratorioladco.com"
            class="inline-flex items-center gap-2 text-primary font-semibold hover:underline break-all"
          >
            <span class="material-symbols-outlined text-xl" aria-hidden="true">mail</span>
            atención@laboratorioladco.com
          </a>
        </div>
        <p class="text-slate-600 text-sm leading-relaxed">
          Nuestro equipo está listo para atenderte de forma rápida y amable.
          <span class="font-semibold text-slate-800">¡Escríbenos!</span>
        </p>
      </div>
      <div class="md:w-fit md:mx-auto">
        <h5 class="font-headline font-bold text-slate-900 mb-6">Enlances Rápidos</h5>
        <ul class="space-y-4">
          <li>
            <RouterLink
              class="block text-slate-500 hover:text-primary transition-colors text-sm font-body"
              to="/"
              >Inicio</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="block text-slate-500 hover:text-primary transition-colors text-sm font-body"
              to="/doctors"
              >Doctores</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="block text-slate-500 hover:text-primary transition-colors text-sm font-body"
              to="/results"
              >Resultados</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="block text-slate-500 hover:text-primary transition-colors text-sm font-body"
              to="/blog"
              >Blog</RouterLink
            >
          </li>
        </ul>
      </div>
      <div class="space-y-6">
        <div class="flex gap-2 items-start">
          <span
            class="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5"
            aria-hidden="true"
            >calendar_month</span
          >
          <div>
            <p class="font-headline font-bold text-slate-900 text-sm mb-2">
              Horarios de atención:
            </p>
            <p class="text-slate-600 text-sm leading-relaxed">
              <span class="block">Lunes a viernes: 7:00 a.m. – 6:00 p.m.</span>
              <span class="block">Sábado: 7:00 a.m. – 2:00 p.m.</span>
            </p>
          </div>
        </div>
        <p class="text-slate-600 text-sm leading-relaxed flex gap-2 items-start">
          <span
            class="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5"
            aria-hidden="true"
            >location_on</span
          >
          <span
            >Calle 42 sur, x 103 y 103-A, colonia Santa Rosa, número 679 y 681., Mérida,
            Mexico</span
          >
        </p>
      </div>
    </div>
    <div
      class="w-full mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center text-center sm:text-left"
    >
      <p class="text-slate-400 text-xs font-label order-2 sm:order-1">
        © 2026 Laboratorio Ladco. Todos los derechos reservados. / Desarrollado por
        <a
          href="https://manurejon.dev/es"
          target="_blank"
          class="text-slate-500 hover:text-primary transition-colors"
          >Manu Dev</a
        >
      </p>
      <nav class="order-1 sm:order-2" aria-label="Legal">
        <ul
          class="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs font-label"
        >
          <li>
            <RouterLink class="text-slate-500 hover:text-primary transition-colors" to="#"
              >Privacy Policy</RouterLink
            >
          </li>
          <li>
            <RouterLink class="text-slate-500 hover:text-primary transition-colors" to="#"
              >Terms of Service</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
