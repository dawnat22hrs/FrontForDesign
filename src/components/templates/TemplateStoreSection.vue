<script setup lang="ts">
import OrganismStoreSection from '../organism/OrganismStoreSection.vue'

defineProps({
    colorText: String
})
</script>

<template>
    <section>
        <OrganismStoreSection :colorText="colorText"/>
    </section>
</template>

<style scoped lang="scss">

section {
    height: 589px;
}
</style>