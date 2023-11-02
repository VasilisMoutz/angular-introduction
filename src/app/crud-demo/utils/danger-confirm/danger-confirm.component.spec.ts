import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerConfirmComponent } from './danger-confirm.component';

describe('DangerConfirmComponent', () => {
  let component: DangerConfirmComponent;
  let fixture: ComponentFixture<DangerConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DangerConfirmComponent]
    });
    fixture = TestBed.createComponent(DangerConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
