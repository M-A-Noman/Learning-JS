import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { HomeRouteModule } from './home/home.route.module';
import { AdmissionCircularComponent } from './admission-circular/admission-circular.component';
import { AdmissionCircularRouteModule } from './admission-circular/admission-circular.route.module';
import { AdmissionCircularModule } from './admission-circular/admission-circular.module';
import { ResultComponent } from './result/result.component';
import { ResultModule } from './result/result.module';
import { ResultRouteModule } from './result/result.route.module';
import { FooterComponent } from './footer/footer.component';
import { FooterRouteModule } from './footer/footer.route.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdmissionCircularComponent,
    ResultComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

      HeaderModule,
      HomeModule,
      AdmissionCircularModule,
      ResultModule,
      FooterModule,
      HomeRouteModule,
      AdmissionCircularRouteModule,
      FooterRouteModule,
      ResultRouteModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
