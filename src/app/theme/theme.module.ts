import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultThemeComponent } from './default-theme/default-theme.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [DefaultThemeComponent],
  imports: [CommonModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule],
  exports: [DefaultThemeComponent],
})
export class ThemeModule {}
