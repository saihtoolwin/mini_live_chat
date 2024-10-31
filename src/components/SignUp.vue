<template>
  <div class="flex flex-col">
    <h2 class="text-2xl font-bold my-5">Sign Up</h2>
    <form action="" @submit.prevent="signUp" class="flex flex-col gap-y-5">
      <input
        type="text"
        v-model="name"
        name=""
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Enter your name"
        id=""
      />
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
      <p class="text-red-600" v-if="error">{{ error }}</p> 
      <div class="flex justify-center mb-5">
        <button class="bg-green-400 px-3 py-2 mb-4 text-white rounded-lg">
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
export default {
  setup() {
    let name = ref("");
    let email = ref("");
    let password = ref("");
    let error = ref("");
    let signUp = async () => {
      try {
        let res = await createUserWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );
        if (!res) {
          throw new Error("Could not create user");
        }
      } catch (error) {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          console.log("ilt is already in use");
          error.value =
            "This email is already in use. Please use a different email.";
            console.log(error.value);
        } else {
          error.value = error.message; // Fallback for other errors
        }
      }
    };
    return {
      name,
      email,
      password,
      signUp,
      error,
    };
  },
};
</script>

<style></style>
