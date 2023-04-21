<script setup lang="ts">
import StoreIcon from '@/assets/icons/StoreIcon.vue';
import AtomP from '../atoms/AtomP.vue';
import AtomH1 from '../atoms/AtomH1.vue';
import AtomButton from '../atoms/AtomButton.vue';
import AtomSpan from '../atoms/AtomSpan.vue';

defineProps({
    colorText: String
})
</script>

<template>
    <div class="store-block">
        <div class="icon-text">
            <StoreIcon class="svg"/>
            <AtomP :style="{ color: colorText }">Storage</AtomP>
        </div>
        <div class="title">
            <AtomH1 :style="{ color: colorText }">Store and serve <br> any type of digital content</AtomH1>
        </div>
        <div class="textes">
            <AtomP style="font-size: 14px; width: 422px;" :style="{ color: colorText }">An open source Object store service with unlimited scalability, for any file type.</AtomP>
            <AtomP style="font-size: 14px;" :style="{ color: colorText }">With custom policies and permissions that are familiar and easy to implement.</AtomP>
        </div>
        <div class="block-btn">
            <AtomButton><AtomSpan style="color: #fff;">Start a project</AtomSpan></AtomButton>
        </div>
    </div>
</template>

<style scoped lang="scss">
.store-block {
    display: flex;
    flex-direction: column;

    .icon-text {
        display: flex;
        align-items: center;
        margin-bottom: 28px;

        .svg {
            margin-right: 12px;
        }
    }

    .title {
        width: 566px;
    }

    .block-btn {
        margin: 64px 0 0 80px;
    }
}

.textes {
    width: 467px;
    height: 128px;
    margin-top: 52px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>