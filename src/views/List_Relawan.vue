<template>
  <section>
    <!-- Header Section -->
    <div class="bg-gradient-to-r from-primary to-red-500 text-white py-10">
      <div class="container mx-auto px-10 pt-32 text-center">
        <h1 class="text-white text-4xl font-bold mb-8">
          Temukan Lebih Banyak <br />
          Program Relawan
        </h1>
      </div>
    </div>

    <!-- Konten Section -->
    <div class="bg-white my-16 mx-5 sm:mx-10 lg:mx-14">
      <div class="container mx-auto px-4 mb-5 lg:px-20">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Filter Section -->
          <div class="col-span-1">
            <div
              class="bg-white border border-red-500 shadow-md p-4 rounded-lg"
            >
              <div class="mb-4">
                <div class="relative">
                  <input
                    type="text"
                    id="search"
                    placeholder="Cari program"
                    class="w-full border border-red-500 rounded-lg p-2 focus:ring-red-500 focus:border-red-500"
                  />
                  <i
                    class="fas fa-search absolute right-3 top-3 text-primary"
                  ></i>
                </div>
              </div>
              <div>
                <select
                  id="sort"
                  class="w-full border bg-white border-red-500 rounded-lg p-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option>Paling Populer</option>
                  <option>Terbaru</option>
                  <option>Terdekat</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Program Cards Section -->
          <div class="md:col-span-3 grid grid-cols-1 gap-6 mb-5">
            <!-- Card 1 -->
            <div
              class="bg-white border border-primary shadow-md rounded-[15px] md:flex overflow-hidden items-center mb-5"
              v-for="(volunteer, index) in volunteers"
              :key="index"
            >
              <img
                :src="'https://alope.id/storage/' + volunteer.image_url"
                alt="List_Relawan"
                class="md:w-1/2 h-50 object-cover"
              />
              <div class="md:w-2/3 p-4">
                <h2 class="lg:text-2xl text-2xl font-bold text-gray-900 mb-2">
                  {{ volunteer.title }}
                </h2>
                <p class="text-md text-gray-600 mb-7">
                  {{ volunteer.description }}
                </p>
                <RouterLink
                  to="Detail_Program"
                  class="bg-white border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
                >
                  Daftar Sekarang
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// let text = "How are you doing today?";
// const myArray = text.split(" ");
// let word = myArray[1];
import { RouterLink } from "vue-router";
import axios from "axios";
export default {
  data() {
    return {
      isLoadingGetVolunteer: false,
      volunteers: [],
    };
  },
  methods: {
    getDataVolunteer() {
      this.isLoadingGetVolunteer = true;
      axios
        .get("https://alope.id/api/user/volunteerAPI")
        .then((response) => {
          if (response) {
            console.log(response.data.data);
            this.isLoadingGetVolunteer = false;
            this.volunteers = response.data.data;
          }
        })
        .catch((error) => {
          this.isLoadingGetVolunteer = false;
          console.log("Server error:", error);
        });
    },
  },
  mounted() {
    this.getDataVolunteer();
    // this.getDataVolunteers();
  },
};
</script>
