export class MyLatestProjects {
    public projectImageUrl: string;
    public projectDate: string;
    public projectHeading: string;
    public projectDescription: string;
    public projectUrl:string

    constructor(projectImageUrl: string, projectDate: string, projectHeading: string, projectDescription: string, projectUrl: string) {
        this.projectImageUrl = projectImageUrl;
        this.projectDate = projectDate;
        this.projectHeading = projectHeading;
        this.projectDescription = projectDescription;
        this.projectUrl= projectUrl;
        console.log(this.projectUrl)    
    }
}
