import { TestBed, async } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';

import { EmployeeService } from './employee.service';
import { from, throwError, empty } from 'rxjs'
describe('EmployeeComponent',()=>{
    let component : EmployeeComponent
    let service : EmployeeService
    beforeEach(()=>{
        service = new EmployeeService(null)
        component = new EmployeeComponent(service)
    })

    it('it should  set employee property with the emp returned from the service',()=>{
        const emp = [1,2,3]
        spyOn(service,'getAllEmp').and.callFake(()=>{
            return from([emp]) 
        })

        component.ngOnInit()
        expect(component.employee.length).toBe(3)
        expect(component.employee).toBe(emp)
        
    })
    it('should add the new employee if success, returned from the service',()=>{
        const emp = {name:'raamu'}
        let spy = spyOn(service,'addEmployee').and.returnValue(from([emp]))
        component.add()
        expect(component.employee.indexOf(emp)).toBeGreaterThan(-1)
    })
    it('should set the message property if server returns an error',()=>{
        const error ='error from service'
        const spy = spyOn(service,'addEmployee').and.returnValue(throwError(error))
        component.add()
        expect(component.message).toBe(error)
    })
    it('should call the service to save the change when add employee',()=>{
       const spy = spyOn(service,'addEmployee').and.callFake(
           res => {return empty()}
       )
       component.add();
       expect(spy).toHaveBeenCalled();
    })
    it('should call the service to delete an employee if the user confirm',()=>{
        spyOn(window,'confirm').and.returnValue(true)
        const spy = spyOn(service,'deleteEmployee').and.returnValue(empty())
        component.delete(1)
        expect(spy).toHaveBeenCalled()
    })

    it('should not call the service to delete an employee if the user cancel',()=>{
        spyOn(window,'confirm').and.returnValue(false)
        const spy = spyOn(service,'deleteEmployee').and.returnValue(empty())
        component.delete(1)
        expect(spy).not.toHaveBeenCalled()
    })

})