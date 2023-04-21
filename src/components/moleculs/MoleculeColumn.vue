<script setup lang="ts">
import AtomSpan from '../atoms/AtomSpan.vue';

defineProps({
    column: Object,
    title: String,
    colorText: String
})
</script>

<template> 
    <div class="column">
        <AtomSpan class="title">{{ title }}</AtomSpan>
        <AtomSpan 
            v-for="paragraph in column" class="paragraph" 
            :style="{color: colorText}"
        >
            {{ paragraph }}
        </AtomSpan>
    </div>
</template>

<style scoped lang="scss">
.column {
    width: 160px;
    margin-right: 32px;
}
.title {
    margin-bottom: 22px;
    color: #666666
}
.paragraph {
    margin: 18px 0;
}
</style>