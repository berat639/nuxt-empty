<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
  },
})
</script>

<template>
   <section class="relative bg-gray-100 xs:px-4 sm:px-8 lg:px-8 xl:px-12 2xl:px-16 py-16 lg:py-32"> 
      <Carousel :items-to-show="3.95" :wrap-around="true" :transition="500">
        <Slide v-for="slide in 30" :key="slide">
          <div class="flex h-screen justify-center items-center flex-col">
    <div
        class="w-full bg-[url('https://placekitten.com/1400')] bg-cover bg-center">
        
        <div class="w-full h-full flex backdrop-brightness-50 ">
          
                <h4 class="text-white w-1/2 text-left ml-3">title</h4>
        </div>
    </div>
</div>
           
        </Slide>
      </Carousel>
  </section>
</template>

<style scoped>
.carousel__slide {
  padding: 10px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
.carousel__item{
  width: 100%;
  height: 30vh;
  height: min-content;
  overflow-y: scroll;
}
</style>
