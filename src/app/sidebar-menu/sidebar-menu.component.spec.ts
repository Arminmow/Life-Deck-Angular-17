import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuComponent } from './sidebar-menu.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('SidebarMenuComponent', () => {
  let component: SidebarMenuComponent;
  let fixture: ComponentFixture<SidebarMenuComponent>;

  const mockActivities = [
    {
      title: 'Chess',
      timeSpent: '20h 50m',
      subActivities: [
        {
          title: 'Playing Chess',
          timeSpent: '20h',
        },
        {
          title: 'Learning Chess',
          timeSpent: '50m',
        },
      ],
    },
    {
      title: 'Gaming',
      timeSpent: '11h',
      subActivities: [
        {
          title: 'Warhammer 2',
          timeSpent: '10h',
        },
        {
          title: 'GTA SA',
          timeSpent: '1h',
        },
      ],
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuComponent],
      providers: [provideAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarMenuComponent);
    component = fixture.componentInstance;
    component.activities = mockActivities;
    fixture.detectChanges();
  });

  it('should create nz menu', () => {
    const menuElement =
      fixture.debugElement.nativeElement.querySelector('ul.ant-menu');

    expect(menuElement).toBeTruthy();
  });

  it('Should create correct number of menu items when created', () => {
    const menuItemElements =
      fixture.debugElement.nativeElement.querySelectorAll(
        'li.ant-menu-submenu'
      );

    expect(menuItemElements.length).toBe(mockActivities.length);
  });

  it('Should render correct menu item titles when created', () => {
    const menuItemElements =
      fixture.debugElement.nativeElement.querySelectorAll(
        'li.ant-menu-submenu > div.ant-menu-submenu-title'
      );

    menuItemElements.forEach((el: Element, idx: number) => {
      expect(el.textContent).toContain(mockActivities[idx].title);
    });
  });

  it('Should create correct number of submenu items when created', () => {
    const menuItemElements =
      fixture.debugElement.nativeElement.querySelectorAll(
        'li.ant-menu-submenu'
      );

    menuItemElements.forEach((submenuEl: Element, idx: number) => {
      const subItems = submenuEl.querySelectorAll('li.ant-menu-item');
      expect(subItems.length).toBe(mockActivities[idx].subActivities.length);
    });
  });

  it('Should render correct submenu items titles when created', () => {
    const menuItemElements =
      fixture.debugElement.nativeElement.querySelectorAll(
        'li.ant-menu-submenu'
      );

    menuItemElements.forEach((submenuEl: Element, idx: number) => {
      const subItems = submenuEl.querySelectorAll('li.ant-menu-item');
      subItems.forEach((subItemEl, subIdx) => {
        expect(subItemEl.textContent).toContain(
          mockActivities[idx].subActivities[subIdx].title
        );
      });
    });
  });
});
