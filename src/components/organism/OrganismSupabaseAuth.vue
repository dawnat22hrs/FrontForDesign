<script setup lang="ts">
import MoleculeSupInfo from '../moleculs/MoleculeSupInfo.vue';
import MoleculeSupCodeGallery from '../moleculs/MoleculeSupCodeGallery.vue';

defineProps({
    colorText: String,
    colorBlock: String
})
</script>

<template>
    <div class="supabase"> 
        <MoleculeSupInfo :colorText="colorText"/>
        <MoleculeSupCodeGallery 
            :colorText="colorText"
            :colorBlock="colorBlock"
        />
    </div>
</template>

<style scoped lang="scss">
.supabase {
    width: 1120px;
    margin: 0 auto;
    padding-top: 144px;
    padding-bottom: 96px;
    display: flex;
    justify-content: space-between;
}
</style>