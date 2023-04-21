<script setup lang="ts">
import OrganismSupabaseAuth from '../organism/OrganismSupabaseAuth.vue';

defineProps({
    colorText: String,
    colorBlock: String
})
</script>

<template>
    <section class="section"> 
        <OrganismSupabaseAuth 
            :colorText="colorText" 
            :colorBlock="colorBlock"
        />
    </section>
</template>

<style scoped lang="scss">
.section {
    height: 597px;
}
</style>