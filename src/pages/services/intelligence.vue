<script setup lang="ts">
const { t } = useLang()
</script>

<template>
    <section class="relative bg-white px-4 sm:px-8 lg:px-8 xl:px-20 2xl:px-64 py-6 lg:py-24">

        <div class="flex flex-col md:flex-row lg:-mx-8">
            <div class="w-full lg:w-1/2 lg:px-8">
                <div class="bg-[url('/counseling-card.jpeg')] bg-cover bg-center w-full h-72 rounded-lg">
                    
        <img
          src=""
          alt="" class="w-full opacity-60"
        > 
    
                </div>

                <p class="italic text-sm mt-2 text-right">Video description or small word</p>
            </div>

            <div class="w-full lg:w-1/2 lg:px-8">
                <div class="flex">
                    <div>
                        <div class="w-4 h-4 mt-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div class="ml-8">
                        
                        <p class=" leading-relaxed">    {{ t("IntelligenceParagraph1") }} </p>
                    </div>
                </div>

                <div class="flex mt-4">
                    <div>
                        <div class="w-4 h-4 mt-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div class="ml-8">
                        <p class=" leading-relaxed">    {{ t("IntelligenceParagraph2") }} </p>
                    </div>
                </div>
                <!-- Tekrarlanacak yer -->
                <div class="flex mt-4">
                    <div>
                        <div class="w-4 h-4 mt-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div class="ml-8">
                        <p class=" leading-relaxed">    {{ t("IntelligenceParagraph3") }} </p>
                    </div>
                </div>
                <!-- Tekrarlanacak yer -->
                  <!-- Tekrarlanacak yer -->
                  <div class="flex mt-4">
                    <div>
                        <div class="w-4 h-4 mt-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div class="ml-8">
                        <p class=" leading-relaxed">    {{ t("IntelligenceParagraph4") }} </p>
                    </div>
                </div>
                <!-- Tekrarlanacak yer -->
                  <!-- Tekrarlanacak yer -->
                  <div class="flex mt-4">
                    <div>
                        <div class="w-4 h-4 mt-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div class="ml-8">
                        <p class=" leading-relaxed">    {{ t("IntelligenceParagraph5") }} </p>
                    </div>
                </div>
                <!-- Tekrarlanacak yer -->
            </div>
        </div>


    </section>
</template>
