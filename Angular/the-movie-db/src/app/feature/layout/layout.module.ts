import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../../shared/shared.module';
import { LanguageSelectorComponent } from './component/language-selector/language-selector.component';
       


@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    LanguageSelectorComponent,

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ],
  exports:[
    HeaderComponent,
    LayoutComponent,
  ]
})
export class LayoutModule { }
