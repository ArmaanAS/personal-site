<template>
<section class="flex justify-between items-center mb-6">
    <span class="flex items-center group
        bg-purple-tile
        rounded-2xl px-3 py-3
        text-body
        focus-within:ring">
        <SearchIcon class="h-6 w-6 mr-2 opacity-50"/>
        <input type="text" placeholder="Search Something"
            class="bg-transparent outline-none">
    </span>

    <div class="flex items-center space-x-3">
        <button class="flex items-center p-3 
            bg-purple-tile rounded-xl
            text-body font-semibold proportional-nums">
            <GiftIcon class="w-5 h-5 mr-1 opacity-50" />
            0.000023 BTC
        </button>

        <button class="p-2 bg-purple-tile rounded-xl
            text-body relative">
            <AcademicCapIcon class="h-8 w-8 opacity-75" />
            <span class="absolute h-3 w-3 top-2 right-2
                bg-secondary rounded-full 
                border-2 border-purple-tile
                animate-pulse"></span>
        </button>
    </div>
</section>
</template>

<script lang="ts">
import { SearchIcon, GiftIcon } from "@heroicons/vue/outline";
import { AcademicCapIcon } from "@heroicons/vue/solid";
export default {
  components: {
    SearchIcon,
    GiftIcon,
    AcademicCapIcon,
  },
};
</script>