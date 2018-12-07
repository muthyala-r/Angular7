import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class TodoComponent{
    form : FormGroup;
    constructor(fb : FormBuilder){
        this.form = fb.group({
            name : ['',Validators.required],
            email : ['']
        })
    }
}