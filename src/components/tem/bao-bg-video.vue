

<script setup>
import VideoBackground from 'vue-responsive-video-background-player'
const route = useRoute()
const isHomePage = computed(() => route.path === '/')

const heroContent = computed(() => {
  return {
    'lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16 mx-auto': isHomePage.value,
    'w-full relative z-10 h-100 lg:mt-64': !isHomePage.value,
  }
})
</script>

<template>
    <ClientOnly>
        <div class="bg-gray-100">
    <section
      class="cover bg-blue-teal-gradient relative  px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden flex items-center" :class="{ 'min-h-screen': isHomePage, 'py-48': isHomePage }"
    >
      <div class="h-full absolute top-0 left-0 right-0 z-0">
        <VideoBackground  src="/oceans.mp4" :autoplay="true" style=" height: 100%;" overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"> 
        </VideoBackground>
      </div>

      <div class="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16 mx-auto">
        <div :class="{ 'mb-12': !isHomePage }">
          <h1 class="text-white text-2xl md:text-5xl xl:text-4xl font-bold leading-tight text-center" :class="{ 'text-center': !isHomePage }">
            We provide security for
            digital Denmark
          </h1>
          <div class="text-white text-xl md:text-2xl leading-snug mt-4 text-center">
            <p>
              As a global cybersecurity firm, we have made
              it our mission to provide
              unparalleled security solutions that
              protect against ever-evolving threats.
            </p>
            <a v-if="isHomePage" href="#" class="px-4 py-2 bg-red-700 text-white rounded-2xl mt-5 inline-block font-semibold">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  </div>
     
    </ClientOnly>
</template>