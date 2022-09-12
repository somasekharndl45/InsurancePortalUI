import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicysubmissionComponent } from './policysubmission.component';

describe('PolicysubmissionComponent', () => {
  let component: PolicysubmissionComponent;
  let fixture: ComponentFixture<PolicysubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicysubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicysubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
