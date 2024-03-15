import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SessionCookieUtil } from 'src/app/shared/utils/session-cookie.util';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent {
  private countRiskNo: any;
  constructor(
    public authService: AuthService,
    private readonly _router: Router,

    private readonly _sessionCookie: SessionCookieUtil,
    private readonly _authService: AuthService
  ) {}

  ngOnInit() {
    // location.reload();
    this.click();
  }

  public appointment() {
    this._router.navigate(['/appointment']);
  }

  public countRisk() {
    this._router.navigate(['/detail']);
  }

  public click() {
    const body = {
      sumHome: 1,
      sumContact: 0,
      sumAbout: 0,
      sumRick: 0,
      sumFacebook: 0,
      sumLine: 0,
      sumWechat: 0,
    };

    this._authService.click(body).subscribe(() => {});
  }
}
