<script setup lang="ts">
const { t } = useLang()
</script>

<template>
    <section class="relative bg-white px-4 sm:px-8 lg:px-8 xl:px-20 2xl:px-64 py-6 lg:py-24">

        <div class="flex flex-col md:flex-row lg:-mx-8">
            <div class="w-full lg:w-1/2 lg:px-8">
                <div class="bg-gray-400 w-full h-72 rounded-lg"></div>

                <p class="italic text-sm mt-2 text-right">Video description or small word</p>
            </div>

            <div class="w-full lg:w-1/2 lg:px-8">
                <div class="flex">
                    <div>
                        <div class="w-4 h-4 mt-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div class="ml-8">
                        <h4 class="text-xl font-bold">List</h4>
                        <p class="mt-2 leading-relaxed">Our comprehensive services allow you to receive all needed dental
                            care
                            right here in our state-of-art
                            office – from dental cleanings and fillings to dental implants and extractions.</p>
                    </div>
                </div>

                <div class="flex mt-4">
                    <div>
                        <div class="w-4 h-4 mt-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div class="ml-8">
                        <h4 class="text-xl font-bold">List</h4>
                        <p class="mt-2 leading-relaxed">Your treatment plan will perfectly match your needs, lifestyle, and
                            goals.
                            Even if it’s been years
                            since you last visited the dentist, we can help. Our comfortable office, compassionate team, and
                            minimally-invasive treatments will help you feel completely at ease.</p>
                    </div>
                </div>
                <!-- Tekrarlanacak yer -->
                <div class="flex mt-4">
                    <div>
                        <div class="w-4 h-4 mt-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div class="ml-8">
                        <h4 class="text-xl font-bold">List </h4>
                    </div>
                </div>
                <!-- Tekrarlanacak yer -->
            </div>
        </div>


    </section>
</template>
