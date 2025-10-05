<script setup lang="ts">

import { getImgSrc } from "@/render/service/projectService.ts";

interface CardProps {
    imgName: string
    tag: string
    title: string
    description: string
    isPdf?: boolean
    isDone: boolean
}

defineProps<CardProps>()
</script>

<template>
    <div class="card">
        <div class="card__img">
            <img :src="getImgSrc(imgName)" alt="">
        </div>

        <div class="card__stub" v-if="!isDone">
            В разработке
        </div>
        
        <div class="card__inner">
            <div class="card__content">
                <div class="card__subtitle">{{ tag }}</div>
                <div class="card__title">{{ title }}</div>
                <div class="card__description">{{ description }}</div>
            </div>

            <div class="card__btn accent">Подробнее</div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.card {
    position: relative;

    display: flex;
    flex-direction: column;
    height: 600px;
    width: 100%;
    max-width: 450px;
    min-width: 300px;
    background-color: var(--color-secondary);
    border-radius: 40px;
    overflow: hidden;

    cursor: pointer;

    &:hover {
        //box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.07);

        .card__img img {
            transform: scale(1.1);
        }
    }

    &__inner {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
        padding: 24px 24px 40px;
    }

    &__content {
        position: relative;

        display: flex;
        flex-direction: column;
        margin-bottom: auto;
    }

    &__img {
        width: 100%;
        min-height: 270px;
        display: block;
        border-radius: 40px;
        overflow: hidden;

        & img {
            transition: transform 0.3s ease;
            object-fit: cover;
        }
    }

    &__subtitle {
        font-size: var(--font-size-P3);
        font-weight: 500;
        margin-bottom: 16px;
    }

    &__title {
        font-size: var(--font-size-P1);
        line-height: 170%;
        letter-spacing: 0.035em;
        font-weight: 600;
        margin-bottom: 24px;
    }

    &__description {
        font-size: var(--font-size-P2);
        line-height: 170%;
        letter-spacing: 0.035em;
    }

    &__btn {
        position: relative;
        margin-top: 24px;
        font-size: var(--font-size-P3);
        font-weight: 600;
        letter-spacing: 0.035em;
        width: 100%;
        padding-bottom: 16px;
    }

    &__stub {
        font-size: var(--font-size-P3);
        font-weight: 600;

        position: absolute;
        top: 20px;
        right: 20px;
        padding: 10px 15px;
        border-radius: 5px;
        background-color: var(--color-white);
        color: var(--color-primary);
    }
}

.card__btn::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 26%;
    background-color: var(--color-primary);
    transition: width 0.3s ease;
}

</style>