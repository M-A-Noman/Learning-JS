import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core.routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/component/header/header.component';
import { LanguageSelectorComponent } from './layout/component/language-selector/language-selector.component';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthInterceptor } from './interceptors/auth.inctercptor';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    LanguageSelectorComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
    
  ],
  exports:[
    LayoutComponent,
    HeaderComponent,
    LanguageSelectorComponent
  ],
  providers:[
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
