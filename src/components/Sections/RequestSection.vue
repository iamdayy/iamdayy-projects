<template>
  <div
    class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-lg shadow-md dark:bg-gray-800"
  >
    <h1 class="text-6xl font-bold text-white capitalize dark:text-white">
      Request Upload
    </h1>
    <form>
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label class="text-white dark:text-gray-200" for="emailAddress"
            >Email Client</label
          >
          <input
            id="emailAddress"
            type="email"
            v-model="request.email"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            class="text-white dark:text-gray-200"
            for="passwordConfirmation"
            >Technologies</label
          >
          <div
            class="flex items-center mb-4"
            v-for="(skill, index) in skills"
            :key="index"
          >
            <input
              id="default-checkbox"
              type="checkbox"
              v-model="request.technologies"
              :value="skill._id"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >{{ skill.title }}</label
            >
          </div>
        </div>
        <div>
          <label
            class="text-white dark:text-gray-200"
            for="passwordConfirmation"
            >Deadline</label
          >
          <input
            id="date"
            type="date"
            v-model="request.deadline"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            class="text-white dark:text-gray-200"
            for="passwordConfirmation"
            >Message</label
          >
          <textarea
            id="textarea"
            type="textarea"
            v-model="request.message"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          ></textarea>
        </div>
        <!-- <div>
          <label class="block text-sm font-medium text-white">
            Design referensi
          </label>
          <div
            class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
          >
            <div class="space-y-1 text-center">
              <svg
                class="mx-auto h-12 w-12 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="flex text-sm text-gray-600">
                <label
                  for="file-upload"
                  class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span class="">Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    class="sr-only"
                  />
                </label>
                <p class="pl-1 text-white">or drag and drop</p>
              </div>
              <p class="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div> -->
      </div>

      <div class="flex justify-end mt-6">
        <button
          @click.prevent="submitRequest()"
          class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import apiService from "@/services/api-service";
import { defineComponent } from "vue";
export default defineComponent({
  name: "RequestSection",
  data() {
    return {
      skills: [],
      request: {
        email: "",
        technologies: [],
        deadline: Date,
        message: "",
      },
    };
  },
  methods: {
    async fetchSkillData() {
      try {
        await apiService.fetchSkillData();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.skills = apiService.skillData;
      } catch (e) {
        console.log(e);
      }
    },
    async submitRequest() {
      try {
        await apiService.createRequestData(this.request);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchSkillData();
  },
});
</script>
