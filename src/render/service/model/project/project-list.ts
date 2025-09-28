import ProjectItem from "@service/model/project/project-item.ts";

export default class ProjectList {
    data: ProjectItem[];

    constructor(jsonArray: any[]) {
        this.data = jsonArray.map((item) => new ProjectItem(item));
    }

    getData (): ProjectItem[] {
        return this.data;
    }
}
