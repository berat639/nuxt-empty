<script setup lang="ts">

import {
  TheDropDownItem,
  TheDropDownMenu,
  TheDropDownNavbar,

} from 'vue3-dropdown-navbar'
import { ref } from 'vue'

import { availableLocales } from '~/locales/availableLocales'

const switchLocalePath = useSwitchLocalePath()
const dropdownMenu = ref<InstanceType<typeof TheDropDownMenu>>()
  const { t } = useLang()
</script>

<template>
  <TheDropDownNavbar class="dd-bg-transparent  w-full">
    <template #logo>
      <NuxtLink to="/">
        <h4 class="text-3xl font-bold text-white">
          bawareof / <span class="text-red-700">bao</span>
        </h4>
      </NuxtLink>
    </template>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom leading-relaxed" text="SERVICES">
      <TheDropDownItem link="/services">
        {{ t("SERVICES") }}
      </TheDropDownItem>
      <TheDropDownItem link="/services/counseling">
        {{ t("COUNSELING") }}
      </TheDropDownItem>
      <TheDropDownItem link="/services/intelligence">
        {{ t("INTELLIGENCE") }} 
      </TheDropDownItem>
      <TheDropDownItem link="/services/investigation">
        {{ t("INVESTIGATION") }} 
      </TheDropDownItem>
      <TheDropDownItem link="/services/osint">
        {{ t("OSINT") }} 
      </TheDropDownItem>
    </TheDropDownMenu>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom  leading-relaxed" text="SECTORS">
      <TheDropDownItem link="/sectors">
        {{ t("SECTORS") }} 
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/communication-and-mediation-sector">
        {{ t("COMMUNICATION-AND-MEDIATION-SECTOR") }} 
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/energy-sector">
        {{ t("ENERGY-SECTOR") }} 
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/environment-and-nutrition-sector">
        {{ t("ENVIRONMENT-AND-NUTRITION-SECTOR") }} 
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/Finance-Sector">
        {{ t("FINANCE-SECTOR") }} 
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/healthcare-sector">
        {{ t("HEALTHCARE-SECTOR") }}
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/information-technology-sector">
        {{ t("INFORMATION-TECHNOLOGY-SECTOR") }} 
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/legal-rights-sector">
        {{ t("LEGAL-RIGHTS-SECTOR") }} 
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/national-security">
        {{ t("NATIONAL-SECURITY") }} 
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/public-sector">
        {{ t("PUBLIC-SECTOR") }}  
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/telecommunications-sector">
        {{ t("TELECOMMUNICATIONS-SECTOR") }} 
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/transport-sector">
        {{ t("TRANSPORT-SECTOR") }} 
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/supply-sector">
        {{ t("SUPPLY-SECTOR") }}
      </TheDropDownItem>
    </TheDropDownMenu>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom  leading-relaxed" text="KNOWLEDGE">
      <TheDropDownItem link="/knowledge">
        {{ t("KNOWLEDGE") }}  
      </TheDropDownItem>
      <TheDropDownItem link="/about-us">
        {{ t("LECTURE") }} 
      </TheDropDownItem>
      <TheDropDownItem link="/about-us">
        {{ t("COURSE") }}
      </TheDropDownItem>
      <TheDropDownItem link="/about-us">
        {{ t("EDUCATİON") }}  
      </TheDropDownItem>
    </TheDropDownMenu>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom  leading-relaxed" text="LOCATIONS">
      <TheDropDownItem link="/about-us">
        {{ t("DENMARK – COPENHAGEN") }} 
      </TheDropDownItem>
      <TheDropDownItem link="/about-us">
        {{ t("ENGLAND – LONDON") }} 
      </TheDropDownItem>
      <TheDropDownItem link="/about-us">
        {{ t("NORWAY – OSLO") }} 
      </TheDropDownItem>
    </TheDropDownMenu>

    <TheDropDownItem class=" inline-block lg:block font-semibold text-custom  leading-relaxed" link="/">
      <span
        class="text-white"
      > {{ t("NEWS") }} </span>
    </TheDropDownItem>

    <TheDropDownItem class=" inline-block lg:block font-semibold text-custom  leading-relaxed" link="/about-us">
      <span
        class="text-white"
      > {{ t("CAREERS") }} </span>
    </TheDropDownItem>

    <TheDropDownItem class=" inline-block lg:block font-semibold text-custom  leading-relaxed" link="/about-us">
      <span
        class="text-white"
      >{{ t("ABOUT US") }}</span>
    </TheDropDownItem>

    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom  leading-relaxed" text="LANG">
      <TheDropDownItem v-for="lang in availableLocales" :key="lang.iso" :prop-key="lang.iso" :link="switchLocalePath(lang.iso)">
        {{
          lang.name }}
      </TheDropDownItem>
    </TheDropDownMenu>
  </TheDropDownNavbar>
</template>
