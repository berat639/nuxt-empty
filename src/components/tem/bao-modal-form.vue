
<script setup lang="ts">
const modalStore = useModalStore();
const divMain = 'mt-[10%] w-1/3 h-fit border border-black rounded bg-white text-center'
const divHeader = 'py-4 text-3xl font-bold'
const divButton = 'mx-auto my-4 p-2 w-16 border border-black rounded bg-indigo-800 hover:bg-indigo-300' +
               ' text-white hover:text-gray-700 font-bold cursor-pointer'
</script>


<template>
    <transition name="modal-fade">
      <div class="modal-overlay z-50" v-if="modalStore.displayModal" @click="modalStore.closeModal()">
        <div :class="divMain" @click.stop>
          <div :class="divHeader">
            {{ modalStore.modalTitle }}
          </div>
          <p>{{ modalStore.modalText }}</p>
          <slot/>
          <div :class="divButton" @click="modalStore.closeModal()">
            OK
          </div>
        </div>
      </div>
    </transition>
  </template>
  
<style scoped>
.modal-overlay {
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   justify-content: center;
   background-color: #000000da;
}
.modal-fade-enter,
.modal-fade-leave-to {
   opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
   transition: opacity 0.5s ease;
}
</style>