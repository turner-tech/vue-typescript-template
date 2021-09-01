<template>
  <div :key="user.login.uuid" v-for="user in users">
    <UserCard
      @delete-user="deleteUser"
      :user="user"
      :style="{ paddingTop: '15px', marginTop: '15px' }"
    ></UserCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserCard from "@/components/UserCard.vue";

export default defineComponent({
  name: "UserCardList",
  props: {
    users: Array,
  },
  components: {
    UserCard,
  },
  emits: ["delete-user"],
  methods: {
    deleteUser(userId: string) {
      this.$emit("delete-user", userId);
    },
  },
});
</script>

<style scoped>
.card-title {
  padding-top: 7px;
}
</style>
