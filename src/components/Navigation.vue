<template>
  <nav class="bg-[#FFAC00] text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold italic font-kaushan">Pijar Nusantara</h1>
      </div>
      <div class="flex space-x-2">
        <button
          class="w-32 border border-white text-white font-medium py-2 px-4 rounded-lg hover:bg-white hover:text-[#FFAC00]"
        >
          Login
        </button>

        <button
          class="w-32 bg-white text-[#FFAC00] font-medium py-2 px-4 rounded-lg hover:bg-gray-100"
        >
          Register
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");

.font-kaushan {
  font-family: "Kaushan Script", cursive;
}
</style>
