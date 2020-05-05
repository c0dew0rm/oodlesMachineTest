import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  myForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(32), Validators.pattern('[aA-zZ]*')]),
      email: new FormControl('',[Validators.required, Validators.pattern("^([aA-zZ0-9._%+-]+)(@+)([aA0-zZ9]+)(.+)([a-z]{2,4})$")]),
      company: new FormControl('',[Validators.required, Validators.pattern('[aA0-zZ9]*')]),
      subject: new FormControl('',[Validators.required, Validators.maxLength(15)]),
      message: new FormControl('',[Validators.required, Validators.minLength(30), Validators.maxLength(150)])
    });
  }

  onSubmit(form: FormGroup) {
    console.log(this.myForm.value);
    alert("Contact form has been submitted successfully.")
  }

}
