export class MyLatestProjects {
    public projectImageUrl: string;
    public projectHeading: string;
    public projectDescription: string;
    public projectUrl:string

    constructor(projectImageUrl: string, projectHeading: string, projectDescription: string, projectUrl: string) {
        this.projectImageUrl = projectImageUrl;
        this.projectHeading = projectHeading;
        this.projectDescription = projectDescription;
        this.projectUrl= projectUrl;
        console.log(this.projectUrl)    
    }
}
