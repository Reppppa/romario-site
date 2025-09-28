import ProjectCaseData from "@service/model/project/project-case-data.ts";

export default class ProjectCase {
    id: number;
    routeName: string;
    imgName: string;
    tag: string;
    title: string;
    description: string;
    isDone: boolean;
    data: ProjectCaseData;

    constructor({ id, routeName, imgName, tag, title, description, isDone, data }: ProjectCase)  {
        this.id = id;
        this.routeName = routeName;
        this.imgName = imgName;
        this.tag = tag;
        this.title = title;
        this.description = description;
        this.isDone = isDone;
        this.data = new ProjectCaseData(data);
    }

    getId (): number {
        return this.id;
    }

    getRouteName(): string {
        return this.routeName;
    }

    getImgName (): string {
        return this.imgName;
    }

    getTag (): string {
        return this.tag;
    }

    getTitle (): string {
        return this.title;
    }

    getDescription (): string {
        return this.description;
    }

    isDoneProject (): boolean {
        return this.isDone;
    }

    getData () {
        return this.data;
    }
}