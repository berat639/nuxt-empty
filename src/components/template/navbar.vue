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
          Logo 
        </h4>
      </NuxtLink>
    </template>
    

    
  

     

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
