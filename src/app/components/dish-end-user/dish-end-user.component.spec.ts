import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishEndUserComponent } from './dish-end-user.component';

describe('DishEndUserComponent', () => {
  let component: DishEndUserComponent;
  let fixture: ComponentFixture<DishEndUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishEndUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishEndUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
