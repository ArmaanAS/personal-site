<template>
<nav class="flex flex-col flex-none items-center justify-between 
  h-full w-max rounded-3.5xl
  p-4 bg-purple-surface shadow-2xl">

  <span class="p-2 rounded-xl bg-violet-500/10 shadow-lg mb-6">
    <img src="/src/assets/logo.png" alt="Vue Logo"
      class="h-9 w-9">
  </span>

  <div class="overflow-y-scroll text-body ">
    <section class="flex flex-col gap-6">
      <transition-group
        :appear="true"
        enter-active-class="transition duration-200 ease-in"
        enter-from-class="scale-y-5 opacity-0"
        move-class="transition-all duration-200 ease-in">

        <button key="0" v-if="shown[0]"
          class="p-2.5 rounded-xl bg-purple-tile"
          :class="{'text-primary': 0}">
          <ViewGridIcon class="h-8 w-8 opacity-75" />
        </button>
        <button key="1" v-if="shown[1]"
          class="p-2.5 rounded-xl bg-purple-tile"
          :class="{'text-primary': 0}">
          <ViewBoardsIcon class="h-8 w-8 opacity-75" />
        </button>
        <button key="2" v-if="shown[2]"
          class="p-2.5 rounded-xl bg-purple-tile text-primary"
          :class="{'text-primary': 1}">
          <UserGroupIcon class="h-8 w-8 opacity-75" />
        </button>


        <hr class="border-t-2 border-warmgray-700" 
          v-if="shown[3]"/>


        <button key="0" v-if="shown[3]"
          class="p-2.5 rounded-xl bg-purple-tile"
          :class="{'text-primary': 0}">
          <UserIcon class="h-8 w-8 opacity-75" />
        </button>
        <button key="1" v-if="shown[4]"
          class="p-2.5 rounded-xl bg-purple-tile"
          :class="{'text-primary': 0}">
          <TemplateIcon class="h-8 w-8 opacity-75" />
        </button>
        <button key="2" v-if="shown[5]"
          class="p-2.5 rounded-xl bg-purple-tile"
          :class="{'text-primary': 0}">
          <TableIcon class="h-8 w-8 opacity-75" />
        </button>
        <button key="3" v-if="shown[6]"
          class="p-2.5 rounded-xl bg-purple-tile"
          :class="{'text-primary': 0}">
          <HeartIcon class="h-8 w-8 opacity-75" />
        </button>
        <button key="4" v-if="shown[7]"
          class="p-2.5 rounded-xl bg-purple-tile"
          :class="{'text-primary': 0}">
          <StarIcon class="h-8 w-8 opacity-75" />
        </button>

      </transition-group>
    </section>
  </div>

  <button class="p-2.5 mt-6 rounded-xl 
  bg-purple-tile text-title">
    <LogoutIcon class="h-8 w-8" />
  </button>
</nav>
</template>

<script lang="ts">
import {
  ViewGridIcon,
  ViewBoardsIcon,
  UserGroupIcon,
  TemplateIcon,
  TableIcon,
  UserIcon,
  StarIcon,
  HeartIcon,
  ChartBarIcon,
  LogoutIcon,
} from "@heroicons/vue/solid";
import { SearchIcon } from "@heroicons/vue/outline";
import { ref, defineComponent } from "vue";

export default defineComponent({
  components: {
    ViewGridIcon,
    ViewBoardsIcon,
    UserGroupIcon,
    TemplateIcon,
    TableIcon,
    SearchIcon,
    UserIcon,
    StarIcon,
    HeartIcon,
    ChartBarIcon,
    LogoutIcon,
  },
  setup() {
    const shown = ref(new Array<boolean>(9).fill(false));

    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        shown.value[i] = true;
      }, 500 + i * 200);
    }

    return { shown };
  },
});
</script>