import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {NgxTypedJsModule} from 'ngx-typed-js';

import {NgsRevealModule} from 'ngx-scrollreveal';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxTypedJsModule,
    NgsRevealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
