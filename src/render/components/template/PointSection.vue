<script setup lang="ts">

import { getImgSrc } from "@/render/utils/helper.ts";
import ProjectSectionPoint from "@service/model/project/project-section-point.ts";

interface PointProps {
    imgName: string;
    title: string;
    reverse: boolean;
    points: ProjectSectionPoint[];
}

defineProps<PointProps>()

</script>

<template>
    <div class="point-section" :class="{ 'right': reverse, 'left': !reverse }">
        <div class="point-section__inner">
            <div
                class="point-section__img"
                :style="{ backgroundImage: `url(${getImgSrc(imgName)})` }"
            />

            <span></span>

            <div class="point-section__content">
                <div class="point-section__title title accent">{{ title }}</div>
                <div class="point-section__point" v-for="(p, index) in points" :key="index">
                    <span>
                        <span class="point-section__paragraph subtitle" v-html="p.getParagraph()"/>
                    </span>

                    <span class="point-section__description description" v-html="p.getDescription()" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.point-section {
    &__inner {
        position: relative;
        display: flex;
        flex-direction: row;
        gap: 40px;
        justify-content: space-between;
    }

    &__img {
        position: absolute;
        width: 65%;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        top: 0;
        bottom: 0;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 57%;
    }

    &__title {
        margin-bottom: 50px;
    }

    &__point {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding-bottom: 40px;
    }

    &__paragraph {
        display: flex;
        flex-direction: row;

        &:before {
            position: relative;
            content: "•";
            font-size: 40px;
            line-height: 0.5em;
            color: var(--color-primary);
            padding-right: 12px;
            padding-top: 0.17em;
        }
    }
}

.point-section.right {
    .point-section__inner {
        flex-direction: row-reverse;
    }

    .point-section__img {
        right: -27%;
    }

    .point-section__content {
        align-items: flex-start;
    }
}

.point-section.left {
    .point-section__img {
        left: -27%;
    }
}

</style>