<script setup lang="ts">
import MoleculeBuildSection from '../moleculs/MoleculeBuildSection.vue';

defineProps({
    color: String
})
</script>

<template>
    <div class="build">
        <MoleculeBuildSection :color="color"/>
    </div>
</template>

<style scoped lang="scss">
.build {
    display: flex;
    width: 1120px;
    margin: 0 auto;
    justify-content: center;
}
</style>