<template>
<section class="flex-grow bg-purple-surfacex overflow-y-auto custom-scroll">
  <MainTop />

  <article class="relative bg-cover rounded-3.5xl
    py-6 px-10 mb-8  w-full
    flex flex-col items-start justify-center
    tracking-tighter overflow-hidden"
    style="background-image: url(/src/assets/paint.jpg)">

    <div class="rounded-2xl p-2 text-shadow
      mix-blend-color-dodge">
      <h2 class="text-5xl font-black text-bluegray-100">
        Welcome!
      </h2>
      <h3 class="text-3xl font-black text-blue-200">
        Check out my work
      </h3>
    </div>

    <div class="space-x-4">
      <button class="bg-primary rounded-xl 
      text-title font-semibold
        px-6 py-2.5 my-6 text-lg tracking-tight">
        Press Me
      </button>

      <button class="rounded-xl text-primary font-semibold
        px-6 py-2 my-6 text-lg tracking-tight
        border-2 border-primary bg-white/75">
        Second button
      </button>
    </div>
  </article>

  <Sections />
</section>
</template>

<script lang="ts">
import Sections from "./Sections.vue";
import MainTop from "./MainTop.vue";
export default {
  components: {
    MainTop,
    Sections,
  },
};
</script>

<style>
</style>