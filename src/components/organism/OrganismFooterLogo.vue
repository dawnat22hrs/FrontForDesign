<script setup lang="ts">
import AtomLogo from '../atoms/AtomLogo.vue';
import TwitterIcon from '@/assets/icons/TwitterIcon.vue'
import GitFullIcon from '@/assets/icons/GitFullIcon.vue'
</script>

<template>
    <div class="block">
        <div class="loo">
            <AtomLogo class="logo"/>
        </div>
        <div class="contact">
            <TwitterIcon />
            <GitFullIcon style="margin-left: 24px;"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.block {
    display: flex;
    flex-direction: column;
    width: 352px;
    margin-right: 32px;

    .logo {
        margin-bottom: 32px;
    }
}
</style>