<script setup lang="ts">
import Card from "@components/template/Card.vue";
import ProjectList from "@service/model/project/project-list.ts";
import WelcomeBlock from "@components/template/WelcomeBlock.vue";
import GridContainer from "@components/template/GridContainer.vue";
import Breadcrumbs from "@components/layout/Breadcrumbs.vue";

import projectsData from '../../../data/projects.json'
import welcomeData from '../../../data/welcome.json'
import tewrisMail from '../../../data/tewris-mail.pdf'

import { getImgSrc } from "@/render/service/projectService.ts";
import AboutSection from "@components/template/AboutSection.vue";

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

        <AboutSection
            id="about"
            class="about-section"
            :title="welcome.section[0].title"
            :subtitle="welcome.section[0].subtitle"
            :description="welcome.section[0].description"
        />

        <section id="project" class="project-block">
            <div class="project-block__inner">
                <GridContainer>
                    <template v-slot:title>
                        <div class="project-block__title title accent">Мои проекты</div>
                    </template>

                    <template v-slot:content>
                        <template v-for="item in projects.getData()">
                            <a
                                v-if="item.getPdf()"
                                class="project-block__card"
                                :class="{'disabled': !item.isDoneProject()}"
                                :href="item.getPdf()"
                                target="_blank"
                            >
                                <Card
                                    :key="item.getId()"
                                    :is-done="item.isDoneProject()"
                                    :imgName="item.getImgName()"
                                    :tag="item.getTag()"
                                    :title="item.getTitle()"
                                    :isPdf="item.getPdf() ? true : false"
                                    :description="item.getDescription()"
                                />
                            </a>

                            <router-link
                                v-else
                                class="project-block__card"
                                :class="{'disabled': !item.isDoneProject()}"
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
                    </template>
                </GridContainer>
            </div>
        </section>

        <section class="recommended-block">
            <div class="recommended-block__inner">
                <div class="recommended-block__title title accent">Рекомендации</div>

                <a class="recommended-block__img" :href="tewrisMail" target="_blank" title="Открыть pdf в новой вкладке">
                    <img :src="getImgSrc('main_rec-mail')" alt="Рекомендательное письмо">
                </a>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">

.main-page {
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

    .about-section {
        padding: 100px 0;
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

    .recommended-block {
        &__inner {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 100px 0;
        }

        &__title {
            margin-bottom: 50px;
        }

        &__img {
            max-width: 700px;
            border: 5px solid var(--color-secondary);
            border-radius: 20px;
            overflow: hidden;
            transition: border-color 300ms;

            &:hover {
                border: 5px solid var(--color-primary-background);
            }
        }
    }
}

</style>