import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DefaultThemeComponent } from './default-theme.component';

describe('DefaultThemeComponent', () => {
  let component: DefaultThemeComponent;
  let fixture: ComponentFixture<DefaultThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultThemeComponent],
      imports: [NoopAnimationsModule, LayoutModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
