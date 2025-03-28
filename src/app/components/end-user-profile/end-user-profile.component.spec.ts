import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserProfileComponent } from './end-user-profile.component';

describe('EndUserProfileComponent', () => {
  let component: EndUserProfileComponent;
  let fixture: ComponentFixture<EndUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndUserProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
