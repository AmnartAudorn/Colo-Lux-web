import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SessionCookieUtil } from 'src/app/shared/utils/session-cookie.util';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  constructor(
    public authService: AuthService,
    private readonly _router: Router,

    private readonly _sessionCookie: SessionCookieUtil,
    private readonly _authService: AuthService
  ) { }
  ngOnInit(): void {
    this.click();
  }


  public click() {
    const body = {
      "sumHome": 0,
      "sumContact": 0,
      "sumAbout": 1,
      "sumRick": 0,
      "sumFacebook": 0,
      "sumLine": 0,
      "sumWechat": 0
  }

    this._authService.click(body).subscribe(() => { });
  }
}
