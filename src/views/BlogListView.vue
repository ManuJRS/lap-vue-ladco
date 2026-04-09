<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { RouterLink } from 'vue-router'
import gsap from 'gsap'

const headerSectionRef = ref<HTMLElement | null>(null)
const blogListTitleRef = ref<HTMLElement | null>(null)

let headerSectionObserver: IntersectionObserver | null = null

function hideBlogListTitleUntilViewport() {
  if (!blogListTitleRef.value) return
  gsap.set(blogListTitleRef.value, {
    autoAlpha: 0,
    filter: 'blur(15px)',
    scale: 0.9,
  })
}

function runBlogListTitleReveal() {
  if (!blogListTitleRef.value) return
  gsap.fromTo(
    blogListTitleRef.value,
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
  hideBlogListTitleUntilViewport()

  const section = headerSectionRef.value
  if (!section) return

  headerSectionObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (!entry?.isIntersecting) return
      runBlogListTitleReveal()
      headerSectionObserver?.unobserve(section)
    },
    {
      root: null,
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px',
    },
  )
  headerSectionObserver.observe(section)
})

onUnmounted(() => {
  headerSectionObserver?.disconnect()
  headerSectionObserver = null
})
</script>

<template>
  <div>
    <header
      ref="headerSectionRef"
      class="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-8 md:pb-12 lg:py-32"
    >
      <h1
        ref="blogListTitleRef"
        class="invisible text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface mb-4 sm:mb-6 break-words"
      >
        Editorial Insights
      </h1>
      <p class="text-base sm:text-lg max-w-4xl text-on-surface-variant leading-relaxed">
        Exploring the intersection of clinical precision and patient-centered diagnostics. Ladco's
        commitment to medical excellence through research and innovation.
      </p>
    </header>
    <div
      class="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-6 pb-28 md:pb-16 lg:pb-20 min-w-0"
    >
      <!-- Blog Listings: Vertical List -->
      <div class="flex-grow min-w-0 space-y-8 sm:space-y-12">
        <!-- Article 1 -->
        <article
          class="group flex flex-col border border-outline-variant/10 bg-surface-container-lowest transition-all duration-300 hover:bg-surface-container-high rounded-xl shadow-sm hover:cursor-pointer overflow-hidden md:flex-row md:items-stretch md:gap-0"
        >
          <div
            class="aspect-[16/10] sm:aspect-[4/3] w-full min-h-[12rem] min-w-0 shrink-0 overflow-hidden bg-surface-container md:flex-1 md:rounded-none"
          >
            <img
              alt="Laboratory analysis"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Close-up of a clinical laboratory setting with glowing medical test tubes and modern high-tech analysis equipment in soft teal lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCKsRhb-SG2k9rPl2kaoTMneFovoGjOMhjJ56iQ3jegZwn1MoppCNHN7-6dbbb3YG5L-OkrIr0fAT0_0ml01hYWc2M5lMdQFnUY0YuD0nyIfHXoBdNu83RB2MLHyRKNTy0iYF9vlF9Fv--SPpzBJmV0Qg__4CkUxqEkrcpRAAvT1SMNzOULwsNMneSmrDESNuYu4D1c7LAQInuYg8UOOMS_6JVDA5V0nA0cNu0CQFdzbB7O-lYpq0AB3gPJlsuB_kYYT6C0S1uPaUv"
            />
          </div>
          <div
            class="flex min-w-0 flex-grow flex-col justify-center px-5 py-6 sm:px-6 sm:py-8 md:flex-1 md:pl-2 lg:pl-4"
          >
            <div
              class="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 text-xs font-semibold tracking-widest text-[#51c3c1] group-hover:text-on-surface transition-colors leading-tight uppercase"
            >
              <span>Diagnostics</span>
              <span class="w-1 h-1 rounded-full bg-outline-variant shrink-0"></span>
              <span class="text-on-surface-variant font-medium">May 12, 2024</span>
            </div>
            <h2
              class="text-xl sm:text-2xl md:text-3xl font-bold text-on-surface mb-3 group-hover:text-[#51c3c1] transition-colors leading-tight break-words"
            >
              The Evolution of Molecular Diagnostics in Early Cancer Detection
            </h2>
            <p
              class="text-on-surface-variant mb-6 line-clamp-3 sm:line-clamp-none md:line-clamp-3 leading-relaxed text-sm sm:text-base"
            >
              How recent breakthroughs in genetic sequencing are enabling clinical laboratories to
              identify biomarkers months before traditional symptoms appear, revolutionizing
              patient outcomes.
            </p>
            <RouterLink
              class="inline-flex items-center gap-2 text-[#51c3c1] group-hover:text-on-surface transition-colors font-bold hover:gap-4 transition-all"
              to="/blog/1"
            >
              Read More
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </RouterLink>
          </div>
        </article>
        <!-- Article 2 -->
        <article
          class="group flex flex-col border border-outline-variant/10 bg-surface-container-lowest transition-all duration-300 hover:bg-surface-container-high rounded-xl shadow-sm hover:cursor-pointer overflow-hidden md:flex-row md:items-stretch md:gap-0"
        >
          <div
            class="aspect-[16/10] sm:aspect-[4/3] w-full min-h-[12rem] min-w-0 shrink-0 overflow-hidden bg-surface-container md:flex-1 md:rounded-none"
          >
            <img
              alt="Genetic sequencing"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Digital representation of DNA strands flowing in a clean medical environment with soft depth of field and teal highlights"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuenM2-ROfOVZVHROHJA_drGIKZq4FI0sZUXojRrBm6xq4kYl7oWPsFLgvjMWDKpU19C3x6p_ZnvF221WMarcvxCegtklRkbxGydBkH9d04xo0FZ1ZUt_R0KKG1EvD3f90UKU5_UtPxwZqY1JO9pceYNNxm5_P0PmN7TnA9Mr0GFZuxAjxNQAEhPrNkgRXng15T5UdKhm5RH2TOzuAt6vvw42LkuP91QwJp2tyuYnZ6zFleK7ifBcu_cHICypzbtn0ezSMuxMzfG0R"
            />
          </div>
          <div
            class="flex min-w-0 flex-grow flex-col justify-center px-5 py-6 sm:px-6 sm:py-8 md:flex-1 md:pl-2 lg:pl-4"
          >
            <div
              class="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 text-xs font-semibold tracking-widest text-[#51c3c1] group-hover:text-on-surface transition-colors leading-tight uppercase"
            >
              <span>Genetics</span>
              <span class="w-1 h-1 rounded-full bg-outline-variant shrink-0"></span>
              <span class="text-on-surface-variant font-medium">April 29, 2024</span>
            </div>
            <h2
              class="text-xl sm:text-2xl md:text-3xl font-bold text-on-surface mb-3 group-hover:text-[#51c3c1] transition-colors leading-tight break-words"
            >
              Personalized Medicine: DNA Sequencing and Patient Care
            </h2>
            <p
              class="text-on-surface-variant mb-6 line-clamp-3 sm:line-clamp-none md:line-clamp-3 leading-relaxed text-sm sm:text-base"
            >
              Exploring how individual genetic blueprints are helping Ladco clinicians tailor
              treatment plans that minimize side effects and maximize therapeutic efficacy.
            </p>
            <RouterLink
              class="inline-flex items-center gap-2 text-[#51c3c1] group-hover:text-on-surface transition-colors font-bold hover:gap-4 transition-all"
              to="/blog/2"
            >
              Read More
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </RouterLink>
          </div>
        </article>
      </div>
      <!-- Sidebar -->
      <aside class="w-full lg:w-80 lg:max-w-[20rem] shrink-0 space-y-8 sm:space-y-10 min-w-0">
        <!-- Search Box -->
        <div class="bg-surface-container-low p-5 sm:p-6 rounded-xl">
          <h3 class="text-sm font-bold text-[#51c3c1] uppercase tracking-widest mb-4">
            Search Articles
          </h3>
          <div class="relative">
            <input
              class="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/30 rounded-lg py-3 px-4 text-sm focus:ring-primary"
              placeholder="Search insights..."
              type="text"
            />
            <button class="absolute right-3 top-1/2 -translate-y-1/2 text-primary">
              <span class="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
        <!-- Categories -->
        <div>
          <h3 class="text-sm font-bold text-[#51c3c1] uppercase tracking-widest mb-6 px-2">
            Categorías
          </h3>
          <ul class="space-y-1">
            <li>
              <a
                class="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant font-medium group"
                href="#"
              >
                <span class="group-hover:text-[#51c3c1]">Diagnósticos</span>
                <span class="text-xs bg-surface-container-high px-2 py-1 rounded">12</span>
              </a>
            </li>
            <li>
              <a
                class="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant font-medium group"
                href="#"
              >
                <span class="group-hover:text-[#51c3c1]">Inmunología</span>
                <span class="text-xs bg-surface-container-high px-2 py-1 rounded">8</span>
              </a>
            </li>
            <li>
              <a
                class="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant font-medium group"
                href="#"
              >
                <span class="group-hover:text-[#51c3c1]">Genética</span>
                <span class="text-xs bg-surface-container-high px-2 py-1 rounded">15</span>
              </a>
            </li>
            <li>
              <a
                class="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant font-medium group"
                href="#"
              >
                <span class="group-hover:text-[#51c3c1]">Pathology</span>
                <span class="text-xs bg-surface-container-high px-2 py-1 rounded">5</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- Newsletter Card -->
        <div class="bg-primary text-on-primary p-6 sm:p-8 rounded-xl relative overflow-hidden">
          <div class="relative z-10">
            <h3 class="text-xl font-bold mb-3 leading-tight">Stay Informed</h3>
            <p class="text-primary-fixed-dim text-sm mb-6">
              Receive the latest clinical research and laboratory updates directly in your inbox.
            </p>
            <form class="space-y-3" @submit.prevent>
              <input
                class="w-full bg-white/10 border-white/20 rounded-lg py-2.5 px-4 text-sm placeholder:text-white/60 focus:ring-white/50 focus:border-white/50"
                placeholder="Email address"
                type="email"
              />
              <button
                class="w-full bg-white text-primary font-bold py-2.5 rounded-lg text-sm hover:bg-opacity-90 transition-opacity"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
          <!-- Abstract Shape Decor -->
          <div
            class="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-container/20 rounded-full blur-2xl"
          ></div>
        </div>
      </aside>
    </div>
  </div>
</template>
