export class Quotes {
    public showDescription:boolean;
    constructor(public id:number, public text:string, public author:string,public publisher:string, public completeDate:Date,public upVote:number,public downVote:number){
        this.showDescription=false
    }
}
