import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	title: string;
	 contactForm :FormGroup;
  constructor( private fb: FormBuilder) {
  this.createForm();
   }

  ngOnInit() {
  this.title='contact';
  }
  
  createForm(){
  this.contactForm= this.fb.group({
      name: ['',Validators.required],
      mobile:['',Validators.minLength(4)],
      email:['',Validators.email],
      message:''
    });

  }
  onSubmit(){
  alert('success!');
  }

}
