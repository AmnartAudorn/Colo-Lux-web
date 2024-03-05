import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Interfaces/product-Interfaces';
import { AuthService } from 'src/app/service/auth.service';
import { SessionCookieUtil } from 'src/app/shared/utils/session-cookie.util';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
})
export class AppointmentComponent implements OnInit {
  public product: IProduct[] = [];

  public myGroup = new FormGroup({
    name: new FormControl(),
    nickName: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    details: new FormControl(),
  });

  constructor(
    public authService: AuthService,
    private readonly _router: Router,

    private readonly _sessionCookie: SessionCookieUtil,
    private readonly _authService: AuthService
  ) { }

  ngOnInit() {
    this.click();
  }

  public createAppointment() {
    this._authService.createAppointment(this.myGroup.value).subscribe(() => {
      console.log(this.myGroup.value);
    });
  }

  public click() {
    const body = {
      "sumHome": 0,
      "sumContact": 1,
      "sumAbout": 0,
      "sumRick": 0,
      "sumFacebook": 0,
      "sumLine": 0,
      "sumWechat": 0
  }

    this._authService.click(body).subscribe(() => { });
  }
}
