<template>
    <span class="sp">
        <slot/>
    </span>
</template>

<style scoped lang="scss">
.sp {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    background: none;
    display: flex;
    align-items: center;
    cursor: pointer;
}
</style>