<script setup lang="ts">
import projectsData from '../../../data/projects.json'
import welcomeData from '../../../data/welcome.json'
import Card from "@components/template/Card.vue";
import ProjectList from "@service/model/project/project-list.ts";
import WelcomeBlock from "@components/template/WelcomeBlock.vue";
import GridContainer from "@components/template/GridContainer.vue";
import Breadcrumbs from "@components/layout/Breadcrumbs.vue";

const projects = new ProjectList(projectsData)
const welcome = welcomeData as any

</script>

<template>
    <div class="main-page container">
        <Breadcrumbs />

        <WelcomeBlock
            :title="welcome.title"
            :imgName="welcome.imgName"
            :subtitle="welcome.subtitle"
            :description="welcome.description"
            class="welcome-block"
            id="welcome"
        >
            <template v-slot:additional>
                <div class="welcome-block__actions">
                    <a href="#project">
                        <button class="welcome-block__button button--primary">Проекты</button>
                    </a>

                    <a href="#footer">
                        <button class="welcome-block__button button--secondary">Связаться со мной</button>
                    </a>
                </div>
            </template>
        </WelcomeBlock>

        <section id="about" class="about-block">
            <div class="about-block__inner">
                <span class="about-block__title title accent" v-html="welcome.section[0].title" />

                <span class="about-block__subtitle subtitle" v-html="welcome.section[0].subtitle" />

                <span class="about-block__description description" v-html="welcome.section[0].description" />
            </div>
        </section>

        <section id="project" class="project-block">
            <div class="project-block__inner">
                <GridContainer>
                    <template v-slot:title>
                        <div class="project-block__title title accent">Мои проекты</div>
                    </template>

                    <template v-slot:content>
                        <router-link
                            v-for="item in projects.getData()"
                            :class="{'disabled': !item.isDoneProject()}"
                            class="project-block__card"
                            :to="{ name: 'Project', params: { projectName: item.getRouteName() } }"
                        >
                            <Card
                                :key="item.getId()"
                                :is-done="item.isDoneProject()"
                                :imgName="item.getImgName()"
                                :tag="item.getTag()"
                                :title="item.getTitle()"
                                :description="item.getDescription()"
                            />
                        </router-link>
                    </template>
                </GridContainer>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">

.welcome-block {
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
}

</style>