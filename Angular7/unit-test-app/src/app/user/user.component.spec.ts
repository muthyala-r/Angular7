import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService : UserService
  let dataService: DataService
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
   
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
   // fixture.detectChanges();
  });

  it('should create', () => {
   
    expect(component).toBeTruthy();
  });

  it('should use the user name form the service',()=>{
        userService = fixture.debugElement.injector.get(UserService)
        fixture.detectChanges();
        expect(userService.user.name).toEqual(component.userName.name)
  })
  it('should display the username if user is logged in',()=>{
    component.isLoggedIn = true
    fixture.detectChanges()
    let compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('p').textContent).toContain(component.userName.name)
  })
  it('should not display the username if user is not logged in',()=>{
    component.isLoggedIn = false
    fixture.detectChanges()
    let compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('p').textContent).not.toContain(component.userName.name)
  })

  it('should not fetch the data if  not called async ',()=>{
    let dataService = fixture.debugElement.injector.get(DataService)
    let spy =spyOn(dataService,"getDetails").and.returnValue(Promise.resolve('Data'))
    fixture.detectChanges()
    
    expect(component.userdata).toBe(undefined)
    })

    it('should  fetch the data if   called async -aync ',async(()=>{
      let dataService = fixture.debugElement.injector.get(DataService)
      let spy =spyOn(dataService,"getDetails").and.returnValue(Promise.resolve('Data'))
      fixture.detectChanges()
      fixture.whenStable().then(
        () =>{
          expect(component.userdata).toBe('Data')
        }
      )
      
      })
    )
    it('should  fetch the data if   called async -fake',fakeAsync(()=>{
      let dataService = fixture.debugElement.injector.get(DataService)
      let spy =spyOn(dataService,"getDetails").and.returnValue(Promise.resolve('Data'))
      fixture.detectChanges()
      tick()
      expect(component.userdata).toBe('Data')
      })
    )

});
