<script setup lang="ts">
import { useRoute, useRouter } from "vue-router"
import { computed } from "vue"
import { getCaseByName, getProjectByName } from "@service/projectService.ts";

const router = useRouter()
const route = useRoute()

const projectName = getProjectByName(String(route.params.projectName))
const caseName = getCaseByName(String(route.params.projectName), String(route.params.caseName))

const breadcrumbs = computed(() => {
    const bc: { label: string; to?: any }[] = []

    if (route.name !== "Home") {
        bc.push({ label: "Главная", to: { name: "Home" } })
    }

    if (route.params.projectName) {
        bc.push({
            label: String(projectName?.getTitle()),
            to: route.name === "Case"
                ? { name: "Project", params: { projectName: route.params.projectName } }
                : null
        })
    }

    if (route.params.caseName) {
        bc.push({
            label: String(caseName?.getTitle()),
        })
    }

    return bc
})

function goTo(link: any) {
    if (link?.to) {
        router.push(link.to)
    }
}
</script>

<template>
    <nav class="breadcrumbs" v-if="breadcrumbs.length > 0">
        <span
            v-for="(bc, index) in breadcrumbs"
            :key="index"
            class="breadcrumbs__item"
        >
            <span
              v-if="bc.to"
              class="breadcrumbs__link"
              @click="goTo(bc)"
            >
                {{ bc.label }}
            </span>

            <span v-else class="breadcrumbs__current">{{ bc.label }}</span>

            <span v-if="index < breadcrumbs.length - 1" class="breadcrumbs__divider"> / </span>
        </span>
    </nav>
</template>

<style scoped lang="scss">
.breadcrumbs {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.035em;

    margin-top: 120px;
    z-index: 10;

    &__item {
        display: flex;
        align-items: center;
    }

    &__link {
        cursor: pointer;
        padding: 10px;
        color: var(--color-primary);
        transition: color 0.2s;

        &:hover {
            opacity: 0.8;
        }
    }

    &__current {
        padding: 10px;
        color: #888888;
    }

    &__divider {
        color: #AAAAAA;
    }
}
</style>
