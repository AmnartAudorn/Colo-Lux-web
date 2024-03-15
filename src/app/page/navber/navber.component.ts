import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SessionCookieUtil } from 'src/app/shared/utils/session-cookie.util';

@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.css'],
})
export class NavberComponent {
  constructor(
    public authService: AuthService,
    private readonly _router: Router,

    private readonly _sessionCookie: SessionCookieUtil,
    private readonly _authService: AuthService
  ) {}

  menuActive() {}

  public click(app: any) {
    console.log('TERSET');
    let sumApp = {};
    if (app === 'FACEBOOK') {
      sumApp = {
        sumHome: 0,
        sumContact: 0,
        sumAbout: 0,
        sumRick: 0,
        sumFacebook: 1,
        sumLine: 0,
        sumWechat: 0,
      };
    } else if (app === 'LINE') {
      sumApp = {
        sumHome: 0,
        sumContact: 0,
        sumAbout: 0,
        sumRick: 0,
        sumFacebook: 0,
        sumLine: 1,
        sumWechat: 0,
      };
    } else if (app === 'WECHAT') {
      sumApp = {
        sumHome: 0,
        sumContact: 0,
        sumAbout: 0,
        sumRick: 0,
        sumFacebook: 0,
        sumLine: 0,
        sumWechat: 1,
      };
    }

    this._authService.click(sumApp).subscribe(() => {});
  }

  public home() {
    console.log('TEST');
    this._router.navigate(['/home']);
  }

  public about() {
    this._router.navigate(['/about']);
  }

  public appointment() {
    this._router.navigate(['/appointment']);
  }
}
