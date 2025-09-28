<script setup lang="ts">
import { useRoute } from "vue-router";

import WelcomeBlock from "@components/template/WelcomeBlock.vue";
import Card from "@components/template/Card.vue";
import GridContainer from "@components/template/GridContainer.vue";
import PointSection from "@components/template/PointSection.vue";
import Breadcrumbs from "@components/layout/Breadcrumbs.vue";
import {getProjectByName} from "@service/projectService.ts";

const route = useRoute();
const projectName = String(route.params.projectName);

const projectData = getProjectByName(projectName)!.getData();

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

        <PointSection
            v-for="(section, index) in projectData.getSection()"
            :key="index"
            :imgName="section.getImgName()"
            :title="section.getTitle()"
            :points="section.getPoints()"
            :reverse="index % 2 === 0"
            class="project-page__section"
        />
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