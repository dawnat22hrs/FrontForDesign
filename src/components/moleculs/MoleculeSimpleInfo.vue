<script setup lang="ts">
import WFIcons from '@/assets/icons/WFIcons.vue';
import AtomButton from '../atoms/AtomButton.vue';
import AtomP from '../atoms/AtomP.vue';
import AtomSpan from '../atoms/AtomSpan.vue';
import ArrowLinkIcon from '@/assets/icons/ArrowLinkIcon.vue';
import XArrowIcon from '@/assets/icons/XArrowIcon.vue';

const props = defineProps({
    colorText: String
})

</script>

<template>
    <div class="info-block">
        <div class="title">
            <AtomP class="title__atomp" :style="{color: props.colorText}">Simple and convenient<br>APIs</AtomP>
        </div>
        <div class="text">
            <AtomSpan :style="{color: props.colorText}" style="cursor: default;">Built from the ground-up for interoperable authentication.</AtomSpan>
            <AtomSpan :style="{color: props.colorText}" style="cursor: default;">Fast and easy to implement using our powerful library clients. Asset optimization and image transformation coming soon!</AtomSpan>
        </div>
        <div class="icons-info">
            <div class="icon-wf icon__block">
                <WFIcons />
                <AtomP :style="{color: props.colorText}">CDN integration</AtomP>
                <AtomSpan style="cursor: default; width: 151px;" :style="{color: props.colorText}">Serve from the edge to reduce latency.</AtomSpan>
                <AtomButton class="btn"><AtomSpan class="btn__text">Coming soon</AtomSpan></AtomButton>
            </div>
            <div class="icon-arrow icon__block">
                <XArrowIcon />
                <AtomP style="font-size: 12px; width: 181px;" :style="{color: props.colorText}">Auto transformation & optimisation</AtomP>
                <AtomSpan style="cursor: default;" :style="{color: props.colorText}">Resize and compress your media before you serve it.</AtomSpan>
                <AtomButton class="btn"><AtomSpan class="btn__text">Coming soon</AtomSpan></AtomButton>
            </div>
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
        height: 76px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .icons-info {
        height: 189px;
        display: flex;
        justify-content: space-between;
        margin-top: 80px;

        .icon__block {
            width: 189px;
            height: 160px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .btn {
            background: rgba(49, 130, 206, 0.1);
            border-radius: 9999px;
            height: 20px;

            .btn__text {
                font-size: 12px;
                line-height: 16px;
                color: #4299E1;
            }

        }
    }
}
</style>

