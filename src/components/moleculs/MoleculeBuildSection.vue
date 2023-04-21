<script setup lang="ts">
import AtomButton from '../atoms/AtomButton.vue';
import AtomP from '../atoms/AtomP.vue';
import AtomSpan from '../atoms/AtomSpan.vue';

const props = defineProps({
    color: String
})
</script>

<template>
    <div class="block">
        <AtomP style="font-size: 36px; line-height: 43px;" :style="{color: props.color}">Build in a weekend, scale to millions</AtomP>
        <AtomButton class="btn"><AtomSpan>Start your project</AtomSpan></AtomButton>
    </div>
</template>

<style scoped lang="scss">
.block {
    display: flex;
    flex-direction: column;
    padding: 128px 0;
    justify-content: center;

    .btn {
        margin: 52px auto 0;
    }
}
</style>