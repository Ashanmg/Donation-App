import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonationEventComponentComponent } from './donation-event-component/donation-event-component.component';
import { DonationPaymentComponent } from './donation-payment/donation-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    DonationEventComponentComponent,
    DonationPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
