<script setup lang="ts">
import { ref } from 'vue';
import AtomDashGalImg from '../atoms/AtomDashGalImg.vue';
import AtomNavDashButton from '../atoms/AtomNavDashButton.vue';
import AtomP from '../atoms/AtomP.vue';

const info = ref([
    {
        title: 'Public access to a bucket',
    },
    {
        title: 'Public access to a folder',
    },
    {
        title: 'Authenticated access to a bucket',
    },
])

const focus = ref(true)
const showImgPublicBucket = ref(true),
    showImgPublicFolder = ref(false),
    showImgAuthenticated = ref(false);

defineProps({
    colorText: String,
    colorBlock: String
})

const showInfo = ref(info.value[0])


const getImgPublicBucket = () => {
    showInfo.value = info.value[0]

    showImgPublicBucket.value = true
    showImgPublicFolder.value = false
    showImgAuthenticated.value = false
}

const getImgPublicFolder = () => {
    showInfo.value = info.value[1]
    focus.value = false

    showImgPublicBucket.value = false
    showImgPublicFolder.value = true
    showImgAuthenticated.value = false
}

const getImgAuthenticated = () => {
    showInfo.value = info.value[2]
    focus.value = false

    showImgPublicBucket.value = false
    showImgPublicFolder.value = false
    showImgAuthenticated.value = true
}
</script>

<template>
    <div class="gallery">
        <div class="picture-block">
            <nav class="nav">
                <AtomNavDashButton class="btn" @click="getImgPublicBucket" :colorBlock="colorBlock" :class="{focus}"><AtomP :style="{color: colorText}" class="btn__text">{{ info[0].title }}</AtomP></AtomNavDashButton>
                <AtomNavDashButton class="btn" @click="getImgPublicFolder" :colorBlock="colorBlock"><AtomP :style="{color: colorText}" class="btn__text">{{ info[1].title }}</AtomP></AtomNavDashButton>
                <AtomNavDashButton class="btn" @click="getImgAuthenticated" :colorBlock="colorBlock"><AtomP :style="{color: colorText}" class="btn__text">{{ info[2].title }}</AtomP></AtomNavDashButton>
            </nav>
            <AtomDashGalImg>
                <img src="@/assets/img/SupCodeImg.png" v-if="showImgPublicBucket" class="img"/>
                <img src="https://s.04141.com.ua/section/newsInText/upload/images/news/intext/000/054/136/38e08ee994551d5678f44ad81ff16e0f_619a86ea3b162.jpg" v-if="showImgPublicFolder" class="img"/>
                <img src="https://img2.goodfon.ru/wallpaper/nbig/e/fc/sobaki-schenki-malyshi-parochka.jpg" v-if="showImgAuthenticated" class="img"/>
            </AtomDashGalImg>
        </div>
    </div>
</template>

<style scoped lang="scss">
.nav {
    display: flex;
    margin-bottom: 16px;

    .btn {
        margin: 0 6px 0 6px;

        .btn__text {
            font-size: 11px; 
            line-height: 16px;
        }
    }
}

.img {
    width: 528px;
    height: 311px;
}
</style>