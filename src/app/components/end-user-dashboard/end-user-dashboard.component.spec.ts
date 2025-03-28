import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserDashboardComponent } from './end-user-dashboard.component';

describe('EndUserDashboardComponent', () => {
  let component: EndUserDashboardComponent;
  let fixture: ComponentFixture<EndUserDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndUserDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
