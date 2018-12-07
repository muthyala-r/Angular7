import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UesrListComponent } from './uesr-list.component';

describe('UesrListComponent', () => {
  let component: UesrListComponent;
  let fixture: ComponentFixture<UesrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UesrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UesrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
