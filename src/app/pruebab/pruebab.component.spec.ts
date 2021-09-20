import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebabComponent } from './pruebab.component';

describe('PruebabComponent', () => {
  let component: PruebabComponent;
  let fixture: ComponentFixture<PruebabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
