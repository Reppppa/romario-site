<script setup lang="ts">
import projects from '@assets/data/project.json'

function getPreviewImgUrl (id: number) {
    return new URL(`../assets/img/project-preview-img-${id}.png`, import.meta.url).href
}

</script>

<template>
    <div class="main-page" id="welcome">
        <section class="welcome-block">
            <div class="welcome-block__inner">
                <div class="welcome-block__content">
                    <div class="welcome-block__subtitle">Hi! I’m Roma</div>

                    <div class="welcome-block__title title accent">Product designer</div>

                    <div class="welcome-block__description subtitle">
                        Уже более 5 лет превращаю идеи в продуманные, удобные и красивые интерфейсы
                    </div>

                    <div class="welcome-block__actions">
                        <a href="#project">
                            <button class="welcome-block__button button--primary">Проекты</button>
                        </a>

                        <a href="#footer">
                            <button class="welcome-block__button button--secondary">Связаться со мной</button>
                        </a>
                    </div>
                </div>

                <div class="welcome-block__image">
                    <img src="@assets/img/img_welcome.png" alt="welcome-image" />
                </div>
            </div>
        </section>

        <section id="about" class="about-block">
            <div class="about-block__inner">
                <div class="about-block__title title accent">Обо мне</div>

                <div class="about-block__subtitle subtitle">
                    Привет! Я Рома, Senior Product Designer имеющий 5+ лет опыта работы
                </div>

                <div class="about-block__description description">
                    Последние 4 года я работал в FoodTech компании с более чем 500 ресторанных сетей в Саудовской Аравии
                    имеющих 600 000+ заказов в месяц, разрабатывал и развивал B2B и B2C приложения, среди которых Admin Pannel
                    приложение, Core приложение, агрегатор, интерфейс ресторанного киоска
                </div>
            </div>
        </section>

        <section id="project" class="project-block">
            <div class="project-block__inner">
                <div class="project-block__title title accent">Мои проекты</div>
                <div class="project-block__content">
                    <div
                        v-for="(item) in projects"
                        :key="item.id"
                        class="project-block__card card"
                    >
                        <div class="card__inner">
                            <img class="card__img" :src="getPreviewImgUrl(item.id)" alt="">

                            <div class="card__content">
                                <div class="card__subtitle">{{ item.tag }}</div>
                                <div class="card__title">{{ item.name }}</div>
                                <div class="card__description">{{ item.description }}</div>
                                <div class="card__btn accent">Подробнее</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
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
    &__image img {
        width: 100%;
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

    &__actions {
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin-top: 40px;
    }

    &__button {
        font-size: var(--font-size-P3);
        font-weight: 600;
        letter-spacing: 0.02em;
        color: var(--color-primary);
        background-color: transparent;

        border: 1px solid var(--color-secondary);
        padding: 15px 30px;
        border-radius: 25px;
        cursor: pointer;
    }
    & .button--primary {
        color: var(--color-white);
        background-color: var(--color-primary);

        &:hover {
            opacity: 0.9;
        }
    }

    & .button--secondary {
        &:hover {
            background-color: var(--color-primary-background);
        }
    }
}

.about-block {
    &__inner {
        padding: 100px 0;
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
        line-height: 150%;
    }
}

.project-block {
    &__inner {
        display: flex;
        flex-direction: column;
        padding: 100px 0;
    }

    &__title {
        text-align: center;
        margin-bottom: 50px;
    }

    &__content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: 0 auto;

        column-gap: 20px;
        row-gap: 40px;
    }
}

</style>