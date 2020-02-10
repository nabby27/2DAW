import { Component, OnInit, OnChanges } from '@angular/core';
import { Login } from 'src/app/interfaces/login';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Client } from 'src/app/interfaces/client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {
  
  errorNotLogged: boolean = false;
  client: Login = {
    dni: '',
    password: ''
  }

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    if (localStorage.getItem('dni')) {
      this.router.navigate(['clients']);
    }
  }

  ngOnChanges() {
    this.errorNotLogged= true;
  }

  login() {
    this.loginService.loginAdmin(this.client).subscribe(
      (client: Client) => {
        localStorage.setItem('dni', client.dni);
        localStorage.setItem('user_name', client.name);
        this.router.navigate(['clients']);
      },
      () => {
        this.errorNotLogged = true;
      }
    );
  }

}
