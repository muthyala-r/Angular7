import { HttpClient } from "@angular/common/http";
import {map} from 'rxjs/operators'

export class EmployeeService{


    constructor(private http:HttpClient){

    }
    getAllEmp(){
      return this.http.get('...').pipe(
          map(
          (res) => res
      )
      )
    }

    addEmployee(employee){
      
        return this.http.put('...',employee).pipe(
            map(
            (res) => res
        )
        )
    }

    deleteEmployee(empId : number){
        return this.http.delete('...').pipe(
            map(
            (res) => res
        )
        )
    }
}