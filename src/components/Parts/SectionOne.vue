<template>
  <div class="w-full mx-auto p-4 h-full flex gap-2 flex-row">
    <div class="w-full flex items-center">
      <div class="font-bold text-start">
        <h1 class="text-start">
          Hi I am<br />
          <span class="font-black">Dayan Sauqy</span>
        </h1>
        <p class="text-3xl">Freelance Junior Web Developer</p>
        <div class="image">
          <img
            src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="w-full items-center justify-center">
      <div class="w-full px-4">
        <div class="flex flex-wrap">
          <div class="w-full md:w-6/12 px-4">
            <div class="relative flex flex-col mt-4">
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                >
                  <i class="fas fa-sitemap"></i>
                </div>
                <h6 class="text-xl mb-1 font-semibold">CSS Components</h6>
                <p class="mb-4 text-blueGray-500">
                  Notus JS comes with a huge number of Fully Coded CSS
                  components.
                </p>
              </div>
            </div>
            <div class="relative flex flex-col min-w-0">
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                >
                  <i class="fas fa-drafting-compass"></i>
                </div>
                <h6 class="text-xl mb-1 font-semibold">
                  JavaScript Components
                </h6>
                <p class="mb-4 text-blueGray-500">
                  We also feature many dynamic components for React, NextJS, Vue
                  and Angular.
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-6/12 px-4">
            <div class="relative flex flex-col min-w-0 mt-4">
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                >
                  <i class="fas fa-newspaper"></i>
                </div>
                <h6 class="text-xl mb-1 font-semibold">Pages</h6>
                <p class="mb-4 text-blueGray-500">
                  This extension also comes with 3 sample pages. They are fully
                  coded so you can start working instantly.
                </p>
              </div>
            </div>
            <div class="relative flex flex-col min-w-0">
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                >
                  <i class="fas fa-file-alt"></i>
                </div>
                <h6 class="text-xl mb-1 font-semibold">Documentation</h6>
                <p class="mb-4 text-blueGray-500">
                  Built by developers for developers. You will love how easy is
                  to to work with Notus JS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-full relative -top-1/2" ref="main">
        <div ref="box" class="box" v-for="i in 8" :key="i"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SectionOne",
  components: {},
  async mounted() {
    // wait for $refs to be available
    await this.$nextTick();

    // eslint-disable-next-line
    (this.$refs["box"] as any).forEach(
      (box: {
        style: {
          left: string;
          top: string;
          animation: string;
          transformOrigin: string;
          cssText: string;
        };
        clientWidth: number;
        clientHeight: number;
      }) => {
        const animations = ["rotateClockwise", "rotateCounterClockwise"];
        box.style.left =
          Math.random() *
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ((this.$refs["main"] as any).clientWidth - box.clientWidth) +
          "px";
        box.style.top =
          Math.random() *
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ((this.$refs["main"] as any).clientHeight - box.clientHeight) +
          "px";
        box.style.animation =
          animations[Math.floor(Math.random() * animations.length)] +
          " " +
          Math.random() * 10 +
          "s" +
          " linear infinite";
        box.style.transformOrigin = Math.random() * -500 + "%";
        // box.style.cssText = ":hover {animation-play-state: paused;}";
      }
    );
  },
});
</script>

<style scopped lang="scss">
/*  Keyframes */
@keyframes rotateClockwise {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotateCounterClockwise {
  100% {
    transform: rotate(-360deg);
  }
}

.box {
  width: 8%;
  height: 8%;
  border-radius: 50px;
  position: absolute;
  /* From https://css.glass */
  background: linear-gradient(
    rgba(201, 64, 64, 0.644),
    rgba(180, 91, 180, 0.712)
  );
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  filter: blur(6px);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: -1;
  /* parent width - box width */
}
.image {
  position: absolute;
  z-index: -1;
  transform: translate(55vh, -50vh) rotate(-15deg);
  width: 20vw;
}
</style>
