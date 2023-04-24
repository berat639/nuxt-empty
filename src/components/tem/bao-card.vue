<script setup lang="ts">
interface Props {
    title?: string,
    listDesc?: string
}
const props = defineProps<Props>()

</script>
<template>
     <div class="min-h-116 bg-orange-600 max-w-xl w-full rounded-xl shadow-lg text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer" style="background-image: url(https://images.unsplash.com/photo-1614527333177-d27e9e29ff98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=950&amp;q=80);">
                <div class="bg-black bg-opacity-60 p-10 rounded-xl h-full">
                    <h1 class="mt-5 text-3xl text-gray-100 leading-snug font-bold  min-h-33 leading-relaxed"> {{ t("NationalSecurityParagraph0") }}{{ props.title }}
                    </h1>
                    <div class="mt-15 max-h-96	">
                       <span class=" text-xl leading-relaxed"> {{ t("NationalSecurityParagraph1") }}{{ props.listDesc }}</span>
                    </div>
                    <div class="mt-16 flex justify-between ">
                        <span class="p-3 pl-0 font-bold">BAO</span>
                        <span  class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black leading-relaxed"  onclick="window.location.href='/sectors/national-security'"> {{ t("Read") }}</span>
                    </div>
                </div>
              </div>
</template>