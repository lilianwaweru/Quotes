export class Quotes {
    public showDescription:boolean;
    constructor(public id:number, public text:string, public author:string,public publisher:string, public completeDate:Date){
        this.showDescription=false
    }
}
