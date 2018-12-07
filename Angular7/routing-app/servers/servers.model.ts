export class Servers{
    public id : number;
    public name : string;
    public status : string;

    constructor(argId : number,argName:string,argStatus:string){
          this.id = argId;
          this.name = argName;
          this.status = argStatus;
    }
}