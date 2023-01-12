<template>
  <Navbar />
  <section class="parallax bg">
    <SectionOne />
  </section>
  <section class="no-parallax">
    <SectionTwo />
  </section>
  <section class="parallax bg">
    <SectionThree />
  </section>
  <footer class="bg-slate-700">
    <div class="max-w-screen-xl h-full px-4 pt-8 mx-auto sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="flex justify-center text-teal-300 sm:justify-start">
          <h1 class="text-8xl">LR</h1>
        </div>

        <p class="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
          T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developers
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionOne from "./components/Parts/SectionOne.vue";
import SectionTwo from "./components/Parts/SectionTwo.vue";
import SectionThree from "./components/Parts/SectionThree.vue";
import Navbar from "./components/Navbar.vue";
import ApiService from "@/services/api-service";
export default defineComponent({
  name: "App",
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    Navbar,
  },
  data() {
    return {
      projects: {},
    };
  },
  methods: {
    async fetchProjectData() {
      try {
        await ApiService.fetchProjectData();
        this.projects = ApiService.ProjectData;
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchProjectData();
  },
});
</script>

<style>
section {
  transform-style: preserve-3d;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.no-parallax {
  background: url("./assets/background.svg");
  background-size: auto;
  z-index: 999;
}

section h1 {
  text-align: center;
  font-size: 4rem;
  font-family: sans-serif;
  margin: 0;
}

.parallax::after {
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateZ(-1px) scale(2);
  z-index: -1;
}
.bg::after {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://picsum.photos/1080/720");
  background-size: cover;
}
footer {
  transform-style: preserve-3d;
  position: relative;
  top: 25vh;
  height: 25vh;
  z-index: 999;
}
</style>
