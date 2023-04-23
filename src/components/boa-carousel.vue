<script setup lang="ts"> 

import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css' 
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(false)
const handleResize = () => {
  isMobile.value = window.innerWidth <= 768
}
const { t } = useLang()
onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
 <section class="relative bg-gray-100 xs:px-4 sm:px-8 lg:px-8 xl:px-12 2xl:px-16 py-16 lg:py-32">   
      <Carousel :items-to-show="isMobile?1.50:2" :wrap-around="true" :transition="500">
        <!-- <Slide  :key="2">
         <div class="min-h-116 bg-orange-600 max-w-xl w-full rounded-xl  shadow-lg text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer" style="background-image: url(https://images.unsplash.com/photo-1614527333177-d27e9e29ff98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=950&amp;q=80);">
                <div class="bg-black bg-opacity-60 p-10 rounded-xl h-full">
                    <h1 class="mt-5 text-3xl text-gray-100 leading-snug  min-h-33">One small step for man one giant leap for mankind
                    </h1>
                    <div class="mt-20">
                        <span class="text-xl">2 - </span>
                        <span class="font-bold text-xl">Neil Armstrong</span>
                    </div>
                    <div class="mt-16 flex justify-between ">
                        <span class="p-3 pl-0 font-bold">Travel</span>
                        <span class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black ">Paid
              Membership</span>
                    </div>
                </div>
              </div>
        </Slide> -->
        <Slide  :key="2">
         <div class="min-h-116 bg-orange-600 max-w-xl w-full rounded-xl shadow-lg text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer" style="background-image: url(https://images.unsplash.com/photo-1614527333177-d27e9e29ff98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=950&amp;q=80);">
                <div class="bg-black bg-opacity-60 p-10 rounded-xl h-full">
                    <h1 class="mt-5 text-3xl text-gray-100 leading-snug font-bold  min-h-33 leading-relaxed"> {{ t("NationalSecurityParagraph0") }}
                    </h1>
                    <div class="mt-20">
                       <span class=" text-xl leading-relaxed"> {{ t("NationalSecurityParagraph1") }}</span>
                    </div>
                    <div class="mt-16 flex justify-between ">
                        <span class="p-3 pl-0 font-bold">BAO</span>
                        <span  class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black leading-relaxed"  onclick="window.location.href='/sectors/national-security'"> {{ t("Read") }}</span>
                    </div>
                </div>
              </div>
        </Slide>
        <Slide  :key="2">
         <div class="min-h-116 bg-orange-600 max-w-xl w-full rounded-xl shadow-lg text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer" style="background-image: url(https://images.unsplash.com/photo-1614527333177-d27e9e29ff98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=950&amp;q=80);">
                <div class="bg-black bg-opacity-60 p-10 rounded-xl h-full">
                    <h1 class="mt-5 text-3xl text-gray-100 leading-snug font-bold  min-h-33 leading-relaxed"> {{ t("PublicSectorParagraph0") }}
                    </h1>
                    <div class="mt-20">
                       <span class=" text-xl leading-relaxed"> {{ t("PublicSectorParagraph1") }}</span>
                    </div>
                    <div class="mt-16 flex justify-between ">
                        <span class="p-3 pl-0 font-bold">BAO</span>
                        <span class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black leading-relaxed" onclick="window.location.href='/sectors/public-sector'"> {{ t("Read") }}</span>
                    </div>
                </div>
              </div>
        </Slide>
        <Slide  :key="2">
         <div class="min-h-116 bg-orange-600 max-w-xl w-full rounded-xl shadow-lg text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer" style="background-image: url(https://images.unsplash.com/photo-1614527333177-d27e9e29ff98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=950&amp;q=80);">
                <div class="bg-black bg-opacity-60 p-10 rounded-xl h-full">
                    <h1 class="mt-5 text-3xl text-gray-100 leading-snug font-bold  min-h-33 leading-relaxed"> {{ t("FinanceSectorParagraph0") }}
                    </h1>
                    <div class="mt-20">
                       <span class=" text-xl leading-relaxed"> {{ t("FinanceSectorParagraph1") }}</span>
                    </div>
                    <div class="mt-16 flex justify-between ">
                        <span class="p-3 pl-0 font-bold">BAO</span>
                        <span class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black leading-relaxed" onclick="window.location.href='/sectors/public-sector'"> {{ t("Read") }}</span>
                    </div>
                </div>
              </div>
        </Slide>
        <Slide  :key="2">
         <div class="min-h-116 bg-orange-600 max-w-xl w-full rounded-xl shadow-lg text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer" style="background-image: url(https://images.unsplash.com/photo-1614527333177-d27e9e29ff98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=950&amp;q=80);">
                <div class="bg-black bg-opacity-60 p-10 rounded-xl h-full">
                    <h1 class="mt-5 text-3xl text-gray-100 leading-snug font-bold  min-h-33 leading-relaxed"> {{ t("EnergySectorParagraph0") }}
                    </h1>
                    <div class="mt-20">
                       <span class=" text-xl leading-relaxed"> {{ t("EnergySectorParagraph1") }}</span>
                    </div>
                    <div class="mt-16 flex justify-between ">
                        <span class="p-3 pl-0 font-bold">BAO</span>
                        <span class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black leading-relaxed" onclick="window.location.href='/sectors/energy-sector'"> {{ t("Read") }}</span>
                    </div>
                </div>
              </div>
        </Slide>
        <Slide  :key="2">
         <div class="min-h-116 bg-orange-600 max-w-xl w-full rounded-xl shadow-lg text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer" style="background-image: url(https://images.unsplash.com/photo-1614527333177-d27e9e29ff98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=950&amp;q=80);">
                <div class="bg-black bg-opacity-60 p-10 rounded-xl h-full">
                    <h1 class="mt-5 text-3xl text-gray-100 leading-snug font-bold  min-h-33 leading-relaxed"> {{ t("SupplySectorParagraph0") }}
                    </h1>
                    <div class="mt-20">
                       <span class=" text-xl leading-relaxed"> {{ t("SupplySectorParagraph1") }}</span>
                    </div>
                    <div class="mt-16 flex justify-between ">
                        <span class="p-3 pl-0 font-bold">BAO</span>
                        <span class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black leading-relaxed" onclick="window.location.href='/sectors/supply-sector'"> {{ t("Read") }}</span>
                    </div>
                </div>
              </div>
        </Slide>
        <Slide  :key="2">
         <div class="min-h-116 bg-orange-600 max-w-xl w-full rounded-xl shadow-lg text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer" style="background-image: url(https://images.unsplash.com/photo-1614527333177-d27e9e29ff98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=950&amp;q=80);">
                <div class="bg-black bg-opacity-60 p-10 rounded-xl h-full">
                    <h1 class="mt-5 text-3xl text-gray-100 leading-snug font-bold  min-h-33 leading-relaxed"> {{ t("HealtchcareSectorParagraph0") }}
                    </h1>
                    <div class="mt-20">
                       <span class=" text-xl leading-relaxed"> {{ t("HealtchcareSectorParagraph1") }}</span>
                    </div>
                    <div class="mt-16 flex justify-between ">
                        <span class="p-3 pl-0 font-bold">BAO</span>
                        <span class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black leading-relaxed" onclick="window.location.href='/sectors/healthcare-sector'"> {{ t("Read") }}</span>
                    </div>
                </div>
              </div>
        </Slide>
        <Slide  :key="2">
         <div class="min-h-116 bg-orange-600 max-w-xl w-full rounded-xl shadow-lg text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer" style="background-image: url(https://images.unsplash.com/photo-1614527333177-d27e9e29ff98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=950&amp;q=80);">
                <div class="bg-black bg-opacity-60 p-10 rounded-xl h-full">
                    <h1 class="mt-5 text-3xl text-gray-100 leading-snug font-bold  min-h-33 leading-relaxed"> {{ t("CommunicationAndMediationSectorParagraph0") }}
                    </h1>
                    <div class="mt-20">
                       <span class=" text-xl leading-relaxed"> {{ t("CommunicationAndMediationSectorParagraph1") }}</span>
                    </div>
                    <div class="mt-16 flex justify-between ">
                        <span class="p-3 pl-0 font-bold">BAO</span>
                        <span class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black leading-relaxed" onclick="window.location.href='/sectors/communication-and-mediation-sector'"> {{ t("Read") }}</span>
                    </div>
                </div>
              </div>
        </Slide>
        <Slide  :key="2">
         <div class="min-h-116 bg-orange-600 max-w-xl w-full rounded-xl shadow-lg text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer" style="background-image: url(https://images.unsplash.com/photo-1614527333177-d27e9e29ff98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=950&amp;q=80);">
                <div class="bg-black bg-opacity-60 p-10 rounded-xl h-full">
                    <h1 class="mt-5 text-3xl text-gray-100 leading-snug font-bold  min-h-33 leading-relaxed"> {{ t("TransportSectorParagraph0") }}
                    </h1>
                    <div class="mt-20">
                       <span class=" text-xl leading-relaxed"> {{ t("TransportSectorParagraph1") }}</span>
                    </div>
                    <div class="mt-16 flex justify-between ">
                        <span class="p-3 pl-0 font-bold">BAO</span>
                        <span class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black leading-relaxed" onclick="window.location.href='/sectors/transport-sector'"> {{ t("Read") }}</span>
                    </div>
                </div>
              </div>
        </Slide>
        <Slide  :key="2">
         <div class="min-h-116 bg-orange-600 max-w-xl w-full rounded-xl shadow-lg text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer" style="background-image: url(https://images.unsplash.com/photo-1614527333177-d27e9e29ff98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=950&amp;q=80);">
                <div class="bg-black bg-opacity-60 p-10 rounded-xl h-full">
                    <h1 class="mt-5 text-3xl text-gray-100 leading-snug font-bold  min-h-33 leading-relaxed"> {{ t("InformationTechnologySectorParagraph0") }}
                    </h1>
                    <div class="mt-20">
                       <span class=" text-xl leading-relaxed"> {{ t("InformationTechnologySectorParagraph1") }}</span>
                    </div>
                    <div class="mt-16 flex justify-between ">
                        <span class="p-3 pl-0 font-bold">BAO</span>
                        <span class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black leading-relaxed" onclick="window.location.href='/sectors/information-technology-sector'"> {{ t("Read") }}</span>
                    </div>
                </div>
              </div>
        </Slide>
        <Slide  :key="2">
         <div class="min-h-116 bg-orange-600 max-w-xl w-full rounded-xl shadow-lg text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer" style="background-image: url(https://images.unsplash.com/photo-1614527333177-d27e9e29ff98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=950&amp;q=80);">
                <div class="bg-black bg-opacity-60 p-10 rounded-xl h-full">
                    <h1 class="mt-5 text-3xl text-gray-100 leading-snug font-bold  min-h-33 leading-relaxed"> {{ t("TelecomunicationSectorParagraph0") }}
                    </h1>
                    <div class="mt-20">
                       <span class=" text-xl leading-relaxed"> {{ t("TelecomunicationSectorParagraph1") }}</span>
                    </div>
                    <div class="mt-16 flex justify-between ">
                        <span class="p-3 pl-0 font-bold">BAO</span>
                        <span class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black leading-relaxed" onclick="window.location.href='/sectors/telecommunications-sector'"> {{ t("Read") }}</span>
                    </div>
                </div>
              </div>
        </Slide>
        <Slide  :key="2">
         <div class="min-h-116 bg-orange-600 max-w-xl w-full rounded-xl shadow-lg text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer" style="background-image: url(https://images.unsplash.com/photo-1614527333177-d27e9e29ff98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=950&amp;q=80);">
                <div class="bg-black bg-opacity-60 p-10 rounded-xl h-full">
                    <h1 class="mt-5 text-3xl text-gray-100 leading-snug font-bold  min-h-33 leading-relaxed"> {{ t("EnviromentAndNutritionParagraph0") }}
                    </h1>
                    <div class="mt-20">
                       <span class=" text-xl leading-relaxed"> {{ t("EnviromentAndNutritionParagraph1") }}</span>
                    </div>
                    <div class="mt-16 flex justify-between ">
                        <span class="p-3 pl-0 font-bold">BAO</span>
                        <span class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black leading-relaxed" onclick="window.location.href='/sectors/environment-and-nutrition-sector'"> {{ t("Read") }}</span>
                    </div>
                </div>
              </div>
        </Slide>
        <Slide  :key="2">
         <div class="min-h-116 bg-orange-600 max-w-xl w-full rounded-xl shadow-lg text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer" style="background-image: url(https://images.unsplash.com/photo-1614527333177-d27e9e29ff98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=950&amp;q=80);">
                <div class="bg-black bg-opacity-60 p-10 rounded-xl h-full">
                    <h1 class="mt-5 text-3xl text-gray-100 leading-snug font-bold  min-h-33 leading-relaxed"> {{ t("LegalRightSectorParagraph0") }}
                    </h1>
                    <div class="mt-20">
                       <span class=" text-xl leading-relaxed"> {{ t("LegalRightSectorParagraph1") }}</span>
                    </div>
                    <div class="mt-16 flex justify-between ">
                        <span class="p-3 pl-0 font-bold">BAO</span>
                        <span class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black leading-relaxed" onclick="window.location.href='/sectors/legal-rights-sector'"> {{ t("Read") }}</span>
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
  border-radius: 0.75rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  transform: rotateY(0) scale(1.1);
}
.carousel__item{
  width: 100%;
  height: 30vh;
  height: min-content;
  overflow-y: scroll;
  
}
</style>
