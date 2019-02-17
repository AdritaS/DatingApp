import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() valuesFromHome: any
  @Output() cancelRegister = new EventEmitter()
  constructor(private authService: AuthService) { }
  model: any = {}

  ngOnInit() {
  }
  register() {
    console.log(this.model)

    this.authService.register(this.model).subscribe(
      data => {
        alertify.success("Registered Successfully");

      }, error => {
        alertify.error(error);
      }
    )
  }


  cancel() {
    console.log("cancel")
    this.cancelRegister.emit(false);
  }
}
