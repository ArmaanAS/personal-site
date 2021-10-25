<template>
<section class="flex flex-col">

  <Disclosure as="article" 
    v-for="item of data" :key="item.title"
    v-slot="{ open }"
    class="flex py-4x px-6x
    bg-purple-tile rounded-3xl
    overflow-hidden">

    <div class="flex flex-col items-center 
      py-4 px-6
      text-body font-semibold bg-purple-tile-lightx">
      <span class="flex justify-center items-center 
        h-12 w-12 mb-2
        rounded-full bg-purple-100">
        <AcademicCapIcon 
          class="h-10 w-10 text-primary opacity-75" />
      </span>

      <span class="">{{ item.start }}</span>

      <transition-group
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="scale-0 h-0"
        leave-active-class="transition-all duration-300 ease-out"
        leave-to-class="scale-0 h-0"
        move-class="transition-all duration-300 ease-out">
        <span v-if="open" key="0"
          class="h-4 w-4 border-2 border-body 
            rounded-full my-1"></span>
        <div class="w-0 flex-grow border-l-2 border-body
          border-dashed" key="1"></div>
        <span v-if="open" key="2"
          class="h-4 w-4 border-2 border-body 
            rounded-full my-1"></span>
      </transition-group>

      <span class="">{{ item.end }}</span>
    </div>

    <div class="flex flex-col flex-grow
      py-4 px-6 bg-purple-tile-light">
      <h3 class="text-2xl text-title font-bold">
        {{ item.title }}
      </h3>
      <h4 class="flex items-center font-semibold text-body mb-2">
        <LocationMarkerIcon class="inline-block h-5 w-5 mr-1 opacity-60" /> 
        {{ item.location }}

        <CalendarIcon class="inline-block h-5 w-5 mr-1 ml-4 opacity-60" />
        {{ item.date }}
      </h4>

      <ul class="text-body font-thinx mb-4">
        <li v-for="point of item.points" :key="point"
          class="flex gap-2">
          <InformationCircleIcon class="h-6 w-6 text-primary
            flex-none" />
          <span v-html="marked(point)"></span>
        </li>
      </ul>

      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="scale-y-0 opacity-0 -translate-y-1/2 h-0"
        enter-to-class="h-full"
        leave-active-class="transition-all duration-300 ease-out"
        leave-from-class="h-full"
        leave-to-class="scale-y-0 opacity-0 -translate-y-1/2 h-0">
      <DisclosurePanel key="0">
      <!-- <transition-group
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="transform scale-y-5 opacity-0"
        enter-to-class="transform scale-y-100 opacity-100"
        leave-active-class="transition duration-300 ease-out absolute"
        leave-from-class="transform scale-y-100 opacity-100"
        leave-to-class="transform scale-y-5 opacity-0"
        move-class="transition-all duration-300 ease-out"> -->
        <p class="font-semibold text-body mb-1">
          Topics covered
        </p>
        <ul class="text-body font-thinx mb-4">
          <li v-for="topic of item.topics" :key="topic" 
            class="flex gap-2">
            <InformationCircleIcon class="h-6 w-6 text-secondary
              flex-none" />
            <span v-html="marked(topic)"></span>
          </li>
        </ul>

        <p class="font-semibold text-body mb-1">
          Technologies Used
        </p>
        <ul class="text-body font-thinx mb-4">
          <li v-for="tech of item.tech" :key="tech" 
            class="flex gap-2">
            <InformationCircleIcon class="h-6 w-6 text-tertiary
              flex-none" />
            <span v-html="marked(tech)"></span>
          </li>
        </ul>
      <!-- </transition-group> -->
      </DisclosurePanel>
      </transition>


      <DisclosureButton class="ring-transparent" key="1">
        <div class="flex flex-col justify-center items-center 
          pt-1 mt-2
          border-t-2 border-body text-body opacity-50">
          <!-- Show More -->
          <ChevronDoubleDownIcon 
            class="h-6 w-6 transform 
              transition-transform delay-200 duration-500"
            :class="{'rotate-180': open}" />
        </div>
      </DisclosureButton>
    </div>

  </Disclosure>

</section>
</template>

<script lang="ts">
import {
  LocationMarkerIcon,
  CalendarIcon,
  ChevronDoubleDownIcon,
  AcademicCapIcon,
  InformationCircleIcon,
} from "@heroicons/vue/outline";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionRoot,
} from "@headlessui/vue";
//@ts-ignore
import marked from "marked";

export default {
  components: {
    LocationMarkerIcon,
    CalendarIcon,
    ChevronDoubleDownIcon,
    AcademicCapIcon,
    InformationCircleIcon,

    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    TransitionRoot,
  },
  data() {
    return {
      tr: undefined,
      data: [
        {
          title: "B.Sc - Computer Science",
          location: "Liverpool Hope University",
          date: "Sept 2018 - June 2021",
          start: 2018,
          end: 2021,
          points: ["**1st Class** Degree with Honours"],
          topics: [
            "Advanced **Web Dev**",
            "Mobile **App Dev**",
            "**Database** Management",
            "Artificial Intelligence **(AI)** and Machine Learning **(ML)**",
            "Internet of Things **(IoT)**",
            "Immersive Technologies **(VR/AR)**",
            "Computer **Networks**",
          ],
          tech: [
            "Web - **Node.js**, WAMP PHP, Bootstrap, **SCSS**",
            "Database - **MySQL**, Firestore",
            "AI/ML - **Tensorflow/.js**, SciKitLearn",
            "VR/AR - **Unity**",
            "App - **Android Studio**, React Native / Expo",
          ],
        },
      ],
    };
  },
  methods: {
    marked,
  },
};
</script>

<style lang="postcss">
b,
strong {
  @apply text-title;
}
</style>