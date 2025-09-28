<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from "vue-router";

const route = useRoute()

const scrollY = ref(0)

const onScroll = () => scrollY.value = window.scrollY

const headerStyle = computed(() => {
    const alpha = Math.min(scrollY.value / 100, 0.2)
    const blur = Math.min(scrollY.value / 30, 10)

    return {
        background: `rgba(255,255,255,${alpha})`,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
    }
})

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
    <header class="header" :style="headerStyle">
        <div class="header__inner container">
            <router-link class="header__logo" :to="{ name: 'Home', hash: '#welcome' }">
                <span class="accent">Romario</span>Design
            </router-link>

            <nav class="header__nav">
                <router-link class="header__link" :to="{ name: 'Home', hash: '#about' }">
                    Обо мне
                </router-link>

                <router-link class="header__link" :to="{ name: 'Home', hash: '#project' }">
                    Проекты
                </router-link>

                <router-link class="header__link" :to="{ path: route.path, hash: '#footer' }">
                    Связаться со мной
                </router-link>
            </nav>

            <div class="header__contacts">
                +7 (995) 612 <span class="accent">13-37</span>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">

.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;

    transition: background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease, border-bottom 0.3s ease;

    &__inner {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 100px;

        font-size: var(--font-size-P4);
    }

    &__logo {
        font-weight: 700;
        font-size: var(--font-size-P2);
        line-height: 140%;
        letter-spacing: 0.14em;
        padding: 20px 0;
    }

    &__nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        max-width: 500px;
    }

    &__link {
        letter-spacing: 0.14em;
        font-weight: 600;
        text-wrap: nowrap;
        padding: 20px;
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
            color: var(--color-primary);
        }
    }

    &__contacts {
        letter-spacing: 0.14em;
        font-weight: 600;
    }
}

</style>