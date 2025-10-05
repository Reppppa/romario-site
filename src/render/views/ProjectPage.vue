<script setup lang="ts">
import { useRoute } from "vue-router";

import WelcomeBlock from "@components/template/WelcomeBlock.vue";
import Card from "@components/template/Card.vue";
import GridContainer from "@components/template/GridContainer.vue";
import PointSection from "@components/template/PointSection.vue";
import Breadcrumbs from "@components/layout/Breadcrumbs.vue";
import {getProjectByName} from "@service/projectService.ts";
import AboutSection from "@components/template/AboutSection.vue";

const route = useRoute();
const projectName = String(route.params.projectName);
const projectData = getProjectByName(projectName)!.getData();

function isReversed(index: number) {
    return index % 2 === 0
}

</script>

<template>
    <div class="project-page container">
        <Breadcrumbs />

        <WelcomeBlock
            :title="projectData?.getTitle()"
            :imgName="projectData?.getImgName()"
            :description="projectData?.getDescription()"
        />

        <GridContainer class="project-page__cases" v-if="projectData.getCases().length > 0">
            <template v-slot:title>
                <div class="project-page__title title accent">Немного кейсов</div>
            </template>

            <template v-slot:content>
                <router-link
                    v-for="item in projectData.getCases()"
                    :class="{'disabled': !item.isDoneProject()}"
                    class="project-block__card"
                    :to="{ name: 'Case', params: { projectName, caseName: item.getRouteName() } }"
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

        <template v-for="(section, index) in projectData.getSection()" >

            <AboutSection
                v-if="section.isInfoBlock()"
                v-show="section.getDescription()"
                :title="section.getTitle()"
                :description="section.getDescription()"
                class="project-page__about-section"
            />

            <PointSection
                v-else
                :key="index"
                :imgName="section.getImgName()"
                :title="section.getTitle()"
                :points="section.getPoints()"
                :reverse="isReversed(index)"
                class="project-page__section"
            />
        </template>
    </div>
</template>

<style scoped lang="scss">

.project-page {
    &__title {
        margin-bottom: 50px;
        text-align: center;
    }

    &__cases {
        margin: 100px 0;
    }

    &__about-section {
        padding: 100px 0;
    }

    &__section {
        padding: 100px 0;
    }

    & .welcome-block {
        margin-top: -100px;

        &__actions {
            display: flex;
            flex-direction: row;
            gap: 20px;
            margin-top: 40px;
        }

    }
}

</style>