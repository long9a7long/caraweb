/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YeuThanhHonMegaMenuComponent } from './yeu-thanh-hon-mega-menu.component';

describe('YeuThanhHonMegaMenuComponent', () => {
  let component: YeuThanhHonMegaMenuComponent;
  let fixture: ComponentFixture<YeuThanhHonMegaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeuThanhHonMegaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeuThanhHonMegaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
