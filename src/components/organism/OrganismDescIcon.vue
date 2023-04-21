<script setup lang="ts">
import { ref } from 'vue';
import MoleculeInteroperable from '../moleculs/MoleculeInteroperable.vue';
import MoleculeLightning from '../moleculs/MoleculeLightning.vue';
import MoleculeDependable from '../moleculs/MoleculeDependable.vue';

const titleDependable = ref('Dependable')
const titleInteroperable = ref('Interoperable')
const titleLightning = ref('Lightning fast')

const descDependable = ref('Enterprise-level scalability and durability.')
const descInteroperable = ref('Integrates well with the rest of Supabase ecosystem, including Auth and Postgres.')
const descLightning = ref('Thin API server layer that leverages Postgres` permissions and performance.')

defineProps({
    colorText: String
})
</script>

<template>
    <div class="desc-icon">
        <MoleculeInteroperable 
            :desc="descInteroperable" 
            :title="titleInteroperable" 
            :colorText="colorText"
        />
        <MoleculeLightning  
            :desc="descLightning" 
            :title="titleLightning" 
            :colorText="colorText"
        />
        <MoleculeDependable 
            :desc="descDependable" 
            :title="titleDependable" 
            :colorText="colorText"
        />
    </div>
</template>

<style scoped lang="scss">
.desc-icon {
    width: 1120px;
    margin: 0 auto ;
    padding-top: 96px;
    display: flex;
}
</style>