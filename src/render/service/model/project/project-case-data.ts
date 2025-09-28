import ProjectSectionItem from "@service/model/project/project-section-item.ts";


export default class ProjectCaseData {
    imgName: string;
    title: string;
    description: string;
    descriptionList: string[];
    sections?: ProjectSectionItem[]

    constructor({ imgName, title, description, descriptionList, sections }: ProjectCaseData) {
        this.imgName = imgName;
        this.title = title;
        this.description = description;
        this.descriptionList = descriptionList;
        this.sections = sections ? sections.map((s) => new ProjectSectionItem(s)) : [];
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

    getDescriptionList (): string[] {
        return this.descriptionList;
    }

    getSection () {
        return this.sections;
    }
}