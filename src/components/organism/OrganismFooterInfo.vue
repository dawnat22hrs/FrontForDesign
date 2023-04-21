<script setup lang="ts">
import { ref } from 'vue';
import MoleculeColumn from '../moleculs/MoleculeColumn.vue';

const columnsTitle = ref(['Product', 'Resources', 'Developers', 'Company'])
const columns = ref({
     product: 
     {
        0: 'Database',
        1: 'Authentication',
        2: 'Storage',
        3: 'Functions',
        4: 'Coming soon',
        5: 'Pricing',
    },
    resources: 
    {
        0: 'Support',
        1: 'Case Studies',
        2: 'System Status',
        3: 'Terms of service',
    },
    developers: 
    {
        0: 'Documentation',
        1: 'API Reference',
        2: 'Guides',
    },
    company: 
    {
        0: 'Blog',
        1: 'Open Source',
        2: 'Humans.txt',
        3: 'Lawyers.txt',
    }
    
})

defineProps({
    colorText: String
})

</script>

<template> 
    <div class="columns">
        <MoleculeColumn 
            :column="columns.product" 
            :title="columnsTitle[0]"
            :colorText="colorText"
        />
        <MoleculeColumn 
            :column="columns.resources" 
            :title="columnsTitle[1]"
            :colorText="colorText"
        />
        <MoleculeColumn 
            :column="columns.developers" 
            :title="columnsTitle[2]"
            :colorText="colorText"
        />
        <MoleculeColumn 
            :column="columns.company" 
            :title="columnsTitle[3]"
            :colorText="colorText"
        />
    </div>
</template>

<style scoped lang="scss">
.columns {
    display: flex;
}
</style>