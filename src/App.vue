<template>
  <main class="bg-purple-background rounded-5xl p-5 
    h-full w-full w-maxx mx-auto max-w-full
    flex shadow-high space-x-6">
    
    <div class="overflow-hidden flex-none">
    <transition 
      :appear="true"
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="scale-x-0x -translate-x-full">
      <Sidebar />
    </transition>
    </div>

    <Main />
    
    <!-- <transition 
      :appear="true"
      enter-active-class="transition-all delay-500 duration-500 ease-in-out"
      enter-from-class="scale-y-0 translate-y-1/2"> -->
      <Infobar />
    <!-- </transition> -->
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./components/Sidebar.vue";
import Main from "./components/Main.vue";
import Infobar from "./components/Infobar.vue";

export default defineComponent({
  components: {
    Sidebar,
    Main,
    Infobar,
  },
});
</script>