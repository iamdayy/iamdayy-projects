<template>
  <div
    class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-lg shadow-md dark:bg-gray-800"
  >
    <h1 class="text-6xl font-bold text-white capitalize dark:text-white">
      Token Verification
    </h1>
    <form>
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label class="text-white dark:text-gray-200" for="Token"
            >YourToken</label
          >
          <input
            id="Token"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
      </div>

      <div class="flex justify-end mt-6">
        <button
          class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
        >
          Verify Token
        </button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TokenSection",
});
</script>
