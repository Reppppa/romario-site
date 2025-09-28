import ProjectData from "@service/model/project/project-data.ts";

export default class ProjectItem {
    id: number;
    routeName: string;
    imgName: string;
    tag: string;
    title: string;
    description: string;
    isDone: boolean;
    data: ProjectData;
    pdf?: string;

    constructor({ id, routeName, imgName, tag, title, description, isDone, data, pdf }: ProjectItem) {
        this.id = id;
        this.routeName = routeName;
        this.imgName = imgName;
        this.tag = tag;
        this.title = title;
        this.description = description;
        this.isDone = isDone;
        this.data = new ProjectData(data);
        this.pdf = pdf;
    }

    getId () {
        return this.id;
    }

    getRouteName () {
        return this.routeName;
    }

    getImgName (): string {
        return this.imgName;
    }

    getTag () {
        return this.tag;
    }

    getTitle () {
        return this.title;
    }

    getDescription () {
        return this.description;
    }

    isDoneProject () {
        return this.isDone;
    }

    getData () {
        return this.data;
    }
}