import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  register = false;
  isLogin = false;

  form: FormGroup;
  clicked = false;

  constructor(private route: Router) {
    this.form = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  login() {
    if (this.form.valid) {
      this.isLogin = true;
      setTimeout(() => {
        this.isLogin = false;
        this.route.navigate(['/home']);
      }, 3000);
    }
  }

}
