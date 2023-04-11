<script lang="ts" setup>
import { InitApp } from '~/utils/initApp'

InitApp()
const locale = useState<string>('locale.i18n')
</script>

<template>
  <Html :lang="locale">
    <Body
      class="antialiased bg-white font-sans text-gray-900"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
