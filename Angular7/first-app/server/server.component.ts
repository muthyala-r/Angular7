import { Component, OnInit } from "@angular/core";

@Component({
    selector : 'app-server',
    templateUrl :'./server.component.html',
    styleUrls  : ['./server.component.css']
})

export class serverComponent implements OnInit{
    
    serverId : Number = 10;
    status : string = "offline";
    constructor(){
        this.status = Math.random() > 0.5 ? 'online' : 'offline';
    }
    ngOnInit(): void {
       // throw new Error("Method not implemented.");
    }  

    getServerStatus(){
        return this.status;
    }

    getColor(){
        return this.status = 'online' ? 'green' : 'red';
    }

}