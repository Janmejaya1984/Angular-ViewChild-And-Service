import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registerForm!: FormGroup;
  submitted!:boolean;
  
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', {updateOn:"blur",validators:[Validators.required]}],
      lastName: ['', {updateOn:"blur",validators:[Validators.required]}],
      address: this.formBuilder.group({
        street: ['',Validators.required],
        zip: ['',Validators.required],
        city: ['',Validators.required]
      }),
      email: ['', validateEmail]
    });
  }
  
}
function validateEmail(c: FormControl): any {
  let EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return EMAIL_REGEXP.test(c.value) ? null : {
    emailInvalid: {
      message: "Invalid Format!"
    }
  };
}
