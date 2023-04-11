<script setup lang="ts">
import {
  TheDropDownItem,
  TheDropDownMenu,
  TheDropDownNavbar,

} from 'vue3-dropdown-navbar'
import { ref } from 'vue'

const dropdownMenu = ref<InstanceType<typeof TheDropDownMenu>>()
onActivated(() => {
  document.documentElement.classList.remove('dd-nav-bg-white')
  document.documentElement.classList.add('dd-nav-transparent')
})
function toggleDarkMode() {
  document.documentElement.classList.toggle('dd-nav-dark')
}
</script>

<template>
  <TheDropDownNavbar class="dd-bg-transparent  w-full">
    <template #logo>
      <h4 class="text-xl text-white">
        bawareof/bao
      </h4>
    </template>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom" text="SERVICES">
      <TheDropDownItem>Dropdown Item 1</TheDropDownItem>
      <TheDropDownItem>Dropdown Item 2</TheDropDownItem>
    </TheDropDownMenu>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom" text="SECTORS">
      <TheDropDownItem>Dropdown Item 1</TheDropDownItem>
      <TheDropDownItem>Dropdown Item 2</TheDropDownItem>
    </TheDropDownMenu>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom" text="KNOWLEDGE">
      <TheDropDownItem>Dropdown Item 1</TheDropDownItem>
      <TheDropDownItem>Dropdown Item 2</TheDropDownItem>
    </TheDropDownMenu>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom" text="LOCATIONS">
      <TheDropDownItem>Dropdown Item 1</TheDropDownItem>
      <TheDropDownItem>Dropdown Item 2</TheDropDownItem>
    </TheDropDownMenu>
    <TheDropDownItem class=" inline-block lg:block font-semibold text-custom" link="/">
      <span
        class="text-white"
      >NEWS</span>
    </TheDropDownItem>
    <TheDropDownItem class=" inline-block lg:block font-semibold text-custom" link="/">
      <span
        class="text-white"
      >CAREERS</span>
    </TheDropDownItem>
    <TheDropDownItem class=" inline-block lg:block font-semibold text-custom" link="/">
      <span class="text-white">ABOUT
        US</span>
    </TheDropDownItem>
  </TheDropDownNavbar>
</template>

<style>
.dd-nav-w-6 .dd-nav-h-6 {
    color: white;
}

@media (min-width: 768px) {

    .dd-bg-transparent {
        background: transparent !important;
    }

    .dd-nav-bg-white .dd-nav-bg-gray-50 {
        background-color: transparent !important;
    }

    .dd-nav-bg-gray-100:hover {
        background-color: transparent !important;
    }

    .hover\:dd-nav-bg-gray-100:hover {
        --tw-bg-opacity: 1;
        background-color: transparent;
    }

    .text-custom button {
        color: white !important;

    }

    .text-custom {
        margin-left: 0 !important;
    }

}
</style>
