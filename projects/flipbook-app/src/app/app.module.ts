import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlipBookModule } from '../../../flipbook-lib/src/public-api';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FlipBookModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
