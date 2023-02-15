import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewGridComponent } from './admin-view-grid.component';

describe('AdminViewGridComponent', () => {
  let component: AdminViewGridComponent;
  let fixture: ComponentFixture<AdminViewGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
