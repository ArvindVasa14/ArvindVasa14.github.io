import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AreaOfIntrestCardComponent } from './area-of-intrest-card/area-of-intrest-card.component';
import { MyLatestProjectsCardComponent } from './my-latest-projects-card/my-latest-projects-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import { PdfDownloadService } from './pdf-download-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AreaOfIntrestCardComponent,
    MyLatestProjectsCardComponent,
    NavbarComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [PdfDownloadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
