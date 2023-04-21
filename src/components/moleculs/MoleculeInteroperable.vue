<script setup lang="ts">
import InterIcon1 from '@/assets/icons/InterIcon1.vue';
import AtomP from '../atoms/AtomP.vue';
import XIcon from '@/assets/icons/XIcon.vue';
import InterIcon2 from '@/assets/icons/InterIcon2.vue';
import InterIcon3 from '@/assets/icons/InterIcon3.vue';

defineProps({
    desc: String,
    title: String,
    colorText: String
})
</script>

<template>
    <div class="block">
        <div class="icons"><InterIcon1/><XIcon/><InterIcon2/><XIcon/><InterIcon3/></div>
        <AtomP class="title" :style="{ color: colorText }">{{ title }}</AtomP>
        <AtomP :style="{ color: colorText }">{{ desc }}</AtomP>
    </div>
</template>

<style scoped lang="scss">
    .block {
        width: 280px;
        margin-right: 93px;

        .icons {
            width: 165px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .title {
            margin: 16px 0 21px 0;
        }
    }
</style>