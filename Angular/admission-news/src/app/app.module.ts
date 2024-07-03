import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';
import { AdmissionCircularModule } from './admission-circular/admission-circular.module';
import { ResultModule } from './result/result.module';
import { FooterComponent } from './footer/footer.component';
import { FooterModule } from './footer/footer.module';
import { AdmissionFormModule } from './admission-form/admission-form.module';

import { AdmissionResultModule } from './admission-result/admission-result.module';
import { PaymentInstructionModule } from './payment-instruction/payment-instruction.module';
import { PostsModule } from './posts/posts.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {AngularFireModule } from '@angular/fire/compat'
import { environment } from '../../environment/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,

    
    AppRoutingModule,

    HomeModule,
    AdmissionCircularModule,
    AdmissionFormModule,
    AdmissionResultModule,
    PaymentInstructionModule,
    ResultModule,
    FooterModule,
    PostsModule,
    AngularFireModule.initializeApp(environment.firebase)
    
  ],
  providers: [
    // provideFirebaseApp(() => initializeApp({"projectId":"admission-news","appId":"1:323941636622:web:eab93cd2e6f5eb182c3a5f","storageBucket":"admission-news.appspot.com","apiKey":"AIzaSyBGVRSBQFjR52AQmXzKUqlChLFPfuRfgtU","authDomain":"admission-news.firebaseapp.com","messagingSenderId":"323941636622","measurementId":"G-ZSLK9EKNK1"})),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
