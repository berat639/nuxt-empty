
<script setup lang="ts">
const { t } = useLang()
</script>
<template>
    <main class="w-full">
        
                <BaoHalfHeader />
             
       
        <section class="relative bg-gray-100 px-4 sm:px-8 lg:px-8 xl:px-40 2xl:px-64 py-16 lg:py-32">
          
            {{ t("hello") }}

        </section>
       <BaoFooter/>
    </main>
</template>