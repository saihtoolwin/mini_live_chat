<template>
  <div class="flex justify-center items-center min-h-screen">
    <div
      class="flex justify-center items-center w-3/6 bg-white rounded-md h-auto"
    >
      <div v-if="showLoginForm" class="text-center w-1/2">
        <Login></Login>
        <p class="mb-5 cursor-pointer">not a member ? <span @click="showLoginForm = !showLoginForm" class="underline text-blue-400">create account</span></p>
      </div>
      <div v-else class="text-center w-1/2">
        <SignUp></SignUp>
        <p class="mb-5 cursor-pointer">already member ? <span @click="showLoginForm = !showLoginForm" class="underline text-blue-400">Login </span></p>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import SignUp from "@/components/SignUp.vue";
import { ref } from "vue";
export default {
  components: {
    SignUp,
    Login,
  },
  setup() {
    let showLoginForm = ref(true);

    return {
      showLoginForm,
    };
  },
};
</script>

<style>
body {
  background: rgb(165, 133, 165);
}
</style>
