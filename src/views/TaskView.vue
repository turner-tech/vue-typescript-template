<template>
  <div class="task-view">
    <h1>Tasks Page</h1>
    <Header title="Task Tracker"></Header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "TaskView",
  components: { Header },
});
</script>
