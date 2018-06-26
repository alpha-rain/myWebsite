import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('contact submit:');
    console.log(form.value.name);
    const contactInfo: ContactInfo =  new ContactInfo(form.value.name, form.value.email, form.value.subject, form.value.message);
    this.contactService.sendEmail(contactInfo);
    console.log(form);
  }



}

export class ContactInfo {

  constructor(name, email, subject, message) {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.message = message;
  }

  name: string;
  email: string;
  subject: string;
  message: string;
}


