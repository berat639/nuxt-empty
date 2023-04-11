<script setup lang="ts">
import {
    TheDropDownNavbar,
    TheDropDownMenu,
    TheDropDownItem,
    TheDropDownDivideBlock,

} from "vue3-dropdown-navbar";
import { ref } from "vue";

const dropdownMenu = ref<InstanceType<typeof TheDropDownMenu>>();
onActivated(() => {
    document.documentElement.classList.remove("dd-nav-bg-white");
    document.documentElement.classList.add("dd-nav-transparent");
})
const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dd-nav-dark");
};
</script>

<template>
    <TheDropDownNavbar class="dd-bg-transparent  w-full">
        <template #logo>
            <h4 class="text-xl text-white">bawareof/bao</h4>
        </template>
        <TheDropDownMenu class="inline-block lg:block font-semibold text-custom" text="SERVICES" ref="dropdownMenu">
            <TheDropDownItem>Dropdown Item 1</TheDropDownItem>
            <TheDropDownItem>Dropdown Item 2</TheDropDownItem>
        </TheDropDownMenu>
        <TheDropDownMenu class="inline-block lg:block font-semibold text-custom" text="SECTORS" ref="dropdownMenu">
            <TheDropDownItem>Dropdown Item 1</TheDropDownItem>
            <TheDropDownItem>Dropdown Item 2</TheDropDownItem>
        </TheDropDownMenu>
        <TheDropDownMenu class="inline-block lg:block font-semibold text-custom" text="KNOWLEDGE" ref="dropdownMenu">
            <TheDropDownItem>Dropdown Item 1</TheDropDownItem>
            <TheDropDownItem>Dropdown Item 2</TheDropDownItem>
        </TheDropDownMenu>
        <TheDropDownMenu class="inline-block lg:block font-semibold text-custom" text="LOCATIONS" ref="dropdownMenu">
            <TheDropDownItem>Dropdown Item 1</TheDropDownItem>
            <TheDropDownItem>Dropdown Item 2</TheDropDownItem>
        </TheDropDownMenu>
        <TheDropDownItem class=" inline-block lg:block font-semibold text-custom" link="/"><span
                class="text-white">NEWS</span></TheDropDownItem>
        <TheDropDownItem class=" inline-block lg:block font-semibold text-custom" link="/"><span
                class="text-white">CAREERS</span></TheDropDownItem>
        <TheDropDownItem class=" inline-block lg:block font-semibold text-custom" link="/"><span class="text-white">ABOUT
                US</span></TheDropDownItem>

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

}</style>