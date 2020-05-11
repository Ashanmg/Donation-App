import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationEventComponentComponent } from './donation-event-component.component';

describe('DonationEventComponentComponent', () => {
  let component: DonationEventComponentComponent;
  let fixture: ComponentFixture<DonationEventComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationEventComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationEventComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
