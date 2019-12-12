import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampTabsPage } from './camp-tabs.page';

describe('CampTabsPage', () => {
  let component: CampTabsPage;
  let fixture: ComponentFixture<CampTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
