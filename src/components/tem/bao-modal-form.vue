
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
          Contact Form
        </div>
        <div>
          <div class="p-6 border border-gray-300 sm:rounded-md">
            <form method="POST" action="/">
              <label class="block mb-6">
                <span class="text-gray-700">Your name</span>
                <input type="text" name="name" class="
              block
              w-full
              mt-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            " placeholder="Joe Bloggs" />
              </label>
              <label class="block mb-6">
                <span class="text-gray-700">Email address</span>
                <input name="email" type="email" class="
              block
              w-full
              mt-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            " placeholder="joe.bloggs@example.com" required />
              </label>
              <label class="block mb-6">
                <span class="text-gray-700">Message</span>
                <textarea name="message" class="
              block
              w-full
              mt-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            " rows="3" placeholder="Tell us what you're thinking about..."></textarea>
              </label>
              <div class="mb-6">
                <button type="submit" class="
              h-10
              px-5
              text-indigo-100
              bg-indigo-700
              rounded-lg
              transition-colors
              duration-150
              focus:shadow-outline
              hover:bg-indigo-800
            ">
                  Contact Us
                </button>
              </div>

            </form>
          </div>
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