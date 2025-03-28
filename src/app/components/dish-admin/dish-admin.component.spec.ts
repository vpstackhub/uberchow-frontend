import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishAdminComponent } from './dish-admin.component';

describe('DishAdminComponent', () => {
  let component: DishAdminComponent;
  let fixture: ComponentFixture<DishAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
