import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProfileItemsComponent } from './display-profile-items.component';

describe('DisplayProfileItemsComponent', () => {
  let component: DisplayProfileItemsComponent;
  let fixture: ComponentFixture<DisplayProfileItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayProfileItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProfileItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
