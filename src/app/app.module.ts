import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { NavberComponent } from './page/navber/navber.component';
import { FooterComponent } from './page/footer/footer.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { AppointmentComponent } from './page/appointment/appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './page/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavberComponent,
    FooterComponent,
    AboutUsComponent,
    AppointmentComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
