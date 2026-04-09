<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:py-32 py-16 sm:py-20 pb-16 sm:pb-20">
    <!-- Header Section -->
    <header class="mb-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span class="text-[#51c3c1] font-bold tracking-widest text-xs uppercase mb-2 block"
            >Portal de Paciente</span
          >
          <h1
            class="text-4xl md:text-5xl font-extrabold text-on-background tracking-tight mb-2"
          >
            Consultar Resultados
          </h1>
          <p class="text-on-surface-variant text-lg max-w-2xl">
            Acceda a sus estudios clínicos con la máxima precisión y seguridad. Sus datos están
            protegidos por encriptación de grado médico.
          </p>
        </div>
        <div
          class="bg-surface-container-low p-4 rounded-xl flex items-center space-x-4 border border-outline-variant/10"
        >
          <div class="bg-primary/10 p-3 rounded-full">
            <span class="material-symbols-outlined text-[#51c3c1]" aria-hidden="true">verified_user</span>
          </div>
          <div>
            <p class="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">
              Estado de Cuenta
            </p>
            <p class="text-sm font-semibold text-[#51c3c1]">Conexión Segura Activa</p>
          </div>
        </div>
      </div>
    </header>
    <!-- Search & Filter Bento Section -->
    <section class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">
      <div
        class="md:col-span-8 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15"
      >
        <div class="flex flex-col space-y-4">
          <label class="text-sm font-bold text-on-surface-variant"
            >Buscar por nombre de estudio o folio</label
          >
          <div class="relative">
            <span
              class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline"
              aria-hidden="true"
              >search</span
            >
            <input
              class="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface transition-all placeholder:text-outline/60"
              placeholder="Ej. Biometría Hemática, Perfil Lipídico..."
              type="text"
            />
          </div>
        </div>
      </div>
      <div
        class="md:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15 flex flex-col justify-between"
      >
        <label class="text-sm font-bold text-on-surface-variant mb-2 block"
          >Filtrar por Fecha</label
        >
        <div class="flex items-center space-x-2">
          <input
            class="flex-1 p-3 bg-surface-container-low border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20"
            type="date"
          />
        </div>
      </div>
    </section>
    <!-- Espacio reservado: resultados o envío por correo -->
    <div
      class="mt-12 sm:mt-16 min-h-[12rem] sm:min-h-[16rem] rounded-xl border border-dashed border-outline-variant/35 bg-background px-6 py-14 sm:py-20 flex items-center justify-center text-center"
    >
      <p class="text-on-surface-variant text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
        Aquí se mostrarán los resultados o el formulario para enviar los resultados al correo.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue Component
</script>
