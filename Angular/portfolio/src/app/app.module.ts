import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ProjectsModule } from './projects/projects.module';
import { FooterModule } from './footer/footer.module';
import { WrapperComponent } from './shared/wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    AboutModule,
    ProjectsModule,
    FooterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
