import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TestComponent } from './test/test.component';
import { MaterialModule } from './material.module';
import { RattingComponent } from './ratting/ratting.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
// import {ThemeModule} from '~@angular/material/theming'


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RattingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MaterialModule,

    StoreModule.forRoot({}, {})

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
