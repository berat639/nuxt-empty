import {defineStore} from 'pinia';

export const useModalStore = defineStore('modalStore', () => {
    const displayModal = ref(false)
    function showModal(): void {
        displayModal.value = true;
    }
    function  closeModal(): void {
        displayModal.value = false;
    }

    return { displayModal,showModal,closeModal}
  })

