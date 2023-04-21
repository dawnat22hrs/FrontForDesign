<script setup lang="ts">
import AtomSpan from '../atoms/AtomSpan.vue';

defineProps({
    colorText: String
})
</script>

<template>
    <nav>
        <ul class="menu">
            <li class="menu__item"><AtomSpan :style="{ color: colorText }">Product</AtomSpan><div class="svg" :style="{ color: colorText }">></div>
               <ul class="dropdown-menu" v-auto-animate>
                    <li class="menu__item dropdown-menu__item" :style="{ color: colorText }" v-auto-animate><AtomSpan>Database</AtomSpan></li>
                    <li class="menu__item dropdown-menu__item" :style="{ color: colorText }" v-auto-animate><AtomSpan>Authentication</AtomSpan></li>
                    <li class="menu__item dropdown-menu__item" :style="{ color: colorText }" v-auto-animate><AtomSpan>Storage</AtomSpan></li>
                    <li class="menu__item dropdown-menu__item" :style="{ color: colorText }" v-auto-animate><AtomSpan>Functions</AtomSpan></li>
                    <li class="menu__item dropdown-menu__item" :style="{ color: colorText }" v-auto-animate><AtomSpan>Coming soon</AtomSpan></li>
                    <li class="menu__item dropdown-menu__item" :style="{ color: colorText }" v-auto-animate><AtomSpan>Pricing</AtomSpan></li>
               </ul>
            </li>
            <li class="menu__item"><AtomSpan :style="{ color: colorText }">Developers</AtomSpan><div class="svg" :style="{ color: colorText }">></div>
                <ul class="dropdown-menu dropdown-menu__developers">
                    <li class="menu__item dropdown-menu__item" :style="{ color: colorText }"><AtomSpan>Documentation</AtomSpan></li>
                    <li class="menu__item dropdown-menu__item" :style="{ color: colorText }"><AtomSpan>API Reference</AtomSpan></li>
                    <li class="menu__item dropdown-menu__item" :style="{ color: colorText }"><AtomSpan>Guides</AtomSpan></li>
               </ul>
            </li>
            <li class="menu__item"><AtomSpan :style="{ color: colorText }">Beta</AtomSpan></li>
            <li class="menu__item"><AtomSpan :style="{ color: colorText }">Pricing</AtomSpan></li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
.menu {
    display: flex;

    .menu__item {
        margin: 0 20px 0 20px;
        display: flex;
        align-items: center;

        .svg {
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 5px;
            rotate: 90deg;
            cursor: pointer;
        }
    }

    .dropdown-menu {
        position: absolute;
        top: 40px;
        left: 303px;
        visibility: hidden;
        transition: all .4s ease;
    }

    .dropdown-menu__developers {
        left: 417px;
    }

    .dropdown-menu__item {
        margin-top: 5px;
    }

    .menu__item:hover .dropdown-menu {
        visibility: visible;
    }
}
</style>