import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClickComponent } from './form-click.component';

describe('FormClickComponent', () => {
  let component: FormClickComponent;
  let fixture: ComponentFixture<FormClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormClickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
