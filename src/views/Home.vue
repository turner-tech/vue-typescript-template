<template>
  <div class="home" :style="{ align: 'left' }">
    <h1 :style="{ textAlign: 'left !important' }">Home Page</h1>
    <a-divider dashed :style="{ borderTop: '1px solid' }" />
    <Header title="Task Tracker"></Header>
  </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import { defineComponent } from "vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: { Header },
});
</script>
