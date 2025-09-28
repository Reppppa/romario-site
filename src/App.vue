<script setup lang="ts">
import Header from "@components/layout/Header.vue";
import Footer from "@components/layout/Footer.vue";
import BackToTop from "@components/layout/BackToTop.vue";
</script>

<template>
    <Header/>

    <main>
        <router-view />
    </main>

    <BackToTop />
    <Footer />
</template>

<style scoped lang="scss"></style>
