import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/service/auth.service';
import { SessionCookieUtil } from 'src/app/shared/utils/session-cookie.util';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  public myGroup = new FormGroup({
    name: new FormControl(),
    nickName: new FormControl(),
    datepicker: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
  });

  constructor(
    public authService: AuthService,
    private readonly _router: Router,

    private readonly _sessionCookie: SessionCookieUtil,
    private readonly _authService: AuthService
  ) {}

  ngOnInit() {
    this.checkAuth();
  }

  public checkAuth() {
    if (!this._sessionCookie.getAccessToken())
      this._router.navigate(['appointment']);
  }

  public createAppointment() {
    this._authService
      .createAppointment(this.myGroup.value)
      .subscribe((token) => {
        if (token) {
          console.log(this.myGroup.value);
          // this._router.navigate(['/home']);
        }
      });
  }
}
