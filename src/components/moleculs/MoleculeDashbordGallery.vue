<script setup lang="ts">
import { ref } from 'vue';
import AtomDashGalImg from '../atoms/AtomDashGalImg.vue';
import AtomNavDashButton from '../atoms/AtomNavDashButton.vue';
import AtomP from '../atoms/AtomP.vue';
import AtomSpan from '../atoms/AtomSpan.vue';
import AtomButton from '../atoms/AtomButton.vue';
import ThunderIcon from '@/assets/icons/ThunderIcon.vue'
import GitIcon from '@/assets/icons/GitIcon.vue'

const info = ref([
    {
        title: 'File previews',
        desc: 'Preview any media type, including video and audio.'
    },
    {
        title: 'Column view',
        desc: 'A column view — also called a browser — lets people view and navigate a data hierarchy using a series of vertical columns.'
    },
    {
        title: 'List view',
        desc: 'To display a list, you can include a list view in your layout XML file.'
    },
    {
        title: 'Multi select actions',
        desc: 'This parameter defines an action to be included in the action area for multi-selection processing.'
    },
    {
        title: 'Path navigator',
        desc: 'Path Navigator finds the best communication path from the explored content servers and migrates the TCP connections to the best-estimated connection transparently.'
    },

])

const focus = ref(true)
const showInfo = ref(info.value[0])
const showImgFilePreviews = ref(true),
    showImgColumnView = ref(false),
    showImgListView = ref(false),
    showImgMultiSelect = ref(false),
    showImgPathNavigator = ref(false);


const props = defineProps({
    colorText: String,
    colorBlock: String
})

const getImgFilePreviews = () => {
    showInfo.value = info.value[0]

    showImgColumnView.value = false
    showImgFilePreviews.value = true
    showImgListView.value = false
    showImgMultiSelect.value = false
    showImgPathNavigator.value = false
}

const getImgColumnView = () => {
    showInfo.value = info.value[1]
    focus.value = false

    showImgColumnView.value = true
    showImgFilePreviews.value = false
    showImgListView.value = false
    showImgMultiSelect.value = false
    showImgPathNavigator.value = false
}

const getImgListView = () => {
    showInfo.value = info.value[2]
    focus.value = false

    showImgColumnView.value = false
    showImgFilePreviews.value = false
    showImgListView.value = true
    showImgMultiSelect.value = false
    showImgPathNavigator.value = false
}

const getImgMultiSelect = () => {
    showInfo.value = info.value[3]
    focus.value = false

    showImgColumnView.value = false
    showImgFilePreviews.value = false
    showImgListView.value = false
    showImgMultiSelect.value = true
    showImgPathNavigator.value = false
}

const getImgPathNavigator = () => {
    showInfo.value = info.value[4]
    focus.value = false

    showImgColumnView.value = false
    showImgFilePreviews.value = false
    showImgListView.value = false
    showImgMultiSelect.value = false
    showImgPathNavigator.value = true
}
</script>

<template>
        <div class="picture-block">
            <nav class="nav">
                <AtomNavDashButton class="btn" @click="getImgFilePreviews" :colorBlock="colorBlock" :class="{focus}"><AtomP class="btn__text"  :style="{color: colorText}">{{ info[0].title }}</AtomP></AtomNavDashButton>
                <AtomNavDashButton class="btn" @click="getImgColumnView" :colorBlock="colorBlock"><AtomP class="btn__text" :style="{color: colorText}">{{ info[1].title }}</AtomP></AtomNavDashButton>
                <AtomNavDashButton class="btn" @click="getImgListView" :colorBlock="colorBlock"><AtomP class="btn__text" :style="{color: colorText}">{{ info[2].title }}</AtomP></AtomNavDashButton>
                <AtomNavDashButton class="btn" @click="getImgMultiSelect" :colorBlock="colorBlock"><AtomP class="btn__text" :style="{color: colorText}">{{ info[3].title }}</AtomP></AtomNavDashButton>
                <AtomNavDashButton class="btn" @click="getImgPathNavigator" :colorBlock="colorBlock"><AtomP class="btn__text" :style="{color: colorText}">{{ info[4].title }}</AtomP></AtomNavDashButton>
            </nav>
            <AtomDashGalImg> 
                <img src="@/assets/img/DashGallery.png" v-if="showImgFilePreviews" class="img"/>
                <img src="https://phonoteka.org/uploads/posts/2021-06/1624077279_31-phonoteka_org-p-oboi-s-kotikami-krasivo-32.jpg" v-if="showImgColumnView" class="img"/>
                <img src="https://gamerwall.pro/uploads/posts/2022-09/1662288481_2-gamerwall-pro-p-milie-kotiki-zhivotnie-2.jpg" v-if="showImgListView" class="img"/>
                <img src="https://img2.akspic.ru/crops/8/4/6/4/6/164648/164648-kot-kotenok-privlekatelnost-golova-glaz-3840x2160.jpg" v-if="showImgMultiSelect" class="img"/>
                <img src="https://i.pinimg.com/736x/e7/b1/9b/e7b19be200517a10d1c783ff925eaa43.jpg" v-if="showImgPathNavigator" class="img"/>
            </AtomDashGalImg>
        </div>
        <div class="info-block" style="margin-left: 187px;">
            <AtomP class="title" :style="{color: colorText}">{{ showInfo.title }}</AtomP>
            <AtomP class="desc" :style="{color: colorText}">{{ showInfo.desc }}</AtomP>
            <AtomP :style="{color: colorText}">Check out our example app</AtomP>
            <div class="info-block__focus-block" :style="{backgroundColor: colorBlock}">
                <AtomP class="profile-text" :style="{color: colorText}">Profile management example</AtomP>
                <AtomP class="info-block_text" :style="{color: colorText}">Update a user account with public profile information, including uploading a profile image.</AtomP>
                <AtomSpan class="creater" :style="{color: colorText}">Created by: <ThunderIcon style="margin:0 8px 0 8px; background: none;"/> supabase</AtomSpan>
            </div>
            <div class="deploy-block">
                <div style="display: flex;"> 
                    <AtomSpan :style="{color: colorText}">nextjs-ts-user-management</AtomSpan>
                    <GitIcon style="margin-left: 7px;"/>
                </div>
                <AtomButton style="background: #1269D3; margin-top: 12px;">
                    <div class="line" >
                        <div class="arrow" style="color: #fff; background: none;">&#9651;</div>
                    </div>
                    <AtomSpan>Deploy</AtomSpan>
                </AtomButton>
            </div>
        </div>
</template>

<style scoped lang="scss">

.img {
    width: 560px; 
    height: 367px;
}

.deploy-block {
    border-bottom: 1px solid #2A2A2A;
    padding: 21px;
}    

.title {
    font-size: 18px; 
}

.desc {
    font-size: 16px; 
    line-height: 24px; 
    margin: 16px 0 44px 0; 
    width: 330px;
}

.creater {
    font-size: 14px; 
    line-height: 20px;
    cursor: default;
}

.info-block_text {
    font-size: 13px; 
    line-height: 20px;
    margin: 4px 0 16px 0; 
    width: 299px;
}

.profile-text {
    font-size: 16px; 
    line-height: 24px;
}


.info-block__focus-block {
    width: 331px;
    height: 116px;
    border-radius: 4px 4px 0px 0px;
    margin-top: 16px;
    padding: 21px;
}

.line {
    border-right: 1px solid #105bb8; 
    height: 30px;
    width: 19px;
    display: flex; 
    align-items: center; 
    background: none; 
    margin-right: 11px;
}
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
</style>