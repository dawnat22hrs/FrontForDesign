<script setup lang="ts">
import AtomP from '../atoms/AtomP.vue';

const props = defineProps({
    colorText: String
})
</script>

<template>
    <div class="block">
        <AtomP :style="{color: props.colorText}" class="title">Sleek dashboard for managing your media</AtomP>
        <AtomP :style="{color: props.colorText}" class="text">A complete Object Explorer so that any of your team can use.</AtomP>
        <AtomP :style="{color: props.colorText}">Drag and drop uploading, moving objects, and multiple object selection. As easy as working on your desktop.</AtomP>
    </div>
</template>

<style scoped lang="scss">
.block {
    width: 1120px;
    padding-top: 28px;
    margin: 0 123px 0 197px;
    display: flex;
    flex-direction: column;

    .title {
        font-size: 48px; 
        line-height: 58px;
    }

    .text {
        margin: 16px 0 16px 0;
    }
}
</style>