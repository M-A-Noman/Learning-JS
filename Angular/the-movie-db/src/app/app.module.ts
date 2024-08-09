import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeModule } from './feature/home/home.module';
import { MovieModule } from './feature/movie/movie.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './core/layout/component/header/header.component';
import { LanguageSelectorComponent } from './core/layout/component/language-selector/language-selector.component';
import { LayoutComponent } from './core/layout/layout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.inctercptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoreModule } from './core/core.module';
import { CoreRoutingModule } from './core/core.routing.module';
import { FeatureModule } from './feature/feature.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    CoreModule,
    FeatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
