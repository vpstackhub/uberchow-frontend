import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserSignUpComponent } from './end-user-sign-up.component';

describe('EndUserSignUpComponent', () => {
  let component: EndUserSignUpComponent;
  let fixture: ComponentFixture<EndUserSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndUserSignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndUserSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
