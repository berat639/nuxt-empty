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
</script>

<template>
  <TheDropDownNavbar class="dd-bg-transparent  w-full">
    <template #logo>
      <h4 class="text-xl text-white">
        bawareof/bao
      </h4>
    </template>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom" text="SERVICES">
      <TheDropDownItem link="/services">
        SERVICES
      </TheDropDownItem>
      <TheDropDownItem link="/services/counseling">
        COUNSELING
      </TheDropDownItem>
      <TheDropDownItem link="/services/intelligence">
        INTELLIGENCE
      </TheDropDownItem>
      <TheDropDownItem link="/services/investigation">
        INVESTIGATION
      </TheDropDownItem>
      <TheDropDownItem link="/services/osint">
        OSINT
      </TheDropDownItem>
    </TheDropDownMenu>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom" text="SECTORS">
      <TheDropDownItem link="/sectors">
        SECTORS
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/communication-and-mediation-sector">
        COMMUNICATION-AND-MEDIATION-SECTOR
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/energy-sector">
        ENERGY-SECTOR
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/environment-and-nutrition-sector">
        ENVIRONMENT-AND-NUTRITION-SECTOR
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/healthcare-sector">
        HEALTHCARE-SECTOR
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/information-technology-sector">
        INFORMATION-TECHNOLOGY-SECTOR
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/legal-rights-sector">
        LEGAL-RIGHTS-SECTOR
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/national-security">
        NATIONAL-SECURITY
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/public-sector">
        PUBLIC-SECTOR
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/telecommunications-sector">
        TELECOMMUNICATIONS-SECTOR
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/transport-sector">
        TRANSPORT-SECTOR
      </TheDropDownItem>
      <TheDropDownItem link="/sectors/supply-sector">
        SUPPLY-SECTOR
      </TheDropDownItem>
    </TheDropDownMenu>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom" text="KNOWLEDGE">
      <TheDropDownItem link="/knowledge">
        KNOWLEDGE
      </TheDropDownItem>
      <TheDropDownItem link="/about-us">
        LECTURE
      </TheDropDownItem>
      <TheDropDownItem link="/about-us">
        COURSE
      </TheDropDownItem>
      <TheDropDownItem link="/about-us">
        EDUCATİON
      </TheDropDownItem>
    </TheDropDownMenu>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom" text="LOCATIONS">
      <TheDropDownItem link="/about-us">
        DENMARK – COPENHAGEN
      </TheDropDownItem>
      <TheDropDownItem link="/about-us">
        ENGLAND – LONDON
      </TheDropDownItem>
      <TheDropDownItem link="/about-us">
        NORWAY – OSLO
      </TheDropDownItem>
    </TheDropDownMenu>

    <TheDropDownItem class=" inline-block lg:block font-semibold text-custom" link="/">
      <span
        class="text-white"
      >NEWS</span>
    </TheDropDownItem>

    <TheDropDownItem class=" inline-block lg:block font-semibold text-custom" link="/about-us">
      <span
        class="text-white"
      >CAREERS</span>
    </TheDropDownItem>

    <TheDropDownItem class=" inline-block lg:block font-semibold text-custom" link="/about-us">
      <span
        class="text-white"
      >ABOUT
        US</span>
    </TheDropDownItem>

    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom" text="LANG">
      <TheDropDownItem v-for="lang in availableLocales" :key="lang.iso" :prop-key="lang.iso" :link="switchLocalePath(lang.iso)">
        {{
          lang.name }}
      </TheDropDownItem>
    </TheDropDownMenu>
  </TheDropDownNavbar>
</template>
