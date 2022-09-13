import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdatepolicyComponent } from './adminupdatepolicy.component';

describe('AdminupdatepolicyComponent', () => {
  let component: AdminupdatepolicyComponent;
  let fixture: ComponentFixture<AdminupdatepolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminupdatepolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminupdatepolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
