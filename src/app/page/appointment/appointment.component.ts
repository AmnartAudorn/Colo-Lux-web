import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Interfaces/product-Interfaces';
import { AuthService } from 'src/app/service/auth.service';
import { SessionCookieUtil } from 'src/app/shared/utils/session-cookie.util';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  public product: IProduct[] = [];

  public myGroup = new FormGroup({
    name: new FormControl(),
    nickName: new FormControl(),
    birthday: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
    price: new FormControl(),
  });

  constructor(
    public authService: AuthService,
    private readonly _router: Router,

    private readonly _sessionCookie: SessionCookieUtil,
    private readonly _authService: AuthService
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  // public checkAuth() {
  //   if (!this._sessionCookie.getAccessToken())
  //     this._router.navigate(['appointment']);
  // }

  public getProduct() {
    this._authService.getAllProduct().subscribe((result) => {
      this.product = result;
    });
  }

  public selectProduct(product: IProduct) {
    console.log(product.price);
    this.myGroup.controls.price.setValue(product.price);
  }

  public createAppointment() {
    this._authService.createAppointment(this.myGroup.value).subscribe(() => {
      console.log(this.myGroup.value);
    });
  }
}
