import ProjectSectionPoint from "@service/model/project/project-section-point.ts";

export default class ProjectSectionItem {
    title?: string;
    description?: string;
    imgName?: string;
    isInfo?: boolean;
    points: ProjectSectionPoint[];

    constructor({ title, imgName, description, isInfo = false, points }: ProjectSectionItem) {
        this.title = title;
        this.description = description;
        this.imgName = imgName;
        this.isInfo = isInfo;
        this.points = points ? points.map((p) => new ProjectSectionPoint(p)) : [];
    }

    getTitle () {
        return this.title;
    }

    getDescription () {
        return this.description;
    }

    getImgName () {
        return this.imgName;
    }

    getPoints () {
        return this.points
    }

    isInfoBlock () {
        return this.isInfo;
    }
}