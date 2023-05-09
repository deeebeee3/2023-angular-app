import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/types/Auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: '',
  };

  passwordMatched: boolean = true;

  //constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  submit() {
    //this.authService.register(this.form);
    console.log(this.form);
  }

  isLoading() {
    //return this.authService.isLoading;
    return false;
  }
}
