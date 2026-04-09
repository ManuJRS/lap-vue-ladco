<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from '@/components/layout/TheNavbar.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp.vue'
import LoadingScreen from '@/components/common/LoadingScreen.vue'
</script>

<template>
  <LoadingScreen />
  <TheNavbar />
  <main class="min-h-screen">
    <RouterView />
  </main>
  <FloatingWhatsApp />
  <TheFooter />
</template>
