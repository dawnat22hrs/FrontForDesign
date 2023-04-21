<script setup lang="ts">
import { ref } from 'vue';
import TemplateDashboard from '../templates/TemplateDashboard.vue';
import TemplateDescIcon from '../templates/TemplateDescIcon.vue';
import TemplateHeader from '../templates/TemplateHeader.vue';
import TemplateStoreSection from '../templates/TemplateStoreSection.vue';
import TemplateSimple from '../templates/TemplateSimple.vue';
import TemplateSupabaseAuth from '../templates/TemplateSupabaseAuth.vue'
import TemplateSectionBuid from '../templates/TemplateSectionBuild.vue';
import TemplateFooter from '../templates/TemplateFooter.vue';

const checked = ref<Boolean>(false)
const background = ref('#181818')
const colorText = ref('#fff')
const colorBlock = ref('#2A2A2A')

const getEmit = (checkbox: Boolean) => {
  checked.value = checkbox
  if (checkbox == true){
    background.value = '#fff'
    colorText.value = '#181818'
    colorBlock.value = '#c2bebe'
  } else {
    background.value = '#181818'
    colorText.value = '#fff'
    colorBlock.value = '#1f1f1f'
  }
}
</script>

<template >
  <main :style="{background: background}">
    <TemplateHeader :colorText="colorText"/>
    <TemplateStoreSection :colorText="colorText"/>
    <TemplateDescIcon :colorText="colorText"/>
    <TemplateDashboard :colorText="colorText" :colorBlock="colorBlock"/>
    <TemplateSimple :colorText="colorText" :colorBlock="colorBlock"/>
    <TemplateSupabaseAuth :colorText="colorText" :colorBlock="colorBlock"/>
    <TemplateSectionBuid :color="colorText"/>
    <TemplateFooter @set-checkbox-val="getEmit" :colorText="colorText"/>
  </main>
</template>