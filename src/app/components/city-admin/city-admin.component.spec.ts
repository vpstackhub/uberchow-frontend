import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAdminComponent } from './city-admin.component';

describe('CityAdminComponent', () => {
  let component: CityAdminComponent;
  let fixture: ComponentFixture<CityAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
