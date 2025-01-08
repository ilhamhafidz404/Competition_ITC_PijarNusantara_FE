<template>
  <!-- hero section -->
  <section class="mb-10 mx-5 sm:mb-10 lg:mx-24">
    <div
      class="container mx-auto min-h-[600px] flex flex-col lg:flex-row items-center lg:gap-0 gap-8 px-6 md:px-16 lg:px-20 space-y-6 md:space-y-0 md:space-x-10 pt-20"
    >
      <div class="lg:w-1/2 w-full lg:order-1 order-2 text-center md:text-left">
        <h2 class="lg:text-5xl text-2xl font-bold text-gray-900">
          Bersama
          <span class="text-primary">Menginspirasi</span>
          <br />
          Mencerdaskan
          <span class="text-red-500">Nusantara</span>
        </h2>
        <p class="text-gray-700 mt-4">
          Selamat datang di platform yang menghubungkan komunitas relawan
          mengajar di seluruh Indonesia. Promosikan program Anda, jangkau lebih
          banyak relawan, dan ciptakan dampak besar bagi generasi cerdas
          Nusantara.
        </p>
        <div class="flex justify-center md:justify-start space-x-4 mt-6">
          <button
            class="bg-[#FFAC00] text-white p-4 rounded-lg hover:bg-orange-600"
          >
            <i class="fas fa-user text-2xl"></i>
          </button>
          <button
            class="bg-[#FFAC00] text-white p-4 rounded-lg hover:bg-orange-600"
          >
            <i class="fas fa-globe text-2xl"></i>
          </button>
        </div>
      </div>
      <div class="lg:w-1/2 w-full lg:order-1">
        <div class="relative w-full flex lg:justify-end justify-center">
          <img
            src="./../assets/image/hero_1.png"
            alt="Anak Bahagia"
            class="w-[450px] max-w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- end hero -->

  <!-- quetes -->
  <section>
    <div class="bg-gradient-to-r from-primary to-red-500 text-white py-10">
      <div class="container mx-auto px-10 pt-10 text-center">
        <p class="text-xl md:text-3xl xl:text-4xl italic font-semibold">
          <span class="relative">
            <i
              class="fas fa-quote-left text-2xl absolute -left-6 top-1 text-white"
            ></i>
            Pendidikan
          </span>
          adalah senjata paling ampuh <br class="sm:block hidden" />
          yang dapat Anda gunakan untuk <br class="sm:block hidden" />
          mengubah
          <span class="relative">
            dunia
            <i
              class="fas fa-quote-right text-2xl absolute -right-6 top-1 text-white"
            ></i> </span
          >.
        </p>
        <p class="text-lg mt-8 font-sekunder">
          Ki Hajar Dewantara <br />
          <span class="text-sm font-sekunder">Bapak Pendidikan Indonesia</span>
        </p>
      </div>
    </div>
  </section>
  <!-- end quetes -->

  <!-- visi misi -->
  <section class="my-16 mx-5 sm:mx-10 lg:mx-24">
    <div
      class="container mx-auto grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-3 px-8 md:px-16"
    >
      <div class="w-full mx-auto">
        <img
          src="./../assets/image/relawan_1.png"
          alt="Relawan Mengajar"
          class="rounded-lg lg:w-full md:w-1/2 h-auto shadow-lg mx-auto"
        />
      </div>
      <div class="lg:col-span-2">
        <div class="my-5">
          <h4 class="text-4xl text-primary font-semibold font-sekunder italic">
            Visi
          </h4>
          <p class="text-gray-700 mt-2 text-xl">
            Menjadi platform utama yang memperkuat kolaborasi komunitas relawan
            mengajar untuk mencerdaskan generasi dan membangun masa depan yang
            berdaya.
          </p>
        </div>
        <div>
          <h4 class="text-4xl text-red-500 font-semibold font-sekunder italic">
            Misi
          </h4>
          <ul class="mt-2 space-y-4">
            <li class="flex items-center">
              <div
                class="bg-primary text-white font-bold min-w-10 h-10 flex items-center justify-center rounded-lg mr-4"
              >
                1
              </div>
              <p class="text-gray-700 text-xl">
                Menyediakan ruang untuk mempromosikan program pendidikan secara
                luas dan mudah diakses.
              </p>
            </li>
            <li class="flex items-center">
              <div
                class="bg-primary text-white font-bold min-w-10 h-10 flex items-center justify-center rounded-lg mr-4"
              >
                2
              </div>
              <p class="text-gray-700 text-xl">
                Menghubungkan komunitas relawan dengan individu yang ingin
                berkontribusi.
              </p>
            </li>
            <li class="flex items-center">
              <div
                class="bg-primary text-white font-bold min-w-10 h-10 flex items-center justify-center rounded-lg mr-4"
              >
                3
              </div>
              <p class="text-gray-700 text-xl">
                Mendorong sinergi antar kelompok relawan untuk menciptakan
                dampak positif yang berkelanjutan.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- end visi misi -->

  <!-- program -->
  <section class="my-16 mx-5 sm:mx-10 lg:mx-24">
    <div class="container mx-auto px-6 md:mb-16">
      <h2
        class="md:text-4xl text-3xl md:text-left text-center font-bold text-gray-900 mb-12"
      >
        Temukan <span class="text-primary">Program</span> Yang
        <br class="sm:block hidden" />
        Tepat <span class="text-red-500">Untukmu</span>
      </h2>

      <div
        class="grid grid-cols-1 md:grid-cols-3 lg:gap-10 gap-5 rounded-[15px]"
      >
        <div
          class="border border-primary rounded-[15px] overflow-hidden shadow-lg flex flex-col"
        >
          <img
            src="./../assets/image/program.png"
            alt="Program Relawan"
            class="w-full h-50 object-cover"
          />
          <div class="lg:p-6 p-4 flex flex-col">
            <h3 class="text-xl font-semibold mb-4">
              Pendaftaran Relawan Jendela Jakarta
            </h3>
            <button
              class="border border-primary text-primary px-4 py-2 rounded-lg font-bold hover:bg-[#FFAC00] hover:text-white transition duration-300 self-start"
            >
              Read More
            </button>
          </div>
        </div>
        <div
          class="border border-primary rounded-[15px] overflow-hidden shadow-lg flex flex-col"
        >
          <img
            src="./../assets/image/program.png"
            alt="Program Relawan"
            class="w-full h-50 object-cover"
          />
          <div class="lg:p-6 p-4 flex flex-col">
            <h3 class="text-xl font-semibold mb-4">
              Pendaftaran Relawan Jendela Jakarta
            </h3>
            <button
              class="border border-primary text-primary px-4 py-2 rounded-lg font-bold hover:bg-[#FFAC00] hover:text-white transition duration-300 self-start"
            >
              Read More
            </button>
          </div>
        </div>
        <div
          class="border border-primary rounded-[15px] overflow-hidden shadow-lg flex flex-col"
        >
          <img
            src="./../assets/image/program.png"
            alt="Program Relawan"
            class="w-full h-50 object-cover"
          />
          <div class="lg:p-6 p-4 flex flex-col">
            <h3 class="text-xl font-semibold mb-4">
              Pendaftaran Relawan Jendela Jakarta
            </h3>
            <button
              class="border border-primary text-primary px-4 py-2 rounded-lg font-bold hover:bg-[#FFAC00] hover:text-white transition duration-300 self-start"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <div class="text-end mt-12">
        <RouterLink
          to="Detail_Program"
          class="border border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-[#FFAC00] hover:text-white transition duration-300"
        >
          Lihat Lebih Banyak <i class="fa-solid fa-arrow-right"></i>
        </RouterLink>
      </div>
    </div>
  </section>
  <!-- end program -->

  <!-- donasi -->
  <section class="my-16 mx-5 sm:mx-10 lg:mx-24">
    <div class="container mx-auto px-6 md:mb-16">
      <h2
        class="md:text-4xl text-3xl md:text-left text-center font-bold text-gray-900 mb-12"
      >
        Bersama, Ciptakan <br class="sm:block hidden" />
        <span class="text-primary"> Perubahan</span> Melalui
        <br class="sm:block hidden" />
        <span class="text-red-500">Donasi Anda</span>
      </h2>

      <div
        class="grid grid-cols-1 md:grid-cols-3 lg:gap-10 gap-5 rounded-[15px]"
      >
        <div>
          <div
            class="border border-red-500 rounded-[15px] overflow-hidden shadow-lg flex flex-col"
          >
            <img
              src="./../assets/image/donasi.png"
              alt="Donasi"
              class="w-full h-50 object-cover"
            />
            <div class="lg:p-6 p-4 flex flex-col">
              <h3 class="text-xl font-semibold mb-4">
                1 Buku Sejuta Harapan! Bantu Rumah Baca Anak Papua
              </h3>
              <button
                class="border border-red-500 text-red-500 px-4 py-2 rounded-lg font-bold hover:bg-red-500 hover:text-white transition duration-300 self-start"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-red-500 rounded-[15px] overflow-hidden shadow-lg flex flex-col"
          >
            <img
              src="./../assets/image/donasi.png"
              alt="Donasi"
              class="w-full h-50 object-cover"
            />
            <div class="lg:p-6 p-4 flex flex-col">
              <h3 class="text-xl font-semibold mb-4">
                1 Buku Sejuta Harapan! Bantu Rumah Baca Anak Papua
              </h3>
              <button
                class="border border-red-500 text-red-500 px-4 py-2 rounded-lg font-bold hover:bg-red-500 hover:text-white transition duration-300 self-start"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-red-500 rounded-[15px] overflow-hidden shadow-lg flex flex-col"
          >
            <img
              src="./../assets/image/donasi.png"
              alt="Donasi"
              class="w-full h-50 object-cover"
            />
            <div class="lg:p-6 p-4 flex flex-col">
              <h3 class="text-xl font-semibold mb-4">
                1 Buku Sejuta Harapan! Bantu Rumah Baca Anak Papua
              </h3>
              <button
                class="border border-red-500 text-red-500 px-4 py-2 rounded-lg font-bold hover:bg-red-500 hover:text-white transition duration-300 self-start"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="text-end mt-12">
        <button
          class="border border-red-500 text-red-500 px-8 py-3 rounded-lg font-bold hover:bg-red-500 hover:text-white transition duration-300"
        >
          Lihat Lebih Banyak <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </section>
  <!-- end donasi -->

  <!-- testimoni -->
  <section class="my-16 mx-5 sm:mx-10 lg:mx-24">
    <div class="container mx-auto px-6 md:px-16 lg:px-20 mb-">
      <h2 class="md:text-5xl text-3xl font-bold text-center text-primary mb-4">
        Testimoni
      </h2>
      <p class="text-center text-gray-700 text-xl mb-10">
        "Dengarkan kisah inspiratif relawan dan komunitas <br />
        yang telah menciptakan dampak nyata bagi <br />
        pendidikan Nusantara."
      </p>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          class="border border-gray-300 rounded-lg shadow-lg p-6 max-w-md mx-auto lg:block hidden"
        >
          <p
            class="text-gray-700 italic font-semibold mb-4 text-center leading-relaxed"
          >
            "Melalui platform ini, saya menemukan komunitas yang sejalan dengan
            semangat saya untuk mengajar. Kini, saya bisa berkontribusi nyata
            untuk pendidikan."
          </p>
          <hr class="border-t-2 border-primary mb-6" />
          <div class="flex items-center">
            <img
              src="./../assets/image/topan.png"
              alt="Profile"
              class="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h4 class="text-gray-900 font-semibold">
                Taufan Hidayatul Akbar
              </h4>
              <p class="text-sm text-gray-500">CO Founder & CEO Alope</p>
            </div>
          </div>
        </div>

        <div
          class="border border-gray-300 rounded-lg shadow-lg p-6 max-w-md mx-auto md:block hidden"
        >
          <p
            class="text-gray-700 italic font-semibold mb-4 text-center leading-relaxed"
          >
            "Melalui platform ini, saya menemukan komunitas yang sejalan dengan
            semangat saya untuk mengajar. Kini, saya bisa berkontribusi nyata
            untuk pendidikan."
          </p>
          <hr class="border-t-2 border-primary mb-6" />
          <div class="flex items-center">
            <img
              src="./../assets/image/topan.png"
              alt="Profile"
              class="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h4 class="text-gray-900 font-semibold">
                Taufan Hidayatul Akbar
              </h4>
              <p class="text-sm text-gray-500">CO Founder & CEO Alope</p>
            </div>
          </div>
        </div>

        <div
          class="border border-gray-300 rounded-lg shadow-lg p-6 max-w-md mx-auto"
        >
          <p
            class="text-gray-700 italic font-semibold mb-4 text-center leading-relaxed"
          >
            "Melalui platform ini, saya menemukan komunitas yang sejalan dengan
            semangat saya untuk mengajar. Kini, saya bisa berkontribusi nyata
            untuk pendidikan."
          </p>
          <hr class="border-t-2 border-primary mb-6" />
          <div class="flex items-center">
            <img
              src="./../assets/image/topan.png"
              alt="Profile"
              class="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h4 class="text-gray-900 font-semibold">
                Taufan Hidayatul Akbar
              </h4>
              <p class="text-sm text-gray-500">CO Founder & CEO Alope</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center space-x-3 mt-8">
        <button class="bg-[#FFAC00] text-white px-4 py-2 rounded-md">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button class="bg-[#FFAC00] text-white px-4 py-2 rounded-md">1</button>
        <button
          class="border border-primary text-primary px-4 py-2 rounded-md hover:bg-[#FFAC00] hover:text-white transition duration-300"
        >
          2
        </button>
        <button
          class="border border-primary text-primary px-4 py-2 rounded-md hover:bg-[#FFAC00] hover:text-white transition duration-300"
        >
          3
        </button>
        <button
          class="border border-primary text-primary px-4 py-2 rounded-md hover:bg-[#FFAC00] hover:text-white transition duration-300"
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
  <!-- end testimoni -->

  <!-- FAQ -->
  <section class="my-16 mx-5 sm:mx-10 lg:mx-24">
    <div
      class="container mx-auto px-6 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
    >
      <div class="text-center md:text-left">
        <h2
          class="md:text-5xl text-3xl font-bold text-slate-900 mb-6 leading-tight"
        >
          Butuh Bantuan? <br />
          Cari <span class="text-primary">Jawaban</span> di <br />
          <span class="text-red-500">FAQ Kami</span>
        </h2>
        <p class="text-gray-700 text-lg md:text-xl leading-relaxed">
          Kami telah mengumpulkan beberapa pertanyaan umum untuk memudahkan Anda
          dalam menemukan informasi yang dibutuhkan.
        </p>
      </div>
      <div class="space-y-4 p-0 lg:p-5">
        <div class="border border-gray-300 rounded-lg shadow-md">
          <button
            class="w-full text-left px-4 py-3 bg-white font-semibold text-slate-900 flex justify-between items-center"
            @click="toggleAccordion(1)"
          >
            Apa itu FAQ?
            <span
              :class="{ 'rotate-180': activeAccordion === 1 }"
              class="transition-transform duration-300"
            >
              +
            </span>
          </button>
          <div
            v-show="activeAccordion === 1"
            class="px-4 py-3 text-gray-700 transition-all duration-300 ease-in-out"
          >
            FAQ adalah daftar pertanyaan yang sering diajukan, dirancang untuk
            membantu Anda menemukan informasi penting dengan mudah.
          </div>
        </div>

        <div class="border border-gray-300 rounded-lg shadow-md">
          <button
            class="w-full text-left px-4 py-3 bg-white font-semibold text-slate-900 flex justify-between items-center"
            @click="toggleAccordion(2)"
          >
            Bagaimana cara mengakses layanan kami?
            <span
              :class="{ 'rotate-180': activeAccordion === 2 }"
              class="transition-transform duration-300"
            >
              +
            </span>
          </button>
          <div
            v-show="activeAccordion === 2"
            class="px-4 py-3 text-gray-700 transition-all duration-300 ease-in-out"
          >
            Anda dapat mengakses layanan kami melalui menu navigasi di situs ini
            atau dengan menghubungi layanan pelanggan kami.
          </div>
        </div>

        <div class="border border-gray-300 rounded-lg shadow-md">
          <button
            class="w-full text-left px-4 py-3 bg-white font-semibold text-slate-900 flex justify-between items-center"
            @click="toggleAccordion(3)"
          >
            Apa manfaat bergabung dengan komunitas ini?
            <span
              :class="{ 'rotate-180': activeAccordion === 3 }"
              class="transition-transform duration-300"
            >
              +
            </span>
          </button>
          <div
            v-show="activeAccordion === 3"
            class="px-4 py-3 text-gray-700 transition-all duration-300 ease-in-out"
          >
            Bergabung dengan komunitas ini memberi Anda akses ke sumber daya,
            pelatihan, dan jaringan yang mendukung misi pendidikan.
          </div>
        </div>

        <div class="border border-gray-300 rounded-lg shadow-md">
          <button
            class="w-full text-left px-4 py-3 bg-white font-semibold text-slate-900 flex justify-between items-center"
            @click="toggleAccordion(4)"
          >
            Apa manfaat bergabung dengan komunitas ini?
            <span
              :class="{ 'rotate-180': activeAccordion === 4 }"
              class="transition-transform duration-300"
            >
              +
            </span>
          </button>
          <div
            v-show="activeAccordion === 4"
            class="px-4 py-3 text-gray-700 transition-all duration-300 ease-in-out"
          >
            Bergabung dengan komunitas ini memberi Anda akses ke sumber daya,
            pelatihan, dan jaringan yang mendukung misi pendidikan.
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end FAQ -->
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      activeAccordion: null,
    };
  },
  methods: {
    toggleAccordion(id) {
      this.activeAccordion = this.activeAccordion === id ? null : id;
    },
  },
};
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
