<script setup lang="ts">
import OrganismFooterLogo from '../organism/OrganismFooterLogo.vue';
import OrganismFooterInfo from '../organism/OrganismFooterInfo.vue';
import OrganismFooterLevelTwo from '../organism/OrganismFooterLevelTwo.vue';


const emits = defineEmits(['setCheckboxVal'])
defineProps({
    colorText: String
})

const emitToggle = (checkbox: Boolean) => {
    emits('setCheckboxVal', checkbox)
}
</script>

<template>
    <section class="section">
        <div class="footer-level-one">
            <OrganismFooterLogo />
            <OrganismFooterInfo :colorText="colorText"/>
        </div>
        <OrganismFooterLevelTwo 
            @set-checkbox-val="emitToggle" 
            :colorText="colorText"
        />
    </section>
</template>

<style scoped lang="scss">
.section {
    height: 602px;
}
.footer-level-one {
    display: flex;
    width: 1120px;
    margin: 0 auto ;
    padding-top: 96px;
    padding-bottom: 127px;
    border-bottom: 1px solid #2A2A2A;
}
</style>