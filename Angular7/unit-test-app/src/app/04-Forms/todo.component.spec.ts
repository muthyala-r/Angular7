import { TodoComponent } from './todo-component';
import { FormBuilder } from '@angular/forms';

describe('TodoComponent',()=>{
   let component : TodoComponent
   beforeEach(()=>{
     component = new TodoComponent(new FormBuilder());
   })

   it('should create a form with name control',()=>{
       expect(component.form.contains('name')).toBeTruthy();
   })
   it('should make the name control required',()=>{
       const control = component.form.get('name');
       control.setValue('');
    expect(control.valid).toBeFalsy();
    })
    it('should make the name control required',()=>{
        const control = component.form.get('name');
        control.setValue('Angular');
     expect(control.valid).toBeTruthy();
     })
   it('should create a form with email control',()=>{
    expect(component.form.contains('email')).toBeTruthy();
    })
})