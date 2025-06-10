import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
      providers: [provideAnimations()]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have visible initially false', () => {
    expect(component.visible).toBeFalse();
  });

  it('Should open drawer', () => {
    component.open();
    expect(component.visible).toBeTrue();
  });

  it('Should close drawer', () => {
    component.visible = true;
    component.close();
    expect(component.visible).toBeFalse();
  });

  it('should toggle drawer visibility when clicking the button', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(component.visible).toBeTrue();
  });
});
