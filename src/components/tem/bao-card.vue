<script setup lang="ts">
const { t } = useLang()
interface Props {
    title?: any,
    listDesc?: any,
    url?: string,
    image?: string
}
const props = defineProps<Props>()
const backgroundStyles = (img?: string) => {
    return {
        'background-image': `url(${img})`,
    }
}
</script>
<template>
    <div
        class="min-h-116 bg-orange-600 max-w-xl w-full rounded-xl shadow-lg text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer" :style="backgroundStyles(props.image)">
        <div class="bg-black bg-opacity-60 p-10 rounded-xl h-full">
            <h1 class="mt-5 text-3xl text-gray-100 leading-snug font-bold min-h-33 leading-relaxed">
                {{ t(props.title) }}
            </h1>
            <div class="mt-20 max-h-96">
                <span class=" text-md leading-relaxed overflow-y-auto"> {{ t(props.listDesc) }} </span>
            </div>
            <div class="mt-16 flex justify-between ">
                <span class="p-3 pl-0 font-bold">BAO</span>
                <NuxtLink :to="localePath('')">
                    <span
                        class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black leading-relaxed">
                        {{ t("Read") }}
                    </span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>  