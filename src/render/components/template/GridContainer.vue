<script setup lang="ts">

</script>

<template>
    <div class="grid-container">
        <slot name="title"></slot>

        <div class="grid-container__content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">

.grid-container {
    display: grid;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    &__content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        column-gap: 20px;
        row-gap: 40px;
    }
}

</style>