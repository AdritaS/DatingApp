import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import * as alertify from 'alertifyjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  model: any = {}

  ngOnInit() {
  }


  login() {
    console.log(this.model)

    this.authService.login(this.model).subscribe(
      data => {
        alertify.success("Logged In Successfully");

      }, error => {
        alertify.error('Failed to log in');
      }, () => {
        this.router.navigate(['/members'])
      })
  }

  Logout() {
    this.authService.userToken = null
    localStorage.removeItem("userToken");
    console.log("Logged Out")
    alertify.message("Logged Out")
    this.router.navigate(['/home'])
    
  }

  loggedIn() {
    console.log(this.authService.loggedIn())
     return this.authService.loggedIn1()
  }
}
