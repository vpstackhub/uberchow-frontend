import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserLoginComponent } from './end-user-login.component';

describe('EndUserLoginComponent', () => {
  let component: EndUserLoginComponent;
  let fixture: ComponentFixture<EndUserLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndUserLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
