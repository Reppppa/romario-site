
export default class ProjectSectionPoint {
    paragraph: string;
    description: string;

    constructor({ paragraph, description }: ProjectSectionPoint) {
        this.paragraph = paragraph;
        this.description = description;
    }

    getParagraph (): string {
        return this.paragraph;
    }

    getDescription (): string {
        return this.description;
    }
}