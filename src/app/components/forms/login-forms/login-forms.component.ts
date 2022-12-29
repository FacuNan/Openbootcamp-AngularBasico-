import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-forms',
  templateUrl: './login-forms.component.html',
  styleUrls: ['./login-forms.component.css']
})
export class LoginFormsComponent implements OnInit{
constructor(private authService: AuthService ){}
  ngOnInit(): void {
  this.authService.login('eve.holt@reqres.in','cityslicka' ).subscribe(
    function (response) {
    console.log(response);
    sessionStorage.setItem('token', response.token);
  },(error)=> console.error('Usted no esta logeado,' + error), ()=>console.info('Usted esta logeado'))
  }

}
