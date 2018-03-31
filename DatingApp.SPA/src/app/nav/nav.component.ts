import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService) { }

  model: any = {}

  ngOnInit() {
  }


  login() {
    console.log(this.model)

    this.authService.login(this.model).subscribe(
      data => {
        console.log("Success")

      }, error => {
        console.log("Failed")
      }
    )
  }
}
