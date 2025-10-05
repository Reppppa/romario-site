<script setup lang="ts">

import { getImgSrc } from "@/render/service/projectService.ts";

interface Props {
    title?: string
    imgName?: string
    subtitle?: string
    description?: string
}

const model = defineProps<Props>()

</script>

<template>
    <section class="welcome-block">
        <div class="welcome-block__inner">
            <div class="welcome-block__content">
                <div class="welcome-block__subtitle" v-if="model.subtitle">{{ model.subtitle }}</div>

                <div class="welcome-block__title title accent" v-if="model.title">{{ model.title }}</div>

                <div class="welcome-block__description subtitle" v-if="model.description">{{ model.description }}</div>

                <slot name="additional"></slot>
            </div>

            <div class="welcome-block__image" v-if="model.imgName">
                <img :src="getImgSrc(model.imgName)" alt="" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.welcome-block {
    &__inner {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 200px 0 100px;
    }

    &__image {
        width: 500px;
        height: 400px;

        & img {
            object-fit: contain;
        }
    }

    &__content {
        max-width: 650px;
    }

    &__subtitle {
        font-size: var(--font-size-P3);
        font-weight: 600;
        letter-spacing: 0.04em;
        margin-bottom: 1em;
    }

    &__title {
        margin-bottom: 0.75em;
    }

    &__description {
        letter-spacing: 0.04em;
    }
}
</style>