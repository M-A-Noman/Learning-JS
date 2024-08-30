import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TestComponent } from './test/test.component';
import { MaterialModule } from './material.module';
import { RattingComponent } from './shared/ratting/ratting.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { PostModule } from './post/post.module';
import { SharedModule } from './shared/shared.module';
import { ImageOverlayComponent } from './image-overlay/image-overlay.component';
// import {ThemeModule} from '~@angular/material/theming'


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    ImageOverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    PostModule,

    MaterialModule,

    StoreModule.forRoot({}, {}),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode(),autoPause:true}),

    EffectsModule.forRoot([]),
      SharedModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
