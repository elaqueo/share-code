<script setup lang="ts">
import { Camera } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import ThemeSelector from "@/components/ui/theme/ThemeSelector.vue";
import { ref } from "vue";

const viewSquare = ref(false);

const toggleSquare = () => {
  viewSquare.value = !viewSquare.value;
};
</script>

<template>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
  </nav>
  <div class="text-3xl font-bold underline">
    <Camera color="red" :size="32" /> Vite + Vue + Tailwind
  </div>
  <Button @click="toggleSquare">Click me!</Button>
  <ThemeSelector />

  <XyzTransition xyz="fade up big">
    <div class="square" v-if="viewSquare"></div>
  </XyzTransition>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.square {
  width: 8rem;
  height: 8rem;
  background: red;
}
</style>
