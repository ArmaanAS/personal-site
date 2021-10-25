<template>
<transition
  mode="out-in"
  enter-active-class="transition-all duration-300 ease-out"
  enter-from-class="max-w-0 opacity-0"
  enter-to-class="max-w-full"
  leave-active-class="transition-all duration-200 ease-in"
  leave-from-class="max-w-full"
  leave-to-class="max-w-10 opacity-0">
  <section v-if="shown"
    class="relative flex flex-col flex-shrink-0 flex-growx 
    w-56x px-6 py-8
    bg-purple-surface rounded-3.5xl">

    <article class="flex flex-col items-center">
      <img src="/src/assets/logo.png" alt="Personal photo"
        class="w-32 h-32 rounded-full mb-5 shadow-inner 
          bg-purple-tile">

      <span class="text-violet-100 text-2xl 
        font-medium tracking-tight">
        Armaan Salam
        <BadgeCheckIcon class="inline-block h-6 w-6" />
      </span>
      <small class="text-warmgray-600 text-lg tracking-tight">
        @armaanas
      </small>

      <fieldset class="flex space-x-3 mt-4">
        <button class="text-purple-50 bg-secondary 
          px-4 py-1.5 
          rounded-xl font-medium tracking-tight">
          Find Me
        </button>

        <button class="rounded-full p-2 bg-purple-tile">
          <HeartIcon class="h-4 w-4 text-warmgray-600"/>
        </button>

        <button class="rounded-full p-2 bg-purple-tile">
          <DotsHorizontalIcon class="h-4 w-4 text-warmgray-600"/>
        </button>
      </fieldset>
    </article>

    <button class="absolute bg-purple-tile-light top-1/2 -left-5
      rounded-full shadow-lg p-1"
      @click="shown = false">
      <ChevronDoubleRightIcon class="text-title w-8" />  
    </button>
  </section>

  <section v-else class="h-full w-0">
    <button class="relative top-1/2 bg-purple-tile-light
      rounded-full shadow-lg p-1"
      @click="shown = true">
      <ChevronDoubleRightIcon class="text-title rotate-180 w-8" />  
    </button>
  </section>

</transition>
</template>

<script lang="ts">
import {
  HeartIcon,
  LocationMarkerIcon,
  DotsHorizontalIcon,
  BadgeCheckIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/vue/solid";
import { AtSymbolIcon } from "@heroicons/vue/outline";
export default {
  components: {
    HeartIcon,
    LocationMarkerIcon,
    AtSymbolIcon,
    DotsHorizontalIcon,
    BadgeCheckIcon,
    ChevronDoubleRightIcon,
  },
  data() {
    return {
      shown: true,
    };
  },
};
</script>

<style>
</style>