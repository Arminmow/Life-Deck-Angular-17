import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityModalComponent } from './add-activity-modal.component';

describe('AddActivityModalComponent', () => {
  let component: AddActivityModalComponent;
  let fixture: ComponentFixture<AddActivityModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddActivityModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddActivityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have false visibility by default', () => {
    expect(component.isVisible).toBeFalse();
  });

  it('Should set visibility to true when showModal is called', () => {
    component.showModal();

    expect(component.isVisible).toBeTrue();
  });

  it('Should set visibility to false when hideModal is called', () => {
    component.isVisible = true;

    component.hideModal();

    expect(component.isVisible).toBeFalse();
  });
});
