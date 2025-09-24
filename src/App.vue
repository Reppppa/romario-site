<script setup lang="ts">
import Header from "@components/layout/Header.vue";
import Footer from "@components/layout/Footer.vue";
</script>

<template>
    <Header/>

    <main class="container">
        <router-view />
    </main>

    <Footer />
</template>

<style scoped lang="scss">

</style>
