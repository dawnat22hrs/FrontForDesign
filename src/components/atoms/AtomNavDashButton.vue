<script setup lang="ts">
import { ref } from 'vue';

const colorClass = ref(false)

const props = defineProps({
    colorBlock: String
})

const clickColor = () => {
    if( props.colorBlock == '#c2bebe') {
        colorClass.value = true
    } else colorClass.value = false
}

</script>

<template>
    <button class="btn" @click="clickColor" :class="{colorClass}">
        <slot/>
    </button>
</template>

<style scoped lang="scss">
.btn {
    outline: none;
    width: max-content;
    border: none;
    padding: 0 11px;
    height: 30px;
    background: none;
}

.btn:focus {
    background: #2A2A2A;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
    border-radius: 4px;
    border: none;
    width: max-content;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 11px;
}

.focus {
    background: #2A2A2A;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
    border-radius: 4px;
    border: none;
    width: max-content;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 11px;
}

.colorClass:focus {
    background: #c2bebe;
}
</style>