<script setup lang="ts">
import Header from "@components/layout/Header.vue";
import Footer from "@components/layout/Footer.vue";
import BackToTop from "@components/layout/BackToTop.vue";
</script>

<template>
    <Header/>

    <main id="main">
        <router-view v-slot="{ Component }">
            <transition name="page-fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </main>

    <BackToTop />
    <Footer />
</template>

<style scoped lang="scss">

.page-fade-enter-active,
.page-fade-leave-active {
    transition: opacity 200ms ease;
}
.page-fade-enter-from,
.page-fade-leave-to {
    opacity: 0;
}

</style>
