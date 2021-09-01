<template>
  <header>
    <h1>{{ title }}</h1>
    <CustomButton text="Add Task1" color="orange"></CustomButton>
    <CustomButton text="Add Task2"></CustomButton>
    <CustomButton text="Add Task3"></CustomButton>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomButton from "@/components/CustomButton.vue";

export default defineComponent({
  name: "Header",
  components: {
    CustomButton,
  },
  props: {
    title: String,
  },
});
</script>

<style scoped></style>
