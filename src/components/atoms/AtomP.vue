<template>
    <p class="p">
        <slot/>
    </p>
</template>

<style scoped lang="scss">
.p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #fff;
    background: none;
    cursor: default;
    display: flex;
    align-items: center;
}
</style>