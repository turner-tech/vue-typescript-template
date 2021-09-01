<template>
  <a-button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </a-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    text: {
      required: true,
      type: String,
    },
    color: String,
  },
  methods: {
    onClick() {
      console.log("clicked: " + this.text);
    },
  },
});
// @Component
// export default class CustomButton extends Vue {
//   @Prop(Number) readonly propA: number | undefined
//   @Prop({ default: 'default value' }) readonly propB!: string
//   @Prop([String, Boolean]) readonly propC: string | boolean | undefined
// }
</script>

<style scoped></style>
