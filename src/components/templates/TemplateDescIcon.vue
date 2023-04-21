<script setup lang="ts">
import OrganismDescIcon from '../organism/OrganismDescIcon.vue';

defineProps({
    colorText: String
})
</script>

<template>
    <section class="section">
        <OrganismDescIcon :colorText="colorText"/>
    </section>
</template>

<style scoped lang="scss">
.section {
    height: 384px;
}
</style>