<script setup lang="ts">
import OrganismSimple from '../organism/OrganismSimple.vue';

defineProps({
    colorText: String,
    colorBlock: String
})
</script>

<template>
    <section class="section">
        <OrganismSimple 
            :colorText="colorText" 
            :colorBlock="colorBlock"
        />
    </section>
</template>

<style scoped lang="scss">
.section {
    border-bottom: 1px solid #2A2A2A;
}
</style>