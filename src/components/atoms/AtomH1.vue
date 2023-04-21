<template>
    <h1 class="title">
        <slot/>
    </h1>
</template>

<style scoped lang="scss">
.title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #fff;
    background: none;
    cursor: default;
}
</style>