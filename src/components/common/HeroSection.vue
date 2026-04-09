<template>
  <section class="relative min-h-[600px] flex items-center justify-center px-6 overflow-hidden">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <iframe
        class="absolute top-1/2 left-1/2 h-[56.25vw] min-h-full min-w-full w-[177.77vh] -translate-x-1/2 -translate-y-1/2 border-0"
        src="https://player.vimeo.com/video/1174197133?muted=1&autoplay=1&loop=1&background=1&app_id=122963"
        title="Video de fondo"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>
    <div
      class="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-black/55 via-black/45 to-black/65"
    ></div>
    <div class="max-w-4xl mx-auto w-full text-center z-10 px-2 mt-20">
      <span
        class="text-white/80 font-label text-xs uppercase tracking-[0.2em] mb-4 block drop-shadow-sm"
        >Laboratorio de Diagnóstico Clínico
      </span>
      <h1
        class="font-headline text-5xl md:text-7xl font-extrabold text-[#51c3c1] leading-tight mb-6 drop-shadow-md"
      >
        Cuida tu salud<br />
        <span class="text-white">Eres importante</span>
      </h1>
      <p
        class="text-white/85 font-label text-sm tracking-[0.12em] mb-4 flex items-center justify-center gap-1.5 drop-shadow-sm"
      >
        <span class="material-symbols-outlined text-base" aria-hidden="true">location_on</span>
        Mérida, Yucatán, México
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

<script setup lang="ts">
// Hero section component
</script>
