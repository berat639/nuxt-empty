import {defineStore} from 'pinia';

export const useModalStore = defineStore('modalStore', () => {
    const displayModal = ref(false)
    const modalTitle = ref('')
    const modalText = ref('')
  
    function showModal(title: string, text: string): void {
        modalTitle.value = title;
        modalText.value = text;
        displayModal.value = true;
    }
    function  closeModal(): void {
        displayModal.value = false;
    }

    return { displayModal,modalText,modalTitle,showModal,closeModal}
  })

