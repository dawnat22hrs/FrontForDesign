<script setup lang="ts">
import DarkThemeIcon from '@/assets/icons/DarkThemeIcon.vue';
import LightThemeIcon from '@/assets/icons/LightThemeIcon.vue';
import { ref } from 'vue';

const checkbox = ref(false)
const dd = ref('')

const emits = defineEmits(['setCheckboxVal'])

const toggleCheckbox =() => {
    checkbox.value = !checkbox.value
    emits('setCheckboxVal', checkbox.value)
}
</script>

<template>
    <div class="switch-component">
        <LightThemeIcon />
        <label class="switch">
            <input type="checkbox" @click="toggleCheckbox" v-model="checkbox">
            <div class="slider round"></div>
      </label>
      <DarkThemeIcon />
    </div>

</template>

<style scoped lang="scss">
.switch-component {
    display: flex;
    align-items: center;
    width: 140px;
    justify-content: space-between;

    .switch {
        position: relative;
        display: inline-block;
        width: 44px;
        height: 24px;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #444444;
        border-radius: 9999px;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        right: 2px;
        top: 2px;
        border-radius: 100px;
        background-color: #181818;
        transition: 0.4s;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(-20px);
        -ms-transform: translateX(-20px);
        transform: translateX(-20px);
    }
}
</style>