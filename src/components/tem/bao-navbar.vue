<script setup lang="ts">
import {
    TheDropDownNavbar,
    TheDropDownMenu,
    TheDropDownItem,
    TheDropDownDivideBlock,

} from "vue3-dropdown-navbar";
import { ref } from "vue";

import { useI18n } from 'vue-i18n'
import { availableLocales } from '~/locales/availableLocales'
const switchLocalePath = useSwitchLocalePath()
const route = useRoute();
const router = useRouter()
const dropdownMenu = ref<InstanceType<typeof TheDropDownMenu>>();
onActivated(() => {
    document.documentElement.classList.remove("dd-nav-bg-white");
    document.documentElement.classList.add("dd-nav-transparent");
})
const toggleRedirect = (route: string) => {
    switch (route) {
        
        case "services":
        router.push({
                path: '/services',
            })
            break;
        case "counseling":
        router.push({
                path: '/services/counseling',
            })
            break;
        case "intelligence":
        router.push({
                path: '/services/intelligence',
            })
            break;
        case "investigation":
        router.push({
                path: '/services/investigation',
            })
            break;
        case "osint":
        router.push({
                path: '/services/osint',
            })
            break;
        case "sectors":
        router.push({
                path: '/sectors',
            })
            break;
        case "communication-and-mediation-sector":
        router.push({
                path: '/sectors/communication-and-mediation-sector',
            })
            break;
        case "energy-sector":
        router.push({
                path: '/sectors/energy-sector',
            })
            break;
        case "environment-and-nutrition-sector":
        router.push({
                path: '/sectors/environment-and-nutrition-sector',
            })
            break;
        case "healthcare-sector":
        router.push({
                path: '/sectors/healthcare-sector',
            })
            break;
        case "information-technology-sector":
        router.push({
                path: '/sectors/information-technology-sector',
            })
            break;
        case "legal-rights-sector":
        router.push({
                path: '/sectors/legal-rights-sector',
            })
            break;
        case "national-security":
        router.push({
                path: '/sectors/national-security',
            })
            break;
        case "public-sector":
        router.push({
                path: '/sectors/public-sector',
            })
            break;
        case "telecommunications-sector":
        router.push({
                path: '/sectors/telecommunications-sector',
            })
            break;
        case "knowledge":
        router.push({
                path: '/knowladge',
            })
            break;
        case "lecture":
        router.push({
                path: '/knowladge',
            })
            break;
        case "course":
        router.push({
                path: '/knowladge',
            })
            break;
        case "about-us":
            router.push({
                path: '/about-us',
            })
            break;

        default:
            break;
    }
};

</script>
<template>
    <TheDropDownNavbar class="dd-bg-transparent  w-full">
        <template #logo>
            <h4 class="text-xl text-white">bawareof/bao</h4>
        </template>
        <TheDropDownMenu class="inline-block lg:block font-semibold text-custom" text="SERVICES" ref="dropdownMenu">
            <TheDropDownItem @click="toggleRedirect('services')"> SERVICES </TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('counseling')"> COUNSELING </TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('intelligence')"> INTELLIGENCE </TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('investigation')"> INVESTIGATION </TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('osint')"> OSINT </TheDropDownItem>
        </TheDropDownMenu>
        <TheDropDownMenu class="inline-block lg:block font-semibold text-custom" text="SECTORS" ref="dropdownMenu">
            <TheDropDownItem @click="toggleRedirect('sectors')"> SECTORS </TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('communication-and-mediation-sector')">
                COMMUNICATION-AND-MEDIATION-SECTOR </TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('energy-sector')"> ENERGY-SECTOR </TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('environment-and-nutrition-sector')"> ENVIRONMENT-AND-NUTRITION-SECTOR
            </TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('healthcare-sector')"> HEALTHCARE-SECTOR </TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('information-technology-sector')"> INFORMATION-TECHNOLOGY-SECTOR
            </TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('legal-rights-sector')"> LEGAL-RIGHTS-SECTOR </TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('national-security')"> NATIONAL-SECURITY </TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('public-sector')"> PUBLIC-SECTOR </TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('telecommunications-sector')"> TELECOMMUNICATIONS-SECTOR
            </TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('transport-sector')"> TRANSPORT-SECTOR </TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('supply-sector')"> SUPPLY-SECTOR </TheDropDownItem>
        </TheDropDownMenu>
        <TheDropDownMenu class="inline-block lg:block font-semibold text-custom" text="KNOWLEDGE" ref="dropdownMenu">
            <TheDropDownItem @click="toggleRedirect('knowledge')">KNOWLEDGE</TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('lecture')">LECTURE</TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('course')">COURSE</TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('education')">EDUCATİON</TheDropDownItem>
        </TheDropDownMenu>
        <TheDropDownMenu class="inline-block lg:block font-semibold text-custom" text="LOCATIONS" ref="dropdownMenu">
            <TheDropDownItem @click="toggleRedirect('about-us')">DENMARK – COPENHAGEN</TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('about-us')">ENGLAND – LONDON</TheDropDownItem>
            <TheDropDownItem @click="toggleRedirect('about-us')">NORWAY – OSLO</TheDropDownItem>
        </TheDropDownMenu>

        <TheDropDownItem class=" inline-block lg:block font-semibold text-custom" link="/"><span
                class="text-white">NEWS</span></TheDropDownItem>

        <TheDropDownItem @click="toggleRedirect('careers')" class=" inline-block lg:block font-semibold text-custom"><span
                class="text-white">CAREERS</span></TheDropDownItem>

        <TheDropDownItem @click="toggleRedirect('about-us')" class=" inline-block lg:block font-semibold text-custom"><span
                class="text-white">ABOUT
                US</span></TheDropDownItem>

        <TheDropDownMenu class="inline-block lg:block font-semibold text-custom" text="LANG" ref="dropdownMenu">
            <TheDropDownItem v-for="lang in availableLocales" :propKey="lang.iso" :link="switchLocalePath(lang.iso)"> {{
                lang.name }}</TheDropDownItem>

    </TheDropDownMenu>
</TheDropDownNavbar></template>