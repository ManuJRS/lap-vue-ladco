<template>
  <div>
    <section class="relative overflow-hidden bg-surface py-20 lg:py-32">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 px-6">
        <div class="z-10">
          <span
            class="inline-block px-4 py-1.5 rounded-sm bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider mb-6"
            >Excelencia Médica</span
          >
          <h1
            class="text-5xl lg:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight mb-6"
          >
            Conoce a Nuestros Especialistas
          </h1>
          <p class="text-lg text-on-surface-variant max-w-xl leading-relaxed mb-8">
            Contamos con un equipo de profesionales altamente calificados, comprometidos con la
            precisión diagnóstica y el cuidado integral de su salud. Excelencia clínica a su
            servicio.
          </p>
        </div>
        <div class="relative">
          <div class="aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-low shadow-sm">
            <img
              alt="Equipo médico"
              class="w-full h-full object-cover"
              data-alt="Professional clinical team of doctors in a modern bright medical facility standing confidently with warm lighting and soft shadows"
              src="https://laboratorioladco.com.mx/wp-content/uploads/2026/03/banner-ladco.jpg"
            />
          </div>
          <!-- Decorative element -->
          <div
            class="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-container opacity-20 rounded-lg -z-10"
          ></div>
        </div>
      </div>
    </section>
    <section class="py-20 px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Doctor Card 1 -->
          <div
            class="group flex flex-col rounded-lg border border-outline-variant/10 bg-surface-container-lowest transition-all duration-300 hover:bg-surface-container-high"
          >
            <div class="flex flex-grow flex-col justify-between p-8">
              <div class="mb-6">
                <span class="text-primary font-bold text-xs uppercase tracking-widest block mb-2"
                  >Cardiólogo Clínico</span
                >
                <h3 class="text-3xl font-extrabold text-on-surface mb-3 leading-tight">
                  Dr. Roberto Mendoza
                </h3>
                <p class="text-on-surface-variant text-base leading-relaxed">
                  Especialista en diagnóstico por imagen y tratamiento de patologías
                  cardiovasculares complejas con más de 15 años de experiencia internacional.
                </p>
              </div>
              <button
                class="w-fit px-8 bg-[#51c3c1] text-on-primary py-3 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all group-hover:shadow-lg group-hover:shadow-primary/10"
              >
                <span class="material-symbols-outlined text-xl" data-weight="fill"
                  >calendar_today</span
                >
                Agendar Cita
              </button>
            </div>
          </div>
          <!-- Doctor Card 2 -->
          <div
            class="group flex flex-col rounded-lg border border-outline-variant/10 bg-surface-container-lowest transition-all duration-300 hover:bg-surface-container-high"
          >
            <div class="flex flex-grow flex-col justify-between p-8">
              <div class="mb-6">
                <span class="text-primary font-bold text-xs uppercase tracking-widest block mb-2"
                  >Ginecología y Obstetricia</span
                >
                <h3 class="text-3xl font-extrabold text-on-surface mb-3 leading-tight">
                  Dra. Elena Martínez
                </h3>
                <p class="text-on-surface-variant text-base leading-relaxed">
                  Experta en medicina materno-fetal y salud integral de la mujer. Dedicada a
                  brindar una atención empática y basada en evidencia.
                </p>
              </div>
              <button
                class="w-fit px-8 bg-[#51c3c1] text-on-primary py-3 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all group-hover:shadow-lg group-hover:shadow-primary/10"
              >
                <span class="material-symbols-outlined text-xl" data-weight="fill"
                  >calendar_today</span
                >
                Agendar Cita
              </button>
            </div>
          </div>
          <!-- Doctor Card 3 -->
          <div
            class="group flex flex-col rounded-lg border border-outline-variant/10 bg-surface-container-lowest transition-all duration-300 hover:bg-surface-container-high"
          >
            <div class="flex flex-grow flex-col justify-between p-8">
              <div class="mb-6">
                <span class="text-primary font-bold text-xs uppercase tracking-widest block mb-2"
                  >Pediatría</span
                >
                <h3 class="text-3xl font-extrabold text-on-surface mb-3 leading-tight">
                  Dr. Carlos Ruiz
                </h3>
                <p class="text-on-surface-variant text-base leading-relaxed">
                  Especializado en el desarrollo infantil temprano y neurología pediátrica. Brinda
                  un entorno seguro y cálido para los más pequeños.
                </p>
              </div>
              <button
                class="w-fit px-8 bg-[#51c3c1] text-on-primary py-3 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all group-hover:shadow-lg group-hover:shadow-primary/10"
              >
                <span class="material-symbols-outlined text-xl" data-weight="fill"
                  >calendar_today</span
                >
                Agendar Cita
              </button>
            </div>
          </div>
          <!-- Doctor Card 4 -->
          <div
            class="group flex flex-col rounded-lg border border-outline-variant/10 bg-surface-container-lowest transition-all duration-300 hover:bg-surface-container-high"
          >
            <div class="flex flex-grow flex-col justify-between p-8">
              <div class="mb-6">
                <span class="text-primary font-bold text-xs uppercase tracking-widest block mb-2"
                  >Dermatología</span
                >
                <h3 class="text-3xl font-extrabold text-on-surface mb-3 leading-tight">
                  Dra. Sofía Vega
                </h3>
                <p class="text-on-surface-variant text-base leading-relaxed">
                  Especialista en patologías cutáneas y estética avanzada. Enfoque preventivo y
                  regenerativo de la salud de la piel.
                </p>
              </div>
              <button
                class="w-fit px-8 bg-[#51c3c1] text-on-primary py-3 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all group-hover:shadow-lg group-hover:shadow-primary/10"
              >
                <span class="material-symbols-outlined text-xl" data-weight="fill"
                  >calendar_today</span
                >
                Agendar Cita
              </button>
            </div>
          </div>
          <!-- Doctor Card 5 -->
          <div
            class="group flex flex-col rounded-lg border border-outline-variant/10 bg-surface-container-lowest transition-all duration-300 hover:bg-surface-container-high"
          >
            <div class="flex flex-grow flex-col justify-between p-8">
              <div class="mb-6">
                <span class="text-primary font-bold text-xs uppercase tracking-widest block mb-2"
                  >Endocrinología</span
                >
                <h3 class="text-3xl font-extrabold text-on-surface mb-3 leading-tight">
                  Dr. Javier Luna
                </h3>
                <p class="text-on-surface-variant text-base leading-relaxed">
                  Líder en el tratamiento de trastornos metabólicos y diabetes. Amplia trayectoria
                  en investigación clínica y docencia.
                </p>
              </div>
              <button
                class="w-fit px-8 bg-[#51c3c1] text-on-primary py-3 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all group-hover:shadow-lg group-hover:shadow-primary/10"
              >
                <span class="material-symbols-outlined text-xl" data-weight="fill"
                  >calendar_today</span
                >
                Agendar Cita
              </button>
            </div>
          </div>
          <!-- Doctor Card 6 -->
          <div
            class="group flex flex-col rounded-lg border border-outline-variant/10 bg-surface-container-lowest transition-all duration-300 hover:bg-surface-container-high"
          >
            <div class="flex flex-grow flex-col justify-between p-8">
              <div class="mb-6">
                <span class="text-primary font-bold text-xs uppercase tracking-widest block mb-2"
                  >Oftalmología</span
                >
                <h3 class="text-3xl font-extrabold text-on-surface mb-3 leading-tight">
                  Dra. Isabel Rios
                </h3>
                <p class="text-on-surface-variant text-base leading-relaxed">
                  Especialista en cirugía refractiva y patologías de retina. Comprometida con la
                  recuperación de la salud visual de sus pacientes.
                </p>
              </div>
              <button
                class="w-fit px-8 bg-[#51c3c1] text-on-primary py-3 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all group-hover:shadow-lg group-hover:shadow-primary/10"
              >
                <span class="material-symbols-outlined text-xl" data-weight="fill"
                  >calendar_today</span
                >
                Agendar Cita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Vue Component
</script>
