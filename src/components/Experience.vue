<template>
<section class="flex flex-col">

  <Disclosure as="article" 
    v-for="item of data" :key="item.title"
    v-slot="{ open }"
    class="flex py-4x px-6x transition-dim
    bg-purple-tile rounded-3xl
    overflow-hidden">

    <div class="flex flex-col items-center 
      py-4 px-6
      text-body font-semibold bg-purple-tile-lightx">
      <span class="flex justify-center items-center 
        h-12 w-12 mb-2
        rounded-full bg-purple-100">
        <PresentationChartBarIcon 
          class="h-8 w-8 text-primary opacity-75" />
      </span>

      <span class="">{{ item.start }}</span>
      <span class="h-4 w-4 border-2 border-body 
          rounded-full my-1"></span>
      <div class="w-0 flex-grow border-l-2 border-body
        border-dashed"></div>
      <span class="h-4 w-4 border-2 border-body 
          rounded-full my-1"></span>
      <span class="">{{ item.end }}</span>
    </div>

    <div class="flex flex-col flex-grow
      py-4 px-6 bg-purple-tile-light">
      <h3 class="text-2xl text-title font-bold">
        {{ item.title }}
      </h3>
      <h4 class="flex items-center font-semibold text-body mb-2">
        <OfficeBuildingIcon class="inline-block h-5 w-5 mr-1 opacity-60" /> 
        {{item.company}}

        <LocationMarkerIcon class="inline-block h-5 w-5 mr-1 ml-4 opacity-60" /> 
        {{ item.location }}

        <CalendarIcon class="inline-block h-5 w-5 mr-1 ml-4 opacity-60" />
        {{ item.date }}
      </h4>


      <p class="font-semibold text-body mb-1">
        Technologies Used
      </p>
      <ul class="text-body font-thinx mb-4">
        <li v-for="tech of item.tech" :key="tech" 
          class="flex gap-2">
          <InformationCircleIcon class="h-6 w-6 text-primary
            flex-none" />
          <span v-html="marked(tech)"></span>
        </li>
      </ul>

      <!-- <transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="transform scale-y-5 opacity-0"
        enter-to-class="transform scale-y-100 opacity-100"
        leave-active-class="transition duration-300 ease-out"
        leave-from-class="transform scale-y-100 opacity-100"
        leave-to-class="transform scale-y-5 opacity-0"> -->
      <transition
        enter-active-class="transition-dim duration-300 ease-out"
        enter-from-class="h-0"
        enter-to-class="h-full"
        leave-active-class="transition-dim duration-300 ease-out"
        leave-from-class="h-full"
        leave-to-class="h-0">
        <DisclosurePanel class="overflow-hidden">

          <p class="font-semibold text-body mb-1">
            What I learnt
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
            The project
          </p>
          <ul class="text-body font-thinx mb-4">
            <li v-for="point of item.points" :key="point"
              class="flex gap-2">
              <InformationCircleIcon class="h-6 w-6 text-tertiary
                flex-none" />
              <span v-html="marked(point)"></span>
            </li>
          </ul>
        </DisclosurePanel>
      </transition>


      <DisclosureButton class="ring-transparent">
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
  PresentationChartBarIcon,
  InformationCircleIcon,
  OfficeBuildingIcon,
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
    PresentationChartBarIcon,
    InformationCircleIcon,
    OfficeBuildingIcon,

    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    TransitionRoot,
  },
  data() {
    return {
      data: [
        {
          title: "Data Science Intern",
          location: "London, UK",
          company: "GameAnalytics",
          date: "July - August 2018",
          start: "July",
          end: "August",
          points: [
            "Neural networks **(NNs)** were trained to **solve the game 2048** over multiple browsers/devices for large population simulations.",
            "**Neuro-evolution** is used to train the NNs which involves **simulating many networks** playing the game and **keeping the most successful** ones.",
            "The Node server **controls the flow of data** and the **synchronisation** of the separate simulations among the **connected instances**.",
            'There are **live analytical data** of all of the [100] games along with a **visualisation of the "best"** NN, based off of **various heuristics**.',
          ],
          topics: [
            "Familiarising myself with the **team's development environment** and workspace.",
            "Understanding **data collection techniques**, cleaning processes and the data formats.",
            "**Data transmission** with servers using Node.js with Express and other frameworks.",
            "Deep understanding of topology of advanced NNs to create **visualisations**.",
            "**Communication** in a small team of Data Scientists and with others in the office to help test.",
            "Testing of **multiple training algorithms**.",
            "**Internship extended** by 2 weeks to allow me time to further work on my project.",
          ],
          tech: [
            "**Tensorflow.js**",
            "**Node.js**",
            "**Express.js**",
            "**D3.js**",
            "**WebAssembly**",
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