<template>
  <div class="w-full mx-auto h-5/6 top-2">
    <div class="w-full mx-auto p-2 top-0">
      <app-tabs>
        <tab title="Request"><RequestSection /></tab>
        <tab title="Verify"><TokenSection /></tab>
        <tab title="Project"></tab>
      </app-tabs>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppTabs from "../AppTabs.vue";
import RequestSection from "../Sections/RequestSection.vue";
import TokenSection from "../Sections/TokenSection.vue";
import Tab from "../Tab.vue";
export default defineComponent({
  name: "SectionThree",
  components: {
    AppTabs,
    Tab,
    RequestSection,
    TokenSection,
  },
});
</script>
