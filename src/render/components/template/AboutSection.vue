<script setup lang="ts">

interface Props {
    title?: string
    subtitle?: string
    description?: string
}

defineProps<Props>()

</script>

<template>
    <section id="about" class="about-section">
        <div class="about-section__inner">
            <span class="about-section__title title accent" v-if="title" v-html="title" />

            <span class="about-section__subtitle subtitle" v-if="subtitle" v-html="subtitle" />

            <span class="about-section__description description" v-if="description" v-html="description" />
        </div>
    </section>
</template>

<style scoped lang="scss">

.about-section {
    &__inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    &__title {
        margin-bottom: 50px;
    }

    &__subtitle {
        margin-bottom: 24px;
        text-align: center;
        line-height: 150%;
    }

    &__description {
        max-width: 1100px;
        text-align: center;
    }
}

</style>