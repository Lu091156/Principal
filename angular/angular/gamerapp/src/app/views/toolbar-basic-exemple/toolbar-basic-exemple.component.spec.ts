import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarBasicExempleComponent } from './toolbar-basic-exemple.component';

describe('ToolbarBasicExempleComponent', () => {
  let component: ToolbarBasicExempleComponent;
  let fixture: ComponentFixture<ToolbarBasicExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarBasicExempleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarBasicExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
