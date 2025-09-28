<script setup lang="ts">
import { useRoute } from "vue-router";

import WelcomeBlock from "@components/template/WelcomeBlock.vue";
import PointSection from "@components/template/PointSection.vue";
import Breadcrumbs from "@components/layout/Breadcrumbs.vue";
import { getCaseByName } from "@service/projectService.ts";

const route = useRoute();
const projectName = String(route.params.projectName)
const caseName = String(route.params.caseName)

const projectCase = getCaseByName(projectName, caseName)!.getData()

</script>

<template>
    <div class="project-case container">

        <Breadcrumbs />

        <WelcomeBlock
            :title="projectCase.getTitle()"
            :imgName="projectCase.getImgName()"
        >
            <template v-slot:additional>
                <div class="list-dots subtitle" v-for="item in projectCase.getDescriptionList()">{{ item }}</div>
            </template>
        </WelcomeBlock>

        <PointSection
            v-for="(section, index) in projectCase.getSection()"
            :key="index"
            :imgName="section.getImgName()"
            :title="section.getTitle()"
            :points="section.getPoints()"
            :reverse="index % 2 === 0"
            class="project-case__section"
        />
    </div>
</template>

<style scoped lang="scss">

.project-case {
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

    .welcome-block {
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