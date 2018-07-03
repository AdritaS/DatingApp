import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  model: any = {}

  ngOnInit() {
  }
  register() {
    console.log(this.model)

    // this.authService.login(this.model).subscribe(
    //   data => {
    //     console.log("Success")

    //   }, error => {
    //     console.log("Failed")
    //   }
    // )
  }

  
  cancel() {
    console.log("cancel")
  }
}
