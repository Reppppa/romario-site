import ProjectCase from "@service/model/project/project-case.ts";
import ProjectSectionItem from "@service/model/project/project-section-item.ts";


export default class ProjectData {
    imgName: string;
    title: string;
    description: string;
    descriptionList: string[];
    cases: ProjectCase[]
    sections: ProjectSectionItem[]

    constructor({ imgName, title, description, descriptionList, cases, sections }: ProjectData) {
        this.imgName = imgName;
        this.title = title;
        this.description = description;
        this.descriptionList = descriptionList;
        this.cases = cases.map((c) => new ProjectCase(c));
        this.sections = sections.map((s) => new ProjectSectionItem(s));
    }

    getImgName (): string {
        return this.imgName;
    }

    getTitle (): string {
        return this.title;
    }

    getDescription (): string {
        return this.description;
    }

    getCases (): ProjectCase[] {
        return this.cases
    }

    getSection (): ProjectSectionItem[] {
        return this.sections;
    }
}