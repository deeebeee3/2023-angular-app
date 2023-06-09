import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { LoginForm, RegisterForm } from '../types/Auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root', // available everywhere
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  passwordMatched: boolean = true;

  constructor(private router: Router) {}

  login(form: LoginForm) {
    //console.log(this.form);
    if (this.isLoading) return;
    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.isAuthenticated = true;
        console.log('Login success');
        this.router.navigate(['']); /* navigate to baseUrl / homepage */
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        this.isAuthenticated = false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  register(form: RegisterForm) {
    //console.log(this.form);
    if (this.isLoading) return;
    this.isLoading = true;

    if (form.password !== form.confirm_password) {
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential);
        this.isAuthenticated = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        this.isAuthenticated = false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        this.router.navigate(['login']); /* navigate to login page */
        this.isAuthenticated = false;
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
