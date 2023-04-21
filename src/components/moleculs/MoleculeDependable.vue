<script setup lang="ts">
import DepIcon from '@/assets/icons/DepIcon.vue';
import AtomP from '../atoms/AtomP.vue';

defineProps({
    desc: String,
    title: String,
    colorText: String
})
</script>

<template>
    <div class="block">
        <DepIcon/>
        <AtomP class="title" :style="{ color: colorText }">{{ title }}</AtomP>
        <AtomP style="font-size: 13px;" :style="{ color: colorText }">{{ desc }}</AtomP>
    </div>
</template>

<style scoped lang="scss">
    .block {
        width: 280px;

        .title {
            margin: 16px 0 21px 0;
        }
    }
</style>