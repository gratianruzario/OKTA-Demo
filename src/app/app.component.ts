import { Component } from '@angular/core';
import {OAuthService,AuthConfig} from 'angular-oauth2-oidc'

export const authConfig:AuthConfig ={
issuer:'https://dev-09582500.okta.com/oauth2/default',
redirectUri:window.location.origin,
clientId:'0oabl08smhufWckOI5d6'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Okta-Demo';
  name='Message From Parent component'
  childMessage:string;

  public constructor(private oauthservice:OAuthService)
  {
    this.oauthservice.configure(authConfig);
    this.oauthservice.loadDiscoveryDocumentAndTryLogin();
  }

  login(){
    this.oauthservice.initImplicitFlow();
  }
  logout(){
    this.oauthservice.logOut();
  }
  get getUserName(){
    const claims = this.oauthservice.getIdentityClaims()
    if(!claims)
    {
      return null;
    }
    return claims['name']
  }

}
