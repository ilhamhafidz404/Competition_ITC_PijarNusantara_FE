<template>
  <footer class="mt-20 bg-primary text-secondary font-primary">
    <div
      class="grid grid-cols-1 md:grid-cols-7 gap-5 mx-6 md:mx-16 text-secondary"
    >
      <div class="lg:col-span-2 md:col-span-4">
        <h1 class="font-extrabold mt-10 mb-5 text-2xl font-sekunder">
          Pijar Nusantara
        </h1>
        <p class="font-semibold">
          Jelajahi bakat mengajar Anda <br />
          dan ciptakan dampak nyata<br />
          bagi pendidikan Nusantara.
        </p>
        <div class="flex items-center gap-3 mt-5">
          <h1 class="text-2xl font-extrabold mr-2">Follow Us:</h1>
          <a href=""><i class="fa-brands fa-instagram text-2xl"></i></a>
          <a href=""><i class="fa-brands fa-github text-2xl"></i></a>
          <a href=""><i class="fa-brands fa-linkedin text-2xl"></i></a>
        </div>
      </div>
      <div class="lg:col-span-2 md:col-span-3">
        <h1 class="font-extrabold mt-10 mb-5 text-2xl">Location</h1>
        <p class="font-semibold">
          Jl. Pramuka No.67 <br />
          Purwawinangun-Kuningan <br />
          Jawa Barat 45512
        </p>
      </div>
      <div class="lg:col-span-3 md:col-span-7">
        <h1 class="font-extrabold mt-10 mb-5 text-2xl">Subscription</h1>
        <p class="font-semibold">
          Dapatkan update terbaru dan pengetahuan <br />
          bermanfaat langsung ke inbox Anda.
        </p>
        <div
          class="mt-4 flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-2"
        >
          <input
            type="text"
            placeholder="Masukan Email Anda"
            class="bg-transparent border border-secondary placeholder-white w-full md:w-[250px] p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <button
            class="border border-secondary text-secondary p-2 rounded hover:bg-white hover:text-primary transition duration-300"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div class="mx-6 md:mx-16">
      <hr class="mt-5 border-secondary" />
      <p class="text-center py-3">
        &copy; CopyRight Team Alope Anonymous, All Right Reserved
      </p>
    </div>
  </footer>
</template>
