<script setup lang="ts">
const { t } = useLang()
const modalStore =useModalStore()
</script>

<template>
  <section class="relative bg-gray-100 px-4 sm:px-8 lg:px-8 xl:px-40 2xl:px-64 py-16 lg:py-32">
    <button
            label="Login"
            icon="pi pi-sign-in"
            @click="modalStore.showModal('adsa','sadsa')"
        ></button>
  </section>
</template>
