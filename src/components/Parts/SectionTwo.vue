<template>
  <div class="w-full flex flex-col gap-2 p-8">
    <!-- <div class="p-4 text-gray-600">
      <h1 class="mb-8 text-center text-3xl font-bold text-indigo-900">
        This is - what we do :
      </h1>

      <ul class="grid place-content-center sm:grid-cols-2 gap-8">
        <li class="flex">
          <div class="px-4 text-5xl font-extralight text-indigo-700">01.</div>
          <div>
            <div class="text-xl font-bold text-indigo-800">Research</div>
            <p class="max-w-xs py-2 text-sm text-indigo-900">
              We love numbers! We collect data and insights, analyze them then
              take the time to learn about your objectives, ask the right
              questions to understand your business.
            </p>
          </div>
        </li>
        <li class="flex">
          <div class="px-4 text-5xl font-extralight text-indigo-700">02.</div>
          <div>
            <div class="text-xl font-bold text-indigo-800">Strategey</div>
            <p class="max-w-xs py-2 text-sm text-indigo-900">
              Solutions are born from proper research, hard work, and strong
              strategy. We build data-driven roadmaps for every project to make
              pave the way to success.
            </p>
          </div>
        </li>
        <li class="flex">
          <div class="px-4 text-5xl font-extralight text-indigo-700">03.</div>
          <div>
            <div class="text-xl font-bold text-indigo-800">Design</div>
            <p class="max-w-xs py-2 text-sm text-indigo-900">
              We design the right solution for your business. We craft
              beautiful, intuitive, and user-friendly interfaces that are easy
              to use and easy to maintain.
            </p>
          </div>
        </li>
        <li class="flex">
          <div class="px-4 text-5xl font-extralight text-indigo-700">04.</div>
          <div>
            <div class="text-xl font-bold text-indigo-800">Development</div>
            <p class="max-w-xs py-2 text-sm text-indigo-900">
              We build the right solution for your business. We craft beautiful,
              intuitive, and user-friendly interfaces that are easy to use and
              easy to maintain.
            </p>
          </div>
        </li>
        <li class="flex">
          <div class="px-4 text-5xl font-extralight text-indigo-700">05.</div>
          <div>
            <div class="text-xl font-bold text-indigo-800">Deployment</div>
            <p class="max-w-xs py-2 text-sm text-indigo-900">
              We build the right solution for your business. We craft beautiful,
              intuitive, and user-friendly interfaces that are easy to use and
              easy to maintain.
            </p>
          </div>
        </li>
      </ul>
    </div> -->

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption
          class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
        >
          Our Request
          <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Browse a list of My request to see my project.
          </p>
        </caption>
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Client Email</th>
            <th scope="col" class="px-6 py-3">Technologies</th>
            <th scope="col" class="px-6 py-3">Deadline</th>
            <th scope="col" class="px-6 py-3">Active</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(request, index) in requests"
            :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ request.email }}
            </th>
            <td class="px-6 py-4">
              <ul>
                <li
                  v-for="(technology, index) in request.technologies"
                  :key="index"
                >
                  {{ technology.title }}
                </li>
              </ul>
            </td>
            <td class="px-6 py-4">{{ request.deadline }}</td>
            <td class="px-6 py-4">{{ request.verify }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import apiService from "@/services/api-service";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionTwo",
  data() {
    return {
      requests: [],
    };
  },
  methods: {
    async fetcRequest() {
      await apiService.fetchRequestData();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      this.requests = apiService.RequestData;
    },
  },
  mounted() {
    this.fetcRequest();
  },
});
</script>
