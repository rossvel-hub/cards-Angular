import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndFormComponent } from './end-form.component';

describe('EndFormComponent', () => {
  let component: EndFormComponent;
  let fixture: ComponentFixture<EndFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
