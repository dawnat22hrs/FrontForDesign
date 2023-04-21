<template>
    <button class="btn">
        <slot/>
    </button>
</template>

<style scoped lang="scss">
.btn {
    width: max-content;
    height: 30px;
    background: #24B47E;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
    border-radius: 4px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 11px;
    cursor: pointer;
}

.btn:hover {
    background: #37db9f;
}
</style>