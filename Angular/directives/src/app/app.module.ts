import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { basicHighlighterDirectives } from './basic-highlighter/basic-highlighter.directives';
import { BetterDirectivesDirective } from './better-directives/betterdirectives.directives';

@NgModule({
  declarations: [
    AppComponent,
    basicHighlighterDirectives,
    BetterDirectivesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
