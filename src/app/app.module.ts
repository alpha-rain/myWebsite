import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ParallaxModule } from 'ngx-parallax';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { MyOwnCustomMaterialModule } from './app.material';
import { routing } from './app.routing';

/* services */
import { ContactService } from './services/contact.service';

/* components */
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { MenubarComponent } from './shared/menubar/menubar.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MenubarComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    routing,
    ParallaxModule,
    Angular2FontawesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [ContactService,
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
