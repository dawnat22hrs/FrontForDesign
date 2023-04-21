<script setup lang="ts">
import MoleculeSimpleInfo from '../moleculs/MoleculeSimpleInfo.vue';
import MoleculeSimpleCodeGallery from '../moleculs/MoleculeSimpleCodeGallery.vue';

defineProps({
    colorText: String,
    colorBlock: String
})
</script>

<template>
    <div class="simple">
        <MoleculeSimpleInfo :colorText="colorText"/>
        <MoleculeSimpleCodeGallery 
            :colorText="colorText"
            :colorBlock="colorBlock"
        />
    </div>
</template>

<style scoped lang="scss">
.simple {
    width: 1120px;
    padding: 96px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
</style>