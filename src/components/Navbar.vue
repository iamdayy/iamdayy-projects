<template>
  <header class="header">
    <!-- Logo -->
    <a href="#" class="logo">LR</a>
    <!-- Hamburger icon -->
    <input class="side-menu" type="checkbox" id="side-menu" />
    <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
    <!-- Menu -->
    <!-- <nav class="nav">
      <ul class="menu">
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav> -->
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
});
</script>
