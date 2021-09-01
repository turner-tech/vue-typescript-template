<template>
  <div class="home" :style="{ align: 'left' }">
    <h1 :style="{ textAlign: 'left !important' }">Users Page</h1>
    <a-divider dashed :style="{ borderTop: '1px solid' }" />
    <h2 v-if="users && users.length > 0">
      {{ `There Are Currently (` + users.length + `) Users` }}
    </h2>
    <h2 v-else>There Are Currently (0) Users</h2>
    <UserCardList @delete-user="deleteUser" :users="users"></UserCardList>
    <a-divider dashed :style="{ borderTop: '1px solid' }" />
    <a-button @click="this.callGetRandomUser(this.users)">Add User</a-button>
    <a-button @click="this.deleteAllUsers">Delete All Users</a-button>
  </div>
</template>

<script lang="ts">
import RandomUserService from "../services/RandomUserService";
import { defineComponent } from "vue";
import UserCardList from "@/components/UserCardList.vue";
import { RandomUser } from "@/models/RandomUser";

export default defineComponent({
  name: "UsersView",
  components: { UserCardList },
  data() {
    return {
      users: [],
      posts: [],
    };
  },
  methods: {
    reload() {
      this.$forceUpdate();
    },
    async callGetRandomUser() {
      this.users = await RandomUserService.getRandomUser(this.users);
    },
    deleteAllUsers() {
      this.users = [];
    },
    deleteUser(userId: string) {
      if (this.users.length > 0) {
        this.users = this.users.filter(
          (user: RandomUser) => user.login.uuid !== userId,
        );
      }
    },
  },
  created() {
    // this.getData()
  },
});
</script>
