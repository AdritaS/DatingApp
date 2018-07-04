import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

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
        console.log("Success")

      }, error => {
        console.log("Failed")
      }
    )
  }


  cancel() {
    console.log("cancel")
    this.cancelRegister.emit(false);
  }
}
