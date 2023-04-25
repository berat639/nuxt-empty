<script setup lang="ts">
const { t } = useLang()
const route = useRoute()
const isHomePage = computed(() => route.path === '/')
const modalStore= useModalStore()
const showModal= (e:any)=>{
e.preventDefault();
modalStore.showModal("Test","text");
}
const heroContent = computed(() => {
  return {
    'lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16 mx-auto': isHomePage.value,
    'w-full relative z-10 h-100 lg:mt-64': !isHomePage.value,
  }
})
</script>

<template>
  <header class="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
    <div
      class="hidden md:flex justify-between items-center py-2 border-b text-sm py-3"
      style="border-color: rgba(255,255,255,.25)"
    >
      <div class="">
        <ul class="flex text-white">
          <li>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current text-white"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"
                />
              </svg>

              <span class="ml-2" leading-relaxed>    {{ t("LeftTop") }}</span>
            </div>
          </li>
          <li class="ml-6">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current text-white"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z"
                />
              </svg>

              <span class="ml-2" leading-relaxed>    {{ t("Telefon") }}</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="">
        <ul class="flex justify-end text-white">
          <li>
            <a href="#" @click="showModal" 
            class="px-4 py-2 bg-red-700 text-white rounded-2xl inline-block font-semibold leading-relaxed">
            {{ t("RightTop1") }}
          </a>

          </li>
          <li>
            <a href="#" @click="showModal" 
            class="px-4 py-2 bg-red-700 text-white rounded-2xl inline-block font-semibold leading-relaxed">
            {{ t("ContactUs") }}
          </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-wrap items-center justify-between py-6">
      <TemBaoNavbar />
    </div>
  </header>
 <TemBaoBgVideo v-if="isHomePage" />

  <div v-else class="bg-gray-100">
    <section
      class="cover bg-blue-teal-gradient relative  px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden flex items-center" :class="{ 'min-h-screen': isHomePage, 'py-48': isHomePage }"
    >
      <div class="h-full absolute top-0 left-0 right-0 z-0">
        <img
          src="https://trello.com/1/cards/6419d45c1db3bb42879b9595/attachments/641b7a85a9a9c692b8b7392a/previews/641b7a85a9a9c692b8b73979/download/334727259_543079174629539_7373861307719555361_n.jpg"
          alt="" class="w-full h-full object-cover opacity-60"
        >
        
      </div>

      <div :class="heroContent">
        <div :class="{ 'mb-12': !isHomePage }">
          <h1 class="text-white text-2xl md:text-5xl xl:text-4xl font-bold leading-tight text-center leading-relaxed"  :class="{ 'text-center': !isHomePage }">
            {{ t("WeProvide") }}
            
          </h1>
          <div class="text-white text-xl md:text-2xl leading-snug mt-4 text-center leading-relaxed">
            <p>
               {{ t("TextToWeProvide") }}
              
            </p>
            <a v-if="isHomePage" href="#" class="px-4 py-2 bg-red-700 text-white rounded-2xl mt-5 inline-block font-semibold leading-relaxed"> {{ t("ContactUs") }}</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.dd-nav-w-6 .dd-nav-h-6 {
    color: white;
}
@media (min-width: 768px) {

    .dd-bg-transparent {
        background: transparent !important;
    }

    .dd-nav-bg-white .dd-nav-bg-gray-50 {
        background-color: transparent !important;
    }

    .dd-nav-bg-gray-100:hover {
        background-color: transparent !important;
    }

    .hover\:dd-nav-bg-gray-100:hover {
        --tw-bg-opacity: 1;
        background-color: transparent;
    }

    .text-custom button {
        color: white !important;

    }

    .text-custom {
        margin-left: 0 !important;
    }

}
</style>
