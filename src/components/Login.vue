<template>
  <div class="flex flex-col">
    <h2 class="text-2xl font-bold my-5">Login</h2>
    <form action="" @submit.prevent="login" class="flex flex-col gap-y-5">
      <input
        type="email"
        v-model="email"
        name=""
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Enter your email"
        id=""
      />
      <input
        type="password"
        v-model="password"
        placeholder="Enter your password"
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        name=""
        id=""
      />
      <div class="flex justify-center mb-5">
        <button class="bg-green-400 px-3 py-2 text-white rounded-lg">
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let email = ref("");
    let password = ref("");
    let login = () => {
      console.log(name, email, password);
    };
    return {
      email,
      password,
      login,
    };
  },
};
</script>

<style></style>
