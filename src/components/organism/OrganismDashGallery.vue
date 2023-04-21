<script setup lang="ts">
import MoleculeDashbordGallery from '../moleculs/MoleculeDashbordGallery.vue';

defineProps({
    colorText: String,
    colorBlock: String
})
</script>

<template>
    <div class="dashboard">
        <MoleculeDashbordGallery :colorText="colorText" :colorBlock="colorBlock"/>
    </div>
</template>

<style scoped>
.dashboard {
    width: 1120px;
    margin: 64px 123px 10px 197px;
    display: flex;
}
</style>