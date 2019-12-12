import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  onClickLogin(form: NgForm) {

    if (form.invalid) {
      return 'Please fill all the details';
    }

    const emailId = form.value.emailId;
    const password = form.value.password;

    this.authenticationService.login(emailId, password).subscribe((res) => {
      console.log(JSON.stringify(res));
    });
    console.log(form);
  }

}
