import { OnInit } from "@angular/core";
import { EmployeeService } from "./employee.service";


export class EmployeeComponent implements OnInit{

    employee : any[] = [];
    message : ''
    constructor(private empService:EmployeeService){

    }
    ngOnInit(): void {
        this.empService.getAllEmp().subscribe(
            (eList)=>{
                this.employee = <any[]>eList;
            }
        )
    }


    add(){
       const emp ={ename : '...'}
       this.empService.addEmployee(emp).subscribe(
           res => this.employee.push(res),
           err => this.message = err 
       )
    }

    delete(empId){
        if(confirm('Are you sure?')){
            this.empService.deleteEmployee(empId).subscribe();
        }
    }
}

