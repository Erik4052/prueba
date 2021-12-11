import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NopaymentsComponent } from './nopayments.component';

describe('NopaymentsComponent', () => {
  let component: NopaymentsComponent;
  let fixture: ComponentFixture<NopaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NopaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NopaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
