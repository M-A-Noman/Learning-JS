import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StaticSearchComponent } from './feature/home/static-search/static-search.component';
import { HomeModule } from './feature/home/home.module';
import { HeaderComponent } from './feature/layout/component/header/header.component';
import { LanguageSelectorComponent } from './feature/layout/component/language-selector/language-selector.component';
import { LayoutComponent } from './feature/layout/layout.component';
import { MovieModule } from './feature/movie/movie.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    LanguageSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MovieModule,
    HomeModule,
    SharedModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
