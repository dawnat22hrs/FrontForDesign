<script setup lang="ts">
import AtomButton from '../atoms/AtomButton.vue';
import AtomP from '../atoms/AtomP.vue';
import AtomSpan from '../atoms/AtomSpan.vue';
import ArrowLinkIcon from '@/assets/icons/ArrowLinkIcon.vue';

const props = defineProps({
    colorText: String
})

</script>

<template>
    <div class="info-block">
        <div class="title">
            <AtomP class="title__atomp" :style="{color: props.colorText}">Integrates natively<br>with Supabase Auth</AtomP>
        </div>
        <div class="text">
            <AtomSpan :style="{color: props.colorText}" style="cursor: default;">Using Postgres Row Level Security to create Object access rules.</AtomSpan>
            <AtomSpan :style="{color: props.colorText}" style="cursor: default;">Storage Authorization is built around Postgres so that you can use any combination of SQL, Postgres functions, and even your own metadata to write policies.</AtomSpan>
        </div>
        <div class="btn">
            <AtomButton style="background: #2A2A2A"><ArrowLinkIcon style="background: none; margin-right: 8px;"/><AtomSpan>Expore documentation</AtomSpan></AtomButton>
        </div>
    </div>
</template>

<style scoped lang="scss">
.info-block {
    width: 429px;

    .title__atomp {
        font-size: 36px; 
        line-height: 43px;
        cursor: default;
    }

    .text {
        margin: 21px 0 32px;
        height: 132px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
</style>

