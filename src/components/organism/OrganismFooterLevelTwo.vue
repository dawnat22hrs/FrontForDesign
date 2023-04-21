<script setup lang="ts">
import AtomSpan from '../atoms/AtomSpan.vue';
import SwitchToogle from '../atoms/AtomSwitchToogle.vue';

const emits = defineEmits(['setCheckboxVal'])
defineProps({
    colorText: String
})

const emitToggle = (checkbox: Boolean) => {
    emits('setCheckboxVal', checkbox)
}


</script>

<template>
    <div class="footer-level-two">
        <AtomSpan :style="{color: colorText}" style="cursor: default;">© Supabase Inc</AtomSpan>
        <SwitchToogle @set-checkbox-val="emitToggle"/>
    </div>
</template>

<style scoped lang="scss">
.footer-level-two {
    width: 1120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 33px auto 96px;
}
</style>