<script setup lang="ts">
import OrganismHeader from '../organism/OrganismHeader.vue';

defineProps({
    colorText: String
})
</script>

<template>
    <header class="header">
        <OrganismHeader :colorText="colorText"/>
    </header>
</template>

<style scoped>
.header {
    height: 64px;
    display: flex;
    align-items: center;
}
</style>