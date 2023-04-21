<script setup lang="ts">
import AtomStoreImg from '../atoms/AtomStoreImg.vue';
import MoleculeStoreInfo from '../moleculs/MoleculeStoreInfo.vue';

defineProps({
    colorText: String
})
</script>

<template>
    <div class="container">
        <MoleculeStoreInfo :colorText="colorText"/>
        <AtomStoreImg />
    </div>
</template>

<style scoped lang="scss">
.container {
    width: 1120px;
    margin: 0 auto;
    padding: 128px 0 10px 0;
    display: flex;
}
</style>