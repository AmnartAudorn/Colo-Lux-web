import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { NavberComponent } from './page/navber/navber.component';
import { FooterComponent } from './page/footer/footer.component';
import { AboutUsComponent } from './page/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavberComponent,
    FooterComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
