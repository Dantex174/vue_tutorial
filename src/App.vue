<template>
  <navBar></navBar>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";

export default {
  components: {navBar}

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>