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
          bawareof 
        </h4>
      </NuxtLink>
    </template>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom leading-relaxed"
      text="SERVICES">
      <TheDropDownItem>
        <NuxtLink :to="localePath('/services')">
          {{ t("SERVICES") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem >
        <NuxtLink :to="localePath('/services/counseling')">
          {{ t("COUNSELING") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem  >
        <NuxtLink :to="localePath('/services/intelligence')">
          {{ t("INTELLIGENCE") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem  >
        <NuxtLink :to="localePath('/services/investigation')">
          {{ t("INVESTIGATION") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem>
        <NuxtLink :to="localePath('/services/osint')">
          {{ t("OSINT") }}
        </NuxtLink>
      </TheDropDownItem>
    </TheDropDownMenu>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom  leading-relaxed"
      text="SECTORS">
      <TheDropDownItem  >
        <NuxtLink :to="localePath('/sectors')">
          SECTORS
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem  >
        <NuxtLink :to="localePath('/sectors/communication-and-mediation-sector')">
          {{ t("COMMUNICATION-AND-MEDIATION-SECTOR") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem  >
        <NuxtLink :to="localePath('/sectors/energy-sector')">
          {{ t("ENERGY-SECTOR") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem  >
        <NuxtLink :to="localePath('/sectors/environment-and-nutrition-sector')">
          {{ t("ENVIRONMENT-AND-NUTRITION-SECTOR") }}
        </NuxtLink>

      </TheDropDownItem>
      <TheDropDownItem  >
        <NuxtLink :to="localePath('/sectors/Finance-Sector')">
          {{ t("FINANCE-SECTOR") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem  >
        <NuxtLink :to="localePath('/sectors/healthcare-sector')">
          {{ t("HEALTHCARE-SECTOR") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem  >
        <NuxtLink :to="localePath('/sectors/information-technology-sector')">
          {{ t("INFORMATION-TECHNOLOGY-SECTOR") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem  >
        <NuxtLink :to="localePath('/sectors/legal-rights-sector')">
          {{ t("LEGAL-RIGHTS-SECTOR") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem  >
        <NuxtLink :to="localePath('/sectors/national-security')">
          {{ t("LEGAL-RIGHTS-SECTOR") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem  >
        <NuxtLink :to="localePath('/sectors/public-sector')">
          {{ t("PUBLIC-SECTOR") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem  >
        <NuxtLink :to="localePath('/sectors/telecommunications-sector')">
          {{ t("TELECOMMUNICATIONS-SECTOR") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem  >
        <NuxtLink :to="localePath('/sectors/transport-sector')">
          {{ t("TRANSPORT-SECTOR") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem >
        <NuxtLink :to="localePath('/sectors/supply-sector')">
          {{ t("SUPPLY-SECTOR") }}
        </NuxtLink>
      </TheDropDownItem>
    </TheDropDownMenu>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom  leading-relaxed"
      text="KNOWLEDGE">
      <TheDropDownItem> 
        <NuxtLink :to="localePath('/knowledge')">
          {{ t("KNOWLEDGE") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem > 
        <NuxtLink :to="localePath('/about-us')">
          {{ t("LECTURE") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem> 
        <NuxtLink :to="localePath('/about-us')">
          {{ t("COURSE") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem > 
        <NuxtLink :to="localePath('/about-us')">
          {{ t("EDUCATİON") }}
        </NuxtLink>
      </TheDropDownItem>
    </TheDropDownMenu>
    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom  leading-relaxed"
      text="LOCATIONS">
      <TheDropDownItem >
        <NuxtLink :to="localePath('/about-us')">
          {{ t("DENMARK – COPENHAGEN") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem >
        <NuxtLink :to="localePath('/about-us')">
          {{ t("ENGLAND – LONDON") }}
        </NuxtLink>
      </TheDropDownItem>
      <TheDropDownItem  >
        <NuxtLink :to="localePath('/about-us')">
          {{ t("NORWAY – OSLO") }}
        </NuxtLink>
      </TheDropDownItem>
    </TheDropDownMenu>

    <TheDropDownItem class=" inline-block lg:block font-semibold text-custom  leading-relaxed">
      <span class="text-white"> {{ t("NEWS") }} </span>
    </TheDropDownItem>

    <TheDropDownItem class=" inline-block lg:block font-semibold text-custom  leading-relaxed">
     
      <NuxtLink :to="localePath('/about-us')">
        <span class="text-white"> {{ t("CAREERS") }} </span>
        </NuxtLink>
    </TheDropDownItem>

    <TheDropDownItem class=" inline-block lg:block font-semibold text-custom  leading-relaxed">
      <NuxtLink :to="localePath('/about-us')">
        <span class="text-white">{{ t("ABOUT US") }}</span>
        </NuxtLink> 
    </TheDropDownItem>

    <TheDropDownMenu ref="dropdownMenu" class="inline-block lg:block font-semibold text-custom  leading-relaxed"
      text="LANG">
      <TheDropDownItem v-for="lang in availableLocales" :key="lang.iso" :prop-key="lang.iso"
        :link="switchLocalePath(lang.iso)">
        {{
          lang.name }}
      </TheDropDownItem>
    </TheDropDownMenu>
  </TheDropDownNavbar>
</template>
