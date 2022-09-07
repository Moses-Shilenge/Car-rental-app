import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  constructor(private userService: UserService) { }

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  ngOnInit(): void {
  }

  create() {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    console.log(this.form);

    this.userService.post(this.form.value).subscribe(res => {
      console.log(res);
    });
  }

}
