<script setup lang="ts">
import AtomButton from '../atoms/AtomButton.vue';
import AtomSpan from '../atoms/AtomSpan.vue';
import AtomLogo from '../atoms/AtomLogo.vue';
import MoleculesNav from '../moleculs/MoleculeNav.vue';

defineProps({
    colorText: String
})
</script>

<template>
    <div class="container">
        <div class="container-nav">
            <AtomLogo />
            <MoleculesNav :colorText="colorText"/>
        </div>
        <div class="contsiner-controller">
            <AtomButton><AtomSpan style="color: #fff;">Start your project</AtomSpan></AtomButton>
            <AtomSpan class="container-controller_font-weight" :style="{ color: colorText }">Sign in</AtomSpan>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .container-nav {
        display: flex;
        align-items: center;
    }

    .contsiner-controller {
        display: flex;
        align-items: center;

        .container-controller_font-weight {
            font-weight: 700;
            margin-left: 16px;
        }
    }
}

@media screen and (max-width: 1439){
    .container {
        background: #000;
    }
}
</style>