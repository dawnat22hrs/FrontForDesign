<script setup lang="ts">
import OrganismBuild from '../organism/OrganismBuild.vue';

defineProps({
    color: String
})
</script>

<template>
    <section class="section" >
        <OrganismBuild :color="color"/>
    </section>
</template>

<style scoped lang="scss">
.section {
    height: 386px;
}
</style>