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
      <NuxtLink :to="localePath('/')">
        <h4 class="text-3xl font-bold text-white">
          bawareof / <span class="text-red-700">bao</span>
        </h4>
      </NuxtLink>
    </template>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom leading-relaxed" text="SERVICES">
      <TheDropDownItem :link="localePath('index')">
        {{ t("SERVICES") }}
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/services/counseling')">
        {{ t("COUNSELING") }}
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/services/intelligence')">
        {{ t("INTELLIGENCE") }} 
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/services/investigation')">
        {{ t("INVESTIGATION") }} 
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/services/osint')">
        {{ t("OSINT") }} 
      </TheDropDownItem>
    </TheDropDownMenu>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom  leading-relaxed" text="SECTORS">
      <TheDropDownItem :link="localePath('/sectors')">
        {{ t("SECTORS") }} 
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/sectors/communication-and-mediation-sector')">
        {{ t("COMMUNICATION-AND-MEDIATION-SECTOR") }} 
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/sectors/energy-sector')">
        {{ t("ENERGY-SECTOR") }} 
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/sectors/environment-and-nutrition-sector')">
        {{ t("ENVIRONMENT-AND-NUTRITION-SECTOR") }} 
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/sectors/Finance-Sector')">
        {{ t("FINANCE-SECTOR") }} 
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/sectors/healthcare-secto')">
        {{ t("HEALTHCARE-SECTOR") }}
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/sectors/information-technology-sector')">
        {{ t("INFORMATION-TECHNOLOGY-SECTOR") }} 
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/sectors/legal-rights-sector')">
        {{ t("LEGAL-RIGHTS-SECTOR") }} 
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/sectors/national-security')">
        {{ t("NATIONAL-SECURITY") }} 
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/sectors/public-sector')">
        {{ t("PUBLIC-SECTOR") }}  
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/sectors/telecommunications-sector')">
        {{ t("TELECOMMUNICATIONS-SECTOR") }} 
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/sectors/transport-sector')">
        {{ t("TRANSPORT-SECTOR") }} 
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/sectors/supply-sector')">
        {{ t("SUPPLY-SECTOR") }}
      </TheDropDownItem>
    </TheDropDownMenu>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom  leading-relaxed" text="KNOWLEDGE">
      <TheDropDownItem :link="localePath('/knowledge')">
        {{ t("KNOWLEDGE") }}  
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/about-us')">
        {{ t("LECTURE") }} 
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/about-us')">
        {{ t("COURSE") }}
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/about-us')">
        {{ t("EDUCATİON") }}  
      </TheDropDownItem>
    </TheDropDownMenu>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom  leading-relaxed" text="LOCATIONS">
      <TheDropDownItem :link="localePath('/about-us')">
        {{ t("DENMARK – COPENHAGEN") }} 
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/about-us')">
        {{ t("ENGLAND – LONDON") }} 
      </TheDropDownItem>
      <TheDropDownItem :link="localePath('/about-us')">
        {{ t("NORWAY – OSLO") }} 
      </TheDropDownItem>
    </TheDropDownMenu>

    <TheDropDownItem class=" inline-block lg:block font-semibold text-custom  leading-relaxed" :link="localePath('/')">
      <span
        class="text-white"
      > {{ t("NEWS") }} </span>
    </TheDropDownItem>

    <TheDropDownItem class=" inline-block lg:block font-semibold text-custom  leading-relaxed" :link="localePath('/about-us')">
      <span
        class="text-white"
      > {{ t("CAREERS") }} </span>
    </TheDropDownItem>

    <TheDropDownItem class=" inline-block lg:block font-semibold text-custom  leading-relaxed" :link="localePath('/about-us')">
      <span
        class="text-white"
      >{{ t("ABOUT US") }}</span>
    </TheDropDownItem>

    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom  leading-relaxed" text="LANG">
      <TheDropDownItem v-for="lang in availableLocales" :key="lang.iso" :prop-key="lang.iso" ::link="switchLocalePath(lang.iso)">
        {{
          lang.name }}
      </TheDropDownItem>
    </TheDropDownMenu>
  </TheDropDownNavbar>
</template>
