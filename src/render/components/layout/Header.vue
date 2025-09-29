<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from "vue-router";
import BehanceIcon from "@assets/icon/BehanceIcon.vue";
import TelegramOutlineIcon from "@assets/icon/TelegramOutlineIcon.vue";
import CvIcon from "@assets/icon/CvIcon.vue";

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


const showPopup = ref(false)
const timeoutId = ref<ReturnType<typeof setTimeout> | null>(null)

function copyText(text: string) {
    if (timeoutId.value) {
        clearTimeout(timeoutId.value)
        showPopup.value = false
        timeoutId.value = null
    }

    navigator.clipboard.writeText(text)
        .then(() => {
            showPopup.value = true

            timeoutId.value = setTimeout(() => {
                showPopup.value = false
                timeoutId.value = null
            }, 2000)
        })
        .catch(() => {})
}

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
                <span class="header__contacts-item phone" @click="copyText('+79956121337')">
                    +7 (995) 612<span class="accent">13-37</span>
                    <span v-if="showPopup" class="popup">Номер скопирован!</span>
                </span>

                <a class="header__contacts-item" href="https://www.behance.net/psymeow" target="_blank">
                    <BehanceIcon />
                </a>

                <a class="header__contacts-item" href="https://t.me/Romayrio" target="_blank">
                    <TelegramOutlineIcon />
                </a>

                <a class="header__contacts-item" href="#">
                    <CvIcon />
                </a>
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

        &:hover {
            opacity: 0.7;
        }
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
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        &-item {
            display: flex;
            padding: 5px;
            border-radius: 5px;
            cursor: pointer;

            &.phone {
                user-select: none;

                position: relative;
                gap: 10px;
                padding: 10px 10px 5px;
                letter-spacing: 0.14em;
                font-weight: 600;
            }

            &:hover {
                background-color: rgba(242, 243, 245, 0.5);
            }
        }
    }
}

.popup {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 10px;
    background: var(--color-primary);
    color: var(--color-white);
    padding: 10px;
    border-radius: 8px;
    font-size: 14px;
    letter-spacing: 0.035em;
    white-space: nowrap;
    animation: fadeInOut 2s forwards;
}

@keyframes fadeInOut {
    0% { opacity: 0; transform: translate(-50%, 10px); }
    10% { opacity: 1; transform: translate(-50%, 0); }
    90% { opacity: 1; transform: translate(-50%, 0); }
    100% { opacity: 0; transform: translate(-50%, -10px); }
}

</style>