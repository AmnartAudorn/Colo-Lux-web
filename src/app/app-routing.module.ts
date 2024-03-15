import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { AppointmentComponent } from './page/appointment/appointment.component';
import { DetailComponent } from './page/detail/detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: IndexComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'detail', component: DetailComponent },
  { path: '**', component: IndexComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
