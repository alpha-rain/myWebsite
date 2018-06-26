import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ContactInfo } from '../pages/contact/contact.component';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // constructor() { }
  constructor(private http: HttpClient, @Inject(Window) private _window: Window) { }

  sendEmail(data: ContactInfo) {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    this.http.post(`http://${this._window.location.hostname}:${this._window.location.port}/api/email`,
    JSON.stringify(data),
    httpOptions).subscribe(
      res => {
        console.log(res);
        // const response = res.text();
      }
    );
  }
}
