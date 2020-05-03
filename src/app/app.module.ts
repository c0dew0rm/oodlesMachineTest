import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './intro/header/header.component';
import { ServicesComponent } from './services/services.component';
import { TrendsComponent } from './trends/trends.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HeaderComponent,
    ServicesComponent,
    TrendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
