import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.name = localStorage.getItem('user_name');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
