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
        <div class="carousel__item bg-[url('https://picsum.photos/200/300?random=1')] bg-no-repeat bg-cover flex h-full items-center justify-center  text-black ">
          asdsadsadsassdadsadsadsad sdadsadsa sadsa dsadssdasdsadsadsa asdsad sa sads dsd sd    asdsadsadsassdadsadsadsad sdadsadsa sadsa dsadssdasdsadsadsa asdsad sa sads dsd sd   asdsadsadsassdadsadsadsad sdadsadsa sadsa dsadssdasdsadsadsa asdsad sa sads dsd sd   asdsadsadsassdadsadsadsad sdadsadsa sadsa dsadssdasdsadsadsa asdsad sa sads dsd sd
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
  overflow-y: scroll;
}
</style>
