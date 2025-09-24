<script setup lang="ts">

import TelegramIcon from "@assets/icon/TelegramIcon.vue";
</script>

<template>
    <footer class="footer" id="footer">
        <div class="footer__inner container">
            <span class="footer__title title accent">Буду ждать обратной связи</span>
            <span class="footer__description description">Давайте вместе создадим прекрасный продукт. Пишите в любое время</span>

            <a href="https://t.me/Romayrio" target="_blank" class="footer__button">
                Связаться в Telegram
                <TelegramIcon />
            </a>
        </div>
    </footer>
</template>

<style scoped lang="scss">

.footer {
    &__inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 100px 0 300px;
    }

    &__title {
        margin-bottom: 50px;
    }

    &__description {
        margin-bottom: 80px;
    }

    &__button {
        font-size: var(--font-size-P1);
        font-weight: 600;
        letter-spacing: 0.04em;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100px;
        width: 500px;
        gap: 26px;
        border: none;
        border-radius: 25px;

        color: var(--color-white);
        background-color: #2f91ed;
        cursor: pointer;

        &:hover {
            opacity: 0.9;
        }
    }
}

</style>