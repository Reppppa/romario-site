import ProjectSectionPoint from "@service/model/project/project-section-point.ts";

export default class ProjectSectionItem {
    title : string;
    imgName : string;
    points: ProjectSectionPoint[];

    constructor({ title, imgName, points }: ProjectSectionItem) {
        this.title = title;
        this.imgName = imgName;
        this.points = points.map((p) => new ProjectSectionPoint(p));
    }

    getTitle (): string {
        return this.title;
    }

    getImgName (): string {
        return this.imgName;
    }

    getPoints (): ProjectSectionPoint[] {
        return this.points
    }
}