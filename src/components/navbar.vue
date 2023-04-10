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
            bawareof/bao
        </template>
        <TheDropDownItem class=" inline-block md:hidden lg:block font-semibold" link="/"><span class="text-white">Home</span></TheDropDownItem>
        <TheDropDownMenu class="inline-block md:hidden lg:block font-semibold text-custom"  text="Dropdown 1" ref="dropdownMenu">
            <TheDropDownItem>Dropdown Item 1</TheDropDownItem>
            <TheDropDownItem>Dropdown Item 2</TheDropDownItem> 
        </TheDropDownMenu> 
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
    color: white!important;
}
}
</style>