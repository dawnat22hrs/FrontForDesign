<script setup lang="ts">
import LightIcon from '@/assets/icons/LightIcon.vue';
import AtomP from '../atoms/AtomP.vue';

defineProps({
    desc: String,
    title: String,
    colorText: String
})
</script>

<template>
    <div class="block">
        <LightIcon />
        <AtomP class="title" :style="{ color: colorText }">{{ title }}</AtomP>
        <AtomP :style="{ color: colorText }">{{ desc }}</AtomP>
    </div>
</template>

<style scoped lang="scss">
    .block {
        width: 280px;
        margin-right: 93px;

        .title {
            margin: 16px 0 21px 0;
        }
    }
</style>