<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

const isVisible = ref(false)

function handleScroll() {
    isVisible.value = window.scrollY > 300 // показываем кнопку после 300px
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
    <button
        v-if="isVisible"
        class="back-to-top"
        @click="scrollToTop"
    >↑</button>
</template>

<style scoped lang="scss">
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 70px;
    height: 70px;

    opacity: 0.4;
    cursor: pointer;

    border-radius: 50%;
    font-size: 24px;
    line-height: 0;
    font-weight: bold;
    background-color: var(--color-white);
    color: var(--color-primary);

    border: 3px solid var(--color-primary);
    display: flex;
    align-items: center;

    justify-content: center;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);

    transition: opacity 0.3s ease;

    &:hover {
        opacity: 1;
        color: var(--color-white);
        background-color: var(--color-primary);
    }
}
</style>
