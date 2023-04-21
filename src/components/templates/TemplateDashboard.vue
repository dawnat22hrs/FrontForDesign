<script setup lang="ts">
import MoleculeDashbordTitle from '../moleculs/MoleculeDashbordTitle.vue';
import OrganismDashGallery from '../organism/OrganismDashGallery.vue';

defineProps({
    colorText: String,
    colorBlock: String
})
</script>

<template>
    <section class="section">
        <div class="title">
            <MoleculeDashbordTitle :colorText="colorText"/>
        </div>
        <div class="gallery-block"> 
            <OrganismDashGallery :colorText="colorText" :colorBlock="colorBlock"/>
        </div>
    </section>
</template>

<style scoped lang="scss">
.section {
    height: 690px;
    display: flex;
    flex-direction: column;

    .gallery-block {
        display: flex;
    }
}
</style>