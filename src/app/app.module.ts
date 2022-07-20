import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {AngularFireModule} from "@angular/fire/compat";
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {AuthModalComponent} from "./components/auth-modal/auth-modal.component";
import {AdminModule} from "./domains/admin/admin.module";
import {ModalService} from "./services/modal.service";
import {AuthService} from "./services/auth.service";
import { HomeComponent } from './domains/home/home.component';
import {AdminGuard} from "./guards/admin.guard";
import {AuthInterceptor} from "./interceptors/auth.interceptor";



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent,
    AuthModalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'ru'
    }),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDsAMMLpUwNVPo1nnFLRoKaGberD96vTYc",
      authDomain: "global-angular-spa.firebaseapp.com",
      databaseURL: "https://global-angular-spa-default-rtdb.firebaseio.com",
      projectId: "global-angular-spa",
      storageBucket: "global-angular-spa.appspot.com",
      messagingSenderId: "342278397584",
      appId: "1:342278397584:web:2e7ad7f2254363afe5c215",
      measurementId: "G-HKVHY5M5WV"
    }),
    AdminModule
  ],
  providers: [
    ModalService,
    AuthService,
    AdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
