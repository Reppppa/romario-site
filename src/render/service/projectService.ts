import data from "../../../data/projects.json"
import ProjectList from "@service/model/project/project-list"

const projectList = new ProjectList(data)

export function getProjectByName(projectName: string) {
    return projectList.getData().find((p) => p.getRouteName() === projectName)
}

export function getCaseByName(projectName: string, caseName: string) {
    const project = getProjectByName(projectName)

    if (!project) return null

    return project.getData().getCases().find((c) => c.getRouteName() === caseName)
}

export function getImgSrc(imgName: string): string {
    const folder = imgName.split("_")[0]
    return new URL(`../assets/img/${folder}/${imgName}.webp`, import.meta.url).href;
}
