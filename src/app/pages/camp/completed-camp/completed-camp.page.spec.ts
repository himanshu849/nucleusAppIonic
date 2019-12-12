import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedCampPage } from './completed-camp.page';

describe('CompletedCampPage', () => {
  let component: CompletedCampPage;
  let fixture: ComponentFixture<CompletedCampPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedCampPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedCampPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
