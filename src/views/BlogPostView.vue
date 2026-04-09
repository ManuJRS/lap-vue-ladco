<template>
  <div class="max-w-7xl mx-auto py-32 px-6">
    <!-- Article Content -->
    <article>
      <!-- Header del Artículo -->
      <header class="mb-10">
        <div
          class="inline-flex items-center px-3 py-1 rounded bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider mb-4"
        >
          Salud
        </div>
        <h1
          class="text-4xl md:text-5xl font-extrabold font-headline text-[#51c3c1] mb-6 tracking-tight leading-tight"
        >
          Avances en Medicina Preventiva
        </h1>
        <div
          class="flex flex-wrap items-center gap-6 text-on-surface-variant text-sm border-b border-outline-variant/15 pb-8"
        >
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[#51c3c1]" style="font-size: 18px" aria-hidden="true"
              >calendar_today</span
            >
            <span>24 de Mayo, 2024</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[#51c3c1]" style="font-size: 18px" aria-hidden="true"
              >schedule</span
            >
            <span>8 min de lectura</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[#51c3c1]" style="font-size: 18px" aria-hidden="true"
              >person</span
            >
            <span class="font-medium">Dra. Elena Vargas</span>
          </div>
        </div>
      </header>
      <!-- Imagen Hero -->
      <div class="mb-12 rounded-xl overflow-hidden aspect-video bg-surface-container-low">
        <img
          alt="Medicina Preventiva"
          class="w-full h-full object-cover"
          data-alt="Close-up of a high-tech laboratory pipette dispensing blue liquid into a microplate with clean clinical aesthetic and soft teal lighting"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUjOJQFfUeKo5uTzmYNok4cXbzFikuOsMSVfhygionfYMlc-elcfWqDVweWYKDdG7XwIGO8b4wMJkqbVSYBbvp33Ez876DBCOowky4bjERBjcOmWg08ScwChlxjdQYESFfzawZpQ6OOY52srpjNNoDFUse3JZBkZK7u1GUFp82DaM7Yx6I9O50pv0Az_zvzZgsSWXcyBCBVgZJFiqex6iCJjyFPqyXMuX0vphEmpCIewRYH0xD3-vYMrTA1UfYq-lC4eh0hbA84PM1"
        />
      </div>
      <!-- Cuerpo del Artículo -->
      <div
        class="prose prose-teal max-w-none text-on-surface-variant font-body leading-relaxed space-y-8"
      >
        <p class="text-xl leading-relaxed text-on-surface/80">
          La medicina preventiva ha dejado de ser una serie de chequeos anuales genéricos para
          convertirse en un campo de precisión quirúrgica, donde el código genético y las
          moléculas dictan el camino hacia la longevidad.
        </p>
        <h2 class="text-2xl font-bold font-headline text-[#51c3c1] mt-12 mb-4">
          El Poder del Diagnóstico Molecular
        </h2>
        <p>
          En el corazón de esta revolución se encuentra el diagnóstico molecular. A diferencia
          de los métodos tradicionales que buscan síntomas físicos o cambios estructurales
          visibles, las técnicas moleculares nos permiten observar las variaciones en el ADN,
          ARN y proteínas antes de que cualquier enfermedad se manifieste físicamente.
        </p>
        <blockquote
          class="border-l-4 border-[#51c3c1] bg-surface-container-low p-8 rounded-r-lg my-10 italic text-on-surface text-lg"
        >
          "Detectar una predisposición genética no es una sentencia, es un mapa de navegación
          que nos permite intervenir años antes de que el primer síntoma aparezca."
        </blockquote>
        <h3 class="text-xl font-semibold font-headline text-[#51c3c1] mb-3">
          Detección Temprana: Más allá del cribado
        </h3>
        <ul class="space-y-4 list-none pl-0">
          <li class="flex gap-3">
            <span class="material-symbols-outlined text-[#51c3c1] shrink-0" aria-hidden="true">check_circle</span>
            <span
              >Biopsias líquidas para la identificación de fragmentos de ADN tumoral en etapas
              ultra-tempranas.</span
            >
          </li>
          <li class="flex gap-3">
            <span class="material-symbols-outlined text-[#51c3c1] shrink-0" aria-hidden="true">check_circle</span>
            <span
              >Secuenciación genómica completa para mapear vulnerabilidades hereditarias.</span
            >
          </li>
          <li class="flex gap-3">
            <span class="material-symbols-outlined text-[#51c3c1] shrink-0" aria-hidden="true">check_circle</span>
            <span
              >Monitoreo continuo mediante biosensores inteligentes que analizan biomarcadores
              en tiempo real.</span
            >
          </li>
        </ul>
        <p>
          La integración de la inteligencia artificial en estos procesos permite a Clinical
          Sanctuary analizar miles de variables simultáneamente, ofreciendo un perfil de riesgo
          que es único para cada paciente. No se trata solo de vivir más, sino de vivir con una
          calidad de vida óptima, minimizando el impacto de condiciones crónicas.
        </p>
      </div>
      <!-- Sección de Autor -->
      <div
        class="mt-20 p-8 rounded-xl bg-surface-container-lowest flex flex-col md:flex-row items-center gap-8 transition-all hover:bg-surface-container-high border border-outline-variant/10"
      >
        <div class="w-32 h-32 rounded-full overflow-hidden shrink-0 border-4 border-[#51c3c1]">
          <img
            alt="Dra. Elena Vargas"
            class="w-full h-full object-cover"
            data-alt="Professional portrait of a female doctor in a white coat smiling confidently in a modern clinical setting with soft natural light"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq2xJC4lXFoXjSCr79HYntXBz314Fj0g66BmdbLyOEI4hiMhlnz-lS485asvJwNZcEv5uoBCaF1y8gRTQ_To_zrtzkxI4m1u1msJOrYyE_f4XaqGMe1jexWLpFJIG2nhxS4peDXw_W9rMAU5ErHZgwAtysxlZrKg-PwM2TXWjBSVxgqyWsbv-meOKHjYfgcVcuar9CEIxiSBW0ZStBvriuo6IHVRcOdjS1lISEU3kYMTI38rHvEpgVhSzSoVUntWbhRYt9RImDW1q5"
          />
        </div>
        <div class="text-center md:text-left">
          <h4 class="text-xl font-bold font-headline text-[#51c3c1] mb-1">Dra. Elena Vargas</h4>
          <p class="text-sm text-on-surface font-medium mb-4">
            Directora de Medicina Preventiva &amp; Genómica
          </p>
          <p class="text-on-surface-variant leading-relaxed">
            Especialista en diagnóstico molecular con más de 15 años de experiencia en
            investigación oncológica y medicina personalizada. Miembro de la Sociedad
            Internacional de Medicina Genómica.
          </p>
        </div>
      </div>
      <!-- Compartir, categorías y artículos relacionados (al pie del artículo) -->
      <div class="mt-16 pt-12 border-t border-outline-variant/20 space-y-12">
        <div>
          <h3 class="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-4">
            Compartir
          </h3>
          <div class="flex flex-wrap gap-3">
            <button
              type="button"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface text-sm font-medium border border-outline-variant/15 hover:bg-surface-container transition-colors"
              aria-label="Copiar enlace del artículo"
            >
              <span class="material-symbols-outlined text-lg" aria-hidden="true">link</span>
              Copiar enlace
            </button>
            <a
              href="https://wa.me/?text=Avances%20en%20Medicina%20Preventiva%20%E2%80%94%20Laboratorio%20Ladco"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface text-sm font-medium border border-outline-variant/15 hover:bg-surface-container transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="material-symbols-outlined text-lg" aria-hidden="true">chat</span>
              WhatsApp
            </a>
          </div>
        </div>
        <div class="bg-surface-container-low p-6 rounded-xl">
          <h3 class="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-4">
            Categorías
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              class="px-3 py-1.5 rounded-full bg-white text-xs font-semibold text-on-surface hover:bg-[#51c3c1] hover:text-white cursor-pointer transition-all border border-outline-variant/10"
              >Cardiología</span
            >
            <span
              class="px-3 py-1.5 rounded-full bg-white text-xs font-semibold text-on-surface hover:bg-[#51c3c1] hover:text-white cursor-pointer transition-all border border-outline-variant/10"
              >Neurología</span
            >
            <span
              class="px-3 py-1.5 rounded-full bg-white text-xs font-semibold text-on-surface hover:bg-[#51c3c1] hover:text-white cursor-pointer transition-all border border-outline-variant/10"
              >Nutrición</span
            >
            <span
              class="px-3 py-1.5 rounded-full bg-white text-xs font-semibold text-on-surface hover:bg-[#51c3c1] hover:text-white cursor-pointer transition-all border border-outline-variant/10"
              >Salud Mental</span
            >
            <span
              class="px-3 py-1.5 rounded-full bg-white text-xs font-semibold text-on-surface hover:bg-[#51c3c1] hover:text-white cursor-pointer transition-all border border-outline-variant/10"
              >Inmunología</span
            >
          </div>
        </div>
        <div>
          <h3 class="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-4">
            Artículos relacionados
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <RouterLink to="/blog/related-1" class="group block">
              <div
                class="flex gap-4 items-start p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/10 hover:border-primary/30 hover:bg-surface-container transition-colors h-full"
              >
                <div
                  class="w-24 h-24 rounded-lg bg-surface-container-high overflow-hidden shrink-0"
                >
                  <img
                    alt="Ilustración sobre genética y ADN"
                    class="w-full h-full object-cover"
                    data-alt="Scientific DNA helix visualization in soft blue and green tones with bokeh effect"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2yuvruq65Dp3IOxZMMfU58V4p0knSCfqn56uCkdfwcekof0YgfC9--Z4UDxyd7XxQqF034eOGkg-TtpBWrMz3M1yxqWz2LKbicAJtEgjrkI-OGGCPt5rGbTBQlQns4FUNmb_FYmiBad86VYUaazwyBAWhEPrYTatrftLnVtTsQUim546bpEKEBoo3XxbE180P5YPJdVHTQp5RqBm6nKOTYk3A-qN1yfXueHS888r7z6kfNksUTMY26Bb7bvIuyIAtVm6r89wPRb0O"
                  />
                </div>
                <div class="flex flex-col min-w-0">
                  <span class="text-[10px] font-bold text-on-surface uppercase mb-1"
                    >Genética</span
                  >
                  <span
                    class="text-base font-bold text-on-surface line-clamp-2 leading-snug group-hover:text-[#51c3c1] transition-colors"
                    >Entendiendo los tests de ADN en casa</span
                  >
                </div>
              </div>
            </RouterLink>
            <RouterLink to="/blog/related-2" class="group block">
              <div
                class="flex gap-4 items-start p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/10 hover:border-primary/30 hover:bg-surface-container transition-colors h-full"
              >
                <div
                  class="w-24 h-24 rounded-lg bg-surface-container-high overflow-hidden shrink-0"
                >
                  <img
                    alt="Paciente en consulta médica"
                    class="w-full h-full object-cover"
                    data-alt="Patient having blood pressure measured in a modern minimalist medical clinic"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB68BiMJv9uv-8bOs761QHI4ajwR5Iv8UQMNOvsOFJPBvRIrtyFYwSdw_310gqRVcSEonH4B6K27ONbSREDAz78KBH0q17jFhsYO_6r6O7UIr5OrqyOCW2p9MHp5gxxq4_fe3Pblgjp21rQfiFSJ5-5Qj1EoXMaESoJlFwHFh6WXreJKuYa_mze6iPe7fnSUzdoXw50na__VezNnq6FcXpTD-parmlqoKbLMvRaU7XGWeioaG_bZEa82oaOYRBqTe33KecKoKkEc60m"
                  />
                </div>
                <div class="flex flex-col min-w-0">
                  <span class="text-[10px] font-bold text-on-surface uppercase mb-1"
                    >Longevidad</span
                  >
                  <span
                    class="text-base font-bold text-on-surface line-clamp-2 leading-snug group-hover:text-[#51c3c1] transition-colors"
                    >Hábitos para un envejecimiento celular saludable</span
                  >
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
