import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormEndComponent } from './modal-form-end.component';

describe('ModalFormEndComponent', () => {
  let component: ModalFormEndComponent;
  let fixture: ComponentFixture<ModalFormEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFormEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFormEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
