<template>

    <div class="relative -mb-3
      text-center font-bold text-2xl text-title
      uppercase tracking-wide leading-none">
      <span class="bg-purple-background px-2
        border-l-2x border-r-2x border-body">Explore</span>
    </div>
    
    <transition
      :appear="true"
      enter-active-class="transition-all duration-500 delay-2000 ease-in-out"
      enter-from-class="max-w-0"
      enter-to-class="max-w-full">
      <div class="h-0.5 mb-8 
        bg-gradient-to-r from-transparent 
        via-body to-transparent"></div>
    </transition>

    <!-- <hr class="border border-purple-tile mb-8 border-double"/> -->
    
    
    <TabGroup :default-index="3">
      <TabList class="flex justify-center items-center space-x-4 mb-6
        text-body font-semibold text-lg tracking-tight">
        <Tab v-for="tab in tabs" :key="tab"
          as="template"
          v-slot="{ selected }">
          <button class="px-4 py-1.5 rounded-xl tracking-tight
            border-2 border-purple-tile focus:ring-2 outline-none"
            :class="{'bg-purple-tile text-title': selected }">{{tab}}
          </button>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel><About /></TabPanel>
        <TabPanel><Projects /></TabPanel>
        <TabPanel><Experience /></TabPanel>
        <TabPanel><Education /></TabPanel>
      </TabPanels>
  </TabGroup>
</template>

<script lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import About from "./About.vue";
import Projects from "./Projects.vue";
import Experience from "./Experience.vue";
import Education from "./Education.vue";
export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    About,
    Projects,
    Experience,
    Education,
  },
  data() {
    return {
      tabs: ["About", "Projects", "Experience", "Education"],
    };
  },
};
</script>