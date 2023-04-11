<script>
import Swiper from 'swiper'

export default {
  name: 'MySwiper',
  data() {
    return {
      swiper: null,
      slides: [
        {
          title: 'Slide 1',
          image: 'https://via.placeholder.com/800x500?text=Slide+1',
        },
        {
          title: 'Slide 2asdsadsadsadsadsaadsadsadsadads',
          image: 'https://via.placeholder.com/800x500?text=Slide+2',
        },
        {
          title: 'Slide 3',
          image: 'https://via.placeholder.com/800x500?text=Slide+3',
        },
        {
          title: 'Slide 4',
          image: 'https://via.placeholder.com/800x500?text=Slide+4',
        },
        {
          title: 'Slide 5',
          image: 'https://via.placeholder.com/800x500?text=Slide+5',
        },
      ],
    }
  },
  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },
  beforeUnmount() {
    if (this.swiper)
      this.swiper.destroy()
  },
}
</script>

<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="(slide, index) in slides" :key="index" class="swiper-slide">
        <img :src="slide.image" :alt="slide.title">
        <h3>{{ slide.title }}</h3>
      </div>
    </div>
    <div class="swiper-pagination" />
    <div class="swiper-button-prev" />
    <div class="swiper-button-next" />
  </div>
</template>

<style>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  background-color: #f7f7f7;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  position: relative;
}

.swiper-slide img {
  max-width: 100%;
  height: auto;
}

.swiper-slide h3 {
  font-size: 1.5rem;
  margin-top: 1rem;
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  text-align: center;
}

.swiper-slide-active img {
  transform: scale(1.2);
  transition: transform 300ms;
}

.swiper-slide-active h3 {
  font-size: 2rem;
}
</style>
