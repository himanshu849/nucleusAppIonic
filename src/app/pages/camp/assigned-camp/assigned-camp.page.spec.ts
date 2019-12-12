import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedCampPage } from './assigned-camp.page';

describe('AssignedCampPage', () => {
  let component: AssignedCampPage;
  let fixture: ComponentFixture<AssignedCampPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedCampPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedCampPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
