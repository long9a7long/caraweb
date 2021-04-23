/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VeVinhCaraMegaMenuComponent } from './ve-vinh-cara-mega-menu.component';

describe('VeVinhCaraMegaMenuComponent', () => {
  let component: VeVinhCaraMegaMenuComponent;
  let fixture: ComponentFixture<VeVinhCaraMegaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeVinhCaraMegaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeVinhCaraMegaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
